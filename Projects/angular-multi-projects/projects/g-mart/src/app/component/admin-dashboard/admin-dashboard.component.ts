import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {OrderService} from "../../service/order.service";
import {Product} from "../../shared/model/product.model";
import {Order} from "../../shared/model/order.model";
import {MultipleChargesModel} from "../../shared/model/multiple-charges.model"; // Added import
import {Subscription} from "rxjs";
import {DataLoaderService} from "../../service/data-loader.service";

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [NgIf, FormsModule, CommonModule],
    templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

    // Products
    allProducts: Product[] = [];
    displayedProducts: Product[] = [];
    productSearchTerm: string = '';
    productCurrentPage: number = 1;
    productItemsPerPage: number = 10;
    productTotalPages: number = 1;
    editingProduct: Product | null = null;
    productUpdateForm: {
        name: string;
        price: number;
        productUnitValue: number; /* add other editable fields */
    } | null = null;
    productSortColumn: string = 'name'; // Default sort column
    productSortDirection: 'asc' | 'desc' = 'asc'; // Default sort direction

    // Orders
    allOrders: Order[] = [];
    displayedOrders: Order[] = [];
    orderSearchTerm: string = '';
    orderCurrentPage: number = 1;
    orderItemsPerPage: number = 10;
    orderTotalPages: number = 1;
    editingOrder: Order | null = null;
    orderUpdateForm: { status: string } = {status: ''};

    // UI State
    activeSection: string = 'dashboard';
    showOrderDetails: boolean = false;
    selectedOrder: Order | null = null;
    protected readonly MultipleChargesModel = MultipleChargesModel; // Added for template access

    private dataLoadedSubscription?: Subscription;

    constructor(public router: Router,
                private productService: ProductService,
                private orderService: OrderService,
                private dataLoaderService: DataLoaderService) {
    }

    ngOnInit(): void {
        // Wait for data to be loaded before initializing products and orders
        this.dataLoadedSubscription = this.dataLoaderService.getDataLoaded$().subscribe((loaded: boolean) => {
            if (loaded) {
                this.loadProducts();
                this.loadOrders();
            }
        });
    }

    ngOnDestroy(): void {
        if (this.dataLoadedSubscription) this.dataLoadedSubscription.unsubscribe();
    }

    loadProducts(): void {
        this.allProducts = this.productService.getAllProductList();
        this.sortProductsBy(this.productSortColumn, false); // Initial sort
        this.updateDisplayedProducts();
    }

    loadOrders(): void {
        // Use all orders for admin dashboard
        this.allOrders = this.orderService.getAllOrders() || [];
        this.updateDisplayedOrders();
    }

    updateDisplayedProducts(): void {
        let filteredProducts = this.allProducts.filter(product =>
            product.getName().toLowerCase().includes(this.productSearchTerm.toLowerCase()) ||
            product.getCategory().getName().toLowerCase().includes(this.productSearchTerm.toLowerCase()) ||
            product.getSubcategory().getName().toLowerCase().includes(this.productSearchTerm.toLowerCase())
        );

        // Sorting logic
        filteredProducts.sort((a, b) => {
            let valA: any;
            let valB: any;

            switch (this.productSortColumn) {
                case 'name':
                    valA = a.getName().toLowerCase();
                    valB = b.getName().toLowerCase();
                    break;
                case 'category':
                    valA = a.getCategory().getName().toLowerCase();
                    valB = b.getCategory().getName().toLowerCase();
                    break;
                case 'subcategory':
                    valA = a.getSubcategory().getName().toLowerCase();
                    valB = b.getSubcategory().getName().toLowerCase();
                    break;
                case 'price':
                    valA = a.getPrice();
                    valB = b.getPrice();
                    break;
                case 'stock': // Assuming stock is represented by productUnitValue for now
                    valA = a.getProductUnitValue();
                    valB = b.getProductUnitValue();
                    break;
                default:
                    return 0;
            }

            if (valA < valB) return this.productSortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return this.productSortDirection === 'asc' ? 1 : -1;

            return 0;
        });

        this.productTotalPages = Math.ceil(filteredProducts.length / this.productItemsPerPage);
        const startIndex = (this.productCurrentPage - 1) * this.productItemsPerPage;
        const endIndex = startIndex + this.productItemsPerPage;
        this.displayedProducts = filteredProducts.slice(startIndex, endIndex);
    }

    updateDisplayedOrders(): void {
        let filteredOrders = this.allOrders.filter(order =>
            order.getOrderNumber().toString().includes(this.orderSearchTerm) ||
            order.getDeliverToAddress().getReceiverName().toLowerCase().includes(this.orderSearchTerm.toLowerCase()) ||
            order.getStatus().toLowerCase().includes(this.orderSearchTerm.toLowerCase())
        );

        this.orderTotalPages = Math.ceil(filteredOrders.length / this.orderItemsPerPage);
        const startIndex = (this.orderCurrentPage - 1) * this.orderItemsPerPage;
        const endIndex = startIndex + this.orderItemsPerPage;
        this.displayedOrders = filteredOrders.slice(startIndex, endIndex);
    }

    // Product Actions
    onProductSearchChange(): void {
        this.productCurrentPage = 1;
        this.updateDisplayedProducts();
    }

    changeProductPage(page: number): void {
        this.productCurrentPage = page;
        this.updateDisplayedProducts();
    }

    sortProductsBy(column: string, toggleDirection: boolean = true): void {
        if (this.productSortColumn === column && toggleDirection) {
            this.productSortDirection = this.productSortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.productSortColumn = column;
            this.productSortDirection = 'asc';
        }
        this.updateDisplayedProducts();
    }

    editProduct(product: Product): void {
        this.editingProduct = product;
        // Ensure all fields to edit are included here
        this.productUpdateForm = {
            name: product.getName(),
            price: product.getPrice(),
            productUnitValue: product.getProductUnitValue(),
            // Initialize other fields from product if they are part of the form
        };
    }

    saveProductChanges(): void {
        if (this.editingProduct && this.productUpdateForm) {
            const index = this.allProducts.findIndex(p => p.getId() === this.editingProduct!.getId());
            if (index !== -1) {
                // Update only the fields present in productUpdateForm
                this.allProducts[index].setName(this.productUpdateForm.name);
                this.allProducts[index].setPrice(this.productUpdateForm.price);
                this.allProducts[index].setProductUnitValue(this.productUpdateForm.productUnitValue);
                // Potentially update other fields if they are in productUpdateForm
                // e.g., this.allProducts[index].setDescription(this.productUpdateForm.description);
            }
            // this.productService.updateProduct(this.allProducts[index]);
            this.updateDisplayedProducts();
            this.cancelEditProduct();
        }
    }

    cancelEditProduct(): void {
        this.editingProduct = null;
        this.productUpdateForm = null;
    }

    // Order Actions
    onOrderSearchChange(): void {
        this.orderCurrentPage = 1;
        this.updateDisplayedOrders();
    }

    changeOrderPage(page: number): void {
        this.orderCurrentPage = page;
        this.updateDisplayedOrders();
    }

    editOrderStatus(order: Order): void {
        this.editingOrder = order;
        this.orderUpdateForm = {status: order.getStatus()};
    }

    saveOrderStatus(): void {
        if (this.editingOrder) {
            const index = this.allOrders.findIndex(o => o.getId() === this.editingOrder!.getId());
            if (index !== -1) {
                this.allOrders[index].setStatus(this.orderUpdateForm.status);
            }
            this.updateDisplayedOrders();
            this.cancelEditOrder();
        }
    }

    cancelEditOrder(): void {
        this.editingOrder = null;
        this.orderUpdateForm = {status: ''};
    }

    // Helper for pagination
    getPageNumbers(totalPages: number): number[] {
        return Array(totalPages).fill(0).map((x, i) => i + 1);
    }

    get totalOrders(): number {
        return this.allOrders.length;
    }

    get totalProducts(): number {
        return this.allProducts.length;
    }

    get recentOrders(): Order[] {
        return this.allOrders.slice(0, 5);
    }

}
