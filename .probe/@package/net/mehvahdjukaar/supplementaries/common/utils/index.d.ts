import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $IQuiverEntity } from "@package/net/mehvahdjukaar/supplementaries/common/entities";
import { $LivingEntity, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $CoopResolverState } from "@package/net/mehvahdjukaar/supplementaries/common/misc";
import { $Set_ } from "@package/java/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_, $Holder_, $Direction_, $Registry, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $MLMapDecorationType } from "@package/net/mehvahdjukaar/moonlight/api/map/decoration";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/mehvahdjukaar/supplementaries/common/utils" {
    export class $SlotReference$Empty extends $Record implements $SlotReference {
        get(arg0: $LivingEntity): $ItemStack;
        getCodec(): $StreamCodec<$ByteBuf, $SlotReference$Empty>;
        isEmpty(): boolean;
        getItem(arg0: $LivingEntity): $Item;
        static CODEC: $StreamCodec<$ByteBuf, $SlotReference$Empty>;
        constructor();
        get codec(): $StreamCodec<$ByteBuf, $SlotReference$Empty>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SlotReference$Empty}.
     */
    export type $SlotReference$Empty_ = {  } | [];
    export class $ICooperativePiston {
    }
    export interface $ICooperativePiston {
        supp$getCoopState(): $CoopResolverState;
        supp$setCooperators(arg0: $Set_<$BlockPos_>, arg1: number, arg2: $Direction_, arg3: boolean): void;
    }
    export class $IExplorationFunctionExtension {
    }
    export interface $IExplorationFunctionExtension {
        supplementaries$setCustomDecoration(arg0: $Holder_<$MLMapDecorationType<never, never>>): void;
        supplementaries$getCustomDecoration(): $Holder<$MLMapDecorationType<never, never>>;
    }
    export class $ICarryingMovingPiston {
    }
    export interface $ICarryingMovingPiston {
        supp$getOrCreateCachedCarriedBlockEntity(): $BlockEntity;
        supp$restoreCarriedBe(): void;
        supp$applyMovedFluidFill(): void;
        supp$setCarriedBlockEntityNbt(arg0: $CompoundTag_): void;
        supp$getCarriedBlockEntityNbt(): $CompoundTag;
        supp$setMovedFluidFill(arg0: $FluidState): void;
    }
    export class $IQuiverPlayer {
    }
    export interface $IQuiverPlayer extends $IQuiverEntity {
        supplementaries$getQuiverSlot(): $SlotReference;
        supplementaries$setQuiverSlot(arg0: $SlotReference): void;
    }
    export class $SlotReference {
        static slot(arg0: $EquipmentSlot_): $SlotReference;
        static inv(arg0: number): $SlotReference;
        static quiver(arg0: $IQuiverEntity): $SlotReference;
        static hand(arg0: $InteractionHand_): $SlotReference;
        static TYPE_REGISTRY_KEY: $ResourceKey<$Registry<$StreamCodec<$ByteBuf, $SlotReference>>>;
        static TYPE_REGISTRY: $Registry<$StreamCodec<$ByteBuf, $SlotReference>>;
        static EMPTY: $SlotReference$Empty;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SlotReference>;
    }
    export interface $SlotReference {
        get(arg0: $LivingEntity): $ItemStack;
        isEmpty(): boolean;
        getItem(arg0: $LivingEntity): $Item;
        getCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $SlotReference>;
        get empty(): boolean;
        get codec(): $StreamCodec<$RegistryFriendlyByteBuf, $SlotReference>;
    }
}
