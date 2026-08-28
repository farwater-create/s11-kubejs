import { $MapCodec } from "@package/com/mojang/serialization";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Pose, $PortalProcessor, $EntityType, $Entity, $EntityDimensions, $Entity$RemovalReason } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $UUID, $List_, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap, $Object2BooleanMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $TranslatingContraption, $AssemblyException, $IDisplayAssemblyExceptions, $AbstractContraptionEntity, $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $DirectionalAxisKineticBlock, $KineticBlockEntityRenderer, $KineticBlockEntity, $ShaftVisual } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Record, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $CollisionList } from "@package/com/simibubi/create/foundation/collision";
import { $TagKey } from "@package/net/minecraft/tags";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $CanLoadBigCannon } from "@package/rbasamoyai/createbigcannons/cannon_loading";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $HasFragileContraption } from "@package/rbasamoyai/createbigcannons/remix";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $DirectionProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $SimpleDynamicVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $MutableInt } from "@package/org/apache/commons/lang3/mutable";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/contraptions/gantry" {
    export class $GantryCarriageVisual extends $ShaftVisual<$GantryCarriageBlockEntity> implements $SimpleDynamicVisual {
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: $GantryCarriageBlockEntity, arg2: number);
    }
    export class $GantryCarriageBlockEntity extends $KineticBlockEntity implements $IDisplayAssemblyExceptions {
        getLastAssemblyException(): $AssemblyException;
        checkValidGantryShaft(): void;
        queueAssembly(): void;
        static getGantryPinionModifier(arg0: $Direction_, arg1: $Direction_): number;
        addExceptionToTooltip(arg0: $List_<$Component_>): boolean;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        level: $Level;
        updateSpeed: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        preventSpeedUpdate: number;
        network: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get lastAssemblyException(): $AssemblyException;
    }
    export class $GantryCarriageRenderer extends $KineticBlockEntityRenderer<$GantryCarriageBlockEntity> {
        static getAngleForBE(arg0: $KineticBlockEntity, arg1: $BlockPos_, arg2: $Direction$Axis_): number;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $GantryCarriageBlock extends $DirectionalAxisKineticBlock implements $IBE<$GantryCarriageBlockEntity> {
        static getValidGantryShaftAxis(arg0: $BlockState_): $Direction$Axis;
        static getValidGantryPinionAxis(arg0: $BlockState_, arg1: $Direction$Axis_): $Direction$Axis;
        static isValidGantryShaftAxis(arg0: $BlockState_, arg1: $BlockState_): boolean;
        getBlockEntityClass(): $Class<$GantryCarriageBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$GantryCarriageBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $GantryCarriageBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($GantryCarriageBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$GantryCarriageBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$GantryCarriageBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$GantryCarriageBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
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
        static AXIS_ALONG_FIRST_COORDINATE: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$GantryCarriageBlockEntity>;
        get blockEntityType(): $BlockEntityType<$GantryCarriageBlockEntity>;
    }
    export class $GantryContraptionUpdatePacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        entityID(): number;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        motion(): number;
        coord(): number;
        sequenceLimit(): number;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $GantryContraptionUpdatePacket>;
        constructor(entityID: number, coord: number, motion: number, sequenceLimit: number);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $GantryContraptionUpdatePacket}.
     */
    export type $GantryContraptionUpdatePacket_ = { coord?: number, motion?: number, entityID?: number, sequenceLimit?: number,  } | [coord?: number, motion?: number, entityID?: number, sequenceLimit?: number, ];
    export class $GantryContraption extends $TranslatingContraption implements $CanLoadBigCannon, $HasFragileContraption {
        createbigcannons$getAssemblyMovementDirection(arg0: $Level): $Direction;
        createbigcannons$getOriginalForcedDirection(arg0: $Level): $Direction;
        getFacing(): $Direction;
        createbigcannons$getCannonLoadingColliders(): $Set<any>;
        createbigcannons$getEncounteredBlocks(): $Map<any, any>;
        createbigcannons$fragileDisassemble(): void;
        createbigcannons$setBrokenDisassembly(arg0: boolean): void;
        createbigcannons$isBrokenDisassembly(): boolean;
        createbigcannons$toLocalPos(arg0: $BlockPos_): $BlockPos;
        createbigcannons$getFragileBlockPositions(): $Set<any>;
        createbigcannons$blockBreaksDisassembly(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        createbigcannons$shouldCheckFragility(): boolean;
        hasUniversalCreativeCrate: boolean;
        isLegacy: $Object2BooleanMap<$BlockPos>;
        anchor: $BlockPos;
        stalled: boolean;
        bounds: $AABB;
        simplifiedEntityColliders: $CollisionList;
        disassembled: boolean;
        entity: $AbstractContraptionEntity;
        constructor();
        constructor(arg0: $Direction_);
        get facing(): $Direction;
    }
    export class $GantryContraptionEntity extends $AbstractContraptionEntity {
        static create(arg0: $Level, arg1: $Contraption, arg2: $Direction_): $GantryContraptionEntity;
        static handlePacket(arg0: $GantryContraptionUpdatePacket_): void;
        sendPacket(): void;
        updateClientMotion(): void;
        getAxisCoord(): number;
        limitMovement(arg0: number): void;
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
        sequencedOffsetLimit: number;
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
        get axisCoord(): number;
    }
}
