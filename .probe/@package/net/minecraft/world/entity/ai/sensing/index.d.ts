import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $Entity, $PathfinderMob, $LivingEntity, $AgeableMob, $Mob } from "@package/net/minecraft/world/entity";
import { $ImmutableMap, $ImmutableSet } from "@package/com/google/common/collect";
import { $SensorAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/ai/useless_sensors";
import { $Set, $Optional } from "@package/java/util";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $NearestVisibleLivingEntities } from "@package/net/minecraft/world/entity/ai/memory";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Supplier_, $Predicate_, $BiPredicate_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $Object } from "@package/java/lang";
import { $Hoglin } from "@package/net/minecraft/world/entity/monster/hoglin";
import { $VillagerHostilesSensorAccessor } from "@package/fuzs/illagerinvasion/mixin/accessor";

declare module "@package/net/minecraft/world/entity/ai/sensing" {
    export class $BreezeAttackEntitySensor extends $NearestLivingEntitySensor<$Breeze> {
        doTick(arg0: $ServerLevel, arg1: $Breeze): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        static BREEZE_SENSOR_RADIUS: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $PiglinBruteSpecificSensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $FrogAttackablesSensor extends $NearestVisibleLivingEntitySensor {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        static TARGET_DETECTION_DISTANCE: number;
        constructor();
    }
    export class $TemptingSensor extends $Sensor<$PathfinderMob> {
        doTick(level: $ServerLevel, entity: $PathfinderMob): void;
        static TEMPTATION_RANGE: number;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor(temptations: $Predicate_<$ItemStack>);
    }
    export class $HoglinSpecificSensor extends $Sensor<$Hoglin> {
        doTick(level: $ServerLevel, entity: $Hoglin): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $MobSensor<T extends $LivingEntity> extends $Sensor<T> {
        checkForMobsNearby(sensingEntity: T): void;
        mobDetected(sensingEntity: T): void;
        clearMemory(sensingEntity: T): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor(scanRate: number, mobTest: $BiPredicate_<T, $LivingEntity>, readyTest: $Predicate_<T>, toSet: $MemoryModuleType<boolean>, memoryTimeToLive: number);
    }
    export class $SensorType<U extends $Sensor<never>> {
        create(): U;
        static FROG_ATTACKABLES: $SensorType<$FrogAttackablesSensor>;
        static AXOLOTL_ATTACKABLES: $SensorType<$AxolotlAttackablesSensor>;
        static ARMADILLO_SCARE_DETECTED: $SensorType<$MobSensor<$Armadillo>>;
        static NEAREST_LIVING_ENTITIES: $SensorType<$NearestLivingEntitySensor<$LivingEntity>>;
        static VILLAGER_HOSTILES: $SensorType<$VillagerHostilesSensor>;
        static VILLAGER_BABIES: $SensorType<$VillagerBabiesSensor>;
        static NEAREST_BED: $SensorType<$NearestBedSensor>;
        static GOAT_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static IS_IN_WATER: $SensorType<$IsInWaterSensor>;
        static AXOLOTL_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static FROG_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static ARMADILLO_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static BREEZE_ATTACK_ENTITY_SENSOR: $SensorType<$BreezeAttackEntitySensor>;
        static GOLEM_DETECTED: $SensorType<$GolemSensor>;
        static SNIFFER_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static CAMEL_TEMPTATIONS: $SensorType<$TemptingSensor>;
        static NEAREST_ADULT: $SensorType<$AdultSensor>;
        static DUMMY: $SensorType<$DummySensor>;
        static HURT_BY: $SensorType<$HurtBySensor>;
        static NEAREST_ITEMS: $SensorType<$NearestItemSensor>;
        static NEAREST_PLAYERS: $SensorType<$PlayerSensor>;
        static PIGLIN_SPECIFIC_SENSOR: $SensorType<$PiglinSpecificSensor>;
        static SECONDARY_POIS: $SensorType<$SecondaryPoiSensor>;
        static PIGLIN_BRUTE_SPECIFIC_SENSOR: $SensorType<$PiglinBruteSpecificSensor>;
        static HOGLIN_SPECIFIC_SENSOR: $SensorType<$HoglinSpecificSensor>;
        static WARDEN_ENTITY_SENSOR: $SensorType<$WardenEntitySensor>;
        constructor(factory: $Supplier_<U>);
    }
    export class $PlayerSensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $AdultSensor extends $Sensor<$AgeableMob> {
        doTick(level: $ServerLevel, entity: $AgeableMob): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $PiglinSpecificSensor extends $Sensor<$LivingEntity> {
        redirect$cih000$lithium$redirectFindNearestRepellent(level: $ServerLevel, livingEntity: $LivingEntity): $Optional<any>;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $Sensor<E extends $LivingEntity> implements $SensorAccessor {
        requires(): $Set<$MemoryModuleType<never>>;
        tick(level: $ServerLevel, entity: E): void;
        doTick(level: $ServerLevel, entity: E): void;
        /**
         * @return if entity is remembered as an attack target and is valid to attack
         */
        static isEntityAttackable(attacker: $LivingEntity, target: $LivingEntity): boolean;
        /**
         * @return if entity is remembered as an attack target and is valid to attack
         */
        static isEntityTargetable(attacker: $LivingEntity, target: $LivingEntity): boolean;
        /**
         * @return if entity is remembered as an attack target and is valid to attack
         */
        static isEntityAttackableIgnoringLineOfSight(attacker: $LivingEntity, target: $LivingEntity): boolean;
        getLastSenseTime(): number;
        getSenseInterval(): number;
        setLastSenseTime(arg0: number): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor(scanRate: number);
        constructor();
        get senseInterval(): number;
    }
    export class $VillagerBabiesSensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $Sensing {
        /**
         * Clears seen and unseen.
         */
        tick(): void;
        /**
         * Updates list of visible and not visible entities for the given entity
         */
        hasLineOfSight(entity: $Entity): boolean;
        constructor(mob: $Mob);
    }
    export class $NearestLivingEntitySensor<T extends $LivingEntity> extends $Sensor<T> {
        radiusY(): number;
        radiusXZ(): number;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $NearestVisibleLivingEntitySensor extends $Sensor<$LivingEntity> {
        getMemory(): $MemoryModuleType<$LivingEntity>;
        isMatchingEntity(attacker: $LivingEntity, target: $LivingEntity): boolean;
        getVisibleEntities(entity: $LivingEntity): ($NearestVisibleLivingEntities) | undefined;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
        get memory(): $MemoryModuleType<$LivingEntity>;
    }
    export class $HurtBySensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $WardenEntitySensor extends $NearestLivingEntitySensor<$Warden> {
        doTick(level: $ServerLevel, entity: $Warden): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $VillagerHostilesSensor extends $NearestVisibleLivingEntitySensor implements $VillagerHostilesSensorAccessor {
        static setAcceptableDistanceFromHostiles$illagerinvasion_$md$707fe4$0(arg0: $ImmutableMap<any, any>): void;
        static getAcceptableDistanceFromHostiles$illagerinvasion_$md$707fe4$1(): $ImmutableMap<any, any>;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
        static set acceptableDistanceFromHostiles$illagerinvasion_$md$707fe4$0(value: $ImmutableMap<any, any>);
        static get acceptableDistanceFromHostiles$illagerinvasion_$md$707fe4$1(): $ImmutableMap<any, any>;
    }
    export class $IsInWaterSensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $DummySensor extends $Sensor<$LivingEntity> {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $NearestBedSensor extends $Sensor<$Mob> {
        doTick(level: $ServerLevel, entity: $Mob): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $NearestItemSensor extends $Sensor<$Mob> {
        doTick(level: $ServerLevel, entity: $Mob): void;
        static MAX_DISTANCE_TO_WANTED_ITEM: number;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
    export class $GolemSensor extends $Sensor<$LivingEntity> {
        static checkForNearbyGolem(livingEntity: $LivingEntity): void;
        static golemDetected(livingEntity: $LivingEntity): void;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
        constructor(scanRate: number);
    }
    export class $AxolotlAttackablesSensor extends $NearestVisibleLivingEntitySensor {
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        static TARGET_DETECTION_DISTANCE: number;
        constructor();
    }
    export class $SecondaryPoiSensor extends $Sensor<$Villager> {
        doTick(level: $ServerLevel, entity: $Villager): void;
        wrapOperation$fjk000$farmersdelight$detectModdedFarmland(arg0: $ImmutableSet<any>, arg1: $Object, arg2: $Operation_<any>, arg3: $Villager): boolean;
        wrapOperation$fjk000$farmersdelight$detectModdedFarmland$mixinextras$bridge$6(arg0: $ImmutableSet<any>, arg1: $Object, arg2: $Operation_<any>, arg3: $LocalRef<any>): boolean;
        static RANDOM: $RandomSource;
        scanRate: number;
        static TARGETING_RANGE: number;
        constructor();
    }
}
