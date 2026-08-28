import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
export * as goals from "@package/net/mehvahdjukaar/supplementaries/common/entities/goals";
export * as dispenser_minecart from "@package/net/mehvahdjukaar/supplementaries/common/entities/dispenser_minecart";

declare module "@package/net/mehvahdjukaar/supplementaries/common/entities" {
    export class $IQuiverEntity {
    }
    export interface $IQuiverEntity {
        supplementaries$setQuiver(arg0: $ItemStack_): void;
        supplementaries$getQuiver(): $ItemStack;
        supplementaries$hasQuiver(): boolean;
    }
    export class $IPartyCreeper {
    }
    export interface $IPartyCreeper {
        supplementaries$setFestive(arg0: boolean): void;
        supplementaries$isFestive(): boolean;
    }
    export class $IFluteParrot {
    }
    export interface $IFluteParrot {
        supplementaries$setPartyByFlute(arg0: $Player): void;
    }
    /**
     * Values that may be interpreted as {@link $IFluteParrot}.
     */
    export type $IFluteParrot_ = ((arg0: $Player) => void);
}
