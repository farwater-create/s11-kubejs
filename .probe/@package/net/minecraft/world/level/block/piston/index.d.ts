import { $Level, $BlockGetter } from "@package/net/minecraft/world/level";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $CoopResolverState } from "@package/net/mehvahdjukaar/supplementaries/common/misc";
import { $ICooperativePiston, $ICarryingMovingPiston } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $List, $Map_, $Set_, $List_ } from "@package/java/util";
import { $DirectionProperty, $EnumProperty, $PistonType, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPos, $BlockPos_, $Direction_, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IExtendedPistonTile } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $StateDefinition, $BlockState_, $BlockBehaviour$Properties, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $IBlockHolder } from "@package/net/mehvahdjukaar/moonlight/api/block";
import { $BaseEntityBlock, $SoundType, $DirectionalBlock, $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $AABB } from "@package/net/minecraft/world/phys";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/piston" {
    export class $PistonBaseBlock extends $DirectionalBlock {
        /**
         * Checks if the piston can push the given BlockState.
         */
        static isPushable(state: $BlockState_, level: $Level, pos: $BlockPos_, movementDirection: $Direction_, allowDestroy: boolean, pistonFacing: $Direction_): boolean;
        handler$zch000$openpartiesandclaims$onMoveBlocks(arg0: $Level, arg1: $BlockPos_, arg2: $Direction_, arg3: boolean, arg4: $CallbackInfoReturnable<any>, arg5: $BlockPos_, arg6: $PistonStructureResolver, arg7: $Map_<any, any>, arg8: $List_<any>): void;
        static SOUTH_AABB: $VoxelShape;
        explosionResistance: number;
        static DOWN_AABB: $VoxelShape;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UP_AABB: $VoxelShape;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static UPDATE_MOVE_BY_PISTON: number;
        static EAST_AABB: $VoxelShape;
        static UPDATE_LIMIT: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static TRIGGER_EXTEND: number;
        static PLATFORM_THICKNESS: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        static NORTH_AABB: $VoxelShape;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$PistonBaseBlock>;
        static EXTENDED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static TRIGGER_CONTRACT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL_IMMEDIATE: number;
        static TRIGGER_DROP: number;
        static WEST_AABB: $VoxelShape;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(isSticky: boolean, properties: $BlockBehaviour$Properties);
    }
    export class $PistonMath {
        static getMovementArea(bounds: $AABB_, dir: $Direction_, delta: number): $AABB;
        constructor();
    }
    export class $MovingPistonBlock extends $BaseEntityBlock {
        static newMovingBlockEntity(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean): $BlockEntity;
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
        static TYPE: $EnumProperty<$PistonType>;
        soundType: $SoundType;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        item: $Item;
        static CODEC: $MapCodec<$MovingPistonBlock>;
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
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonHeadBlock extends $DirectionalBlock {
        explosionResistance: number;
        static DOWN_AABB: $VoxelShape;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        stateDefinition: $StateDefinition<$Block, $BlockState>;
        static PLATFORM: number;
        static EAST_AABB: $VoxelShape;
        static UPDATE_LIMIT: number;
        static SHORT_EAST_ARM_AABB: $VoxelShape;
        static UPDATE_KNOWN_SHAPE: number;
        static NORTH_AABB: $VoxelShape;
        static TYPE: $EnumProperty<$PistonType>;
        static SHORT_WEST_ARM_AABB: $VoxelShape;
        soundType: $SoundType;
        item: $Item;
        static CODEC: $MapCodec<$PistonHeadBlock>;
        static SHORT_DOWN_ARM_AABB: $VoxelShape;
        static WEST_ARM_AABB: $VoxelShape;
        static SHORT_NORTH_ARM_AABB: $VoxelShape;
        static UPDATE_ALL_IMMEDIATE: number;
        static NORTH_ARM_AABB: $VoxelShape;
        static SHORT_SOUTH_ARM_AABB: $VoxelShape;
        static WEST_AABB: $VoxelShape;
        static INSTANT: number;
        static EDGE_MAX: number;
        static EAST_ARM_AABB: $VoxelShape;
        static SOUTH_AABB: $VoxelShape;
        static SOUTH_ARM_AABB: $VoxelShape;
        static DOWN_ARM_AABB: $VoxelShape;
        static EDGE_MIN: number;
        static UPDATE_SHAPE_ORDER: $Direction[];
        static UP_AABB: $VoxelShape;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_ALL: number;
        drops: $ResourceKey<$LootTable>;
        static UP_ARM_AABB: $VoxelShape;
        static UPDATE_SUPPRESS_DROPS: number;
        dynamicShape: boolean;
        jumpFactor: number;
        static UPDATE_IMMEDIATE: number;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        speedFactor: number;
        friction: number;
        static SHORT: $BooleanProperty;
        static AABB_OFFSET: number;
        static SHORT_UP_ARM_AABB: $VoxelShape;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        hasCollision: boolean;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $PistonStructureResolver implements $ICooperativePiston {
        resolve(): boolean;
        getPushDirection(): $Direction;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToDestroy(): $List<$BlockPos>;
        supp$getCoopState(): $CoopResolverState;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToPush(): $List<$BlockPos>;
        supp$setCooperators(arg0: $Set_<any>, arg1: number, arg2: $Direction_, arg3: boolean): void;
        static MAX_PUSH_DEPTH: number;
        constructor(level: $Level, pistonPos: $BlockPos_, pistonDirection: $Direction_, extending: boolean);
        get pushDirection(): $Direction;
        get toDestroy(): $List<$BlockPos>;
        get toPush(): $List<$BlockPos>;
    }
    export class $PistonMovingBlockEntity extends $BlockEntity implements $ICarryingMovingPiston, $IExtendedPistonTile, $IBlockHolder {
        supp$getOrCreateCachedCarriedBlockEntity(): $BlockEntity;
        getMovedState(): $BlockState;
        getXOff(progress: number): number;
        getYOff(progress: number): number;
        getZOff(progress: number): number;
        static tick(level: $Level, pos: $BlockPos_, state: $BlockState_, blockEntity: $PistonMovingBlockEntity): void;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getDirection(): $Direction;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        supp$restoreCarriedBe(): void;
        getMovementDirection(): $Direction;
        static moveCollidedEntities(level: $Level, pos: $BlockPos_, partialTick: number, piston: $PistonMovingBlockEntity): void;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        supp$applyMovedFluidFill(): void;
        supp$setCarriedBlockEntityNbt(tag: $CompoundTag_): void;
        /**
         * Gets a `CompoundTag` that can be used to store custom data for this block entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        supp$getCarriedBlockEntityNbt(): $CompoundTag;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        finalTick(): void;
        setHeldBlock(arg0: $BlockState_): boolean;
        /**
         * @return whether this piston is extending
         */
        isExtending(): boolean;
        getProgress(progress: number): number;
        /**
         * @return whether this piston is extending
         */
        isSourcePiston(): boolean;
        getLastTicked(): number;
        static moveStuckEntities(level: $Level, pos: $BlockPos_, partialTick: number, piston: $PistonMovingBlockEntity): void;
        getHeldBlock(): $BlockState;
        tickMovedBlock(arg0: $Level, arg1: $BlockPos_): void;
        handler$iic000$moonlight$onFinishedShortPulse(arg0: $CallbackInfo): void;
        supp$setMovedFluidFill(arg0: $FluidState): void;
        progressO: number;
        worldPosition: $BlockPos;
        static TICK_MOVEMENT: number;
        lastTicked: number;
        level: $Level;
        progress: number;
        static ATTACHMENTS_NBT_KEY: string;
        hasComparators: number;
        /**
         * @deprecated
         */
        type: $BlockEntityType<never>;
        remove: boolean;
        deathTicks: number;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean);
        get movedState(): $BlockState;
        get direction(): $Direction;
        get movementDirection(): $Direction;
        get extending(): boolean;
        get sourcePiston(): boolean;
    }
}
