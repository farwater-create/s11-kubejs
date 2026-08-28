import { $RecipeHolder, $RecipeType, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $Multimap } from "@package/com/google/common/collect";

declare module "@package/net/darkhax/bookshelf/common/mixin/access/level" {
    export class $AccessorRecipeManager {
    }
    export interface $AccessorRecipeManager {
        bookshelf$byTypeMap(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorRecipeManager}.
     */
    export type $AccessorRecipeManager_ = (() => $Multimap<$RecipeType<never>, $RecipeHolder_<never>>);
}
