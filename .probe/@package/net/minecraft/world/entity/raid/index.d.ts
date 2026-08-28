import { $GoalSelector, $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $MoveControl, $LookControl, $JumpControl } from "@package/net/minecraft/world/entity/ai/control";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pose, $PortalProcessor, $EntityType, $Entity, $EntityDimensions, $Entity$RemovalReason, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $UUID, $Stack, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand, $Difficulty_ } from "@package/net/minecraft/world";
import { $Predicate, $Supplier } from "@package/java/util/function";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Holder_, $BlockPos_, $HolderGetter } from "@package/net/minecraft/core";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $Enum } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PatrollingMonster } from "@package/net/minecraft/world/entity/monster";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BannerPattern_ } from "@package/net/minecraft/world/level/block/entity";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/raid" {
    export class $Raider$RaiderCelebration extends $Goal {
        this$0: $Raider;
        constructor(mob: $Raider, arg1: $Raider);
    }
    export class $Raider$ObtainRaidLeaderBannerGoal<T extends $Raider> extends $Goal {
    }
    export class $Raid {
        isStarted(): boolean;
        stop(): void;
        getId(): number;
        save(compound: $CompoundTag_): $CompoundTag;
        handler$bek000$paraglider$awardVessel(arg0: $CallbackInfo): void;
        isActive(): boolean;
        getLevel(): $Level;
        static getLeaderBannerInstance(patternRegistry: $HolderGetter<$BannerPattern_>): $ItemStack;
        isStopped(): boolean;
        tick(): void;
        addHeroOfTheVillage(player: $Entity): void;
        getGroupsSpawned(): number;
        removeFromRaid(raider: $Raider, wanderedOutOfRaid: boolean): void;
        updateBossbar(): void;
        removeLeader(wave: number): void;
        getMaxRaidOmenLevel(): number;
        getCenter(): $BlockPos;
        getNumGroups(difficulty: $Difficulty_): number;
        getEnchantOdds(): number;
        addWaveMob(wave: number, raider: $Raider, isRecruited: boolean): boolean;
        getLeader(wave: number): $Raider;
        setLeader(wave: number, raider: $Raider): void;
        joinRaid(wave: number, raider: $Raider, pos: $BlockPos_ | null, isRecruited: boolean): void;
        isOver(): boolean;
        isLoss(): boolean;
        getRaidOmenLevel(): number;
        getTotalHealth(): number;
        isBetweenWaves(): boolean;
        setRaidOmenLevel(wave: number): void;
        absorbRaidOmen(player: $ServerPlayer): boolean;
        getAllRaiders(): $Set<$Raider>;
        getTotalRaidersAlive(): number;
        hasFirstWaveSpawned(): boolean;
        getHealthOfLivingRaiders(): number;
        isVictory(): boolean;
        handler$zcl000$openpartiesandclaims$onFindRandomSpawnPosPost(arg0: $CallbackInfoReturnable<any>): void;
        handler$zcl000$openpartiesandclaims$onFindRandomSpawnPosPre(arg0: $CallbackInfoReturnable<any>): void;
        static RAID_REMOVAL_THRESHOLD_SQR: number;
        static TICKS_PER_DAY: number;
        static VILLAGE_RADIUS_BUFFER: number;
        static MAX_CELEBRATION_TICKS: number;
        static VALID_RAID_RADIUS_SQR: number;
        static MAX_NO_ACTION_TIME: number;
        static DEFAULT_MAX_RAID_OMEN_LEVEL: number;
        constructor(id: number, level: $ServerLevel, center: $BlockPos_);
        constructor(level: $ServerLevel, compound: $CompoundTag_);
        get started(): boolean;
        get id(): number;
        get active(): boolean;
        get level(): $Level;
        get stopped(): boolean;
        get groupsSpawned(): number;
        get maxRaidOmenLevel(): number;
        get center(): $BlockPos;
        get enchantOdds(): number;
        get over(): boolean;
        get loss(): boolean;
        get totalHealth(): number;
        get betweenWaves(): boolean;
        get allRaiders(): $Set<$Raider>;
        get totalRaidersAlive(): number;
        get healthOfLivingRaiders(): number;
        get victory(): boolean;
    }
    export class $Raid$RaiderType extends $Enum<$Raid$RaiderType> implements $IExtensibleEnum {
        static values(): $Raid$RaiderType[];
        static valueOf(arg0: string): $Raid$RaiderType;
        static getExtensionInfo(): $ExtensionInfo;
        spawnsPerWaveBeforeBonus: number[];
        entityTypeSupplier: $Supplier<$EntityType<$Raider>>;
        static EVOKER: $Raid$RaiderType;
        /**
         * @deprecated
         */
        entityType: $EntityType<$Raider>;
        static VINDICATOR: $Raid$RaiderType;
        static VALUES: $Raid$RaiderType[];
        static WITCH: $Raid$RaiderType;
        static PILLAGER: $Raid$RaiderType;
        static RAVAGER: $Raid$RaiderType;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaiderType}.
     */
    export type $Raid$RaiderType_ = "vindicator" | "evoker" | "pillager" | "witch" | "ravager" | "illagerinvasion_basher" | "illagerinvasion_provoker" | "illagerinvasion_necromancer" | "illagerinvasion_sorcerer" | "illagerinvasion_illusioner" | "illagerinvasion_archivist" | "illagerinvasion_marauder" | "illagerinvasion_inquisitor" | "illagerinvasion_alchemist" | "illagerinvasion_invoker";
    export class $Raider$RaiderMoveThroughVillageGoal extends $Goal {
    }
    export class $Raid$RaidStatus extends $Enum<$Raid$RaidStatus> {
    }
    /**
     * Values that may be interpreted as {@link $Raid$RaidStatus}.
     */
    export type $Raid$RaidStatus_ = "ongoing" | "victory" | "loss" | "stopped";
    export class $Raider$HoldGroundAttackGoal extends $Goal {
    }
    export class $Raids extends $SavedData {
        get(id: number): $Raid;
        static load(level: $ServerLevel, tag: $CompoundTag_): $Raids;
        static factory(level: $ServerLevel): $SavedData$Factory<$Raids>;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        tick(): void;
        static canJoinRaid(raider: $Raider, raid: $Raid): boolean;
        getNearbyRaid(pos: $BlockPos_, distance: number): $Raid;
        createOrExtendRaid(player: $ServerPlayer, pos: $BlockPos_): $Raid;
        static getFileId(dimensionTypeHolder: $Holder_<$DimensionType>): string;
        constructor(level: $ServerLevel);
    }
    export class $Raider extends $PatrollingMonster {
        static access$000(arg0: $Raider): $RandomSource;
        static access$100(arg0: $Raider): $RandomSource;
        static access$200(arg0: $Raider): boolean;
        static access$300(arg0: $Raider): $RandomSource;
        static access$400(arg0: $Raider): $RandomSource;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTicksOutsideRaid(): number;
        setTicksOutsideRaid(ticksOutsideRaid: number): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canJoinRaid(): boolean;
        getCurrentRaid(): $Raid;
        setCurrentRaid(raid: $Raid | null): void;
        setCelebrating(canJoinRaid: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCelebrating(): boolean;
        setCanJoinRaid(canJoinRaid: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasActiveRaid(): boolean;
        getCelebrateSound(): $SoundEvent;
        applyRaidBuffs(level: $ServerLevel, wave: number, unused: boolean): void;
        setWave(ticksOutsideRaid: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getWave(): number;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCaptain(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasRaid(): boolean;
        static MAX_WEARING_ARMOR_CHANCE: number;
        lastHurtByPlayerTime: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
        static DEFAULT_WALK_TARGET_VALUE: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        navigation: $PathNavigation;
        lootTable: $ResourceKey<$LootTable>;
        useItem: $ItemStack;
        yHeadRot: number;
        noPhysics: boolean;
        fallFlyTicks: number;
        autoSpinAttackDmg: number;
        yo: number;
        static DATA_LIVING_ENTITY_FLAGS: $EntityDataAccessor<number>;
        yBodyRotO: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        rotOffs: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        walkDist: number;
        lastHurt: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        lastDamageSource: $DamageSource;
        appliedScale: number;
        yya: number;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        static RANDOM_SPAWN_BONUS_ID: $ResourceLocation;
        swimAmount: number;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static IS_CELEBRATING: $EntityDataAccessor<boolean>;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        lerpHeadSteps: number;
        flyDist: number;
        brain: $Brain<never>;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        autoSpinAttackTicks: number;
        attackAnim: number;
        noActionTime: number;
        zOld: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static PICKUP_REACH: number;
        ambientSoundTime: number;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        targetSelector: $GoalSelector;
        lookControl: $LookControl;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        xpReward: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        raid: $Raid;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        moveControl: $MoveControl;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static LIVING_ENTITY_FLAG_OFF_HAND: number;
        random: $RandomSource;
        lerpSteps: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        swimAmountO: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static ALLOWED_ITEMS: $Predicate<$ItemEntity>;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        bodyArmorDropChance: number;
        lastDamageStamp: number;
        levelCallback: $EntityInLevelCallback;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        lerpX: number;
        lerpZ: number;
        lerpY: number;
        lerpXRot: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        animStep: number;
        yBodyRot: number;
        blocksBuilding: boolean;
        deathScore: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType<$Raider>, level: $Level);
        get celebrateSound(): $SoundEvent;
        get captain(): boolean;
    }
}
