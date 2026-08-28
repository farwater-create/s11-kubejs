import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $ItemLike, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AbstractRegistrate } from "@package/com/tterrag/registrate";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidType, $BaseFlowingFluid } from "@package/net/neoforged/neoforge/fluids";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $MenuConstructor_, $MenuType, $MenuConstructor, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/tterrag/registrate/util/entry" {
    export class $ItemProviderEntry<R extends $ItemLike, T extends R> extends $RegistryEntry<R, T> implements $ItemLike {
        is(arg0: $Item): boolean;
        asStack(): $ItemStack;
        asStack(arg0: number): $ItemStack;
        isIn(arg0: $ItemStack_): boolean;
        asItem(): $Item;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<R, T>);
    }
    export class $ItemEntry<T extends $Item> extends $ItemProviderEntry<$Item, T> {
        static cast<T extends $Item>(arg0: $RegistryEntry<$Item, T>): $ItemEntry<T>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Item, T>);
    }
    export class $BlockEntry<T extends $Block> extends $ItemProviderEntry<$Block, T> {
        static cast<T extends $Block>(arg0: $RegistryEntry<$Block, T>): $BlockEntry<T>;
        has(arg0: $BlockState_): boolean;
        getDefaultState(): $BlockState;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Block, T>);
        get defaultState(): $BlockState;
    }
    export class $EntityEntry<T extends $Entity> extends $RegistryEntry<$EntityType<never>, $EntityType<T>> {
        static cast<T extends $Entity>(arg0: $RegistryEntry<$EntityType<never>, $EntityType<T>>): $EntityEntry<T>;
        create(arg0: $Level): $EntityType<T>;
        is(arg0: $Entity): boolean;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$EntityType<never>, $EntityType<$EntityType<T>>>);
    }
    export class $RegistryEntry<R, S extends R> extends $DeferredHolder<R, S> implements $NonNullSupplier<S> {
        filter(arg0: $Predicate_<R>): ($RegistryEntry<R, S>) | undefined;
        is<X>(arg0: X): boolean;
        getSibling<X, Y extends X>(arg0: $ResourceKey_<$Registry<X>>): $RegistryEntry<X, Y>;
        getSibling<X, Y extends X>(arg0: $Registry<X>): $RegistryEntry<X, Y>;
        lazy(): $NonNullSupplier<S>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<R, S>);
    }
    export class $MenuEntry<T extends $AbstractContainerMenu> extends $RegistryEntry<$MenuType<never>, $MenuType<T>> {
        open(arg0: $ServerPlayer, arg1: $Component_, arg2: $Consumer_<$RegistryFriendlyByteBuf>): void;
        open(arg0: $ServerPlayer, arg1: $Component_, arg2: $MenuConstructor_): void;
        open(arg0: $ServerPlayer, arg1: $Component_, arg2: $MenuConstructor_, arg3: $Consumer_<$RegistryFriendlyByteBuf>): void;
        open(arg0: $ServerPlayer, arg1: $Component_): void;
        create(arg0: number, arg1: $Inventory): $MenuType<T>;
        asProvider(): $MenuConstructor;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$MenuType<never>, $MenuType<$MenuType<T>>>);
    }
    export class $FluidEntry<T extends $BaseFlowingFluid> extends $RegistryEntry<$Fluid, T> {
        getType(): $FluidType;
        getBlock<B extends $Block>(): (B) | undefined;
        getSource<S extends $BaseFlowingFluid>(): S;
        getBucket<I extends $Item>(): (I) | undefined;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$Fluid, T>);
        get type(): $FluidType;
        get block(): (B) | undefined;
        get source(): S;
        get bucket(): (I) | undefined;
    }
    export class $BlockEntityEntry<T extends $BlockEntity> extends $RegistryEntry<$BlockEntityType<never>, $BlockEntityType<T>> {
        get(arg0: $BlockGetter, arg1: $BlockPos_): ($BlockEntityType<T>) | undefined;
        static cast<T extends $BlockEntity>(arg0: $RegistryEntry<$BlockEntityType<never>, $BlockEntityType<T>>): $BlockEntityEntry<T>;
        create(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntityType<T>;
        is(arg0: $BlockEntity | null): boolean;
        getNullable(arg0: $BlockGetter, arg1: $BlockPos_): $BlockEntityType<T>;
        constructor(arg0: $AbstractRegistrate<never>, arg1: $DeferredHolder<$BlockEntityType<never>, $BlockEntityType<$BlockEntityType<T>>>);
    }
}
