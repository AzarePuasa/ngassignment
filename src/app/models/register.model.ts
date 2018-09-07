export class UserDetails {
    id: string
    email: string;
    password: string;
    name: string;
    gender: string;
    birthDate: string;
    address: string;
    country: string;
    contact: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}