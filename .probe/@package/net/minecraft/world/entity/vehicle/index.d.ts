import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pose, $PortalProcessor, $VariantHolder, $Pose_, $EntityType, $SlotAccess, $Entity, $Leashable$LeashData, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $HasCustomInventoryScreen, $Leashable } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $MinecartFurnaceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID, $List, $Set_, $List_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec } from "@package/net/minecraft/util";
import { $Function_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $InteractionResult, $MenuProvider, $Container } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $NonNullList } from "@package/net/minecraft/core";
import { $IBoatExtension, $IAbstractMinecartExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $IMinecartCollisionHandler } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $CollisionGetter, $BaseCommandBlock, $Level, $BlockGetter, $BaseSpawner } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid, $FluidState } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $LithiumInventory } from "@package/net/caffeinemc/mods/lithium/api/inventory";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $AABB_, $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Hopper } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/vehicle" {
    export class $Boat extends $VehicleEntity implements $Leashable, $VariantHolder<$Boat$Type>, $IBoatExtension {
        setInput(inputLeft: boolean, inputRight: boolean, inputUp: boolean, inputDown: boolean): void;
        getVariant(): $Boat$Type;
        setVariant(variant: $Boat$Type_): void;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getSinglePassengerXOffset(): number;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getGroundFriction(): number;
        setPaddleState(left: boolean, right: boolean): void;
        /**
         * Decides how much the boat should be gliding on the land (based on any slippery blocks)
         */
        getWaterLevelAbove(): number;
        static canVehicleCollide(vehicle: $Entity, entity: $Entity): boolean;
        getBubbleAngle(partialTicks: number): number;
        /**
         * Applies this boat's yaw to the given entity. Used to update the orientation of its passenger.
         */
        clampRotation(entityToUpdate: $Entity): void;
        /**
         * Update the boat's speed, based on momentum.
         */
        controlBoat(): void;
        getRowingTime(side: number, limbSwing: number): number;
        getPaddleState(side: number): boolean;
        getPaddleSound(): $SoundEvent;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getMaxPassengers(): number;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        localvar$zbm000$openpartiesandclaims$onTickGetEntities(arg0: $List_<any>): $List<any>;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        getLeashData(): $Leashable$LeashData;
        hasEnoughSpaceFor(passenger: $Entity): boolean;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        getLeashHolder(): $Entity;
        /**
         * Update the boat's speed, based on momentum.
         */
        leashTooFarBehaviour(): void;
        setDelayedLeashHolderId(bubbleTime: number): void;
        /**
         * Applies this boat's yaw to the given entity. Used to update the orientation of its passenger.
         */
        closeRangeLeashBehaviour(entityToUpdate: $Entity): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        dropLeash(left: boolean, right: boolean): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canHaveALeashAttachedToIt(): boolean;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        isLeashed(): boolean;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canBeLeashed(): boolean;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        mayBeLeashed(): boolean;
        /**
         * Returns whether the entity is within the fluid type of the state.
         */
        canBoatInFluid(state: $FluidState): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canBoatInFluid(type: $FluidType): boolean;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static PADDLE_RIGHT: number;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static DATA_ID_TYPE: $EntityDataAccessor<number>;
        noPhysics: boolean;
        yo: number;
        lastYd: number;
        static FLAG_ONFIRE: number;
        static DATA_ID_PADDLE_RIGHT: $EntityDataAccessor<boolean>;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static BUBBLE_TIME: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        static PADDLE_SOUND_TIME: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PADDLE_LEFT: number;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        deltaRotation: number;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static DATA_ID_PADDLE_LEFT: $EntityDataAccessor<boolean>;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static DATA_ID_BUBBLE_TIME: $EntityDataAccessor<number>;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$Boat>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
        get singlePassengerXOffset(): number;
        get groundFriction(): number;
        get waterLevelAbove(): number;
        get paddleSound(): $SoundEvent;
        get maxPassengers(): number;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
        get leashed(): boolean;
    }
    export class $Boat$Type extends $Enum<$Boat$Type> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $Boat$Type[];
        static valueOf(name: string): $Boat$Type;
        static byName(name: string): $Boat$Type;
        getSerializedName(): string;
        isRaft(): boolean;
        getPlanks(): $Block;
        getSticks(): $Item;
        static getExtensionInfo(): $ExtensionInfo;
        /**
         * Get a boat type by its enum ordinal
         */
        static byId(id: number): $Boat$Type;
        getRemappedEnumConstantName(): string;
        static MANGROVE: $Boat$Type;
        boatItem: $Supplier<$Item>;
        static SPRUCE: $Boat$Type;
        static CHERRY: $Boat$Type;
        static BAMBOO: $Boat$Type;
        static CODEC: $StringRepresentable$EnumCodec<$Boat$Type>;
        static BIRCH: $Boat$Type;
        static JUNGLE: $Boat$Type;
        static ACACIA: $Boat$Type;
        static OAK: $Boat$Type;
        chestBoatItem: $Supplier<$Item>;
        static DARK_OAK: $Boat$Type;
        get serializedName(): string;
        get raft(): boolean;
        get planks(): $Block;
        get sticks(): $Item;
        static get extensionInfo(): $ExtensionInfo;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Boat$Type}.
     */
    export type $Boat$Type_ = "oak" | "spruce" | "birch" | "jungle" | "acacia" | "cherry" | "dark_oak" | "mangrove" | "bamboo";
    export class $ContainerEntity {
    }
    export interface $ContainerEntity extends $Container, $MenuProvider {
        position(): $Vec3;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        isEmpty(): boolean;
        level(): $Level;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        getChestVehicleSlot(index: number): $SlotAccess;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        isChestVehicleEmpty(): boolean;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level, entity: $Entity): void;
        getChestVehicleItem(slot: number): $ItemStack;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        setChestVehicleItem(slot: number, stack: $ItemStack_): void;
        removeChestVehicleItem(slot: number, amount: number): $ItemStack;
        isChestVehicleStillValid(player: $Player): boolean;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        getBoundingBox(): $AABB;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        unpackChestVehicleLootTable(player: $Player | null): void;
        /**
         * @return `true` if the existing container should be closed on the client side when opening a new one, `false` otherwise
         */
        isRemoved(): boolean;
        removeChestVehicleItemNoUpdate(slot: number): $ItemStack;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(lootTableSeed: number): void;
        get empty(): boolean;
        get chestVehicleEmpty(): boolean;
        get itemStacks(): $NonNullList<$ItemStack>;
        get boundingBox(): $AABB;
        get removed(): boolean;
    }
    export class $MinecartHopper extends $AbstractMinecartContainer implements $Hopper {
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        isEnabled(): boolean;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelX(): number;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelY(): number;
        /**
         * Gets the world X position for this hopper entity.
         */
        getLevelZ(): number;
        /**
         * Set whether this hopper minecart is being blocked by an activator rail.
         */
        setEnabled(enabled: boolean): void;
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        suckInItems(): boolean;
        /**
         * Get whether this hopper minecart is being blocked by an activator rail.
         */
        isGridAligned(): boolean;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getSuckAabb(): $AABB;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$MinecartHopper>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
        get levelX(): number;
        get levelY(): number;
        get levelZ(): number;
        get gridAligned(): boolean;
        get suckAabb(): $AABB;
    }
    export class $MinecartChest extends $AbstractMinecartContainer {
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$MinecartChest>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
    }
    export class $AbstractMinecart extends $VehicleEntity implements $IAbstractMinecartExtension {
        /**
         * Gets the maximum speed for a minecart
         */
        getDragAir(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canUseRail(): boolean;
        /**
         * Moves a minecart that is not attached to a rail
         */
        applyNaturalSlowdown(): void;
        setDisplayBlockState(displayState: $BlockState_): void;
        static registerCollisionHandler(arg0: $IMinecartCollisionHandler | null): void;
        setMaxSpeedAirLateral(yaw: number): void;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getMaxSpeedAirLateral(): number;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getMaxSpeedAirVertical(): number;
        getDisplayBlockState(): $BlockState;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getDefaultDisplayOffset(): number;
        setMaxSpeedAirVertical(yaw: number): void;
        getCollisionHandler(): $IMinecartCollisionHandler;
        /**
         * Gets the maximum speed for a minecart
         */
        getMaxSpeedWithRail(): number;
        /**
         * Moves a minecart that is not attached to a rail
         */
        comeOffTrack(): void;
        moveAlongTrack(pos: $BlockPos_, state: $BlockState_): void;
        /**
         * Gets the maximum speed for a minecart
         */
        getMaxSpeed(): number;
        setCanUseRail(customDisplay: boolean): void;
        moveMinecartOnRail(pos: $BlockPos_): void;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getDisplayOffset(): number;
        setCustomDisplay(customDisplay: boolean): void;
        getMinecartType(): $AbstractMinecart$Type;
        /**
         * Called every tick the minecart is on an activator rail.
         */
        activateMinecart(x: number, y: number, z: number, powered: boolean): void;
        setDisplayOffset(displayOffset: number): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        hasCustomDisplay(): boolean;
        getPosOffs(x: number, arg1: number, y: number, arg3: number): $Vec3;
        setDragAir(renderDistWeight: number): void;
        setCurrentCartSpeedCapOnRail(yaw: number): void;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getCurrentCartSpeedCapOnRail(): number;
        getDefaultDisplayBlockState(): $BlockState;
        getPos(x: number, arg1: number, y: number): $Vec3;
        static createMinecart(level: $ServerLevel, x: number, arg2: number, y: number, arg4: $AbstractMinecart$Type_, z: $ItemStack_, arg6: $Player | null): $AbstractMinecart;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        getComparatorLevel(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        shouldDoRailFunctions(): boolean;
        /**
         * Internal, returns the current spot to look for the attached rail.
         */
        getCurrentRailPosition(): $BlockPos;
        /**
         * Returns the current speed cap for the cart when traveling on rails. This
         * functions differs from getMaxCartSpeedOnRail() in that it controls
         * current movement and cannot be overridden. The value however can never be
         * higher than getMaxCartSpeedOnRail().
         */
        getMaxCartSpeedOnRail(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        isPoweredCart(): boolean;
        /**
         * Gets the maximum speed for a minecart
         */
        getSlopeAdjustment(): number;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        canBeRidden(): boolean;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<never>, level: $Level);
        constructor(entityType: $EntityType<never>, level: $Level, x: number, arg3: number, y: number);
        get defaultDisplayOffset(): number;
        get collisionHandler(): $IMinecartCollisionHandler;
        get maxSpeedWithRail(): number;
        get maxSpeed(): number;
        set customDisplay(value: boolean);
        get minecartType(): $AbstractMinecart$Type;
        get defaultDisplayBlockState(): $BlockState;
        get comparatorLevel(): number;
        get currentRailPosition(): $BlockPos;
        get maxCartSpeedOnRail(): number;
        get poweredCart(): boolean;
        get slopeAdjustment(): number;
    }
    export class $DismountHelper {
        static offsetsForDirection(direction: $Direction_): number[][];
        static canDismountTo(level: $CollisionGetter, passenger: $LivingEntity, boundingBox: $AABB_): boolean;
        static canDismountTo(level: $CollisionGetter, offset: $Vec3_, passenger: $LivingEntity, pose: $Pose_): boolean;
        static isBlockFloorValid(distance: number): boolean;
        static nonClimbableShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        static findCeilingFrom(pos: $BlockPos_, ceiling: number, shapeForPos: $Function_<$BlockPos, $VoxelShape>): number;
        static findSafeDismountLocation(entityType: $EntityType<never>, level: $CollisionGetter, pos: $BlockPos_, onlySafePositions: boolean): $Vec3;
        constructor();
    }
    export class $AbstractMinecart$Type extends $Enum<$AbstractMinecart$Type> {
        static values(): $AbstractMinecart$Type[];
        static valueOf(arg0: string): $AbstractMinecart$Type;
        static CHEST: $AbstractMinecart$Type;
        static FURNACE: $AbstractMinecart$Type;
        static RIDEABLE: $AbstractMinecart$Type;
        static COMMAND_BLOCK: $AbstractMinecart$Type;
        static TNT: $AbstractMinecart$Type;
        static SPAWNER: $AbstractMinecart$Type;
        static HOPPER: $AbstractMinecart$Type;
    }
    /**
     * Values that may be interpreted as {@link $AbstractMinecart$Type}.
     */
    export type $AbstractMinecart$Type_ = "rideable" | "chest" | "furnace" | "tnt" | "spawner" | "hopper" | "command_block";
    export class $Boat$Status extends $Enum<$Boat$Status> {
        static values(): $Boat$Status[];
        static valueOf(arg0: string): $Boat$Status;
        static UNDER_WATER: $Boat$Status;
        static UNDER_FLOWING_WATER: $Boat$Status;
        static IN_AIR: $Boat$Status;
        static IN_WATER: $Boat$Status;
        static ON_LAND: $Boat$Status;
    }
    /**
     * Values that may be interpreted as {@link $Boat$Status}.
     */
    export type $Boat$Status_ = "in_water" | "under_water" | "under_flowing_water" | "on_land" | "in_air";
    export class $ChestBoat extends $Boat implements $HasCustomInventoryScreen, $ContainerEntity {
        /**
         * Returns the stack in the given slot.
         */
        getItem(slot: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(slot: number, amount: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        stopOpen(player: $Player): void;
        openCustomInventoryScreen(player: $Player): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        unpackLootTable(player: $Player | null): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTableSeed(lootTableSeed: number): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(slot: number): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getContainerSize(): number;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(slot: number, stack: $ItemStack_): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        getChestVehicleSlot(slot: number): $SlotAccess;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isChestVehicleEmpty(): boolean;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level, entity: $Entity): void;
        /**
         * Returns the stack in the given slot.
         */
        getChestVehicleItem(slot: number): $ItemStack;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setChestVehicleItem(slot: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeChestVehicleItem(slot: number, amount: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        isChestVehicleStillValid(player: $Player): boolean;
        unpackChestVehicleLootTable(player: $Player | null): void;
        /**
         * Returns the stack in the given slot.
         */
        removeChestVehicleItemNoUpdate(slot: number): $ItemStack;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the number of slots in the inventory.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        setTransferCooldown(lootTableSeed: number): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canReceiveTransferCooldown(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the number of slots in the inventory.
         */
        getWidth(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        getSlots(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the number of slots in the inventory.
         */
        getHeight(): number;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(slot: number, stack: $ItemStack_): void;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(slot: number): $ItemStack;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldCloseCurrentScreen(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        count(): number;
        /**
         * Returns the number of slots in the inventory.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the number of slots in the inventory.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static PADDLE_RIGHT: number;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static DATA_ID_TYPE: $EntityDataAccessor<number>;
        noPhysics: boolean;
        yo: number;
        lastYd: number;
        static FLAG_ONFIRE: number;
        static DATA_ID_PADDLE_RIGHT: $EntityDataAccessor<boolean>;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static BUBBLE_TIME: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        static PADDLE_SOUND_TIME: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PADDLE_LEFT: number;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        deltaRotation: number;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static DATA_ID_PADDLE_LEFT: $EntityDataAccessor<boolean>;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static DATA_ID_BUBBLE_TIME: $EntityDataAccessor<number>;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$Boat>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
        get itemStacks(): $NonNullList<$ItemStack>;
        get containerSize(): number;
        get chestVehicleEmpty(): boolean;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $Minecart extends $AbstractMinecart {
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<never>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
    }
    export class $VehicleEntity extends $Entity {
        destroy(source: $DamageSource_): void;
        destroy(dropItem: $Item): void;
        setHurtDir(hurtDir: number): void;
        shouldSourceDestroy(source: $DamageSource_): boolean;
        getDropItem(): $Item;
        setHurtTime(hurtDir: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getHurtTime(): number;
        getDamage(): number;
        setDamage(damage: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getHurtDir(): number;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<never>, level: $Level);
        get dropItem(): $Item;
    }
    export class $MinecartSpawner extends $AbstractMinecart {
        getSpawner(): $BaseSpawner;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$MinecartSpawner>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
        get spawner(): $BaseSpawner;
    }
    export class $MinecartCommandBlock extends $AbstractMinecart {
        getCommandBlock(): $BaseCommandBlock;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DATA_ID_COMMAND_NAME: $EntityDataAccessor<string>;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        static DATA_ID_LAST_OUTPUT: $EntityDataAccessor<$Component>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$MinecartCommandBlock>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
        get commandBlock(): $BaseCommandBlock;
    }
    export class $MinecartCommandBlock$MinecartCommandBase extends $BaseCommandBlock {
        getMinecart(): $MinecartCommandBlock;
        this$0: $MinecartCommandBlock;
        constructor(arg0: $MinecartCommandBlock);
        get minecart(): $MinecartCommandBlock;
    }
    export class $MinecartFurnace extends $AbstractMinecart implements $MinecartFurnaceAccessor {
        setHasFuel(hasFuel: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasFuel(): boolean;
        create$setFuel(id: number): void;
        /**
         * Called from Detector Rails to retrieve a redstone power level for comparators.
         */
        create$getFuel(): number;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        zPush: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        xPush: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$MinecartFurnace>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
    }
    export class $MinecartTNT extends $AbstractMinecart {
        /**
         * Gets the remaining fuse time in ticks.
         */
        getFuse(): number;
        /**
         * Ignites this TNT cart.
         */
        primeFuse(): void;
        /**
         * Returns `true` if the TNT minecart is ignited.
         */
        isPrimed(): boolean;
        /**
         * Makes the minecart explode.
         */
        explode(radiusModifier: number): void;
        explode(damageSource: $DamageSource_ | null, radiusModifier: number): void;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$MinecartTNT>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
        get fuse(): number;
        get primed(): boolean;
    }
    export class $AbstractMinecartContainer extends $AbstractMinecart implements $ContainerEntity, $LithiumInventory {
        /**
         * Returns the stack in the given slot.
         */
        getItem(index: number): $ItemStack;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeItem(index: number, count: number): $ItemStack;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearContent(): void;
        getItemStacks(): $NonNullList<$ItemStack>;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearItemStacks(): void;
        getLootTable(): $ResourceKey<$LootTable>;
        getLootTableSeed(): number;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        stillValid(player: $Player): boolean;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable> | null): void;
        setLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setLootTableSeed(lootTableSeed: number): void;
        /**
         * Returns the stack in the given slot.
         */
        removeItemNoUpdate(index: number): $ItemStack;
        createMenu(containerId: number, playerInventory: $Inventory, player: $Player): $AbstractContainerMenu;
        createMenu(containerId: number, playerInventory: $Inventory): $AbstractContainerMenu;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setItem(index: number, stack: $ItemStack_): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        readChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clearChestVehicleContent(): void;
        getChestVehicleSlot(slot: number): $SlotAccess;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isChestVehicleEmpty(): boolean;
        chestVehicleDestroyed(damageSource: $DamageSource_, level: $Level, entity: $Entity): void;
        /**
         * Returns the stack in the given slot.
         */
        getChestVehicleItem(index: number): $ItemStack;
        addChestVehicleSaveData(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): void;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setChestVehicleItem(index: number, stack: $ItemStack_): void;
        /**
         * Removes up to a specified number of items from an inventory slot and returns them in a new stack.
         */
        removeChestVehicleItem(index: number, count: number): $ItemStack;
        /**
         * Don't rename this method to canInteractWith due to conflicts with Container
         */
        isChestVehicleStillValid(player: $Player): boolean;
        unpackChestVehicleLootTable(player: $Player | null): void;
        /**
         * Returns the stack in the given slot.
         */
        removeChestVehicleItemNoUpdate(index: number): $ItemStack;
        interactWithContainerVehicle(player: $Player): $InteractionResult;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        generateLootLithium(): void;
        stopOpen(player: $Player): void;
        startOpen(player: $Player): void;
        /**
         * Returns `true` if any item from the passed set exists in this inventory.
         */
        hasAnyOf(set: $Set_<$Item>): boolean;
        /**
         * Returns the total amount of the specified item in this inventory. This method does not check for nbt.
         */
        countItem(item: $Item): number;
        /**
         * @return `true` if the given stack can be extracted into the target inventory
         */
        canTakeItem(target: $Container, slot: number, stack: $ItemStack_): boolean;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getMaxStackSize(): number;
        getMaxStackSize(stack: $ItemStack_): number;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        canPlaceItem(slot: number, stack: $ItemStack_): boolean;
        hasAnyMatching(predicate: $Predicate_<$ItemStack>): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        setTransferCooldown(lootTableSeed: number): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canReceiveTransferCooldown(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        lithium$itemInsertionTestRequiresStackSize1(): boolean;
        getBlock(level: $Level): $LevelBlock;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        clear(): void;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getWidth(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getSlots(): number;
        /**
         * For block entities, ensures the chunk containing the block entity is saved to disk later - the game won't think it hasn't changed and skip it.
         */
        setChanged(): void;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        getHeight(): number;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isMutable(): boolean;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        asContainer(): $Container;
        /**
         * Returns `true` if automation is allowed to insert the given stack (ignoring stack size) into the given slot. For guis use Slot.isItemValid
         */
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        /**
         * Sets the given item stack to the specified slot in the inventory (can be crafting or armor sections).
         */
        setStackInSlot(index: number, stack: $ItemStack_): void;
        /**
         * Returns the stack in the given slot.
         */
        getStackInSlot(index: number): $ItemStack;
        /**
         * Allows the menu provider to write additional data to be read by `IContainerFactory#create(int, Inventory, RegistryFriendlyByteBuf)`
         * when the menu is created on the client-side.
         */
        writeClientSideData(menu: $AbstractContainerMenu, buffer: $RegistryFriendlyByteBuf): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldCloseCurrentScreen(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isEmpty(): boolean;
        count(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        count(): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        find(): number;
        find(match: $ItemPredicate_): number;
        clear(match: $ItemPredicate_): void;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        countNonEmpty(match: $ItemPredicate_): number;
        /**
         * Returns the maximum stack size for an inventory slot. Seems to always be 64, possibly will be extended.
         */
        countNonEmpty(): number;
        getAllItems(): $List<$ItemStack>;
        setInventoryLithium(arg0: $NonNullList<$ItemStack_>): void;
        getInventoryLithium(): $NonNullList<$ItemStack>;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        static DATA_ID_HURTDIR: $EntityDataAccessor<number>;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
        static DATA_ID_HURT: $EntityDataAccessor<number>;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        random: $RandomSource;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static WATER_SLOWDOWN_FACTOR: number;
        static DEFAULT_BB_HEIGHT: number;
        levelCallback: $EntityInLevelCallback;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        static DATA_ID_DAMAGE: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<never>, level: $Level);
        constructor(entityType: $EntityType<never>, x: number, arg2: number, y: number, arg4: $Level);
        get itemStacks(): $NonNullList<$ItemStack>;
        get chestVehicleEmpty(): boolean;
        set transferCooldown(value: number);
        get width(): number;
        get slots(): number;
        get height(): number;
        get mutable(): boolean;
        get allItems(): $List<$ItemStack>;
    }
}
