import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/com/almostreliable/lootjs/loot/modifier/handler" {
    export class $ModifyLootAction$Callback {
    }
    export interface $ModifyLootAction$Callback {
        modify(arg0: $ItemStack_): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ModifyLootAction$Callback}.
     */
    export type $ModifyLootAction$Callback_ = ((arg0: $ItemStack) => $ItemStack_);
}
