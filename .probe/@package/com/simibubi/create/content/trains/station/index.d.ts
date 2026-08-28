import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CubeMap, $MultiBufferSource_, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $PackagePortBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SingleBlockEntityEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $NarratorStatus, $Minecraft, $StringSplitter } from "@package/net/minecraft/client";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $TrackNode, $TrackNodeLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $DoorControl_, $DoorControlBehaviour } from "@package/com/simibubi/create/content/decoration/slidingDoor";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $ScreenElement_ } from "@package/net/createmod/catnip/gui/element";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";
import { $Transform } from "@package/dev/engine_room/flywheel/lib/transform";
import { $ITrackBlock, $TrackTargetingBehaviour } from "@package/com/simibubi/create/content/trains/track";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $UUID_, $Map, $UUID, $List } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $Consumer_, $Function, $Function_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $MapDecoration } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Couple, $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Renderable, $CycleButton, $WidgetTooltipHolder } from "@package/net/minecraft/client/gui/components";
import { $IItemHandlerModifiable, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $IconButton } from "@package/com/simibubi/create/foundation/gui/widget";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/station" {
    export class $TrainEditPacket implements $CustomPacketPayload {
        handleSided(arg0: $Player): void;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
    }
    export class $TrainEditPacket$Serverbound extends $TrainEditPacket implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainEditPacket$Serverbound>;
        constructor(arg0: $UUID_, arg1: string, arg2: $ResourceLocation_, arg3: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $StationBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        isAssembling(): boolean;
        enterAssemblyMode(arg0: $ServerPlayer): boolean;
        exitAssemblyMode(): boolean;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        cancelAssembly(): void;
        getAssemblyDirection(): $Direction;
        getStation(): $GlobalStation;
        updateName(arg0: string): boolean;
        assemble(arg0: $UUID_): void;
        trackClicked(arg0: $Player, arg1: $InteractionHand_, arg2: $ITrackBlock, arg3: $BlockState_, arg4: $BlockPos_): boolean;
        resolveFlagAngle(): boolean;
        getAutoSchedule(): $ItemStack;
        dropSchedule(arg0: $ServerPlayer, arg1: $Train): void;
        refreshAssemblyInfo(): void;
        tryDisassembleTrain(arg0: $ServerPlayer): boolean;
        tryEnterAssemblyMode(): boolean;
        isValidBogeyOffset(arg0: number): boolean;
        updateMapColor(arg0: number): void;
        attachPackagePort(arg0: $PackagePortBlockEntity): void;
        removePackagePort(arg0: $PackagePortBlockEntity): void;
        lastDisassembledTrainName: $Component;
        flag: $LerpedFloat;
        static assemblyAreas: $WorldAttached<$Map<$BlockPos, $BoundingBox>>;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        doorControls: $DoorControlBehaviour;
        lastDisassembledMapColorIndex: number;
        computerBehaviour: $AbstractComputerBehaviour;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        worldPosition: $BlockPos;
        hasComparators: number;
        edgePoint: $TrackTargetingBehaviour<$GlobalStation>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get assembling(): boolean;
        get assemblyDirection(): $Direction;
        get station(): $GlobalStation;
        get autoSchedule(): $ItemStack;
    }
    export class $NoShadowFontWrapper extends $Font {
        random: $RandomSource;
        filterFishyGlyphs: boolean;
        fonts: $Function<$ResourceLocation, $FontSet>;
        static ALPHA_CUTOFF: number;
        lineHeight: number;
        splitter: $StringSplitter;
        constructor(arg0: $Font);
    }
    export class $StationBlock extends $Block implements $IBE<$StationBlockEntity>, $IWrenchable, $ProperWaterloggedBlock {
        getBlockEntityClass(): $Class<$StationBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$StationBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $StationBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($StationBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StationBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$StationBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$StationBlockEntity>): void;
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
        static ASSEMBLING: $BooleanProperty;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$StationBlockEntity>;
        get blockEntityType(): $BlockEntityType<$StationBlockEntity>;
    }
    export class $GlobalStation extends $SingleBlockEntityEdgePoint {
        getImminentTrain(): $Train;
        getPresentTrain(): $Train;
        getNearestTrain(): $Train;
        reserveFor(arg0: $Train): void;
        canApproachFrom(arg0: $TrackNode): boolean;
        trainDeparted(arg0: $Train): void;
        runMailTransfer(): void;
        cancelReservation(arg0: $Train): void;
        edgeLocation: $Couple<$TrackNodeLocation>;
        blockEntityPos: $BlockPos;
        connectedPorts: $Map<$BlockPos, $GlobalPackagePort>;
        blockEntityDimension: $ResourceKey<$Level>;
        name: string;
        assembling: boolean;
        id: $UUID;
        position: number;
        nearestTrain: $WeakReference<$Train>;
        constructor();
        get imminentTrain(): $Train;
        get presentTrain(): $Train;
    }
    export class $GlobalPackagePort {
        saveOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        restoreOfflineBuffer(arg0: $IItemHandlerModifiable): void;
        address: string;
        primed: boolean;
        offlineBuffer: $ItemStackHandler;
        constructor();
    }
    export class $TrainEditPacket$TrainEditReturnPacket extends $TrainEditPacket implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainEditPacket$TrainEditReturnPacket>;
        constructor(arg0: $UUID_, arg1: string, arg2: $ResourceLocation_, arg3: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    export class $AssemblyScreen extends $AbstractStationScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $StationBlockEntity, arg1: $GlobalStation);
    }
    export class $StationMarker {
        getName(): $Component;
        static load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $StationMarker;
        getId(): string;
        save(arg0: $HolderLookup$Provider): $CompoundTag;
        getTarget(): $BlockPos;
        getSource(): $BlockPos;
        static createStationDecoration(arg0: number, arg1: number, arg2: ($Component_) | undefined): $MapDecoration;
        static fromWorld(arg0: $BlockGetter, arg1: $BlockPos_): $StationMarker;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $Component_);
        get name(): $Component;
        get id(): string;
        get target(): $BlockPos;
        get source(): $BlockPos;
    }
    export class $WideIconButton extends $IconButton {
        static COLOR_SUCCESS: $Couple<$Color>;
        green: boolean;
        visible: boolean;
        static HEADER_RGB: $Color;
        lockedTooltipY: number;
        tooltip: $WidgetTooltipHolder;
        static COLOR_HOVER: $Couple<$Color>;
        active: boolean;
        static COLOR_CLICK: $Couple<$Color>;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static HINT_RGB: $Color;
        static COLOR_IDLE: $Couple<$Color>;
        lockedTooltipX: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static COLOR_DISABLED: $Couple<$Color>;
        static COLOR_FAIL: $Couple<$Color>;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $ScreenElement_);
    }
    export class $StationRenderer extends $SafeBlockEntityRenderer<$StationBlockEntity> {
        shouldRenderOffScreen(arg0: $StationBlockEntity): boolean;
        static transformFlag(arg0: $Transform<never>, arg1: $StationBlockEntity, arg2: number, arg3: number, arg4: boolean): void;
        static renderFlag(arg0: $PartialModel, arg1: $StationBlockEntity, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $AbstractStationScreen extends $AbstractSimiScreen {
        getTrainIconWidth(arg0: $Train): number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $StationBlockEntity, arg1: $GlobalStation);
    }
    export class $StationMapData {
    }
    export interface $StationMapData {
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        addStationMarker(arg0: $StationMarker): void;
    }
    export class $StationScreen extends $AbstractStationScreen {
        mapModsPresent(): boolean;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $StationBlockEntity, arg1: $GlobalStation);
    }
    export class $StationEditPacket extends $BlockEntityConfigurationPacket<$StationBlockEntity> {
        static configure(arg0: $BlockPos_, arg1: boolean, arg2: string, arg3: $DoorControl_): $StationEditPacket;
        static tryDisassemble(arg0: $BlockPos_): $StationEditPacket;
        static tryAssemble(arg0: $BlockPos_): $StationEditPacket;
        static dropSchedule(arg0: $BlockPos_): $StationEditPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StationEditPacket>;
    }
}
