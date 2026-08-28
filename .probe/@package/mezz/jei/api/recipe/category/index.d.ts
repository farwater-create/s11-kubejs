import { $IRecipeLayoutBuilder, $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Codec } from "@package/com/mojang/serialization";
import { $IFocusGroup, $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $ICodecHelper } from "@package/mezz/jei/api/helpers";
import { $IRecipeSlotsView_, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List, $List_ } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";
export * as extensions from "@package/mezz/jei/api/recipe/category/extensions";

declare module "@package/mezz/jei/api/recipe/category" {
    export class $IRecipeCategory<T> {
    }
    export interface $IRecipeCategory<T> {
        getWidth(): number;
        getHeight(): number;
        getIcon(): $IDrawable;
        isHandled(arg0: T): boolean;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: T, arg2: $IFocusGroup): void;
        getRegistryName(arg0: T): $ResourceLocation;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<T>;
        getTooltip(arg0: $ITooltipBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        draw(arg0: T, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getTitle(): $Component;
        onDisplayedIngredientsUpdate(arg0: T, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        needsRecipeBorder(): boolean;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: T, arg2: $IFocusGroup): void;
        getRecipeType(): $RecipeType<T>;
        /**
         * @deprecated
         */
        getTooltipStrings(arg0: T, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        /**
         * @deprecated
         */
        getBackground(): $IDrawable;
        /**
         * @deprecated
         */
        handleInput(arg0: T, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        get width(): number;
        get height(): number;
        get icon(): $IDrawable;
        get title(): $Component;
        get recipeType(): $RecipeType<T>;
        get background(): $IDrawable;
    }
}
