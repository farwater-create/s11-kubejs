import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $SetComponentsFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $List_ } from "@package/java/util";

declare module "@package/com/almostreliable/lootjs/mixin" {
    export class $SetComponentsFunctionAccessor {
        static lootjs$create(arg0: $List_<$LootItemCondition>, arg1: $DataComponentPatch_): $SetComponentsFunction;
    }
    export interface $SetComponentsFunctionAccessor {
    }
}
