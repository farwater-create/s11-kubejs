import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/net/mehvahdjukaar/supplementaries/common/entities/goals" {
    export class $ISuppEvoker {
    }
    export interface $ISuppEvoker {
        supplementaries$setSpellCastingTime(arg0: number): void;
        supplementaries$getCustomWololoo(): $LivingEntity;
        supplementaries$setCustomWololoo(arg0: $LivingEntity): void;
    }
}
