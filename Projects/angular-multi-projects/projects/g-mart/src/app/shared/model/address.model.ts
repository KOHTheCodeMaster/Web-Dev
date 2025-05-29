import {BehaviorSubject, Observable} from "rxjs";

export class Address {

    private readonly id: number;
    private label: string;
    private houseNumberOrName: string;
    private floor: string;
    private locality: string;
    private landmark: string;
    private receiverName: string;
    private mobNumber: number;
    private googleMapsExtras: string;

    private isEditAndDeletePopupOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    private isDeleteConfirmationPopupOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(id: number,
                label: string,
                houseNumberOrName: string,
                floor: string,
                locality: string,
                landmark: string,
                receiverName: string,
                mobNumber: number,
                googleMapsExtras: string) {
        this.id = id;
        this.label = label;
        this.houseNumberOrName = houseNumberOrName;
        this.floor = floor;
        this.locality = locality;
        this.landmark = landmark;
        this.receiverName = receiverName;
        this.mobNumber = mobNumber;
        this.googleMapsExtras = googleMapsExtras;
    }

    clone(): Address {
        return new Address(
            this.id,
            this.label,
            this.houseNumberOrName,
            this.floor,
            this.locality,
            this.landmark,
            this.receiverName,
            this.mobNumber,
            this.googleMapsExtras);
    }

    copyFrom(tempAddress: Address) {
        if (tempAddress) {
            this.label = tempAddress.getLabel();
            this.houseNumberOrName = tempAddress.getHouseNumber();
            this.floor = tempAddress.getFloor();
            this.locality = tempAddress.getLocality();
            this.landmark = tempAddress.getLandmark();
            this.receiverName = tempAddress.getReceiverName();
            this.mobNumber = tempAddress.getMobNumber();
            this.googleMapsExtras = tempAddress.getGoogleMapsExtras();
        }
    }

    toggleEditAndDeletePopup(): void {
        const currentState = this.isEditAndDeletePopupOpened$.getValue();
        this.updateIsEditAndDeletePopupOpenedValue(!currentState);

        //  Close the delete confirmation popup if it is open
        // this.isDeleteConfirmationPopupOpened &&= false;
        this.updateIsDeleteConfirmationPopupOpenedValue(false);
    }

    toggleDeleteConfirmationPopup(): void {
        const currentState = this.isDeleteConfirmationPopupOpened$.getValue();
        this.isDeleteConfirmationPopupOpened$.next(!currentState);
    }

    public updateIsEditAndDeletePopupOpenedValue(isEditAndDeletePopupOpened: boolean): void {
        this.isEditAndDeletePopupOpened$.next(isEditAndDeletePopupOpened);
    }

    public updateIsDeleteConfirmationPopupOpenedValue(isDeleteConfirmationPopupOpened: boolean): void {
        this.isDeleteConfirmationPopupOpened$.next(isDeleteConfirmationPopupOpened);
    }

    getFullAddress(): string {

        let fullAddress: string = '';

        if (this.houseNumberOrName) fullAddress = this.houseNumberOrName + ', ';
        if (this.floor) fullAddress += this.floor + ', ';
        if (this.locality) fullAddress += this.locality + ', ';
        if (this.landmark) fullAddress += this.landmark + ', ';

        //  Remove last comma and space if it exists
        if (fullAddress.endsWith(', ')) fullAddress = fullAddress.slice(0, -2);

        return fullAddress;

    }

    isCustomLabel(): boolean {
        return this.label !== 'Home' &&
            this.label !== 'Work' &&
            this.label !== '';
    }


    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getLabel(): string {
        return this.label;
    }

    public setLabel(label: string): void {
        this.label = label;
    }

    public getHouseNumber(): string {
        return this.houseNumberOrName;
    }

    public setHouseNumber(houseNumberOrName: string): void {
        this.houseNumberOrName = houseNumberOrName;
    }

    public getFloor(): string {
        return this.floor;
    }

    public setFloor(floor: string): void {
        this.floor = floor;
    }

    public getLocality(): string {
        return this.locality;
    }

    public setLocality(locality: string): void {
        this.locality = locality;
    }

    public getLandmark(): string {
        return this.landmark;
    }

    public setLandmark(landmark: string): void {
        this.landmark = landmark;
    }

    public getReceiverName(): string {
        return this.receiverName;
    }

    public setReceiverName(receiverName: string): void {
        this.receiverName = receiverName;
    }

    public getMobNumber(): number {
        return this.mobNumber;
    }

    public setMobNumber(mobNumber: number): void {
        this.mobNumber = mobNumber;
    }

    public getGoogleMapsExtras(): string {
        return this.googleMapsExtras;
    }

    public setGoogleMapsExtras(googleMapsExtras: string): void {
        this.googleMapsExtras = googleMapsExtras;
    }

    public getIsEditAndDeletePopupOpened$(): Observable<boolean> {
        return this.isEditAndDeletePopupOpened$;
    }

    public getIsDeleteConfirmationPopupOpened$(): Observable<boolean> {
        return this.isDeleteConfirmationPopupOpened$;
    }

}
