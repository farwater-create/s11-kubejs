import { $Level } from "@package/net/minecraft/world/level";
import { $InteractionResult, $InteractionResult_ } from "@package/net/minecraft/world";
import { $Function, $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/mehvahdjukaar/supplementaries/mixins/neoforge" {
    export class $ItemStackAccessor {
    }
    export interface $ItemStackAccessor {
        invokeOnItemUse(arg0: $UseOnContext, arg1: $Function_<$UseOnContext, $InteractionResult>): $InteractionResult;
    }
    /**
     * Values that may be interpreted as {@link $ItemStackAccessor}.
     */
    export type $ItemStackAccessor_ = ((arg0: $UseOnContext, arg1: $Function<$UseOnContext, $InteractionResult>) => $InteractionResult_);
    export class $FireBlockAccessor {
    }
    export interface $FireBlockAccessor {
        invokeTryCatchFire(arg0: $Level, arg1: $BlockPos_, arg2: number, arg3: $RandomSource, arg4: number, arg5: $Direction_): void;
    }
    /**
     * Values that may be interpreted as {@link $FireBlockAccessor}.
     */
    export type $FireBlockAccessor_ = ((arg0: $Level, arg1: $BlockPos, arg2: number, arg3: $RandomSource, arg4: number, arg5: $Direction) => void);
}
