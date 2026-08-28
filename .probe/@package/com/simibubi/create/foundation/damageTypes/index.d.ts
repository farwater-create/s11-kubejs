import { $Level } from "@package/net/minecraft/world/level";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $DamageScaling_, $DamageType, $DeathMessageType_, $DamageEffects_, $DamageType_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/com/simibubi/create/foundation/damageTypes" {
    export class $DamageTypeBuilder {
        register(arg0: $BootstrapContext<$DamageType_>): $DamageType;
        build(): $DamageType;
        msgId(arg0: string): $DamageTypeBuilder;
        effects(arg0: $DamageEffects_): $DamageTypeBuilder;
        scaling(arg0: $DamageScaling_): $DamageTypeBuilder;
        exhaustion(arg0: number): $DamageTypeBuilder;
        deathMessageType(arg0: $DeathMessageType_): $DamageTypeBuilder;
        simpleMsgId(): $DamageTypeBuilder;
        constructor(arg0: $ResourceKey_<$DamageType>);
    }
    export class $CreateDamageSources {
        static drill(arg0: $Level): $DamageSource;
        static saw(arg0: $Level): $DamageSource;
        static potatoCannon(arg0: $Level, arg1: $Entity, arg2: $Entity): $DamageSource;
        static roller(arg0: $Level): $DamageSource;
        static crush(arg0: $Level): $DamageSource;
        static cuckooSurprise(arg0: $Level): $DamageSource;
        static runOver(arg0: $Level, arg1: $Entity): $DamageSource;
        static fanLava(arg0: $Level): $DamageSource;
        static fanFire(arg0: $Level): $DamageSource;
        constructor();
    }
}
