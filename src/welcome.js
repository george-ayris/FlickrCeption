export class Welcome{
    constructor(){
        this.heading = 'Welcome to the Aurelia Navigation App!';
        this.firstName = 'John';
        this.lastName = 'Doe';
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    get submit() {
        return '#/flickr';
    }
}
