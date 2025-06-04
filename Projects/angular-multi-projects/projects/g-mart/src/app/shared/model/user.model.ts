import {UserRole} from "./user-role";

export class User {

    private id: number;
    private username: string;
    private password: string;
    private email: string;
    private role: UserRole;

    constructor(id: number, username: string, password: string, email: string, role: UserRole) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public isAdmin(): boolean {
        return this.role === UserRole.ADMIN;
    }

    public isLoggedInAsCustomerOrAdmin(): boolean {
        return this.role === UserRole.CUSTOMER || this.role === UserRole.ADMIN;
    }

    public isCustomer(): boolean {
        return this.role === UserRole.CUSTOMER;
    }

    public isGuest(): boolean {
        return this.role === UserRole.GUEST;
    }

    //  Getters & Setters
    //  -----------------

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getRole(): UserRole {
        return this.role;
    }

    public setRole(role: UserRole): void {
        this.role = role;
    }

}
