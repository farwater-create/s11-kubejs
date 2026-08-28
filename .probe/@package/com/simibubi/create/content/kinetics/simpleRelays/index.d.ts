import { $MapCodec } from "@package/com/mojang/serialization";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $Map } from "@package/java/util";
import { $SuperByteBufferCache$Compartment } from "@package/net/createmod/catnip/render";
import { $InteractionResult, $InteractionHand_, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Predicate, $Function_, $Consumer_ } from "@package/java/util/function";
import { $StructureTransform } from "@package/com/simibubi/create/content/contraptions";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $Direction$Axis_, $BlockPos_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SingleAxisRotatingVisual, $KineticBlockEntityRenderer, $IRotate, $KineticBlockEntity, $RotatedPillarKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/blockentity";
import { $ProperWaterloggedBlock, $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $LevelReader, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $VisualizationContext } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlockItem, $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EncasableBlock } from "@package/com/simibubi/create/content/decoration/encasing";
import { $EnumProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $IWrenchableWithBracket } from "@package/com/simibubi/create/content/equipment/wrench";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $BakedModelWrapper } from "@package/net/neoforged/neoforge/client/model";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoleHelper } from "@package/com/simibubi/create/foundation/placement";
import { $BlockEntityVisual } from "@package/dev/engine_room/flywheel/api/visual";
import { $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $TransformableBlockEntity } from "@package/com/simibubi/create/api/contraption/transformable";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as encased from "@package/com/simibubi/create/content/kinetics/simpleRelays/encased";

declare module "@package/com/simibubi/create/content/kinetics/simpleRelays" {
    export class $BracketedKineticBlockEntityVisual$LargeCogVisual extends $SingleAxisRotatingVisual<$BracketedKineticBlockEntity> {
        static rainbowMode: boolean;
    }
    export class $CogwheelBlockItem$SmallCogHelper extends $CogwheelBlockItem$DiagonalCogHelper {
    }
    export class $ShaftBlock$PlacementHelper extends $PoleHelper<$Direction$Axis> {
    }
    export class $BracketedKineticBlockEntity extends $SimpleKineticBlockEntity implements $TransformableBlockEntity {
        transform(arg0: $BlockEntity, arg1: $StructureTransform): void;
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
    }
    export class $CogwheelBlockItem$LargeCogHelper extends $CogwheelBlockItem$DiagonalCogHelper {
    }
    export class $ICogWheel {
        static isDedicatedCogWheel(arg0: $Block): boolean;
        static isLargeCog(arg0: $Block): boolean;
        static isLargeCog(arg0: $BlockState_): boolean;
        static isSmallCog(arg0: $BlockState_): boolean;
        static isSmallCog(arg0: $Block): boolean;
        static isSmallCogItem(arg0: $ItemStack_): boolean;
        static isDedicatedCogItem(arg0: $ItemStack_): boolean;
        static isLargeCogItem(arg0: $ItemStack_): boolean;
    }
    export interface $ICogWheel extends $IRotate {
        isDedicatedCogWheel(): boolean;
        isLargeCog(): boolean;
        isSmallCog(): boolean;
    }
    export class $AbstractShaftBlock extends $RotatedPillarKineticBlock implements $IBE<$KineticBlockEntity>, $ProperWaterloggedBlock {
        getBlockEntityClass(): $Class<$KineticBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $KineticBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($KineticBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$KineticBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$KineticBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$KineticBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
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
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$KineticBlockEntity>;
    }
    export class $SimpleKineticBlockEntity extends $KineticBlockEntity {
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
    }
    export class $CogwheelBlockItem$IntegratedLargeCogHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        getStatePredicate(): $Predicate<$BlockState>;
        getItemPredicate(): $Predicate<$ItemStack>;
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        constructor();
        get statePredicate(): $Predicate<$BlockState>;
        get itemPredicate(): $Predicate<$ItemStack>;
    }
    export class $CogwheelBlockItem$DiagonalCogHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        getStatePredicate(): $Predicate<$BlockState>;
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        constructor();
        get statePredicate(): $Predicate<$BlockState>;
    }
    export class $CogwheelBlockItem extends $BlockItem {
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
        constructor(arg0: $CogWheelBlock, arg1: $Item$Properties);
    }
    export class $BracketedKineticBlockModel extends $BakedModelWrapper<$BakedModel> {
        constructor(arg0: $BakedModel);
    }
    export class $ShaftBlock extends $AbstractSimpleShaftBlock implements $EncasableBlock {
        static isShaft(arg0: $BlockState_): boolean;
        static pickCorrectShaftType(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_): $BlockState;
        playEncaseSound(arg0: $Level, arg1: $BlockPos_): void;
        tryEncase(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
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
        static placementHelperId: number;
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
    export class $CogWheelBlock extends $AbstractSimpleShaftBlock implements $ICogWheel, $EncasableBlock {
        static small(arg0: $BlockBehaviour$Properties): $CogWheelBlock;
        static large(arg0: $BlockBehaviour$Properties): $CogWheelBlock;
        static isValidCogwheelPosition(arg0: boolean, arg1: $LevelReader, arg2: $BlockPos_, arg3: $Direction$Axis_): boolean;
        isDedicatedCogWheel(): boolean;
        isLargeCog(): boolean;
        isSmallCog(): boolean;
        playEncaseSound(arg0: $Level, arg1: $BlockPos_): void;
        tryEncase(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $ItemStack_, arg4: $Player, arg5: $InteractionHand_, arg6: $BlockHitResult): $ItemInteractionResult;
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
        get dedicatedCogWheel(): boolean;
        get largeCog(): boolean;
        get smallCog(): boolean;
    }
    export class $CogwheelBlockItem$IntegratedSmallCogHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult): $PlacementOffset;
        getStatePredicate(): $Predicate<$BlockState>;
        getItemPredicate(): $Predicate<$ItemStack>;
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
        constructor();
        get statePredicate(): $Predicate<$BlockState>;
        get itemPredicate(): $Predicate<$ItemStack>;
    }
    export class $BracketedKineticBlockEntityRenderer extends $KineticBlockEntityRenderer<$BracketedKineticBlockEntity> {
        static getAngleForLargeCogShaft(arg0: $SimpleKineticBlockEntity, arg1: $Direction$Axis_): number;
        static getShaftAngleOffset(arg0: $Direction$Axis_, arg1: $BlockPos_): number;
        static KINETIC_BLOCK: $SuperByteBufferCache$Compartment<$BlockState>;
        static rainbowMode: boolean;
        constructor(arg0: $BlockEntityRendererProvider$Context);
    }
    export class $BracketedKineticBlockEntityVisual {
        static create(arg0: $VisualizationContext, arg1: $BracketedKineticBlockEntity, arg2: number): $BlockEntityVisual<$BracketedKineticBlockEntity>;
        constructor();
    }
    export class $AbstractSimpleShaftBlock extends $AbstractShaftBlock implements $IWrenchableWithBracket {
        removeBracket(arg0: $BlockGetter, arg1: $BlockPos_, arg2: boolean): ($ItemStack) | undefined;
        tryRemoveBracket(arg0: $UseOnContext): boolean;
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
    export class $BracketedKineticBlockModel$BracketedModelData {
    }
}
