import { $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeHolder, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SequencedGearshiftBlockEntity$SequenceContext } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $IRecipeTypeInfo } from "@package/com/simibubi/create/foundation/recipe";
import { $Function_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $Clearable, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $KineticBlockEntity, $RotatedPillarKineticBlock } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $ProcessingRecipeParams, $ProcessingInventory, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $RecipeWrapper } from "@package/net/neoforged/neoforge/items/wrapper";
import { $DirectionProperty, $EnumProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $DirectionalBlock, $SoundType, $Block } from "@package/net/minecraft/world/level/block";
import { $LivingDropsEvent } from "@package/net/neoforged/neoforge/event/entity/living";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RegisterCapabilitiesEvent } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/com/simibubi/create/content/kinetics/crusher" {
    export class $CrushingRecipe extends $AbstractCrushingRecipe {
        constructor(arg0: $ProcessingRecipeParams);
    }
    export class $CrushingWheelControllerBlockEntity extends $SmartBlockEntity implements $Clearable {
        clear(): void;
        write(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        clearContent(): void;
        static registerCapabilities(arg0: $RegisterCapabilitiesEvent): void;
        isOccupied(): boolean;
        tickAudio(): void;
        startCrushing(arg0: $Entity): void;
        wrapOperation$him000$sable$pushEntityLocalX(arg0: $Entity, arg1: $Operation_<any>): number;
        wrapOperation$him000$sable$pushEntityLocalY(arg0: $Entity, arg1: $Operation_<any>): number;
        wrapOperation$him000$sable$pushEntityLocalZ(arg0: $Entity, arg1: $Operation_<any>): number;
        wrapOperation$him000$sable$pushEntityLocalAABB(arg0: $Entity, arg1: $Operation_<any>): $AABB;
        findRecipe(): ($RecipeHolder<$StandardProcessingRecipe<$RecipeWrapper>>) | undefined;
        hasEntity(): boolean;
        handler$him000$sable$initSublevel(arg0: $CallbackInfo): void;
        worldPosition: $BlockPos;
        processingEntity: $Entity;
        level: $Level;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        inventory: $ProcessingInventory;
        crushingspeed: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        constructor(arg0: $BlockEntityType<never>, arg1: $BlockPos_, arg2: $BlockState_);
        get occupied(): boolean;
    }
    export class $CrushingWheelBlockEntity extends $KineticBlockEntity {
        fixControllers(): void;
        static handleCrushedMobDrops(arg0: $LivingDropsEvent): void;
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
    export class $CrushingWheelBlock extends $RotatedPillarKineticBlock implements $IBE<$CrushingWheelBlockEntity> {
        getBlockEntityClass(): $Class<$CrushingWheelBlockEntity>;
        getBlockEntityType(): $BlockEntityType<$CrushingWheelBlockEntity>;
        updateControllers(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $Direction_): void;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $CrushingWheelBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($CrushingWheelBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CrushingWheelBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CrushingWheelBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$CrushingWheelBlockEntity>): void;
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
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$CrushingWheelBlockEntity>;
        get blockEntityType(): $BlockEntityType<$CrushingWheelBlockEntity>;
    }
    export class $AbstractCrushingRecipe extends $StandardProcessingRecipe<$RecipeInput> {
        constructor(arg0: $IRecipeTypeInfo, arg1: $ProcessingRecipeParams);
    }
    export class $CrushingWheelControllerBlock extends $DirectionalBlock implements $IBE<$CrushingWheelControllerBlockEntity> {
        getBlockEntityClass(): $Class<$CrushingWheelControllerBlockEntity>;
        checkEntityForProcessing(arg0: $Level, arg1: $BlockPos_, arg2: $Entity): void;
        getBlockEntityType(): $BlockEntityType<$CrushingWheelControllerBlockEntity>;
        updateSpeed(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_): void;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $CrushingWheelControllerBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($CrushingWheelControllerBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CrushingWheelControllerBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$CrushingWheelControllerBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$CrushingWheelControllerBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        explosionResistance: number;
        static VALID: $BooleanProperty;
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
        static CODEC: $MapCodec<$CrushingWheelControllerBlock>;
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
        get blockEntityClass(): $Class<$CrushingWheelControllerBlockEntity>;
        get blockEntityType(): $BlockEntityType<$CrushingWheelControllerBlockEntity>;
    }
}
