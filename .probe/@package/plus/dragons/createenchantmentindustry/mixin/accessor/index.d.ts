import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IRecipeSlotView } from "@package/mezz/jei/api/gui/ingredient";
import { $List_ } from "@package/java/util";

declare module "@package/plus/dragons/createenchantmentindustry/mixin/accessor" {
    export class $CreateRecipeCategoryAccessor {
        static invokeAddPotionTooltip(arg0: $IRecipeSlotView, arg1: $List_<$Component_>): void;
    }
    export interface $CreateRecipeCategoryAccessor {
    }
}
