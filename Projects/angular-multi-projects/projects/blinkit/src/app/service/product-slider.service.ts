import {Injectable} from '@angular/core';
import {Category} from "../shared/model/category.model";
import {Product} from "../shared/model/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductSliderService {

    private categoryList !: Category[];
    private categoryToproductListMap!: Map<number, Product[]>;
    private productList!: Product[];

    constructor() {

        this.initCategoryList();
        this.initProductList();
        this.initCategoryToProductListMap();

    }

    initCategoryToProductListMap() {
        this.categoryToproductListMap = new Map<number, Product[]>();
        this.categoryList.forEach(category => {
            this.categoryToproductListMap.set(category.getId(), this.getProductListByCategoryId(category.getId()));
        });
    }

    initCategoryList() {
        this.categoryList = [
            new Category(1, 'Dairy, Bread & Eggs'),
            new Category(2, 'Snacks & Munchies'),
            new Category(3, 'Atta, Rice & Dal'),
            /*
                new Category(2, 'Fruits & Vegetables'),
                new Category(4, 'Cold Drinks & Juices'),
                new Category(6, 'Breakfast & Instant Food'),
                new Category(7, 'Sweet Tooth'),
                new Category(8, 'Bakery & Biscuits'),
                new Category(9, 'Tea, Coffee & Health Drink'),
                new Category(11, 'Masala, Oil & More'),
                new Category(12, 'Sauces & Spreads'),
                new Category(13, 'Chicken, Meat & Fish'),
                new Category(14, 'Organic & Healthy Living'),
                new Category(15, 'Baby Care'),
                new Category(16, 'Pharma & Wellness'),
                new Category(17, 'Clening Essentials'),
                new Category(18, 'Home & Office'),
                new Category(19, 'Personal Care'),
                new Category(20, 'Pet Care')
            */
        ];
    }

    initProductList() {

        let productList = [];

        // Dairy, Bread & Eggs
        productList.push(new Product(1, 1, 'Saras Toned Fresh Milk', 26));
        productList.push(new Product(2, 1, 'Amul Taaza Toned Fresh Milk', 52));
        productList.push(new Product(3, 1, 'Amul Gold Full Cream Fresh Milk', 33));
        productList.push(new Product(4, 1, 'Saras Gold Full Cream Fresh Milk', 33));
        productList.push(new Product(5, 1, 'Amul Moti Toned Milk (90 Days Shelf Life)', 33));
        productList.push(new Product(6, 1, 'Gajar Halwa Combo', 50));
        productList.push(new Product(7, 1, 'Amul Taaza Toned Milk', 16));
        productList.push(new Product(8, 1, 'Amul Taaza Homogenised Toned Milk', 74));
        productList.push(new Product(9, 1, 'Amul Gold Milk', 80));
        productList.push(new Product(10, 1, 'Amul Lactose Free Milk', 25));

        // Snacks & Munchies
        productList.push(new Product(1, 2, "Uncle Chipps Spicy Treat Flavour Potato Chips", 20));
        productList.push(new Product(2, 2, "Kurkure Masala Munch Crisps - Pack of 3", 54));
        productList.push(new Product(3, 2, "Lay's India's Magic Masala Potato Chips", 30));
        productList.push(new Product(4, 2, "Kettle Studio Gourmet Potato Chips Spiced with Tabasco Sauce Flavour", 99));
        productList.push(new Product(5, 2, "Lay's West Indies Hot n Sweet Chilli Flavour Potato Chips", 20));
        productList.push(new Product(6, 2, "Lay's American Style Cream & Onion Potato Chips", 30));
        productList.push(new Product(7, 2, "Kurkure Puffcorn Yummy Cheese Puffs - Pack of 3", 54));
        productList.push(new Product(8, 2, "Lay's Chile Limon Flavour Potato Chips", 20));
        productList.push(new Product(9, 2, "Lay's Crispz Herb & Onion Potato Chips", 20));
        productList.push(new Product(10, 2, "Bingo Tedhe Medhe Masala Tadka Crisps - Pack of 3", 40));

        // Paan Corner
        productList.push(new Product(1, 3, 'Brown Ripper Rolling Paper 32 Leaves + 32 Roaches Stash Pro', 120));
        productList.push(new Product(2, 3, 'Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Unbleached) - Mozo', 90));
        productList.push(new Product(3, 3, 'Brown Rolling Paper Cones - Stash Pro', 90));
        productList.push(new Product(4, 3, 'Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Bleached) - Mozo', 80));
        productList.push(new Product(5, 3, 'Colour Roach - Stash Pro', 50));
        productList.push(new Product(6, 3, 'White Ripper Tipper Rolling Paper with Roaches - Stash Pro', 100));
        productList.push(new Product(7, 3, 'Brown Rolling Paper + Roach with Crushing Tray - Stash Pro', 222));
        productList.push(new Product(8, 3, 'White Rolling Paper Cones - Stash Pro', 90));
        productList.push(new Product(9, 3, 'Ripper Tipper Brown Rolling Paper (Small) by Stash Pro', 120));
        productList.push(new Product(10, 3, 'White Rolling Paper (Small) - Stash Pro', 45));

        // Atta
        productList.push(new Product(1, 4, 'Fortune Chakki Fresh (100% Atta, 0% Maida) Atta', 220));
        productList.push(new Product(2, 4, 'Aashirvaad Shudh Chakki Atta (100% Atta, 0% Maida) (5 kg)', 231));
        productList.push(new Product(3, 4, 'Laxmi Bhog Atta (10 kg)', 418));
        productList.push(new Product(4, 4, 'Laxmi Bhog Atta', 222));
        productList.push(new Product(5, 4, 'Aashirvaad Shudh Chakki Atta (100% Atta, 0% Maida) (10 kg)', 453));
        productList.push(new Product(6, 4, 'Aashirvaad Multigrain Atta', 317));
        productList.push(new Product(7, 4, 'Aashirvaad Select 100% MP Sharbati Atta', 304));
        productList.push(new Product(8, 4, 'Whole Farm Chakki Atta (100% Atta, 0% Maida)', 206));
        productList.push(new Product(9, 4, 'Whole Farm Chakki Atta (100% Atta, 0% Maida)', 396));
        productList.push(new Product(10, 4, 'Fortune Chakki Fresh (100% Atta, 0% Maida) Atta (10 kg)', 413));

        // Tea, Coffee & Health Drink
        productList.push(new Product(1, 5, 'Brooke Bond Red Label Natural Care Tea', 550));
        productList.push(new Product(2, 5, 'Brooke Bond Taaza Tea 250 g', 60));
        productList.push(new Product(3, 5, 'Brooke Bond Red Label Tea', 45));
        productList.push(new Product(4, 5, 'Wagh Bakri Premium Tea (250 g)', 150));
        productList.push(new Product(5, 5, 'Tata Tea Premium Tea', 140));
        productList.push(new Product(6, 5, 'Brooke Bond Taj Mahal Tea', 65));
        productList.push(new Product(7, 5, 'Tata Tea Gold', 297));
        productList.push(new Product(8, 5, 'Brooke Bond Taj Mahal Tea 250 g', 180));
        productList.push(new Product(9, 5, 'Tata Tea Agni Special Blend Tea', 235));
        productList.push(new Product(10, 5, 'Brooke Bond Taj Mahal Tea 500 g', 325));

        this.productList = productList;

    }


    public getProductListByCategoryId(id: number) {
        return this.productList.filter(product => product.getCategoryId() === id);
    }

    //  Getters
    //  -------

    public getCategoryList(): Category[] {
        return this.categoryList;
    }

}
