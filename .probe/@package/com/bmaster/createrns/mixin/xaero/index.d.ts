import { $RNSMapOverlayRenderer$Context } from "@package/com/bmaster/createrns/compat/map";
import { $MapProcessor } from "@package/xaero/map";

declare module "@package/com/bmaster/createrns/mixin/xaero" {
    export class $RNSXaeroFullscreenMapAccessor {
    }
    export interface $RNSXaeroFullscreenMapAccessor extends $RNSMapOverlayRenderer$Context {
        create_rns$getMapProcessor(): $MapProcessor;
        create_rns$getCameraZ(): number;
        create_rns$getCameraX(): number;
        create_rns$getScreenScale(): number;
        create_rns$getScale(): number;
    }
}
