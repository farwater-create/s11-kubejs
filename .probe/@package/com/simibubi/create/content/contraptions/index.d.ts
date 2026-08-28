import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $Pose, $PortalProcessor, $Entity, $EntityType$Builder } from "@package/net/minecraft/world/entity";
import { $ClientContraption } from "@package/com/simibubi/create/content/contraptions/render";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $InputEvent$InteractionKeyMappingTriggered } from "@package/net/neoforged/neoforge/client/event";
import { $WeakReference } from "@package/java/lang/ref";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $MountedFluidStorage, $MountedFluidStorageWrapper } from "@package/com/simibubi/create/api/contraption/storage/fluid";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $FloatingClusterContainer } from "@package/dev/ryanhcode/sable/physics/floating_block";
import { $MountedStorageAccessor } from "@package/dev/ryanhcode/offroad/mixin";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IEntityWithComplexSpawn } from "@package/net/neoforged/neoforge/entity";
import { $ContraptionType } from "@package/com/simibubi/create/api/contraption";
import { $ICreateContraptionEntity, $ICreateContraption } from "@package/xaero/pac/common/server/core/accessor";
import { $StructureTemplate$StructureBlockInfo_, $StructureTemplate$StructureBlockInfo } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $MinecartController } from "@package/com/simibubi/create/content/contraptions/minecart/capability";
import { $ContraptionMixin } from "@package/com/starfish_studios/another_furniture/mixin/neoforge/create";
import { $CombinedInvWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $INamedIconOptions } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $Mirror_, $Mirror, $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Vec3, $AABB, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload, $ClientboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $KinematicContraption } from "@package/dev/ryanhcode/sable/api/sublevel";
import { $Vector3dc, $Quaterniond } from "@package/org/joml";
import { $MassTracker } from "@package/dev/ryanhcode/sable/api/physics/mass";
import { $MutablePair } from "@package/org/apache/commons/lang3/tuple";
import { $UUID_, $ArrayList, $Map, $Set, $UUID, $List, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $ServerboundCustomPayloadPacket, $ClientboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $CenteredSideValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $BiConsumer_, $BiPredicate_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap, $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Vec3i, $HolderLookup$Provider, $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Exception, $Thread, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $Couple, $WorldAttached } from "@package/net/createmod/catnip/data";
import { $BlockGetter, $Level } from "@package/net/minecraft/world/level";
import { $CollisionList, $Matrix3d } from "@package/com/simibubi/create/foundation/collision";
import { $TagKey } from "@package/net/minecraft/tags";
import { $BoundingBox3i, $Pose3d } from "@package/dev/ryanhcode/sable/companion/math";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $MovingInteractionBehaviour } from "@package/com/simibubi/create/api/behaviour/interaction";
import { $PlayerTickEvent$Post } from "@package/net/neoforged/neoforge/event/tick";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $WrappedLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $ContraptionAccessor, $ControlledContraptionEntityAccessor } from "@package/dev/simulated_team/simulated/mixin/accessor";
import { $MountedItemStorageWrapper, $MountedItemStorage } from "@package/com/simibubi/create/api/contraption/storage/item";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as actors from "@package/com/simibubi/create/content/contraptions/actors";
export * as elevator from "@package/com/simibubi/create/content/contraptions/elevator";
export * as minecart from "@package/com/simibubi/create/content/contraptions/minecart";
export * as sync from "@package/com/simibubi/create/content/contraptions/sync";
export * as bearing from "@package/com/simibubi/create/content/contraptions/bearing";
export * as behaviour from "@package/com/simibubi/create/content/contraptions/behaviour";
export * as chassis from "@package/com/simibubi/create/content/contraptions/chassis";
export * as gantry from "@package/com/simibubi/create/content/contraptions/gantry";
export * as pulley from "@package/com/simibubi/create/content/contraptions/pulley";
export * as render from "@package/com/simibubi/create/content/contraptions/render";
export * as glue from "@package/com/simibubi/create/content/contraptions/glue";
export * as mounted from "@package/com/simibubi/create/content/contraptions/mounted";
export * as data from "@package/com/simibubi/create/content/contraptions/data";
export * as wrench from "@package/com/simibubi/create/content/contraptions/wrench";
export * as piston from "@package/com/simibubi/create/content/contraptions/piston";

declare module "@package/com/simibubi/create/content/contraptions" {
    export class $ContraptionBlockChangedPacket extends $Record implements $ClientboundPacketPayload {
        newState(): $BlockState;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        localPos(): $BlockPos;
        entityId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionBlockChangedPacket>;
        constructor(entityId: number, localPos: $BlockPos_, newState: $BlockState_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionBlockChangedPacket}.
     */
    export type $ContraptionBlockChangedPacket_ = { newState?: $BlockState_, entityId?: number, localPos?: $BlockPos_,  } | [newState?: $BlockState_, entityId?: number, localPos?: $BlockPos_, ];
    export class $ContraptionCollider$PlayerType extends $Enum<$ContraptionCollider$PlayerType> {
    }
    /**
     * Values that may be interpreted as {@link $ContraptionCollider$PlayerType}.
     */
    export type $ContraptionCollider$PlayerType_ = "none" | "client" | "remote" | "server";
    export class $StructureTransform {
        apply(arg0: $BlockPos_): $BlockPos;
        apply(arg0: $BlockEntity): void;
        apply(arg0: $Vec3_): $Vec3;
        apply(arg0: $BlockState_): $BlockState;
        rotateAxis(arg0: $Direction$Axis_): $Direction$Axis;
        unapply(arg0: $BlockPos_): $BlockPos;
        mirrorFacing(arg0: $Direction_): $Direction;
        applyWithoutOffset(arg0: $Vec3_): $Vec3;
        applyWithoutOffset(arg0: $BlockPos_): $BlockPos;
        rotateFacing(arg0: $Direction_): $Direction;
        handler$zgb000$azimuth$apply(arg0: $BlockEntity, arg1: $CallbackInfo): void;
        applyWithoutOffsetUncentered(arg0: $Vec3_): $Vec3;
        unapplyWithoutOffset(arg0: $BlockPos_): $BlockPos;
        unapplyWithoutOffset(arg0: $Vec3_): $Vec3;
        mirror: $Mirror;
        offset: $BlockPos;
        rotationAxis: $Direction$Axis;
        rotation: $Rotation;
        angle: number;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StructureTransform>;
        constructor(arg0: $BlockPos_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $BlockPos_, arg1: $Direction$Axis_, arg2: $Rotation_, arg3: $Mirror_);
    }
    export class $ContraptionRelocationPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        entityId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionRelocationPacket>;
        constructor(entityId: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionRelocationPacket}.
     */
    export type $ContraptionRelocationPacket_ = { entityId?: number,  } | [entityId?: number, ];
    export class $ContraptionStallPacket extends $Record implements $ClientboundPacketPayload {
        x(): number;
        z(): number;
        handle(arg0: $LocalPlayer): void;
        y(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        angle(): number;
        entityId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionStallPacket>;
        constructor(entityId: number, x: number, y: number, z: number, angle: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionStallPacket}.
     */
    export type $ContraptionStallPacket_ = { entityId?: number, angle?: number, x?: number, y?: number, z?: number,  } | [entityId?: number, angle?: number, x?: number, y?: number, z?: number, ];
    export class $TranslatingContraption extends $Contraption {
        createColliders(arg0: $Level, arg1: $Direction_): $Set<$BlockPos>;
        getOrCreateColliders(arg0: $Level, arg1: $Direction_): $Set<$BlockPos>;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
    }
    export class $IDisplayAssemblyExceptions {
    }
    export interface $IDisplayAssemblyExceptions {
        getLastAssemblyException(): $AssemblyException;
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
        get lastAssemblyException(): $AssemblyException;
    }
    /**
     * Values that may be interpreted as {@link $IDisplayAssemblyExceptions}.
     */
    export type $IDisplayAssemblyExceptions_ = (() => $AssemblyException);
    export class $AbstractContraptionEntity extends $Entity implements $IEntityWithComplexSpawn, $ICreateContraptionEntity, $KinematicContraption {
        static build(arg0: $EntityType$Builder<never>): $EntityType$Builder<never>;
        move(arg0: number, arg1: number, arg2: number): void;
        control(arg0: $BlockPos_, arg1: $Collection_<number>, arg2: $Player): boolean;
        sable$getFloatingClusterContainer(): $FloatingClusterContainer;
        tickActors(): void;
        isStalled(): boolean;
        refreshPSIs(): void;
        getYawOffset(): number;
        getPrevPositionVec(): $Vec3;
        getRotationState(): $AbstractContraptionEntity$ContraptionRotationState;
        sable$getPosition(arg0: number): $Vector3dc;
        isReadyForRender(): boolean;
        collisionEnabled(): boolean;
        static yawFromVector(arg0: $Vec3_): number;
        isAliveOrStale(): boolean;
        isPrevPosInvalid(): boolean;
        sable$blockGetter(): $BlockGetter;
        alignPassenger(arg0: $Entity): void;
        stopControlling(arg0: $BlockPos_): void;
        static pitchFromVector(arg0: $Vec3_): number;
        toLocalVector(arg0: $Vec3_, arg1: number, arg2: boolean): $Vec3;
        toLocalVector(arg0: $Vec3_, arg1: number): $Vec3;
        getContraptionName(): $Component;
        reverseRotation(arg0: $Vec3_, arg1: number): $Vec3;
        sable$isValid(): boolean;
        getAnchorVec(): $Vec3;
        getPrevAnchorVec(): $Vec3;
        setControllingPlayer(arg0: $UUID_): void;
        readSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        writeSpawnData(arg0: $RegistryFriendlyByteBuf): void;
        applyRotation(arg0: $Vec3_, arg1: number): $Vec3;
        getContraption(): $Contraption;
        registerColliding(arg0: $Entity): void;
        disassemble(): void;
        canInteractWithBlock(arg0: $Player, arg1: $Vec3_, arg2: number): boolean;
        canInteractWithBlock(arg0: $Player, arg1: $BlockPos_, arg2: number): boolean;
        setBlock(arg0: $BlockPos_, arg1: $StructureTemplate$StructureBlockInfo_): void;
        addSittingPassenger(arg0: $Entity, arg1: number): void;
        supportsTerrainCollision(): boolean;
        getPassengerPosition(arg0: $Entity, arg1: number): $Vec3;
        handlePlayerInteraction(arg0: $Player, arg1: $BlockPos_, arg2: $Direction_, arg3: $InteractionHand_): boolean;
        sable$getLocalBounds(arg0: $BoundingBox3i): void;
        sable$getMassTracker(): $MassTracker;
        getXaero_OPAC_contraption(): $ICreateContraption;
        getControllingPlayer(): ($UUID) | undefined;
        sable$getOrientation(arg0: number): $Quaterniond;
        applyLocalTransforms(arg0: $PoseStack, arg1: number): void;
        sable$liftProviders(): $Map<any, any>;
        setContraptionMotion(arg0: $Vec3_): void;
        sable$shouldCollide(): boolean;
        getContactPointMotion(arg0: $Vec3_): $Vec3;
        startControlling(arg0: $BlockPos_, arg1: $Player): boolean;
        toGlobalVector(arg0: $Vec3_, arg1: number, arg2: boolean): $Vec3;
        toGlobalVector(arg0: $Vec3_, arg1: number): $Vec3;
        sable$getPosition(): $Vector3dc;
        sable$getLocalPose(arg0: $Pose3d, arg1: number): $Pose3d;
        sable$getOrientation(): $Quaterniond;
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
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
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
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
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
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType<never>, arg1: $Level);
        get stalled(): boolean;
        get yawOffset(): number;
        get prevPositionVec(): $Vec3;
        get rotationState(): $AbstractContraptionEntity$ContraptionRotationState;
        get readyForRender(): boolean;
        get aliveOrStale(): boolean;
        get prevPosInvalid(): boolean;
        get contraptionName(): $Component;
        get anchorVec(): $Vec3;
        get prevAnchorVec(): $Vec3;
        get contraption(): $Contraption;
        get xaero_OPAC_contraption(): $ICreateContraption;
        set contraptionMotion(value: $Vec3_);
    }
    export class $ContraptionWorld extends $WrappedLevel {
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level, arg1: $Contraption);
    }
    export class $ContraptionCollider {
        static isCollidingWithWorld(arg0: $Level, arg1: $TranslatingContraption, arg2: $BlockPos_, arg3: $Direction_): boolean;
        static worldToLocalPos(arg0: $Vec3_, arg1: $Vec3_, arg2: $AbstractContraptionEntity$ContraptionRotationState): $Vec3;
        static worldToLocalPos(arg0: $Vec3_, arg1: $Vec3_, arg2: $Matrix3d, arg3: number): $Vec3;
        static worldToLocalPos(arg0: $Vec3_, arg1: $AbstractContraptionEntity): $Vec3;
        static collideBlocks(arg0: $AbstractContraptionEntity): boolean;
        static lockPacketReceived(arg0: number, arg1: number, arg2: number): void;
        static getWorldToLocalTranslation(arg0: $Entity, arg1: $Vec3_, arg2: $Matrix3d, arg3: number): $Vec3;
        constructor();
    }
    export class $OrientedContraptionEntity extends $AbstractContraptionEntity {
        static create(arg0: $Level, arg1: $Contraption, arg2: $Direction_): $OrientedContraptionEntity;
        isInitialOrientationPresent(): boolean;
        static createAtYaw(arg0: $Level, arg1: $Contraption, arg2: $Direction_, arg3: number): $OrientedContraptionEntity;
        static handleRelocationPacket(arg0: $ContraptionRelocationPacket_): void;
        setInitialOrientation(arg0: $Direction_): void;
        getCoupledCartsIfPresent(): $Couple<$MinecartController>;
        getInitialOrientation(): $Direction;
        startAtYaw(arg0: number): void;
        getCouplingId(): $UUID;
        getInitialYaw(): number;
        startAtInitialYaw(): void;
        setCouplingId(arg0: $UUID_): void;
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
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
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
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
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
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        nonDamageTicks: number;
        targetYaw: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType<never>, arg1: $Level);
        get initialOrientationPresent(): boolean;
        get coupledCartsIfPresent(): $Couple<$MinecartController>;
        get initialYaw(): number;
    }
    export class $Contraption implements $ContraptionAccessor, $ContraptionMixin, $ICreateContraption {
        stop(arg0: $Level): void;
        getType(): $ContraptionType;
        canBeStabilized(arg0: $Direction_, arg1: $BlockPos_): boolean;
        getIsLegacy(): $Object2BooleanMap<$BlockPos>;
        writeStorage(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        forEachActor(arg0: $Level, arg1: $BiConsumer_<$MovementBehaviour, $MovementContext>): void;
        getInteractors(): $Map<$BlockPos, $MovingInteractionBehaviour>;
        isHiddenInPortal(arg0: $BlockPos_): boolean;
        setSeatMapping(arg0: $Map_<$UUID_, number>): void;
        getStorage(): $MountedStorageManager;
        containsBlockBreakers(): boolean;
        removeBlocksFromWorld(arg0: $Level, arg1: $BlockPos_): void;
        getOrCreateClientContraptionLazy(): $ClientContraption;
        getSimplifiedEntityColliders(): $CollisionList;
        getBlocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
        getSeatOf(arg0: $UUID_): $BlockPos;
        getSeats(): $List<$BlockPos>;
        getActors(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>;
        onEntityInitialize(arg0: $Level, arg1: $AbstractContraptionEntity): void;
        getBearingPosOf(arg0: $UUID_): $BlockPos;
        onEntityCreated(arg0: $AbstractContraptionEntity): void;
        getSeatMapping(): $Map<$UUID, number>;
        addBlocksToWorld(arg0: $Level, arg1: $StructureTransform): void;
        tickStorage(arg0: $AbstractContraptionEntity): void;
        getActorAt(arg0: $BlockPos_): $MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>;
        readNBT(arg0: $Level, arg1: $CompoundTag_, arg2: boolean): void;
        writeNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        static fromNBT(arg0: $Level, arg1: $CompoundTag_, arg2: boolean): $Contraption;
        getXaero_OPAC_anchor(): $BlockPos;
        setXaero_OPAC_placementPos(arg0: $BlockPos_): void;
        getXaero_OPAC_placementPos(): $BlockPos;
        expandBoundsAroundAxis(arg0: $Direction$Axis_): void;
        startMoving(arg0: $Level): void;
        invalidateClientContraptionStructure(): void;
        invalidateClientContraptionChildren(): void;
        searchMovedStructure(arg0: $Level, arg1: $BlockPos_, arg2: $Direction_): boolean;
        getDisabledActors(): $List<$ItemStack>;
        setActorsActive(arg0: $ItemStack_, arg1: boolean): void;
        isActorTypeDisabled(arg0: $ItemStack_): boolean;
        handler$zdp000$openpartiesandclaims$postAddSuperGlueToWorld(arg0: $Level, arg1: $StructureTransform, arg2: $CallbackInfo): void;
        addPassengersToWorld(arg0: $Level, arg1: $StructureTransform, arg2: $List_<$Entity>): void;
        getContraptionWorld(): $ContraptionWorld;
        invalidateColliders(): void;
        resetClientContraption(): void;
        assemble(arg0: $Level, arg1: $BlockPos_): boolean;
        localvar$zdp000$openpartiesandclaims$onAddBlocksToWorld(arg0: $BlockState_, arg1: $Level, arg2: $StructureTransform): $BlockState;
        handler$zdp000$openpartiesandclaims$preAddSuperGlueToWorld(arg0: $Level, arg1: $StructureTransform, arg2: $CallbackInfo): void;
        handler$zdp000$openpartiesandclaims$onMovementAllowed(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $CallbackInfoReturnable<any>): void;
        modify$zdp000$openpartiesandclaims$onAddBlocksToWorld(arg0: $BlockPos_): $BlockPos;
        handler$jmf000$createdieselgenerators$getBlockEntityNBT(arg0: $Level, arg1: $BlockPos_, arg2: $CallbackInfoReturnable<any>): void;
        static getRadius(arg0: $Iterable_<$Vec3i>, arg1: $Direction$Axis_): number;
        getBlockEntityClientSide(arg0: $BlockPos_): $BlockEntity;
        getInitialPassengers(): $Map<$BlockPos, $Entity>;
        setInitialPassengers(arg0: $Map_<$BlockPos_, $Entity>): void;
        getSuperGlue(): $List<$AABB>;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        get type(): $ContraptionType;
        get interactors(): $Map<$BlockPos, $MovingInteractionBehaviour>;
        get storage(): $MountedStorageManager;
        get orCreateClientContraptionLazy(): $ClientContraption;
        get blocks(): $Map<$BlockPos, $StructureTemplate$StructureBlockInfo>;
        get seats(): $List<$BlockPos>;
        get actors(): $List<$MutablePair<$StructureTemplate$StructureBlockInfo, $MovementContext>>;
        get xaero_OPAC_anchor(): $BlockPos;
        get disabledActors(): $List<$ItemStack>;
        get contraptionWorld(): $ContraptionWorld;
        get superGlue(): $List<$AABB>;
    }
    export class $IControlContraption {
    }
    export interface $IControlContraption {
        attach(arg0: $ControlledContraptionEntity): void;
        isValid(): boolean;
        getBlockPosition(): $BlockPos;
        isAttachedTo(arg0: $AbstractContraptionEntity): boolean;
        onStall(): void;
        get valid(): boolean;
        get blockPosition(): $BlockPos;
    }
    export class $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest extends $Record implements $ServerboundPacketPayload {
        offset(): number;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        contraption(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest>;
        constructor(contraption: number, offset: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest}.
     */
    export type $ContraptionColliderLockPacket$ContraptionColliderLockPacketRequest_ = { offset?: number, contraption?: number,  } | [offset?: number, contraption?: number, ];
    export class $DirectionalExtenderScrollOptionSlot extends $CenteredSideValueBoxTransform {
        constructor(arg0: $BiPredicate_<$BlockState, $Direction>);
    }
    export class $AbstractContraptionEntity$ContraptionRotationState {
        getYawOffset(): number;
        hasVerticalRotation(): boolean;
        asMatrix(): $Matrix3d;
        xRotation: number;
        secondYRotation: number;
        zRotation: number;
        static NONE: $AbstractContraptionEntity$ContraptionRotationState;
        yRotation: number;
        constructor();
        get yawOffset(): number;
    }
    export class $ContraptionColliderLockPacket extends $Record implements $ClientboundPacketPayload {
        offset(): number;
        handle(arg0: $LocalPlayer): void;
        sender(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        contraption(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionColliderLockPacket>;
        constructor(contraption: number, offset: number, sender: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionColliderLockPacket}.
     */
    export type $ContraptionColliderLockPacket_ = { contraption?: number, offset?: number, sender?: number,  } | [contraption?: number, offset?: number, sender?: number, ];
    export class $TrainCollisionPacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        damage(): number;
        contraptionEntityId(): number;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TrainCollisionPacket>;
        constructor(damage: number, contraptionEntityId: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $TrainCollisionPacket}.
     */
    export type $TrainCollisionPacket_ = { damage?: number, contraptionEntityId?: number,  } | [damage?: number, contraptionEntityId?: number, ];
    export class $AssemblyException extends $Exception {
        static write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: $AssemblyException): void;
        static read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $AssemblyException;
        getPosition(): $BlockPos;
        static unmovableBlock(arg0: $BlockPos_, arg1: $BlockState_): $AssemblyException;
        static structureTooLarge(): $AssemblyException;
        static noPistonPoles(): $AssemblyException;
        static notEnoughSails(arg0: number): $AssemblyException;
        static tooManyPistonPoles(): $AssemblyException;
        static unloadedChunk(arg0: $BlockPos_): $AssemblyException;
        hasPosition(): boolean;
        component: $Component;
        constructor(arg0: $Component_);
        constructor(arg0: string, ...arg1: $Object[]);
        get position(): $BlockPos;
    }
    export class $IControlContraption$RotationMode extends $Enum<$IControlContraption$RotationMode> implements $INamedIconOptions {
        static values(): $IControlContraption$RotationMode[];
        static valueOf(arg0: string): $IControlContraption$RotationMode;
        getIcon(): $AllIcons;
        getTranslationKey(): string;
        static ROTATE_PLACE: $IControlContraption$RotationMode;
        static ROTATE_PLACE_RETURNED: $IControlContraption$RotationMode;
        static ROTATE_NEVER_PLACE: $IControlContraption$RotationMode;
        get icon(): $AllIcons;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $IControlContraption$RotationMode}.
     */
    export type $IControlContraption$RotationMode_ = "rotate_place" | "rotate_place_returned" | "rotate_never_place";
    export class $MountedStorageManager implements $MountedStorageAccessor {
        initialize(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        read(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $Contraption): void;
        unmount(arg0: $Level, arg1: $StructureTemplate$StructureBlockInfo_, arg2: $BlockPos_, arg3: $BlockEntity): void;
        getFluids(): $MountedFluidStorageWrapper;
        handlePlayerStorageInteraction(arg0: $Contraption, arg1: $Player, arg2: $BlockPos_): boolean;
        getAllItemStorages(): $ImmutableMap<$BlockPos, $MountedItemStorage>;
        tick(arg0: $AbstractContraptionEntity): void;
        handleSync(arg0: $MountedStorageSyncPacket_, arg1: $AbstractContraptionEntity): void;
        addBlock(arg0: $Level, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_, arg4: $BlockEntity): void;
        getAllItems(): $CombinedInvWrapper;
        getMountedItems(): $MountedItemStorageWrapper;
        getFuelItems(): $MountedItemStorageWrapper;
        attachExternal(arg0: $IItemHandlerModifiable): void;
        getItemsBuilder(): $Map<$BlockPos, $MountedItemStorage>;
        constructor();
        get fluids(): $MountedFluidStorageWrapper;
        get allItemStorages(): $ImmutableMap<$BlockPos, $MountedItemStorage>;
        get allItems(): $CombinedInvWrapper;
        get mountedItems(): $MountedItemStorageWrapper;
        get fuelItems(): $MountedItemStorageWrapper;
        get itemsBuilder(): $Map<$BlockPos, $MountedItemStorage>;
    }
    export class $IControlContraption$MovementMode extends $Enum<$IControlContraption$MovementMode> implements $INamedIconOptions {
        static values(): $IControlContraption$MovementMode[];
        static valueOf(arg0: string): $IControlContraption$MovementMode;
        getIcon(): $AllIcons;
        getTranslationKey(): string;
        static MOVE_PLACE_RETURNED: $IControlContraption$MovementMode;
        static MOVE_NEVER_PLACE: $IControlContraption$MovementMode;
        static MOVE_PLACE: $IControlContraption$MovementMode;
        get icon(): $AllIcons;
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $IControlContraption$MovementMode}.
     */
    export type $IControlContraption$MovementMode_ = "move_place" | "move_place_returned" | "move_never_place";
    export class $ControlledContraptionEntity extends $AbstractContraptionEntity implements $ControlledContraptionEntityAccessor {
        static create(arg0: $Level, arg1: $IControlContraption, arg2: $Contraption): $ControlledContraptionEntity;
        setAngle(arg0: number): void;
        setRotationAxis(arg0: $Direction$Axis_): void;
        getAngle(arg0: number): number;
        getRotationAxis(): $Direction$Axis;
        invokeMakeStructureTransform(): $StructureTransform;
        getControllerPos(): $BlockPos;
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
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        hurtMarked: boolean;
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
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
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
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        collidingEntities: $Map<$Entity, $MutableInt>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(arg0: $EntityType<never>, arg1: $Level);
        get controllerPos(): $BlockPos;
    }
    export class $MountedStorageSyncPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        items(): $Map<$BlockPos, $MountedItemStorage>;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        fluids(): $Map<$BlockPos, $MountedFluidStorage>;
        contraptionId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MountedStorageSyncPacket>;
        constructor(contraptionId: number, items: $Map_<$BlockPos_, $MountedItemStorage>, fluids: $Map_<$BlockPos_, $MountedFluidStorage>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $MountedStorageSyncPacket}.
     */
    export type $MountedStorageSyncPacket_ = { items?: $Map_<$BlockPos_, $MountedItemStorage>, fluids?: $Map_<$BlockPos_, $MountedFluidStorage>, contraptionId?: number,  } | [items?: $Map_<$BlockPos_, $MountedItemStorage>, fluids?: $Map_<$BlockPos_, $MountedFluidStorage>, contraptionId?: number, ];
    export class $ContraptionDisassemblyPacket extends $Record implements $ClientboundPacketPayload {
        transform(): $StructureTransform;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        entityId(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ContraptionDisassemblyPacket>;
        constructor(entityId: number, transform: $StructureTransform);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ContraptionDisassemblyPacket}.
     */
    export type $ContraptionDisassemblyPacket_ = { transform?: $StructureTransform, entityId?: number,  } | [transform?: $StructureTransform, entityId?: number, ];
    export class $ContraptionHandlerClient {
        static rightClickingOnContraptionsGetsHandledLocally(arg0: $InputEvent$InteractionKeyMappingTriggered): void;
        static preventRemotePlayersWalkingAnimations(arg0: $PlayerTickEvent$Post): void;
        static getRayInputs(arg0: $LocalPlayer): $Couple<$Vec3>;
        static rayTraceContraption(arg0: $Vec3_, arg1: $Vec3_, arg2: $AbstractContraptionEntity): $BlockHitResult;
        constructor();
    }
    export class $ContraptionHandler {
        static entitiesWhoJustDismountedGetSentToTheRightLocation(arg0: $LivingEntity, arg1: $Level): void;
        static tick(arg0: $Level): void;
        static addSpawnedContraptionsToCollisionList(arg0: $Entity, arg1: $Level): void;
        static loadedContraptions: $WorldAttached<$Map<number, $WeakReference<$AbstractContraptionEntity>>>;
        constructor();
    }
}
