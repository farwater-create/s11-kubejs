import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IIngredientType_ } from "@package/mezz/jei/api/ingredients";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $RecipeSlotUnderMouse, $IJeiInputHandler } from "@package/mezz/jei/api/gui/inputs";
import { $IRecipeSlotDrawable, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
export * as drawable from "@package/mezz/jei/api/gui/drawable";
export * as builder from "@package/mezz/jei/api/gui/builder";
export * as handlers from "@package/mezz/jei/api/gui/handlers";
export * as widgets from "@package/mezz/jei/api/gui/widgets";
export * as buttons from "@package/mezz/jei/api/gui/buttons";
export * as inputs from "@package/mezz/jei/api/gui/inputs";
export * as ingredient from "@package/mezz/jei/api/gui/ingredient";
export * as placement from "@package/mezz/jei/api/gui/placement";

declare module "@package/mezz/jei/api/gui" {
    export class $IRecipeLayoutDrawable<R> {
    }
    export interface $IRecipeLayoutDrawable<R> {
        isMouseOver(arg0: number, arg1: number): boolean;
        setPosition(arg0: number, arg1: number): void;
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
        getRecipeCategory(): $IRecipeCategory<R>;
        getRecipe(): R;
        getRect(): $Rect2i;
        tick(): void;
        getRecipeBookmarkButtonArea(): $Rect2i;
        getRecipeTransferButtonArea(): $Rect2i;
        getItemStackUnderMouse(arg0: number, arg1: number): ($ItemStack) | undefined;
        getIngredientUnderMouse<T>(arg0: number, arg1: number, arg2: $IIngredientType_<T>): (T) | undefined;
        getRecipeSlotsView(): $IRecipeSlotsView;
        drawRecipe(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        /**
         * @deprecated
         */
        getRecipeSlotUnderMouse(arg0: number, arg1: number): ($IRecipeSlotDrawable) | undefined;
        getRectWithBorder(): $Rect2i;
        drawOverlays(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getInputHandler(): $IJeiInputHandler;
        getSideButtonArea(arg0: number): $Rect2i;
        get recipeCategory(): $IRecipeCategory<R>;
        get recipe(): R;
        get rect(): $Rect2i;
        get recipeBookmarkButtonArea(): $Rect2i;
        get recipeTransferButtonArea(): $Rect2i;
        get recipeSlotsView(): $IRecipeSlotsView;
        get rectWithBorder(): $Rect2i;
        get inputHandler(): $IJeiInputHandler;
    }
    export class $ITickTimer {
    }
    export interface $ITickTimer {
        getValue(): number;
        getMaxValue(): number;
        get value(): number;
        get maxValue(): number;
    }
}
