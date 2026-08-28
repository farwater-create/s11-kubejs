import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CreateAdvancement } from "@package/com/simibubi/create/foundation/advancement";
import { $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $IInteractionChecker } from "@package/com/simibubi/create/foundation/utility";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $PartialSafeNBT } from "@package/com/simibubi/create/api/schematic/nbt";
import { $UUID, $List, $UUID_, $Set_, $List_, $Collection } from "@package/java/util";
import { $RenderedBehaviourExtension, $KineticBehaviourExtension, $ItemRequirementBehaviourExtension } from "@package/com/cake/azimuth/behaviour/extensions";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $Direction$Axis_, $BlockPos_, $Direction$Axis, $HolderGetter } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Runnable_, $Object } from "@package/java/lang";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $SpecialBlockEntityItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualBlockEntity } from "@package/net/createmod/ponder/api";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $ClientboundBlockEntityDataPacket } from "@package/net/minecraft/network/protocol/game";
import { $SuperBlockEntityBehaviour, $AzimuthSmartBlockEntityExtension } from "@package/com/cake/azimuth/behaviour";
import { $ISmartBlockEntityControl } from "@package/net/pinkcats/createlazytick/bridge/Create";
import { $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $LazyTickTier } from "@package/net/pinkcats/createlazytick/helper/tooltip";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as behaviour from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
export * as renderer from "@package/com/simibubi/create/foundation/blockEntity/renderer";

declare module "@package/com/simibubi/create/foundation/blockEntity" {
    export class $ComparatorUtil {
        static fractionToRedstoneLevel(arg0: number): number;
        static levelOfSmartFluidTank(arg0: $BlockGetter, arg1: $BlockPos_): number;
        constructor();
    }
    export class $RemoveBlockEntityPacket extends $BlockEntityDataPacket<$SyncedBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RemoveBlockEntityPacket>;
        constructor(arg0: $BlockPos_);
    }
    export class $SyncedBlockEntity extends $BlockEntity {
        writeClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $CompoundTag;
        readClient(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        notifyUpdate(): void;
        sendData(): void;
        blockHolderGetter(): $HolderGetter<$Block>;
        getUpdatePacket(): $ClientboundBlockEntityDataPacket;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get updatePacket(): $ClientboundBlockEntityDataPacket;
    }
    export class $ItemHandlerContainer implements $Container {
        isEmpty(): boolean;
        getItem(arg0: number): $ItemStack;
        removeItem(arg0: number, arg1: number): $ItemStack;
        clearContent(): void;
        stopOpen(arg0: $Player): void;
        startOpen(arg0: $Player): void;
        getMaxStackSize(): number;
        stillValid(arg0: $Player): boolean;
        setChanged(): void;
        canPlaceItem(arg0: number, arg1: $ItemStack_): boolean;
        removeItemNoUpdate(arg0: number): $ItemStack;
        getContainerSize(): number;
        setItem(arg0: number, arg1: $ItemStack_): void;
        hasAnyOf(arg0: $Set_<$Item>): boolean;
        countItem(arg0: $Item): number;
        canTakeItem(arg0: $Container, arg1: number, arg2: $ItemStack_): boolean;
        getMaxStackSize(arg0: $ItemStack_): number;
        hasAnyMatching(arg0: $Predicate_<$ItemStack>): boolean;
        setTransferCooldown(arg0: number): void;
        canReceiveTransferCooldown(): boolean;
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        clear(): void;
        self(): $Container;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        getWidth(): number;
        getSlots(): number;
        setChanged(): void;
        getHeight(): number;
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        getStackInSlot(slot: number): $ItemStack;
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        count(): number;
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        constructor(arg0: $IItemHandlerModifiable);
        get containerSize(): number;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
        getRenderBoundingBox(): $AABB;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get renderBoundingBox(): $AABB;
    }
    export class $IMultiBlockEntityContainer$Fluid {
    }
    export interface $IMultiBlockEntityContainer$Fluid extends $IMultiBlockEntityContainer {
        getFluid(arg0: number): $FluidStack;
        getTankSize(arg0: number): number;
        setTankSize(arg0: number, arg1: number): void;
        getTank(arg0: number): $IFluidTank;
        hasTank(): boolean;
    }
    export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT, $IInteractionChecker, $SpecialBlockEntityItemRequirement, $VirtualBlockEntity, $AzimuthSmartBlockEntityExtension, $ISmartBlockEntityControl, $IHaveGoggleInformation {
        remove(): void;
        isVirtual(): boolean;
        initialize(): void;
        destroy(): void;
        invalidate(): void;
        handler$zga000$azimuth$constructWithAdditionalBehaviours(arg0: $BlockEntityType<any>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CallbackInfo): void;
        tick(): void;
        azimuth$getSuperBehaviours(): $SuperBlockEntityBehaviour[];
        addToGoggleTooltip(arg0: $List_<any>, arg1: boolean): boolean;
        addBehaviours(arg0: $List_<$BlockEntityBehaviour>): void;
        setLazyTickRate(arg0: number): void;
        lazyTick(): void;
        lazytick$getSyncedTier(): $LazyTickTier;
        lazytick$isDefaultState(): boolean;
        lazytick$setExtraData(arg0: number): void;
        lazytick$getExtraData(): number;
        attachBehaviourLate(arg0: $BlockEntityBehaviour): void;
        lazytick$setSyncedTier(arg0: number, arg1: number): void;
        createLazyTick$setCurrentSuperTick(arg0: number): void;
        createLazyTick$setOwnerUUID(arg0: $UUID_): void;
        azimuth$invalidateRenderBoundingBox(): void;
        azimuth$getItemRequirementExtensionCache(): $ItemRequirementBehaviourExtension[];
        azimuth$updateBehaviourExtensionCache(): void;
        writeSafe(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        sendToMenu(arg0: $RegistryFriendlyByteBuf): void;
        CLT$getPos(): $BlockPos;
        award(arg0: $CreateAdvancement): void;
        addBehavioursDeferred(arg0: $List_<$BlockEntityBehaviour>): void;
        createLazyTick$setForcedValue(arg0: number): void;
        createLazyTick$isDelayForced(): boolean;
        createLazyTick$getDynamicValue(): number;
        createLazyTick$setDynamicValue(arg0: number): void;
        createLazyTick$setDelayForced(arg0: boolean): void;
        createLazyTick$getForcedValue(): number;
        createLazyTick$getCurrentSuperTick(): number;
        createLazyTick$getOwnerName(): string;
        handler$zga000$azimuth$setRemoved(arg0: $CallbackInfo): void;
        azimuth$getRenderedExtensionCache(): $RenderedBehaviourExtension[];
        createLazyTick$setOwnerName(arg0: string): void;
        createLazyTick$getOwnerUUID(): $UUID;
        azimuth$searchSuperBehaviours(): $SuperBlockEntityBehaviour[];
        azimuth$searchExtensionBehaviours(arg0: $Predicate_<any>): $List<any>;
        azimuth$addCacheClearListener(arg0: $Runnable_): void;
        azimuth$getKineticExtensionCache(): $KineticBehaviourExtension[];
        createLazyTick$sendBlockUpdated(): void;
        getAllBehaviours(): $Collection<$BlockEntityBehaviour>;
        getRequiredItems(arg0: $BlockState_): $ItemRequirement;
        markVirtual(): void;
        forEachBehaviour(arg0: $Consumer_<$BlockEntityBehaviour>): void;
        awardIfNear(arg0: $CreateAdvancement, arg1: number): void;
        CLT$getDimension(): $ResourceKey<any>;
        refreshBlockState(): void;
        getBehaviour<T extends $BlockEntityBehaviour>(arg0: $BehaviourType<T>): T;
        removeBehaviour(arg0: $BehaviourType<never>): void;
        isChunkUnloaded(): boolean;
        canPlayerUse(arg0: $Player): boolean;
        registerAwardables(arg0: $List_<$BlockEntityBehaviour>, ...arg1: $CreateAdvancement[]): void;
        CLT$onClientRequest(arg0: number): void;
        createLazyTick$getCustomTooltipInfo(): $List<$Component>;
        createLazyTick$shouldRenderMode(): boolean;
        createLazyTick$shouldRenderTier(): boolean;
        containedFluidTooltip(arg0: $List_<$Component_>, arg1: boolean, arg2: $IFluidHandler): boolean;
        getIcon(arg0: boolean): $ItemStack;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get virtual(): boolean;
        set lazyTickRate(value: number);
        get allBehaviours(): $Collection<$BlockEntityBehaviour>;
        get chunkUnloaded(): boolean;
    }
    export class $IMultiBlockEntityContainer {
    }
    export interface $IMultiBlockEntityContainer {
        getWidth(): number;
        getHeight(): number;
        getMainConnectionAxis(): $Direction$Axis;
        preventConnectivityUpdate(): void;
        getMaxLength(arg0: $Direction$Axis_, arg1: number): number;
        getExtraData(): $Object;
        isController(): boolean;
        getController(): $BlockPos;
        getMaxWidth(): number;
        getControllerBE<T extends $BlockEntity>(): T;
        modifyExtraData(arg0: $Object): $Object;
        setExtraData(arg0: $Object): void;
        notifyMultiUpdated(): void;
        setController(arg0: $BlockPos_): void;
        getMainAxisOf(arg0: $BlockEntity): $Direction$Axis;
        removeController(arg0: boolean): void;
        getLastKnownPos(): $BlockPos;
        setWidth(arg0: number): void;
        setHeight(arg0: number): void;
        get mainConnectionAxis(): $Direction$Axis;
        get maxWidth(): number;
        get controllerBE(): T;
        get lastKnownPos(): $BlockPos;
    }
    export class $SmartBlockEntityTicker<T extends $BlockEntity> implements $BlockEntityTicker<T> {
        tick(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: T): void;
        constructor();
    }
    export class $IMultiBlockEntityContainer$Inventory {
    }
    export interface $IMultiBlockEntityContainer$Inventory extends $IMultiBlockEntityContainer {
        hasInventory(): boolean;
    }
    export class $IMergeableBE {
    }
    export interface $IMergeableBE {
        accept(arg0: $BlockEntity): void;
    }
    /**
     * Values that may be interpreted as {@link $IMergeableBE}.
     */
    export type $IMergeableBE_ = ((arg0: $BlockEntity) => void);
}
