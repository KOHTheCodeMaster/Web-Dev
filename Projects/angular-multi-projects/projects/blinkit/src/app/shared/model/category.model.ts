export class Category {

    private id: number;
    private name: string;
    // private categoryDescription: string;
    // private categoryImage: string;


    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

/*
    public getProductListByCategoryName(categoryName: string): Product[] {
        let productList: Product[] = [];

        switch (categoryName) {
            case'Dairy, Bread & Eggs':
                productList = [
                    new Product(1, 'Saras Toned Fresh Milk', 26, 2),
                    new Product(2, 'Amul Taaza Toned Fresh Milk', 52, 2),
                    new Product(3, 'Amul Gold Full Cream Fresh Milk', 33, 2),
                    new Product(4, 'Saras Gold Full Cream Fresh Milk', 33, 2),
                    new Product(5, 'Amul Moti Toned Milk (90 Days Shelf Life)', 33, 2),
                    new Product(6, 'Gajar Halwa Combo', 50, 2),
                    new Product(7, 'Amul Taaza Toned Milk', 16, 2),
                    new Product(8, 'Amul Taaza Homogenised Toned Milk', 74, 2),
                    new Product(9, 'Amul Gold Milk', 80, 2),
                    new Product(10, 'Amul Lactose Free Milk', 25, 2),
                ];
                break;

            case 'Snacks & Munchies':
                productList = [
                    new Product(1, "Uncle Chipps Spicy Treat Flavour Potato Chips", 20, 2),
                    new Product(2, "Kurkure Masala Munch Crisps - Pack of 3", 54, 2),
                    new Product(3, "Lay's India's Magic Masala Potato Chips", 30, 2),
                    new Product(4, "Kettle Studio Gourmet Potato Chips Spiced with Tabasco Sauce Flavour", 99, 2),
                    new Product(5, "Lay's West Indies Hot n Sweet Chilli Flavour Potato Chips", 20, 2),
                    new Product(6, "Lay's American Style Cream & Onion Potato Chips", 30, 2),
                    new Product(7, "Kurkure Puffcorn Yummy Cheese Puffs - Pack of 3", 54, 2),
                    new Product(8, "Lay's Chile Limon Flavour Potato Chips", 20, 2),
                    new Product(9, "Lay's Crispz Herb & Onion Potato Chips", 20, 2),
                    new Product(10, "Bingo Tedhe Medhe Masala Tadka Crisps - Pack of 3", 40, 2),
                ];
                break;

            case 'Paan Corner':
                productList = [
                    new Product(1, 'Brown Ripper Rolling Paper 32 Leaves + 32 Roaches Stash Pro', 120, 1),
                    new Product(2, 'Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Unbleached) - Mozo', 90, 1),
                    new Product(3, 'Brown Rolling Paper Cones - Stash Pro', 90, 1),
                    new Product(4, 'Ultimate Rolling Paper with Filter Tips & Crushing Tray (King Size, Bleached) - Mozo', 80, 1),
                    new Product(5, 'Colour Roach - Stash Pro', 50, 1),
                    new Product(6, 'White Ripper Tipper Rolling Paper with Roaches - Stash Pro', 100, 1),
                    new Product(7, 'Brown Rolling Paper + Roach with Crushing Tray - Stash Pro', 222, 1),
                    new Product(8, 'White Rolling Paper Cones - Stash Pro', 90, 1),
                    new Product(9, 'Ripper Tipper Brown Rolling Paper (Small) by Stash Pro', 120, 1),
                    new Product(10, 'White Rolling Paper (Small) - Stash Pro', 45, 1),
                ];
                break;

            case 'Atta':
                productList = [
                    new Product(1, 'Fortune Chakki Fresh (100% Atta, 0% Maida) Atta', 220, 10),
                    new Product(2, 'Aashirvaad Shudh Chakki Atta (100% Atta, 0% Maida) (5 kg)', 231, 10),
                    new Product(3, 'Laxmi Bhog Atta (10 kg)', 418, 10),
                    new Product(4, 'Laxmi Bhog Atta', 222, 10),
                    new Product(5, 'Aashirvaad Shudh Chakki Atta (100% Atta, 0% Maida) (10 kg)', 453, 10),
                    new Product(6, 'Aashirvaad Multigrain Atta', 317, 10),
                    new Product(7, 'Aashirvaad Select 100% MP Sharbati Atta', 304, 10),
                    new Product(8, 'Whole Farm Chakki Atta (100% Atta, 0% Maida)', 206, 10),
                    new Product(9, 'Whole Farm Chakki Atta (100% Atta, 0% Maida)', 396, 10),
                    new Product(10, 'Fortune Chakki Fresh (100% Atta, 0% Maida) Atta (10 kg)', 413, 10),
                ];
                break;

            case 'Tea':
                productList = [
                    new Product(1, 'Brooke Bond Red Label Natural Care Tea', 550, 9),
                    new Product(2, 'Brooke Bond Taaza Tea 250 g', 60, 9),
                    new Product(3, 'Brooke Bond Red Label Tea', 45, 9),
                    new Product(4, 'Wagh Bakri Premium Tea (250 g)', 150, 9),
                    new Product(5, 'Tata Tea Premium Tea', 140, 9),
                    new Product(6, 'Brooke Bond Taj Mahal Tea', 65, 9),
                    new Product(7, 'Tata Tea Gold', 297, 9),
                    new Product(8, 'Brooke Bond Taj Mahal Tea 250 g', 180, 9),
                    new Product(9, 'Tata Tea Agni Special Blend Tea', 235, 9),
                    new Product(10, 'Brooke Bond Taj Mahal Tea 500 g', 325, 9),
                ];
                break;

            default:
                return [];
        }

        return productList;
    }
*/

    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

}
