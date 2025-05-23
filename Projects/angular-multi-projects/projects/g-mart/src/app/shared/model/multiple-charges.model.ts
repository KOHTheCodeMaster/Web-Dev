export class MultipleChargesModel {

    static readonly HANDLING_CHARGE: number = 20;
    static readonly THRESHOLD_FOR_DELIVERY_CHARGE: number = 100;
    static readonly THRESHOLD_FOR_SMALL_CART: number = 100;
    static readonly THRESHOLD_FOR_HIGH_DEMAND_SURGE_CHARGE: number = 500;
    static readonly DELIVERY_CHARGE: number = 30;
    static readonly SMALL_CART_CHARGE: number = 10;
    static readonly HIGH_DEMAND_SURGE_CHARGE: number = 20;
    static readonly FEED_INDIA_DONATION_CHARGE: number = 1;

    private isHandlingChargeApplied: boolean = true;
    private isDeliveryChargeApplied: boolean = true;
    private isSmallCartChargeApplied: boolean = true;
    private isHighDemandSurgeChargeApplied: boolean = false;
    private checkHighDemandSurgeChargeFlag: boolean = true;
    private isFeedIndiaChargeApplied: boolean = false;
    private isTipApplied: boolean = false;

    constructor() {
    }

    /*
        reset() {
            this.isHandlingChargeApplied = true;
            this.isDeliveryChargeApplied = true;
            this.isSmallCartChargeApplied = true;
            this.isHighDemandSurgeChargeApplied = false;
            this.checkHighDemandSurgeChargeFlag = true;
            this.isFeedIndiaChargeApplied = false;
            this.isTipApplied = false;
        }
    */


    //  Getters & Setters
    //  -----------------

    public getIsHandlingChargeApplied(): boolean {
        return this.isHandlingChargeApplied;
    }

    public setIsHandlingChargeApplied(isHandlingChargeApplied: boolean): void {
        this.isHandlingChargeApplied = isHandlingChargeApplied;
    }

    public getIsDeliveryChargeApplied(): boolean {
        return this.isDeliveryChargeApplied;
    }

    public setIsDeliveryChargeApplied(isDeliveryChargeApplied: boolean): void {
        this.isDeliveryChargeApplied = isDeliveryChargeApplied;
    }

    public getIsSmallCartChargeApplied(): boolean {
        return this.isSmallCartChargeApplied;
    }

    public setIsSmallCartChargeApplied(isSmallCartChargeApplied: boolean): void {
        this.isSmallCartChargeApplied = isSmallCartChargeApplied;
    }

    public getIsHighDemandSurgeChargeApplied(): boolean {
        return this.isHighDemandSurgeChargeApplied;
    }

    public setIsHighDemandSurgeChargeApplied(isHighDemandSurgeChargeApplied: boolean): void {
        this.isHighDemandSurgeChargeApplied = isHighDemandSurgeChargeApplied;
    }

    public getCheckHighDemandSurgeChargeFlag(): boolean {
        return this.checkHighDemandSurgeChargeFlag;
    }

    public setCheckHighDemandSurgeChargeFlag(checkHighDemandSurgeChargeFlag: boolean): void {
        this.checkHighDemandSurgeChargeFlag = checkHighDemandSurgeChargeFlag;
    }

    public getIsFeedIndiaChargeApplied(): boolean {
        return this.isFeedIndiaChargeApplied;
    }

    public setIsFeedIndiaChargeApplied(isFeedIndiaChargeApplied: boolean): void {
        this.isFeedIndiaChargeApplied = isFeedIndiaChargeApplied;
    }

    public getIsTipApplied(): boolean {
        return this.isTipApplied;
    }

    public setIsTipApplied(isTipApplied: boolean): void {
        this.isTipApplied = isTipApplied;
    }

}
