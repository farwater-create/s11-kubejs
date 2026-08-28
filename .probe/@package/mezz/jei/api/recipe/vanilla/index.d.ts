import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CraftingBookCategory_, $Ingredient_, $CraftingRecipe } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $List_ } from "@package/java/util";

declare module "@package/mezz/jei/api/recipe/vanilla" {
    export class $IVanillaRecipeFactory {
    }
    export interface $IVanillaRecipeFactory {
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_, arg3: $ResourceLocation_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $ItemStack_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createBrewingRecipe(arg0: $List_<$ItemStack_>, arg1: $ItemStack_, arg2: $ItemStack_): $IJeiBrewingRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        /**
         * @deprecated
         */
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>): $IJeiAnvilRecipe;
        createAnvilRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        createAnvilRecipe(arg0: $ItemStack_, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: $ResourceLocation_): $IJeiAnvilRecipe;
        createGrindstoneRecipe(arg0: $List_<$ItemStack_>, arg1: $List_<$ItemStack_>, arg2: $List_<$ItemStack_>, arg3: number, arg4: number, arg5: $ResourceLocation_): $IJeiGrindstoneRecipe;
        createShapedRecipeBuilder(arg0: $CraftingBookCategory_, arg1: $List_<$ItemStack_>): $IJeiShapedRecipeBuilder;
    }
    export class $IJeiShapedRecipeBuilder {
    }
    export interface $IJeiShapedRecipeBuilder {
        group(arg0: string): $IJeiShapedRecipeBuilder;
        pattern(arg0: string): $IJeiShapedRecipeBuilder;
        build(): $CraftingRecipe;
        define(arg0: string, arg1: $Ingredient_): $IJeiShapedRecipeBuilder;
    }
    export class $IJeiGrindstoneRecipe {
    }
    export interface $IJeiGrindstoneRecipe {
        getOutputs(): $List<$ItemStack>;
        getUid(): $ResourceLocation;
        getBottomInputs(): $List<$ItemStack>;
        isOutputRenderOnly(): boolean;
        getMaxXpReward(): number;
        getTopInputs(): $List<$ItemStack>;
        getMinXpReward(): number;
        get outputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get bottomInputs(): $List<$ItemStack>;
        get outputRenderOnly(): boolean;
        get maxXpReward(): number;
        get topInputs(): $List<$ItemStack>;
        get minXpReward(): number;
    }
    export class $IJeiBrewingRecipe {
    }
    export interface $IJeiBrewingRecipe {
        getBrewingSteps(): number;
        getIngredients(): $List<$ItemStack>;
        getUid(): $ResourceLocation;
        getPotionOutput(): $ItemStack;
        getPotionInputs(): $List<$ItemStack>;
        get brewingSteps(): number;
        get ingredients(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get potionOutput(): $ItemStack;
        get potionInputs(): $List<$ItemStack>;
    }
    export class $IJeiAnvilRecipe {
    }
    export interface $IJeiAnvilRecipe {
        getOutputs(): $List<$ItemStack>;
        getUid(): $ResourceLocation;
        getRightInputs(): $List<$ItemStack>;
        getLeftInputs(): $List<$ItemStack>;
        get outputs(): $List<$ItemStack>;
        get uid(): $ResourceLocation;
        get rightInputs(): $List<$ItemStack>;
        get leftInputs(): $List<$ItemStack>;
    }
}
