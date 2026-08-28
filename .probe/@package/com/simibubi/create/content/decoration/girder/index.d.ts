import { $MapCodec } from "@package/com/mojang/serialization";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $GameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $List } from "@package/java/util";
import { $InteractionResult, $ItemInteractionResult } from "@package/net/minecraft/world";
import { $Predicate, $Function_, $Consumer_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HorizontalAxisKineticBlock, $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $StateDefinition, $BlockBehaviour$Properties, $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $DataGenContext, $RegistrateBlockstateProvider } from "@package/com/tterrag/registrate/providers";
import { $IBE } from "@package/com/simibubi/create/foundation/block";
import { $Enum, $Class } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $ItemRequirement } from "@package/com/simibubi/create/content/schematics/requirement";
import { $BlockAndTintGetter, $LevelAccessor, $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $SpecialBlockItemRequirement } from "@package/com/simibubi/create/api/schematic/requirement";
import { $ConnectedTextureBehaviour$Base, $CTModel } from "@package/com/simibubi/create/foundation/block/connected";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EnumProperty, $Property, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SoundType, $SimpleWaterloggedBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/simibubi/create/content/decoration/girder" {
    export class $GirderCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor();
    }
    export class $GirderPlacementHelper implements $IPlacementHelper {
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
    export class $GirderEncasedShaftBlock extends $HorizontalAxisKineticBlock implements $IBE<$KineticBlockEntity>, $SimpleWaterloggedBlock, $IWrenchable, $SpecialBlockItemRequirement {
        getBlockEntityClass(): $Class<$KineticBlockEntity>;
        getRequiredItems(arg0: $BlockState_, arg1: $BlockEntity): $ItemRequirement;
        getBlockEntityType(): $BlockEntityType<$KineticBlockEntity>;
        newBlockEntity(arg0: $BlockPos_, arg1: $BlockState_): $BlockEntity;
        getBlockEntity(arg0: $BlockGetter, arg1: $BlockPos_): $KineticBlockEntity;
        getBlockEntityOptional(arg0: $BlockGetter, arg1: $BlockPos_): ($KineticBlockEntity) | undefined;
        onBlockEntityUseItemOn(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$KineticBlockEntity, $ItemInteractionResult>): $ItemInteractionResult;
        onBlockEntityUse(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Function_<$KineticBlockEntity, $InteractionResult>): $InteractionResult;
        withBlockEntityDo(arg0: $BlockGetter, arg1: $BlockPos_, arg2: $Consumer_<$KineticBlockEntity>): void;
        getTicker<S extends $BlockEntity>(arg0: $Level, arg1: $BlockState_, arg2: $BlockEntityType<S>): $BlockEntityTicker<S>;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        getListener<T extends $BlockEntity>(arg0: $ServerLevel, arg1: T): $GameEventListener;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static BOTTOM: $BooleanProperty;
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
        static TOP: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
        get blockEntityClass(): $Class<$KineticBlockEntity>;
        get blockEntityType(): $BlockEntityType<$KineticBlockEntity>;
    }
    export class $GirderBlockStateGenerator {
        static blockStateWithShaft(arg0: $DataGenContext<$Block, $GirderEncasedShaftBlock>, arg1: $RegistrateBlockstateProvider): void;
        static blockState(arg0: $DataGenContext<$Block, $GirderBlock>, arg1: $RegistrateBlockstateProvider): void;
        constructor();
    }
    export class $ConnectedGirderModel$ConnectionData {
    }
    export class $GirderWrenchBehavior {
        static tick(): void;
        static getValidDirections(arg0: $BlockGetter, arg1: $BlockPos_): $List<$Pair<$Direction, $GirderWrenchBehavior$Action>>;
        static handleClick(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $BlockHitResult): boolean;
        constructor();
    }
    export class $ConnectedGirderModel extends $CTModel {
        constructor(arg0: $BakedModel);
    }
    export class $GirderWrenchBehavior$Action extends $Enum<$GirderWrenchBehavior$Action> {
    }
    /**
     * Values that may be interpreted as {@link $GirderWrenchBehavior$Action}.
     */
    export type $GirderWrenchBehavior$Action_ = "single" | "pair" | "horizontal";
    export class $GirderBlock extends $Block implements $SimpleWaterloggedBlock, $IWrenchable {
        static isConnected(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): boolean;
        static updateState(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Direction_): $BlockState;
        static updateVerticalProperty(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $Property<boolean>, arg4: $BlockState_, arg5: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        static isFacingBracket(arg0: $BlockAndTintGetter, arg1: $BlockPos_, arg2: $Direction_): boolean;
        static isXGirder(arg0: $BlockState_): boolean;
        static isZGirder(arg0: $BlockState_): boolean;
        static isGirder(arg0: $BlockState_): boolean;
        pickupBlock(arg0: $Player | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $BlockState_): $ItemStack;
        placeLiquid(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $BlockState_, arg3: $FluidState): boolean;
        canPlaceLiquid(arg0: $Player | null, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $BlockState_, arg4: $Fluid): boolean;
        getPickupSound(): ($SoundEvent) | undefined;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        getPickupSound(arg0: $BlockState_): ($SoundEvent) | undefined;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static BOTTOM: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UPDATE_KNOWN_SHAPE: number;
        static X: $BooleanProperty;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static Z: $BooleanProperty;
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
        static TOP: $BooleanProperty;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
