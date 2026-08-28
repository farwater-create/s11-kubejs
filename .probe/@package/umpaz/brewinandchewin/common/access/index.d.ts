import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";

declare module "@package/umpaz/brewinandchewin/common/access" {
    export class $FoodDataEntityAccess {
    }
    export interface $FoodDataEntityAccess {
        brewinandchewin$setEntity(arg0: $LivingEntity): void;
    }
    /**
     * Values that may be interpreted as {@link $FoodDataEntityAccess}.
     */
    export type $FoodDataEntityAccess_ = ((arg0: $LivingEntity) => void);
    export class $ChatPlayerListAccess {
    }
    export interface $ChatPlayerListAccess {
        brewinandchewin$setOriginalMessage(arg0: $Component_): void;
    }
    /**
     * Values that may be interpreted as {@link $ChatPlayerListAccess}.
     */
    export type $ChatPlayerListAccess_ = ((arg0: $Component) => void);
    export class $LootParamsParamSetAccess {
    }
    export interface $LootParamsParamSetAccess {
        brewinandchewin$setParamSet(arg0: $LootContextParamSet): void;
        brewinandchewin$getParamSet(): $LootContextParamSet;
    }
}
