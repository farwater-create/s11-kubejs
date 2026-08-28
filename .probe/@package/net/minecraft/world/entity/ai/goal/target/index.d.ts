import { $Goal } from "@package/net/minecraft/world/entity/ai/goal";
import { $Predicate_ } from "@package/java/util/function";
import { $Mob, $TamableAnimal, $LivingEntity, $PathfinderMob } from "@package/net/minecraft/world/entity";
import { $TargetingConditions } from "@package/net/minecraft/world/entity/ai/targeting";
import { $Raider } from "@package/net/minecraft/world/entity/raid";
import { $Class } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $IronGolem } from "@package/net/minecraft/world/entity/animal";

declare module "@package/net/minecraft/world/entity/ai/goal/target" {
    export class $NonTameRandomTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(tamableMob: $TamableAnimal, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
    }
    export class $DefendVillageTargetGoal extends $TargetGoal {
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(golem: $IronGolem);
    }
    export class $OwnerHurtByTargetGoal extends $TargetGoal {
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(tameAnimal: $TamableAnimal);
    }
    export class $HurtByTargetGoal extends $TargetGoal {
        /**
         * Execute a one shot task or start executing a continuous task
         */
        alertOthers(): void;
        alertOther(mob: $Mob, target: $LivingEntity): void;
        setAlertOthers(...reinforcementTypes: $Class<never>[]): $HurtByTargetGoal;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        timestamp: number;
        constructor(mob: $PathfinderMob, ...toIgnoreDamage: $Class<never>[]);
    }
    export class $ResetUniversalAngerTargetGoal<T extends $Mob> extends $Goal {
        constructor(mob: T, alertOthersOfSameType: boolean);
    }
    export class $TargetGoal extends $Goal {
        setUnseenMemoryTicks(unseenMemoryTicks: number): $TargetGoal;
        getFollowDistance(): number;
        /**
         * Checks if this is a suitable target.
         */
        canAttack(potentialTarget: $LivingEntity | null, targetPredicate: $TargetingConditions): boolean;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(mob: $Mob, mustSee: boolean);
        constructor(mob: $Mob, mustSee: boolean, mustReach: boolean);
        get followDistance(): number;
    }
    export class $OwnerHurtTargetGoal extends $TargetGoal {
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetMob: $LivingEntity;
        constructor(tameAnimal: $TamableAnimal);
    }
    export class $NearestHealableRaiderTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        getCooldown(): number;
        /**
         * Execute a one shot task or start executing a continuous task
         */
        decrementCooldown(): void;
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(mob: $Raider, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        get cooldown(): number;
    }
    export class $NearestAttackableWitchTargetGoal<T extends $LivingEntity> extends $NearestAttackableTargetGoal<T> {
        setCanAttack(active: boolean): void;
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(mob: $Raider, targetType: $Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
    }
    export class $NearestAttackableTargetGoal<T extends $LivingEntity> extends $TargetGoal {
        setTarget(target: $LivingEntity | null): void;
        getTargetSearchArea(targetDistance: number): $AABB;
        /**
         * Execute a one shot task or start executing a continuous task
         */
        findTarget(): void;
        randomInterval: number;
        mob: $Mob;
        mustSee: boolean;
        unseenMemoryTicks: number;
        targetType: $Class<T>;
        targetMob: $LivingEntity;
        targetConditions: $TargetingConditions;
        target: $LivingEntity;
        constructor(mob: $Mob, targetType: $Class<T>, randomInterval: number, mustSee: boolean, mustReach: boolean, targetPredicate: $Predicate_<$LivingEntity> | null);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean, mustReach: boolean);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean, targetPredicate: $Predicate_<$LivingEntity>);
        constructor(mob: $Mob, targetType: $Class<T>, mustSee: boolean);
    }
}
