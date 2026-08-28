import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity, $SyncedBlockEntity, $IMergeableBE } from "@package/com/simibubi/create/foundation/blockEntity";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $DeltaTracker } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $InputEvent$InteractionKeyMappingTriggered, $RenderHighlightEvent$Block } from "@package/net/neoforged/neoforge/client/event";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $PortalTrackProvider$Exit, $PortalTrackProvider_ } from "@package/com/simibubi/create/api/contraption/train";
import { $SuperRenderTypeBuffer } from "@package/net/createmod/catnip/render";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $InteractionResultHolder, $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $TrackNodeLocation$DiscoveredLocation, $TrackNodeLocation, $TrackGraph, $EdgePointType, $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $Instance } from "@package/dev/engine_room/flywheel/api/instance";
import { $Item, $Item$Properties, $BlockItem, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockEntityConfigurationPacket } from "@package/com/simibubi/create/foundation/networking";
import { $MultiPosDestructionHandler, $ReducedDestroyEffects } from "@package/com/simibubi/create/foundation/block/render";
import { $NonNullBiFunction, $NonNullSupplier_, $NonNullSupplier } from "@package/com/tterrag/registrate/util/nullness";
import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $BooleanProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BakedModelWrapper } from "@package/net/neoforged/neoforge/client/model";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $AbstractVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $ShaderLightVisual, $BlockEntityVisual, $SectionTrackedVisual$SectionCollector_ } from "@package/dev/engine_room/flywheel/api/visual";
import { $Portal_, $Mirror_, $SoundType, $Block, $Rotation_, $EntityBlock } from "@package/net/minecraft/world/level/block";
import { $BlockFace } from "@package/net/createmod/catnip/math";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $Affine } from "@package/dev/engine_room/flywheel/lib/transform";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Random, $Set_, $Map, $Set, $Spliterator, $Iterator, $List, $Collection_, $Collection } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BlockEntityBehaviour, $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $PlayerInteractEvent$RightClickBlock } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Supplier_, $Consumer_, $BiConsumer_, $Function_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_, $Direction$AxisDirection, $Direction_, $Direction, $IdMapper, $Direction$AxisDirection_ } from "@package/net/minecraft/core";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IHaveBigOutline, $IBE, $ProperWaterloggedBlock } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Iterable, $Record, $Class, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Pair, $Couple, $WorldAttached } from "@package/net/createmod/catnip/data";
import { $LevelAccessor, $ItemLike_, $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $FluidState, $Fluid } from "@package/net/minecraft/world/level/material";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $LayeredDraw$Layer, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockEntity, $BlockEntityTicker, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/track" {
    export class $TrackModel extends $BakedModelWrapper<$BakedModel> {
        constructor(arg0: $BakedModel);
    }
    export class $TrackVoxelShapes {
        static orthogonal(): $VoxelShape;
        static diagonal(): $VoxelShape;
        static ascending(): $VoxelShape;
        static longOrthogonalX(): $VoxelShape;
        static longOrthogonalZ(): $VoxelShape;
        static longOrthogonalZOffset(): $VoxelShape;
        constructor();
    }
    export class $CurvedTrackSelectionPacket extends $BlockEntityConfigurationPacket<$TrackBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CurvedTrackSelectionPacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: boolean, arg3: number, arg4: number);
    }
    export class $TrackBlockEntityTilt {
        getYOffsetForAxisEnd(arg0: $Vec3_): number;
        static compareHandles(arg0: $Vec3_, arg1: $Vec3_): boolean;
        undoSmoothing(): void;
        restoreToOriginalCurve(arg0: $BezierConnection): $BezierConnection;
        captureSmoothingHandles(): void;
        tryApplySmoothing(): void;
        static ASCENDING_PROPERTY: $ModelProperty<number>;
        smoothingAngle: (number) | undefined;
        constructor(arg0: $TrackBlockEntity);
    }
    export class $TrackBlock$RenderProperties extends $ReducedDestroyEffects implements $MultiPosDestructionHandler {
        getExtraPositions(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): $Set<$BlockPos>;
        constructor();
    }
    export class $FakeTrackBlock extends $Block implements $EntityBlock, $ProperWaterloggedBlock {
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        static keepAlive(arg0: $LevelAccessor, arg1: $BlockPos_): void;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getTicker<T extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<T>): $BlockEntityTicker<T>;
        fluidState(arg0: $BlockState_): $FluidState;
        withWater(arg0: $BlockState_, arg1: $BlockPlaceContext): $BlockState;
        updateWater(arg0: $LevelAccessor, arg1: $BlockState_, arg2: $BlockPos_): void;
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
    }
    export class $TrackVisual extends $AbstractVisual implements $BlockEntityVisual<$TrackBlockEntity>, $ShaderLightVisual {
        collectCrumblingInstances(arg0: $Consumer_<$Instance>): void;
        _delete(): void;
        setSectionCollector(arg0: $SectionTrackedVisual$SectionCollector_): void;
        collectLightSections(): $LongSet;
        constructor(arg0: $VisualizationContext, arg1: $TrackBlockEntity, arg2: number);
        set sectionCollector(value: $SectionTrackedVisual$SectionCollector_);
    }
    export class $TrackMaterial {
        getBlock(): $TrackBlock;
        static deserialize(arg0: string): $TrackMaterial;
        resourceName(): string;
        asStack(arg0: number): $ItemStack;
        asStack(): $ItemStack;
        static fromItem(arg0: $Item): $TrackMaterial;
        isFromMod(arg0: string): boolean;
        static allBlocks(): $List<$NonNullSupplier<$Block>>;
        static allFromMod(arg0: string): $List<$TrackMaterial>;
        createBlock(arg0: $BlockBehaviour$Properties): $TrackBlock;
        getModelHolder(): $TrackMaterial$TrackModelHolder;
        getBlockSupplier(): $NonNullSupplier<$TrackBlock>;
        static allBlocksFromMod(arg0: string): $List<$NonNullSupplier<$Block>>;
        static ALL: $Map<$ResourceLocation, $TrackMaterial>;
        trackBlock: $NonNullSupplier<$NonNullSupplier<$TrackBlock>>;
        trackType: $TrackMaterial$TrackType;
        langName: string;
        static ANDESITE: $TrackMaterial;
        particle: $ResourceLocation;
        id: $ResourceLocation;
        sleeperIngredient: $Ingredient;
        railsIngredient: $Ingredient;
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>, arg3: $ResourceLocation_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $TrackMaterial$TrackType, arg7: $Supplier_<$Supplier<$TrackMaterial$TrackModelHolder>>, arg8: $TrackMaterial$TrackType$TrackBlockFactory_);
        constructor(arg0: $ResourceLocation_, arg1: string, arg2: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>, arg3: $ResourceLocation_, arg4: $Ingredient_, arg5: $Ingredient_, arg6: $TrackMaterial$TrackType, arg7: $Supplier_<$Supplier<$TrackMaterial$TrackModelHolder>>);
        get block(): $TrackBlock;
        get modelHolder(): $TrackMaterial$TrackModelHolder;
        get blockSupplier(): $NonNullSupplier<$TrackBlock>;
    }
    export class $BezierConnection$Runtime {
    }
    export class $CurvedTrackDestroyPacket extends $BlockEntityConfigurationPacket<$TrackBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CurvedTrackDestroyPacket>;
        constructor(arg0: $BlockPos_, arg1: $BlockPos_, arg2: $BlockPos_, arg3: boolean);
    }
    export class $BezierConnection$Bezierator implements $Iterator<$BezierConnection$Segment> {
        remove(): void;
        forEachRemaining(arg0: $Consumer_<$BezierConnection$Segment>): void;
    }
    export class $BezierConnection$GirderAngles {
        beams: $Couple<$PoseStack$Pose>[];
        lightPosition: $BlockPos[];
        length: number;
        beamCaps: $Couple<$Couple<$PoseStack$Pose>>[];
    }
    export class $TrackBlockOutline$BezierPointSelection extends $Record {
        loc(): $BezierTrackPointLocation;
        direction(): $Vec3;
        vec(): $Vec3;
        angles(): $Vec3;
        blockEntity(): $TrackBlockEntity;
        constructor(blockEntity: $TrackBlockEntity, loc: $BezierTrackPointLocation_, vec: $Vec3_, angles: $Vec3_, direction: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $TrackBlockOutline$BezierPointSelection}.
     */
    export type $TrackBlockOutline$BezierPointSelection_ = { loc?: $BezierTrackPointLocation_, angles?: $Vec3_, vec?: $Vec3_, direction?: $Vec3_, blockEntity?: $TrackBlockEntity,  } | [loc?: $BezierTrackPointLocation_, angles?: $Vec3_, vec?: $Vec3_, direction?: $Vec3_, blockEntity?: $TrackBlockEntity, ];
    export class $TrackTargetingBlockItem extends $BlockItem {
        getType(arg0: $ItemStack_): $EdgePointType<never>;
        static ofType<T extends $Block>(arg0: $EdgePointType<never>): $NonNullBiFunction<T, $Item$Properties, $TrackTargetingBlockItem>;
        redirect$hlp000$sable$getLookAngle(arg0: $Player, arg1: $UseOnContext): $Vec3;
        useOnCurve(arg0: $TrackBlockOutline$BezierPointSelection_, arg1: $ItemStack_): boolean;
        redirect$hlp000$sable$getLookAngle$mixinextras$bridge$9(arg0: $Player, arg1: $LocalRef<any>): $Vec3;
        static withGraphLocation(arg0: $Level, arg1: $BlockPos_, arg2: boolean, arg3: $BezierTrackPointLocation_, arg4: $EdgePointType<never>, arg5: $BiConsumer_<$TrackTargetingBlockItem$OverlapResult, $TrackGraphLocation>): void;
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
        constructor(arg0: $Block, arg1: $Item$Properties, arg2: $EdgePointType<never>);
    }
    export class $TrackPropagator {
        static onRailRemoved(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): void;
        static onRailAdded(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_): $TrackGraph;
        static isValidGraphNodeLocation(arg0: $TrackNodeLocation$DiscoveredLocation, arg1: $Collection_<$TrackNodeLocation$DiscoveredLocation>, arg2: boolean): boolean;
        constructor();
    }
    export class $TrackTargetingBehaviour<T extends $TrackEdgePoint> extends $BlockEntityBehaviour {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        static render(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Direction$AxisDirection_, arg3: $BezierTrackPointLocation_, arg4: $PoseStack, arg5: $MultiBufferSource_, arg6: number, arg7: number, arg8: $TrackTargetingBehaviour$RenderedTrackOverlayType_, arg9: number): void;
        invalidateEdgePoint(arg0: $CompoundTag_): void;
        getGlobalPosition(): $BlockPos;
        isOnCurve(): boolean;
        getTargetBezier(): $BezierTrackPointLocation;
        getTargetDirection(): $Direction$AxisDirection;
        isOrthogonal(): boolean;
        determineGraphLocation(): $TrackGraphLocation;
        getTrack(): $ITrackBlock;
        hasValidTrack(): boolean;
        getTrackBlockState(): $BlockState;
        getEdgePoint(): T;
        createEdgePoint(): T;
        getPositionForMapMarker(): $BlockPos;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$TrackTargetingBehaviour<never>>;
        constructor(arg0: $SmartBlockEntity, arg1: $EdgePointType<T>);
        get globalPosition(): $BlockPos;
        get onCurve(): boolean;
        get targetBezier(): $BezierTrackPointLocation;
        get targetDirection(): $Direction$AxisDirection;
        get orthogonal(): boolean;
        get track(): $ITrackBlock;
        get trackBlockState(): $BlockState;
        get edgePoint(): T;
        get positionForMapMarker(): $BlockPos;
    }
    export class $AllPortalTracks {
        static registerDefaults(): void;
        static fromPortal(arg0: $ServerLevel, arg1: $BlockFace, arg2: $ResourceKey_<$Level>, arg3: $ResourceKey_<$Level>, arg4: $Portal_): $PortalTrackProvider$Exit;
        static tryRegisterIntegration(arg0: $ResourceLocation_, arg1: $PortalTrackProvider_): void;
        constructor();
    }
    export class $BezierTrackPointLocation extends $Record {
        segment(): number;
        curveTarget(): $BlockPos;
        static CODEC: $Codec<$BezierTrackPointLocation>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BezierTrackPointLocation>;
        constructor(curveTarget: $BlockPos_, segment: number);
    }
    /**
     * Values that may be interpreted as {@link $BezierTrackPointLocation}.
     */
    export type $BezierTrackPointLocation_ = { segment?: number, curveTarget?: $BlockPos_,  } | [segment?: number, curveTarget?: $BlockPos_, ];
    export class $TrackTargetingBlockItem$OverlapResult extends $Enum<$TrackTargetingBlockItem$OverlapResult> {
        static values(): $TrackTargetingBlockItem$OverlapResult[];
        static valueOf(arg0: string): $TrackTargetingBlockItem$OverlapResult;
        feedback: string;
        static VALID: $TrackTargetingBlockItem$OverlapResult;
        static NO_TRACK: $TrackTargetingBlockItem$OverlapResult;
        static OCCUPIED: $TrackTargetingBlockItem$OverlapResult;
        static JUNCTION: $TrackTargetingBlockItem$OverlapResult;
    }
    /**
     * Values that may be interpreted as {@link $TrackTargetingBlockItem$OverlapResult}.
     */
    export type $TrackTargetingBlockItem$OverlapResult_ = "valid" | "occupied" | "junction" | "no_track";
    export class $TrackPaver {
        static paveCurve(arg0: $Level, arg1: $BezierConnection, arg2: $Block, arg3: boolean, arg4: $Set_<$BlockPos_>): number;
        static paveStraight(arg0: $Level, arg1: $BlockPos_, arg2: $Vec3_, arg3: number, arg4: $Block, arg5: boolean, arg6: $Set_<$BlockPos_>): number;
        constructor();
    }
    export class $TrackPropagator$FrontierEntry {
    }
    export class $TrackBlockOutline {
        static renderShape(arg0: $VoxelShape, arg1: $PoseStack, arg2: $VertexConsumer, arg3: boolean): void;
        static pickCurves(): void;
        static drawCurveSelection(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Vec3_): void;
        static drawCustomBlockSelection(arg0: $RenderHighlightEvent$Block): void;
        static result: $TrackBlockOutline$BezierPointSelection;
        static TRACKS_WITH_TURNS: $WorldAttached<$Map<$BlockPos, $TrackBlockEntity>>;
        constructor();
    }
    export class $TrackTargetingBehaviour$RenderedTrackOverlayType extends $Enum<$TrackTargetingBehaviour$RenderedTrackOverlayType> {
        static values(): $TrackTargetingBehaviour$RenderedTrackOverlayType[];
        static valueOf(arg0: string): $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static SIGNAL: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static STATION: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static DUAL_SIGNAL: $TrackTargetingBehaviour$RenderedTrackOverlayType;
        static OBSERVER: $TrackTargetingBehaviour$RenderedTrackOverlayType;
    }
    /**
     * Values that may be interpreted as {@link $TrackTargetingBehaviour$RenderedTrackOverlayType}.
     */
    export type $TrackTargetingBehaviour$RenderedTrackOverlayType_ = "station" | "signal" | "dual_signal" | "observer";
    export class $TrackPlacement$ConnectingFrom extends $Record {
        end(): $Vec3;
        pos(): $BlockPos;
        normal(): $Vec3;
        axis(): $Vec3;
        static CODEC: $Codec<$TrackPlacement$ConnectingFrom>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrackPlacement$ConnectingFrom>;
        constructor(pos: $BlockPos_, axis: $Vec3_, normal: $Vec3_, end: $Vec3_);
    }
    /**
     * Values that may be interpreted as {@link $TrackPlacement$ConnectingFrom}.
     */
    export type $TrackPlacement$ConnectingFrom_ = { normal?: $Vec3_, axis?: $Vec3_, end?: $Vec3_, pos?: $BlockPos_,  } | [normal?: $Vec3_, axis?: $Vec3_, end?: $Vec3_, pos?: $BlockPos_, ];
    export class $TrackBlockItem extends $BlockItem {
        static select(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $Vec3_, arg3: $ItemStack_): boolean;
        static clearSelection(arg0: $ItemStack_, arg1: $Level, arg2: $Player): $InteractionResultHolder<$ItemStack>;
        redirect$hlp000$sable$getLookAngle(arg0: $Player, arg1: $UseOnContext): $Vec3;
        redirect$hlp000$sable$getLookAngle$mixinextras$bridge$9(arg0: $Player, arg1: $LocalRef<any>): $Vec3;
        getPlacementState(arg0: $UseOnContext): $BlockState;
        static sendExtenderPacket(arg0: $PlayerInteractEvent$RightClickBlock): void;
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
    export class $TrackMaterial$TrackType {
        id: $ResourceLocation;
        static STANDARD: $TrackMaterial$TrackType;
        constructor(arg0: $ResourceLocation_, arg1: $TrackMaterial$TrackType$TrackBlockFactory_);
    }
    export class $BezierConnection implements $Iterable<$BezierConnection$Segment> {
        clone(): $BezierConnection;
        getLength(): number;
        iterator(): $Iterator<$BezierConnection$Segment>;
        getBounds(): $AABB;
        getKey(): $BlockPos;
        write(arg0: $BlockPos_): $CompoundTag;
        write(arg0: $FriendlyByteBuf): void;
        getPosition(arg0: number): $Vec3;
        getMaterial(): $TrackMaterial;
        spawnDestroyParticles(arg0: $Level): void;
        isPrimary(): boolean;
        incrementT(arg0: number, arg1: number): number;
        yOffsetAt(arg0: $Vec3_): number;
        secondary(): $BezierConnection;
        setMaterial(arg0: $TrackMaterial): void;
        getRadius(): number;
        getNormal(arg0: number): $Vec3;
        getSegmentCount(): number;
        getBakedSegments(): $BezierConnection$SegmentAngles;
        getBakedGirders(): $BezierConnection$GirderAngles;
        getSegmentT(arg0: number): number;
        getGirderItemCost(): number;
        getTrackItemCost(): number;
        addItemsToPlayer(arg0: $Player): void;
        spawnItems(arg0: $Level): void;
        rasterise(): $Map<$Pair<number, number>, number>;
        getHandleLength(): number;
        getStepLUT(): number[];
        equalsSansMaterial(arg0: $BezierConnection): boolean;
        spliterator(): $Spliterator<$BezierConnection$Segment>;
        forEach(arg0: $Consumer_<$BezierConnection$Segment>): void;
        axes: $Couple<$Vec3>;
        smoothing: $Couple<number>;
        hasGirder: boolean;
        starts: $Couple<$Vec3>;
        normals: $Couple<$Vec3>;
        bePositions: $Couple<$BlockPos>;
        primary: boolean;
        constructor(arg0: $CompoundTag_, arg1: $BlockPos_);
        constructor(arg0: $FriendlyByteBuf);
        constructor(arg0: $Couple<$BlockPos_>, arg1: $Couple<$Vec3_>, arg2: $Couple<$Vec3_>, arg3: $Couple<$Vec3_>, arg4: boolean, arg5: boolean, arg6: $TrackMaterial);
        [Symbol.iterator](): Iterator<$BezierConnection$Segment>
        get length(): number;
        get bounds(): $AABB;
        get key(): $BlockPos;
        get radius(): number;
        get segmentCount(): number;
        get bakedSegments(): $BezierConnection$SegmentAngles;
        get bakedGirders(): $BezierConnection$GirderAngles;
        get girderItemCost(): number;
        get trackItemCost(): number;
        get handleLength(): number;
        get stepLUT(): number[];
    }
    export class $TrackBlock extends $Block implements $IBE<$TrackBlockEntity>, $IWrenchable, $ITrackBlock, $SpecialBlockItemRequirement, $ProperWaterloggedBlock, $IHaveBigOutline {
        overlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): $BlockState;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        prepareAssemblyOverlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $PoseStack): $PartialModel;
        prepareTrackOverlay<Self extends $Affine<Self>>(arg0: $Affine<Self>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BezierTrackPointLocation_, arg5: $Direction$AxisDirection_, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType_): $PartialModel;
        getMaterial(): $TrackMaterial;
        animateTick(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $Random): void;
        getBlockEntityClass(): $Class<$TrackBlockEntity>;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getCurveStart(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Vec3;
        getUpNormal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        redirect$hma000$sable$getLookAngle(arg0: $Player, arg1: $BlockPlaceContext): $Vec3;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        redirect$hma000$sable$getLookAngle$mixinextras$bridge$62(arg0: $Player, arg1: $LocalRef<any>): $Vec3;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getBlockEntityType(): $BlockEntityType<$TrackBlockEntity>;
        getBogeyAnchor(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        getConnected(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $TrackNodeLocation): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        getTrackAxes(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $List<$Vec3>;
        trackEquals(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getYOffsetAt(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): number;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $TrackBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($TrackBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$TrackBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$TrackBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        getElevationAtCenter(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): number;
        getNearestTrackAxis(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Pair<$Vec3, $Direction$AxisDirection>;
        isSlope(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
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
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static HAS_BE: $BooleanProperty;
        static SHAPE: $EnumProperty<$TrackShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial);
        get material(): $TrackMaterial;
        get blockEntityClass(): $Class<$TrackBlockEntity>;
        get blockEntityType(): $BlockEntityType<$TrackBlockEntity>;
    }
    export class $PlaceExtendedCurvePacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        ctrlDown(): boolean;
        mainHand(): boolean;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PlaceExtendedCurvePacket>;
        constructor(mainHand: boolean, ctrlDown: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $PlaceExtendedCurvePacket}.
     */
    export type $PlaceExtendedCurvePacket_ = { mainHand?: boolean, ctrlDown?: boolean,  } | [mainHand?: boolean, ctrlDown?: boolean, ];
    export class $TrackMaterial$TrackModelHolder extends $Record {
        tie(): $PartialModel;
        rightSegment(): $PartialModel;
        leftSegment(): $PartialModel;
        constructor(tie: $PartialModel, leftSegment: $PartialModel, rightSegment: $PartialModel);
    }
    /**
     * Values that may be interpreted as {@link $TrackMaterial$TrackModelHolder}.
     */
    export type $TrackMaterial$TrackModelHolder_ = { tie?: $PartialModel, leftSegment?: $PartialModel, rightSegment?: $PartialModel,  } | [tie?: $PartialModel, leftSegment?: $PartialModel, rightSegment?: $PartialModel, ];
    export class $FakeTrackBlockEntity extends $SyncedBlockEntity {
        keepAlive(): void;
        randomTick(): void;
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
    }
    export class $TrackTargetingClient {
        static render(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        static clientTick(): void;
        constructor();
    }
    export class $TrackBlockEntity extends $SmartBlockEntity implements $TransformableBlockEntity, $IMergeableBE {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
        accept(arg0: $BlockEntity): void;
        bind(arg0: $ResourceKey_<$Level>, arg1: $BlockPos_): void;
        getConnections(): $Map<$BlockPos, $BezierConnection>;
        validateConnections(): void;
        removeInboundConnections(arg0: boolean): void;
        addConnection(arg0: $BezierConnection): void;
        removeConnection(arg0: $BlockPos_): void;
        isTilted(): boolean;
        hasInteractableConnections(): boolean;
        manageFakeTracksAlong(arg0: $BezierConnection, arg1: boolean): void;
        worldPosition: $BlockPos;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        boundLocation: $Pair<$ResourceKey<$Level>, $BlockPos>;
        tilt: $TrackBlockEntityTilt;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get connections(): $Map<$BlockPos, $BezierConnection>;
        get tilted(): boolean;
    }
    export class $TrackPlacement {
        static tryConnect(arg0: $Level, arg1: $Player, arg2: $BlockPos_, arg3: $BlockState_, arg4: $ItemStack_, arg5: boolean, arg6: boolean): $TrackPlacement$PlacementInfo;
        static clientTick(): void;
        static cached: $TrackPlacement$PlacementInfo;
        constructor();
    }
    export class $TrackBlockStateGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $BezierConnection$Segment {
        normal: $Vec3;
        faceNormal: $Vec3;
        index: number;
        derivative: $Vec3;
        position: $Vec3;
        constructor();
    }
    export class $TrackMaterialFactory {
        static make(arg0: $ResourceLocation_): $TrackMaterialFactory;
        lang(arg0: string): $TrackMaterialFactory;
        block(arg0: $NonNullSupplier_<$NonNullSupplier<$TrackBlock>>): $TrackMaterialFactory;
        build(): $TrackMaterial;
        trackType(arg0: $TrackMaterial$TrackType): $TrackMaterialFactory;
        rails(...arg0: $ItemLike_[]): $TrackMaterialFactory;
        rails(arg0: $Ingredient_): $TrackMaterialFactory;
        sleeper(arg0: $Ingredient_): $TrackMaterialFactory;
        sleeper(...arg0: $ItemLike_[]): $TrackMaterialFactory;
        particle(arg0: $ResourceLocation_): $TrackMaterialFactory;
        defaultModels(): $TrackMaterialFactory;
        noRecipeGen(): $TrackMaterialFactory;
        standardModels(): $TrackMaterialFactory;
        customModels(arg0: $Supplier_<$Supplier<$PartialModel>>, arg1: $Supplier_<$Supplier<$PartialModel>>, arg2: $Supplier_<$Supplier<$PartialModel>>): $TrackMaterialFactory;
        customBlockFactory(arg0: $TrackMaterial$TrackType$TrackBlockFactory_): $TrackMaterialFactory;
        constructor(arg0: $ResourceLocation_);
    }
    export class $CurvedTrackInteraction {
        static onClickInput(arg0: $InputEvent$InteractionKeyMappingTriggered): boolean;
        static clientTick(): void;
        constructor();
    }
    export class $TrackShape extends $Enum<$TrackShape> implements $StringRepresentable {
        static values(): $TrackShape[];
        static valueOf(arg0: string): $TrackShape;
        rotate(arg0: $Rotation_): $TrackShape;
        mirror(arg0: $Mirror_): $TrackShape;
        getSerializedName(): string;
        getModel(): string;
        static asPortal(arg0: $Direction_): $TrackShape;
        isJunction(): boolean;
        getAxes(): $List<$Vec3>;
        getNormal(): $Vec3;
        isPortal(): boolean;
        getModelRotation(): number;
        getRemappedEnumConstantName(): string;
        static CR_O: $TrackShape;
        static TW: $TrackShape;
        static AE: $TrackShape;
        static CR_D: $TrackShape;
        static AN: $TrackShape;
        static CR_PDX: $TrackShape;
        static CR_NDZ: $TrackShape;
        static TE: $TrackShape;
        static AS: $TrackShape;
        static CR_PDZ: $TrackShape;
        static PD: $TrackShape;
        static ZO: $TrackShape;
        static ND: $TrackShape;
        static AW: $TrackShape;
        static CR_NDX: $TrackShape;
        static XO: $TrackShape;
        static TN: $TrackShape;
        static NONE: $TrackShape;
        static TS: $TrackShape;
        get serializedName(): string;
        get model(): string;
        get junction(): boolean;
        get axes(): $List<$Vec3>;
        get normal(): $Vec3;
        get portal(): boolean;
        get modelRotation(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TrackShape}.
     */
    export type $TrackShape_ = "none" | "zo" | "xo" | "pd" | "nd" | "an" | "as" | "ae" | "aw" | "tn" | "ts" | "te" | "tw" | "cr_o" | "cr_d" | "cr_pdx" | "cr_pdz" | "cr_ndx" | "cr_ndz";
    export class $TrackVisual$BezierTrackVisual {
    }
    export class $TrackRenderer extends $SafeBlockEntityRenderer<$TrackBlockEntity> {
        shouldRenderOffScreen(arg0: $TrackBlockEntity): boolean;
        static getModelAngles(arg0: $Vec3_, arg1: $Vec3_): $Vec3;
        static renderBezierTurn(arg0: $Level, arg1: $BezierConnection, arg2: $PoseStack, arg3: $VertexConsumer): void;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BezierConnection$SegmentAngles {
        lightPosition: $BlockPos[];
        length: number;
        tieTransform: $PoseStack$Pose[];
        railTransforms: $Couple<$PoseStack$Pose>[];
    }
    export class $TrackPlacementOverlay implements $LayeredDraw$Layer {
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static INSTANCE: $TrackPlacementOverlay;
        constructor();
    }
    export class $TrackVisual$BezierTrackVisual$GirderVisual {
    }
    export class $ITrackBlock {
        static addToListIfConnected(arg0: $TrackNodeLocation, arg1: $Collection_<$TrackNodeLocation$DiscoveredLocation>, arg2: $BiFunction_<number, boolean, $Vec3>, arg3: $Function_<boolean, $Vec3>, arg4: $Function_<boolean, $ResourceKey<$Level>>, arg5: $Function_<$Vec3, number>, arg6: $Vec3_, arg7: $BezierConnection, arg8: $BiFunction_<boolean, $Vec3, $TrackMaterial>): void;
        static walkConnectedTracks(arg0: $BlockGetter, arg1: $TrackNodeLocation, arg2: boolean): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        static getMaterialSimple(arg0: $BlockGetter, arg1: $Vec3_, arg2: $TrackMaterial): $TrackMaterial;
        static getMaterialSimple(arg0: $BlockGetter, arg1: $Vec3_): $TrackMaterial;
    }
    export interface $ITrackBlock {
        overlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockState_): $BlockState;
        getElevationAtCenter(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): number;
        prepareAssemblyOverlay(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_, arg4: $PoseStack): $PartialModel;
        prepareTrackOverlay<Self extends $Affine<Self>>(arg0: $Affine<Self>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $BezierTrackPointLocation_, arg5: $Direction$AxisDirection_, arg6: $TrackTargetingBehaviour$RenderedTrackOverlayType_): $PartialModel;
        getNearestTrackAxis(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Pair<$Vec3, $Direction$AxisDirection>;
        getMaterial(): $TrackMaterial;
        getCurveStart(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): $Vec3;
        getUpNormal(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $Vec3;
        isSlope(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        getBogeyAnchor(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockState;
        getConnected(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean, arg4: $TrackNodeLocation): $Collection<$TrackNodeLocation$DiscoveredLocation>;
        getTrackAxes(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $List<$Vec3>;
        trackEquals(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getYOffsetAt(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Vec3_): number;
        get material(): $TrackMaterial;
    }
    export class $TrackMaterial$TrackType$TrackBlockFactory {
    }
    export interface $TrackMaterial$TrackType$TrackBlockFactory {
        create(arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial): $TrackBlock;
    }
    /**
     * Values that may be interpreted as {@link $TrackMaterial$TrackType$TrackBlockFactory}.
     */
    export type $TrackMaterial$TrackType$TrackBlockFactory_ = ((arg0: $BlockBehaviour$Properties, arg1: $TrackMaterial) => $TrackBlock);
    export class $TrackPlacement$PlacementInfo {
        withMessage(arg0: string): $TrackPlacement$PlacementInfo;
        tooJumbly(): $TrackPlacement$PlacementInfo;
        requiredPavement: number;
        trackMaterial: $TrackMaterial;
        hasRequiredPavement: boolean;
        requiredTracks: number;
        hasRequiredTracks: boolean;
        constructor(arg0: $TrackMaterial);
    }
}
