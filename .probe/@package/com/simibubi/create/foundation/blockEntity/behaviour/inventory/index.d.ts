import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler, $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Predicate } from "@package/com/google/common/base";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IdentifiedInventory } from "@package/com/simibubi/create/content/logistics/packager";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Container } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemHelper$ExtractionCountMode_, $ItemHelper$ExtractionCountMode } from "@package/com/simibubi/create/foundation/item";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $VITBExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $Object } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory" {
    export class $VersionedInventoryTrackerBehaviour extends $BlockEntityBehaviour implements $VITBExtension {
        reset(): void;
        stillWaiting(arg0: $IItemHandler): boolean;
        stillWaiting(arg0: $InvManipulationBehaviour): boolean;
        awaitNewVersion(arg0: $InvManipulationBehaviour): void;
        awaitNewVersion(arg0: $IItemHandler): void;
        deployer$awaitNewVersion(arg0: $Object): void;
        deployer$stillWaiting(arg0: $Object): boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$VersionedInventoryTrackerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $VersionedInventoryWrapper implements $IItemHandlerModifiable {
        getId(): number;
        getVersion(): number;
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        incrementVersion(): void;
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
        static idGenerator: $AtomicInteger;
        constructor(arg0: $IItemHandlerModifiable);
        get id(): number;
        get version(): number;
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $CapManipulationBehaviourBase$InterfaceProvider {
        static oppositeOfBlockFacing(): $CapManipulationBehaviourBase$InterfaceProvider;
        static towardBlockFacing(): $CapManipulationBehaviourBase$InterfaceProvider;
    }
    export interface $CapManipulationBehaviourBase$InterfaceProvider {
        getTarget(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): $BlockFace;
    }
    /**
     * Values that may be interpreted as {@link $CapManipulationBehaviourBase$InterfaceProvider}.
     */
    export type $CapManipulationBehaviourBase$InterfaceProvider_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $BlockFace);
    export class $InvManipulationBehaviour extends $CapManipulationBehaviourBase<$IItemHandler, $InvManipulationBehaviour> {
        extract(arg0: $ItemHelper$ExtractionCountMode_, arg1: number, arg2: $Predicate_<$ItemStack>): $ItemStack;
        extract(arg0: $ItemHelper$ExtractionCountMode_, arg1: number): $ItemStack;
        extract(): $ItemStack;
        insert(arg0: $ItemStack_): $ItemStack;
        static forExtraction(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_): $InvManipulationBehaviour;
        static forInsertion(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_): $InvManipulationBehaviour;
        getIdentifiedInventory(): $IdentifiedInventory;
        blockEntity: $SmartBlockEntity;
        static INSERT: $BehaviourType<$InvManipulationBehaviour>;
        static TYPE: $BehaviourType<$InvManipulationBehaviour>;
        static EXTRACT: $BehaviourType<$InvManipulationBehaviour>;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
        get identifiedInventory(): $IdentifiedInventory;
    }
    export class $CapManipulationBehaviourBase<T, S extends $CapManipulationBehaviourBase<never, never>> extends $BlockEntityBehaviour {
        getTarget(): $BlockFace;
        withFilter(arg0: $Predicate<$BlockEntity>): S;
        getModeFromFilter(): $ItemHelper$ExtractionCountMode;
        getInventory(): T;
        findNewCapability(): void;
        simulate(): S;
        hasInventory(): boolean;
        bypassSidedness(): S;
        redirect$hkf000$sable$redirectPos$mixinextras$bridge$19(arg0: $Level, arg1: $BlockCapability<any, any>, arg2: $BlockPos_, arg3: $Object, arg4: $LocalRef<any>): $Object;
        getAmountFromFilter(): number;
        redirect$hkf000$sable$redirectPos(arg0: $Level, arg1: $BlockCapability<any, any>, arg2: $BlockPos_, arg3: $Object, arg4: $BlockFace): $Object;
        redirect$hkf000$sable$findNewCapOnSubLevel(arg0: $Level, arg1: $BlockPos_): $BlockEntity;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
        get target(): $BlockFace;
        get modeFromFilter(): $ItemHelper$ExtractionCountMode;
        get inventory(): T;
        get amountFromFilter(): number;
    }
    export class $TankManipulationBehaviour extends $CapManipulationBehaviourBase<$IFluidHandler, $TankManipulationBehaviour> {
        extractAny(): $FluidStack;
        static OBSERVE: $BehaviourType<$TankManipulationBehaviour>;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity, arg1: $CapManipulationBehaviourBase$InterfaceProvider_);
    }
}
