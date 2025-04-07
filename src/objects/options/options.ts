export class Options {
    public bounds: LatLngBounds;
    public componentRestrictions: ComponentRestrictions;
    public types: string[];
    public fields: string[];
    public strictBounds: boolean;
    public origin: LatLng;

    constructor(opt?: {
        bounds?: LatLngBounds;
        componentRestrictions?: ComponentRestrictions;
        types?: string[];
        fields?: string[];
        strictBounds?: boolean;
        origin?: LatLng;
    }) {
        if (!opt) return;

        Object.assign(this, opt);
    }
}
