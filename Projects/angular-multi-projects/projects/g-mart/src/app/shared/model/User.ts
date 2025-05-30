export class User {

    private id: number;
    private username: string;
    private password: string;
    private email: string;
    private isAdmin: boolean;

    constructor(id: number, username: string, password: string, email: string, isAdmin: boolean) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.isAdmin = isAdmin;
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

    public getIsAdmin(): boolean {
        return this.isAdmin;
    }

    public setIsAdmin(isAdmin: boolean): void {
        this.isAdmin = isAdmin;
    }

}
