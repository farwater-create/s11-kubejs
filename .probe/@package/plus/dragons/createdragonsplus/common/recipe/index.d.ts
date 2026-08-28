import { $Event } from "@package/net/neoforged/bus/api";
import { $RecipeHolder, $RecipeType, $RecipeHolder_, $RecipeManager } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Multimap } from "@package/com/google/common/collect";
import { $Map_ } from "@package/java/util";

declare module "@package/plus/dragons/createdragonsplus/common/recipe" {
    export class $UpdateRecipesEvent extends $Event {
        apply(): void;
        getRecipe(arg0: $ResourceLocation_): ($RecipeHolder<never>) | undefined;
        getRecipeManager(): $RecipeManager;
        removeRecipe(arg0: $RecipeHolder_<never>): void;
        addRecipe(arg0: $RecipeHolder_<never>): void;
        constructor(arg0: $RecipeManager, arg1: $Multimap<$RecipeType<never>, $RecipeHolder_<never>>, arg2: $Map_<$ResourceLocation_, $RecipeHolder_<never>>);
        get recipeManager(): $RecipeManager;
    }
}
