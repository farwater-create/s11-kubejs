import { $StockInventoryType } from "@package/net/liukrast/deployer/lib/logistics/packager";
import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $AbstractSimiContainerScreen, $GhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $InteractionResult, $MenuProvider, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $MenuType, $Slot, $ContainerSynchronizer, $AbstractContainerMenu, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $RRBEExtension, $RRSExtension } from "@package/net/liukrast/deployer/lib/mixinExtensions";
import { $Item, $Item$Properties, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $BooleanProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $LogisticallyLinkedBehaviour, $LogisticallyLinkedBlockItem } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BasePacketPayload$PacketTypeProvider, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map, $Set, $List, $Map_, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $StockCheckingBlockEntity, $PackageOrderWithCrafts_, $PackageOrderWithCrafts, $StockTickerBlockEntity } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $RequesterTabScreen } from "@package/net/liukrast/deployer/lib/logistics/packager/screen";
import { $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $NonNullList, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $SlotItemHandler, $IItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $GenericOrderContained_, $GenericOrderContained } from "@package/net/liukrast/deployer/lib/logistics/stockTicker";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/redstoneRequester" {
    export class $RedstoneRequesterMenu extends $GhostItemMenu<$RedstoneRequesterBlockEntity> {
        static create(arg0: number, arg1: $Inventory, arg2: $RedstoneRequesterBlockEntity): $RedstoneRequesterMenu;
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        ghostInventory: $ItemStackHandler;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        playerInventory: $Inventory;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        contentHolder: $RedstoneRequesterBlockEntity;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        constructor(arg0: $MenuType<never>, arg1: number, arg2: $Inventory, arg3: $RedstoneRequesterBlockEntity);
        constructor(arg0: $MenuType<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
    }
    export class $RedstoneRequesterEffectPacket extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        success(): boolean;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RedstoneRequesterEffectPacket>;
        constructor(pos: $BlockPos_, success: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $RedstoneRequesterEffectPacket}.
     */
    export type $RedstoneRequesterEffectPacket_ = { success?: boolean, pos?: $BlockPos_,  } | [success?: boolean, pos?: $BlockPos_, ];
    export class $AutoRequestData extends $Record {
        isValid(): boolean;
        targetOffset(): $BlockPos;
        encodedRequest(): $PackageOrderWithCrafts;
        targetDim(): string;
        encodedTargetAddress(): string;
        writeToItem(arg0: $BlockPos_, arg1: $ItemStack_): void;
        static readFromItem(arg0: $Level, arg1: $Player, arg2: $BlockPos_, arg3: $ItemStack_): $AutoRequestData;
        static CODEC: $Codec<$AutoRequestData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AutoRequestData>;
        constructor();
        constructor(encodedRequest: $PackageOrderWithCrafts_, encodedTargetAddress: string, targetOffset: $BlockPos_, targetDim: string, isValid: boolean);
        get valid(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AutoRequestData}.
     */
    export type $AutoRequestData_ = { targetOffset?: $BlockPos_, encodedTargetAddress?: string, encodedRequest?: $PackageOrderWithCrafts_, targetDim?: string, isValid?: boolean,  } | [targetOffset?: $BlockPos_, encodedTargetAddress?: string, encodedRequest?: $PackageOrderWithCrafts_, targetDim?: string, isValid?: boolean, ];
    export class $RedstoneRequesterBlockEntity extends $StockCheckingBlockEntity implements $MenuProvider, $RRBEExtension {
        use(arg0: $Player): $InteractionResult;
        getDisplayName(): $Component;
        deployer$getAllEncodedRequests(): $Map<any, any>;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        deployer$setEncodedRequest(arg0: $StockInventoryType<any, any, any>, arg1: $GenericOrderContained_<any>): void;
        playEffect(arg0: boolean): void;
        triggerRequest(): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        deployer$getEncodedRequest(arg0: $StockInventoryType<any, any, any>): $GenericOrderContained<any>;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        worldPosition: $BlockPos;
        encodedTargetAdress: string;
        level: $Level;
        encodedRequest: $PackageOrderWithCrafts;
        static ATTACHMENTS_NBT_KEY: string;
        behaviour: $LogisticallyLinkedBehaviour;
        lastRequestSucceeded: boolean;
        hasComparators: number;
        computerBehaviour: $AbstractComputerBehaviour;
        allowPartialRequests: boolean;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get displayName(): $Component;
    }
    export class $RedstoneRequesterBlock extends $Block implements $IBE<$RedstoneRequesterBlockEntity>, $IWrenchable {
        static appendRequesterTooltip(arg0: $ItemStack_, arg1: $List_<$Component_>): void;
        getBlockEntityClass(): $Class<$RedstoneRequesterBlockEntity>;
        static programRequester(arg0: $ServerPlayer, arg1: $StockTickerBlockEntity, arg2: $PackageOrderWithCrafts_, arg3: string): void;
        getBlockEntityType(): $BlockEntityType<$RedstoneRequesterBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $RedstoneRequesterBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($RedstoneRequesterBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneRequesterBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$RedstoneRequesterBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$RedstoneRequesterBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
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
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$RedstoneRequesterBlockEntity>;
        get blockEntityType(): $BlockEntityType<$RedstoneRequesterBlockEntity>;
    }
    export class $RedstoneRequesterScreen extends $AbstractSimiContainerScreen<$RedstoneRequesterMenu> implements $RRSExtension {
        deployer$getTab(): $RequesterTabScreen<any>;
        deployer$mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        deployer$insertStack(arg0: $ItemStack_): void;
        deployer$receiveData(arg0: $Map_<any, any>): void;
        handler$jbj001$deployer$mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $CallbackInfoReturnable<any>): void;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $RedstoneRequesterMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(arg0: $RedstoneRequesterMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $RedstoneRequesterConfigurationPacket extends $BlockEntityConfigurationPacket<$RedstoneRequesterBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RedstoneRequesterConfigurationPacket>;
        constructor(arg0: $BlockPos_, arg1: string, arg2: boolean, arg3: $List_<number>);
    }
    export class $RedstoneRequesterMenu$SorterProofSlot extends $SlotItemHandler {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
        constructor(arg0: $IItemHandler, arg1: number, arg2: number, arg3: number);
    }
    export class $AutoRequestData$Mutable {
        toImmutable(): $AutoRequestData;
        targetDim: string;
        encodedRequest: $PackageOrderWithCrafts;
        isValid: boolean;
        encodedTargetAddress: string;
        targetOffset: $BlockPos;
        constructor();
        constructor(arg0: $AutoRequestData_);
    }
    export class $RedstoneRequesterBlockItem extends $LogisticallyLinkedBlockItem {
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Block, arg1: $Item$Properties);
    }
}
