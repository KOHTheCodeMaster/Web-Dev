import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CommonModule, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {OrderService} from "../../service/order.service";
import {Product} from "../../shared/model/product.model";
import {Order} from "../../shared/model/order.model";
import {MultipleChargesModel} from "../../shared/model/multiple-charges.model"; // Added import

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [NgIf, FormsModule, CommonModule],
    templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {

    // Products
    allProducts: Product[] = [];
    displayedProducts: Product[] = [];
    productSearchTerm: string = '';
    productCurrentPage: number = 1;
    productItemsPerPage: number = 10;
    productTotalPages: number = 1;
    editingProduct: Product | null = null;
    productUpdateForm: Product | null = null;

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

    constructor(public router: Router,
                private productService: ProductService,
                private orderService: OrderService) {
    }

    ngOnInit(): void {
        this.loadProducts();
        this.loadOrders();
    }

    loadProducts(): void {
        this.allProducts = this.productService.getAllProductList();
        this.updateDisplayedProducts();
    }

    loadOrders(): void {
        this.allOrders = this.orderService.getOrderList();
        this.updateDisplayedOrders();
    }

    updateDisplayedProducts(): void {
        let filteredProducts = this.allProducts.filter(product =>
            product.getName().toLowerCase().includes(this.productSearchTerm.toLowerCase()) ||
            product.getCategory().getName().toLowerCase().includes(this.productSearchTerm.toLowerCase()) ||
            product.getSubcategory().getName().toLowerCase().includes(this.productSearchTerm.toLowerCase())
        );

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

    editProduct(product: Product): void {
        this.editingProduct = product;
        this.productUpdateForm = Product.clone(product);
    }

    saveProductChanges(): void {
        if (this.editingProduct && this.productUpdateForm) {
            const index = this.allProducts.findIndex(p => p.getId() === this.editingProduct!.getId());
            if (index !== -1) {
                this.allProducts[index].setName(this.productUpdateForm.getName());
                this.allProducts[index].setPrice(this.productUpdateForm.getPrice());
                this.allProducts[index].setProductUnitValue(this.productUpdateForm.getProductUnitValue());
            }
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
