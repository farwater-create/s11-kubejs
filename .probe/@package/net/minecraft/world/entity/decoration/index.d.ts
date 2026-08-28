import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Pose, $PortalProcessor, $VariantHolder, $EntityType, $Entity, $MoverType_, $EntityDimensions, $Entity$RemovalReason, $LivingEntity, $WalkAnimationState } from "@package/net/minecraft/world/entity";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ItemFrameAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $UUID, $Stack } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Predicate } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Holder_, $Holder, $BlockPos_, $Direction_, $Rotations, $Direction } from "@package/net/minecraft/core";
import { $Brain } from "@package/net/minecraft/world/entity/ai";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MapId } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Record } from "@package/java/lang";
import { $AccessorMixinItemFrame } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $EntityInLevelCallback } from "@package/net/minecraft/world/level/entity";
import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $EquipmentEntity } from "@package/net/caffeinemc/mods/lithium/common/entity";
import { $IHangingEntityAccessor } from "@package/net/mehvahdjukaar/supplementaries/mixins";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EntityDataAccessor, $SynchedEntityData } from "@package/net/minecraft/network/syncher";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ItemFrameEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Vec3, $AABB, $Vec3_ } from "@package/net/minecraft/world/phys";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/entity/decoration" {
    export class $GlowItemFrame extends $ItemFrame {
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
        pos: $BlockPos;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        direction: $Direction;
        levelCallback: $EntityInLevelCallback;
        static HANGING_ENTITY: $Predicate<$Entity>;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static NUM_ROTATIONS: number;
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
        constructor(arg0: $EntityType<$ItemFrame>, arg1: $Level);
        constructor(arg0: $Level, arg1: $BlockPos_, arg2: $Direction_);
    }
    export class $ArmorStand extends $LivingEntity implements $EquipmentEntity {
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isNoBasePlate(): boolean;
        setBodyPose(bodyPose: $Rotations): void;
        getHeadPose(): $Rotations;
        setHeadPose(bodyPose: $Rotations): void;
        setLeftArmPose(bodyPose: $Rotations): void;
        setLeftLegPose(bodyPose: $Rotations): void;
        setRightLegPose(bodyPose: $Rotations): void;
        setRightArmPose(bodyPose: $Rotations): void;
        setNoBasePlate(invisible: boolean): void;
        setShowArms(invisible: boolean): void;
        getLeftArmPose(): $Rotations;
        getRightLegPose(): $Rotations;
        getRightArmPose(): $Rotations;
        getLeftLegPose(): $Rotations;
        getBodyPose(): $Rotations;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isShowArms(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isMarker(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSmall(): boolean;
        static createAttributes(): $AttributeSupplier$Builder;
        lastHurtByPlayerTime: number;
        autoSpinAttackItemStack: $ItemStack;
        lerpYRot: number;
        static DEFAULT_BASE_GRAVITY: number;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static ENTITY_COUNTER: $AtomicInteger;
        lerpYHeadRot: number;
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
        static CLIENT_FLAG_SMALL: number;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        lastHit: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        static DATA_RIGHT_LEG_POSE: $EntityDataAccessor<$Rotations>;
        xRotO: number;
        static WOBBLE_TIME: number;
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
        static DISABLE_PUTTING_OFFSET: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        dead: boolean;
        verticalCollision: boolean;
        swimAmount: number;
        verticalCollisionBelow: boolean;
        static DATA_LEFT_ARM_POSE: $EntityDataAccessor<$Rotations>;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
        static DISABLE_TAKING_OFFSET: number;
        static DEFAULT_BB_HEIGHT: number;
        static DATA_RIGHT_ARM_POSE: $EntityDataAccessor<$Rotations>;
        xxa: number;
        static CLIENT_FLAG_NO_BASEPLATE: number;
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
        static CLIENT_FLAG_MARKER: number;
        static DATA_CLIENT_FLAGS: $EntityDataAccessor<number>;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        wasTouchingWater: boolean;
        rotA: number;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        damageContainers: $Stack<$DamageContainer>;
        static ARMOR_SLOT_OFFSET: number;
        run: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        animStepO: number;
        lastHurtByPlayer: $Player;
        static BOARDING_COOLDOWN: number;
        static DATA_HEAD_POSE: $EntityDataAccessor<$Rotations>;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DATA_LEFT_LEG_POSE: $EntityDataAccessor<$Rotations>;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        oRun: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        attackStrengthTicker: number;
        useItemRemaining: number;
        entityData: $SynchedEntityData;
        static SLEEPING_DIMENSIONS: $EntityDimensions;
        deathTime: number;
        static CLIENT_FLAG_SHOW_ARMS: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
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
        static LIVING_ENTITY_FLAG_IS_USING: number;
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
        static DATA_BODY_POSE: $EntityDataAccessor<$Rotations>;
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
        constructor(entityType: $EntityType<$ArmorStand>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
        get marker(): boolean;
        get small(): boolean;
    }
    export class $LeashFenceKnotEntity extends $BlockAttachedEntity {
        static getOrCreateKnot(level: $Level, pos: $BlockPos_): $LeashFenceKnotEntity;
        /**
         * Updates the entity bounding box based on current facing
         */
        playPlacementSound(): void;
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
        static OFFSET_Y: number;
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
        pos: $BlockPos;
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
        constructor(entityType: $EntityType<$LeashFenceKnotEntity>, level: $Level);
        constructor(level: $Level, pos: $BlockPos_);
    }
    export class $PaintingVariants {
        static register(context: $BootstrapContext<$PaintingVariant_>, key: $ResourceKey_<$PaintingVariant>, width: number, height: number): void;
        static bootstrap(context: $BootstrapContext<$PaintingVariant_>): void;
        static BACKYARD: $ResourceKey<$PaintingVariant>;
        static BOUQUET: $ResourceKey<$PaintingVariant>;
        static PRAIRIE_RIDE: $ResourceKey<$PaintingVariant>;
        static KEBAB: $ResourceKey<$PaintingVariant>;
        static BAROQUE: $ResourceKey<$PaintingVariant>;
        static OWLEMONS: $ResourceKey<$PaintingVariant>;
        static FIRE: $ResourceKey<$PaintingVariant>;
        static FINDING: $ResourceKey<$PaintingVariant>;
        static FERN: $ResourceKey<$PaintingVariant>;
        static TIDES: $ResourceKey<$PaintingVariant>;
        static WATER: $ResourceKey<$PaintingVariant>;
        static WIND: $ResourceKey<$PaintingVariant>;
        static BURNING_SKULL: $ResourceKey<$PaintingVariant>;
        static AZTEC: $ResourceKey<$PaintingVariant>;
        static LOWMIST: $ResourceKey<$PaintingVariant>;
        static FIGHTERS: $ResourceKey<$PaintingVariant>;
        static COURBET: $ResourceKey<$PaintingVariant>;
        static ENDBOSS: $ResourceKey<$PaintingVariant>;
        static SEA: $ResourceKey<$PaintingVariant>;
        static SKULL_AND_ROSES: $ResourceKey<$PaintingVariant>;
        static GRAHAM: $ResourceKey<$PaintingVariant>;
        static POOL: $ResourceKey<$PaintingVariant>;
        static PASSAGE: $ResourceKey<$PaintingVariant>;
        static VOID: $ResourceKey<$PaintingVariant>;
        static MEDITATIVE: $ResourceKey<$PaintingVariant>;
        static BOMB: $ResourceKey<$PaintingVariant>;
        static ORB: $ResourceKey<$PaintingVariant>;
        static AZTEC2: $ResourceKey<$PaintingVariant>;
        static WASTELAND: $ResourceKey<$PaintingVariant>;
        static COTAN: $ResourceKey<$PaintingVariant>;
        static PLANT: $ResourceKey<$PaintingVariant>;
        static EARTH: $ResourceKey<$PaintingVariant>;
        static DONKEY_KONG: $ResourceKey<$PaintingVariant>;
        static SKELETON: $ResourceKey<$PaintingVariant>;
        static POND: $ResourceKey<$PaintingVariant>;
        static WITHER: $ResourceKey<$PaintingVariant>;
        static ALBAN: $ResourceKey<$PaintingVariant>;
        static CAVEBIRD: $ResourceKey<$PaintingVariant>;
        static CREEBET: $ResourceKey<$PaintingVariant>;
        static PIGSCENE: $ResourceKey<$PaintingVariant>;
        static SUNSET: $ResourceKey<$PaintingVariant>;
        static STAGE: $ResourceKey<$PaintingVariant>;
        static SUNFLOWERS: $ResourceKey<$PaintingVariant>;
        static BUST: $ResourceKey<$PaintingVariant>;
        static CHANGING: $ResourceKey<$PaintingVariant>;
        static WANDERER: $ResourceKey<$PaintingVariant>;
        static UNPACKED: $ResourceKey<$PaintingVariant>;
        static HUMBLE: $ResourceKey<$PaintingVariant>;
        static POINTER: $ResourceKey<$PaintingVariant>;
        static MATCH: $ResourceKey<$PaintingVariant>;
        constructor();
    }
    export class $HangingEntity extends $BlockAttachedEntity implements $IHangingEntityAccessor {
        calculateBoundingBox(pos: $BlockPos_, direction: $Direction_): $AABB;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        calculateSupportBox(): $AABB;
        /**
         * Updates facing and bounding box based on it
         */
        setDirection(facingDirection: $Direction_): void;
        /**
         * Updates the entity bounding box based on current facing
         */
        playPlacementSound(): void;
        /**
         * Updates facing and bounding box based on it
         */
        invokeSetDirection(facingDirection: $Direction_): void;
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
        pos: $BlockPos;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        direction: $Direction;
        levelCallback: $EntityInLevelCallback;
        static HANGING_ENTITY: $Predicate<$Entity>;
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
        constructor(entityType: $EntityType<$HangingEntity>, level: $Level);
        constructor(entityType: $EntityType<$HangingEntity>, level: $Level, pos: $BlockPos_);
    }
    export class $PaintingVariant extends $Record {
        width(): number;
        height(): number;
        area(): number;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$PaintingVariant>>;
        static DIRECT_CODEC: $Codec<$PaintingVariant>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$ByteBuf, $PaintingVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$PaintingVariant>>;
        constructor(arg0: number, arg1: number, arg2: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $PaintingVariant}.
     */
    export type $PaintingVariant_ = { width?: number, height?: number, assetId?: $ResourceLocation_,  } | [width?: number, height?: number, assetId?: $ResourceLocation_, ];
    export class $ItemFrame extends $HangingEntity implements $AccessorMixinItemFrame, $ItemFrameEntityKJS, $ItemFrameAccessor {
        getItem(): $ItemStack;
        /**
         * Return the rotation of the item currently on this frame.
         */
        getRotation(): number;
        getRemoveItemSound(): $SoundEvent;
        getFramedMapId(stack: $ItemStack_): $MapId;
        getRotateItemSound(): $SoundEvent;
        getAddItemSound(): $SoundEvent;
        getFrameItemStack(): $ItemStack;
        /**
         * Checks to make sure the `HangingEntity` can be placed there.
         */
        hasFramedMap(): boolean;
        static getDataItem$lootr_$md$707fe4$1(): $EntityDataAccessor<any>;
        /**
         * Return the rotation of the item currently on this frame.
         */
        getAnalogOutput(): number;
        getPlaceSound(): $SoundEvent;
        getBreakSound(): $SoundEvent;
        setRotation(rotation: number): void;
        setItem(stack: $ItemStack_, updateNeighbours: boolean): void;
        setItem(item: $ItemStack_): void;
        lootr$onItemChanged(item: $ItemStack_): void;
        create$getFrameItemStack(): $ItemStack;
        /**
         * Checks to make sure the `HangingEntity` can be placed there.
         */
        lootr$isFixed(): boolean;
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
        pos: $BlockPos;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        direction: $Direction;
        levelCallback: $EntityInLevelCallback;
        static HANGING_ENTITY: $Predicate<$Entity>;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static NUM_ROTATIONS: number;
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
        constructor(entityType: $EntityType<$ItemFrame>, level: $Level, pos: $BlockPos_, direction: $Direction_);
        constructor(level: $Level, pos: $BlockPos_, facingDirection: $Direction_);
        constructor(entityType: $EntityType<$ItemFrame>, level: $Level);
        get removeItemSound(): $SoundEvent;
        get rotateItemSound(): $SoundEvent;
        get addItemSound(): $SoundEvent;
        get frameItemStack(): $ItemStack;
        static get dataItem$lootr_$md$707fe4$1(): $EntityDataAccessor<any>;
        get analogOutput(): number;
        get placeSound(): $SoundEvent;
        get breakSound(): $SoundEvent;
    }
    export class $Painting extends $HangingEntity implements $VariantHolder<$Holder<$PaintingVariant>> {
        static create(level: $Level, pos: $BlockPos_, direction: $Direction_): ($Painting) | undefined;
        getVariant(): $Holder<$PaintingVariant>;
        setVariant(variant: $Holder_<$PaintingVariant>): void;
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
        static VARIANT_MAP_CODEC: $MapCodec<$Holder<$PaintingVariant>>;
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
        pos: $BlockPos;
        static VARIANT_CODEC: $Codec<$Holder<$PaintingVariant>>;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        eyeHeight: number;
        minorHorizontalCollision: boolean;
        static DEFAULT_BB_HEIGHT: number;
        direction: $Direction;
        levelCallback: $EntityInLevelCallback;
        static HANGING_ENTITY: $Predicate<$Entity>;
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
        static DEPTH: number;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        constructor(level: $Level, pos: $BlockPos_);
        constructor(level: $Level, pos: $BlockPos_, direction: $Direction_, variant: $Holder_<$PaintingVariant>);
        constructor(entityType: $EntityType<$Painting>, level: $Level);
    }
    export class $BlockAttachedEntity extends $Entity {
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        survives(): boolean;
        handler$zbl000$openpartiesandclaims$onMove(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        dropItem(entity: $Entity | null): void;
        /**
         * Called to update the entity's position/logic.
         */
        recalculateBoundingBox(): void;
        getPos(): $BlockPos;
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
        pos: $BlockPos;
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
        constructor(entityType: $EntityType<$BlockAttachedEntity>, level: $Level);
        constructor(entityType: $EntityType<$BlockAttachedEntity>, level: $Level, pos: $BlockPos_);
    }
}
