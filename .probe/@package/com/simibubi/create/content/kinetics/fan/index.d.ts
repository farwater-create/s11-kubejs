import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions_, $ParticleOptions, $ParticleType } from "@package/net/minecraft/core/particles";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List, $EnumSet } from "@package/java/util";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $NozzleBlockEntityExtension } from "@package/dev/ryanhcode/sable/neoforge/mixinterface/compatibility/create";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $SoundSource } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntityRenderer, $KineticBlockEntity, $DirectionalKineticBlock, $KineticBlockEntityVisual } from "@package/com/simibubi/create/content/kinetics/base";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $NozzleBlockEntityAccessor } from "@package/dev/ryanhcode/sable/neoforge/mixin/compatibility/create/nozzle";
import { $BlockEntityPropeller, $BlockEntitySubLevelPropellerActor } from "@package/dev/ryanhcode/sable/api/block/propeller";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $IBE, $WrenchableDirectionalBlock } from "@package/com/simibubi/create/foundation/block";
import { $Sound, $AbstractTickableSoundInstance, $SoundInstance$Attenuation } from "@package/net/minecraft/client/resources/sounds";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $BlockEntitySubLevelActor } from "@package/dev/ryanhcode/sable/api/block";
import { $FanProcessingType, $FanProcessingType$AirFlowParticleAccess } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $Class, $Iterable } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $Item } from "@package/net/minecraft/world/item";
import { $ParticleProvider, $SimpleAnimatedParticle, $SpriteSet, $Particle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $RigidBodyHandle } from "@package/dev/ryanhcode/sable/api/physics/handle";
import { $ServerSubLevel, $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $DirectionProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $AirCurrentAccess, $AirCurrentSegmentAccess } from "@package/plus/dragons/createdragonsplus/common/kinetics/fan";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as processing from "@package/com/simibubi/create/content/kinetics/fan/processing";

declare module "@package/com/simibubi/create/content/kinetics/fan" {
    export class $EncasedFanBlockEntity extends $KineticBlockEntity implements $IAirCurrentSource, $BlockEntityPropeller, $BlockEntitySubLevelPropellerActor {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        isActive(): boolean;
        sable$tick(arg0: $ServerSubLevel): void;
        getAirFlowDirection(): $Direction;
        blockInFrontChanged(): void;
        getAirflowOriginSide(): $Direction;
        getThrust(): number;
        getAirflow(): number;
        getPropeller(): $BlockEntityPropeller;
        getBlockDirection(): $Direction;
        getAirCurrentPos(): $BlockPos;
        getAirCurrentWorld(): $Level;
        isSourceRemoved(): boolean;
        getAirCurrent(): $AirCurrent;
        updateChute(): void;
        getMaxDistance(): number;
        getCurrentAirPressure(): number;
        getAirflowScaling(): number;
        getScaledThrust(): number;
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        applyForces(arg0: $ServerSubLevel, arg1: $Vec3_, arg2: number): void;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
        airCurrent: $AirCurrent;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        source: $BlockPos;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        network: number;
        sequenceContext: $SequencedGearshiftBlockEntity$SequenceContext;
        networkDirty: boolean;
        worldPosition: $BlockPos;
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get active(): boolean;
        get airFlowDirection(): $Direction;
        get airflowOriginSide(): $Direction;
        get thrust(): number;
        get airflow(): number;
        get propeller(): $BlockEntityPropeller;
        get blockDirection(): $Direction;
        get airCurrentPos(): $BlockPos;
        get airCurrentWorld(): $Level;
        get sourceRemoved(): boolean;
        get maxDistance(): number;
        get currentAirPressure(): number;
        get airflowScaling(): number;
        get scaledThrust(): number;
    }
    export class $AirCurrent$Client {
        static tickClientPlayerSounds(): void;
        constructor();
    }
    export class $IAirCurrentSource {
    }
    export interface $IAirCurrentSource {
        getSpeed(): number;
        getAirFlowDirection(): $Direction;
        getAirflowOriginSide(): $Direction;
        getAirCurrentPos(): $BlockPos;
        getAirCurrentWorld(): $Level;
        isSourceRemoved(): boolean;
        getMaxDistance(): number;
        getAirCurrent(): $AirCurrent;
        get speed(): number;
        get airFlowDirection(): $Direction;
        get airflowOriginSide(): $Direction;
        get airCurrentPos(): $BlockPos;
        get airCurrentWorld(): $Level;
        get sourceRemoved(): boolean;
        get maxDistance(): number;
        get airCurrent(): $AirCurrent;
    }
    export class $NozzleBlock extends $WrenchableDirectionalBlock implements $IBE<$NozzleBlockEntity> {
        getBlockEntityClass(): $Class<$NozzleBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$NozzleBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $NozzleBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($NozzleBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NozzleBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$NozzleBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$NozzleBlockEntity>): void;
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
        static CODEC: $MapCodec<$WrenchableDirectionalBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$NozzleBlockEntity>;
        get blockEntityType(): $BlockEntityType<$NozzleBlockEntity>;
    }
    export class $NozzleBlockEntity extends $SmartBlockEntity implements $NozzleBlockEntityAccessor, $BlockEntitySubLevelActor, $NozzleBlockEntityExtension {
        setRange(arg0: number): void;
        sable$physicsTick(arg0: $ServerSubLevel, arg1: $RigidBodyHandle, arg2: number): void;
        sable$getValidDirections(): $EnumSet<any>;
        wrapOperation$hkk000$sable$clampParticlesMore(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): number;
        handler$hkl000$sable$generateRays(arg0: $BlockEntityType<any>, arg1: $BlockPos_, arg2: $BlockState_, arg3: $CallbackInfo): void;
        redirect$hkk000$sable$nozzlePosition(arg0: $Vec3i): $Vec3;
        redirect$hkk000$sable$checkDirection(arg0: $Level, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Vec3_, arg9: $Vec3_): void;
        redirect$hkk000$sable$nozzlePositionLazy(arg0: $Vec3i): $Vec3;
        handler$hkm000$sable$updateValidDirections(arg0: $CallbackInfo): void;
        redirect$hkk000$sable$checkDirection$mixinextras$bridge$20(arg0: $Level, arg1: $ParticleOptions_, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $LocalRef<any>, arg9: $LocalRef<any>): void;
        sable$tick(arg0: $ServerSubLevel): void;
        sable$getConnectionDependencies(): $Iterable<$SubLevel>;
        sable$getLoadingDependencies(): $Iterable<$SubLevel>;
        getRange(): number;
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
    export class $EncasedFanBlock extends $DirectionalKineticBlock implements $IBE<$EncasedFanBlockEntity> {
        getBlockEntityClass(): $Class<$EncasedFanBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$EncasedFanBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $EncasedFanBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($EncasedFanBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EncasedFanBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$EncasedFanBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$EncasedFanBlockEntity>): void;
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
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$EncasedFanBlockEntity>;
        get blockEntityType(): $BlockEntityType<$EncasedFanBlockEntity>;
    }
    export class $AirCurrent$AirCurrentSegment implements $AirCurrentSegmentAccess {
    }
    export class $AirFlowParticle$Factory implements $ParticleProvider<$AirFlowParticleData> {
        createParticle(arg0: $AirFlowParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $AirCurrentSound extends $AbstractTickableSoundInstance {
        setPitch(arg0: number): void;
        isFaded(): boolean;
        stopSound(): void;
        fadeIn(arg0: number): void;
        fadeOut(): void;
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
        get faded(): boolean;
    }
    export class $AirFlowParticle extends $SimpleAnimatedParticle {
        handler$hnj000$sable$fixAirflowParticle(arg0: $CallbackInfo): void;
        handler$hnj000$sable$transformNormal(arg0: $CallbackInfo, arg1: $LocalRef<any>): void;
        redirect$hnj000$sable$reverseProjectPos2(arg0: number, arg1: number, arg2: number): $Vec3;
        redirect$hnj000$sable$reverseProjectPos(arg0: $AABB_, arg1: number, arg2: number, arg3: number): boolean;
        speedUpWhenYMotionIsBlocked: boolean;
        lifetime: number;
        roll: number;
        yd: number;
        sprites: $SpriteSet;
        oRoll: number;
        random: $RandomSource;
        bCol: number;
        yo: number;
        alpha: number;
        sprite: $TextureAtlasSprite;
        rCol: number;
        quadSize: number;
        level: $ClientLevel;
        zd: number;
        xd: number;
        friction: number;
        stoppedByCollision: boolean;
        onGround: boolean;
        removed: boolean;
        bbHeight: number;
        zo: number;
        gravity: number;
        gCol: number;
        xo: number;
        x: number;
        y: number;
        hasPhysics: boolean;
        z: number;
        bbWidth: number;
        age: number;
    }
    export class $AirCurrent implements $AirCurrentAccess {
        getTypeAt(arg0: number): $FanProcessingType;
        static isPlayerCreativeFlying(arg0: $Entity): boolean;
        tick(): void;
        findEntities(): void;
        getSegmentAccessAt(arg0: number): $AirCurrentSegmentAccess;
        rebuild(): void;
        static getFlowLimit(arg0: $Level, arg1: $BlockPos_, arg2: number, arg3: $Direction_): number;
        wrapOperation$hhm000$sable$transformFlowVector$mixinextras$bridge$28(arg0: $Entity, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalFloatRef, arg5: $LocalRef<any>, arg6: $LocalFloatRef): void;
        redirect$hhm000$sable$reverseProjectEntityBB(arg0: $Entity): $AABB;
        redirect$hhm000$sable$reverseProjectAllPositions(arg0: $Entity): $Vec3;
        wrapOperation$hhm000$sable$transformFlowVector(arg0: $Entity, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $Vec3i, arg4: number, arg5: $Vec3_, arg6: number): void;
        handler$hhm000$sable$updateSubLevel(arg0: $CallbackInfo): void;
        findAffectedHandlers(): void;
        tickAffectedHandlers(): void;
        bounds: $AABB;
        maxDistance: number;
        source: $IAirCurrentSource;
        pushing: boolean;
        segments: $List<$AirCurrent$AirCurrentSegment>;
        direction: $Direction;
        constructor(arg0: $IAirCurrentSource);
    }
    export class $AirFlowParticle$Access implements $FanProcessingType$AirFlowParticleAccess {
    }
    export class $AirFlowParticleData implements $ParticleOptions, $ICustomParticleDataWithSprite<$AirFlowParticleData> {
        getType(): $ParticleType<never>;
        getCodec(arg0: $ParticleType<$AirFlowParticleData>): $MapCodec<$AirFlowParticleData>;
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$AirFlowParticleData>;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AirFlowParticleData>;
        getFactory(): $ParticleProvider<$AirFlowParticleData>;
        register(arg0: $ParticleType<$AirFlowParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        createType(): $ParticleType<$AirFlowParticleData>;
        static CODEC: $MapCodec<$AirFlowParticleData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AirFlowParticleData>;
        constructor(arg0: $Vec3i);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor();
        get type(): $ParticleType<never>;
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$AirFlowParticleData>;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $AirFlowParticleData>;
        get factory(): $ParticleProvider<$AirFlowParticleData>;
    }
    export class $FanVisual extends $KineticBlockEntityVisual<$EncasedFanBlockEntity> {
        constructor(arg0: $VisualizationContext, arg1: $EncasedFanBlockEntity, arg2: number);
    }
    export class $EncasedFanRenderer extends $KineticBlockEntityRenderer<$EncasedFanBlockEntity> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
}
