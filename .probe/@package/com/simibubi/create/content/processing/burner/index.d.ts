import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $ActorVisual, $ContraptionMatrices } from "@package/com/simibubi/create/content/contraptions/render";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map } from "@package/java/util";
import { $StockTickerBlockEntity } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Plan } from "@package/dev/engine_room/flywheel/api/task";
import { $SpriteShiftEntry } from "@package/net/createmod/catnip/render";
import { $SafeBlockEntityRenderer } from "@package/com/simibubi/create/foundation/blockEntity/renderer";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $InteractionResultHolder, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class, $Object } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $LootTable$Builder, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $ItemAbility } from "@package/net/neoforged/neoforge/common";
import { $InstanceType, $InstanceHandle } from "@package/dev/engine_room/flywheel/api/instance";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $VirtualRenderWorld } from "@package/com/simibubi/create/foundation/virtualWorld";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $MovementBehaviour } from "@package/com/simibubi/create/api/behaviour/movement";
import { $TransformedInstance, $ColoredLitOverlayInstance } from "@package/dev/engine_room/flywheel/lib/instance";
import { $DirectionProperty, $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SimpleDynamicVisual, $AbstractBlockEntityVisual, $SimpleTickableVisual } from "@package/dev/engine_room/flywheel/lib/visual";
import { $MovementContext } from "@package/com/simibubi/create/content/contraptions/behaviour";
import { $TickableVisual$Context, $DynamicVisual$Context } from "@package/dev/engine_room/flywheel/api/visual";
import { $ProjectileImpactEvent } from "@package/net/neoforged/neoforge/event/entity";
import { $HorizontalDirectionalBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f, $Quaternionfc } from "@package/org/joml";

declare module "@package/com/simibubi/create/content/processing/burner" {
    export class $ScrollTransformedInstance extends $TransformedInstance {
        offset(arg0: number, arg1: number): $ScrollTransformedInstance;
        speed(arg0: number, arg1: number): $ScrollTransformedInstance;
        setSpriteShift(arg0: $SpriteShiftEntry): $ScrollTransformedInstance;
        setSpriteShift(arg0: $SpriteShiftEntry, arg1: number, arg2: number): $ScrollTransformedInstance;
        diffU: number;
        diffV: number;
        green: number;
        pose: $Matrix4f;
        red: number;
        scaleV: number;
        blue: number;
        scaleU: number;
        offsetV: number;
        offsetU: number;
        alpha: number;
        speedV: number;
        speedU: number;
        constructor(arg0: $InstanceType<$TransformedInstance>, arg1: $InstanceHandle);
    }
    export class $LitBlazeBurnerBlock extends $Block implements $IWrenchable {
        static getLight(arg0: $BlockState_): number;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static FLAME_TYPE: $EnumProperty<$LitBlazeBurnerBlock$FlameType>;
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
        static EXTINGUISH_FLAME_ACTION: $ItemAbility;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $BlazeBurnerBlockItem extends $BlockItem {
        static empty(arg0: $Item$Properties): $BlazeBurnerBlockItem;
        static withBlaze(arg0: $Block, arg1: $Item$Properties): $BlazeBurnerBlockItem;
        hasCapturedBlaze(): boolean;
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
    }
    export class $LitBlazeBurnerBlock$FlameType extends $Enum<$LitBlazeBurnerBlock$FlameType> implements $StringRepresentable {
        static values(): $LitBlazeBurnerBlock$FlameType[];
        static valueOf(arg0: string): $LitBlazeBurnerBlock$FlameType;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static REGULAR: $LitBlazeBurnerBlock$FlameType;
        static SOUL: $LitBlazeBurnerBlock$FlameType;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LitBlazeBurnerBlock$FlameType}.
     */
    export type $LitBlazeBurnerBlock$FlameType_ = "regular" | "soul";
    export class $BlazeBurnerVisual extends $AbstractBlockEntityVisual<$BlazeBurnerBlockEntity> implements $SimpleDynamicVisual, $SimpleTickableVisual {
        tick(arg0: $TickableVisual$Context): void;
        beginFrame(arg0: $DynamicVisual$Context): void;
        planFrame(): $Plan<$DynamicVisual$Context>;
        planTick(): $Plan<$TickableVisual$Context>;
        constructor(arg0: $VisualizationContext, arg1: $BlazeBurnerBlockEntity, arg2: number);
    }
    export class $BlazeBurnerBlock$HeatLevel extends $Enum<$BlazeBurnerBlock$HeatLevel> implements $StringRepresentable {
        static values(): $BlazeBurnerBlock$HeatLevel[];
        static valueOf(arg0: string): $BlazeBurnerBlock$HeatLevel;
        getSerializedName(): string;
        isAtLeast(arg0: $BlazeBurnerBlock$HeatLevel_): boolean;
        static byIndex(arg0: number): $BlazeBurnerBlock$HeatLevel;
        nextActiveLevel(): $BlazeBurnerBlock$HeatLevel;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$BlazeBurnerBlock$HeatLevel>;
        static SEETHING: $BlazeBurnerBlock$HeatLevel;
        static KINDLED: $BlazeBurnerBlock$HeatLevel;
        static SMOULDERING: $BlazeBurnerBlock$HeatLevel;
        static NONE: $BlazeBurnerBlock$HeatLevel;
        static FADING: $BlazeBurnerBlock$HeatLevel;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlazeBurnerBlock$HeatLevel}.
     */
    export type $BlazeBurnerBlock$HeatLevel_ = "none" | "smouldering" | "fading" | "kindled" | "seething";
    export class $BlazeBurnerBlockEntity$FuelType extends $Enum<$BlazeBurnerBlockEntity$FuelType> {
        static values(): $BlazeBurnerBlockEntity$FuelType[];
        static valueOf(arg0: string): $BlazeBurnerBlockEntity$FuelType;
        static NONE: $BlazeBurnerBlockEntity$FuelType;
        static SPECIAL: $BlazeBurnerBlockEntity$FuelType;
        static NORMAL: $BlazeBurnerBlockEntity$FuelType;
    }
    /**
     * Values that may be interpreted as {@link $BlazeBurnerBlockEntity$FuelType}.
     */
    export type $BlazeBurnerBlockEntity$FuelType_ = "none" | "normal" | "special";
    export class $BlazeBurnerRenderer extends $SafeBlockEntityRenderer<$BlazeBurnerBlockEntity> {
        static renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_, arg4: $LerpedFloat, arg5: boolean): void;
        static renderShared(arg0: $PoseStack, arg1: $PoseStack, arg2: $MultiBufferSource_, arg3: $Level, arg4: $BlockState_, arg5: $BlazeBurnerBlock$HeatLevel_, arg6: number, arg7: number, arg8: boolean, arg9: boolean, arg10: $PartialModel, arg11: number): void;
        static getBlazeModel(arg0: $BlazeBurnerBlock$HeatLevel_, arg1: boolean): $PartialModel;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BlazeBurnerBlock extends $HorizontalDirectionalBlock implements $IBE<$BlazeBurnerBlockEntity>, $IWrenchable, $SpecialBlockItemRequirement {
        static tryInsert(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $ItemStack_, arg4: boolean, arg5: boolean, arg6: boolean): $InteractionResultHolder<$ItemStack>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        static getLight(arg0: $BlockState_): number;
        static buildLootTable(): $LootTable$Builder;
        getBlockEntityClass(): $Class<$BlazeBurnerBlockEntity>;
        static getHeatLevelOf(arg0: $BlockState_): $BlazeBurnerBlock$HeatLevel;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityType(): $BlockEntityType<$BlazeBurnerBlockEntity>;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $BlazeBurnerBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($BlazeBurnerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BlazeBurnerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$BlazeBurnerBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$BlazeBurnerBlockEntity>): void;
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
        static CODEC: $MapCodec<$BlazeBurnerBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static HEAT_LEVEL: $EnumProperty<$BlazeBurnerBlock$HeatLevel>;
        speedFactor: number;
        friction: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$BlazeBurnerBlockEntity>;
        get blockEntityType(): $BlockEntityType<$BlazeBurnerBlockEntity>;
    }
    export class $BlazeBurnerBlockEntity extends $SmartBlockEntity {
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        isCreativeFuel(arg0: $ItemStack_): boolean;
        static getStockTicker(arg0: $LevelAccessor, arg1: $BlockPos_): $StockTickerBlockEntity;
        getHeatLevelForRender(): $BlazeBurnerBlock$HeatLevel;
        getRemainingBurnTime(): number;
        getHeatLevelFromBlock(): $BlazeBurnerBlock$HeatLevel;
        updateBlockState(): void;
        isCreative(): boolean;
        spawnParticleBurst(arg0: boolean): void;
        getActiveFuel(): $BlazeBurnerBlockEntity$FuelType;
        isValidBlockAbove(): boolean;
        headAnimation: $LerpedFloat;
        level: $Level;
        static INSERTION_THRESHOLD: number;
        static ATTACHMENTS_NBT_KEY: string;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        static MAX_HEAT_CAPACITY: number;
        stockKeeper: boolean;
        worldPosition: $BlockPos;
        goggles: boolean;
        hat: boolean;
        hasComparators: number;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get heatLevelForRender(): $BlazeBurnerBlock$HeatLevel;
        get remainingBurnTime(): number;
        get heatLevelFromBlock(): $BlazeBurnerBlock$HeatLevel;
        get creative(): boolean;
        get activeFuel(): $BlazeBurnerBlockEntity$FuelType;
        get validBlockAbove(): boolean;
    }
    export class $BlazeBurnerHandler {
        static splashExtinguishesBurner(arg0: $ProjectileImpactEvent): void;
        static thrownEggsGetEatenByBurner(arg0: $ProjectileImpactEvent): void;
        static onThrowableImpact(arg0: $ProjectileImpactEvent): void;
        constructor();
    }
    export class $BlazeBurnerMovementBehaviour implements $MovementBehaviour {
        invalidate(arg0: $MovementContext): void;
        disableBlockEntityRendering(): boolean;
        tick(arg0: $MovementContext): void;
        renderInContraption(arg0: $MovementContext, arg1: $VirtualRenderWorld, arg2: $ContraptionMatrices, arg3: $MultiBufferSource_): void;
        canBeDisabledVia(arg0: $MovementContext): $ItemStack;
        isActive(arg0: $MovementContext): boolean;
        stopMoving(arg0: $MovementContext): void;
        /**
         * @deprecated
         */
        dropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        onDisabledByControls(arg0: $MovementContext): void;
        mustTickWhileDisabled(): boolean;
        getActiveAreaOffset(arg0: $MovementContext): $Vec3;
        onSpeedChanged(arg0: $MovementContext, arg1: $Vec3_, arg2: $Vec3_): void;
        writeExtraData(arg0: $MovementContext): void;
        visitNewPosition(arg0: $MovementContext, arg1: $BlockPos_): void;
        collectOrDropItem(arg0: $MovementContext, arg1: $ItemStack_): void;
        cancelStall(arg0: $MovementContext): void;
        createVisual(arg0: $VisualizationContext, arg1: $VirtualRenderWorld, arg2: $MovementContext): $ActorVisual;
        startMoving(arg0: $MovementContext): void;
        constructor();
    }
    export class $ScrollInstance extends $ColoredLitOverlayInstance {
        position(arg0: number, arg1: number, arg2: number): $ScrollInstance;
        position(arg0: $Vec3i): $ScrollInstance;
        offset(arg0: number, arg1: number): $ScrollInstance;
        shift(arg0: number, arg1: number, arg2: number): $ScrollInstance;
        rotation(arg0: $Quaternionfc): $ScrollInstance;
        speed(arg0: number, arg1: number): $ScrollInstance;
        setSpriteShift(arg0: $SpriteShiftEntry): $ScrollInstance;
        setSpriteShift(arg0: $SpriteShiftEntry, arg1: number, arg2: number): $ScrollInstance;
        diffU: number;
        diffV: number;
        green: number;
        red: number;
        scaleV: number;
        blue: number;
        scaleU: number;
        offsetV: number;
        offsetU: number;
        alpha: number;
        x: number;
        speedV: number;
        y: number;
        speedU: number;
        z: number;
        constructor(arg0: $InstanceType<$ColoredLitOverlayInstance>, arg1: $InstanceHandle);
    }
}
