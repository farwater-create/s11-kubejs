import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $AdvancementBehaviour } from "@package/com/simibubi/create/foundation/advancement";
import { $PackagerBlockEntityAccessor } from "@package/net/liukrast/deployer/lib/mixin/accessors";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $List_, $Map } from "@package/java/util";
import { $PackageOrderWithCrafts, $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SmartBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $PRExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $Record, $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IItemHandlerModifiable, $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $TransformedInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $InventoryIdentifier, $InventoryIdentifier_ } from "@package/com/simibubi/create/api/packager";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $VersionedInventoryTrackerBehaviour, $InvManipulationBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/inventory";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $MutableInt, $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
export * as repackager from "@package/com/simibubi/create/content/logistics/packager/repackager";

declare module "@package/com/simibubi/create/content/logistics/packager" {
    export class $PackagerBlock extends $WrenchableDirectionalBlock implements $IBE<$PackagerBlockEntity>, $IWrenchable {
        getBlockEntityClass(): $Class<$PackagerBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$PackagerBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $PackagerBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($PackagerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PackagerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$PackagerBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$PackagerBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        static LINKED: $BooleanProperty;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$PackagerBlockEntity>;
        get blockEntityType(): $BlockEntityType<$PackagerBlockEntity>;
    }
    export class $PackagerGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $AllInventoryIdentifiers {
        static fallback(arg0: $Level, arg1: $BlockState_, arg2: $BlockFace): $InventoryIdentifier;
        static registerDefaults(): void;
        constructor();
    }
    export class $PackagerBlockEntity extends $SmartBlockEntity implements $Clearable, $PackagerBlockEntityAccessor {
        getAvailableItems(): $InventorySummary;
        attemptToSend(arg0: $List_<$PackagingRequest_>): void;
        clearContent(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        recheckIfLinksPresent(): void;
        getTrayOffset(arg0: number): number;
        redstoneModeActive(): boolean;
        updateSignAddress(): void;
        isTooBusyFor(arg0: $LogisticallyLinkedBehaviour$RequestType_): boolean;
        getRenderedBox(): $ItemStack;
        activate(): void;
        isTargetingSameInventory(arg0: $IdentifiedInventory_): boolean;
        unwrapBox(arg0: $ItemStack_, arg1: boolean): boolean;
        flashLink(): void;
        triggerStockCheck(): void;
        invokeGetLinkPos(): $BlockPos;
        invokeSupportsBlockEntity(arg0: $BlockEntity): boolean;
        getInvVersionTracker(): $VersionedInventoryTrackerBehaviour;
        getAdvancement(): $AdvancementBehaviour;
        targetInventory: $InvManipulationBehaviour;
        level: $Level;
        previouslyUnwrapped: $ItemStack;
        queuedExitingPackages: $List<$BigItemStack>;
        customComputerAddress: string;
        static ATTACHMENTS_NBT_KEY: string;
        buttonCooldown: number;
        inventory: $PackagerItemHandler;
        animationTicks: number;
        computerBehaviour: $AbstractComputerBehaviour;
        hasCustomComputerAddress: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        worldPosition: $BlockPos;
        redstonePowered: boolean;
        heldBox: $ItemStack;
        signBasedAddress: string;
        hasComparators: number;
        animationInward: boolean;
        static CYCLE: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get availableItems(): $InventorySummary;
        get renderedBox(): $ItemStack;
        get invVersionTracker(): $VersionedInventoryTrackerBehaviour;
        get advancement(): $AdvancementBehaviour;
    }
    export class $AllUnpackingHandlers {
        static registerDefaults(): void;
        constructor();
    }
    export class $PackagerVisual<T extends $PackagerBlockEntity> extends $AbstractBlockEntityVisual<T> implements $SimpleDynamicVisual {
        animate(arg0: number): void;
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        tray: $TransformedInstance;
        hatch: $TransformedInstance;
        lastTrayOffset: number;
        lastHatchPartial: $PartialModel;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $PackagerItemHandler implements $IItemHandlerModifiable {
        getSlots(): number;
        getStackInSlot(arg0: number): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
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
        constructor(arg0: $PackagerBlockEntity);
        get empty(): boolean;
        get width(): number;
        get height(): number;
        get allItems(): $List<$ItemStack>;
    }
    export class $IdentifiedInventory extends $Record {
        handler(): $IItemHandler;
        identifier(): $InventoryIdentifier;
        constructor(identifier: $InventoryIdentifier_, handler: $IItemHandler);
    }
    /**
     * Values that may be interpreted as {@link $IdentifiedInventory}.
     */
    export type $IdentifiedInventory_ = { identifier?: $InventoryIdentifier_, handler?: $IItemHandler,  } | [identifier?: $InventoryIdentifier_, handler?: $IItemHandler, ];
    export class $PackagerRenderer extends $SmartBlockEntityRenderer<$PackagerBlockEntity> {
        static getHatchModel(arg0: $PackagerBlockEntity): $PartialModel;
        static isHatchOpen(arg0: $PackagerBlockEntity): boolean;
        static getTrayModel(arg0: $BlockState_): $PartialModel;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $InventorySummary {
        getStacks(): $List<$BigItemStack>;
        isEmpty(): boolean;
        add(arg0: $ItemStack_, arg1: number): void;
        add(arg0: $InventorySummary): void;
        add(arg0: $BigItemStack): void;
        add(arg0: $ItemStack_): void;
        copy(): $InventorySummary;
        erase(arg0: $ItemStack_): boolean;
        getTotalCount(): number;
        getCountOf(arg0: $ItemStack_): number;
        getItemMap(): $Map<$Item, $List<$BigItemStack>>;
        divideAndSendTo(arg0: $ServerPlayer, arg1: $BlockPos_): void;
        getStacksByCount(): $List<$BigItemStack>;
        getTotalOfMatching(arg0: $Predicate_<$ItemStack>): number;
        addAllBigItemStacks(arg0: $List_<$BigItemStack>): void;
        addAllItemStacks(arg0: $List_<$ItemStack_>): void;
        static CODEC: $Codec<$InventorySummary>;
        contributingLinks: number;
        static EMPTY: $InventorySummary;
        constructor();
        get stacks(): $List<$BigItemStack>;
        get empty(): boolean;
        get totalCount(): number;
        get itemMap(): $Map<$Item, $List<$BigItemStack>>;
        get stacksByCount(): $List<$BigItemStack>;
    }
    export class $PackagingRequest extends $Record implements $PRExtension {
        context(): $PackageOrderWithCrafts;
        isEmpty(): boolean;
        count(): $MutableInt;
        getCount(): number;
        static create(arg0: $ItemStack_, arg1: number, arg2: string, arg3: number, arg4: $MutableBoolean, arg5: number, arg6: number, arg7: $PackageOrderWithCrafts_): $PackagingRequest;
        address(): string;
        item(): $ItemStack;
        subtract(arg0: number): void;
        packageCounter(): $MutableInt;
        deployer$isFlagged(): boolean;
        orderId(): number;
        linkIndex(): number;
        finalLink(): $MutableBoolean;
        deployer$flag(): void;
        constructor(item: $ItemStack_, count: $MutableInt, address: string, linkIndex: number, finalLink: $MutableBoolean, packageCounter: $MutableInt, orderId: number, context: $PackageOrderWithCrafts_);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PackagingRequest}.
     */
    export type $PackagingRequest_ = { orderId?: number, count?: $MutableInt, context?: $PackageOrderWithCrafts_, finalLink?: $MutableBoolean, item?: $ItemStack_, address?: string, packageCounter?: $MutableInt, linkIndex?: number,  } | [orderId?: number, count?: $MutableInt, context?: $PackageOrderWithCrafts_, finalLink?: $MutableBoolean, item?: $ItemStack_, address?: string, packageCounter?: $MutableInt, linkIndex?: number, ];
}
