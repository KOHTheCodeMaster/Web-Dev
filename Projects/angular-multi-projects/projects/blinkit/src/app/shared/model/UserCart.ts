import {User} from "./User";
import {Product} from "./product.model";

export interface UserCart {
    id: number,
    user: User,
    products: Product[];
    totalPrice: number;
    totalQty: number;
}
