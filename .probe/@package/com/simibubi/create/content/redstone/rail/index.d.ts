import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $Direction_, $Vec3i, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $RailShape, $EnumProperty, $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $IWrenchable } from "@package/com/simibubi/create/content/equipment/wrench";
import { $SpecialBlockStateGen } from "@package/com/simibubi/create/foundation/data";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $SoundType, $BaseRailBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/com/simibubi/create/content/redstone/rail" {
    export class $ControllerRailGenerator extends $SpecialBlockStateGen {
        constructor();
    }
    export class $ControllerRailBlock extends $BaseRailBlock implements $IWrenchable {
        static getAccelerationVector(arg0: $BlockState_): $Vec3i;
        static isStateBackwards(arg0: $BlockState_): boolean;
        static isReversedSlope(arg0: $BlockState_): boolean;
        onWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        updateAfterWrenched(arg0: $BlockState_, arg1: $UseOnContext): $BlockState;
        getRotatedBlockState(arg0: $BlockState_, arg1: $Direction_): $BlockState;
        onSneakWrenched(arg0: $BlockState_, arg1: $UseOnContext): $InteractionResult;
        explosionResistance: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static HALF_BLOCK_AABB: $VoxelShape;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static FLAT_AABB: $VoxelShape;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$ControllerRailBlock>;
        static BACKWARDS: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static POWER: $IntegerProperty;
        speedFactor: number;
        friction: number;
        static SHAPE: $EnumProperty<$RailShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        hasCollision: boolean;
        constructor(arg0: $BlockBehaviour$Properties);
    }
}
