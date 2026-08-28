import { $Goal, $PanicGoal, $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $Long2ObjectMap, $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $Sensing } from "@package/net/minecraft/world/entity/ai/sensing";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $IEntityDataHolder } from "@package/com/natamus/collective_common_neoforge/data";
import { $ListTag, $CompoundTag_, $Tag, $CompoundTag, $Tag_ } from "@package/net/minecraft/nbt";
import { $MarkerEntityExt } from "@package/com/moulberry/axiom/hooks";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $FeatureElement, $FeatureFlag, $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $CellHasher } from "@package/dev/lambdaurora/lambdynlights/engine";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $EntityExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_collision";
import { $AttachmentHolder } from "@package/net/neoforged/neoforge/attachment";
import { $Panda, $Fox, $SnowGolem, $Wolf, $Animal, $Cod, $Chicken, $Cat, $Squid, $Sheep, $Bee, $Dolphin, $Parrot, $Turtle, $Salmon, $Pufferfish, $IronGolem, $Ocelot, $PolarBear, $Cow, $Pig, $TropicalFish, $MushroomCow, $Rabbit } from "@package/net/minecraft/world/entity/animal";
import { $ILivingEntityExtension, $IEntityExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Brain$Provider, $Brain } from "@package/net/minecraft/world/entity/ai";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $EntityAccessor } from "@package/net/createmod/ponder/mixin/accessor";
import { $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $Component_, $HoverEvent, $Component } from "@package/net/minecraft/network/chat";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $PartEntity } from "@package/net/neoforged/neoforge/entity";
import { $MobEffectInstance, $MobEffect } from "@package/net/minecraft/world/effect";
import { $EntityExtension as $EntityExtension$1 } from "@package/foundry/veil/ext";
import { $TheFasterEntityCollisionContext } from "@package/dev/ryanhcode/sable/mixinhelpers/entity/entity_collision";
import { $Snowball, $Projectile, $ShulkerBullet, $FishingHook, $WitherSkull, $DragonFireball, $SmallFireball, $SpectralArrow, $LargeFireball, $FireworkRocketEntity, $ThrownExperienceBottle, $EyeOfEnder, $Arrow, $ThrownEgg, $ThrownPotion, $ThrownTrident, $EvokerFangs, $ProjectileDeflection, $LlamaSpit, $ThrownEnderpearl } from "@package/net/minecraft/world/entity/projectile";
import { $CommandSourceStack, $CommandSource } from "@package/net/minecraft/commands";
import { $DamageContainer } from "@package/net/neoforged/neoforge/common/damagesource";
import { $SubLevelEntityCollision$CollisionInfo } from "@package/dev/ryanhcode/sable/sublevel/entity_collision";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $Husk, $Evoker, $Drowned, $WitherSkeleton, $Creeper, $Shulker, $Endermite, $Spider, $Blaze, $EnderMan, $MagmaCube, $Witch, $Bogged, $Vindicator, $Zombie, $Strider, $Guardian, $Slime, $Stray, $ZombifiedPiglin, $Silverfish, $Zoglin, $CaveSpider, $Skeleton, $Illusioner, $ZombieVillager, $Pillager, $ElderGuardian, $Ravager, $Phantom, $Vex, $Ghast, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $Vector3d, $Vector3f, $Quaternionf } from "@package/org/joml";
import { $EntityCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $ILivingEntityMixin } from "@package/me/alexdevs/classicPeripherals/mixinInterface";
import { $AccessorEntity } from "@package/net/darkhax/bookshelf/common/mixin/access/entity";
import { $EntityTypeMethods, $EntityMethods } from "@package/forge/me/thosea/badoptimizations/interfaces";
import { $GameEvent, $DynamicGameEventListener } from "@package/net/minecraft/world/level/gameevent";
import { $AccessorEntity as $AccessorEntity$1 } from "@package/top/theillusivec4/curios/mixin/core";
import { $Attribute, $AttributeMap, $AttributeSupplier$Builder, $AttributeInstance, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $LivingEntityAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Painting, $ArmorStand, $ItemFrame, $GlowItemFrame, $LeashFenceKnotEntity } from "@package/net/minecraft/world/entity/decoration";
import { $UUID_, $Set_, $List, $Collection_, $List_, $Iterator, $UUID, $Optional, $Stack, $Map, $Map_, $Collection, $Set } from "@package/java/util";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $Donkey, $Llama, $Mule, $ZombieHorse, $Horse, $SkeletonHorse, $TraderLlama } from "@package/net/minecraft/world/entity/animal/horse";
import { $HolderLookup$Provider, $Direction, $Holder_, $BlockPos, $HolderSet_, $BlockPos_, $Holder$Reference, $Vec3i, $Holder, $Direction$Axis_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $LightSourceSettingEntry } from "@package/dev/lambdaurora/lambdynlights/config";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $Enum, $Iterable, $Class, $Object, $Record } from "@package/java/lang";
import { $EntityAccessor as $EntityAccessor$1 } from "@package/dev/tr7zw/transition/mixin";
import { $ChunkPos, $LevelReader, $EntityGetter, $Level, $ServerLevelAccessor, $Explosion, $LevelAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $EntityVisualizer } from "@package/dev/engine_room/flywheel/api/visualization";
import { $AzAnimatorAccessor, $AzAnimator } from "@package/mod/azure/azurelib/common/animation";
import { $Fluid, $FluidState, $PushReaction } from "@package/net/minecraft/world/level/material";
import { $CustomData } from "@package/net/minecraft/world/item/component";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $PrimedTnt, $ItemEntity, $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $KubeRayTraceResult, $EntityPotionEffectsJS } from "@package/dev/latvian/mods/kubejs/entity";
import { $SynchedEntityData$Builder, $SyncedDataHolder, $EntityDataAccessor_, $EntityDataAccessor, $SynchedEntityData, $SynchedEntityData$DataValue_ } from "@package/net/minecraft/network/syncher";
import { $FoodProperties_ } from "@package/net/minecraft/world/food";
import { $EntityStickExtension, $LivingEntityStickExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entities_stick_sublevels";
import { $Tadpole, $Frog } from "@package/net/minecraft/world/entity/animal/frog";
import { $ResourceKey, $ResourceKey_, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $DimensionTransition_, $DimensionTransition } from "@package/net/minecraft/world/level/portal";
import { $EntityAccess } from "@package/snownee/jade/mixin";
import { $ExtensionHolder } from "@package/dev/tr7zw/transition/mc/extending";
import { $ChangeSubscriber$CountChangeSubscriber } from "@package/net/caffeinemc/mods/lithium/common/util/change_tracking";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $DamageSource, $DamageSources, $DamageSource_, $CombatTracker } from "@package/net/minecraft/world/damagesource";
import { $Codec, $Dynamic } from "@package/com/mojang/serialization";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $BreezeWindCharge, $WindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $DisplayAccessor } from "@package/com/moulberry/axiom/mixin";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $EntityAccessor as $EntityAccessor$3 } from "@package/net/mehvahdjukaar/amendments/mixins";
import { $DynamicLightHandlerHolder } from "@package/dev/lambdaurora/lambdynlights/accessor";
import { $StringRepresentable$EnumCodec, $FormattedCharSequence_, $Brightness, $FormattedCharSequence, $RandomSource, $Brightness_, $OptionEnum, $StringRepresentable } from "@package/net/minecraft/util";
import { $InteractionHand_, $Nameable, $Container, $InteractionResult, $DifficultyInstance, $InteractionHand } from "@package/net/minecraft/world";
import { $CrashReportCategory, $BlockUtil$FoundRectangle } from "@package/net/minecraft";
import { $SoundEvent, $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $EntityAccessor as $EntityAccessor$4 } from "@package/net/caffeinemc/mods/lithium/mixin/block/hopper";
import { $MobAccessor } from "@package/net/p3pp3rf1y/sophisticatedbackpacks/mixin";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Cullable } from "@package/dev/tr7zw/entityculling/versionless/access";
import { $EntityAccess as $EntityAccess$1, $EntityInLevelCallback, $EntityTypeTest } from "@package/net/minecraft/world/level/entity";
import { $SoundAction, $IShearable, $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $ProjectileWeaponItem, $ItemStack_, $ItemStack, $ItemDisplayContext_, $ItemDisplayContext, $Item } from "@package/net/minecraft/world/item";
import { $EquipmentEntity, $EquipmentEntity$TickableEnchantmentTrackingEntity, $NavigatingEntity, $EquipmentEntity$EquipmentTrackingEntity } from "@package/net/caffeinemc/mods/lithium/common/entity";
import { $ReputationEventType } from "@package/net/minecraft/world/entity/ai/village";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $EntityExtension as $EntityExtension$2 } from "@package/dev/ryanhcode/sable/mixinterface";
import { $EntityMovementExtension, $LivingEntityMovementExtension } from "@package/dev/ryanhcode/sable/mixinterface/entity/entity_sublevel_collision";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $InjectedEntityTypeExtension } from "@package/dev/architectury/extensions/injected";
import { $EnchantmentLocationBasedEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Portal_, $Mirror_, $Block, $Portal$Transition, $Rotation_ } from "@package/net/minecraft/world/level/block";
import { $EntityKJS, $EntityTypeKJS, $LivingEntityKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Transformation } from "@package/com/mojang/math";
import { $AABB_, $Vec3_, $HitResult, $AABB, $Vec3, $Vec2 } from "@package/net/minecraft/world/phys";
import { $MinecartFurnace, $MinecartHopper, $MinecartChest, $MinecartTNT, $MinecartCommandBlock, $Boat, $ChestBoat, $MinecartSpawner, $Minecart } from "@package/net/minecraft/world/entity/vehicle";
import { $EnderDragon, $EndCrystal } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $MoveControl, $LookControl, $JumpControl, $BodyRotationControl } from "@package/net/minecraft/world/entity/ai/control";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $FabricEntityTypeImpl, $FabricEntityTypeImpl$Builder, $FabricEntityTypeImpl$Builder$Mob, $FabricEntityTypeImpl$Builder$Living } from "@package/net/fabricmc/fabric/impl/object/builder";
import { $ChunkRebuildStatus } from "@package/dev/lambdaurora/lambdynlights/engine/scheduler";
import { $EntityArrayList } from "@package/dev/latvian/mods/kubejs/player";
import { $EntityData, $IEntity as $IEntity$1 } from "@package/xaero/pac/common/entity";
import { $FabricEntityType$Builder } from "@package/net/fabricmc/fabric/api/object/builder/v1/entity";
import { $EntityTypeExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $IntFunction, $Predicate_, $Function_, $Supplier_, $BiConsumer_, $ToIntFunction_, $Consumer_, $Predicate, $Consumer, $BiPredicate_ } from "@package/java/util/function";
import { $ServerEntity, $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $Object2DoubleMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ParticleEmitter } from "@package/foundry/veil/api/quasar/particle";
import { $PathNavigation } from "@package/net/minecraft/world/entity/ai/navigation";
import { $ICitadelDataEntity } from "@package/com/github/alexthe666/citadel/server/entity";
import { $Heightmap$Types_, $Heightmap$Types } from "@package/net/minecraft/world/level/levelgen";
import { $LootParams, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $SpatialLookupEntry } from "@package/dev/lambdaurora/lambdynlights/engine/lookup";
import { $DynamicLightSource } from "@package/dev/lambdaurora/lambdynlights";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $Logger } from "@package/org/slf4j";
import { LocalPlayer, AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $DisplayAccessor as $DisplayAccessor$1 } from "@package/dev/tr7zw/entityculling/mixin";
import { $PiglinBrute, $Piglin } from "@package/net/minecraft/world/entity/monster/piglin";
import { $EntityAnchorArgument$Anchor_ } from "@package/net/minecraft/commands/arguments";
import { $LivingEntityAccessor as $LivingEntityAccessor$1, $EntityAccessor as $EntityAccessor$2 } from "@package/net/mehvahdjukaar/supplementaries/mixins";
import { $IEntity } from "@package/com/jesz/createdieselgenerators/mixin_interfaces";
import { $VecDeltaCodec, $ClientboundAddEntityPacket, $ClientGamePacketListener } from "@package/net/minecraft/network/protocol/game";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";
import { $Villager, $WanderingTrader } from "@package/net/minecraft/world/entity/npc";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $HaliteCurse } from "@package/net/orcinus/galosphere/api";
import { $Stream } from "@package/java/util/stream";
import { $LivingEntityAccessor as $LivingEntityAccessor$2 } from "@package/umpaz/brewinandchewin/common/mixin";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $PotionContents_, $PotionContents } from "@package/net/minecraft/world/item/alchemy";
import { $PersistenceAccesssor } from "@package/net/spudacious5705/abovethecloudstweaks/mixin";
import { $PlayerTeam, $ScoreHolder, $Team } from "@package/net/minecraft/world/scores";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
export * as ai from "@package/net/minecraft/world/entity/ai";
export * as animal from "@package/net/minecraft/world/entity/animal";
export * as projectile from "@package/net/minecraft/world/entity/projectile";
export * as npc from "@package/net/minecraft/world/entity/npc";
export * as boss from "@package/net/minecraft/world/entity/boss";
export * as player from "@package/net/minecraft/world/entity/player";
export * as monster from "@package/net/minecraft/world/entity/monster";
export * as decoration from "@package/net/minecraft/world/entity/decoration";
export * as vehicle from "@package/net/minecraft/world/entity/vehicle";
export * as schedule from "@package/net/minecraft/world/entity/schedule";
export * as ambient from "@package/net/minecraft/world/entity/ambient";
export * as raid from "@package/net/minecraft/world/entity/raid";
export * as item from "@package/net/minecraft/world/entity/item";

declare module "@package/net/minecraft/world/entity" {
    export class $GlowSquid extends $Squid {
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getDarkTicksRemaining(): number;
        static checkGlowSquidSpawnRules(glowSquid: $EntityType<$LivingEntity>, level: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
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
        tentacleAngle: number;
        goalSelector: $GoalSelector;
        handDropChances: number[];
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
        oldTentacleAngle: number;
        armorDropChances: number[];
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zBodyRot: number;
        boardingCooldown: number;
        zo: number;
        xBodyRot: number;
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
        zBodyRotO: number;
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
        xBodyRotO: number;
        static LIVING_ENTITY_FLAG_IS_USING: number;
        tentacleMovement: number;
        bodyArmorDropChance: number;
        lastDamageStamp: number;
        levelCallback: $EntityInLevelCallback;
        oldTentacleMovement: number;
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
        constructor(entityType: $EntityType<$GlowSquid>, level: $Level);
        get darkTicksRemaining(): number;
    }
    /**
     * @return null or the LivingEntity it was ignited by
     */
    export class $LivingEntity extends $Entity implements $Attackable, $ILivingEntityExtension, $LivingEntityAccessor$1, $ILivingEntityMixin, $EquipmentEntity, $ChangeSubscriber$CountChangeSubscriber<any>, $EquipmentEntity$TickableEnchantmentTrackingEntity, $EquipmentEntity$EquipmentTrackingEntity, $LivingEntityAccessor$2, $HaliteCurse, $ICitadelDataEntity, $LivingEntityKJS, $LivingEntityAccessor, $LivingEntityStickExtension, $LivingEntityMovementExtension {
        getAttributes(): $AttributeMap;
        getAttribute(attribute: $Holder_<$Attribute>): $AttributeInstance;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        aiStep(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isBlocking(): boolean;
        handler$ccd000$classicperipherals$classicPeripherals$addData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$ccd000$classicperipherals$classicPeripherals$readData(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        hasInfiniteMaterials(): boolean;
        tickRidden(player: $Player, travelVector: $Vec3_): void;
        /**
         * Called when the entity picks up an item.
         */
        take(entity: $Entity, amount: number): void;
        getAttributeValue(attribute: $Holder_<$Attribute>): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getScale(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxHealth(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        skipDropExperience(): void;
        brainProvider(): $Brain$Provider<never>;
        canAttackType(entityType: $EntityType<never>): boolean;
        getActiveEffects(): $Collection<$MobEffectInstance>;
        onChangedBlock(level: $ServerLevel, pos: $BlockPos_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tickEffects(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDropLoot(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tryAddFrost(): void;
        /**
         * Decrements the entity's air supply when underwater
         */
        increaseAirSupply(currentAir: number): number;
        getLastAttacker(): $LivingEntity;
        getLastHurtMob(): $LivingEntity;
        setLastHurtByMob(attacker: $LivingEntity | null): void;
        /**
         * Decrements the entity's air supply when underwater
         */
        decreaseAirSupply(currentAir: number): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getAgeScale(): number;
        setLastHurtMob(vehicle: $Entity): void;
        setDiscardFriction(includeHeight: boolean): void;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getSwimAmount(partialTick: number): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        hasLandedInLiquid(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeFrost(): void;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        sanitizeScale(partialTick: number): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAffectedByFluids(): boolean;
        setNoActionTime(ticks: number): void;
        doesEmitEquipEvent(slot: $EquipmentSlot_): boolean;
        getSleepingPos(): ($BlockPos) | undefined;
        getLastHurtByMob(): $LivingEntity;
        onEquipItem(slot: $EquipmentSlot_, oldItem: $ItemStack_, newItem: $ItemStack_): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getNoActionTime(): number;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        actuallyHurt(damageSource: $DamageSource_, damageAmount: number): void;
        getItemBySlot(slot: $EquipmentSlot_): $ItemStack;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBeSeenByAnyone(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        removeAllEffects(): boolean;
        onEffectRemoved(effectInstance: $MobEffectInstance): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxAbsorption(): number;
        setSleepingPos(pos: $BlockPos_): void;
        onEffectUpdated(effectInstance: $MobEffectInstance, forced: boolean, entity: $Entity | null): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopSleeping(): void;
        removeEffect(effect: $Holder_<$MobEffect>): boolean;
        onEffectAdded(instance: $MobEffectInstance, entity: $Entity | null): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBeSeenAsEnemy(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isFallFlying(): boolean;
        /**
         * @deprecated
         */
        canBeAffected(effectInstance: $MobEffectInstance): boolean;
        blockUsingShield(attacker: $LivingEntity): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getVoicePitch(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSoundVolume(): number;
        dropAllDeathLoot(level: $ServerLevel, damageSource: $DamageSource_): void;
        getLootTable(): $ResourceKey<$LootTable>;
        indicateDamage(xDistance: number, arg1: number): void;
        getFallSounds(): $LivingEntity$Fallsounds;
        getLootTableSeed(): number;
        getDrinkingSound(stack: $ItemStack_): $SoundEvent;
        getKillCredit(): $LivingEntity;
        /**
         * 1.8.9
         */
        getCombatTracker(): $CombatTracker;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        dropEquipment(): void;
        getKnockback(attacker: $Entity, damageSource: $DamageSource_): number;
        getDeathSound(): $SoundEvent;
        createWitherRose(attacker: $LivingEntity | null): void;
        /**
         * Called when the mob's health reaches 0.
         */
        playHurtSound(damageSource: $DamageSource_): void;
        getHurtSound(damageSource: $DamageSource_): $SoundEvent;
        blockedByShield(attacker: $LivingEntity): void;
        dropExperience(vehicle: $Entity | null): void;
        dropFromLootTable(damageSource: $DamageSource_, hitByPlayer: boolean): void;
        doHurtEquipment(damageSource: $DamageSource_, damageAmount: number, ...slots: $EquipmentSlot_[]): void;
        getArmorSlots(): $Iterable<$ItemStack>;
        getHandSlots(): $Iterable<$ItemStack>;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpPower(): number;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getJumpPower(partialTick: number): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        onClimbable(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getArrowCount(): number;
        setItemSlot(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateSwingTime(): void;
        setItemInHand(hand: $InteractionHand_, stack: $ItemStack_): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getJumpBoostPower(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        jumpFromGround(): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getArmorValue(): number;
        getEatingSound(stack: $ItemStack_): $SoundEvent;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getStingerCount(): number;
        getOffhandItem(): $ItemStack;
        getAllSlots(): $Iterable<$ItemStack>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        playBlockFallSound(): void;
        hasItemInSlot(slot: $EquipmentSlot_): boolean;
        setArrowCount(ticks: number): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        verifyEquippedItem(stack: $ItemStack_): void;
        setStingerCount(ticks: number): void;
        dismountVehicle(vehicle: $Entity): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSensitiveToWater(): boolean;
        getRiddenSpeed(player: $Player): number;
        onItemPickup(itemEntity: $ItemEntity): void;
        doHurtTarget(target: $Entity): boolean;
        hasLineOfSight(target: $Entity): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getWaterSlowDown(): number;
        getRiddenInput(player: $Player, travelVector: $Vec3_): $Vec3;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        serverAiStep(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        pushEntities(): void;
        /**
         * @deprecated
         */
        jumpInLiquid(fluidTag: $TagKey_<$Fluid>): void;
        /**
         * @deprecated
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        goDownInWater(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAutoSpinAttack(): boolean;
        canStandOnFluid(fluidState: $FluidState): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getFlyingSpeed(): number;
        tickHeadTurn(yRot: number, animStep: number): number;
        static getSlotForHand(hand: $InteractionHand_): $EquipmentSlot;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getFallFlyingTicks(): number;
        getDismountPoses(): $ImmutableList<$Pose>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onLeaveCombat(): void;
        getUsedItemHand(): $InteractionHand;
        canTakeItem(stack: $ItemStack_): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clearSleepingPos(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canDisableShield(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        completeUsingItem(): void;
        getProjectile(weaponStack: $ItemStack_): $ItemStack;
        randomTeleport(x: number, arg1: number, y: number, arg3: boolean): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTicksUsingItem(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopUsingItem(): void;
        startSleeping(pos: $BlockPos_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onEnterCombat(): void;
        /**
         * Gets the progression of the swing animation, ranges from 0.0 to 1.0.
         */
        getAttackAnim(partialTick: number): number;
        /**
         * Renders broken item particles using the given ItemStack
         */
        updateUsingItem(stack: $ItemStack_): void;
        startUsingItem(hand: $InteractionHand_): void;
        /**
         * Gets the `Direction` for the camera if this entity is sleeping.
         */
        getBedOrientation(): $Direction;
        lithium$notify(stack: $ItemStack_, amount: number): void;
        setHaliteCurse(includeHeight: boolean): void;
        getRfidData(): $Optional<any>;
        setRfidData(arg0: string): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        hasRfidData(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isHaliteCursed(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$setupLerp(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sable$applyLerp(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isDeadOrDying(): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isUsingItem(): boolean;
        getItemInHand(hand: $InteractionHand_): $ItemStack;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        releaseUsingItem(): void;
        getMainHandItem(): $ItemStack;
        getMainArm(): $HumanoidArm;
        setJumping(includeHeight: boolean): void;
        doPush(vehicle: $Entity): void;
        eat(level: $Level, food: $ItemStack_, foodProperties: $FoodProperties_): $ItemStack;
        eat(level: $Level, food: $ItemStack_): $ItemStack;
        getUseItem(): $ItemStack;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        attackable(): boolean;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        hurtHelmet(damageSource: $DamageSource_, damageAmount: number): void;
        heal(yaw: number): void;
        setSpeed(yaw: number): void;
        knockback(strength: number, arg1: number, x: number): void;
        /**
         * Called when the mob's health reaches 0.
         */
        die(damageSource: $DamageSource_): void;
        addEffect(effectInstance: $MobEffectInstance): boolean;
        addEffect(effectInstance: $MobEffectInstance, entity: $Entity | null): boolean;
        makeSound(sound: $SoundEvent | null): void;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getHitbox(): $AABB;
        /**
         * Deals damage to the entity. This will take the armor of the entity into consideration before damaging the health bar.
         */
        hurtArmor(damageSource: $DamageSource_, damageAmount: number): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getHurtDir(): number;
        canUseSlot(slot: $EquipmentSlot_): boolean;
        isHolding(item: $Item): boolean;
        isHolding(predicate: $Predicate_<$ItemStack>): boolean;
        travel(travelVector: $Vec3_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isImmobile(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getSpeed(): number;
        setHealth(yaw: number): void;
        makeBrain(dynamic: $Dynamic<never>): $Brain<never>;
        getBrain(): $Brain<never>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        tickDeath(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isBaby(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getHealth(): number;
        getEffect(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        hasEffect(effect: $Holder_<$MobEffect>): boolean;
        canAttack(target: $LivingEntity): boolean;
        canAttack(livingentity: $LivingEntity, condition: $TargetingConditions): boolean;
        forceAddEffect(instance: $MobEffectInstance, entity: $Entity | null): void;
        handler$zcg000$openpartiesandclaims$onAddEffect(arg0: $MobEffectInstance, arg1: $Entity, arg2: $CallbackInfoReturnable<any>): void;
        handler$zcg000$openpartiesandclaims$onDiePre(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        handler$zcg000$openpartiesandclaims$onDiePost(arg0: $DamageSource_, arg1: $CallbackInfo): void;
        wrapOperation$bfc000$supplementaries$supp$onTravel(arg0: $LivingEntity, arg1: $FluidState, arg2: $Operation_<any>): boolean;
        static resetForwardDirectionOfRelativePortalPosition(deltaMovement: $Vec3_): $Vec3;
        wrapOperation$haj000$sable$onDismountVehicle(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>): void;
        handler$fno000$vinery$modifyJumpBoostFallDamage(fallDistance: number, damageMultiplier: number, cir: $CallbackInfoReturnable<any>): void;
        redirect$haj000$sable$maxAltitude$mixinextras$bridge$461(arg0: number, arg1: number, arg2: $LocalRef<any>): number;
        handler$cca000$fabric_entity_events_v1$injectElytraTick(arg0: $CallbackInfo): void;
        wrapOperation$ehk000$geckolib$allowLazyStackIdParity(arg0: $ItemStack_, arg1: $ItemStack_, arg2: $Operation_<any>): boolean;
        redirect$cbl000$fabric_entity_events_v1$beforeEntityKilled(arg0: $LivingEntity, arg1: $DamageSource_, arg2: number): boolean;
        handler$zcg000$openpartiesandclaims$onDropAllDeathLoot(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        sable$getInheritedVelocity(): $Vector3d;
        static createLivingAttributes(): $AttributeSupplier$Builder;
        getLastDamageSource(): $DamageSource;
        dropCustomDeathLoot(level: $ServerLevel, damageSource: $DamageSource_, recentlyHit: boolean): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDiscardFriction(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getLastHurtByMobTimestamp(): number;
        /**
         * @deprecated
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        canBreatheUnderwater(): boolean;
        getActiveEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getBaseExperienceReward(): number;
        setLastHurtByPlayer(player: $Player | null): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAlwaysExperienceDropper(): boolean;
        isDamageSourceBlocked(damageSource: $DamageSource_): boolean;
        triggerOnDeathMobEffects(reason: $Entity$RemovalReason_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateInvisibilityStatus(): void;
        getVisibilityPercent(lookingEntity: $Entity | null): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        shouldDropExperience(): boolean;
        getExperienceReward(level: $ServerLevel, killer: $Entity | null): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getAbsorptionAmount(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeEffectParticles(): void;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getArmorCoverPercentage(): number;
        removeEffectNoUpdate(effect: $Holder_<$MobEffect>): $MobEffectInstance;
        sendEffectToPassengers(effectInstance: $MobEffectInstance): void;
        setAbsorptionAmount(yaw: number): void;
        hurtCurrentlyUsedShield(yaw: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getLastHurtMobTimestamp(): number;
        removeEffectsCuredBy(arg0: $EffectCure): boolean;
        /**
         * Returns `true` if all the potion effects in the specified collection are ambient.
         */
        static areAllEffectsAmbient(potionEffects: $Collection_<$MobEffectInstance>): boolean;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isInvertedHealAndHarm(): boolean;
        setLivingEntityFlag(key: number, value: boolean): void;
        /**
         * Called when a record starts or stops playing. Used to make parrots start or stop partying.
         */
        setRecordPlayingNearby(jukebox: $BlockPos_, partyParrot: boolean): void;
        getDefaultDimensions(pose: $Pose_): $EntityDimensions;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getUseItemRemainingTicks(): number;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        getArmorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        getLocalBoundsForPose(pose: $Pose_): $AABB;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getCurrentSwingDuration(): number;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        wasExperienceConsumed(): boolean;
        checkAutoSpinAttack(boundingBoxBeforeSpin: $AABB_, boundingBoxAfterSpin: $AABB_): void;
        equipmentHasChanged(oldItem: $ItemStack_, newItem: $ItemStack_): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateEffectVisibility(): void;
        triggerItemUseEffects(stack: $ItemStack_, amount: number): void;
        getLastClimbablePos(): ($BlockPos) | undefined;
        updateWalkAnimation(yaw: number): void;
        doAutoAttackOnTouch(attacker: $LivingEntity): void;
        calculateFallDamage(fallDistance: number, damageMultiplier: number): number;
        /**
         * Reduces damage, depending on armor
         */
        getDamageAfterArmorAbsorb(damageSource: $DamageSource_, damageAmount: number): number;
        lerpHeadRotationStep(lerpHeadSteps: number, lerpYHeadRot: number): void;
        calculateEntityAnimation(includeHeight: boolean): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isAffectedByPotions(): boolean;
        getComfortableFallDistance(health: number): number;
        /**
         * Reduces damage, depending on armor
         */
        getDamageAfterMagicAbsorb(damageSource: $DamageSource_, damageAmount: number): number;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        sable$getLerpTarget(): $Vec3;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        shouldRiderFaceForward(player: $Player): boolean;
        onEquippedItemBroken(item: $Item, slot: $EquipmentSlot_): void;
        lithium$forceUnsubscribe(stack: $ItemStack_, amount: number): void;
        setCitadelEntityData(compound: $CompoundTag_): void;
        getEquipmentSlotForItem(stack: $ItemStack_): $EquipmentSlot;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getCitadelEntityData(): $CompoundTag;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        lithium$onEquipmentChanged(): void;
        lithium$notifyCount(arg0: $ItemStack_, arg1: number, arg2: number): void;
        swing(hand: $InteractionHand_, updateSelf: boolean): void;
        swing(hand: $InteractionHand_): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSleeping(): boolean;
        activeLocationDependentEnchantments(): $Map<$Enchantment, $Set<$EnchantmentLocationBasedEffect>>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateSynchronizedMobEffectParticles(): void;
        handler$fkk000$cataclysm$onCanAttack(arg0: $LivingEntity, arg1: $CallbackInfoReturnable<any>): void;
        handler$zcg000$openpartiesandclaims$onDie(arg0: $ServerLevel, arg1: $DamageSource_, arg2: $CallbackInfo): void;
        handler$jcf000$parcool$onSetSprinting(arg0: boolean, arg1: $CallbackInfo): void;
        handler$hba000$sable$beforeAnimation(arg0: $Vec3_, arg1: $CallbackInfo): void;
        handler$cmh000$lithium$handleStopRiding(arg0: $CallbackInfo): void;
        handler$haj000$sable$jumpFromGround(arg0: $CallbackInfo): void;
        handleRelativeFrictionAndCalculateMovement(deltaMovement: $Vec3_, friction: number): $Vec3;
        handler$gpc001$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        handler$bop000$curios$curio$canFreeze(arg0: $CallbackInfoReturnable<any>): void;
        lithium$notifyAfterEnchantmentChange(stack: $ItemStack_, amount: number): void;
        lithium$updateHasTickableEnchantments(arg0: $ItemStack_, arg1: $ItemStack_): void;
        handler$jcf000$parcool$onClimbable(arg0: $CallbackInfoReturnable<any>): void;
        internalSetAbsorptionAmount(yaw: number): void;
        getFluidFallingAdjustedMovement(gravity: number, arg1: boolean, isFalling: $Vec3_): $Vec3;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isSuppressingSlidingDownLadder(): boolean;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getMaxHeadRotationRelativeToBody(): number;
        redirect$haj000$sable$maxAltitude(arg0: number, arg1: number, arg2: $Entity): number;
        parCool$isLivingOnCustomLadder(arg0: $BlockState_, arg1: $Level, arg2: $BlockPos_, arg3: $LivingEntity): boolean;
        handler$zhl000$etched$onTick(arg0: $CallbackInfo): void;
        lithium$onEquipmentReplaced(arg0: $ItemStack_, arg1: $ItemStack_): void;
        wouldNotSuffocateAtTargetPose(pose: $Pose_): boolean;
        self(): $LivingEntity;
        /**
         * Executes in `LivingEntity#hurt(DamageSource, float)` after all damage and
         * effects have applied. Overriding this method is preferred over overriding the
         * hurt method in custom entities where special behavior is desired after vanilla
         * logic.
         */
        onDamageTaken(damageContainer: $DamageContainer): void;
        /**
         * Performs what to do when an entity attempts to go down or "sink" in a fluid.
         */
        jumpInFluid(type: $FluidType): void;
        /**
         * Performs what to do when an entity attempts to go down or "sink" in a fluid.
         */
        sinkInFluid(type: $FluidType): void;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        moveInFluid(state: $FluidState, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canDrownInFluidType(type: $FluidType): boolean;
        foodEaten(eatenStack: $ItemStack_, food: $FoodProperties_): void;
        damageHeldItem(hand: $InteractionHand_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        damageHeldItem(): void;
        damageHeldItem(hand: $InteractionHand_, amount: number): void;
        rayTrace(): $KubeRayTraceResult;
        rayTraceEntity(filter: $Predicate_<$Entity>): $Entity;
        getOffHandItem(): $ItemStack;
        getEquipment(slot: $EquipmentSlot_): $ItemStack;
        getHeldItem(hand: $InteractionHand_): $ItemStack;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setOffHandItem(stack: $ItemStack_): void;
        /**
         * Sets the entity's maximum health to specified HP.
         * 
         * @param hp The new maximum health of the entity.
         */
        setMaxHealth(yaw: number): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        isUndead(): boolean;
        setEquipment(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        setHeldItem(hand: $InteractionHand_, stack: $ItemStack_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        swing(): void;
        swing(hand: $InteractionHand_): void;
        modifyAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): void;
        canEntityBeSeen(target: $LivingEntity): boolean;
        getAttributeTotalValue(attribute: $Holder_<$Attribute>): number;
        removeAttribute(attribute: $Holder_<$Attribute>, id: $ResourceLocation_): void;
        getAttributeBaseValue(attribute: $Holder_<$Attribute>): number;
        setAttributeBaseValue(attribute: $Holder_<$Attribute>, value: number): void;
        getPotionEffects(): $EntityPotionEffectsJS;
        getMainHandItem(): $ItemStack;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setMainHandItem(stack: $ItemStack_): void;
        getHeadArmorItem(): $ItemStack;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setHeadArmorItem(stack: $ItemStack_): void;
        getReachDistance(): number;
        damageEquipment(slot: $EquipmentSlot_, amount: number): void;
        damageEquipment(slot: $EquipmentSlot_, amount: number, onBroken: $Consumer_<$ItemStack>): void;
        damageEquipment(slot: $EquipmentSlot_): void;
        getChestArmorItem(): $ItemStack;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setChestArmorItem(stack: $ItemStack_): void;
        getLegsArmorItem(): $ItemStack;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setLegsArmorItem(stack: $ItemStack_): void;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setFeetArmorItem(stack: $ItemStack_): void;
        getFeetArmorItem(): $ItemStack;
        isHoldingInAnyHand(itemPredicate: $ItemPredicate_): boolean;
        getTotalMovementSpeed(): number;
        setTotalMovementSpeedMultiplier(renderDistWeight: number): void;
        setDefaultMovementSpeedMultiplier(renderDistWeight: number): void;
        setDefaultMovementSpeed(renderDistWeight: number): void;
        setMovementSpeedAddition(renderDistWeight: number): void;
        getDefaultMovementSpeed(): number;
        /**
         * Renders broken item particles using the given ItemStack
         */
        setUseItem(stack: $ItemStack_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        brewinandchewin$invokeUpdateEffectVisibility(): void;
        /**
         * Returns false if the entity is an armor stand. Returns `true` for all other entity living bases.
         */
        invokeShouldDropLoot(): boolean;
        create$callSpawnItemParticles(stack: $ItemStack_, amount: number): void;
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
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DATA_HEALTH_ID: $EntityDataAccessor<number>;
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
        swimAmount: number;
        verticalCollisionBelow: boolean;
        static DEFAULT_BABY_SCALE: number;
        eyeHeight: number;
        static ATTRIBUTES_FIELD: string;
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
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
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
        constructor(entityType: $EntityType<$LivingEntity>, level: $Level);
        get attributes(): $AttributeMap;
        get blocking(): boolean;
        get scale(): number;
        get activeEffects(): $Collection<$MobEffectInstance>;
        get lastAttacker(): $LivingEntity;
        get ageScale(): number;
        set discardFriction(value: boolean);
        get affectedByFluids(): boolean;
        get maxAbsorption(): number;
        get fallFlying(): boolean;
        get voicePitch(): number;
        get soundVolume(): number;
        get lootTable(): $ResourceKey<$LootTable>;
        get fallSounds(): $LivingEntity$Fallsounds;
        get lootTableSeed(): number;
        get killCredit(): $LivingEntity;
        get combatTracker(): $CombatTracker;
        get deathSound(): $SoundEvent;
        get armorSlots(): $Iterable<$ItemStack>;
        get handSlots(): $Iterable<$ItemStack>;
        get jumpBoostPower(): number;
        get armorValue(): number;
        get offhandItem(): $ItemStack;
        get allSlots(): $Iterable<$ItemStack>;
        get sensitiveToWater(): boolean;
        get waterSlowDown(): number;
        get autoSpinAttack(): boolean;
        get flyingSpeed(): number;
        get fallFlyingTicks(): number;
        get dismountPoses(): $ImmutableList<$Pose>;
        get usedItemHand(): $InteractionHand;
        get ticksUsingItem(): number;
        get bedOrientation(): $Direction;
        set haliteCurse(value: boolean);
        get haliteCursed(): boolean;
        get deadOrDying(): boolean;
        get usingItem(): boolean;
        get mainArm(): $HumanoidArm;
        get hitbox(): $AABB;
        get hurtDir(): number;
        get immobile(): boolean;
        get baby(): boolean;
        get lastHurtByMobTimestamp(): number;
        get activeEffectsMap(): $Map<$Holder<$MobEffect>, $MobEffectInstance>;
        get baseExperienceReward(): number;
        get alwaysExperienceDropper(): boolean;
        get armorCoverPercentage(): number;
        get lastHurtMobTimestamp(): number;
        get invertedHealAndHarm(): boolean;
        get useItemRemainingTicks(): number;
        get armorAndBodyArmorSlots(): $Iterable<$ItemStack>;
        get currentSwingDuration(): number;
        get lastClimbablePos(): ($BlockPos) | undefined;
        get affectedByPotions(): boolean;
        get sleeping(): boolean;
        get suppressingSlidingDownLadder(): boolean;
        get maxHeadRotationRelativeToBody(): number;
        get undead(): boolean;
        get potionEffects(): $EntityPotionEffectsJS;
        get reachDistance(): number;
        get totalMovementSpeed(): number;
        set totalMovementSpeedMultiplier(value: number);
        set defaultMovementSpeedMultiplier(value: number);
        set movementSpeedAddition(value: number);
    }
    export class $SpawnGroupData {
    }
    export interface $SpawnGroupData {
    }
    export class $Display$TextDisplay$CachedInfo extends $Record {
        lines(): $List<$Display$TextDisplay$CachedLine>;
        width(): number;
        constructor(arg0: $List_<$Display$TextDisplay$CachedLine_>, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedInfo}.
     */
    export type $Display$TextDisplay$CachedInfo_ = { lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number,  } | [lines?: $List_<$Display$TextDisplay$CachedLine_>, width?: number, ];
    export class $EntityAttachments$Builder {
        build(width: number, height: number): $EntityAttachments;
        attach(attachment: $EntityAttachment_, poas: $Vec3_): $EntityAttachments$Builder;
        attach(attachment: $EntityAttachment_, x: number, y: number, z: number): $EntityAttachments$Builder;
        constructor();
    }
    export class $EntityEvent {
        static STOP_ATTACKING: number;
        static REDUCED_DEBUG_INFO: number;
        static OFFER_FLOWER: number;
        static MAINHAND_BREAK: number;
        static DEATH: number;
        static DOLPHIN_LOOKING_FOR_TREASURE: number;
        static JUMP: number;
        static SHAKE_WETNESS: number;
        static SILVERFISH_MERGE_ANIM: number;
        static TRUSTING_SUCCEEDED: number;
        static HONEY_SLIDE: number;
        static HEAD_BREAK: number;
        static STOP_OFFER_FLOWER: number;
        static TRUSTING_FAILED: number;
        static EAT_GRASS: number;
        static TALISMAN_ACTIVATE: number;
        static TENDRILS_SHIVER: number;
        static SONIC_CHARGE: number;
        static OFFHAND_BREAK: number;
        static FEET_BREAK: number;
        static PERMISSION_LEVEL_GAMEMASTERS: number;
        static VILLAGER_ANGRY: number;
        static CANCEL_SHAKE_WETNESS: number;
        static LOVE_HEARTS: number;
        static ZOMBIE_CONVERTING: number;
        static PERMISSION_LEVEL_ALL: number;
        static POOF: number;
        static RAVAGER_STUNNED: number;
        static TELEPORT: number;
        static FISHING_ROD_REEL_IN: number;
        static ARMADILLO_PEEK: number;
        static SQUID_ANIM_SYNCH: number;
        static GUARDIAN_ATTACK_SOUND: number;
        static START_RAM: number;
        static VILLAGER_HAPPY: number;
        static SHIELD_DISABLED: number;
        static ARMORSTAND_WOBBLE: number;
        static IN_LOVE_HEARTS: number;
        static BODY_BREAK: number;
        static START_ATTACKING: number;
        static FIREWORKS_EXPLODE: number;
        static ATTACK_BLOCKED: number;
        static USE_ITEM_COMPLETE: number;
        static TAMING_FAILED: number;
        static SNIFFER_DIGGING_SOUND: number;
        static CHEST_BREAK: number;
        static END_RAM: number;
        static PERMISSION_LEVEL_ADMINS: number;
        static TAMING_SUCCEEDED: number;
        static FOX_EAT: number;
        static FULL_DEBUG_INFO: number;
        static PERMISSION_LEVEL_OWNERS: number;
        static LEGS_BREAK: number;
        static SWAP_HANDS: number;
        static PERMISSION_LEVEL_MODERATORS: number;
        static VILLAGER_SWEAT: number;
        static HONEY_JUMP: number;
        static WITCH_HAT_MAGIC: number;
        constructor();
    }
    export class $Entity extends $AttachmentHolder implements $SyncedDataHolder, $Nameable, $EntityAccess$1, $CommandSource, $ScoreHolder, $IEntityExtension, $EntityExtension$1, $EntityAccessor$2, $AccessorEntity$1, $ExtensionHolder, $EntityAccessor$1, $EntityAccessor$4, $EntityAccessor, $Cullable, $AccessorEntity, $DynamicLightSource, $EntityKJS, $EntityAccessor$3, $EntityStickExtension, $EntityExtension, $EntityExtension$2, $AzAnimatorAccessor<any, any>, $EntityAccess, $IEntity, $IEntityDataHolder, $EntityMovementExtension, $EntityMethods, $IEntity$1 {
        getSlot(slot: number): $SlotAccess;
        getName(): $Component;
        remove(reason: $Entity$RemovalReason_): void;
        load(compound: $CompoundTag_): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        position(): $Vec3;
        getTypeName(): $Component;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAlive(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getId(): number;
        /**
         * Writes this entity to NBT, unless it has been removed or it is a passenger. Also writes this entity's passengers, and the entity type ID (so the produced NBT is sufficient to recreate the entity).
         * To always write the entity, use `#writeWithoutTypeId`.
         * 
         * @return True if the entity was written (and the passed compound should be saved)" false if the entity was not written.
         */
        save(compound: $CompoundTag_): boolean;
        getEntityType(): $EntityType<never>;
        is(passenger: $Entity): boolean;
        pick(hitDistance: number, arg1: number, partialTicks: boolean): $HitResult;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        collide(vec: $Vec3_): $Vec3;
        /**
         * Transforms the entity's current yaw with the given Rotation and returns it. This does not have a side-effect.
         */
        rotate(transformRotation: $Rotation_): number;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        hasPermissions(flag: number): boolean;
        addMotion(x: number, arg1: number, y: number): void;
        push(addend: $Vec3_): void;
        push(passenger: $Entity): void;
        getDisplayName(): $Component;
        move(type: $MoverType_, pos: $Vec3_): void;
        getExtension(key: $Object, type: $Class<any>): $Object;
        setExtension(key: $Object, value: $Object): void;
        /**
         * Transforms the entity's current yaw with the given Mirror and returns it. This does not have a side-effect.
         */
        mirror(transformMirror: $Mirror_): number;
        getDimensions(pose: $Pose_): $EntityDimensions;
        /**
         * Gets called every tick from main Entity class
         */
        kill(): void;
        getPosition(partialTicks: number): $Vec3;
        getX(scale: number): number;
        getX(): number;
        getCapability<T, C>(arg0: $EntityCapability<T, C>, arg1: C): T;
        getCapability<T>(arg0: $EntityCapability<T, void>): T;
        isSupportedBy(pos: $BlockPos_): boolean;
        setLevel(level: $Level): void;
        /**
         * Gets called every tick from main Entity class
         */
        discard(): void;
        removeTag(tag: string): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDescending(): boolean;
        setId(ticks: number): void;
        getY(): number;
        getY(scale: number): number;
        /**
         * Gets called every tick from main Entity class
         */
        setTimeout(): void;
        /**
         * Gets called every tick from main Entity class
         */
        tick(): void;
        moveToBlockPos(pos: $BlockPos_, yRot: number, xRot: number): void;
        moveTo(pos: $Vec3_, yRot: number, xRot: number): void;
        moveTo(x: number, arg1: number, y: number): void;
        moveTo(addend: $Vec3_): void;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        setPositionAndRotation(x: number, arg1: number, y: number, arg3: number, z: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSilent(): boolean;
        setSilent(downwards: boolean): void;
        setUUID(uniqueId: $UUID_): void;
        static collideBoundingBox(entity: $Entity, vec: $Vec3_, collisionBox: $AABB_, level: $Level, potentialHits: $List_<any>): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isForcedVisible(): boolean;
        veil$getEmitters(): $List<any>;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getDynamicLightId(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOutOfCamera(): boolean;
        getDynamicLightX(): number;
        setOutOfCamera(downwards: boolean): void;
        /**
         * Gets called every tick from main Entity class
         */
        resetDynamicLight(): void;
        getDynamicLightY(): number;
        veil$addEmitter(arg0: $ParticleEmitter): void;
        getDynamicLightZ(): number;
        getTurretPos(): $BlockPos;
        getAnimatorOrNull(): $AzAnimator<any, any>;
        setTurretPos(pos: $BlockPos_): void;
        setXaero_OPAC_data(arg0: $EntityData): void;
        sable$setPosField(addend: $Vec3_): void;
        setAnimator(arg0: $AzAnimator<any, any>): void;
        bo$getRenderer(): $EntityRenderer<any>;
        getXaero_OPAC_data(): $EntityData;
        /**
         * Gets called every tick from main Entity class
         */
        reapplyPosition(): void;
        damageSources(): $DamageSources;
        defineSynchedData(builder: $SynchedEntityData$Builder): void;
        getPercentFrozen(): number;
        /**
         * Gets called every tick from main Entity class
         */
        extinguish(): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getDeltaMovement(): $Vec3;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getAirSupply(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTicksFrozen(): number;
        checkFallDamage(y: number, arg1: boolean, onGround: $BlockState_, state: $BlockPos_): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getMaxAirSupply(): number;
        /**
         * Returns whether the fluid type the entity is currently in matches
         * the specified condition.
         */
        isInFluidType(predicate: $BiPredicate_<$FluidType, number>, forAllTypes: boolean): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInFluidType(): boolean;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getBoundingBox(): $AABB;
        getSoundSource(): $SoundSource;
        /**
         * Returns `true` if the flag is active for the entity. Known flags: 0: burning 1: sneaking 2: unused 3: sprinting 4: swimming 5: invisible 6: glowing 7: elytra flying
         */
        getSharedFlag(flag: number): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInvulnerable(): boolean;
        /**
         * Returns whether this Entity is invulnerable to the given DamageSource.
         */
        isInvulnerableTo(source: $DamageSource_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInvisible(): boolean;
        /**
         * Returns the string that identifies this Entity's class
         */
        getStringUuid(): string;
        /**
         * Enable or disable an entity flag, see `#getEntityFlag` to read the known flags.
         */
        setSharedFlag(flag: number, set: boolean): void;
        getWeaponItem(): $ItemStack;
        setDeltaMovement(addend: $Vec3_): void;
        setMotion(x: number, arg1: number, y: number): void;
        awardKillScore(killed: $Entity, scoreValue: number, source: $DamageSource_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasCustomName(): boolean;
        captureDrops(): $Collection<$ItemEntity>;
        captureDrops(captureDrops: $Collection_<$ItemEntity> | null): $Collection<$ItemEntity>;
        getYHeadRot(): number;
        spawnAtLocation(stack: $ItemStack_): $ItemEntity;
        /**
         * Drops an item at the position of the entity.
         */
        spawnAtLocation(stack: $ItemStack_, offsetY: number): $ItemEntity;
        animateHurt(yaw: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        onBelowWorld(): void;
        getBlockJumpFactor(): number;
        /**
         * Handles an entity event received from a `ClientboundEntityEventPacket`.
         */
        handleEntityEvent(id: number): void;
        getBbHeight(): number;
        handleDamageEvent(damageSource: $DamageSource_): void;
        setSprinting(downwards: boolean): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getMaxFallDistance(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldShowName(): boolean;
        causeFallDamage(fallDistance: number, multiplier: number, source: $DamageSource_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPassenger(): boolean;
        lerpTargetYRot(): number;
        setTicksFrozen(ticks: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        resetFallDistance(): void;
        addDeltaMovement(addend: $Vec3_): void;
        getInBlockState(): $BlockState;
        moveRelative(amount: number, relative: $Vec3_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isEffectiveAi(): boolean;
        /**
         * @deprecated
         */
        getFluidHeight(fluidTag: $TagKey_<$Fluid>): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSprinting(): boolean;
        getDefaultGravity(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFullyFrozen(): boolean;
        lerpTargetX(): number;
        lerpTargetY(): number;
        lerpTargetZ(): number;
        lerpTargetXRot(): number;
        /**
         * Returns how much the velocity of the fluid should be scaled by
         * when applied to an entity.
         */
        getFluidTypeHeight(type: $FluidType): number;
        /**
         * Gets called every tick from main Entity class
         */
        refreshDimensions(): void;
        recreateFromPacket(packet: $ClientboundAddEntityPacket): void;
        getViewYRot(partialTick: number): number;
        igniteForTicks(ticks: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVisuallySwimming(): boolean;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        makeBoundingBox(): $AABB;
        canUsePortal(allowPassengers: boolean): boolean;
        /**
         * Sets the entity's body yaw.
         */
        setBodyYaw(yaw: number): void;
        setYHeadRot(yaw: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isShiftKeyDown(): boolean;
        getBlockStateOn(): $BlockState;
        getEntityData(): $SynchedEntityData;
        /**
         * Gets called every tick from main Entity class
         */
        dynamicLightTick(): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getLuminance(): number;
        setLuminance(ticks: number): void;
        killedEntity(level: $ServerLevel, entity: $LivingEntity): boolean;
        getPickResult(): $ItemStack;
        /**
         * Returns the fluid that is on the entity's eyes.
         */
        getEyeInFluidType(): $FluidType;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getForgePersistentData(): $CompoundTag;
        /**
         * Returns the string that identifies this Entity's class
         */
        getEncodeId(): string;
        /**
         * Writes this entity, including passengers, to NBT, regardless as to whether it is removed or a passenger. Does **not** include the entity's type ID, so the NBT is insufficient to recreate the entity using `AnvilChunkLoader#readWorldEntity`. Use `#writeUnlessPassenger` for that purpose.
         */
        saveWithoutId(compound: $CompoundTag_): $CompoundTag;
        /**
         * @deprecated
         * Return whether this entity should be rendered as on fire.
         */
        isPushedByFluid(): boolean;
        sable$plotLerpTo(arg0: $Vec3_, arg1: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAddedToLevel(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        onAddedToLevel(): void;
        /**
         * Gets called every tick from main Entity class
         */
        onRemovedFromLevel(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canStartSwimming(): boolean;
        sendSystemMessage(component: $Component_): void;
        distanceToSqr(vec: $Vec3_): number;
        /**
         * Gets the squared distance to the position.
         */
        distanceToSqr(x: number, arg1: number, y: number): number;
        /**
         * Measures the **square** of a distance of entity to another entity.
         * Returns the squared distance to the entity.
         */
        distanceToEntitySqr(entity: $Entity): number;
        setOnGround(downwards: boolean): void;
        getCustomName(): $Component;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasGlowingTag(): boolean;
        chunkPosition(): $ChunkPos;
        /**
         * Gets called every tick from main Entity class
         */
        checkBelowWorld(): void;
        igniteForSeconds(yaw: number): void;
        getSwimSound(): $SoundEvent;
        /**
         * Gets called every tick from main Entity class
         */
        waterSwimSound(): void;
        playSwimSound(yaw: number): void;
        onInsideBlock(state: $BlockState_): void;
        getPositionCodec(): $VecDeltaCodec;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnPortalCooldown(): boolean;
        /**
         * @deprecated
         */
        getOnPosLegacy(): $BlockPos;
        setBoundingBox(bb: $AABB_): void;
        /**
         * Gets called every tick from main Entity class
         */
        handlePortal(): void;
        playStepSound(pos: $BlockPos_, state: $BlockState_): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getPortalCooldown(): number;
        /**
         * Gets called every tick from main Entity class
         */
        setPortalCooldown(): void;
        setPortalCooldown(ticks: number): void;
        getSwimSplashSound(): $SoundEvent;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCrouching(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTeamColor(): number;
        /**
         * Gets called every tick from main Entity class
         */
        onClientRemoval(): void;
        /**
         * Gets called every tick from main Entity class
         */
        updateSwimming(): void;
        /**
         * Gets called every tick from main Entity class
         */
        ejectPassengers(): void;
        isColliding(pos: $BlockPos_, state: $BlockState_): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getFireImmuneTicks(): number;
        /**
         * Gets called every tick from main Entity class
         */
        checkInsideBlocks(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isNoGravity(): boolean;
        setNoGravity(downwards: boolean): void;
        /**
         * Gets called every tick from main Entity class
         */
        applyGravity(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        dampensVibrations(): boolean;
        setCustomName(component: $Component_ | null): void;
        onPassengerTurned(passenger: $Entity): void;
        changeDimension(transition: $DimensionTransition_): $Entity;
        calculateUpVector(xRot: number, yRot: number): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        removeVehicle(): void;
        /**
         * Writes this entity to NBT, unless it has been removed or it is a passenger. Also writes this entity's passengers, and the entity type ID (so the produced NBT is sufficient to recreate the entity).
         * To always write the entity, use `#writeWithoutTypeId`.
         * 
         * @return True if the entity was written (and the passed compound should be saved)" false if the entity was not written.
         */
        saveAsPassenger(compound: $CompoundTag_): boolean;
        /**
         * Get entity this is riding
         */
        getFirstPassenger(): $Entity;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterOrRain(): boolean;
        setGlowing(downwards: boolean): void;
        /**
         * Returns the Entity's pitch and yaw as a `Vec2`.
         */
        getRotationVector(): $Vec2;
        /**
         * Called by a player entity when they collide with an entity
         */
        playerTouch(player: $Player): void;
        /**
         * Gets called every tick from main Entity class
         */
        setOldPosAndRot(): void;
        getViewXRot(partialTick: number): number;
        setAirSupply(ticks: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canControlVehicle(): boolean;
        addPassenger(passenger: $Entity): void;
        /**
         * @deprecated
         */
        isEyeInFluid(fluidTag: $TagKey_<$Fluid>): boolean;
        canAddPassenger(passenger: $Entity): boolean;
        setAsInsidePortal(portal: $Portal_, pos: $BlockPos_): void;
        canCollideWith(passenger: $Entity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterOrBubble(): boolean;
        startRiding(passenger: $Entity): boolean;
        startRiding(vehicle: $Entity, force: boolean): boolean;
        absRotateTo(yRot: number, xRot: number): void;
        getUpVector(partialTicks: number): $Vec3;
        /**
         * creates a NBT list from the array of doubles passed to this function
         */
        newDoubleList(...numbers: number[]): $ListTag;
        positionRider(passenger: $Entity): void;
        positionRider(passenger: $Entity, callback: $Entity$MoveFunction_): void;
        hasPassenger(predicate: $Predicate_<$Entity>): boolean;
        hasPassenger(passenger: $Entity): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canBeCollidedWith(): boolean;
        getAttachments(): $EntityAttachments;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        showVehicleHealth(): boolean;
        /**
         * Checks if the offset position from the entity's current position has a collision with a block or a liquid.
         */
        shouldRender(x: number, arg1: number, y: number): boolean;
        /**
         * Returns a new NBTTagList filled with the specified floats
         */
        newFloatList(...numbers: number[]): $ListTag;
        removePassenger(passenger: $Entity): void;
        getPickRadius(): number;
        getRemovalReason(): $Entity$RemovalReason;
        setLevelCallback(levelCallback: $EntityInLevelCallback): void;
        /**
         * Gets called every tick from main Entity class
         */
        unsetRemoved(): void;
        restoreFrom(passenger: $Entity): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldBeSaved(): boolean;
        setSwimming(downwards: boolean): void;
        shouldBlockExplode(explosion: $Explosion, level: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, explosionPower: number): boolean;
        static setViewScale(renderDistWeight: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        acceptsFailure(): boolean;
        getAddEntityPacket(entity: $ServerEntity): $Packet<$ClientGamePacketListener>;
        onAboveBubbleCol(downwards: boolean): void;
        makeStuckInBlock(state: $BlockState_, motionMultiplier: $Vec3_): void;
        setInvulnerable(downwards: boolean): void;
        /**
         * Returns the string that identifies this Entity's class
         */
        getScoreboardName(): string;
        /**
         * @deprecated
         * Gets called every tick from main Entity class
         */
        fixupDimensions(): void;
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        isInvisibleTo(player: $Player): boolean;
        createHoverEvent(): $HoverEvent;
        broadcastToPlayer(player: $ServerPlayer): boolean;
        getEyeHeight(pose: $Pose_): number;
        getEyeHeight(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAttackable(): boolean;
        placePortalTicket(pos: $BlockPos_): void;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getMotionDirection(): $Direction;
        teleportRelative(x: number, arg1: number, y: number): void;
        static getViewScale(): number;
        setShiftKeyDown(downwards: boolean): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVisuallyCrawling(): boolean;
        copyPosition(passenger: $Entity): void;
        ignoreExplosion(explosion: $Explosion): boolean;
        /**
         * Add the given player to the list of players tracking this entity. For instance, a player may track a boss in order to view its associated boss bar.
         */
        stopSeenByPlayer(serverPlayer: $ServerPlayer): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        onlyOpCanSetNbt(): boolean;
        /**
         * Get entity this is riding
         */
        getRootVehicle(): $Entity;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLeashOffset(): $Vec3;
        getLeashOffset(partialTicks: number): $Vec3;
        /**
         * Add the given player to the list of players tracking this entity. For instance, a player may track a boss in order to view its associated boss bar.
         */
        startSeenByPlayer(serverPlayer: $ServerPlayer): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getPermissionLevel(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldInformAdmins(): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        trackingPosition(): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        checkDespawn(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        acceptsSuccess(): boolean;
        setIsInPowderSnow(downwards: boolean): void;
        onExplosionHit(passenger: $Entity | null): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getKnownMovement(): $Vec3;
        mayInteract(level: $Level, pos: $BlockPos_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isAlwaysTicking(): boolean;
        setFluidTypeHeight(arg0: $FluidType, arg1: number): void;
        setInvisible(downwards: boolean): void;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getHorizontalFacing(): $Direction;
        blockPosition(): $BlockPos;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSpectator(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isUnderWater(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isGlowing(): boolean;
        registryAccess(): $RegistryAccess;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getLookAngle(): $Vec3;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getEyePosition(): $Vec3;
        getEyePosition(partialTicks: number): $Vec3;
        getViewVector(partialTicks: number): $Vec3;
        /**
         * Returns the distance to the entity.
         */
        distanceTo(entity: $Entity): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPickable(): boolean;
        getEyeY(): number;
        /**
         * Gets called every tick from main Entity class
         */
        rideTick(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isPushable(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        stopRiding(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canFreeze(): boolean;
        lerpTo(x: number, arg1: number, y: number, arg3: number, z: number, arg5: number): void;
        lerpHeadTo(yaw: number, pitch: number): void;
        hasPose(pose: $Pose_): boolean;
        maxUpStep(): number;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        absMoveTo(x: number, arg1: number, y: number, arg3: number, z: number): void;
        absMoveTo(x: number, arg1: number, y: number): void;
        getPose(): $Pose;
        setRot(yRot: number, xRot: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnFire(): boolean;
        getTeam(): $PlayerTeam;
        getTags(): $Set<string>;
        /**
         * Checks if this `Entity` can trample a `Block`.
         */
        canTrample(state: $BlockState_, pos: $BlockPos_, fallDistance: number): boolean;
        getOnPos(yOffset: number): $BlockPos;
        getOnPos(): $BlockPos;
        isOnSameTeam(passenger: $Entity): boolean;
        /**
         * Returns whether this Entity is on the given scoreboard team.
         */
        isAlliedTo(team: $Team): boolean;
        dismountTo(x: number, arg1: number, y: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        revive(): void;
        addTag(tag: string): boolean;
        nextStep(): number;
        /**
         * Gets called every tick from main Entity class
         */
        unRide(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isVehicle(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFlapping(): boolean;
        setRemoved(reason: $Entity$RemovalReason_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSwimming(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        onFlap(): void;
        turn(yRot: number, arg1: number): void;
        closerThan(entity: $Entity, horizontalDistance: number, arg2: number): boolean;
        closerThan(entity: $Entity, distance: number): boolean;
        setPosRaw(x: number, arg1: number, y: number): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isOnRails(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        lavaHurt(): void;
        canRide(passenger: $Entity): boolean;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        getForward(): $Vec3;
        lerpMotion(x: number, arg1: number, y: number): void;
        thunderHit(level: $ServerLevel, lightning: $LightningBolt): void;
        deflection(projectile: $Projectile): $ProjectileDeflection;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSprint(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isFreezing(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCulled(): boolean;
        setCulled(downwards: boolean): void;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getCommandSenderWorld(): $Level;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getPersistentData(): $CompoundTag;
        createCommandSourceStack(): $CommandSourceStack;
        setOnGroundWithMovement(onGround: boolean, movement: $Vec3_): void;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getDimensionChangingDelay(): number;
        setSharedFlagOnFire(downwards: boolean): void;
        fillCrashReportCategory(category: $CrashReportCategory): void;
        checkSupportingBlock(onGround: boolean, movement: $Vec3_ | null): void;
        isPassengerOfSameVehicle(passenger: $Entity): boolean;
        getLightProbePosition(partialTicks: number): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        repositionEntityAfterLoad(): boolean;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getRemainingFireTicks(): number;
        maybeBackOffFromEdge(vec: $Vec3_, mover: $MoverType_): $Vec3;
        playMuffledStepSound(arg0: $BlockState_, arg1: $BlockPos_): void;
        setRemainingFireTicks(ticks: number): void;
        /**
         * Gets called every tick from main Entity class
         */
        doWaterSplashEffect(): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canBeHitByProjectile(): boolean;
        setCustomNameVisible(downwards: boolean): void;
        getMovementEmission(): $Entity$MovementEmission;
        /**
         * Checks if the entity is in range to render.
         */
        shouldRenderAtSqrDistance(distance: number): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canSpawnSprintParticle(): boolean;
        handler$bbh000$veil$remove(arg0: $CallbackInfo): void;
        /**
         * Gets the horizontal facing direction of this Entity.
         */
        getNearestViewDirection(): $Direction;
        /**
         * Gets called every tick from main Entity class
         */
        spawnSprintParticle(): void;
        playCombinationStepSounds(arg0: $BlockState_, arg1: $BlockState_, arg2: $BlockPos_, arg3: $BlockPos_): void;
        /**
         * Gets called every tick from main Entity class
         */
        processPortalCooldown(): void;
        isHorizontalCollisionMinor(deltaMovement: $Vec3_): boolean;
        adjustSpawnLocation(level: $ServerLevel, pos: $BlockPos_): $BlockPos;
        getVehicleAttachmentPoint(entity: $Entity): $Vec3;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        limitPistonMovement(vec: $Vec3_): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        processFlappingMovement(): void;
        getPistonPushReaction(): $PushReaction;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isIgnoringBlockTriggers(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        displayFireAnimation(): boolean;
        /**
         * @deprecated
         * Return whether this entity should be rendered as on fire.
         */
        couldAcceptPassenger(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSteppingCarefully(): boolean;
        skipAttackInteraction(passenger: $Entity): boolean;
        moveTowardsClosestSpace(x: number, arg1: number, y: number): void;
        getSelfAndPassengers(): $Stream<any>;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        dismountsUnderwater(): boolean;
        getIndirectPassengers(): $Iterable<any>;
        sable$setTrackingSubLevel(arg0: $SubLevel): void;
        getPassengersAndSelf(): $Stream<any>;
        hasIndirectPassenger(passenger: $Entity): boolean;
        canChangeDimensions(oldLevel: $Level, newLevel: $Level): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        touchingUnloadedChunk(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasControllingPassenger(): boolean;
        getRopeHoldPosition(partialTicks: number): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isSuppressingBounce(): boolean;
        getHandHoldingItemAngle(item: $Item): $Vec3;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        countPlayerPassengers(): number;
        /**
         * Get entity this is riding
         */
        getControlledVehicle(): $Entity;
        onInsideBubbleColumn(downwards: boolean): void;
        getDynamicLightPrevX(): number;
        getDynamicLightPrevY(): number;
        sable$getCollisionContext(): $TheFasterEntityCollisionContext;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getLastDynamicLuminance(): number;
        sable$getTrackingSubLevel(): $SubLevel;
        getDynamicLightPrevZ(): number;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        collective_getStored(): $CompoundTag;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getDynamicLightLevel(): $Level;
        setLastDynamicLuminance(ticks: number): void;
        sable$setPosSuperRaw(addend: $Vec3_): void;
        collective_setStored(compound: $CompoundTag_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isRemoved(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        markHurt(): void;
        playSound(sound: $SoundEvent, volume: number, pitch: number): void;
        playSound(sound: $SoundEvent): void;
        setPose(pose: $Pose_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        onGround(): boolean;
        /**
         * Get entity this is riding
         */
        getVehicle(): $Entity;
        /**
         * Get the Minecraft server instance
         */
        getServer(): $MinecraftServer;
        getBbWidth(): number;
        /**
         * Checks if the offset position from the entity's current position has a collision with a block or a liquid.
         */
        isFree(x: number, arg1: number, y: number): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInLava(): boolean;
        getGravity(): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInLiquid(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        fireImmune(): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWater(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        clearFire(): void;
        setPos(x: number, arg1: number, y: number): void;
        setPos(addend: $Vec3_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWall(): boolean;
        /**
         * Gets called every tick from main Entity class
         */
        baseTick(): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>): void;
        gameEvent(gameEvent: $Holder_<$GameEvent>, entity: $Entity | null): void;
        getRandom(): $RandomSource;
        getRandomZ(scale: number): number;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDiscrete(): boolean;
        getRandomY(): number;
        getRandomX(scale: number): number;
        handler$flj000$collective$Entity_saveWithoutId(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        handler$jhg000$axiom$isIgnoringBlockTriggers(cir: $CallbackInfoReturnable<any>): void;
        wrapOperation$hao000$sable$updateEntityAfterFallOn(arg0: $Block, arg1: $BlockGetter, arg2: $Entity, arg3: $Operation_<any>): void;
        wrapOperation$hdp000$sable$occludeFluidOnEyes(arg0: $Level, arg1: $BlockPos_, arg2: $Operation_<any>): $FluidState;
        handler$zbo000$openpartiesandclaims$onHandlePortal(arg0: $CallbackInfo): void;
        handler$fpk000$lambdynlights_runtime$onRemove(ci: $CallbackInfo): void;
        handler$edj001$yumi_mc_core$yumi$onPopulateCrashDetails(crashReportCategory: $CrashReportCategory, ci: $CallbackInfo): void;
        modifyReturnValue$jbn000$create_sa$create$onFireImmune(allowPassengers: boolean): boolean;
        handler$hdp000$sable$updateFluidHeightAndDoFluidPushing(arg0: $TagKey_<any>, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$zbo000$openpartiesandclaims$onIsInvulnerableTo(arg0: $DamageSource_, arg1: $CallbackInfoReturnable<any>): void;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        sable$vanillaCollide(vec: $Vec3_): $Vec3;
        sable$getCollisionInfo(): $SubLevelEntityCollision$CollisionInfo;
        calculateViewVector(xRot: number, yRot: number): $Vec3;
        getBlockSpeedFactor(): number;
        readAdditionalSaveData(compound: $CompoundTag_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isInWaterRainOrBubble(): boolean;
        addAdditionalSaveData(compound: $CompoundTag_): void;
        /**
         * Gets called every tick from main Entity class
         */
        tryCheckInsideBlocks(): void;
        getControllingPassenger(): $LivingEntity;
        getRelativePortalPosition(axis: $Direction$Axis_, portal: $BlockUtil$FoundRectangle): $Vec3;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getTicksRequiredToFreeze(): number;
        /**
         * Gets called every tick from main Entity class
         */
        checkSlowFallDistance(): void;
        syncPacketPositionCodec(x: number, arg1: number, y: number): void;
        getFluidJumpThreshold(): number;
        /**
         * Returns the fluid that is on the entity's eyes.
         */
        getMaxHeightFluidType(): $FluidType;
        onSyncedDataUpdated(dataValues: $List_<$SynchedEntityData$DataValue_<never>>): void;
        onSyncedDataUpdated(key: $EntityDataAccessor_<never>): void;
        getPassengerRidingPosition(entity: $Entity): $Vec3;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isCustomNameVisible(): boolean;
        getPreciseBodyRotation(partialTick: number): number;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        sable$getPlotPosition(): $Vec3;
        sable$setPlotPosition(addend: $Vec3_): void;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getBoundingBoxForCulling(): $AABB;
        sable$getInBlockStatePos(): $BlockPos;
        /**
         * @deprecated
         */
        getBlockStateOnLegacy(): $BlockState;
        getZ(scale: number): number;
        getZ(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockZ(): number;
        interact(player: $Player, hand: $InteractionHand_): $InteractionResult;
        /**
         * Applies the given player interaction to this Entity.
         */
        interactAt(player: $Player, vec: $Vec3_, hand: $InteractionHand_): $InteractionResult;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockY(): number;
        /**
         * Return the amount of cooldown before this entity can use a portal again.
         */
        getBlockX(): number;
        getUuid(): $UUID;
        setPitch(yaw: number): void;
        setYaw(yaw: number): void;
        getPitch(): number;
        getYaw(): number;
        lookAt(anchor: $EntityAnchorArgument$Anchor_, target: $Vec3_): void;
        /**
         * Gets called every tick from main Entity class
         */
        updateInWaterStateAndDoWaterCurrentPushing(): void;
        getBlockPosBelowThatAffectsMyMovement(): $BlockPos;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        updateInWaterStateAndDoFluidPushing(): boolean;
        /**
         * Given a motion vector, return an updated vector that takes into account restrictions such as collisions (from all directions) and step-up from stepHeight
         */
        localvar$fkg000$lionfishapi$fluidCollision(vec: $Vec3_): $Vec3;
        handler$gpa000$sable$checkInsideBlocks(arg0: $CallbackInfo): void;
        wrapOperation$hdp000$sable$inWaterCheck(arg0: $Entity, arg1: boolean, arg2: $Operation_<any>): void;
        wrapMethod$cfe000$createbigcannons$turn(arg0: number, arg1: number, arg2: $Operation_<any>): void;
        redirect$hao000$sable$collideRedirect(arg0: $Entity, arg1: $Vec3_): $Vec3;
        wrapOperation$hao000$sable$moveInject(arg0: $Entity, arg1: boolean, arg2: $Vec3_, arg3: $Operation_<any>): void;
        handler$fpn000$dimthread$moveToWorld(arg0: $DimensionTransition_, arg1: $CallbackInfoReturnable<any>): void;
        handler$hee000$sable$calculateViewVector(arg0: number, arg1: number, arg2: $CallbackInfoReturnable<any>): void;
        handler$jmi001$createdieselgenerators$load(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$flj000$collective$Entity_load(arg0: $CompoundTag_, arg1: $CallbackInfo): void;
        handler$jmi000$createdieselgenerators$save(arg0: $CompoundTag_, arg1: $CallbackInfoReturnable<any>): void;
        handler$hmh000$sable$subLevelFluidOnEyes(arg0: $CallbackInfo): void;
        lambdynlights$getTrackedLitChunkPos(): $LongSet;
        lambdynlights$setTrackedLitChunkPos(trackedLitChunkPos: $LongSet): void;
        redirect$hah000$sable$fixPassengerSaving(arg0: $CompoundTag_, arg1: string, arg2: $Tag_): $Tag;
        handler$gpb000$sable$recreateFromPacket(arg0: $ClientboundAddEntityPacket, arg1: $CallbackInfo): void;
        /**
         * Gets called every tick from main Entity class
         */
        updateDynamicLightPreviousCoordinates(): void;
        handler$hah000$sable$onPositionRider(arg0: $Entity, arg1: $CallbackInfo): void;
        handler$jce000$parcool$onGetEyeHeight(arg0: $CallbackInfoReturnable<any>): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isControlledByLocalInstance(): boolean;
        getDismountLocationForPassenger(passenger: $LivingEntity): $Vec3;
        /**
         * Gets the entity's body yaw (if the entity is a `LivingEntity`), or the entity's visual rotation (if the entity is an item entity or an item frame).
         */
        getBodyYaw(): number;
        lerpPositionAndRotationStep(steps: number, targetX: number, arg2: number, targetY: number, arg4: number, targetZ: number): void;
        getPassengerAttachmentPoint(entity: $Entity, dimensions: $EntityDimensions_, partialTick: number): $Vec3;
        /**
         * Gets called every tick from main Entity class
         */
        playEntityOnFireExtinguishedSound(): void;
        /**
         * Gets called every tick from main Entity class
         */
        updateFluidHeightAndDoFluidPushing(): void;
        /**
         * @deprecated
         */
        updateFluidHeightAndDoFluidPushing(fluidTag: $TagKey_<$Fluid>, motionScale: number): boolean;
        /**
         * @deprecated
         */
        getLightLevelDependentMagicValue(): number;
        handler$jce002$parcool$onMove(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        getSwimHighSpeedSplashSound(): $SoundEvent;
        getPrimaryStepSoundBlockPos(pos: $BlockPos_): $BlockPos;
        handler$hah000$sable$moveRelative(arg0: number, arg1: $Vec3_, arg2: $CallbackInfo): void;
        static getDefaultPassengerAttachmentPoint(vehicle: $Entity, passenger: $Entity, attachments: $EntityAttachments): $Vec3;
        updateDynamicGameEventListener(listenerConsumer: $BiConsumer_<$DynamicGameEventListener<never>, $ServerLevel>): void;
        handler$jce000$parcool$onOnGround(arg0: $CallbackInfoReturnable<any>): void;
        handler$hao000$sable$moveInject(arg0: $MoverType_, arg1: $Vec3_, arg2: $CallbackInfo): void;
        handler$hah000$sable$onRidingTick(arg0: $CallbackInfo): void;
        handler$jce000$parcool$onIsInWall(arg0: $CallbackInfoReturnable<any>): void;
        handler$hao000$sable$tickInject(arg0: $CallbackInfo): void;
        /**
         * Gets called every tick from main Entity class
         */
        removeAfterChangingDimensions(): void;
        handler$jin000$axiom$onTurn(d: number, e: number, ci: $CallbackInfo): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        hasExactlyOnePlayerPassenger(): boolean;
        /**
         * Explosion resistance of a block relative to this entity
         */
        getBlockExplosionResistance(explosion: $Explosion, level: $BlockGetter, pos: $BlockPos_, blockState: $BlockState_, fluidState: $FluidState, explosionPower: number): number;
        sable$getLastTrackingSubLevelID(): $UUID;
        static getCollisionHorizontalEscapeVector(vehicleWidth: number, arg1: number, passengerWidth: number): $Vec3;
        sable$setLastTrackingSubLevelID(uniqueId: $UUID_): void;
        fudgePositionAfterSizeChange(dimensions: $EntityDimensions_): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        alwaysAccepts(): boolean;
        getFeedbackDisplayName(): $Component;
        /**
         * Returns whether any fluid type the entity is currently in matches
         * the specified condition.
         */
        isInFluidType(predicate: $BiPredicate_<$FluidType, number>): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        isInFluidType(type: $FluidType): boolean;
        /**
         * Returns whether the entity is within the fluid type of the state.
         */
        isInFluidType(state: $FluidState): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        canFluidExtinguish(type: $FluidType): boolean;
        /**
         * @deprecated
         * Writes the serializable attachments to a tag.
         * Returns `null` if there are no serializable attachments.
         */
        serializeNBT(provider: $HolderLookup$Provider): $CompoundTag;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        canSwimInFluidType(type: $FluidType): boolean;
        /**
         * @deprecated
         * Deserialize from a compound tag.
         */
        deserializeNBT(provider: $HolderLookup$Provider, nbt: $CompoundTag_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        shouldRiderSit(): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        isPushedByFluid(type: $FluidType): boolean;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        canRiderInteract(): boolean;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        isEyeInFluidType(type: $FluidType): boolean;
        /**
         * Returns The classification of this entity
         */
        getClassification(forSpawnCount: boolean): $MobCategory;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isMultipartEntity(): boolean;
        /**
         * Sends the pairing data to the client.
         */
        sendPairingData(serverPlayer: $ServerPlayer, bundleBuilder: $Consumer_<$CustomPacketPayload>): void;
        /**
         * Called when a user uses the creative pick block button on this entity.
         */
        getPickedResult(target: $HitResult): $ItemStack;
        /**
         * Gets the individual sub parts that make up this entity.
         * 
         * The entities returned by this method are NOT saved to the world in nay way, they exist as an extension
         * of their host entity. The child entity does not track its server-side(or client-side) counterpart, and
         * the host entity is responsible for moving and managing these children.
         * 
         * Only used if `#isMultipartEntity()` returns true.
         * 
         * See `EnderDragon` for an example implementation.
         */
        getParts(): $PartEntity<never>[];
        /**
         * Only used by renderer in EntityLivingBase subclasses.
         * Determines if an entity is visible or not to a specific player, if the entity is normally invisible.
         * For EntityLivingBase subclasses, returning false when invisible will render the entity semi-transparent.
         */
        hasCustomOutlineRendering(player: $Player): boolean;
        /**
         * Returns whether the entity can ride in this vehicle under the fluid.
         */
        canBeRiddenUnderFluidType(type: $FluidType, rider: $Entity): boolean;
        /**
         * Returns how much the velocity of the fluid should be scaled by
         * when applied to an entity.
         */
        getFluidMotionScale(type: $FluidType): number;
        /**
         * Returns whether the entity can be extinguished by this fluid.
         */
        canHydrateInFluidType(type: $FluidType): boolean;
        /**
         * Returns a sound to play when a certain action is performed by the
         * entity in the fluid. If no sound is present, then the sound will be
         * `null`.
         */
        getSoundFromFluidType(type: $FluidType, action: $SoundAction): $SoundEvent;
        /**
         * Copies the serialized attachments from another entity to this entity.
         * 
         * This does not trigger syncing of the copied attachments.
         */
        copyAttachmentsFrom(other: $Entity, isDeath: boolean): void;
        /**
         * Returns how much the fluid should scale the damage done to a falling
         * entity when hitting the ground per tick.
         * 
         * Implementation: If the entity is in many fluids, the smallest modifier
         * is applied.
         */
        getFluidFallDistanceModifier(type: $FluidType): number;
        lambdynlights$scheduleTrackedChunksRebuild(renderer: $LevelRenderer): void;
        lambdynlights$updateDynamicLight(renderer: $LevelRenderer): boolean;
        /**
         * Runs the specified console command with permission level of the entity. The command won't output any logs in chat nor console.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommandSilent(command: string): void;
        /**
         * Gets the entity's custom name, or entity ID if entity has no custom name.
         * Returns the string that identifies this Entity's class
         */
        getUsername(): string;
        setMotionX(renderDistWeight: number): void;
        setMotionY(renderDistWeight: number): void;
        setMotionZ(renderDistWeight: number): void;
        rayTrace(distance: number, fluids: boolean): $KubeRayTraceResult;
        rayTrace(distance: number): $KubeRayTraceResult;
        rayTraceEntity(distance: number, filter: $Predicate_<$Entity>): $Entity;
        setPosition(block: $LevelBlock): void;
        setPosition(x: number, y: number, y: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param dimension A `ResourceLocation` of the target dimension. It can be a string representing the dimension ID.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportTo(dimension: $ResourceLocation_, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Teleports an entity to specified coordinates.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         */
        teleportTo(x: number, y: number, y: number): void;
        /**
         * Teleports an entity to a dimension of specified ID, to specified coordinates and rotation.
         * 
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        teleportTo(x: number, y: number, y: number, yaw: number, z: number): void;
        /**
         * Measures the distance of entity to the point at specified 3D position vector.
         */
        distanceTo(vec: $Vec3_): number;
        /**
         * Measures the distance of entity to the point at specified `x`, `y` and `z`.
         * Gets the squared distance to the position.
         */
        distanceTo(x: number, y: number, y: number): number;
        /**
         * Checks if the entity is a client-side player.
         * Return whether this entity should be rendered as on fire.
         */
        isClientPlayer(): this is AbstractClientPlayer;
        /**
         * Checks if the entity is an item frame entity.
         * Return whether this entity should be rendered as on fire.
         */
        isFrame(): this is $ItemFrame;
        /**
         * Checks if the entity is a monster.
         * Return whether this entity should be rendered as on fire.
         */
        isMonster(): boolean;
        /**
         * Checks if the entity is an animal.
         * Return whether this entity should be rendered as on fire.
         */
        isAnimal(): boolean;
        /**
         * Checks if the entity is a player entity.
         * Return whether this entity should be rendered as on fire.
         */
        isPlayer(): this is $Player;
        getMotionX(): number;
        /**
         * Checks if the entity is a `LivingEntity`.
         * Return whether this entity should be rendered as on fire.
         */
        isLiving(): this is $LivingEntity;
        /**
         * Gets the name of the team entity is in, or `''` (empty string) if the entity is not part of any team
         * Returns the string that identifies this Entity's class
         */
        getTeamName(): string;
        /**
         * If the entity is a player, gets the player's profile, otherwise returns `null`.
         */
        getProfile(): $GameProfile;
        /**
         * Gets the item stack corresponding to either:
         * - the item contained in the item entity,
         * - the item in the item frame.
         * Will be `null` if the entity is neither an item entity nor an item frame.
         */
        getItem(): $ItemStack;
        getMotionZ(): number;
        /**
         * Get the Minecraft server instance
         */
        getServer(): $MinecraftServer;
        /**
         * Returns the string that identifies this Entity's class
         */
        getType(): string;
        /**
         * Gets a block at the position of the entity.
         */
        getBlock(): $LevelBlock;
        getScriptType(): $ScriptType;
        getMotionY(): number;
        /**
         * Get the world, if available. **`null` is not allowed!** If you are not an entity in the world, return the overworld
         */
        getLevel(): $Level;
        /**
         * Checks if the entity is a server-side player.
         * Return whether this entity should be rendered as on fire.
         */
        isServerPlayer(): this is $ServerPlayer;
        /**
         * Gets the entity's facing direction.
         * If the entity faces more than 45 degrees up or down, the resulting facing direction is respectively `up` or `down`.
         * Otherwise, the resulting facing direction is determined by whichever cardinal direction is closer to entity's yaw.
         * Gets the horizontal facing direction of this Entity.
         */
        getFacing(): $Direction;
        /**
         * @deprecated
         * Replaced by `entity.getTeamName()`
         * Returns the string that identifies this Entity's class
         */
        getTeamId(): string;
        setRotation(yRot: number, xRot: number): void;
        /**
         * @deprecated
         * Replaced by `entity.distanceTo(x, y, z)`.
         * Gets the squared distance to the position.
         */
        getDistance(x: number, y: number, y: number): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToBlockSqr(pos)`.
         */
        getDistanceSq(pos: $BlockPos_): number;
        /**
         * @deprecated
         * Replaced by `entity.distanceToSqr(x, y, z)`.
         * Gets the squared distance to the position.
         */
        getDistanceSq(x: number, y: number, y: number): number;
        /**
         * Gets a list of all passengers of the entity.
         */
        getPassengers(): $EntityArrayList;
        mergeNbt(tag: $CompoundTag_): $Entity;
        /**
         * Runs the specified console command with permission level of the entity.
         * 
         * @param command The console command. Slash at the beginning is optional.
         */
        runCommand(command: string): void;
        getName(): $Component;
        getDisplayName(): $Component;
        setNbt(compound: $CompoundTag_): void;
        /**
         * Damages an entity by a given amount of HP dealing a specific type of damage.
         * 
         * @param hp The amount of damage to deal.
         * @param source The damage source. It may be a string specifying a damage source, like `'minecraft:cramming'`.
         */
        damage(hp: number, source: $DamageSource_): boolean;
        /**
         * Damages an entity by a given amount of HP dealing generic damage.
         * 
         * @param hp The amount of damage to deal.
         */
        damage(hp: number): boolean;
        /**
         * Checks if the entity is an item entity.
         * Return whether this entity should be rendered as on fire.
         */
        isItem(): this is $ItemEntity;
        /**
         * Checks, whether the entity is a reference to yourself - that is - the client player you are controlling.
         * Return whether this entity should be rendered as on fire.
         */
        isSelf(): this is LocalPlayer;
        /**
         * Gets called every tick from main Entity class
         */
        spawn(): void;
        setZ(renderDistWeight: number): void;
        setY(renderDistWeight: number): void;
        setX(renderDistWeight: number): void;
        /**
         * Returns a NBTTagCompound that can be used to store custom data for this entity.
         * It will be written, and read from disc, so it persists over world saves.
         */
        getNbt(): $CompoundTag;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp, damageSource)`
         * Called when the entity is attacked.
         */
        attack(source: $DamageSource_, amount: number): boolean;
        /**
         * @deprecated
         * Replaced by `entity.damage(hp)`
         */
        attack(hp: number): boolean;
        /**
         * Sets position and rotation, clamping and wrapping params to valid values. Used by network code.
         */
        setPositionAndRotation(x: number, y: number, y: number, yaw: number, z: number): void;
        /**
         * Checks if the entity is a water creature.
         * Return whether this entity should be rendered as on fire.
         */
        isWaterCreature(): boolean;
        /**
         * Teleports an entity to a specified `ServerLevel`, to specified coordinates and rotation.
         * 
         * @param level A `ServerLevel` to teleport the entity to.
         * @param x The `x` target coordinate.
         * @param y The `y` target coordinate.
         * @param z The `z` target coordinate.
         * @param yaw The entity's target yaw.
         * @param pitch The entity's target pitch.
         */
        teleportToLevel(level: $ServerLevel, x: number, y: number, z: number, yaw: number, pitch: number): boolean;
        /**
         * Checks if the entity is an ambient creature.
         * Return whether this entity should be rendered as on fire.
         */
        isAmbientCreature(): boolean;
        /**
         * Measures the **square** of a distance of entity to the block at specified `BlockPos`.
         */
        distanceToBlockSqr(pos: $BlockPos_): number;
        /**
         * Checks if the entity is a peaceful creature (not a monster).
         * Return whether this entity should be rendered as on fire.
         */
        isPeacefulCreature(): boolean;
        /**
         * Measures the distance of entity to block at specified `BlockPos`.
         */
        distanceToBlock(pos: $BlockPos_): number;
        /**
         * Checks, whether the entity is part of a team called `teamName`.
         * 
         * @param teamName The name of the team to check.
         */
        isOnScoreboardTeam(tag: string): boolean;
        /**
         * Checks, whether the entity is part of any team.
         * Return whether this entity should be rendered as on fire.
         */
        isOnScoreboardTeam(): boolean;
        /**
         * Sends a message in chat to the entity.
         * 
         * @param message A text component. It may be a string, which will be implicitly wrapped into a text component.
         */
        tell(component: $Component_): void;
        getAnimator(): ($AzAnimator<$Object, $CompoundTag>) | undefined;
        setDynamicLightEnabled(downwards: boolean): void;
        getDynamicLightChunksToRebuild(forced: boolean): $Long2ObjectMap<$ChunkRebuildStatus>;
        setStatusMessage(component: $Component_): void;
        setActivePostShader(id: $ResourceLocation_): void;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        isDynamicLightEnabled(): boolean;
        splitIntoDynamicLightEntries(cellHasher: $CellHasher): $Stream<$SpatialLookupEntry>;
        getChangeListener(): $EntityInLevelCallback;
        callGetTypeName(): $Component;
        /**
         * Return whether this entity should be rendered as on fire.
         */
        getFirstTick(): boolean;
        invokeCanRide(passenger: $Entity): boolean;
        bookshelf$createHoverEvent(): $HoverEvent;
        invokeCanAddPassenger(passenger: $Entity): boolean;
        transition$setRawPosition(addend: $Vec3_): void;
        catnip$callSetLevel(level: $Level): void;
        /**
         * Returns a (normalized) vector of where this entity is looking.
         */
        transition$getRawPosition(): $Vec3;
        invokeGetSwimSplashSound(): $SoundEvent;
        invokeGetSwimHighSpeedSplashSound(): $SoundEvent;
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
        constructor(entityType: $EntityType<never>, level: $Level);
        get typeName(): $Component;
        get alive(): boolean;
        get entityType(): $EntityType<never>;
        get descending(): boolean;
        set UUID(value: $UUID_);
        get forcedVisible(): boolean;
        get dynamicLightId(): number;
        get dynamicLightX(): number;
        get dynamicLightY(): number;
        get dynamicLightZ(): number;
        get animatorOrNull(): $AzAnimator<any, any>;
        get percentFrozen(): number;
        get maxAirSupply(): number;
        get soundSource(): $SoundSource;
        get stringUuid(): string;
        get weaponItem(): $ItemStack;
        get blockJumpFactor(): number;
        get bbHeight(): number;
        get maxFallDistance(): number;
        get passenger(): boolean;
        get inBlockState(): $BlockState;
        get effectiveAi(): boolean;
        get defaultGravity(): number;
        get fullyFrozen(): boolean;
        get visuallySwimming(): boolean;
        get blockStateOn(): $BlockState;
        get pickResult(): $ItemStack;
        get forgePersistentData(): $CompoundTag;
        get encodeId(): string;
        get addedToLevel(): boolean;
        get swimSound(): $SoundEvent;
        get positionCodec(): $VecDeltaCodec;
        get onPortalCooldown(): boolean;
        get onPosLegacy(): $BlockPos;
        get swimSplashSound(): $SoundEvent;
        get crouching(): boolean;
        get teamColor(): number;
        get fireImmuneTicks(): number;
        get firstPassenger(): $Entity;
        get inWaterOrRain(): boolean;
        get rotationVector(): $Vec2;
        get inWaterOrBubble(): boolean;
        get attachments(): $EntityAttachments;
        get pickRadius(): number;
        get scoreboardName(): string;
        get attackable(): boolean;
        get motionDirection(): $Direction;
        get visuallyCrawling(): boolean;
        get rootVehicle(): $Entity;
        get permissionLevel(): number;
        get knownMovement(): $Vec3;
        get alwaysTicking(): boolean;
        get horizontalFacing(): $Direction;
        get spectator(): boolean;
        get underWater(): boolean;
        get lookAngle(): $Vec3;
        get pickable(): boolean;
        get eyeY(): number;
        get pushable(): boolean;
        get onFire(): boolean;
        get team(): $PlayerTeam;
        get tags(): $Set<string>;
        get flapping(): boolean;
        get onRails(): boolean;
        get forward(): $Vec3;
        get freezing(): boolean;
        get commandSenderWorld(): $Level;
        get persistentData(): $CompoundTag;
        get dimensionChangingDelay(): number;
        set sharedFlagOnFire(value: boolean);
        get movementEmission(): $Entity$MovementEmission;
        get nearestViewDirection(): $Direction;
        get pistonPushReaction(): $PushReaction;
        get ignoringBlockTriggers(): boolean;
        get steppingCarefully(): boolean;
        get selfAndPassengers(): $Stream<any>;
        get indirectPassengers(): $Iterable<any>;
        get passengersAndSelf(): $Stream<any>;
        get suppressingBounce(): boolean;
        get controlledVehicle(): $Entity;
        get dynamicLightPrevX(): number;
        get dynamicLightPrevY(): number;
        get dynamicLightPrevZ(): number;
        get dynamicLightLevel(): $Level;
        get bbWidth(): number;
        get inLava(): boolean;
        get gravity(): number;
        get inLiquid(): boolean;
        get inWater(): boolean;
        get inWall(): boolean;
        get discrete(): boolean;
        get randomY(): number;
        get blockSpeedFactor(): number;
        get inWaterRainOrBubble(): boolean;
        get controllingPassenger(): $LivingEntity;
        get ticksRequiredToFreeze(): number;
        get fluidJumpThreshold(): number;
        get maxHeightFluidType(): $FluidType;
        get boundingBoxForCulling(): $AABB;
        get blockStateOnLegacy(): $BlockState;
        get blockZ(): number;
        get blockY(): number;
        get blockX(): number;
        get blockPosBelowThatAffectsMyMovement(): $BlockPos;
        get controlledByLocalInstance(): boolean;
        get lightLevelDependentMagicValue(): number;
        get swimHighSpeedSplashSound(): $SoundEvent;
        get feedbackDisplayName(): $Component;
        get multipartEntity(): boolean;
        get parts(): $PartEntity<never>[];
        get username(): string;
        get clientPlayer(): boolean;
        get frame(): boolean;
        get monster(): boolean;
        get animal(): boolean;
        get player(): boolean;
        get living(): boolean;
        get teamName(): string;
        get profile(): $GameProfile;
        get type(): string;
        get block(): $LevelBlock;
        get scriptType(): $ScriptType;
        get serverPlayer(): boolean;
        get facing(): $Direction;
        get teamId(): string;
        get passengers(): $EntityArrayList;
        get self(): boolean;
        get waterCreature(): boolean;
        get ambientCreature(): boolean;
        get peacefulCreature(): boolean;
        set statusMessage(value: $Component_);
        set activePostShader(value: $ResourceLocation_);
        get changeListener(): $EntityInLevelCallback;
    }
    export class $Display$ColorInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$ColorInterpolator}.
     */
    export type $Display$ColorInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $SpawnPlacements$Data extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$Data}.
     */
    export type $SpawnPlacements$Data_ = { predicate?: $SpawnPlacements$SpawnPredicate_<never>, placement?: $SpawnPlacementType_, heightMap?: $Heightmap$Types_,  } | [predicate?: $SpawnPlacements$SpawnPredicate_<never>, placement?: $SpawnPlacementType_, heightMap?: $Heightmap$Types_, ];
    export class $Display$TextDisplay$LineSplitter {
    }
    export interface $Display$TextDisplay$LineSplitter {
        split(text: $Component_, maxWidth: number): $Display$TextDisplay$CachedInfo;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$LineSplitter}.
     */
    export type $Display$TextDisplay$LineSplitter_ = ((arg0: $Component, arg1: number) => $Display$TextDisplay$CachedInfo_);
    export class $EntityType<T extends $Entity> implements $FeatureElement, $EntityTypeTest<$Entity, T>, $EntityTypeExtension<any>, $FabricEntityTypeImpl, $InjectedEntityTypeExtension, $DynamicLightHandlerHolder<any>, $EntityTypeKJS, $EntityTypeMethods {
        static getKey(entityType: $EntityType<never>): $ResourceLocation;
        toShortString(): string;
        create(level: $ServerLevel, consumer: $Consumer_<T> | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        create(level: $Level): T;
        static create(tag: $CompoundTag_, level: $Level): ($Entity) | undefined;
        is(entityType: $HolderSet_<$EntityType<never>>): boolean;
        /**
         * Checks if this entity type is contained in the tag
         */
        is(tag: $TagKey_<$EntityType<never>>): boolean;
        getWidth(): number;
        getHeight(): number;
        getDimensions(): $EntityDimensions;
        getDescription(): $Component;
        getCategory(): $MobCategory;
        handler$efh000$fabric_object_builder_api_v1$alwaysUpdateVelocity(arg0: $CallbackInfoReturnable<any>): void;
        static updateCustomEntityTag(level: $Level, player: $Player | null, entity: $Entity | null, customData: $CustomData): void;
        flywheel$getVisualizer(): $EntityVisualizer<any>;
        canSpawnFarFromPlayer(): boolean;
        static createDefaultStackConfig<T extends $Entity>(serverLevel: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        static appendCustomNameConfig<T extends $Entity>(consumer: $Consumer_<T>, stack: $ItemStack_): $Consumer<T>;
        static loadEntitiesRecursive(tags: $List_<$Tag_>, level: $Level): $Stream<$Entity>;
        clientTrackingRange(): number;
        static appendDefaultStackConfig<T extends $Entity>(consumer: $Consumer_<T>, level: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        static loadEntityRecursive(compound: $CompoundTag_, level: $Level, entityFunction: $Function_<$Entity, $Entity>): $Entity;
        lambdynlights$getSetting(): $LightSourceSettingEntry;
        flywheel$setVisualizer(visualizer: $EntityVisualizer<any>): void;
        lambdynlights$getId(): $ResourceLocation;
        lambdynlights$getName(): $Component;
        spawn(level: $ServerLevel, pos: $BlockPos_, spawnType: $MobSpawnType_): T;
        spawn(level: $ServerLevel, consumer: $Consumer_<T> | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        spawn(serverLevel: $ServerLevel, stack: $ItemStack_ | null, player: $Player | null, pos: $BlockPos_, spawnType: $MobSpawnType_, shouldOffsetY: boolean, shouldOffsetYMore: boolean): T;
        requiredFeatures(): $FeatureFlagSet;
        bo$setRenderer(renderer: $EntityRenderer<any>): void;
        bo$getRenderer(): $EntityRenderer<any>;
        canSerialize(): boolean;
        getDescriptionId(): string;
        getTags(): $Stream<$TagKey<$EntityType<never>>>;
        kjs$getId(): string;
        /**
         * Tries to get the entity type associated by the key.
         */
        static byString(key: string): ($EntityType<never>) | undefined;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$EntityType<never>>;
        static getYOffset(level: $LevelReader, pos: $BlockPos_, shouldOffsetYMore: boolean, box: $AABB_): number;
        canSummon(): boolean;
        fireImmune(): boolean;
        static by(compound: $CompoundTag_): ($EntityType<never>) | undefined;
        getSpawnAABB(x: number, arg1: number, y: number): $AABB;
        updateInterval(): number;
        isBlockDangerous(state: $BlockState_): boolean;
        getBaseClass(): $Class<$Entity>;
        trackDeltas(): boolean;
        static appendCustomEntityStackConfig<T extends $Entity>(consumer: $Consumer_<T>, level: $ServerLevel, stack: $ItemStack_, player: $Player | null): $Consumer<T>;
        fabric_setAlwaysUpdateVelocity(arg0: boolean): void;
        tryCast(entity: $Entity): T;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        kjs$getKey(): $ResourceKey<any>;
        kjs$asHolder(): $Holder<any>;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        arch$holder(): $Holder<$EntityType<never>>;
        kjs$getRegistryId(): $ResourceKey<$Registry<$EntityType<never>>>;
        kjs$getRegistry(): $Registry<$EntityType<never>>;
        arch$registryName(): $ResourceLocation;
        specialEquals(o: $Object, shallow: boolean): boolean;
        hasTag(tag: $ResourceLocation_): boolean;
        getMod(): string;
        getIdLocation(): $ResourceLocation;
        getTagKeys(): $List<$TagKey<T>>;
        getTags(): $List<$ResourceLocation>;
        static MOOSHROOM: $EntityType<$MushroomCow>;
        static MAGMA_CUBE: $EntityType<$MagmaCube>;
        static SILVERFISH: $EntityType<$Silverfish>;
        static MULE: $EntityType<$Mule>;
        static HOGLIN: $EntityType<$Hoglin>;
        static LEASH_KNOT: $EntityType<$LeashFenceKnotEntity>;
        static HUSK: $EntityType<$Husk>;
        static VINDICATOR: $EntityType<$Vindicator>;
        static WARDEN: $EntityType<$Warden>;
        static OMINOUS_ITEM_SPAWNER: $EntityType<$OminousItemSpawner>;
        static HOPPER_MINECART: $EntityType<$MinecartHopper>;
        static PILLAGER: $EntityType<$Pillager>;
        static SHULKER_BULLET: $EntityType<$ShulkerBullet>;
        static VILLAGER: $EntityType<$Villager>;
        static AREA_EFFECT_CLOUD: $EntityType<$AreaEffectCloud>;
        static PAINTING: $EntityType<$Painting>;
        static TURTLE: $EntityType<$Turtle>;
        static TRADER_LLAMA: $EntityType<$TraderLlama>;
        static SMALL_FIREBALL: $EntityType<$SmallFireball>;
        static TNT: $EntityType<$PrimedTnt>;
        static CAVE_SPIDER: $EntityType<$CaveSpider>;
        static SLIME: $EntityType<$Slime>;
        static DROWNED: $EntityType<$Drowned>;
        static FIREBALL: $EntityType<$LargeFireball>;
        static EVOKER: $EntityType<$Evoker>;
        static MARKER: $EntityType<$Marker>;
        static ENDERMITE: $EntityType<$Endermite>;
        static EXPERIENCE_BOTTLE: $EntityType<$ThrownExperienceBottle>;
        static AXOLOTL: $EntityType<$Axolotl>;
        static COMMAND_BLOCK_MINECART: $EntityType<$MinecartCommandBlock>;
        static PLAYER: $EntityType<$Player>;
        static ITEM: $EntityType<$ItemEntity>;
        static TEXT_DISPLAY: $EntityType<$Display$TextDisplay>;
        static SALMON: $EntityType<$Salmon>;
        static ZOMBIE: $EntityType<$Zombie>;
        static GOAT: $EntityType<$Goat>;
        static STRIDER: $EntityType<$Strider>;
        static PANDA: $EntityType<$Panda>;
        static OCELOT: $EntityType<$Ocelot>;
        static ENDERMAN: $EntityType<$EnderMan>;
        static CHEST_MINECART: $EntityType<$MinecartChest>;
        static ZOMBIE_VILLAGER: $EntityType<$ZombieVillager>;
        static LLAMA: $EntityType<$Llama>;
        static ENDER_DRAGON: $EntityType<$EnderDragon>;
        static WITCH: $EntityType<$Witch>;
        static EXPERIENCE_ORB: $EntityType<$ExperienceOrb>;
        static ARMADILLO: $EntityType<$Armadillo>;
        static ITEM_FRAME: $EntityType<$ItemFrame>;
        static WITHER: $EntityType<$WitherBoss>;
        static ARROW: $EntityType<$Arrow>;
        static CREEPER: $EntityType<$Creeper>;
        static BOGGED: $EntityType<$Bogged>;
        static ILLUSIONER: $EntityType<$Illusioner>;
        static BREEZE: $EntityType<$Breeze>;
        static CAMEL: $EntityType<$Camel>;
        static COD: $EntityType<$Cod>;
        static ZOMBIE_HORSE: $EntityType<$ZombieHorse>;
        static FURNACE_MINECART: $EntityType<$MinecartFurnace>;
        static RAVAGER: $EntityType<$Ravager>;
        static BOAT: $EntityType<$Boat>;
        static SHULKER: $EntityType<$Shulker>;
        static SNIFFER: $EntityType<$Sniffer>;
        static BEE: $EntityType<$Bee>;
        static ITEM_DISPLAY: $EntityType<$Display$ItemDisplay>;
        static PHANTOM: $EntityType<$Phantom>;
        static BLAZE: $EntityType<$Blaze>;
        static SKELETON_HORSE: $EntityType<$SkeletonHorse>;
        static COW: $EntityType<$Cow>;
        static WANDERING_TRADER: $EntityType<$WanderingTrader>;
        static END_CRYSTAL: $EntityType<$EndCrystal>;
        static PIG: $EntityType<$Pig>;
        static ZOGLIN: $EntityType<$Zoglin>;
        static BREEZE_WIND_CHARGE: $EntityType<$BreezeWindCharge>;
        static WOLF: $EntityType<$Wolf>;
        static IRON_GOLEM: $EntityType<$IronGolem>;
        static FROG: $EntityType<$Frog>;
        static SHEEP: $EntityType<$Sheep>;
        static VEX: $EntityType<$Vex>;
        static ENDER_PEARL: $EntityType<$ThrownEnderpearl>;
        static BLOCK_DISPLAY: $EntityType<$Display$BlockDisplay>;
        static TRIDENT: $EntityType<$ThrownTrident>;
        static PIGLIN_BRUTE: $EntityType<$PiglinBrute>;
        static POLAR_BEAR: $EntityType<$PolarBear>;
        static MINECART: $EntityType<$Minecart>;
        static LIGHTNING_BOLT: $EntityType<$LightningBolt>;
        static POTION: $EntityType<$ThrownPotion>;
        static FISHING_BOBBER: $EntityType<$FishingHook>;
        static CHEST_BOAT: $EntityType<$ChestBoat>;
        static SQUID: $EntityType<$Squid>;
        static DRAGON_FIREBALL: $EntityType<$DragonFireball>;
        static ELDER_GUARDIAN: $EntityType<$ElderGuardian>;
        static HORSE: $EntityType<$Horse>;
        static TNT_MINECART: $EntityType<$MinecartTNT>;
        static ARMOR_STAND: $EntityType<$ArmorStand>;
        static PARROT: $EntityType<$Parrot>;
        static EVOKER_FANGS: $EntityType<$EvokerFangs>;
        static FOX: $EntityType<$Fox>;
        static GIANT: $EntityType<$Giant>;
        static STRAY: $EntityType<$Stray>;
        static SPECTRAL_ARROW: $EntityType<$SpectralArrow>;
        static CAT: $EntityType<$Cat>;
        static RABBIT: $EntityType<$Rabbit>;
        static DONKEY: $EntityType<$Donkey>;
        static EYE_OF_ENDER: $EntityType<$EyeOfEnder>;
        static SPAWNER_MINECART: $EntityType<$MinecartSpawner>;
        static GLOW_ITEM_FRAME: $EntityType<$GlowItemFrame>;
        static INTERACTION: $EntityType<$Interaction>;
        static TROPICAL_FISH: $EntityType<$TropicalFish>;
        static ALLAY: $EntityType<$Allay>;
        static SPIDER: $EntityType<$Spider>;
        static SKELETON: $EntityType<$Skeleton>;
        static WITHER_SKELETON: $EntityType<$WitherSkeleton>;
        static CHICKEN: $EntityType<$Chicken>;
        static ZOMBIFIED_PIGLIN: $EntityType<$ZombifiedPiglin>;
        static SNOWBALL: $EntityType<$Snowball>;
        static GLOW_SQUID: $EntityType<$GlowSquid>;
        static SNOW_GOLEM: $EntityType<$SnowGolem>;
        static WITHER_SKULL: $EntityType<$WitherSkull>;
        static PUFFERFISH: $EntityType<$Pufferfish>;
        static GUARDIAN: $EntityType<$Guardian>;
        static EGG: $EntityType<$ThrownEgg>;
        static LLAMA_SPIT: $EntityType<$LlamaSpit>;
        static WIND_CHARGE: $EntityType<$WindCharge>;
        static FALLING_BLOCK: $EntityType<$FallingBlockEntity>;
        static PIGLIN: $EntityType<$Piglin>;
        static GHAST: $EntityType<$Ghast>;
        static BAT: $EntityType<$Bat>;
        static DOLPHIN: $EntityType<$Dolphin>;
        static TADPOLE: $EntityType<$Tadpole>;
        static FIREWORK_ROCKET: $EntityType<$FireworkRocketEntity>;
        constructor(factory: $EntityType$EntityFactory_<T>, category: $MobCategory_, serialize: boolean, summon: boolean, fireImmune: boolean, canSpawnFarFromPlayer: boolean, immuneTo: $ImmutableSet<$Block>, dimensions: $EntityDimensions_, spawnDimensionsScale: number, clientTrackingRange: number, updateInterval: number, requiredFeatures: $FeatureFlagSet);
        constructor(arg0: $EntityType$EntityFactory_<T>, arg1: $MobCategory_, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: $ImmutableSet<$Block>, arg7: $EntityDimensions_, arg8: number, arg9: number, arg10: number, arg11: $FeatureFlagSet, arg12: $Predicate_<$EntityType<never>>, arg13: $ToIntFunction_<$EntityType<never>>, arg14: $ToIntFunction_<$EntityType<never>>);
        get width(): number;
        get height(): number;
        get dimensions(): $EntityDimensions;
        get description(): $Component;
        get category(): $MobCategory;
        get descriptionId(): string;
        get baseClass(): $Class<$Entity>;
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get mod(): string;
        get idLocation(): $ResourceLocation;
        get tagKeys(): $List<$TagKey<T>>;
    }
    export class $LerpingModel {
    }
    export interface $LerpingModel {
        getModelRotationValues(): $Map<string, $Vector3f>;
        get modelRotationValues(): $Map<string, $Vector3f>;
    }
    /**
     * Values that may be interpreted as {@link $LerpingModel}.
     */
    export type $LerpingModel_ = (() => $Map_<string, $Vector3f>);
    export class $Display$TransformationInterpolator extends $Record implements $Display$GenericInterpolator<$Transformation> {
    }
    /**
     * Values that may be interpreted as {@link $Display$TransformationInterpolator}.
     */
    export type $Display$TransformationInterpolator_ = { previous?: $Transformation, current?: $Transformation,  } | [previous?: $Transformation, current?: $Transformation, ];
    export class $SpawnPlacements {
        /**
         * @deprecated
         */
        static register<T extends $Mob>(entityType: $EntityType<T>, spawnPlacementType: $SpawnPlacementType_, heightmapType: $Heightmap$Types_, predicate: $SpawnPlacements$SpawnPredicate_<T>): void;
        static getHeightmapType(entityType: $EntityType<never> | null): $Heightmap$Types;
        static getPlacementType(entityType: $EntityType<never>): $SpawnPlacementType;
        static hasPlacement(arg0: $EntityType<never>): boolean;
        static checkSpawnRules<T extends $Entity>(entityType: $EntityType<T>, serverLevel: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        static isSpawnPositionOk(entityType: $EntityType<never>, level: $LevelReader, pos: $BlockPos_): boolean;
        static fireSpawnPlacementEvent(): void;
        constructor();
    }
    export class $Display$FloatInterpolator {
        static constant(value: number): $Display$FloatInterpolator;
    }
    export interface $Display$FloatInterpolator {
        get(partialTick: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$FloatInterpolator}.
     */
    export type $Display$FloatInterpolator_ = ((arg0: number) => number);
    export class $Display$IntInterpolator {
        static constant(value: number): $Display$IntInterpolator;
    }
    export interface $Display$IntInterpolator {
        get(partialTick: number): number;
    }
    /**
     * Values that may be interpreted as {@link $Display$IntInterpolator}.
     */
    export type $Display$IntInterpolator_ = ((arg0: number) => number);
    export class $Leashable {
        static tickLeash<E extends $Entity>(entity: E): void;
        static LEASH_TAG: string;
        static LEASH_ELASTIC_DIST: number;
        static LEASH_TOO_FAR_DIST: number;
    }
    export interface $Leashable {
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        getLeashHolder(): $Entity;
        leashTooFarBehaviour(): void;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        setDelayedLeashHolderId(delayedLeashHolderId: number): void;
        closeRangeLeashBehaviour(entity: $Entity): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        dropLeash(broadcastPacket: boolean, dropItem: boolean): void;
        canHaveALeashAttachedToIt(): boolean;
        isLeashed(): boolean;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        getLeashData(): $Leashable$LeashData;
        canBeLeashed(): boolean;
        mayBeLeashed(): boolean;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
        get leashed(): boolean;
    }
    export class $EntityAttachment$Fallback {
        static ZERO: $List<$Vec3>;
        static AT_CENTER: $EntityAttachment$Fallback;
        static AT_FEET: $EntityAttachment$Fallback;
        static AT_HEIGHT: $EntityAttachment$Fallback;
    }
    export interface $EntityAttachment$Fallback {
        create(width: number, height: number): $List<$Vec3>;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment$Fallback}.
     */
    export type $EntityAttachment$Fallback_ = ((arg0: number, arg1: number) => $List_<$Vec3_>);
    export class $Display$BillboardConstraints extends $Enum<$Display$BillboardConstraints> implements $StringRepresentable {
        static values(): $Display$BillboardConstraints[];
        static valueOf(arg0: string): $Display$BillboardConstraints;
        getId(): number;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$BillboardConstraints;
        static CODEC: $Codec<$Display$BillboardConstraints>;
        static VERTICAL: $Display$BillboardConstraints;
        static FIXED: $Display$BillboardConstraints;
        static BY_ID: $IntFunction<$Display$BillboardConstraints>;
        static HORIZONTAL: $Display$BillboardConstraints;
        get id(): number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$BillboardConstraints}.
     */
    export type $Display$BillboardConstraints_ = "fixed" | "vertical" | "horizontal" | "center";
    export class $Attackable {
    }
    export interface $Attackable {
        getLastAttacker(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Attackable}.
     */
    export type $Attackable_ = (() => $LivingEntity);
    export class $Display$GenericInterpolator<T> {
        static constant<T>(value: T): $Display$GenericInterpolator<T>;
    }
    export interface $Display$GenericInterpolator<T> {
        get(partialTick: number): T;
    }
    /**
     * Values that may be interpreted as {@link $Display$GenericInterpolator}.
     */
    export type $Display$GenericInterpolator_<T> = ((arg0: number) => T);
    export class $HasCustomInventoryScreen {
    }
    export interface $HasCustomInventoryScreen {
        openCustomInventoryScreen(player: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $HasCustomInventoryScreen}.
     */
    export type $HasCustomInventoryScreen_ = ((arg0: $Player) => void);
    export class $PowerableMob {
    }
    export interface $PowerableMob {
        isPowered(): boolean;
        get powered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PowerableMob}.
     */
    export type $PowerableMob_ = (() => boolean);
    export class $SpawnPlacementType {
    }
    export interface $SpawnPlacementType {
        isSpawnPositionOk(level: $LevelReader, pos: $BlockPos_, entityType: $EntityType<never> | null): boolean;
        adjustSpawnPosition(level: $LevelReader, pos: $BlockPos_): $BlockPos;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacementType}.
     */
    export type $SpawnPlacementType_ = ((arg0: $LevelReader, arg1: $BlockPos, arg2: $EntityType<never>) => boolean);
    export class $Interaction extends $Entity implements $Attackable, $Targeting {
        getTarget(): $LivingEntity;
        getWidth(): number;
        getHeight(): number;
        getLastAttacker(): $LivingEntity;
        /**
         * Return whether this entity should NOT trigger a pressure plate or a tripwire.
         */
        getResponse(): boolean;
        setResponse(response: boolean): void;
        setWidth(height: number): void;
        setHeight(height: number): void;
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
        constructor(entityType: $EntityType<never>, level: $Level);
        get target(): $LivingEntity;
        get lastAttacker(): $LivingEntity;
    }
    export class $FlyingMob extends $Mob {
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
        constructor(entityType: $EntityType<$FlyingMob>, level: $Level);
    }
    export class $Display$TextDisplay$Align extends $Enum<$Display$TextDisplay$Align> implements $StringRepresentable {
        static values(): $Display$TextDisplay$Align[];
        static valueOf(arg0: string): $Display$TextDisplay$Align;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CENTER: $Display$TextDisplay$Align;
        static CODEC: $Codec<$Display$TextDisplay$Align>;
        static LEFT: $Display$TextDisplay$Align;
        static RIGHT: $Display$TextDisplay$Align;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$Align}.
     */
    export type $Display$TextDisplay$Align_ = "center" | "left" | "right";
    export class $Display$BlockDisplay$BlockRenderState extends $Record {
        blockState(): $BlockState;
        constructor(arg0: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $Display$BlockDisplay$BlockRenderState}.
     */
    export type $Display$BlockDisplay$BlockRenderState_ = { blockState?: $BlockState_,  } | [blockState?: $BlockState_, ];
    export class $SpawnPlacementTypes {
        static IN_LAVA: $SpawnPlacementType;
        static IN_WATER: $SpawnPlacementType;
        static NO_RESTRICTIONS: $SpawnPlacementType;
        static ON_GROUND: $SpawnPlacementType;
    }
    export interface $SpawnPlacementTypes {
    }
    export class $TamableAnimal extends $Animal implements $OwnableEntity {
        isOwnedBy(target: $LivingEntity): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isInSittingPose(): boolean;
        spawnTamingParticles(sitting: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        unableToMoveToOwner(): boolean;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        applyTamingSideEffects(): void;
        /**
         * Dismounts this entity from the entity it is riding.
         */
        tryToTeleportToOwner(): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        shouldTryTeleportToOwner(): boolean;
        setOrderedToSit(sitting: boolean): void;
        wantsToAttack(target: $LivingEntity, owner: $LivingEntity): boolean;
        setInSittingPose(sitting: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isOrderedToSit(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canFlyToOwner(): boolean;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isTame(): boolean;
        setTame(tame: boolean, applyTamingSideEffects: boolean): void;
        tame(player: $Player): void;
        getOwnerUUID(): $UUID;
        setOwnerUUID(uuid: $UUID_ | null): void;
        getOwner(): $LivingEntity;
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
        static DATA_FLAGS_ID: $EntityDataAccessor<number>;
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
        forcedAgeTimer: number;
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
        static TELEPORT_WHEN_DISTANCE_IS_SQ: number;
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
        static BABY_START_AGE: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        forcedAge: number;
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
        static PARENT_AGE_AFTER_BREEDING: number;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        jumpControl: $JumpControl;
        static DATA_OWNERUUID_ID: $EntityDataAccessor<($UUID) | undefined>;
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
        age: number;
        constructor(entityType: $EntityType<$TamableAnimal>, level: $Level);
        get owner(): $LivingEntity;
    }
    export class $PlayerRideable {
    }
    export interface $PlayerRideable {
    }
    export class $Crackiness {
        byDamage(damage: number, durability: number): $Crackiness$Level;
        byDamage(stack: $ItemStack_): $Crackiness$Level;
        byFraction(fraction: number): $Crackiness$Level;
        static GOLEM: $Crackiness;
        static WOLF_ARMOR: $Crackiness;
    }
    export class $Interaction$PlayerAction extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $Interaction$PlayerAction}.
     */
    export type $Interaction$PlayerAction_ = { player?: $UUID_, timestamp?: number,  } | [player?: $UUID_, timestamp?: number, ];
    export class $MobCategory extends $Enum<$MobCategory> implements $StringRepresentable, $IExtensibleEnum {
        getName(): string;
        static values(): $MobCategory[];
        static valueOf(arg0: string): $MobCategory;
        getSerializedName(): string;
        static getExtensionInfo(): $ExtensionInfo;
        getMaxInstancesPerChunk(): number;
        /**
         * Gets whether this creature type is peaceful.
         */
        isPersistent(): boolean;
        getNoDespawnDistance(): number;
        /**
         * Gets whether this creature type is peaceful.
         */
        isFriendly(): boolean;
        getDespawnDistance(): number;
        getRemappedEnumConstantName(): string;
        static UNDERGROUND_WATER_CREATURE: $MobCategory;
        static WATER_CREATURE: $MobCategory;
        static WATER_AMBIENT: $MobCategory;
        static AXOLOTLS: $MobCategory;
        static CODEC: $Codec<$MobCategory>;
        static AMBIENT: $MobCategory;
        static CREATURE: $MobCategory;
        static MISC: $MobCategory;
        static MONSTER: $MobCategory;
        get serializedName(): string;
        static get extensionInfo(): $ExtensionInfo;
        get maxInstancesPerChunk(): number;
        get persistent(): boolean;
        get noDespawnDistance(): number;
        get friendly(): boolean;
        get despawnDistance(): number;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $MobCategory}.
     */
    export type $MobCategory_ = string | "monster" | "creature" | "ambient" | "axolotls" | "underground_water_creature" | "water_creature" | "water_ambient" | "misc" | string;
    export class $Display$TextDisplay$TextRenderState extends $Record {
        flags(): number;
        text(): $Component;
        lineWidth(): number;
        textOpacity(): $Display$IntInterpolator;
        backgroundColor(): $Display$IntInterpolator;
        constructor(arg0: $Component_, arg1: number, arg2: $Display$IntInterpolator_, arg3: $Display$IntInterpolator_, arg4: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$TextRenderState}.
     */
    export type $Display$TextDisplay$TextRenderState_ = { text?: $Component_, lineWidth?: number, backgroundColor?: $Display$IntInterpolator_, textOpacity?: $Display$IntInterpolator_, flags?: number,  } | [text?: $Component_, lineWidth?: number, backgroundColor?: $Display$IntInterpolator_, textOpacity?: $Display$IntInterpolator_, flags?: number, ];
    export class $Display$BlockDisplay extends $Display {
        blockRenderState(): $Display$BlockDisplay$BlockRenderState;
        getBlockState(): $BlockState;
        setBlockState(blockState: $BlockState_): void;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static DATA_BLOCK_STATE_ID: $EntityDataAccessor<$BlockState>;
        static NO_BRIGHTNESS_OVERRIDE: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        static TAG_WIDTH: string;
        static TAG_TRANSFORMATION: string;
        static TAG_SHADOW_RADIUS: string;
        static DATA_VIEW_RANGE_ID: $EntityDataAccessor<number>;
        static ID_TAG: string;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        static DATA_SHADOW_STRENGTH_ID: $EntityDataAccessor<number>;
        walkDist: number;
        noCulling: boolean;
        static DATA_SCALE_ID: $EntityDataAccessor<$Vector3f>;
        static TAG_SHADOW_STRENGTH: string;
        static DATA_SHADOW_RADIUS_ID: $EntityDataAccessor<number>;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DATA_RIGHT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        verticalCollisionBelow: boolean;
        static DATA_TRANSLATION_ID: $EntityDataAccessor<$Vector3f>;
        static DATA_BRIGHTNESS_OVERRIDE_ID: $EntityDataAccessor<number>;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        eyeHeight: number;
        static DEFAULT_BB_HEIGHT: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        static TAG_BLOCK_STATE: string;
        wasOnFire: boolean;
        zOld: number;
        static DATA_HEIGHT_ID: $EntityDataAccessor<number>;
        updateRenderState: boolean;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_HEIGHT: string;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        static LOGGER: $Logger;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        static DATA_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_GLOW_COLOR_OVERRIDE_ID: $EntityDataAccessor<number>;
        invulnerableTime: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        random: $RandomSource;
        static DATA_BILLBOARD_RENDER_CONSTRAINTS_ID: $EntityDataAccessor<number>;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static DATA_LEFT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType<never>, level: $Level);
    }
    export class $ItemSteerable {
    }
    export interface $ItemSteerable {
        boost(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSteerable}.
     */
    export type $ItemSteerable_ = (() => boolean);
    export class $PlayerRideableJumping {
    }
    export interface $PlayerRideableJumping extends $PlayerRideable {
        handleStartJump(jumpPower: number): void;
        handleStopJump(): void;
        canJump(): boolean;
        getJumpCooldown(): number;
        onPlayerJump(jumpPower: number): void;
        get jumpCooldown(): number;
    }
    export class $Marker extends $Entity implements $MarkerEntityExt {
        axiom$getData(): $CompoundTag;
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
        constructor(arg0: $EntityType<never>, arg1: $Level);
    }
    export class $SpawnPlacements$SpawnPredicate<T extends $Entity> {
    }
    export interface $SpawnPlacements$SpawnPredicate<T extends $Entity> {
        test(entityType: $EntityType<T>, serverLevel: $ServerLevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SpawnPlacements$SpawnPredicate}.
     */
    export type $SpawnPlacements$SpawnPredicate_<T> = ((arg0: $EntityType<T>, arg1: $ServerLevelAccessor, arg2: $MobSpawnType, arg3: $BlockPos, arg4: $RandomSource) => boolean);
    export class $EquipmentSlot$Type extends $Enum<$EquipmentSlot$Type> {
        static values(): $EquipmentSlot$Type[];
        static valueOf(arg0: string): $EquipmentSlot$Type;
        static ANIMAL_ARMOR: $EquipmentSlot$Type;
        static HUMANOID_ARMOR: $EquipmentSlot$Type;
        static HAND: $EquipmentSlot$Type;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot$Type}.
     */
    export type $EquipmentSlot$Type_ = "hand" | "humanoid_armor" | "animal_armor";
    export class $Display$TextDisplay extends $Display {
        setText(text: $Component_): void;
        getFlags(): number;
        setFlags(flags: number): void;
        static getAlign(flags: number): $Display$TextDisplay$Align;
        getText(): $Component;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getBackgroundColor(): number;
        textRenderState(): $Display$TextDisplay$TextRenderState;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getLineWidth(): number;
        getTextOpacity(): number;
        setTextOpacity(flags: number): void;
        cacheDisplay(splitter: $Display$TextDisplay$LineSplitter_): $Display$TextDisplay$CachedInfo;
        setBackgroundColor(backgroundColor: number): void;
        setLineWidth(backgroundColor: number): void;
        static FLAG_SHADOW: number;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static NO_BRIGHTNESS_OVERRIDE: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        static TAG_WIDTH: string;
        static TAG_TRANSFORMATION: string;
        static TAG_SHADOW_RADIUS: string;
        static DATA_VIEW_RANGE_ID: $EntityDataAccessor<number>;
        static ID_TAG: string;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        static DATA_STYLE_FLAGS_ID: $EntityDataAccessor<number>;
        static TAG_TEXT: string;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        static DATA_SHADOW_STRENGTH_ID: $EntityDataAccessor<number>;
        walkDist: number;
        noCulling: boolean;
        static DATA_SCALE_ID: $EntityDataAccessor<$Vector3f>;
        static TAG_SHADOW_STRENGTH: string;
        static DATA_SHADOW_RADIUS_ID: $EntityDataAccessor<number>;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        portalProcess: $PortalProcessor;
        static DATA_TEXT_ID: $EntityDataAccessor<$Component>;
        verticalCollision: boolean;
        static DATA_LINE_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_RIGHT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        verticalCollisionBelow: boolean;
        static DATA_TRANSLATION_ID: $EntityDataAccessor<$Vector3f>;
        static DATA_BRIGHTNESS_OVERRIDE_ID: $EntityDataAccessor<number>;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        eyeHeight: number;
        static DEFAULT_BB_HEIGHT: number;
        static FLAG_ALIGN_LEFT: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        static DATA_BACKGROUND_COLOR_ID: $EntityDataAccessor<number>;
        wasOnFire: boolean;
        zOld: number;
        static DATA_HEIGHT_ID: $EntityDataAccessor<number>;
        updateRenderState: boolean;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        static DATA_TEXT_OPACITY_ID: $EntityDataAccessor<number>;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static FLAG_ALIGN_RIGHT: number;
        static BOARDING_COOLDOWN: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_HEIGHT: string;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        static INITIAL_BACKGROUND: number;
        static LOGGER: $Logger;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        static DATA_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_GLOW_COLOR_OVERRIDE_ID: $EntityDataAccessor<number>;
        invulnerableTime: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        random: $RandomSource;
        static DATA_BILLBOARD_RENDER_CONSTRAINTS_ID: $EntityDataAccessor<number>;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        static FLAG_SEE_THROUGH: number;
        levelCallback: $EntityInLevelCallback;
        static FLAG_USE_DEFAULT_BACKGROUND: number;
        static TAG_VIEW_RANGE: string;
        static DATA_LEFT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType<never>, level: $Level);
    }
    export class $Display$LinearFloatInterpolator extends $Record implements $Display$FloatInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearFloatInterpolator}.
     */
    export type $Display$LinearFloatInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EquipmentSlot extends $Enum<$EquipmentSlot> implements $StringRepresentable {
        getName(): string;
        static values(): $EquipmentSlot[];
        static valueOf(targetName: string): $EquipmentSlot;
        limit(stack: $ItemStack_): $ItemStack;
        getType(): $EquipmentSlot$Type;
        /**
         * Gets the actual slot index.
         */
        getIndex(): number;
        getIndex(baseIndex: number): number;
        static byName(targetName: string): $EquipmentSlot;
        getSerializedName(): string;
        /**
         * Gets the actual slot index.
         */
        getFilterFlag(): number;
        isArmor(): boolean;
        getRemappedEnumConstantName(): string;
        static CHEST: $EquipmentSlot;
        static HEAD: $EquipmentSlot;
        static CODEC: $StringRepresentable$EnumCodec<$EquipmentSlot>;
        static OFFHAND: $EquipmentSlot;
        static MAINHAND: $EquipmentSlot;
        static LEGS: $EquipmentSlot;
        static NO_COUNT_LIMIT: number;
        static BODY: $EquipmentSlot;
        static FEET: $EquipmentSlot;
        get type(): $EquipmentSlot$Type;
        get serializedName(): string;
        get filterFlag(): number;
        get armor(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlot}.
     */
    export type $EquipmentSlot_ = "mainhand" | "offhand" | "feet" | "legs" | "chest" | "head" | "body";
    export class $VariantHolder<T> {
    }
    export interface $VariantHolder<T> {
        getVariant(): T;
        setVariant(variant: T): void;
    }
    export class $EquipmentUser {
    }
    export interface $EquipmentUser {
        getItemBySlot(slot: $EquipmentSlot_): $ItemStack;
        setItemSlot(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        setDropChance(slot: $EquipmentSlot_, dropChance: number): void;
        resolveSlot(stack: $ItemStack_, excludedSlots: $List_<$EquipmentSlot_>): $EquipmentSlot;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, seed: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentTable: $EquipmentTable_, params: $LootParams): void;
    }
    export class $WalkAnimationState {
        update(newSpeed: number, partialTick: number): void;
        position(partialTick: number): number;
        position(): number;
        setSpeed(speed: number): void;
        speed(partialTick: number): number;
        speed(): number;
        isMoving(): boolean;
        speedOld: number;
        constructor();
        get moving(): boolean;
    }
    export class $SlotAccess {
        static of(getter: $Supplier_<$ItemStack>, setter: $Consumer_<$ItemStack>): $SlotAccess;
        static forEquipmentSlot(entity: $LivingEntity, slot: $EquipmentSlot_): $SlotAccess;
        static forEquipmentSlot(entity: $LivingEntity, slot: $EquipmentSlot_, stackFilter: $Predicate_<$ItemStack>): $SlotAccess;
        static forContainer(inventory: $Container, slot: number, stackFilter: $Predicate_<$ItemStack>): $SlotAccess;
        static forContainer(inventory: $Container, slot: number): $SlotAccess;
        static NULL: $SlotAccess;
    }
    export interface $SlotAccess {
        get(): $ItemStack;
        set(stack: $ItemStack_): boolean;
    }
    export class $LightningBolt extends $Entity {
        getCause(): $ServerPlayer;
        setCause(cause: $ServerPlayer | null): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getBlocksSetOnFire(): number;
        getHitEntities(): $Stream<$Entity>;
        getDamage(): number;
        setDamage(seconds: number): void;
        localvar$zcf000$openpartiesandclaims$onSetCause(arg0: $ServerPlayer): $ServerPlayer;
        handler$fnj000$architectury$handleLightning(ci: $CallbackInfo, list: $List_<any>): void;
        setVisualOnly(visualOnly: boolean): void;
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
        seed: number;
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
        visualOnly: boolean;
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
        constructor(entityType: $EntityType<$LightningBolt>, level: $Level);
        get blocksSetOnFire(): number;
        get hitEntities(): $Stream<$Entity>;
    }
    export class $LivingEntity$Fallsounds extends $Record {
        big(): $SoundEvent;
        small(): $SoundEvent;
        constructor(small: $SoundEvent, big: $SoundEvent);
    }
    /**
     * Values that may be interpreted as {@link $LivingEntity$Fallsounds}.
     */
    export type $LivingEntity$Fallsounds_ = { small?: $SoundEvent, big?: $SoundEvent,  } | [small?: $SoundEvent, big?: $SoundEvent, ];
    export class $Display$ItemDisplay extends $Display {
        getItemStack(): $ItemStack;
        getItemTransform(): $ItemDisplayContext;
        itemRenderState(): $Display$ItemDisplay$ItemRenderState;
        setItemTransform(itemTransform: $ItemDisplayContext_): void;
        setItemStack(itemStack: $ItemStack_): void;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static NO_BRIGHTNESS_OVERRIDE: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        static TAG_WIDTH: string;
        static TAG_TRANSFORMATION: string;
        static TAG_SHADOW_RADIUS: string;
        static DATA_VIEW_RANGE_ID: $EntityDataAccessor<number>;
        static ID_TAG: string;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        static DATA_SHADOW_STRENGTH_ID: $EntityDataAccessor<number>;
        walkDist: number;
        noCulling: boolean;
        static DATA_SCALE_ID: $EntityDataAccessor<$Vector3f>;
        static TAG_SHADOW_STRENGTH: string;
        static DATA_SHADOW_RADIUS_ID: $EntityDataAccessor<number>;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DATA_RIGHT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        verticalCollisionBelow: boolean;
        static DATA_TRANSLATION_ID: $EntityDataAccessor<$Vector3f>;
        static DATA_ITEM_DISPLAY_ID: $EntityDataAccessor<number>;
        static DATA_BRIGHTNESS_OVERRIDE_ID: $EntityDataAccessor<number>;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        eyeHeight: number;
        static DEFAULT_BB_HEIGHT: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static DATA_HEIGHT_ID: $EntityDataAccessor<number>;
        updateRenderState: boolean;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_HEIGHT: string;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        static LOGGER: $Logger;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        static DATA_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_GLOW_COLOR_OVERRIDE_ID: $EntityDataAccessor<number>;
        invulnerableTime: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        random: $RandomSource;
        static DATA_BILLBOARD_RENDER_CONSTRAINTS_ID: $EntityDataAccessor<number>;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static DATA_LEFT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        static DATA_ITEM_STACK_ID: $EntityDataAccessor<$ItemStack>;
        constructor(entityType: $EntityType<never>, level: $Level);
    }
    export class $EntitySelector$MobCanWearArmorEntitySelector implements $Predicate<$Entity> {
        test(entity: $Entity | null): boolean;
        or(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        negate(): $Predicate<$Entity>;
        and(arg0: $Predicate_<$Entity>): $Predicate<$Entity>;
        constructor(stack: $ItemStack_);
    }
    export class $Entity$MovementEmission extends $Enum<$Entity$MovementEmission> {
        static values(): $Entity$MovementEmission[];
        static valueOf(arg0: string): $Entity$MovementEmission;
        emitsEvents(): boolean;
        emitsAnything(): boolean;
        emitsSounds(): boolean;
        static ALL: $Entity$MovementEmission;
        static EVENTS: $Entity$MovementEmission;
        sounds: boolean;
        static SOUNDS: $Entity$MovementEmission;
        static NONE: $Entity$MovementEmission;
        events: boolean;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MovementEmission}.
     */
    export type $Entity$MovementEmission_ = "none" | "sounds" | "events" | "all";
    export class $AnimationState {
        isStarted(): boolean;
        start(tickCount: number): void;
        stop(): void;
        updateTime(ageInTicks: number, speed: number): void;
        fastForward(duration: number, speed: number): void;
        animateWhen(condition: boolean, tickCount: number): void;
        getAccumulatedTime(): number;
        startIfStopped(tickCount: number): void;
        ifStarted(action: $Consumer_<$AnimationState>): void;
        constructor();
        get started(): boolean;
        get accumulatedTime(): number;
    }
    /**
     * @deprecated
     */
    export class $Shearable {
    }
    export interface $Shearable extends $IShearable {
        /**
         * @deprecated
         */
        readyForShearing(): boolean;
        /**
         * @deprecated
         */
        shear(source: $SoundSource_): void;
    }
    export class $AreaEffectCloud extends $Entity implements $TraceableEntity {
        getOwner(): $LivingEntity;
        setOwner(owner: $LivingEntity | null): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDuration(): number;
        setDuration(duration: number): void;
        getRadiusPerTick(): number;
        setRadiusPerTick(radius: number): void;
        setParticle(particleOption: $ParticleOptions_): void;
        setPotionContents(potionContents: $PotionContents_): void;
        getParticle(): $ParticleOptions;
        getRadiusOnUse(): number;
        setDurationOnUse(duration: number): void;
        setWaitTime(duration: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getDurationOnUse(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getWaitTime(): number;
        setRadiusOnUse(radius: number): void;
        /**
         * Sets if the cloud is waiting. While waiting, the radius is ignored and the cloud shows fewer particles in its area.
         */
        setWaiting(waiting: boolean): void;
        /**
         * Returns `true` if the cloud is waiting. While waiting, the radius is ignored and the cloud shows fewer particles in its area.
         */
        isWaiting(): boolean;
        addEffect(effectInstance: $MobEffectInstance): void;
        getRadius(): number;
        setRadius(radius: number): void;
        firstTick: boolean;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static DEFAULT_WIDTH: number;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        potionContents: $PotionContents;
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
        reapplicationDelay: number;
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
        static HEIGHT: number;
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
        constructor(entityType: $EntityType<$AreaEffectCloud>, level: $Level);
        constructor(level: $Level, x: number, arg2: number, y: number);
    }
    export class $PathfinderMob extends $Mob {
        /**
         * Returns whether the entity got a `Path`.
         */
        shouldStayCloseToLeashHolder(): boolean;
        getWalkTargetValue(pos: $BlockPos_): number;
        getWalkTargetValue(pos: $BlockPos_, level: $LevelReader): number;
        /**
         * Returns whether the entity got a `Path`.
         */
        isPanicking(): boolean;
        /**
         * Returns whether the entity got a `Path`.
         */
        isPathFinding(): boolean;
        followLeashSpeed(): number;
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
        constructor(entityType: $EntityType<$PathfinderMob>, level: $Level);
        get panicking(): boolean;
        get pathFinding(): boolean;
    }
    export class $Display$RenderState extends $Record {
        transformation(): $Display$GenericInterpolator<$Transformation>;
        shadowRadius(): $Display$FloatInterpolator;
        shadowStrength(): $Display$FloatInterpolator;
        billboardConstraints(): $Display$BillboardConstraints;
        brightnessOverride(): number;
        glowColorOverride(): number;
        constructor(arg0: $Display$GenericInterpolator_<$Transformation>, arg1: $Display$BillboardConstraints_, arg2: number, arg3: $Display$FloatInterpolator_, arg4: $Display$FloatInterpolator_, arg5: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$RenderState}.
     */
    export type $Display$RenderState_ = { brightnessOverride?: number, glowColorOverride?: number, billboardConstraints?: $Display$BillboardConstraints_, shadowStrength?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowRadius?: $Display$FloatInterpolator_,  } | [brightnessOverride?: number, glowColorOverride?: number, billboardConstraints?: $Display$BillboardConstraints_, shadowStrength?: $Display$FloatInterpolator_, transformation?: $Display$GenericInterpolator_<$Transformation>, shadowRadius?: $Display$FloatInterpolator_, ];
    export class $RelativeMovement extends $Enum<$RelativeMovement> {
        static values(): $RelativeMovement[];
        static valueOf(arg0: string): $RelativeMovement;
        static unpack(packedMovements: number): $Set<$RelativeMovement>;
        static pack(movements: $Set_<$RelativeMovement_>): number;
        static ROTATION: $Set<$RelativeMovement>;
        static ALL: $Set<$RelativeMovement>;
        static Y_ROT: $RelativeMovement;
        static X_ROT: $RelativeMovement;
        static X: $RelativeMovement;
        static Y: $RelativeMovement;
        static Z: $RelativeMovement;
    }
    /**
     * Values that may be interpreted as {@link $RelativeMovement}.
     */
    export type $RelativeMovement_ = "x" | "y" | "z" | "y_rot" | "x_rot";
    export class $Display$PosRotInterpolationTarget {
    }
    export class $OminousItemSpawner extends $Entity {
        static create(level: $Level, item: $ItemStack_): $OminousItemSpawner;
        getItem(): $ItemStack;
        /**
         * Called to update the entity's position/logic.
         */
        addParticles(): void;
        firstTick: boolean;
        static TICKS_BEFORE_ABOUT_TO_SPAWN_SOUND: number;
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
        constructor(entityType: $EntityType<$OminousItemSpawner>, level: $Level);
        get item(): $ItemStack;
    }
    export class $EntityType$Builder<T extends $Entity> implements $FabricEntityTypeImpl$Builder, $FabricEntityType$Builder<any> {
        static of<T extends $Entity>(factory: $EntityType$EntityFactory_<T>, category: $MobCategory_): $EntityType$Builder<T>;
        build(key: string): $EntityType<$Object>;
        build(): $EntityType<any>;
        attach(attachment: $EntityAttachment_, x: number, y: number, z: number): $EntityType$Builder<$Object>;
        attach(attachment: $EntityAttachment_, pos: $Vec3_): $EntityType$Builder<$Object>;
        canSpawnFarFromPlayer(): $EntityType$Builder<$Object>;
        alwaysUpdateVelocity(arg0: boolean): $EntityType$Builder<any>;
        clientTrackingRange(clientTrackingRange: number): $EntityType$Builder<$Object>;
        spawnDimensionsScale(eyeHeight: number): $EntityType$Builder<$Object>;
        passengerAttachments(...attachPoints: number[]): $EntityType$Builder<$Object>;
        passengerAttachments(...attachPoints: $Vec3_[]): $EntityType$Builder<$Object>;
        fabric_setMobEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Mob<any>): void;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $EntityType$Builder<$Object>;
        setUpdateInterval(clientTrackingRange: number): $EntityType$Builder<$Object>;
        setTrackingRange(clientTrackingRange: number): $EntityType$Builder<$Object>;
        static createNothing<T extends $Entity>(category: $MobCategory_): $EntityType$Builder<T>;
        vehicleAttachment(attachPoint: $Vec3_): $EntityType$Builder<$Object>;
        eyeHeight(eyeHeight: number): $EntityType$Builder<$Object>;
        fabric_setLivingEntityBuilder(arg0: $FabricEntityTypeImpl$Builder$Living<any>): void;
        immuneTo(...blocks: $Block[]): $EntityType$Builder<$Object>;
        sized(width: number, height: number): $EntityType$Builder<$Object>;
        noSummon(): $EntityType$Builder<$Object>;
        fireImmune(): $EntityType$Builder<$Object>;
        updateInterval(clientTrackingRange: number): $EntityType$Builder<$Object>;
        ridingOffset(eyeHeight: number): $EntityType$Builder<$Object>;
        nameTagOffset(eyeHeight: number): $EntityType$Builder<$Object>;
        setShouldReceiveVelocityUpdates(arg0: boolean): $EntityType$Builder<$Object>;
        noSave(): $EntityType$Builder<$Object>;
        set trackingRange(value: number);
        set shouldReceiveVelocityUpdates(value: boolean);
    }
    export class $Display$TextDisplay$CachedLine extends $Record {
        width(): number;
        contents(): $FormattedCharSequence;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $Display$TextDisplay$CachedLine}.
     */
    export type $Display$TextDisplay$CachedLine_ = { width?: number, contents?: $FormattedCharSequence_,  } | [width?: number, contents?: $FormattedCharSequence_, ];
    export class $EquipmentTable extends $Record {
        slotDropChances(): $Map<$EquipmentSlot, number>;
        lootTable(): $ResourceKey<$LootTable>;
        static CODEC: $Codec<$EquipmentTable>;
        static DROP_CHANCES_CODEC: $Codec<$Map<$EquipmentSlot, number>>;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: $Map_<$EquipmentSlot_, number>);
    }
    /**
     * Values that may be interpreted as {@link $EquipmentTable}.
     */
    export type $EquipmentTable_ = { slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>,  } | [slotDropChances?: $Map_<$EquipmentSlot_, number>, lootTable?: $ResourceKey_<$LootTable>, ];
    export class $PortalProcessor {
        isInsidePortalThisTick(): boolean;
        getPortalLocalTransition(): $Portal$Transition;
        isSamePortal(portal: $Portal_): boolean;
        hasExpired(): boolean;
        updateEntryPosition(entryPosition: $BlockPos_): void;
        processPortalTeleportation(level: $ServerLevel, entity: $Entity, canChangeDimensions: boolean): boolean;
        getPortalDestination(level: $ServerLevel, entity: $Entity): $DimensionTransition;
        setAsInsidePortalThisTick(insidePortalThisTick: boolean): void;
        getEntryPosition(): $BlockPos;
        getPortalTime(): number;
        constructor(portal: $Portal_, entryPosition: $BlockPos_);
        get insidePortalThisTick(): boolean;
        get portalLocalTransition(): $Portal$Transition;
        set asInsidePortalThisTick(value: boolean);
        get entryPosition(): $BlockPos;
        get portalTime(): number;
    }
    export class $MobSpawnType extends $Enum<$MobSpawnType> {
        static values(): $MobSpawnType[];
        static valueOf(arg0: string): $MobSpawnType;
        static ignoresLightRequirements(spawnType: $MobSpawnType_): boolean;
        static isSpawner(spawnType: $MobSpawnType_): boolean;
        static CONVERSION: $MobSpawnType;
        static STRUCTURE: $MobSpawnType;
        static BUCKET: $MobSpawnType;
        static DISPENSER: $MobSpawnType;
        static SPAWNER: $MobSpawnType;
        static EVENT: $MobSpawnType;
        static MOB_SUMMONED: $MobSpawnType;
        static NATURAL: $MobSpawnType;
        static SPAWN_EGG: $MobSpawnType;
        static PATROL: $MobSpawnType;
        static CHUNK_GENERATION: $MobSpawnType;
        static TRIAL_SPAWNER: $MobSpawnType;
        static BREEDING: $MobSpawnType;
        static REINFORCEMENT: $MobSpawnType;
        static COMMAND: $MobSpawnType;
        static TRIGGERED: $MobSpawnType;
        static JOCKEY: $MobSpawnType;
    }
    /**
     * Values that may be interpreted as {@link $MobSpawnType}.
     */
    export type $MobSpawnType_ = "natural" | "chunk_generation" | "spawner" | "structure" | "breeding" | "mob_summoned" | "jockey" | "event" | "conversion" | "reinforcement" | "triggered" | "bucket" | "spawn_egg" | "command" | "dispenser" | "patrol" | "trial_spawner";
    export class $ExperienceOrb extends $Entity {
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        getValue(): number;
        /**
         * Returns a number from 1 to 10 based on how much XP this orb is worth. This is used by RenderXPOrb to determine what texture to use.
         */
        getIcon(): number;
        handler$fnm002$vinery$onPlayerTouch(player: $Player, ci: $CallbackInfo): void;
        /**
         * Get a fragment of the maximum experience points value for the supplied value of experience points value.
         */
        static getExperienceValue(expValue: number): number;
        repairPlayerItems(player: $ServerPlayer, value: number): number;
        static tryMergeToExisting(level: $ServerLevel, pos: $Vec3_, amount: number): boolean;
        static award(level: $ServerLevel, pos: $Vec3_, amount: number): void;
        handler$zbp000$openpartiesandclaims$onPlayerTouch(arg0: $Player, arg1: $CallbackInfo): void;
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
        count: number;
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
        value: number;
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
        constructor(level: $Level, x: number, arg2: number, y: number, arg4: number);
        constructor(entityType: $EntityType<$ExperienceOrb>, level: $Level);
        get icon(): number;
    }
    export class $Display$LinearIntInterpolator extends $Record implements $Display$IntInterpolator {
    }
    /**
     * Values that may be interpreted as {@link $Display$LinearIntInterpolator}.
     */
    export type $Display$LinearIntInterpolator_ = { previous?: number, current?: number,  } | [previous?: number, current?: number, ];
    export class $EntityDimensions extends $Record {
        scale(width: number, height: number): $EntityDimensions;
        scale(factor: number): $EntityDimensions;
        fixed(): boolean;
        static fixed(width: number, height: number): $EntityDimensions;
        width(): number;
        height(): number;
        makeBoundingBox(pos: $Vec3_): $AABB;
        makeBoundingBox(x: number, arg1: number, y: number): $AABB;
        withEyeHeight(factor: number): $EntityDimensions;
        attachments(): $EntityAttachments;
        eyeHeight(): number;
        static scalable(width: number, height: number): $EntityDimensions;
        withAttachments(attachments: $EntityAttachments$Builder): $EntityDimensions;
        constructor(arg0: number, arg1: number, arg2: number, arg3: $EntityAttachments, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $EntityDimensions}.
     */
    export type $EntityDimensions_ = { eyeHeight?: number, height?: number, fixed?: boolean, attachments?: $EntityAttachments, width?: number,  } | [eyeHeight?: number, height?: number, fixed?: boolean, attachments?: $EntityAttachments, width?: number, ];
    export class $EntityAttachment extends $Enum<$EntityAttachment> {
        static values(): $EntityAttachment[];
        static valueOf(arg0: string): $EntityAttachment;
        createFallbackPoints(width: number, height: number): $List<$Vec3>;
        static VEHICLE: $EntityAttachment;
        static NAME_TAG: $EntityAttachment;
        static PASSENGER: $EntityAttachment;
        static WARDEN_CHEST: $EntityAttachment;
    }
    /**
     * Values that may be interpreted as {@link $EntityAttachment}.
     */
    export type $EntityAttachment_ = "passenger" | "vehicle" | "name_tag" | "warden_chest";
    export class $TraceableEntity {
    }
    export interface $TraceableEntity {
        getOwner(): $Entity;
        get owner(): $Entity;
    }
    /**
     * Values that may be interpreted as {@link $TraceableEntity}.
     */
    export type $TraceableEntity_ = (() => $Entity);
    export class $HumanoidArm extends $Enum<$HumanoidArm> implements $OptionEnum, $StringRepresentable {
        static values(): $HumanoidArm[];
        static valueOf(arg0: string): $HumanoidArm;
        getKey(): string;
        getId(): number;
        getSerializedName(): string;
        getOpposite(): $HumanoidArm;
        getCaption(): $Component;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HumanoidArm>;
        static LEFT: $HumanoidArm;
        static BY_ID: $IntFunction<$HumanoidArm>;
        static RIGHT: $HumanoidArm;
        get key(): string;
        get id(): number;
        get serializedName(): string;
        get opposite(): $HumanoidArm;
        get caption(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidArm}.
     */
    export type $HumanoidArm_ = "left" | "right";
    export class $EntityType$EntityFactory<T extends $Entity> {
    }
    export interface $EntityType$EntityFactory<T extends $Entity> {
        create(entityType: $EntityType<T>, level: $Level): T;
    }
    /**
     * Values that may be interpreted as {@link $EntityType$EntityFactory}.
     */
    export type $EntityType$EntityFactory_<T> = ((arg0: $EntityType<T>, arg1: $Level) => T);
    export class $MoverType extends $Enum<$MoverType> {
        static values(): $MoverType[];
        static valueOf(arg0: string): $MoverType;
        static PLAYER: $MoverType;
        static PISTON: $MoverType;
        static SHULKER_BOX: $MoverType;
        static SELF: $MoverType;
        static SHULKER: $MoverType;
    }
    /**
     * Values that may be interpreted as {@link $MoverType}.
     */
    export type $MoverType_ = "self" | "player" | "piston" | "shulker_box" | "shulker";
    export class $Entity$RemovalReason extends $Enum<$Entity$RemovalReason> {
        static values(): $Entity$RemovalReason[];
        static valueOf(arg0: string): $Entity$RemovalReason;
        shouldDestroy(): boolean;
        shouldSave(): boolean;
        static UNLOADED_TO_CHUNK: $Entity$RemovalReason;
        static UNLOADED_WITH_PLAYER: $Entity$RemovalReason;
        static DISCARDED: $Entity$RemovalReason;
        static CHANGED_DIMENSION: $Entity$RemovalReason;
        static KILLED: $Entity$RemovalReason;
    }
    /**
     * Values that may be interpreted as {@link $Entity$RemovalReason}.
     */
    export type $Entity$RemovalReason_ = "killed" | "discarded" | "unloaded_to_chunk" | "unloaded_with_player" | "changed_dimension";
    export class $Saddleable {
    }
    export interface $Saddleable {
        isSaddled(): boolean;
        getSaddleSoundEvent(): $SoundEvent;
        isSaddleable(): boolean;
        equipSaddle(stack: $ItemStack_, soundSource: $SoundSource_ | null): void;
        get saddled(): boolean;
        get saddleSoundEvent(): $SoundEvent;
        get saddleable(): boolean;
    }
    export class $Targeting {
    }
    export interface $Targeting {
        getTarget(): $LivingEntity;
        get target(): $LivingEntity;
    }
    /**
     * Values that may be interpreted as {@link $Targeting}.
     */
    export type $Targeting_ = (() => $LivingEntity);
    export class $Pose extends $Enum<$Pose> {
        static values(): $Pose[];
        static valueOf(arg0: string): $Pose;
        id(): number;
        static SLEEPING: $Pose;
        static SNIFFING: $Pose;
        static EMERGING: $Pose;
        static INHALING: $Pose;
        static FALL_FLYING: $Pose;
        static LONG_JUMPING: $Pose;
        static BY_ID: $IntFunction<$Pose>;
        static DYING: $Pose;
        static CROAKING: $Pose;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $Pose>;
        static STANDING: $Pose;
        static SWIMMING: $Pose;
        static SITTING: $Pose;
        static SHOOTING: $Pose;
        static SLIDING: $Pose;
        static USING_TONGUE: $Pose;
        static CROUCHING: $Pose;
        static ROARING: $Pose;
        static DIGGING: $Pose;
        static SPIN_ATTACK: $Pose;
    }
    /**
     * Values that may be interpreted as {@link $Pose}.
     */
    export type $Pose_ = "standing" | "fall_flying" | "sleeping" | "swimming" | "spin_attack" | "crouching" | "long_jumping" | "dying" | "croaking" | "using_tongue" | "sitting" | "roaring" | "sniffing" | "emerging" | "digging" | "sliding" | "shooting" | "inhaling";
    export class $OwnableEntity {
    }
    export interface $OwnableEntity {
        getOwner(): $LivingEntity;
        level(): $EntityGetter;
        getOwnerUUID(): $UUID;
        get owner(): $LivingEntity;
        get ownerUUID(): $UUID;
    }
    export class $EquipmentSlotGroup extends $Enum<$EquipmentSlotGroup> implements $StringRepresentable {
        static values(): $EquipmentSlotGroup[];
        test(slot: $EquipmentSlot_): boolean;
        static valueOf(arg0: string): $EquipmentSlotGroup;
        static bySlot(slot: $EquipmentSlot_): $EquipmentSlotGroup;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static HEAD: $EquipmentSlotGroup;
        static CODEC: $Codec<$EquipmentSlotGroup>;
        static OFFHAND: $EquipmentSlotGroup;
        static ARMOR: $EquipmentSlotGroup;
        static MAINHAND: $EquipmentSlotGroup;
        static LEGS: $EquipmentSlotGroup;
        static BY_ID: $IntFunction<$EquipmentSlotGroup>;
        static ANY: $EquipmentSlotGroup;
        static HAND: $EquipmentSlotGroup;
        static FEET: $EquipmentSlotGroup;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EquipmentSlotGroup>;
        static CHEST: $EquipmentSlotGroup;
        static BODY: $EquipmentSlotGroup;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EquipmentSlotGroup}.
     */
    export type $EquipmentSlotGroup_ = "any" | "mainhand" | "offhand" | "hand" | "feet" | "legs" | "chest" | "head" | "armor" | "body";
    export class $Display extends $Entity implements $DisplayAccessor$1, $DisplayAccessor {
        getWidth(): number;
        getHeight(): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getTransformationInterpolationDelay(): number;
        setTransformationInterpolationDelay(glowColorOverride: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getTransformationInterpolationDuration(): number;
        setTransformationInterpolationDuration(glowColorOverride: number): void;
        updateRenderSubState(interpolate: boolean, partialTick: number): void;
        setBrightnessOverride(brightnessOverride: $Brightness_ | null): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getGlowColorOverride(): number;
        setGlowColorOverride(glowColorOverride: number): void;
        static createTransformation(synchedEntityData: $SynchedEntityData): $Transformation;
        getBillboardConstraints(): $Display$BillboardConstraints;
        getBrightnessOverride(): $Brightness;
        setBillboardConstraints(billboardConstraints: $Display$BillboardConstraints_): void;
        setTransformation(transformation: $Transformation): void;
        renderState(): $Display$RenderState;
        setShadowRadius(height: number): void;
        setViewRange(height: number): void;
        setShadowStrength(height: number): void;
        getViewRange(): number;
        getShadowRadius(): number;
        getShadowStrength(): number;
        setPosRotInterpolationDuration(glowColorOverride: number): void;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getPackedBrightnessOverride(): number;
        calculateInterpolationProgress(partialTick: number): number;
        /**
         * The maximum height from where the entity is allowed to jump (used in pathfinder)
         */
        getPosRotInterpolationDuration(): number;
        static getDataTransformationInterpolationDurationId$axiom_$md$707fe4$0(): $EntityDataAccessor<any>;
        static getDataPosRotInterpolationId$axiom_$md$707fe4$1(): $EntityDataAccessor<any>;
        setWidth(height: number): void;
        setHeight(height: number): void;
        invokeSetWidth(height: number): void;
        invokeSetHeight(height: number): void;
        xRot: number;
        wasEyeInWater: boolean;
        hasImpulse: boolean;
        static ENTITY_COUNTER: $AtomicInteger;
        static NO_BRIGHTNESS_OVERRIDE: number;
        static TAG_POS_ROT_INTERPOLATION_DURATION: string;
        noPhysics: boolean;
        yo: number;
        static FLAG_ONFIRE: number;
        removalReason: $Entity$RemovalReason;
        static TAG_WIDTH: string;
        static TAG_TRANSFORMATION: string;
        static TAG_SHADOW_RADIUS: string;
        static DATA_VIEW_RANGE_ID: $EntityDataAccessor<number>;
        static ID_TAG: string;
        static TAG_TRANSFORMATION_INTERPOLATION_DURATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        boardingCooldown: number;
        zo: number;
        static DATA_POSE: $EntityDataAccessor<$Pose>;
        static DATA_SHADOW_STRENGTH_ID: $EntityDataAccessor<number>;
        walkDist: number;
        noCulling: boolean;
        static DATA_SCALE_ID: $EntityDataAccessor<$Vector3f>;
        static TAG_SHADOW_STRENGTH: string;
        static DATA_SHADOW_RADIUS_ID: $EntityDataAccessor<number>;
        forgeFluidTypeHeight: $Object2DoubleMap<$FluidType>;
        static UUID_TAG: string;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DATA_RIGHT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        verticalCollisionBelow: boolean;
        static DATA_TRANSLATION_ID: $EntityDataAccessor<$Vector3f>;
        static DATA_BRIGHTNESS_OVERRIDE_ID: $EntityDataAccessor<number>;
        static TAG_GLOW_COLOR_OVERRIDE: string;
        eyeHeight: number;
        static DEFAULT_BB_HEIGHT: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        stringUUID: string;
        wasOnFire: boolean;
        zOld: number;
        static DATA_HEIGHT_ID: $EntityDataAccessor<number>;
        updateRenderState: boolean;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        wasTouchingWater: boolean;
        horizontalCollision: boolean;
        dimensions: $EntityDimensions;
        firstTick: boolean;
        static TAG_BRIGHTNESS: string;
        uuid: $UUID;
        stuckSpeedMultiplier: $Vec3;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        static TAG_HEIGHT: string;
        yRot: number;
        moveDist: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static FLAG_FALL_FLYING: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        static LOGGER: $Logger;
        hurtMarked: boolean;
        entityData: $SynchedEntityData;
        static DATA_WIDTH_ID: $EntityDataAccessor<number>;
        static DATA_GLOW_COLOR_OVERRIDE_ID: $EntityDataAccessor<number>;
        invulnerableTime: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static TAG_TRANSFORMATION_START_INTERPOLATION: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        random: $RandomSource;
        static DATA_BILLBOARD_RENDER_CONSTRAINTS_ID: $EntityDataAccessor<number>;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        /**
         * @deprecated
         */
        fluidHeight: $Object2DoubleMap<$TagKey<$Fluid>>;
        minorHorizontalCollision: boolean;
        levelCallback: $EntityInLevelCallback;
        static TAG_VIEW_RANGE: string;
        static DATA_LEFT_ROTATION_ID: $EntityDataAccessor<$Quaternionf>;
        static TAG_BILLBOARD: string;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        static FLAG_GLOWING: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        constructor(entityType: $EntityType<never>, level: $Level);
        set transformation(value: $Transformation);
        get packedBrightnessOverride(): number;
        static get dataTransformationInterpolationDurationId$axiom_$md$707fe4$0(): $EntityDataAccessor<any>;
        static get dataPosRotInterpolationId$axiom_$md$707fe4$1(): $EntityDataAccessor<any>;
    }
    export class $Crackiness$Level extends $Enum<$Crackiness$Level> {
        static values(): $Crackiness$Level[];
        static valueOf(arg0: string): $Crackiness$Level;
        static HIGH: $Crackiness$Level;
        static MEDIUM: $Crackiness$Level;
        static LOW: $Crackiness$Level;
        static NONE: $Crackiness$Level;
    }
    /**
     * Values that may be interpreted as {@link $Crackiness$Level}.
     */
    export type $Crackiness$Level_ = "none" | "low" | "medium" | "high";
    export class $Mob extends $LivingEntity implements $EquipmentUser, $Leashable, $Targeting, $PersistenceAccesssor, $EquipmentEntity, $NavigatingEntity, $MobAccessor {
        /**
         * Gets the active target the Goal system uses for tracking
         */
        getTarget(): $LivingEntity;
        /**
         * Sets the active target the Goal system uses for tracking
         */
        setTarget(target: $LivingEntity | null): void;
        redirect$ihe000$moonlight$fixSpawnAnimX(arg0: $Mob, arg1: number): number;
        populateDefaultEquipmentEnchantments(level: $ServerLevelAccessor, random: $RandomSource, difficulty: $DifficultyInstance): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        setPersistenceRequired(): void;
        checkSpawnObstruction(level: $LevelReader): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        spawnAnim(): void;
        checkSpawnRules(level: $LevelAccessor, reason: $MobSpawnType_): boolean;
        convertTo<T extends $Mob>(entityType: $EntityType<T>, transferInventory: boolean): T;
        /**
         * Returns whether the entity is in a server world
         */
        lithium$isRegisteredToWorld(): boolean;
        lithium$getRegisteredNavigation(): $PathNavigation;
        getNavigation(): $PathNavigation;
        canFireProjectileWeapon(projectileWeapon: $ProjectileWeaponItem): boolean;
        getPathfindingMalus(pathType: $PathType_): number;
        equipItemIfPossible(stack: $ItemStack_): $ItemStack;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getAmbientSoundInterval(): number;
        canReplaceCurrentItem(candidate: $ItemStack_, existing: $ItemStack_): boolean;
        isWithinMeleeAttackRange(entity: $LivingEntity): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isPersistenceRequired(): boolean;
        static createMobAttributes(): $AttributeSupplier$Builder;
        /**
         * Returns whether the entity is in a server world
         */
        shouldDespawnInPeaceful(): boolean;
        setPathfindingMalus(pathType: $PathType_, malus: number): void;
        isMaxGroupSizeReached(size: number): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        leashTooFarBehaviour(): void;
        getEquipmentDropChance(slot: $EquipmentSlot_): number;
        isWithinRestriction(pos: $BlockPos_): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isWithinRestriction(): boolean;
        canReplaceEqualItem(candidate: $ItemStack_, existing: $ItemStack_): boolean;
        dropPreservedEquipment(predicate: $Predicate_<$ItemStack>): $Set<$EquipmentSlot>;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        dropPreservedEquipment(): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxSpawnClusterSize(): number;
        /**
         * Gets the bounding box of this Entity, adjusted to take auxiliary entities into account (e.g. the tile contained by a minecart, such as a command block).
         */
        getAttackBoundingBox(): $AABB;
        static getEquipmentForSlot(slot: $EquipmentSlot_, chance: number): $Item;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clampHeadRotationToBody(): void;
        onOffspringSpawnedFromEgg(player: $Player, child: $Mob): void;
        /**
         * Returns whether the entity is in a server world
         */
        requiresCustomPersistence(): boolean;
        enchantSpawnedWeapon(level: $ServerLevelAccessor, random: $RandomSource, difficulty: $DifficultyInstance): void;
        enchantSpawnedArmor(level: $ServerLevelAccessor, random: $RandomSource, slot: $EquipmentSlot_, difficulty: $DifficultyInstance): void;
        /**
         * Removes the leash from this entity
         */
        dropLeash(broadcastPacket: boolean, dropLeash: boolean): void;
        /**
         * Returns whether the entity is in a server world
         */
        isNoAi(): boolean;
        setNoAi(aggressive: boolean): void;
        /**
         * Tests if this entity should pick up a weapon or an armor piece. Entity drops current weapon or armor if the new one is better.
         */
        pickUpItem(itemEntity: $ItemEntity): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        ate(): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setZza(speed: number): void;
        getSensing(): $Sensing;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setYya(speed: number): void;
        /**
         * Sets the movespeed used for the new AI system.
         */
        setXxa(speed: number): void;
        restrictTo(pos: $BlockPos_, distance: number): void;
        handler$zdl000$openpartiesandclaims$onAiStepItemPickup(arg0: $CallbackInfo, arg1: $Vec3i, arg2: $Iterator<any>, arg3: $ItemEntity): void;
        /**
         * Returns whether the entity is in a server world
         */
        isSpawnCancelled(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        playAmbientSound(): void;
        /**
         * @deprecated
         */
        finalizeSpawn(level: $ServerLevelAccessor, difficulty: $DifficultyInstance, spawnType: $MobSpawnType_, spawnGroupData: $SpawnGroupData | null): $SpawnGroupData;
        modifyExpressionValue$gmi000$create$mobRidingContraptionsMaintainTheirAttackBox(entity: $Entity): $Entity;
        populateDefaultEquipmentSlots(random: $RandomSource, difficulty: $DifficultyInstance): void;
        /**
         * Returns whether the entity is in a server world
         */
        shouldPassengersInheritMalus(): boolean;
        setItemSlotAndDropWhenKilled(slot: $EquipmentSlot_, stack: $ItemStack_): void;
        lithium$setRegisteredToWorld(arg0: $PathNavigation): void;
        /**
         * Returns whether the entity is in a server world
         */
        isWearingBodyArmor(): boolean;
        setBodyArmorItem(stack: $ItemStack_): void;
        isBodyArmorItem(stack: $ItemStack_): boolean;
        getLookControl(): $LookControl;
        createBodyControl(): $BodyRotationControl;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        updateControlFlags(): void;
        getBodyArmorItem(): $ItemStack;
        createNavigation(level: $Level): $PathNavigation;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxHeadXRot(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        registerGoals(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onPathfindingStart(): void;
        getMoveControl(): $MoveControl;
        static checkMobSpawnRules(type: $EntityType<$Mob>, level: $LevelAccessor, spawnType: $MobSpawnType_, pos: $BlockPos_, random: $RandomSource): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        canPickUpLoot(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onPathfindingDone(): void;
        getJumpControl(): $JumpControl;
        getAmbientSound(): $SoundEvent;
        /**
         * Gets the active target the Goal system uses for tracking
         */
        getTargetFromBrain(): $LivingEntity;
        setGuaranteedDrop(slot: $EquipmentSlot_): void;
        mobInteract(player: $Player, hand: $InteractionHand_): $InteractionResult;
        getRestrictCenter(): $BlockPos;
        setLeashData(leashData: $Leashable$LeashData | null): void;
        setCanPickUpLoot(aggressive: boolean): void;
        getPickupReach(): $Vec3i;
        wantsToPickUp(stack: $ItemStack_): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        hasRestriction(): boolean;
        setAggressive(aggressive: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        removeFreeWill(): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        playAttackSound(): void;
        canHoldItem(stack: $ItemStack_): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        stopInPlace(): void;
        /**
         * Returns whether the entity is in a server world
         */
        isLeftHanded(): boolean;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        sendDebugPackets(): void;
        getLeashData(): $Leashable$LeashData;
        /**
         * Returns whether the entity is in a server world
         */
        isAggressive(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isSunBurnTick(): boolean;
        removeAllGoals(filter: $Predicate_<$Goal>): void;
        getSpawnType(): $MobSpawnType;
        setDropChance(slot: $EquipmentSlot_, chance: number): void;
        /**
         * Returns whether the entity is in a server world
         */
        canBeLeashed(): boolean;
        setSpawnCancelled(aggressive: boolean): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        customServerAiStep(): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getMaxHeadYRot(): number;
        /**
         * Returns the amount of health added by the Absorption effect.
         */
        getRestrictRadius(): number;
        removeWhenFarAway(distanceToClosestPlayer: number): boolean;
        setLeftHanded(aggressive: boolean): void;
        /**
         * Get number of ticks, at least during which the living entity will be silent.
         */
        getHeadRotSpeed(): number;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        clearRestriction(): void;
        setBaby(aggressive: boolean): void;
        handler$zdh000$openpartiesandclaims$onAiStepPre(arg0: $CallbackInfo): void;
        handler$zdh000$openpartiesandclaims$onAiStepPost(arg0: $CallbackInfo): void;
        getDefaultLootTable(): $ResourceKey<$LootTable>;
        /**
         * Changes the X and Y rotation so that this entity is facing the given entity.
         */
        lookAt(entity: $Entity, maxYRotIncrease: number, maxXRotIncrease: number): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentTable: $EquipmentTable_): void;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        lithium$updateNavigationRegistration(): void;
        resolveSlot(stack: $ItemStack_, excludedSlots: $List_<$EquipmentSlot_>): $EquipmentSlot;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, slotDropChances: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentLootTable: $ResourceKey_<$LootTable>, params: $LootParams, seed: number, arg3: $Map_<$EquipmentSlot_, number>): void;
        equip(equipmentTable: $EquipmentTable_, params: $LootParams): void;
        setLeashedTo(leashHolder: $Entity, broadcastPacket: boolean): void;
        getLeashHolder(): $Entity;
        elasticRangeLeashBehaviour(leashHolder: $Entity, distance: number): void;
        /**
         * Sets the amount of arrows stuck in the entity. Used for rendering those.
         */
        setDelayedLeashHolderId(count: number): void;
        closeRangeLeashBehaviour(passenger: $Entity): void;
        handleLeashAtDistance(leashHolder: $Entity, distance: number): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        canHaveALeashAttachedToIt(): boolean;
        /**
         * Returns whether the entity is in a server world
         */
        isLeashed(): boolean;
        writeLeashData(tag: $CompoundTag_, leashData: $Leashable$LeashData | null): void;
        readLeashData(tag: $CompoundTag_): $Leashable$LeashData;
        /**
         * Returns whether the entity is in a server world
         */
        mayBeLeashed(): boolean;
        sophisticatedbackpacks$getAmbientSound(): $SoundEvent;
        updatePersistenceTo(aggressive: boolean): void;
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
        constructor(entityType: $EntityType<$Mob>, level: $Level);
        get ambientSoundInterval(): number;
        get maxSpawnClusterSize(): number;
        get attackBoundingBox(): $AABB;
        get sensing(): $Sensing;
        get wearingBodyArmor(): boolean;
        get maxHeadXRot(): number;
        get ambientSound(): $SoundEvent;
        get targetFromBrain(): $LivingEntity;
        set guaranteedDrop(value: $EquipmentSlot_);
        get restrictCenter(): $BlockPos;
        get pickupReach(): $Vec3i;
        get sunBurnTick(): boolean;
        get spawnType(): $MobSpawnType;
        get maxHeadYRot(): number;
        get restrictRadius(): number;
        get headRotSpeed(): number;
        set baby(value: boolean);
        get defaultLootTable(): $ResourceKey<$LootTable>;
        get leashHolder(): $Entity;
        set delayedLeashHolderId(value: number);
        get leashed(): boolean;
    }
    export class $Leashable$LeashData {
        setLeashHolder(leashHolder: $Entity): void;
        delayedLeashHolderId: number;
        leashHolder: $Entity;
        delayedLeashInfo: $Either<$UUID, $BlockPos>;
        constructor(delayedLeashInfoId: number);
        constructor(leashHolder: $Entity);
        constructor(delayedLeashInfo: $Either<$UUID_, $BlockPos_>);
    }
    export class $Entity$MoveFunction {
    }
    export interface $Entity$MoveFunction {
        accept(entity: $Entity, x: number, arg2: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Entity$MoveFunction}.
     */
    export type $Entity$MoveFunction_ = ((arg0: $Entity, arg1: number, arg2: number, arg3: number) => void);
    export class $EntityAttachments {
        get(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        scale(xScale: number, yScale: number, zScale: number): $EntityAttachments;
        static builder(): $EntityAttachments$Builder;
        static createDefault(width: number, height: number): $EntityAttachments;
        getClamped(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        getNullable(attachment: $EntityAttachment_, index: number, yRot: number): $Vec3;
        constructor(attachments: $Map_<$EntityAttachment_, $List_<$Vec3_>>);
    }
    export class $EntitySelector {
        static notRiding(entity: $Entity): $Predicate<$Entity>;
        static pushableBy(entity: $Entity): $Predicate<$Entity>;
        static withinDistance(x: number, arg1: number, y: number, arg3: number): $Predicate<$Entity>;
        static ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static NO_SPECTATORS: $Predicate<$Entity>;
        static ENTITY_NOT_BEING_RIDDEN: $Predicate<$Entity>;
        static LIVING_ENTITY_STILL_ALIVE: $Predicate<$Entity>;
        static CAN_BE_COLLIDED_WITH: $Predicate<$Entity>;
        static NO_CREATIVE_OR_SPECTATOR: $Predicate<$Entity>;
        static CONTAINER_ENTITY_SELECTOR: $Predicate<$Entity>;
    }
    /**
     * Values that may be interpreted as {@link $EntitySelector}.
     */
    export type $EntitySelector_ = string;
    export class $AgeableMob extends $PathfinderMob {
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getAge(): number;
        static getSpeedUpSecondsWhenFeeding(ticksUntilAdult: number): number;
        /**
         * If Animal, checks if the age timer is negative
         */
        canBreed(): boolean;
        ageUp(amount: number, forced: boolean): void;
        ageUp(amount: number): void;
        getBreedOffspring(level: $ServerLevel, otherParent: $AgeableMob): $AgeableMob;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        ageBoundaryReached(): void;
        setAge(amount: number): void;
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
        forcedAgeTimer: number;
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
        static BABY_START_AGE: number;
        timeOffs: number;
        static DATA_SHARED_FLAGS_ID: $EntityDataAccessor<number>;
        static LIVING_ENTITY_FLAG_SPIN_ATTACK: number;
        forcedAge: number;
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
        age: number;
        constructor(entityType: $EntityType<$AgeableMob>, level: $Level);
    }
    export class $ItemBasedSteering {
        boost(random: $RandomSource): boolean;
        setSaddle(saddled: boolean): void;
        onSynced(): void;
        hasSaddle(): boolean;
        tickBoost(): void;
        boostFactor(): number;
        readAdditionalSaveData(nbt: $CompoundTag_): void;
        addAdditionalSaveData(nbt: $CompoundTag_): void;
        constructor(entityData: $SynchedEntityData, boostTimeAccessor: $EntityDataAccessor_<number>, hasSaddleAccessor: $EntityDataAccessor_<boolean>);
        set saddle(value: boolean);
    }
    export class $NeutralMob {
        static TAG_ANGRY_AT: string;
        static TAG_ANGER_TIME: string;
    }
    export interface $NeutralMob {
        /**
         * Gets the active target the Task system uses for tracking
         */
        getTarget(): $LivingEntity;
        /**
         * Hint to AI tasks that we were attacked by the passed EntityLivingBase and should retaliate. Is not guaranteed to change our actual active target (for example if we are currently busy attacking someone else)
         */
        setTarget(livingEntity: $LivingEntity | null): void;
        setRemainingPersistentAngerTime(remainingPersistentAngerTime: number): void;
        readPersistentAngerSaveData(level: $Level, tag: $CompoundTag_): void;
        getRemainingPersistentAngerTime(): number;
        isAngryAtAllPlayers(level: $Level): boolean;
        setPersistentAngerTarget(persistentAngerTarget: $UUID_ | null): void;
        getPersistentAngerTarget(): $UUID;
        startPersistentAngerTimer(): void;
        addPersistentAngerSaveData(nbt: $CompoundTag_): void;
        updatePersistentAnger(serverLevel: $ServerLevel, updateAnger: boolean): void;
        /**
         * Hint to AI tasks that we were attacked by the passed EntityLivingBase and should retaliate. Is not guaranteed to change our actual active target (for example if we are currently busy attacking someone else)
         */
        setLastHurtByMob(livingEntity: $LivingEntity | null): void;
        /**
         * Gets the active target the Task system uses for tracking
         */
        getLastHurtByMob(): $LivingEntity;
        isAngryAt(entity: $LivingEntity): boolean;
        isAngry(): boolean;
        canAttack(entity: $LivingEntity): boolean;
        forgetCurrentTargetAndRefreshUniversalAnger(): void;
        setLastHurtByPlayer(player: $Player | null): void;
        stopBeingAngry(): void;
        playerDied(player: $Player): void;
        get angry(): boolean;
        set lastHurtByPlayer(value: $Player | null);
    }
    export class $AgeableMob$AgeableMobGroupData implements $SpawnGroupData {
        increaseGroupSizeByOne(): void;
        getBabySpawnChance(): number;
        getGroupSize(): number;
        isShouldSpawnBaby(): boolean;
        constructor(babySpawnChance: number);
        constructor(shouldSpawnBaby: boolean);
        get babySpawnChance(): number;
        get groupSize(): number;
        get shouldSpawnBaby(): boolean;
    }
    export class $ReputationEventHandler {
    }
    export interface $ReputationEventHandler {
        onReputationEventFrom(type: $ReputationEventType, target: $Entity): void;
    }
    /**
     * Values that may be interpreted as {@link $ReputationEventHandler}.
     */
    export type $ReputationEventHandler_ = ((arg0: $ReputationEventType, arg1: $Entity) => void);
    export class $TamableAnimal$TamableAnimalPanicGoal extends $PanicGoal {
        static WATER_CHECK_DISTANCE_VERTICAL: number;
        speedModifier: number;
        posX: number;
        mob: $PathfinderMob;
        posY: number;
        posZ: number;
        this$0: $TamableAnimal;
    }
    export class $Display$ItemDisplay$ItemRenderState extends $Record {
        itemStack(): $ItemStack;
        itemTransform(): $ItemDisplayContext;
        constructor(arg0: $ItemStack_, arg1: $ItemDisplayContext_);
    }
    /**
     * Values that may be interpreted as {@link $Display$ItemDisplay$ItemRenderState}.
     */
    export type $Display$ItemDisplay$ItemRenderState_ = { itemStack?: $ItemStack_, itemTransform?: $ItemDisplayContext_,  } | [itemStack?: $ItemStack_, itemTransform?: $ItemDisplayContext_, ];
}
