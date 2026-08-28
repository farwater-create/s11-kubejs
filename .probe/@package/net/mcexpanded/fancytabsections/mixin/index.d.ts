import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Set_, $Collection_ } from "@package/java/util";

declare module "@package/net/mcexpanded/fancytabsections/mixin" {
    export class $CreativeModeTabAccessor {
    }
    export interface $CreativeModeTabAccessor {
        setDisplayItems(arg0: $Collection_<$ItemStack_>): void;
        setDisplayItemsSearchTab(arg0: $Set_<$ItemStack_>): void;
        set displayItems(value: $Collection_<$ItemStack_>);
        set displayItemsSearchTab(value: $Set_<$ItemStack_>);
    }
}
