import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $IClientBlockExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $Map, $Set } from "@package/java/util";
import { $SuperByteBufferCache$Compartment, $StitchedSprite } from "@package/net/createmod/catnip/render";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $KineticBlockEntityRenderer, $RotatedPillarKineticBlock, $DirectionalKineticBlock, $KineticBlockEntityVisual, $GeneratingKineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Record, $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelReader, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlockItem, $Item, $ItemStack_, $Item$Properties } from "@package/net/minecraft/world/item";
import { $ParticleEngine } from "@package/net/minecraft/client/particle";
import { $MultiPosDestructionHandler } from "@package/com/simibubi/create/foundation/block/render";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $IProxyHoveringInformation } from "@package/com/simibubi/create/api/equipment/goggles";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DirectionalBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $HitResult, $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3d } from "@package/org/joml";

declare module "@package/com/simibubi/create/content/kinetics/waterwheel" {
    export class $WaterWheelBlockEntity extends $GeneratingKineticBlockEntity {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        determineAndApplyFlowScore(): void;
        applyMaterialIfValid(arg0: $ItemStack_): $ItemInteractionResult;
        setFlowScoreAndUpdate(arg0: number): void;
        getFlowVectorAtPosition(arg0: $BlockPos_): $Vec3;
        static SMALL_OFFSETS: $Map<$Direction$Axis, $Set<$BlockPos>>;
        flowScore: number;
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
        material: $BlockState;
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        static LARGE_OFFSETS: $Map<$Direction$Axis, $Set<$BlockPos>>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        set flowScoreAndUpdate(value: number);
    }
    export class $WaterWheelRenderer$ModelKey extends $Record {
        state(): $BlockState;
        material(): $BlockState;
        large(): boolean;
        constructor(large: boolean, state: $BlockState_, material: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $WaterWheelRenderer$ModelKey}.
     */
    export type $WaterWheelRenderer$ModelKey_ = { material?: $BlockState_, state?: $BlockState_, large?: boolean,  } | [material?: $BlockState_, state?: $BlockState_, large?: boolean, ];
    export class $LargeWaterWheelBlockEntity extends $WaterWheelBlockEntity {
        static SMALL_OFFSETS: $Map<$Direction$Axis, $Set<$BlockPos>>;
        flowScore: number;
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
        material: $BlockState;
        updateSpeed: boolean;
        hasComparators: number;
        preventSpeedUpdate: number;
        static LARGE_OFFSETS: $Map<$Direction$Axis, $Set<$BlockPos>>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
    export class $WaterWheelBlock extends $DirectionalKineticBlock implements $IBE<$WaterWheelBlockEntity> {
        getBlockEntityClass(): $Class<$WaterWheelBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$WaterWheelBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $WaterWheelBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($WaterWheelBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WaterWheelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$WaterWheelBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$WaterWheelBlockEntity>): void;
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
        get blockEntityClass(): $Class<$WaterWheelBlockEntity>;
        get blockEntityType(): $BlockEntityType<$WaterWheelBlockEntity>;
    }
    export class $WaterWheelStructuralBlock extends $DirectionalBlock implements $IWrenchable, $IProxyHoveringInformation {
        stillValid(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: boolean): boolean;
        static getMaster(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $BlockState_): $BlockPos;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getInformationSource(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): $BlockPos;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
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
        static CODEC: $MapCodec<$WaterWheelStructuralBlock>;
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
    export class $LargeWaterWheelBlockItem extends $BlockItem {
        showBounds(arg0: $BlockPlaceContext): void;
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
    export class $LargeWaterWheelBlock extends $RotatedPillarKineticBlock implements $IBE<$LargeWaterWheelBlockEntity> {
        getAxisForPlacement(arg0: $BlockPlaceContext): $Direction$Axis;
        getBlockEntityClass(): $Class<$LargeWaterWheelBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$LargeWaterWheelBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $LargeWaterWheelBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($LargeWaterWheelBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$LargeWaterWheelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$LargeWaterWheelBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$LargeWaterWheelBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static EXTENSION: $BooleanProperty;
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
        get blockEntityClass(): $Class<$LargeWaterWheelBlockEntity>;
        get blockEntityType(): $BlockEntityType<$LargeWaterWheelBlockEntity>;
    }
    export class $WaterWheelRenderer$Variant extends $Enum<$WaterWheelRenderer$Variant> {
        static values(): $WaterWheelRenderer$Variant[];
        static valueOf(arg0: string): $WaterWheelRenderer$Variant;
        static of(arg0: boolean, arg1: $BlockState_): $WaterWheelRenderer$Variant;
        model(): $BakedModel;
        static LARGE_EXTENSION: $WaterWheelRenderer$Variant;
        static SMALL: $WaterWheelRenderer$Variant;
        static LARGE: $WaterWheelRenderer$Variant;
    }
    /**
     * Values that may be interpreted as {@link $WaterWheelRenderer$Variant}.
     */
    export type $WaterWheelRenderer$Variant_ = "small" | "large" | "large_extension";
    export class $WaterWheelStructuralBlock$RenderProperties implements $IClientBlockExtensions, $MultiPosDestructionHandler {
        getExtraPositions(arg0: $ClientLevel, arg1: $BlockPos_, arg2: $BlockState_, arg3: number): $Set<$BlockPos>;
        addDestroyEffects(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $ParticleEngine): boolean;
        addHitEffects(arg0: $BlockState_, arg1: $Level, arg2: $HitResult, arg3: $ParticleEngine): boolean;
        areBreakingParticlesTinted(arg0: $BlockState_, arg1: $ClientLevel, arg2: $BlockPos_): boolean;
        playBreakSound(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_): boolean;
        getFogColor(arg0: $BlockState_, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Entity, arg4: $Vector3d, arg5: number): $Vector3d;
        constructor();
    }
    export class $WaterWheelVisual$ModelKey extends $Record {
        variant(): $WaterWheelRenderer$Variant;
        material(): $BlockState;
        constructor(variant: $WaterWheelRenderer$Variant_, material: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $WaterWheelVisual$ModelKey}.
     */
    export type $WaterWheelVisual$ModelKey_ = { material?: $BlockState_, variant?: $WaterWheelRenderer$Variant_,  } | [material?: $BlockState_, variant?: $WaterWheelRenderer$Variant_, ];
    export class $WaterWheelRenderer<T extends $WaterWheelBlockEntity> extends $KineticBlockEntityRenderer<T> {
        static standard<T extends $WaterWheelBlockEntity>(arg0: $BlockEntityRendererProvider$Context): $WaterWheelRenderer<T>;
        static large<T extends $WaterWheelBlockEntity>(arg0: $BlockEntityRendererProvider$Context): $WaterWheelRenderer<T>;
        static generateModel(arg0: $BakedModel, arg1: $BlockState_): $BakedModel;
        static generateModel(arg0: $WaterWheelRenderer$ModelKey_): $BakedModel;
        static generateModel(arg0: $WaterWheelRenderer$Variant_, arg1: $BlockState_): $BakedModel;
        static OAK_LOG_TOP_TEMPLATE: $StitchedSprite;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        static WATER_WHEEL: $SuperByteBufferCache$Compartment<$WaterWheelRenderer$ModelKey>;
        static OAK_PLANKS_TEMPLATE: $StitchedSprite;
        static OAK_LOG_TEMPLATE: $StitchedSprite;
        constructor(arg0: $BlockEntityRendererProvider$Context, arg1: boolean);
    }
    export class $WaterWheelVisual<T extends $WaterWheelBlockEntity> extends $KineticBlockEntityVisual<T> {
        static standard<T extends $WaterWheelBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $WaterWheelVisual<T>;
        static large<T extends $WaterWheelBlockEntity>(arg0: $VisualizationContext, arg1: T, arg2: number): $WaterWheelVisual<T>;
        constructor(arg0: $VisualizationContext, arg1: T, arg2: boolean, arg3: number);
    }
}
