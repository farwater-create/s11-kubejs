import { $Level } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $ConnectedTextureBehaviour$Base, $HorizontalCTBehaviour, $ConnectedTextureBehaviour$CTContext, $CTSpriteShiftEntry } from "@package/com/simibubi/create/foundation/block/connected";
import { $ScaffoldingBlockItem, $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map } from "@package/java/util";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $DirectionProperty, $Half, $EnumProperty, $BlockSetType, $Property, $IntegerProperty, $BooleanProperty, $BlockSetType_ } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos_, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $PlacementOffset, $IPlacementHelper } from "@package/net/createmod/catnip/placement";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LadderBlock, $SoundType, $TrapDoorBlock, $ScaffoldingBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
export * as slidingDoor from "@package/com/simibubi/create/content/decoration/slidingDoor";
export * as bracket from "@package/com/simibubi/create/content/decoration/bracket";
export * as palettes from "@package/com/simibubi/create/content/decoration/palettes";
export * as steamWhistle from "@package/com/simibubi/create/content/decoration/steamWhistle";
export * as copycat from "@package/com/simibubi/create/content/decoration/copycat";
export * as encasing from "@package/com/simibubi/create/content/decoration/encasing";
export * as placard from "@package/com/simibubi/create/content/decoration/placard";
export * as girder from "@package/com/simibubi/create/content/decoration/girder";

declare module "@package/com/simibubi/create/content/decoration" {
    export class $MetalLadderBlock extends $LadderBlock implements $IWrenchable {
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        static SOUTH_AABB: $VoxelShape;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static EAST_AABB: $VoxelShape;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static NORTH_AABB: $VoxelShape;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$LadderBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static AABB_OFFSET: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static WEST_AABB: $VoxelShape;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
    export class $RoofBlockCTBehaviour extends $ConnectedTextureBehaviour$Base {
        isUprightStair(arg0: $BlockState_): boolean;
        getStairMapping(arg0: $BlockState_): $ConnectedTextureBehaviour$CTContext;
        constructor(arg0: $CTSpriteShiftEntry);
    }
    export class $MetalScaffoldingBlockItem extends $ScaffoldingBlockItem {
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
    export class $TrainTrapdoorBlock extends $TrapDoorBlock implements $IWrenchable {
        static isConnected(arg0: $BlockState_, arg1: $BlockState_, arg2: $Direction_): boolean;
        static glass(arg0: $BlockBehaviour$Properties): $TrainTrapdoorBlock;
        static metal(arg0: $BlockBehaviour$Properties): $TrainTrapdoorBlock;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        explosionResistance: number;
        static NORTH_OPEN_AABB: $VoxelShape;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        type: $BlockSetType;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static SOUTH_OPEN_AABB: $VoxelShape;
        static WATERLOGGED: $BooleanProperty;
        static AABB_THICKNESS: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static EAST_OPEN_AABB: $VoxelShape;
        soundType: $SoundType;
        jumpFactor: number;
        static TOP_AABB: $VoxelShape;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$TrapDoorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static BOTTOM_AABB: $VoxelShape;
        static WEST_OPEN_AABB: $VoxelShape;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        /**
         * @deprecated
         */
        constructor(arg0: $BlockBehaviour$Properties);
        constructor(arg0: $BlockSetType_, arg1: $BlockBehaviour$Properties);
    }
    export class $TrapdoorCTBehaviour extends $ConnectedTextureBehaviour$Base {
        constructor();
    }
    export class $MetalScaffoldingCTBehaviour extends $HorizontalCTBehaviour {
        constructor(arg0: $CTSpriteShiftEntry, arg1: $CTSpriteShiftEntry, arg2: $CTSpriteShiftEntry);
    }
    export class $MetalScaffoldingBlock extends $ScaffoldingBlock implements $IWrenchable {
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
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
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static DISTANCE: $IntegerProperty;
        item: $Item;
        static CODEC: $MapCodec<$ScaffoldingBlock>;
        static STABILITY_MAX_DISTANCE: number;
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
    export class $MetalLadderBlock$PlacementHelper implements $IPlacementHelper {
        getOffset(arg0: $Player, arg1: $Level, arg2: $BlockState_, arg3: $BlockPos_, arg4: $BlockHitResult, arg5: $ItemStack_): $PlacementOffset;
        matchesState(arg0: $BlockState_): boolean;
        renderAt(arg0: $BlockPos_, arg1: $BlockState_, arg2: $BlockHitResult, arg3: $PlacementOffset): void;
        displayGhost(arg0: $PlacementOffset): void;
        matchesItem(arg0: $ItemStack_): boolean;
    }
    export class $CardboardBlock extends $Block {
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
}
