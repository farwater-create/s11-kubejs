import { $BlazeBurnerBlock$HeatLevel } from "@package/com/simibubi/create/content/processing/burner";

declare module "@package/net/pinkcats/createlazytick/bridge/Basin" {
    export class $IBasinOptimization {
    }
    export interface $IBasinOptimization {
        clt$isOutputBufferEmpty(): boolean;
        clt$getHeatLevel(): $BlazeBurnerBlock$HeatLevel;
    }
}
