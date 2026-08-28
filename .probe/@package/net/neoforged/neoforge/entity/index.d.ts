import { $TagKey } from "@package/net/minecraft/tags";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityDimensions, $ExperienceOrb, $Entity$RemovalReason, $Entity, $Pose, $PortalProcessor } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";

declare module "@package/net/neoforged/neoforge/entity" {
    export class $PartEntity<T extends $Entity> extends $Entity {
        getParent(): $CompoundTag;
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
        constructor(arg0: $CompoundTag_);
        get parent(): $CompoundTag;
    }
    /**
     * Event to determine which player an XP Orb should follow.
     * 
     * This is fired once a second when an XP Orbit find itself without a player to move toward.
     * 
     * The default (nearest player within `#getScanDistance()`) can be overridden with
     * either a new (Fake)Player or null to cancel the attraction.
     * 
     * Note that providing a player that is more than 8 blocks away does work, but it will
     * cause this event to be fired again after 20 ticks.
     * 
     * See also: `PickupXp` for cancelling the pickup.
     * 
     * This event is fired on both server and client on the `NeoForge#EVENT_BUS`.
     */
    export class $XpOrbTargetingEvent extends $Event {
        /**
         * The `ExperienceOrb` that's looking for a player to follow.
         * 
         * You can get the `Level` from this.
         */
        getXpOrb(): $ExperienceOrb;
        /**
         * Sets a new result. Can be null to cancel the default search.
         */
        setFollowingPlayer(newFollowingPlayer: $Player): void;
        /**
         * The maximum distance to scan for players. This is 8 for vanilla orbs.
         */
        getScanDistance(): number;
        /**
         * The result of the event.
         */
        getFollowingPlayer(): $Player;
        constructor(xpOrb: $ExperienceOrb, scanDistance: number);
        get xpOrb(): $ExperienceOrb;
        get scanDistance(): number;
    }
    /**
     * An interface for Entities that need extra information to be communicated
     * between the server and client when they are spawned.
     */
    export class $IEntityWithComplexSpawn {
    }
    export interface $IEntityWithComplexSpawn {
        /**
         * Called by the server when constructing the spawn packet.
         * Data should be added to the provided stream.
         */
        readSpawnData(buffer: $RegistryFriendlyByteBuf): void;
        /**
         * Called by the server when constructing the spawn packet.
         * Data should be added to the provided stream.
         */
        writeSpawnData(buffer: $RegistryFriendlyByteBuf): void;
    }
}
