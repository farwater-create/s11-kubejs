import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $IItemHandler, $IItemHandlerModifiable, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $NonNullUnaryOperator } from "@package/com/tterrag/registrate/util/nullness";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";
import { $CombinedInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $Container } from "@package/net/minecraft/world";
import { $RegistryEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_, $Holder$Reference } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as menu from "@package/com/simibubi/create/api/contraption/storage/item/menu";
export * as simple from "@package/com/simibubi/create/api/contraption/storage/item/simple";
export * as chest from "@package/com/simibubi/create/api/contraption/storage/item/chest";

declare module "@package/com/simibubi/create/api/contraption/storage/item" {
    export class $MountedItemStorageWrapper extends $CombinedInvWrapper {
        storages: $ImmutableMap<$BlockPos, $MountedItemStorage>;
        constructor(arg0: $ImmutableMap<$BlockPos_, $MountedItemStorage>);
    }
    export class $WrapperMountedItemStorage<T extends $IItemHandlerModifiable> extends $MountedItemStorage {
        static copyToItemStackHandler(arg0: $IItemHandler): $ItemStackHandler;
        static CODEC: $Codec<$MountedItemStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
    }
    export class $MountedItemStorage implements $IItemHandlerModifiable {
        unmount(arg0: $Level, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): void;
        handleInteraction(arg0: $ServerPlayer, arg1: $Contraption, arg2: $StructureTemplate$StructureBlockInfo_): boolean;
        wrapMethod$djm000$offroad$wrapHandler(arg0: $StructureTemplate$StructureBlockInfo_, arg1: $Contraption, arg2: $Operation_<any>): $IItemHandlerModifiable;
        kjs$getBlock(level: $Level): $LevelBlock;
        kjs$self(): $IItemHandler;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        clear(): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getWidth(): number;
        setChanged(): void;
        getHeight(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        asContainer(): $Container;
        getAllItems(): $List<$ItemStack>;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getSlots(): number;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getStackInSlot(slot: number): $ItemStack;
        static CODEC: $Codec<$MountedItemStorage>;
        type: $MountedItemStorageType<$MountedItemStorage>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedItemStorage>;
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
        get slots(): number;
    }
    export class $MountedItemStorageType<T extends $MountedItemStorage> {
        mount(arg0: $Level, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockEntity): T;
        is(arg0: $TagKey_<$MountedItemStorageType<never>>): boolean;
        static mountedItemStorage<B extends $Block, P>(arg0: $RegistryEntry<$MountedItemStorageType<never>, $MountedItemStorageType<never>>): $NonNullUnaryOperator<$BlockBuilder<B, P>>;
        codec: $MapCodec<T>;
        static CODEC: $Codec<$MountedItemStorageType<never>>;
        holder: $Holder$Reference<$MountedItemStorageType<never>>;
        static REGISTRY: $SimpleRegistry<$Block, $MountedItemStorageType<never>>;
    }
}
