import {CartItem} from "./cart-item.model";
import {MultipleChargesModel} from "./multiple-charges.model";

export class ShoppingCart {

    private cartItems: CartItem[] = [];
    private itemCount: number = 0;
    private tipAmount: number = 0;
    private totalMRP: number = 0;
    private totalDiscount: number = 0;
    private subTotalPrice: number = 0;
    private totalPrice: number = 0;
    private multipleChargesModel: MultipleChargesModel;

    constructor(multipleChargesModel: MultipleChargesModel,
                cartItems?: CartItem[],
                itemCount?: number,
                subTotalPrice?: number,
                totalPrice?: number) {
        this.multipleChargesModel = multipleChargesModel;
        this.cartItems = cartItems ? cartItems : [];                //  default to empty array if not provided
        this.itemCount = itemCount ? itemCount : 0;                 //  default to 0 if not provided
        this.totalMRP = 0;                                          //  default to 0
        this.totalDiscount = 0;                                     //  default to 0
        this.subTotalPrice = subTotalPrice ? subTotalPrice : 0;     //  default to 0 if not provided
        this.totalPrice = totalPrice ? totalPrice : 0;              //  default to 0 if not provided
    }

    getCartItemByProductId(id: number) {
        return this.cartItems.find(cartItem => cartItem.getProduct().getId() === id);
    }

    addCartItem(cartItem: CartItem) {
        this.cartItems.push(cartItem);
        this.incrementCartItem(cartItem);
    }

    private calculateExtraCharges() {
        let extraChargesAmount = 0;

        //  handling charge is always applied
        extraChargesAmount += MultipleChargesModel.HANDLING_CHARGE;
        this.multipleChargesModel.setIsHandlingChargeApplied(true);

        //  delivery charge is applied only if cart sub-total price is less than threshold
        if (this.subTotalPrice < MultipleChargesModel.THRESHOLD_FOR_DELIVERY_CHARGE) {
            extraChargesAmount += MultipleChargesModel.DELIVERY_CHARGE;
            this.multipleChargesModel.setIsDeliveryChargeApplied(true);
        } else this.multipleChargesModel.setIsDeliveryChargeApplied(false);

        //  small cart charge is applied only if total price is less than threshold
        if (this.subTotalPrice < MultipleChargesModel.THRESHOLD_FOR_SMALL_CART) {
            extraChargesAmount += MultipleChargesModel.SMALL_CART_CHARGE;
            this.multipleChargesModel.setIsSmallCartChargeApplied(true);
        } else this.multipleChargesModel.setIsSmallCartChargeApplied(false);

        //  high demand surge charge is applied only if flag is set and sub-total price is less than threshold
        if (this.multipleChargesModel.getCheckHighDemandSurgeChargeFlag() &&
            this.subTotalPrice < MultipleChargesModel.THRESHOLD_FOR_HIGH_DEMAND_SURGE_CHARGE) {
            extraChargesAmount += MultipleChargesModel.HIGH_DEMAND_SURGE_CHARGE;
            this.multipleChargesModel.setIsHighDemandSurgeChargeApplied(true);
        } else this.multipleChargesModel.setIsHighDemandSurgeChargeApplied(false);

        //  tip amount is applied only if manually opted-in
        if (this.multipleChargesModel.getIsTipApplied()) extraChargesAmount += this.tipAmount;

        return extraChargesAmount;
    }

    incrementCartItem(cartItem: CartItem) {
        cartItem.incrementQuantity();
        this.itemCount += 1;
        this.totalMRP += cartItem.getProduct().getPrice();
        this.totalDiscount += cartItem.getProduct().getDiscount();
        this.subTotalPrice = this.totalMRP - this.totalDiscount;
        this.reCalcTotalPrice();
    }

    decrementCartItem(cartItem: CartItem) {
        cartItem.decrementQuantity();
        this.itemCount -= 1;
        this.totalMRP -= cartItem.getProduct().getPrice();
        this.totalDiscount -= cartItem.getProduct().getDiscount();
        this.subTotalPrice = this.totalMRP - this.totalDiscount;
        this.reCalcTotalPrice();
    }

    reCalcTotalPrice() {
        this.totalPrice = this.subTotalPrice + this.calculateExtraCharges();
    }

    removeCartItem(cartItem: CartItem) {
        const index = this.cartItems.indexOf(cartItem);
        if (index > -1) {
            this.cartItems.splice(index, 1);
            this.decrementCartItem(cartItem);
        } else console.log("L0G - Error - Cart item not found in shopping cart.\nCartItem: ", cartItem);
    }

    toggleFeedIndiaDonation(isFeedingIndiaChecked: boolean) {
        if (isFeedingIndiaChecked) {
            this.totalPrice += MultipleChargesModel.FEED_INDIA_DONATION_CHARGE;
            this.multipleChargesModel.setIsFeedIndiaChargeApplied(true);
        } else {
            this.totalPrice -= MultipleChargesModel.FEED_INDIA_DONATION_CHARGE;
            this.multipleChargesModel.setIsFeedIndiaChargeApplied(false);
        }
    }

    //  Getters & Setters
    //  -----------------

    public getCartItems(): CartItem[] {
        return this.cartItems;
    }

    public setCartItems(cartItems: CartItem[]): void {
        this.cartItems = cartItems;
    }

    public getItemCount(): number {
        return this.itemCount;
    }

    public setItemCount(itemCount: number): void {
        this.itemCount = itemCount;
    }

    public getTipAmount(): number {
        return this.tipAmount;
    }

    public setTipAmount(tipAmount: number): void {
        this.tipAmount = tipAmount;
    }

    public getTotalMRP(): number {
        return this.totalMRP;
    }

    public setTotalMRP(totalMRP: number): void {
        this.totalMRP = totalMRP;
    }

    public getTotalDiscount(): number {
        return this.totalDiscount;
    }

    public setTotalDiscount(totalDiscount: number): void {
        this.totalDiscount = totalDiscount;
    }

    public getSubTotalPrice(): number {
        return this.subTotalPrice;
    }

    public setSubTotalPrice(subTotalPrice: number): void {
        this.subTotalPrice = subTotalPrice;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

    public getMultipleChargesModel(): MultipleChargesModel {
        return this.multipleChargesModel;
    }

}
