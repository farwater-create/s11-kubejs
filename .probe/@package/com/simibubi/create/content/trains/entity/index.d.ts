import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $Pose, $PortalProcessor, $Entity } from "@package/net/minecraft/world/entity";
import { $ClientContraption, $ContraptionVisual, $ContraptionEntityRenderer } from "@package/com/simibubi/create/content/contraptions/render";
import { $TrackEdgePoint } from "@package/com/simibubi/create/content/trains/signal";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $InputEvent$InteractionKeyMappingTriggered } from "@package/net/neoforged/neoforge/client/event";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $SoundSource } from "@package/net/minecraft/sounds";
import { $AbstractContraptionEntity, $Contraption, $OrientedContraptionEntity, $MountedStorageManager } from "@package/com/simibubi/create/content/contraptions";
import { $DimensionPalette, $TrackNode, $TrackNodeLocation, $TrackEdge, $TrackGraph, $DiscoveredPath, $TrackGraphLocation } from "@package/com/simibubi/create/content/trains/graph";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Sound, $SoundInstance$Attenuation, $AbstractTickableSoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $TrainCargoManager } from "@package/com/simibubi/create/content/contraptions/minecart";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $StructureTemplate$StructureBlockInfo_ } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BogeySizes$BogeySize, $BogeyStyle, $AbstractBogeyBlock } from "@package/com/simibubi/create/content/trains/bogey";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $EntityEvent$EnteringSection } from "@package/net/neoforged/neoforge/event/entity";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $BezierTrackPointLocation_, $BezierTrackPointLocation } from "@package/com/simibubi/create/content/trains/track";
import { $ScheduleRuntime } from "@package/com/simibubi/create/content/trains/schedule";
import { $UUID_, $ArrayList, $Map, $Map$Entry, $Set, $UUID, $List, $Map_, $List_, $BitSet } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $GlobalStation } from "@package/com/simibubi/create/content/trains/station";
import { $Consumer_, $BiFunction, $Predicate, $BiConsumer, $BiConsumer_, $BiPredicate } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap, $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Comparable, $Record, $Object } from "@package/java/lang";
import { $Pair as $Pair$1, $Couple } from "@package/net/createmod/catnip/data";
import { $Level } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $TagKey } from "@package/net/minecraft/tags";
import { $EntityRenderDispatcher, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $EntityDataAccessor, $SynchedEntityData, $EntityDataSerializer } from "@package/net/minecraft/network/syncher";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/trains/entity" {
    export class $CarriageContraptionEntity extends $OrientedContraptionEntity {
        static create(arg0: $Level, arg1: $CarriageContraption): $CarriageContraptionEntity;
        setServerSidePrevPosition(): void;
        updateRenderedPortalCutoff(): void;
        syncCarriage(): void;
        getCarriageData(): $CarriageSyncData;
        isLocalCoordWithin(arg0: $BlockPos_, arg1: number, arg2: number): boolean;
        setCarriage(arg0: $Carriage): void;
        checkConductors(): $Couple<boolean>;
        getCarriage(): $Carriage;
        hasSchedule(): boolean;
        carriageIndex: number;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        pitch: number;
        particles: $CarriageParticles;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        trainId: $UUID;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        prevYaw: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        movingBackwards: boolean;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
        leftTickingChunks: boolean;
        entityData: $SynchedEntityData;
        staleTicks: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        prevPitch: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        sounds: $CarriageSounds;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yaw: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        firstPositionUpdate: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        validForRender: boolean;
        nonDamageTicks: number;
        targetYaw: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType<never>, arg1: $Level);
        get carriageData(): $CarriageSyncData;
    }
    export class $CarriageContraptionVisual extends $ContraptionVisual<$CarriageContraptionEntity> {
        _delete(): void;
        beginFrame(arg0: $DynamicVisual$Context): void;
        static MAX_NUM_BOGEYS: number;
        constructor(arg0: $VisualizationContext, arg1: $CarriageContraptionEntity, arg2: number);
    }
    export class $Navigation$StationTest {
    }
    export interface $Navigation$StationTest {
        test(arg0: number, arg1: number, arg2: $Map_<$TrackEdge, $Pair$1<boolean, $Couple<$TrackNode>>>, arg3: $Pair$1<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Navigation$StationTest}.
     */
    export type $Navigation$StationTest_ = ((arg0: number, arg1: number, arg2: $Map<$TrackEdge, $Pair$1<boolean, $Couple<$TrackNode>>>, arg3: $Pair$1<$Couple<$TrackNode>, $TrackEdge>, arg4: $GlobalStation) => boolean);
    export class $CarriageEntityHandler {
        static onEntityEnterSection(arg0: $EntityEvent$EnteringSection): void;
        static isActiveChunk(arg0: $Level, arg1: $BlockPos_): boolean;
        static validateCarriageEntity(arg0: $CarriageContraptionEntity): void;
        constructor();
    }
    export class $CarriageCouplingRenderer {
        static getPackedLightCoords(arg0: $Entity, arg1: number): number;
        static renderAll(arg0: $PoseStack, arg1: $MultiBufferSource_, arg2: $Vec3_): void;
        constructor();
    }
    export class $CarriageSyncDataSerializer implements $EntityDataSerializer<$CarriageSyncData> {
        copy(arg0: $CarriageSyncData): $CarriageSyncData;
        codec(): $StreamCodec<$RegistryFriendlyByteBuf, $CarriageSyncData>;
        createAccessor(arg0: number): $EntityDataAccessor<$CarriageSyncData>;
        constructor();
    }
    export class $TrainPromptPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        text(): $Component;
        shadow(): boolean;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrainPromptPacket>;
        constructor(text: $Component_, shadow: boolean);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $TrainPromptPacket}.
     */
    export type $TrainPromptPacket_ = { shadow?: boolean, text?: $Component_,  } | [shadow?: boolean, text?: $Component_, ];
    export class $Carriage$DimensionalCarriageEntity {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        updateRenderedCutoff(): void;
        alignEntity(arg0: $CarriageContraptionEntity): void;
        findPivot(arg0: $ResourceKey_<$Level>, arg1: boolean): $TrackNodeLocation;
        leadingAnchor(): $Vec3;
        trailingAnchor(): $Vec3;
        discardPivot(): void;
        updateCutoff(arg0: boolean): void;
        minAllowedLocalCoord(): number;
        maxAllowedLocalCoord(): number;
        updatePassengerLoadout(): void;
        pointsInitialised: boolean;
        pivot: $TrackNodeLocation;
        rotationAnchors: $Couple<$Vec3>;
        cutoff: number;
        positionAnchor: $Vec3;
        entity: $WeakReference<$CarriageContraptionEntity>;
        constructor(arg0: $Carriage);
    }
    export class $TrainRelocationPacket extends $Record implements $ServerboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $ServerPlayer): void;
        direction(): boolean;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        lookAngle(): $Vec3;
        entityId(): number;
        trainId(): $UUID;
        handler$zff007$openpartiesandclaims$onHandle(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        hoveredBezier(): $BezierTrackPointLocation;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainRelocationPacket>;
        constructor(trainId: $UUID_, pos: $BlockPos_, lookAngle: $Vec3_, entityId: number, direction: boolean, hoveredBezier: $BezierTrackPointLocation_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $TrainRelocationPacket}.
     */
    export type $TrainRelocationPacket_ = { pos?: $BlockPos_, hoveredBezier?: $BezierTrackPointLocation_, direction?: boolean, trainId?: $UUID_, lookAngle?: $Vec3_, entityId?: number,  } | [pos?: $BlockPos_, hoveredBezier?: $BezierTrackPointLocation_, direction?: boolean, trainId?: $UUID_, lookAngle?: $Vec3_, entityId?: number, ];
    export class $TrainIconType {
        static getDefault(): $TrainIconType;
        static register(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number): void;
        getId(): $ResourceLocation;
        getIconWidth(arg0: number): number;
        render(arg0: number, arg1: $GuiGraphics, arg2: number, arg3: number): number;
        static byId(arg0: $ResourceLocation_): $TrainIconType;
        getIconOffset(arg0: number): number;
        static FLIPPED_ENGINE: number;
        static ENGINE: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainIconType>;
        static REGISTRY: $Map<$ResourceLocation, $TrainIconType>;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: number, arg3: number);
        static get default(): $TrainIconType;
        get id(): $ResourceLocation;
    }
    export class $TrainStatus {
        crash(): void;
        addMessage(arg0: $TrainStatus$StatusMessage_): void;
        tick(arg0: $Level): void;
        manualControls(): void;
        failedNavigationNoTarget(arg0: string): void;
        failedPackageNoTarget(arg0: string): void;
        missingConductor(): void;
        failedNavigation(): void;
        highStress(): void;
        trackOK(): void;
        endOfTrack(): void;
        failedMigration(): void;
        doublePortal(): void;
        successfulMigration(): void;
        newSchedule(): void;
        foundConductor(): void;
        displayInformation(arg0: string, arg1: boolean, ...arg2: $Object[]): void;
        missingCorrectConductor(): void;
        successfulNavigation(): void;
        navigation: boolean;
        track: boolean;
        conductor: boolean;
        constructor(arg0: $Train);
    }
    export class $Carriage {
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $TrackGraph, arg3: $DimensionPalette): $Carriage;
        setContraption(arg0: $Level, arg1: $CarriageContraption): void;
        forEachPresentEntity(arg0: $Consumer_<$CarriageContraptionEntity>): void;
        updateContraptionAnchors(): void;
        trailingBogey(): $CarriageBogey;
        getTrailingPoint(): $TravellingPoint;
        leadingBogey(): $CarriageBogey;
        getLeadingPoint(): $TravellingPoint;
        isOnIncompatibleTrack(): boolean;
        getDimensional(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        getDimensional(arg0: $Level): $Carriage$DimensionalCarriageEntity;
        alignEntity(arg0: $Level): void;
        isOnTwoBogeys(): boolean;
        travel(arg0: $Level, arg1: $TrackGraph, arg2: number, arg3: $TravellingPoint, arg4: $TravellingPoint, arg5: number): number;
        anyAvailableEntity(): $CarriageContraptionEntity;
        presentInMultipleDimensions(): boolean;
        anyAvailableDimensionalCarriage(): $Pair$1<$ResourceKey<$Level>, $Carriage$DimensionalCarriageEntity>;
        updateConductors(): void;
        setTrain(arg0: $Train): void;
        getAnchorDiff(): number;
        manageEntities(arg0: $Level): void;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        getDimensionalIfPresent(arg0: $ResourceKey_<$Level>): $Carriage$DimensionalCarriageEntity;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        presentConductors: $Couple<boolean>;
        bogeys: $Couple<$CarriageBogey>;
        blocked: boolean;
        stalled: boolean;
        static netIdGenerator: $AtomicInteger;
        id: number;
        bogeySpacing: number;
        storage: $TrainCargoManager;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Carriage>;
        train: $Train;
        constructor(arg0: $CarriageBogey, arg1: $CarriageBogey, arg2: number);
        get trailingPoint(): $TravellingPoint;
        get leadingPoint(): $TravellingPoint;
        get onIncompatibleTrack(): boolean;
        get onTwoBogeys(): boolean;
        get anchorDiff(): number;
        get presentDimensions(): $List<$ResourceKey<$Level>>;
    }
    export class $AddTrainPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        train(): $Train;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AddTrainPacket>;
        constructor(train: $Train);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $AddTrainPacket}.
     */
    export type $AddTrainPacket_ = { train?: $Train,  } | [train?: $Train, ];
    export class $RemoveTrainPacket extends $Record implements $ClientboundPacketPayload {
        id(): $UUID;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RemoveTrainPacket>;
        constructor(arg0: $Train);
        constructor(id: $UUID_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $RemoveTrainPacket}.
     */
    export type $RemoveTrainPacket_ = { id?: $UUID_,  } | [id?: $UUID_, ];
    export class $Train$Penalties {
        constructor();
    }
    export class $CarriageParticles {
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $ArrivalSoundQueue {
        add(arg0: number, arg1: $BlockPos_): void;
        deserialize(arg0: $CompoundTag_): void;
        serialize(arg0: $CompoundTag_): void;
        tick(arg0: $CarriageContraptionEntity, arg1: number, arg2: boolean): boolean;
        static play(arg0: $CarriageContraptionEntity, arg1: $StructureTemplate$StructureBlockInfo_): void;
        firstTick(): number;
        lastTick(): number;
        static isPlayable(arg0: $BlockState_): boolean;
        getFirstWhistle(arg0: $CarriageContraptionEntity): $Pair$1<boolean, number>;
        offset: number;
        constructor();
    }
    export class $Navigation {
        write(arg0: $DimensionPalette): $CompoundTag;
        read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): void;
        search(arg0: number, arg1: number, arg2: boolean, arg3: $ArrayList<$GlobalStation>, arg4: $Navigation$StationTest_): void;
        search(arg0: number, arg1: boolean, arg2: $ArrayList<$GlobalStation>, arg3: $Navigation$StationTest_): void;
        isActive(): boolean;
        control(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        findNearestApproachable(arg0: boolean): $GlobalStation;
        tick(arg0: $Level): void;
        cancelNavigation(): void;
        startNavigation(arg0: $DiscoveredPath): number;
        findPathTo(arg0: $GlobalStation, arg1: number): $DiscoveredPath;
        findPathTo(arg0: $ArrayList<$GlobalStation>, arg1: number): $DiscoveredPath;
        controlSignalScout(): $TravellingPoint$ITrackSelector;
        distanceToDestination: number;
        destination: $GlobalStation;
        announceArrival: boolean;
        ticksWaitingForSignal: number;
        waitingForSignal: $Pair$1<$UUID, boolean>;
        distanceStartedAt: number;
        destinationBehindTrain: boolean;
        distanceToSignal: number;
        train: $Train;
        constructor(arg0: $Train);
        get active(): boolean;
    }
    export class $TravellingPoint$ITrackSelector {
    }
    export interface $TravellingPoint$ITrackSelector extends $BiFunction<$TrackGraph, $Pair$1<boolean, $List<$Map$Entry<$TrackNode, $TrackEdge>>>, $Map$Entry<$TrackNode, $TrackEdge>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITrackSelector}.
     */
    export type $TravellingPoint$ITrackSelector_ = (() => void);
    export class $TravellingPoint$SteerDirection extends $Enum<$TravellingPoint$SteerDirection> {
        static values(): $TravellingPoint$SteerDirection[];
        static valueOf(arg0: string): $TravellingPoint$SteerDirection;
        static LEFT: $TravellingPoint$SteerDirection;
        static RIGHT: $TravellingPoint$SteerDirection;
        static NONE: $TravellingPoint$SteerDirection;
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$SteerDirection}.
     */
    export type $TravellingPoint$SteerDirection_ = "none" | "left" | "right";
    export class $CarriageSounds$LoopingSound extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
    }
    export class $TrainMigration {
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $DimensionPalette): $TrainMigration;
        tryMigratingTo(arg0: $TrackGraph): $TrackGraphLocation;
        constructor();
        constructor(arg0: $TravellingPoint);
    }
    export class $TrainStatus$StatusMessage extends $Record {
        messages(): $Component[];
        displayToPlayer(arg0: $Player): void;
        constructor(...messages: $Component_[]);
    }
    /**
     * Values that may be interpreted as {@link $TrainStatus$StatusMessage}.
     */
    export type $TrainStatus$StatusMessage_ = { messages?: $Component_[],  } | [messages?: $Component_[], ];
    export class $TravellingPoint$IEdgePointListener {
    }
    export interface $TravellingPoint$IEdgePointListener extends $BiPredicate<number, $Pair$1<$TrackEdgePoint, $Couple<$TrackNode>>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IEdgePointListener}.
     */
    export type $TravellingPoint$IEdgePointListener_ = (() => void);
    export class $CarriageContraption extends $Contraption {
        isHiddenInPortal(arg0: number): boolean;
        swapStorageAfterAssembly(arg0: $CarriageContraptionEntity): void;
        inControl(arg0: $BlockPos_, arg1: $Direction_): boolean;
        getAssemblyDirection(): $Direction;
        returnStorageForDisassembly(arg0: $MountedStorageManager): void;
        getSecondBogeyPos(): $BlockPos;
        hasForwardControls(): boolean;
        withinVisible(arg0: $BlockPos_): boolean;
        withinVisible(arg0: number): boolean;
        notInPortal(): boolean;
        atSeam(arg0: number): boolean;
        atSeam(arg0: $BlockPos_): boolean;
        setSoundQueueOffset(arg0: number): void;
        hasBackwardControls(): boolean;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        conductorSeats: $Map<$BlockPos, $Couple<boolean>>;
        portalCutoffMax: number;
        simplifiedEntityColliders: $CollisionList;
        soundQueue: $ArrivalSoundQueue;
        blockConductors: $Couple<boolean>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        portalCutoffMin: number;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        constructor(arg0: $Direction_);
        get assemblyDirection(): $Direction;
        get secondBogeyPos(): $BlockPos;
        set soundQueueOffset(value: number);
    }
    export class $CarriageBogey {
        getSize(): $BogeySizes$BogeySize;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $CarriageBogey;
        getDimension(): $ResourceKey<$Level>;
        trailing(): $TravellingPoint;
        isUpsideDown(): boolean;
        getStress(): number;
        updateAngles(arg0: $CarriageContraptionEntity, arg1: number): void;
        leading(): $TravellingPoint;
        getStyle(): $BogeyStyle;
        getAnchorPosition(arg0: boolean): $Vec3;
        getAnchorPosition(): $Vec3;
        updateCouplingAnchor(arg0: $Vec3_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: boolean): void;
        bogeyData: $CompoundTag;
        carriage: $Carriage;
        static UPSIDE_DOWN_KEY: string;
        couplingAnchors: $Couple<$Vec3>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $CarriageBogey>;
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_);
        constructor(arg0: $AbstractBogeyBlock<never>, arg1: boolean, arg2: $CompoundTag_, arg3: $TravellingPoint, arg4: $TravellingPoint);
        get size(): $BogeySizes$BogeySize;
        get dimension(): $ResourceKey<$Level>;
        get upsideDown(): boolean;
        get stress(): number;
        get style(): $BogeyStyle;
    }
    export class $CarriageContraption$CarriageClientContraption extends $ClientContraption {
        shouldRenderBlockEntities: $BitSet;
        renderedBlockEntityView: $List<$BlockEntity>;
        scratchBlockEntitiesOutsidePortal: $BitSet;
        scratchErroredBlockEntities: $BitSet;
        constructor(arg0: $CarriageContraption, arg1: $CarriageContraption);
    }
    export class $TrainRelocator {
        static addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        static clientTick(): void;
        static carriageWrenched(arg0: $Vec3_, arg1: $CarriageContraptionEntity): boolean;
        static onClicked(arg0: $InputEvent$InteractionKeyMappingTriggered): void;
        static relocate(arg0: $Train, arg1: $Level, arg2: $BlockPos_, arg3: $BezierTrackPointLocation_, arg4: boolean, arg5: $Vec3_, arg6: boolean): boolean;
        static visualise(arg0: $Train, arg1: number, arg2: $Vec3_, arg3: $Vec3_, arg4: boolean): void;
        static isRelocating(): boolean;
        static relocateClient(arg0: $Train, arg1: boolean): boolean;
        constructor();
        static get relocating(): boolean;
    }
    export class $TravellingPoint$IPortalListener {
    }
    export interface $TravellingPoint$IPortalListener extends $Predicate<$Couple<$TrackNodeLocation>> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$IPortalListener}.
     */
    export type $TravellingPoint$IPortalListener_ = (() => void);
    export class $CarriageSyncData {
        update(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        apply(arg0: $CarriageContraptionEntity, arg1: $Carriage): void;
        write(arg0: $FriendlyByteBuf): void;
        read(arg0: $FriendlyByteBuf): void;
        copy(): $CarriageSyncData;
        isDirty(): boolean;
        getDistanceTo(arg0: $TrackGraph, arg1: $TravellingPoint, arg2: $TravellingPoint, arg3: number, arg4: boolean): number;
        approach(arg0: $CarriageContraptionEntity, arg1: $Carriage, arg2: number): void;
        setDirty(arg0: boolean): void;
        distanceToDestination: number;
        leadingCarriage: boolean;
        wheelLocations: $List<$Pair$1<$Couple<number>, number>>;
        fallbackLocations: $Pair$1<$Vec3, $Couple<$Vec3>>;
        constructor();
        constructor(arg0: $FriendlyByteBuf);
    }
    export class $Train {
        write(arg0: $DimensionPalette, arg1: $HolderLookup$Provider): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $Map_<$UUID_, $TrackGraph>, arg3: $DimensionPalette): $Train;
        getOwner(arg0: $Level): $LivingEntity;
        canDisassemble(): boolean;
        getTotalLength(): number;
        crash(): void;
        shouldCarriageSyncThisTick(arg0: number, arg1: number): boolean;
        approachTargetSpeed(arg0: number): void;
        tick(arg0: $Level): void;
        disassemble(arg0: $Direction_, arg1: $BlockPos_): boolean;
        countPlayerPassengers(): number;
        getCurrentStation(): $GlobalStation;
        maxTurnSpeed(): number;
        cancelStall(): void;
        forEachTravellingPointBackwards(arg0: $BiConsumer_<$TravellingPoint, number>): void;
        acceleration(): number;
        hasBackwardConductor(): boolean;
        hasForwardConductor(): boolean;
        maxSpeed(): number;
        burnFuel(): void;
        earlyTick(arg0: $Level): void;
        arriveAt(arg0: $GlobalStation): void;
        reattachToTracks(arg0: $Level): void;
        leaveStation(): void;
        findCollidingTrain(arg0: $Level, arg1: $Vec3_, arg2: $Vec3_, arg3: $ResourceKey_<$Level>): $Pair$1<$Train, $Vec3>;
        backSignalListener(): $TravellingPoint$IEdgePointListener;
        isTravellingOn(arg0: $TrackNode): boolean;
        detachFromTracks(): void;
        getEndpointEdges(): $Couple<$Couple<$TrackNode>>;
        determineHonk(arg0: $Level): void;
        collectInitiallyOccupiedSignalBlocks(): void;
        getPresentDimensions(): $List<$ResourceKey<$Level>>;
        forEachTravellingPoint(arg0: $Consumer_<$TravellingPoint>): void;
        getPositionInDimension(arg0: $ResourceKey_<$Level>): ($BlockPos) | undefined;
        getNavigationPenalty(): number;
        distanceToLocationSqr(arg0: $Level, arg1: $Vec3_): number;
        frontSignalListener(): $TravellingPoint$IEdgePointListener;
        setCurrentStation(arg0: $GlobalStation): void;
        throttle: number;
        lowHonk: boolean;
        speedBeforeStall: number;
        icon: $TrainIconType;
        doubleEnded: boolean;
        backwardsDriver: $Player;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Train>;
        speed: number;
        manualTick: boolean;
        currentlyBackwards: boolean;
        honkPitch: number;
        navigation: $Navigation;
        carriages: $List<$Carriage>;
        currentStation: $UUID;
        honkTicks: number;
        id: $UUID;
        owner: $UUID;
        targetSpeed: number;
        occupiedSignalBlocks: $Map<$UUID, $UUID>;
        carriageWaitingForChunks: number;
        accumulatedSteamRelease: number;
        reservedSignalBlocks: $Set<$UUID>;
        updateSignalBlocks: boolean;
        migrationCooldown: number;
        runtime: $ScheduleRuntime;
        occupiedObservers: $Set<$UUID>;
        derailed: boolean;
        carriageSpacing: $List<number>;
        graph: $TrackGraph;
        cachedObserverFiltering: $Map<$UUID, $Pair$1<number, boolean>>;
        honk: boolean;
        mapColorIndex: number;
        name: $Component;
        invalid: boolean;
        status: $TrainStatus;
        manualSteer: $TravellingPoint$SteerDirection;
        fuelTicks: number;
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: $Component_, arg7: $TrainIconType, arg8: number);
        constructor(arg0: $UUID_, arg1: $UUID_, arg2: $TrackGraph, arg3: $List_<$Carriage>, arg4: $List_<number>, arg5: boolean, arg6: number);
        get totalLength(): number;
        get endpointEdges(): $Couple<$Couple<$TrackNode>>;
        get presentDimensions(): $List<$ResourceKey<$Level>>;
        get navigationPenalty(): number;
    }
    export class $Navigation$FrontierEntry implements $Comparable<$Navigation$FrontierEntry> {
    }
    export class $CarriageSounds {
        stop(): void;
        tick(arg0: $Carriage$DimensionalCarriageEntity): void;
        finalizeSharedVolume(arg0: number): void;
        submitSharedSoundVolume(arg0: $Vec3_, arg1: number): void;
        constructor(arg0: $CarriageContraptionEntity);
    }
    export class $CarriageContraptionEntityRenderer extends $ContraptionEntityRenderer<$CarriageContraptionEntity> {
        render(arg0: $CarriageContraptionEntity, arg1: number, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number): void;
        shouldRender(arg0: $CarriageContraptionEntity, arg1: $Frustum, arg2: number, arg3: number, arg4: number): boolean;
        static getBogeyLightCoords(arg0: $CarriageContraptionEntity, arg1: $CarriageBogey, arg2: number): number;
        static translateBogey(arg0: $PoseStack, arg1: $CarriageBogey, arg2: number, arg3: number, arg4: number, arg5: number): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        shadowStrength: number;
        static CONTRAPTION: $SuperByteBufferCache$Compartment<$Pair<$Contraption, $RenderType>>;
        static NAMETAG_SCALE: number;
        constructor(arg0: $EntityRendererProvider$Context);
    }
    export class $TravellingPoint$ITurnListener {
    }
    export interface $TravellingPoint$ITurnListener extends $BiConsumer<number, $TrackEdge> {
    }
    /**
     * Values that may be interpreted as {@link $TravellingPoint$ITurnListener}.
     */
    export type $TravellingPoint$ITurnListener_ = (() => void);
    export class $TravellingPoint {
        reverse(arg0: $TrackGraph): void;
        write(arg0: $DimensionPalette): $CompoundTag;
        static read(arg0: $CompoundTag_, arg1: $TrackGraph, arg2: $DimensionPalette): $TravellingPoint;
        random(): $TravellingPoint$ITrackSelector;
        getPosition(arg0: $TrackGraph): $Vec3;
        getPosition(arg0: $TrackGraph, arg1: boolean): $Vec3;
        follow(arg0: $TravellingPoint, arg1: $Consumer_<boolean>): $TravellingPoint$ITrackSelector;
        follow(arg0: $TravellingPoint): $TravellingPoint$ITrackSelector;
        getPositionWithOffset(arg0: $TrackGraph, arg1: number, arg2: boolean): $Vec3;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_, arg5: $TravellingPoint$IPortalListener_): number;
        travel(arg0: $TrackGraph, arg1: number, arg2: $TravellingPoint$ITrackSelector_, arg3: $TravellingPoint$IEdgePointListener_, arg4: $TravellingPoint$ITurnListener_): number;
        steer(arg0: $TravellingPoint$SteerDirection_, arg1: $Vec3_): $TravellingPoint$ITrackSelector;
        migrateTo(arg0: $List_<$TrackGraphLocation>): void;
        ignoreTurns(): $TravellingPoint$ITurnListener;
        ignorePortals(): $TravellingPoint$IPortalListener;
        ignoreEdgePoints(): $TravellingPoint$IEdgePointListener;
        node2: $TrackNode;
        edge: $TrackEdge;
        blocked: boolean;
        position: number;
        node1: $TrackNode;
        upsideDown: boolean;
        constructor();
        constructor(arg0: $TrackNode, arg1: $TrackNode, arg2: $TrackEdge, arg3: number, arg4: boolean);
    }
}
