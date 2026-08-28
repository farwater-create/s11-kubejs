import { $MapCodec } from "@package/com/mojang/serialization";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $KineticBlockEntityAccessor, $KineticEffectHandlerAccessor } from "@package/dev/lopyluna/gnkinetics/mixins";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $LangBuilder } from "@package/net/createmod/catnip/lang";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions, $ParticleOptions_, $ParticleType } from "@package/net/minecraft/core/particles";
import { $RegisterParticleProvidersEvent } from "@package/net/neoforged/neoforge/client/event";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SuperByteBuffer, $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $SimpleBlockEntityVisualizer$Factory } from "@package/dev/engine_room/flywheel/lib/visualization";
import { $ChatFormatting } from "@package/net/minecraft";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties } from "@package/net/minecraft/world/level/block/state";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $InstanceHandle, $InstanceType } from "@package/dev/engine_room/flywheel/api/instance";
import { $BlockHarvester } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $SpriteSet, $Particle, $ParticleProvider, $SimpleAnimatedParticle, $ParticleEngine$SpriteParticleRegistration } from "@package/net/minecraft/client/particle";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $KineticBlockAccessor } from "@package/rbasamoyai/createbigcannons/mixin/compat/create/rotation_propagation";
import { $ColoredLitOverlayInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $AugerDistributor, $AugerDistributor_ } from "@package/dev/simulated_team/simulated/content/blocks/auger_shaft/auger_groups";
import { $Property, $BooleanProperty, $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $KineticBlockEntityExtension } from "@package/dev/simulated_team/simulated/mixin_interface/extra_kinetics";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $IHaveHoveringInformation, $IHaveGoggleInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $BlockEntityVisual, $TickableVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlock } from "@package/com/simibubi/create/api/contraption/transformable";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Vector3f, $Quaternionf } from "@package/org/joml";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $KineticBlockEntityAccessor as $KineticBlockEntityAccessor$1 } from "@package/net/liukrast/deployer/lib/mixin/accessors";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $KineticEffectHandlerAccess } from "@package/com/enxv/aerouniversaljoint/access";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Vec3i, $HolderLookup$Provider, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $KineticNetwork } from "@package/com/simibubi/create/content/kinetics";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ICustomParticleDataWithSprite } from "@package/com/simibubi/create/foundation/particle";
import { $GantryShaftBlockEntity } from "@package/com/simibubi/create/content/kinetics/gantry";
import { $LevelAccessor, $LevelReader, $Level } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IPlacerTracked } from "@package/com/mapter/aeroclaims/protect";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $Model } from "@package/dev/engine_room/flywheel/api/model";
import { $BlockEntity, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/kinetics/base" {
    export class $IRotate {
    }
    export interface $IRotate extends $IWrenchable {
        showCapacityWithAnnotation(): boolean;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        getRotationAxis(arg0: $BlockState_): $Direction$Axis;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        hideStressImpact(): boolean;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $KineticBlockEntityRenderer<T extends $KineticBlockEntity> extends $SafeBlockEntityRenderer<T> {
        static shaft(arg0: $Direction$Axis_): $BlockState;
        static renderRotatingKineticBlock(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $PoseStack, arg3: $VertexConsumer, arg4: number): void;
        static kineticRotationTransform(arg0: $SuperByteBuffer, arg1: $KineticBlockEntity, arg2: $Direction$Axis_, arg3: number, arg4: number): $SuperByteBuffer;
        static renderRotatingBuffer(arg0: $KineticBlockEntity, arg1: $SuperByteBuffer, arg2: $PoseStack, arg3: $VertexConsumer, arg4: number): void;
        static getRotationAxisOf(arg0: $KineticBlockEntity): $Direction$Axis;
        static getAngleForBe(arg0: $KineticBlockEntity, arg1: $BlockPos_, arg2: $Direction$Axis_): number;
        static standardKineticRotationTransform(arg0: $SuperByteBuffer, arg1: $KineticBlockEntity, arg2: number): $SuperByteBuffer;
        static getRotationOffsetForPosition(arg0: $KineticBlockEntity, arg1: $BlockPos_, arg2: $Direction$Axis_): number;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $KineticEffectHandler implements $KineticEffectHandlerAccess, $KineticEffectHandlerAccessor {
        spawnRotationIndicators(): void;
        tick(): void;
        spawnEffect(arg0: $ParticleOptions_, arg1: number, arg2: number): void;
        queueRotationIndicators(): void;
        triggerOverStressedEffect(): void;
        aeronautics$getOverStressedEffect(): number;
        overStressedEffect(): number;
        constructor(arg0: $KineticBlockEntity);
    }
    export class $DirectionalShaftHalvesBlockEntity extends $KineticBlockEntity {
        getSourceFacing(): $Direction;
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
        get sourceFacing(): $Direction;
    }
    export class $OrientedRotatingVisual<T extends $KineticBlockEntity> extends $KineticBlockEntityVisual<T> {
        static of<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        static gantryShaft(arg0: $VisualizationContext, arg1: $GantryShaftBlockEntity, arg2: number): $BlockEntityVisual<$GantryShaftBlockEntity>;
        static backHorizontal<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number, arg3: $Direction_, arg4: $Direction_, arg5: $Model);
    }
    export class $ShaftVisual<T extends $KineticBlockEntity> extends $SingleAxisRotatingVisual<T> {
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $BlockBreakingMovementBehaviour implements $MovementBehaviour {
        stopMoving(arg0: $MovementContext): void;
        tick(arg0: $MovementContext): void;
        damageEntities(arg0: $MovementContext, arg1: $BlockPos_, arg2: $Level): void;
        tickBreaker(arg0: $MovementContext): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        cancelStall(arg0: $MovementContext): void;
        startMoving(arg0: $MovementContext): void;
        modify$zdo000$openpartiesandclaims$onTickBreaker(arg0: $BlockPos_): $BlockPos;
        localvar$zdo000$openpartiesandclaims$onTickBreaker(arg0: $BlockState_, arg1: $MovementContext): $BlockState;
        wrapMethod$hib000$sable$checkPosition(arg0: $MovementContext, arg1: $BlockPos_, arg2: $Operation_<any>): void;
        handler$hib000$sable$testBreakingPosDist(arg0: $MovementContext, arg1: $CallbackInfo): void;
        canBreak(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        isActive(arg0: $MovementContext): boolean;
        disableBlockEntityRendering(): boolean;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        writeExtraData(arg0: $MovementContext): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        constructor();
    }
    export class $RotationIndicatorParticle extends $SimpleAnimatedParticle {
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
    export class $SingleAxisRotatingVisual<T extends $KineticBlockEntity> extends $KineticBlockEntityVisual<T> implements $SimpleTickableVisual {
        static of<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        tick(arg0: $TickableVisual$Context): void;
        static backtank<T extends $KineticBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $SingleAxisRotatingVisual<T>;
        static shaft<T extends $KineticBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $SingleAxisRotatingVisual<T>;
        static ofZ<T extends $KineticBlockEntity>(arg0: $PartialModel): $SimpleBlockEntityVisualizer$Factory<T>;
        planTick(): $Plan<$TickableVisual$Context>;
        static rainbowMode: boolean;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number, arg3: $Model);
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number, arg3: $Direction_, arg4: $Model);
    }
    export class $ShaftRenderer<T extends $KineticBlockEntity> extends $KineticBlockEntityRenderer<T> {
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $HorizontalKineticBlock extends $KineticBlock {
        wrapOperation$enl000$simulated$handleAutoOrientationWithExtraKinetics(arg0: $IRotate, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $Operation_<any>): boolean;
        getPreferredHorizontalFacing(arg0: $BlockPlaceContext): $Direction;
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
        static HORIZONTAL_FACING: $Property<$Direction>;
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
    export class $KineticBlockEntityVisual<T extends $KineticBlockEntity> extends $AbstractBlockEntityVisual<T> {
        static rotationAxis(arg0: $BlockState_): $Direction$Axis;
        static rotationOffset(arg0: $BlockState_, arg1: $Direction$Axis_, arg2: $Vec3i): number;
        static applyOverstressEffect(arg0: $KineticBlockEntity, ...arg1: $RotatingInstance[]): void;
        static shouldOffset(arg0: $Direction$Axis_, arg1: $Vec3i): boolean;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: number);
    }
    export class $IRotate$StressImpact extends $Enum<$IRotate$StressImpact> {
        static values(): $IRotate$StressImpact[];
        static valueOf(arg0: string): $IRotate$StressImpact;
        static of(arg0: number): $IRotate$StressImpact;
        static isEnabled(): boolean;
        getRelativeColor(): $ChatFormatting;
        getAbsoluteColor(): $ChatFormatting;
        static getFormattedStressText(arg0: number): $LangBuilder;
        static HIGH: $IRotate$StressImpact;
        static MEDIUM: $IRotate$StressImpact;
        static LOW: $IRotate$StressImpact;
        static OVERSTRESSED: $IRotate$StressImpact;
        static get enabled(): boolean;
        get relativeColor(): $ChatFormatting;
        get absoluteColor(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$StressImpact}.
     */
    export type $IRotate$StressImpact_ = "low" | "medium" | "high" | "overstressed";
    export class $RotationIndicatorParticle$Factory implements $ParticleProvider<$RotationIndicatorParticleData> {
        createParticle(arg0: $RotationIndicatorParticleData, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): $Particle;
        constructor(arg0: $SpriteSet);
    }
    export class $RotationIndicatorParticleData implements $ParticleOptions, $ICustomParticleDataWithSprite<$RotationIndicatorParticleData> {
        getType(): $ParticleType<never>;
        getCodec(arg0: $ParticleType<$RotationIndicatorParticleData>): $MapCodec<$RotationIndicatorParticleData>;
        getMetaFactory(): $ParticleEngine$SpriteParticleRegistration<$RotationIndicatorParticleData>;
        getAxis(): $Direction$Axis;
        getStreamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $RotationIndicatorParticleData>;
        getFactory(): $ParticleProvider<$RotationIndicatorParticleData>;
        register(arg0: $ParticleType<$RotationIndicatorParticleData>, arg1: $RegisterParticleProvidersEvent): void;
        createType(): $ParticleType<$RotationIndicatorParticleData>;
        static CODEC: $MapCodec<$RotationIndicatorParticleData>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RotationIndicatorParticleData>;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Direction$Axis_);
        constructor();
        get type(): $ParticleType<never>;
        get metaFactory(): $ParticleEngine$SpriteParticleRegistration<$RotationIndicatorParticleData>;
        get axis(): $Direction$Axis;
        get streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $RotationIndicatorParticleData>;
        get factory(): $ParticleProvider<$RotationIndicatorParticleData>;
    }
    export class $KineticBlock extends $Block implements $IRotate, $KineticBlockAccessor {
        getParticleInitialRadius(): number;
        getParticleTargetRadius(): number;
        hasShaftTowards(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        handler$eni000$simulated$extraKineticsReset(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: number, arg4: number, arg5: $CallbackInfo, arg6: $BlockEntity): void;
        showCapacityWithAnnotation(): boolean;
        getMinimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
        hideStressImpact(): boolean;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        callAreStatesKineticallyEquivalent(arg0: $BlockState_, arg1: $BlockState_): boolean;
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
        get particleInitialRadius(): number;
        get particleTargetRadius(): number;
        get minimumRequiredSpeedLevel(): $IRotate$SpeedLevel;
    }
    export class $DirectionalAxisKineticBlock extends $DirectionalKineticBlock implements $TransformableBlock {
        transform(arg0: $BlockState_, arg1: $StructureTransform): $BlockState;
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
    }
    export class $IRotate$SpeedLevel extends $Enum<$IRotate$SpeedLevel> {
        static values(): $IRotate$SpeedLevel[];
        static valueOf(arg0: string): $IRotate$SpeedLevel;
        static of(arg0: number): $IRotate$SpeedLevel;
        getSpeedValue(): number;
        getColor(): number;
        getTextColor(): $ChatFormatting;
        getParticleSpeed(): number;
        static getFormattedSpeedText(arg0: number, arg1: boolean): $LangBuilder;
        static MEDIUM: $IRotate$SpeedLevel;
        static SLOW: $IRotate$SpeedLevel;
        static NONE: $IRotate$SpeedLevel;
        static FAST: $IRotate$SpeedLevel;
        get speedValue(): number;
        get color(): number;
        get textColor(): $ChatFormatting;
        get particleSpeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRotate$SpeedLevel}.
     */
    export type $IRotate$SpeedLevel_ = "none" | "slow" | "medium" | "fast";
    export class $DirectionalKineticBlock extends $KineticBlock {
        wrapOperation$enl000$simulated$handleAutoOrientationWithExtraKinetics(arg0: $IRotate, arg1: $LevelReader, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Direction_, arg5: $Operation_<any>): boolean;
        getPreferredFacing(arg0: $BlockPlaceContext): $Direction;
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
    }
    export class $GeneratingKineticBlockEntity extends $KineticBlockEntity {
        updateGeneratedRotation(): void;
        wrapOperation$eng000$simulated$getExtraKinetics(arg0: $Level, arg1: $BlockPos_, arg2: $Operation_<any>): $BlockEntity;
        createNetworkId(): number;
        applyNewSpeed(arg0: number, arg1: number): void;
        level: $Level;
        reActivateSource: boolean;
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
    }
    export class $RotatingInstance extends $ColoredLitOverlayInstance {
        setup(arg0: $KineticBlockEntity, arg1: $Direction$Axis_): $RotatingInstance;
        setup(arg0: $KineticBlockEntity, arg1: number): $RotatingInstance;
        setup(arg0: $KineticBlockEntity, arg1: $Direction$Axis_, arg2: number): $RotatingInstance;
        setup(arg0: $KineticBlockEntity): $RotatingInstance;
        setColor(arg0: $KineticBlockEntity): $RotatingInstance;
        setColor(arg0: $Color): $RotatingInstance;
        setPosition(arg0: $Vec3i): $RotatingInstance;
        setPosition(arg0: $Vector3f): $RotatingInstance;
        setPosition(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        setRotationAxis(arg0: $Direction$Axis_): $RotatingInstance;
        setRotationAxis(arg0: $Vector3f): $RotatingInstance;
        setRotationAxis(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        rotateTo(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): $RotatingInstance;
        nudge(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        setRotationOffset(arg0: number): $RotatingInstance;
        rotateToFace(arg0: number, arg1: number, arg2: number): $RotatingInstance;
        rotateToFace(arg0: $Direction$Axis_): $RotatingInstance;
        rotateToFace(arg0: $Direction_, arg1: $Direction_): $RotatingInstance;
        rotateToFace(arg0: $Direction_): $RotatingInstance;
        rotateToFace(arg0: $Direction_, arg1: $Direction$Axis_): $RotatingInstance;
        setRotationalSpeed(arg0: number): $RotatingInstance;
        static colorFromBE(arg0: $KineticBlockEntity): number;
        green: number;
        rotation: $Quaternionf;
        static SPEED_MULTIPLIER: number;
        rotationOffset: number;
        red: number;
        rotationalSpeed: number;
        blue: number;
        alpha: number;
        x: number;
        y: number;
        z: number;
        rotationAxisZ: number;
        rotationAxisY: number;
        rotationAxisX: number;
        constructor(arg0: $InstanceType<$RotatingInstance>, arg1: $InstanceHandle);
    }
    export class $HorizontalAxisKineticBlock extends $KineticBlock {
        static getPreferredHorizontalAxis(arg0: $BlockPlaceContext): $Direction$Axis;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static HORIZONTAL_AXIS: $Property<$Direction$Axis>;
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
    export class $RotatedPillarKineticBlock extends $KineticBlock {
        static getPreferredAxis(arg0: $BlockPlaceContext): $Direction$Axis;
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
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $KineticBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation, $IHaveHoveringInformation, $KineticBlockEntityExtension, $KineticBlockEntityAccessor, $IPlacerTracked, $KineticBlockEntityAccessor$1 {
        setSource(arg0: $BlockPos_): void;
        isSource(): boolean;
        simulated$setValidationCountdown(arg0: number): void;
        static convertToDirection(arg0: number, arg1: $Direction_): number;
        needsSpeedUpdate(): boolean;
        attachKinetics(): void;
        getFlickerScore(): number;
        updateFromNetwork(arg0: number, arg1: number, arg2: number): void;
        onSpeedChanged(arg0: number): void;
        static convertToLinear(arg0: number): number;
        getGeneratedSpeed(): number;
        static convertToAngular(arg0: number): number;
        isOverStressed(): boolean;
        isCustomConnection(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_): boolean;
        calculateAddedStressCapacity(): number;
        clearKineticInformation(): void;
        isSpeedRequirementFulfilled(): boolean;
        handler$enn000$simulated$addExtraKineticsInfo(arg0: $List_<any>, arg1: boolean, arg2: $CallbackInfoReturnable<any>): void;
        handler$ian000$gnkinetics$propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean, arg6: $CallbackInfoReturnable<any>): void;
        handler$enh000$simulated$readConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        redirect$enh000$simulated$useProperSource2(arg0: $Level, arg1: $BlockPos_): $BlockEntity;
        handler$enh000$simulated$removeConnected(arg0: $CallbackInfo): void;
        simulated$getConnectedToExtraKinetics(): boolean;
        redirect$enh000$simulated$useProperSource(arg0: $Level, arg1: $BlockPos_): $BlockEntity;
        handler$enh000$simulated$saveConnected(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean, arg3: $CallbackInfo): void;
        simulated$setConnectedToExtraKinetics(arg0: boolean): void;
        handler$enh000$simulated$injectRemove(arg0: $CallbackInfo): void;
        setSpeed(arg0: number): void;
        getSpeed(): number;
        hasNetwork(): boolean;
        setNetwork(arg0: number): void;
        tickAudio(): void;
        hasSource(): boolean;
        addToTooltip(arg0: $List_<$Component_>, arg1: boolean): boolean;
        removeSource(): void;
        static switchToBlockState(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): void;
        getOrCreateNetwork(): $KineticNetwork;
        detachKinetics(): void;
        warnOfMovement(): void;
        getTheoreticalSpeed(): number;
        aeroclaims$getPlacerUUID(): $UUID;
        aeroclaims$setPlacerUUID(arg0: $UUID_): void;
        calculateStressApplied(): number;
        propagateRotationTo(arg0: $KineticBlockEntity, arg1: $BlockState_, arg2: $BlockState_, arg3: $BlockPos_, arg4: boolean, arg5: boolean): number;
        getRotationAngleOffset(arg0: $Direction$Axis_): number;
        addPropagationLocations(arg0: $IRotate, arg1: $BlockState_, arg2: $List_<$BlockPos_>): $List<$BlockPos>;
        effects(): $KineticEffectHandler;
        getEffects(): $KineticEffectHandler;
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
        get flickerScore(): number;
        get generatedSpeed(): number;
        get overStressed(): boolean;
        get speedRequirementFulfilled(): boolean;
        get orCreateNetwork(): $KineticNetwork;
        get theoreticalSpeed(): number;
    }
    export class $BlockBreakingKineticBlockEntity extends $KineticBlockEntity implements $BlockHarvester {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        onBlockBroken(arg0: $BlockState_): void;
        simulated$getAssociatedDistributor(): $AugerDistributor;
        destroyNextTick(): void;
        modify$zdn000$openpartiesandclaims$onTick(arg0: $BlockPos_): $BlockPos;
        localvar$zdn000$openpartiesandclaims$onTick(arg0: $BlockState_): $BlockState;
        canBreak(arg0: $BlockState_, arg1: number): boolean;
        static isBreakable(arg0: $BlockState_, arg1: number): boolean;
        simulated$setDistributor(arg0: $AugerDistributor_): void;
        depositItemStack(arg0: $BlockPos_, arg1: $ItemStack_): $ItemStack;
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
        static NEXT_BREAKER_ID: $AtomicInteger;
        hasComparators: number;
        preventSpeedUpdate: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $AbstractEncasedShaftBlock extends $RotatedPillarKineticBlock {
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
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
