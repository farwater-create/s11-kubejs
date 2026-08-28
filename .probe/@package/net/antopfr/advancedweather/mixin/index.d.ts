import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/net/antopfr/advancedweather/mixin" {
    export class $IceBlockAccessor {
    }
    export interface $IceBlockAccessor {
        invokeMelt(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_): void;
    }
    /**
     * Values that may be interpreted as {@link $IceBlockAccessor}.
     */
    export type $IceBlockAccessor_ = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos) => void);
}
