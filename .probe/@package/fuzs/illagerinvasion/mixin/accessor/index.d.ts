import { $EntityType } from "@package/net/minecraft/world/entity";
import { $ImmutableMap } from "@package/com/google/common/collect";

declare module "@package/fuzs/illagerinvasion/mixin/accessor" {
    export class $VillagerHostilesSensorAccessor {
        static illagerinvasion$setAcceptableDistanceFromHostiles(acceptableDistanceFromHostiles: $ImmutableMap<$EntityType<never>, number>): void;
        static illagerinvasion$getAcceptableDistanceFromHostiles(): $ImmutableMap<$EntityType<never>, number>;
    }
    export interface $VillagerHostilesSensorAccessor {
    }
}
