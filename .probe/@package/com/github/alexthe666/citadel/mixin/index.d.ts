import { $LevelReader } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";

declare module "@package/com/github/alexthe666/citadel/mixin" {
    export class $BlockBehaviourAccessor {
    }
    export interface $BlockBehaviourAccessor {
        citadel_canSurvive(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourAccessor}.
     */
    export type $BlockBehaviourAccessor_ = ((arg0: $BlockState, arg1: $LevelReader, arg2: $BlockPos) => boolean);
}
