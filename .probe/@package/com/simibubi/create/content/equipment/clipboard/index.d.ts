import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $NarratorStatus, $Minecraft } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ItemCopyingRecipe$SupportsItemCopying } from "@package/com/simibubi/create/foundation/recipe";
import { $Map, $List, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $ItemModelBuilder } from "@package/net/neoforged/neoforge/client/model/generators";
import { $PlayerInteractEvent$RightClickBlock, $PlayerInteractEvent$LeftClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $RenderHighlightEvent$Block } from "@package/net/neoforged/neoforge/client/event";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Consumer_, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $RegistrateItemModelProvider, $DataGenContext } from "@package/com/tterrag/registrate/providers";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $DataComponentType, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $Item, $Item$Properties, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $MutableComponent, $MutableComponent_, $Component } from "@package/net/minecraft/network/chat";
import { $Renderable, $CycleButton } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AttachFace, $BooleanProperty, $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundType, $FaceAttachedHorizontalDirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/equipment/clipboard" {
    export class $ClipboardEntry {
        displayItem(arg0: $ItemStack_, arg1: number): $ClipboardEntry;
        static readAll(arg0: $ClipboardContent_): $List<$List<$ClipboardEntry>>;
        static readAll(arg0: $ItemStack_): $List<$List<$ClipboardEntry>>;
        static readAll(arg0: $DataComponentMap_): $List<$List<$ClipboardEntry>>;
        static getLastViewedEntries(arg0: $ItemStack_): $List<$ClipboardEntry>;
        static CODEC: $Codec<$ClipboardEntry>;
        itemAmount: number;
        icon: $ItemStack;
        checked: boolean;
        text: $MutableComponent;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClipboardEntry>;
        constructor(arg0: boolean, arg1: $MutableComponent_);
    }
    export class $ClipboardOverrides {
        static addOverrideModels(arg0: $DataGenContext<$Item, $ClipboardBlockItem>, arg1: $RegistrateItemModelProvider): $ItemModelBuilder;
        static registerModelOverridesClient(arg0: $ClipboardBlockItem): void;
        constructor();
    }
    export class $ClipboardBlockItem extends $BlockItem implements $ItemCopyingRecipe$SupportsItemCopying {
        getComponentType(): $DataComponentType<never>;
        registerModelOverrides(): void;
        createCopy(arg0: $ItemStack_, arg1: number): $ItemStack;
        canCopyToItem(arg0: $ItemStack_): boolean;
        canCopyFromItem(arg0: $ItemStack_): boolean;
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
        get componentType(): $DataComponentType<never>;
    }
    export class $ClipboardScreen extends $AbstractSimiScreen {
        reopenWith(arg0: $ClipboardContent_): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        content: $ClipboardContent;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        targetedBlock: $BlockPos;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: number, arg1: $DataComponentMap_, arg2: $BlockPos_);
    }
    export class $ClipboardScreen$LineInfo {
    }
    export class $ClipboardCloneable {
    }
    export interface $ClipboardCloneable {
        getClipboardKey(): string;
        readFromClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Player, arg3: $Direction_, arg4: boolean): boolean;
        writeToClipboard(arg0: $HolderLookup$Provider, arg1: $CompoundTag_, arg2: $Direction_): boolean;
        get clipboardKey(): string;
    }
    export class $ClipboardBlockEntity extends $SmartBlockEntity {
        onEditedBy(arg0: $Player): void;
        updateWrittenState(): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $ClipboardContent extends $Record {
        type(): $ClipboardOverrides$ClipboardType;
        setReadOnly(arg0: boolean): $ClipboardContent;
        readOnly(): boolean;
        setType(arg0: $ClipboardOverrides$ClipboardType_): $ClipboardContent;
        previouslyOpenedPage(): number;
        pages(): $List<$List<$ClipboardEntry>>;
        setPreviouslyOpenedPage(arg0: number): $ClipboardContent;
        setPages(arg0: $List_<$List_<$ClipboardEntry>>): $ClipboardContent;
        setCopiedValues(arg0: $CompoundTag_): $ClipboardContent;
        copiedValues(): ($CompoundTag) | undefined;
        static PAGES_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$List<$ClipboardEntry>>>;
        static CODEC: $Codec<$ClipboardContent>;
        static PAGES_CODEC: $Codec<$List<$List<$ClipboardEntry>>>;
        static EMPTY: $ClipboardContent;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClipboardContent>;
        constructor(arg0: $ClipboardOverrides$ClipboardType_, arg1: $List_<$List_<$ClipboardEntry>>, arg2: boolean);
        constructor(type: $ClipboardOverrides$ClipboardType_, pages: $List_<$List_<$ClipboardEntry>>, readOnly: boolean, previouslyOpenedPage: number, copiedValues: ($CompoundTag_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ClipboardContent}.
     */
    export type $ClipboardContent_ = { pages?: $List_<$List_<$ClipboardEntry>>, readOnly?: boolean, type?: $ClipboardOverrides$ClipboardType_, previouslyOpenedPage?: number, copiedValues?: ($CompoundTag_) | undefined,  } | [pages?: $List_<$List_<$ClipboardEntry>>, readOnly?: boolean, type?: $ClipboardOverrides$ClipboardType_, previouslyOpenedPage?: number, copiedValues?: ($CompoundTag_) | undefined, ];
    export class $ClipboardValueSettingsHandler {
        static clientTick(): void;
        static leftClickToPaste(arg0: $PlayerInteractEvent$LeftClickBlock): void;
        static rightClickToCopy(arg0: $PlayerInteractEvent$RightClickBlock): void;
        static drawCustomBlockSelection(arg0: $RenderHighlightEvent$Block): void;
        constructor();
    }
    export class $ClipboardBlock extends $FaceAttachedHorizontalDirectionalBlock implements $IBE<$ClipboardBlockEntity>, $IWrenchable, $ProperWaterloggedBlock {
        getBlockEntityClass(): $Class<$ClipboardBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$ClipboardBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $ClipboardBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($ClipboardBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ClipboardBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$ClipboardBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$ClipboardBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        fluidState(arg0: $BlockState_): $FluidState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
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
        static WRITTEN: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$ClipboardBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$ClipboardBlockEntity>;
        get blockEntityType(): $BlockEntityType<$ClipboardBlockEntity>;
    }
    export class $ClipboardScreen$DisplayCache {
    }
    export class $ClipboardScreen$Pos2i extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ClipboardScreen$Pos2i}.
     */
    export type $ClipboardScreen$Pos2i_ = { x?: number, y?: number,  } | [x?: number, y?: number, ];
    export class $ClipboardEditPacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        hotbarSlot(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handler$idb009$aeroclaims$onHandle(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        targetedBlock(): $BlockPos;
        handler$zek001$openpartiesandclaims$onHandle(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        clipboardContent(): $ClipboardContent;
        static clipboardProcessor(arg0: $ClipboardContent_): $ClipboardContent;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ClipboardEditPacket>;
        constructor(hotbarSlot: number, clipboardContent: $ClipboardContent_, targetedBlock: $BlockPos_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ClipboardEditPacket}.
     */
    export type $ClipboardEditPacket_ = { clipboardContent?: $ClipboardContent_, hotbarSlot?: number, targetedBlock?: $BlockPos_,  } | [clipboardContent?: $ClipboardContent_, hotbarSlot?: number, targetedBlock?: $BlockPos_, ];
    export class $ClipboardOverrides$ClipboardType extends $Enum<$ClipboardOverrides$ClipboardType> implements $StringRepresentable {
        static values(): $ClipboardOverrides$ClipboardType[];
        static valueOf(arg0: string): $ClipboardOverrides$ClipboardType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static WRITTEN: $ClipboardOverrides$ClipboardType;
        static CODEC: $Codec<$ClipboardOverrides$ClipboardType>;
        file: string;
        static EDITING: $ClipboardOverrides$ClipboardType;
        static ID: $ResourceLocation;
        static EMPTY: $ClipboardOverrides$ClipboardType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClipboardOverrides$ClipboardType>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ClipboardOverrides$ClipboardType}.
     */
    export type $ClipboardOverrides$ClipboardType_ = "empty" | "written" | "editing";
}
