import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $List_, $List } from "@package/java/util";

declare module "@package/snownee/jade/addon/mixin/create" {
    export class $BlueprintOverlayRendererAccess {
        static getResults(): $List<$ItemStack>;
        static get results(): $List<$ItemStack>;
    }
    export interface $BlueprintOverlayRendererAccess {
    }
    export class $BacktankBlockEntityAccess {
    }
    export interface $BacktankBlockEntityAccess {
        getCapacityEnchantLevel(): number;
        get capacityEnchantLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $BacktankBlockEntityAccess}.
     */
    export type $BacktankBlockEntityAccess_ = (() => number);
    export class $FilterItemAccess {
    }
    export interface $FilterItemAccess {
        callMakeSummary(arg0: $ItemStack_): $List<$Component>;
    }
    /**
     * Values that may be interpreted as {@link $FilterItemAccess}.
     */
    export type $FilterItemAccess_ = ((arg0: $ItemStack) => $List_<$Component_>);
}
