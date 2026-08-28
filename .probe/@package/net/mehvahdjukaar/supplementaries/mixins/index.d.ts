import { $Level } from "@package/net/minecraft/world/level";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $DispenseItemBehavior } from "@package/net/minecraft/core/dispenser";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
export * as neoforge from "@package/net/mehvahdjukaar/supplementaries/mixins/neoforge";

declare module "@package/net/mehvahdjukaar/supplementaries/mixins" {
    export class $EntityAccessor {
    }
    export interface $EntityAccessor {
        invokeCanRide(arg0: $Entity): boolean;
        invokeCanAddPassenger(arg0: $Entity): boolean;
    }
    export class $IHangingEntityAccessor {
    }
    export interface $IHangingEntityAccessor {
        invokeSetDirection(arg0: $Direction_): void;
    }
    /**
     * Values that may be interpreted as {@link $IHangingEntityAccessor}.
     */
    export type $IHangingEntityAccessor_ = ((arg0: $Direction) => void);
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        setUseItem(arg0: $ItemStack_): void;
        invokeShouldDropLoot(): boolean;
        set useItem(value: $ItemStack_);
    }
    export class $IDispenserAccessor {
    }
    export interface $IDispenserAccessor {
        invokeGetDispenseMethod(arg0: $Level, arg1: $ItemStack_): $DispenseItemBehavior;
    }
    /**
     * Values that may be interpreted as {@link $IDispenserAccessor}.
     */
    export type $IDispenserAccessor_ = ((arg0: $Level, arg1: $ItemStack) => $DispenseItemBehavior);
    export class $PlayerAccessor {
    }
    export interface $PlayerAccessor {
        invokeSetShoulderEntityRight(arg0: $CompoundTag_): void;
        invokeSetShoulderEntityLeft(arg0: $CompoundTag_): void;
    }
}
