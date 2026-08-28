import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $TransportedItemStackHandlerBehaviour$TransportedResult } from "@package/com/simibubi/create/content/kinetics/belt/behaviour";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List } from "@package/java/util";
import { $BeltInventoryAccessor } from "@package/net/pinkcats/createlazytick/mixin/OptElement/belt";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Container } from "@package/net/minecraft/world";
import { $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BeltBlockEntity } from "@package/com/simibubi/create/content/kinetics/belt";
import { $Enum, $Comparable } from "@package/java/lang";
import { $FanProcessingType } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $BeltTunnelBlockEntity } from "@package/com/simibubi/create/content/logistics/tunnel";

declare module "@package/com/simibubi/create/content/kinetics/belt/transport" {
    export class $BeltMovementHandler {
        static canBeTransported(arg0: $Entity): boolean;
        static transportEntity(arg0: $BeltBlockEntity, arg1: $Entity, arg2: $BeltMovementHandler$TransportedEntityInfo): void;
        static isRidingOrBeingRiddenBy(arg0: $Entity, arg1: $Entity): boolean;
        static shouldIgnoreBlocking(arg0: $Entity, arg1: $Entity): boolean;
        constructor();
    }
    export class $BeltTunnelInteractionHandler {
        static flapTunnel(arg0: $BeltInventory, arg1: number, arg2: $Direction_, arg3: boolean): void;
        static getTunnelOnPosition(arg0: $Level, arg1: $BlockPos_): $BeltTunnelBlockEntity;
        static flapTunnelsAndCheckIfStuck(arg0: $BeltInventory, arg1: $TransportedItemStack, arg2: number): boolean;
        static stuckAtTunnel(arg0: $BeltInventory, arg1: number, arg2: $ItemStack_, arg3: $Direction_): boolean;
        constructor();
    }
    export class $TransportedItemStack implements $Comparable<$TransportedItemStack> {
        compareTo(arg0: $TransportedItemStack): number;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $TransportedItemStack;
        copy(): $TransportedItemStack;
        getTargetSideOffset(): number;
        clearFanProcessingData(): void;
        getSimilar(): $TransportedItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        lockedExternally: boolean;
        stack: $ItemStack;
        beltPosition: number;
        insertedAt: number;
        insertedFrom: $Direction;
        prevSideOffset: number;
        angle: number;
        prevBeltPosition: number;
        sideOffset: number;
        locked: boolean;
        processedBy: $FanProcessingType;
        processingTime: number;
        constructor(arg0: $ItemStack_);
        get targetSideOffset(): number;
        get similar(): $TransportedItemStack;
    }
    export class $BeltFunnelInteractionHandler {
        static checkForFunnels(arg0: $BeltInventory, arg1: $TransportedItemStack, arg2: number): boolean;
        constructor();
    }
    export class $BeltInventory implements $BeltInventoryAccessor {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        addItem(arg0: $TransportedItemStack): void;
        tick(): void;
        applyToEachWithin(arg0: number, arg1: number, arg2: $Function_<$TransportedItemStack, $TransportedItemStackHandlerBehaviour$TransportedResult>): void;
        getTransportedItems(): $List<$TransportedItemStack>;
        canInsertAtFromSide(arg0: number, arg1: $Direction_): boolean;
        eject(arg0: $TransportedItemStack): void;
        getLazyClientItem(): $TransportedItemStack;
        ejectAll(): void;
        handler$cab004$createlazytick$tick(arg0: $CallbackInfo): void;
        canInsertAt(arg0: number): boolean;
        getStackAtOffset(arg0: number): $TransportedItemStack;
        getItems(): $List<$TransportedItemStack>;
        getBeltMovementPositive(): boolean;
        getBelt(): $BeltBlockEntity;
        getToInsert(): $List<$TransportedItemStack>;
        getToRemove(): $List<$TransportedItemStack>;
        constructor(arg0: $BeltBlockEntity);
        get transportedItems(): $List<$TransportedItemStack>;
        get lazyClientItem(): $TransportedItemStack;
        get items(): $List<$TransportedItemStack>;
        get beltMovementPositive(): boolean;
        get belt(): $BeltBlockEntity;
        get toInsert(): $List<$TransportedItemStack>;
        get toRemove(): $List<$TransportedItemStack>;
    }
    export class $BeltInventory$Ending extends $Enum<$BeltInventory$Ending> {
    }
    /**
     * Values that may be interpreted as {@link $BeltInventory$Ending}.
     */
    export type $BeltInventory$Ending_ = "unresolved" | "eject" | "insert" | "funnel" | "blocked";
    export class $BeltCrusherInteractionHandler {
        static checkForCrushers(arg0: $BeltInventory, arg1: $TransportedItemStack, arg2: number): boolean;
        constructor();
    }
    export class $ItemHandlerBeltSegment implements $IItemHandler {
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
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
        constructor(arg0: $BeltInventory, arg1: number);
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $BeltMovementHandler$TransportedEntityInfo {
        refresh(arg0: $BlockPos_, arg1: $BlockState_): void;
        getTicksSinceLastCollision(): number;
        tick(): $BeltMovementHandler$TransportedEntityInfo;
        constructor(arg0: $BlockPos_, arg1: $BlockState_);
        get ticksSinceLastCollision(): number;
    }
}
