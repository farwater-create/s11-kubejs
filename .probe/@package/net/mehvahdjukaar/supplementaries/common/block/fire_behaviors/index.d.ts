import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/mehvahdjukaar/supplementaries/common/block/fire_behaviors" {
    export class $IFireItemBehaviorRegistry {
    }
    export interface $IFireItemBehaviorRegistry {
        registerPresentBehavior(arg0: $ItemLike_, arg1: $IFireItemBehavior_): void;
        registerCannonBehavior(arg0: $ItemLike_, arg1: $IFireItemBehavior_): void;
    }
    export class $IFireItemBehavior {
    }
    export interface $IFireItemBehavior {
        fire(arg0: $ItemStack_, arg1: $ServerLevel, arg2: $BlockPos_, arg3: number, arg4: $Vec3_, arg5: number, arg6: number, arg7: $Entity): boolean;
        fire(arg0: $ItemStack_, arg1: $ServerLevel, arg2: $Vec3_, arg3: number, arg4: $Vec3_, arg5: number, arg6: number, arg7: $Entity): boolean;
        fire(arg0: $ItemStack_, arg1: $ServerLevel, arg2: $Vec3_, arg3: $Vec3_, arg4: number, arg5: number, arg6: $Entity): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IFireItemBehavior}.
     */
    export type $IFireItemBehavior_ = ((arg0: $ItemStack, arg1: $ServerLevel, arg2: $Vec3, arg3: $Vec3, arg4: number, arg5: number, arg6: $Entity) => boolean);
}
