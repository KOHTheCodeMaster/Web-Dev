import {Injectable} from '@angular/core';
import {DataLoaderService} from "./data-loader.service";
import {UserDataModel} from "../shared/model/user-data.model";

@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    userDataMap: Map<string, UserDataModel> = new Map<string, UserDataModel>();

    constructor(private dataLoaderService: DataLoaderService) {

        //  Initialize the user data map
        this.initUserDataMap();

    }

    private initUserDataMap() {
        this.dataLoaderService.getDataLoaded$().subscribe((dataLoaded: boolean) => {
            if (dataLoaded) {
                //  Initialize User Data Map
                const userDataMapJson: any = this.dataLoaderService.getDataLoaded('user-data');
                for (const userId in userDataMapJson) {
                    if (userDataMapJson.hasOwnProperty(userId)) {
                        const userDataJson = userDataMapJson[userId];
                        this.userDataMap.set(Number(userId).toString(),
                            new UserDataModel(
                                Math.floor(Math.random() * 10_000), // ToDo: Handle ID Generation properly
                                Number(userId),
                                userDataJson['savedAddressIdList'] || [],
                                userDataJson['defaultAddressId'] || null,
                                userDataJson['ordersIdList'] || [],
                                userDataJson['shoppingCartId'] || null
                            ));
                    }
                }
            }
        });
    }

    //  Getters
    //  -------

    getUserDataMap(): Map<string, UserDataModel> {
        return this.userDataMap;
    }

    getUserDataByUserId(userId: string): UserDataModel | null {
        return this.userDataMap.get(userId) || null;
    }

    getAllUserData(): UserDataModel[] {
        return Array.from(this.userDataMap.values());
    }

}
