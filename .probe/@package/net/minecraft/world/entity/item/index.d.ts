import { $EntityDynamicLightSource } from "@package/dev/lambdaurora/lambdynlights/engine/source";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $Pose, $PortalProcessor, $EntityType, $Entity, $TraceableEntity } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $FallingBlockEntityAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $UUID, $UUID_ } from "@package/java/util";
import { $IItemEntity } from "@package/xaero/pac/common/entity";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Object } from "@package/java/lang";
import { $AccessorMixinFallingBlockEntity } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $ItemEntityAccess, $TNTEntityAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors";
import { $SynchedEntityData, $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ItemEntityAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/util/accessors";
import { $ItemEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $ChangeSubscriber$CountChangeSubscriber, $ChangeSubscriber, $ChangePublisher } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";

declare module "@package/net/minecraft/world/entity/item" {
    export class $ItemEntity extends $Entity implements $TraceableEntity, $ItemEntityAccessor, $ChangePublisher<any>, $ChangeSubscriber$CountChangeSubscriber<any>, $ItemEntityAccess, $ItemEntityKJS, $IItemEntity {
        static merge(destinationStack: $ItemStack_, originStack: $ItemStack_, amount: number): $ItemStack;
        copy(): $ItemEntity;
        getTarget(): $UUID;
        setTarget(target: $UUID_ | null): void;
        getOwner(): $Entity;
        /**
         * Gets the item that this entity represents.
         */
        getItem(): $ItemStack;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getAge(): number;
        handler$imo000$ae2$handleExplosion(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$fkj000$cataclysm$Cmhurt(arg0: $DamageSource_, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        getXaero_OPAC_throwerAccessor(): $UUID;
        setXaero_OPAC_throwerAccessor(target: $UUID_): void;
        /**
         * Returns `true` if it's possible to attack this entity with an item.
         */
        hasPickUpDelay(): boolean;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        static areMergable(destinationStack: $ItemStack_, originStack: $ItemStack_): boolean;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        makeFakeItem(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNeverPickUp(): void;
        lithium$notify(arg0: $ItemStack_, arg1: number): void;
        lithium$subscribe(arg0: $ChangeSubscriber<any>, arg1: number): void;
        /**
         * Prepares this entity in new dimension by copying NBT data from entity in old dimension
         */
        setThrower(entity: $Entity): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setUnderwaterMovement(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setUnlimitedLifetime(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setExtendedLifetime(): void;
        getXaero_OPAC_target(): $UUID;
        lithium$unsubscribe(arg0: $ChangeSubscriber<any>): number;
        getXaero_OPAC_thrower(): $UUID;
        handler$imo000$ae2$handleEntityTransform(arg0: $CallbackInfo): void;
        lithium$forceUnsubscribe(arg0: $ItemStack_, arg1: number): void;
        lithium$notifyCount(arg0: $ItemStack_, arg1: number, arg2: number): void;
        setPickUpDelay(pickupDelay: number): void;
        /**
         * Sets the item that this entity represents.
         */
        setItem(stack: $ItemStack_): void;
        getSpin(partialTicks: number): number;
        lithium$isSubscribedWithData(arg0: $ChangeSubscriber<$ItemStack_>, arg1: number): boolean;
        lithium$unsubscribeWithData(arg0: $ChangeSubscriber<$Object>, arg1: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getLifespan(): number;
        setLifespan(pickupDelay: number): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoDespawn(): void;
        setTicksUntilDespawn(pickupDelay: number): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setNoPickUpDelay(): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getTicksUntilDespawn(): number;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setDefaultPickUpDelay(): void;
        /**
         * Looks for other itemstacks nearby and tries to stack them together
         */
        setInfinitePickUpDelay(): void;
        lithium$getOwner(): $UUID;
        setAge(pickupDelay: number): void;
        firstTick: boolean;
        lifespan: number;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static EYE_HEIGHT: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static INFINITE_PICKUP_DELAY: number;
        yRot: number;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static LIFETIME: number;
        bobOffs: number;
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
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
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
        pickupDelay: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static BASE_SAFE_FALL_DISTANCE: number;
        age: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$ItemEntity>, level: $Level);
        constructor(level: $Level, posX: number, arg2: number, posY: number, arg4: $ItemStack_);
        constructor(level: $Level, posX: number, arg2: number, posY: number, arg4: $ItemStack_, posZ: number, arg6: number, itemStack: number);
        get owner(): $Entity;
        set thrower(value: $Entity);
        get xaero_OPAC_target(): $UUID;
        get xaero_OPAC_thrower(): $UUID;
        set pickUpDelay(value: number);
    }
    export class $PrimedTnt extends $Entity implements $TraceableEntity, $TNTEntityAccess, $EntityDynamicLightSource {
        /**
         * Returns null or the entityliving it was ignited by
         */
        getOwner(): $LivingEntity;
        setFuse(life: number): void;
        /**
         * Gets the fuse from the data manager
         */
        getFuse(): number;
        getBlockState(): $BlockState;
        /**
         * Called to update the entity's position/logic.
         */
        explode(): void;
        setBlockState(blockState: $BlockState_): void;
        setOwner(arg0: $LivingEntity): void;
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
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
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
        static TAG_FUSE: string;
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
        constructor(entityType: $EntityType<$PrimedTnt>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number, arg4: $LivingEntity | null);
    }
    export class $FallingBlockEntity extends $Entity implements $AccessorMixinFallingBlockEntity, $FallingBlockEntityAccessor {
        /**
         * Called to update the entity's position/logic.
         */
        disableDrop(): void;
        callOnBrokenAfterFall(block: $Block, pos: $BlockPos_): void;
        static callInit$create_$md$707fe4$0(arg0: $Level, arg1: number, arg2: number, arg3: number, arg4: $BlockState_): $FallingBlockEntity;
        static fall(level: $Level, pos: $BlockPos_, blockState: $BlockState_): $FallingBlockEntity;
        getBlockState(): $BlockState;
        setHurtsEntities(fallDamagePerDistance: number, fallDamageMax: number): void;
        getStartPos(): $BlockPos;
        setBlockState(state: $BlockState_): void;
        setStartPos(startPos: $BlockPos_): void;
        modify$bgk000$supplementaries$supp$concreteFix(pos: $BlockPos_): $BlockPos;
        handler$fne000$architectury$handleLand(ci: $CallbackInfo, block: $Block, blockPos2: $BlockPos_, bl: boolean, bl2: boolean, d: number, blockState: $BlockState_): void;
        lootr$setBlockState(state: $BlockState_): void;
        firstTick: boolean;
        cancelDrop: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        uuid: $UUID;
        dropItem: boolean;
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
        blockData: $CompoundTag;
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
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        invulnerableTime: number;
        static UUID_TAG: string;
        forceTickAfterTeleportToDuplicate: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        portalProcess: $PortalProcessor;
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
        static DATA_START_POS: $EntityDataAccessor<$BlockPos>;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        time: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(entityType: $EntityType<$FallingBlockEntity>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number, arg4: $BlockState_);
    }
}
