import { $MapProcessor } from "@package/xaero/map";

declare module "@package/com/simibubi/create/foundation/mixin/compat/xaeros" {
    export class $XaeroFullscreenMapAccessor {
    }
    export interface $XaeroFullscreenMapAccessor {
        create$getMapProcessor(): $MapProcessor;
        create$getCameraZ(): number;
        create$getScale(): number;
        create$getCameraX(): number;
    }
}
