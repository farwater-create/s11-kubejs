import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/com/ordana/immersive_weathering/mixins/accessors" {
    export class $IceInvoker {
    }
    export interface $IceInvoker {
        invokeMelt(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $IceInvoker}.
     */
    export type $IceInvoker_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos) => void);
    export class $RandomBlockMatchTestAccessor {
    }
    export interface $RandomBlockMatchTestAccessor {
        getProbability(): number;
        get probability(): number;
    }
    /**
     * Values that may be interpreted as {@link $RandomBlockMatchTestAccessor}.
     */
    export type $RandomBlockMatchTestAccessor_ = (() => number);
    export class $BiomeAccessor {
    }
    export interface $BiomeAccessor {
        invokeGetTemperature(arg0: $BlockPos_): number;
    }
    /**
     * Values that may be interpreted as {@link $BiomeAccessor}.
     */
    export type $BiomeAccessor_ = ((arg0: $BlockPos) => number);
}
