export class DIWithoutInjectableService {

    constructor() {
        console.log('DiWithoutInjectableService Constructor Invoked.');
    }

    getName(): string {
        return 'John Doe';
    }

}
