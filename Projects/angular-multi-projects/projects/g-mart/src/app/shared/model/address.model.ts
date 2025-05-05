import {BehaviorSubject, Observable} from "rxjs";

export class Address {

    private readonly id: number;
    private label: string;
    private houseNumberOrName: string;
    private floor: number;
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
                floor: number,
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

    handleDeleteAddress($event: MouseEvent) {
        $event.stopPropagation();
        this.toggleDeleteConfirmationPopup();
    }

    getFullAddress(): string {
        return `${this.houseNumberOrName},
                ${this.floor ? 'Floor ' + this.floor + ', ' : ''}${this.locality}, ${this.landmark}`;
    }


    //  Getters
    //  -------

    public getId(): number {
        return this.id;
    }

    public getLabel(): string {
        return this.label;
    }

    public getHouseNumber(): string {
        return this.houseNumberOrName;
    }

    public getFloor(): number {
        return this.floor;
    }

    public getLocality(): string {
        return this.locality;
    }

    public getLandmark(): string {
        return this.landmark;
    }

    public getReceiverName(): string {
        return this.receiverName;
    }

    public getMobNumber(): number {
        return this.mobNumber;
    }

    public getGoogleMapsExtras(): string {
        return this.googleMapsExtras;
    }

    public getIsEditAndDeletePopupOpened$(): Observable<boolean> {
        return this.isEditAndDeletePopupOpened$;
    }

    public getIsDeleteConfirmationPopupOpened$(): Observable<boolean> {
        return this.isDeleteConfirmationPopupOpened$;
    }

}
