export class UserDataModel {

    constructor(private readonly id: number,
                private userId: number,
                private savedAddressIdList: number[],
                private defaultAddressId: number,
                private ordersIdList: number[],
                private shoppingCartId: number) {

        this.id = id;
        this.userId = userId;
        this.savedAddressIdList = savedAddressIdList;
        this.defaultAddressId = defaultAddressId;
        this.ordersIdList = ordersIdList;
        this.shoppingCartId = shoppingCartId;
    }

    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getUserId(): number {
        return this.userId;
    }

    public getSavedAddressIdList(): number[] {
        return this.savedAddressIdList;
    }

    public getDefaultAddressId(): number {
        return this.defaultAddressId;
    }

    public getOrdersIdList(): number[] {
        return this.ordersIdList;
    }

    public getShoppingCartId(): number {
        return this.shoppingCartId;
    }

}
