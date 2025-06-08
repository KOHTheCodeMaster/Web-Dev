export class OrderDto {

    private readonly orderId: number;
    private orderNumber: number;
    private strOrderArrivedIn: string;
    private dateArrivedAt: Date;
    private datePlacedOn: Date;
    private orderDate: Date;
    private paymentMode: string;
    private status: string;
    private deliverToAddressId: number;
    private shoppingCartId: number;

    constructor(id: number,
                orderNumber: number,
                strOrderArrivedIn: string,
                dateArrivedAt: Date,
                datePlacedOn: Date,
                orderDate: Date,
                paymentMode: string,
                deliverToAddressId: number,
                shoppingCartId: number,
                status: string = 'Processing') {
        this.orderId = id;
        this.orderNumber = orderNumber;
        this.strOrderArrivedIn = strOrderArrivedIn;
        this.dateArrivedAt = dateArrivedAt;
        this.datePlacedOn = datePlacedOn;
        this.orderDate = orderDate;
        this.paymentMode = paymentMode;
        this.deliverToAddressId = deliverToAddressId;
        this.shoppingCartId = shoppingCartId;
        this.status = status;
    }

    formatDate(date: Date) {

        let strFormattedDate;

        //  Desired format: "21 Apr, 6:07 pm"
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        };
        const dateFormatter = new Intl.DateTimeFormat('en-IN', options);
        const dateParts = dateFormatter.formatToParts(date);
        const day = dateParts.find(part => part.type === 'day')?.value;
        const month = dateParts.find(part => part.type === 'month')?.value;
        const year = dateParts.find(part => part.type === 'year')?.value;
        const hour = dateParts.find(part => part.type === 'hour')?.value;
        const minute = dateParts.find(part => part.type === 'minute')?.value;
        // const second = dateParts.find(part => part.type === 'second')?.value;
        const ampm = dateParts.find(part => part.type === 'dayPeriod')?.value;

        //  Format the date string
        strFormattedDate = `${day} ${month} ${year}, ${hour}:${minute} ${ampm}`;

        return strFormattedDate;
    }


    //  Getters & Setters
    //  -----------------

    public getId(): number {
        return this.orderId;
    }

    public getOrderNumber(): number {
        return this.orderNumber;
    }

    public setOrderNumber(orderNumber: number): void {
        this.orderNumber = orderNumber;
    }

    public getStrOrderArrivedIn(): string {
        return this.strOrderArrivedIn;
    }

    public setStrOrderArrivedIn(strOrderArrivedIn: string): void {
        this.strOrderArrivedIn = strOrderArrivedIn;
    }

    public getDateArrivedAt(): Date {
        return this.dateArrivedAt;
    }

    public setDateArrivedAt(dateArrivedAt: Date): void {
        this.dateArrivedAt = dateArrivedAt;
    }

    public getDatePlacedOn(): Date {
        return this.datePlacedOn;
    }

    public setDatePlacedOn(datePlacedOn: Date): void {
        this.datePlacedOn = datePlacedOn;
    }

    public getOrderDate(): Date {
        return this.orderDate;
    }

    public setOrderDate(orderDate: Date): void {
        this.orderDate = orderDate;
    }

    public getPaymentMode(): string {
        return this.paymentMode;
    }

    public setPaymentMode(paymentMode: string): void {
        this.paymentMode = paymentMode;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getDeliverToAddressId(): number {
        return this.deliverToAddressId;
    }

    public setDeliverToAddressId(deliverToAddressId: number): void {
        this.deliverToAddressId = deliverToAddressId;
    }

    public getShoppingCartId(): number {
        return this.shoppingCartId;
    }

    public setShoppingCartId(shoppingCartId: number): void {
        this.shoppingCartId = shoppingCartId;
    }

}
