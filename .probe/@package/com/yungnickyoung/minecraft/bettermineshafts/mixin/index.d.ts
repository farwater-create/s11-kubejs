import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/com/yungnickyoung/minecraft/bettermineshafts/mixin" {
    export class $BlockBehaviourAccessor {
    }
    export interface $BlockBehaviourAccessor {
        callCanSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourAccessor}.
     */
    export type $BlockBehaviourAccessor_ = ((arg0: $BlockState, arg1: $LevelReader, arg2: $BlockPos) => boolean);
    export class $BoundingBoxAccessor {
    }
    export interface $BoundingBoxAccessor {
        setMinX(arg0: number): void;
        setMaxZ(arg0: number): void;
        setMaxX(arg0: number): void;
        setMinZ(arg0: number): void;
        setMaxY(arg0: number): void;
        setMinY(arg0: number): void;
        set minX(value: number);
        set maxZ(value: number);
        set maxX(value: number);
        set minZ(value: number);
        set maxY(value: number);
        set minY(value: number);
    }
}
