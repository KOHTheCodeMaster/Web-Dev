import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUrl);
    }
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}
