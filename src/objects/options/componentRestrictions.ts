export class ComponentRestrictions {
    public country: string;

    constructor(obj?: { country?: string }) {
        if (!obj) return;

        this.country = obj.country;
    }
}
