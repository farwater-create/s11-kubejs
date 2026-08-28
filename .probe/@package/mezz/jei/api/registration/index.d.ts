import { $IRecipeCategoryDecorator } from "@package/mezz/jei/api/recipe/category/extensions";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IGhostIngredientHandler, $IGuiContainerHandler, $IScreenHandler_, $IGlobalGuiHandler } from "@package/mezz/jei/api/gui/handlers";
import { $ISearchStorageFactory, $ISearchStorageFactory_, $ISearchStorageBuilderFactory_, $ISearchStorageBuilderFactory } from "@package/mezz/jei/api/search";
import { $IExtendableSmithingRecipeCategory } from "@package/mezz/jei/api/recipe/category/extensions/vanilla/smithing";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $IJeiHelpers, $IColorHelper } from "@package/mezz/jei/api/helpers";
import { $Collection_, $List_, $Collection } from "@package/java/util";
import { $IExtendableCraftingRecipeCategory } from "@package/mezz/jei/api/recipe/category/extensions/vanilla/crafting";
import { $IRecipeTransferManager, $IRecipeTransferHandler, $IUniversalRecipeTransferHandler, $IRecipeTransferHandlerHelper, $IRecipeTransferInfo } from "@package/mezz/jei/api/recipe/transfer";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $IRecipesGui, $IEditModeConfig, $IJeiFeatures, $IIngredientListOverlay, $IScreenHelper, $IIngredientVisibility, $IIngredientFilter, $IBookmarkOverlay, $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $IIngredientType_, $IIngredientTypeWithSubtypes, $IIngredientType, $IIngredientHelper, $IIngredientRenderer, $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $AbstractContainerScreen } from "@package/net/minecraft/client/gui/screens/inventory";
import { $IRecipeManager, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $IRecipeButtonControllerFactory_, $ISimpleRecipeManagerPlugin, $IRecipeManagerPlugin, $IRecipeManagerPluginHelper } from "@package/mezz/jei/api/recipe/advanced";
import { $ISubtypeInterpreter, $IIngredientSubtypeInterpreter_, $ISubtypeManager } from "@package/mezz/jei/api/ingredients/subtypes";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Class } from "@package/java/lang";

declare module "@package/mezz/jei/api/registration" {
    export class $IVanillaCategoryExtensionRegistration {
    }
    export interface $IVanillaCategoryExtensionRegistration {
        getCraftingCategory(): $IExtendableCraftingRecipeCategory;
        getSmithingCategory(): $IExtendableSmithingRecipeCategory;
        getJeiHelpers(): $IJeiHelpers;
        get craftingCategory(): $IExtendableCraftingRecipeCategory;
        get smithingCategory(): $IExtendableSmithingRecipeCategory;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IModInfoRegistration {
    }
    export interface $IModInfoRegistration {
        addModAliases(arg0: string, arg1: $Collection_<string>): void;
        addModAliases(arg0: string, ...arg1: string[]): void;
    }
    /**
     * Values that may be interpreted as {@link $IModInfoRegistration}.
     */
    export type $IModInfoRegistration_ = ((arg0: string, arg1: $Collection<string>) => void);
    export class $IAdvancedSearchRegistration {
    }
    export interface $IAdvancedSearchRegistration {
        replaceSearchStorage(arg0: $ISearchStorageFactory_): void;
        replaceSearchStorage(arg0: $ISearchStorageBuilderFactory_): void;
    }
    export class $IRecipeCatalystRegistration {
    }
    export interface $IRecipeCatalystRegistration {
        addRecipeCatalysts(arg0: $RecipeType<never>, ...arg1: $ItemStack_[]): void;
        addRecipeCatalysts(arg0: $RecipeType<never>, ...arg1: $ItemLike_[]): void;
        addRecipeCatalysts<T>(arg0: $RecipeType<never>, arg1: $IIngredientType_<T>, arg2: $List_<T>): void;
        getIngredientManager(): $IIngredientManager;
        addRecipeCatalyst<T>(arg0: $IIngredientType_<T>, arg1: T, ...arg2: $RecipeType<never>[]): void;
        addRecipeCatalyst(arg0: $ItemLike_, ...arg1: $RecipeType<never>[]): void;
        addRecipeCatalyst(arg0: $ItemStack_, ...arg1: $RecipeType<never>[]): void;
        getJeiHelpers(): $IJeiHelpers;
        get ingredientManager(): $IIngredientManager;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IExtraIngredientRegistration {
    }
    export interface $IExtraIngredientRegistration {
        addExtraIngredients<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>): void;
        addExtraItemStacks(arg0: $Collection_<$ItemStack_>): void;
    }
    /**
     * Values that may be interpreted as {@link $IExtraIngredientRegistration}.
     */
    export type $IExtraIngredientRegistration_ = ((arg0: $IIngredientType<any>, arg1: $Collection<any>) => void);
    export class $IRecipeCategoryRegistration {
    }
    export interface $IRecipeCategoryRegistration {
        addRecipeCategories(...arg0: $IRecipeCategory<never>[]): void;
        getJeiHelpers(): $IJeiHelpers;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $ISubtypeRegistration {
    }
    export interface $ISubtypeRegistration {
        /**
         * @deprecated
         */
        registerSubtypeInterpreter(arg0: $Item, arg1: $IIngredientSubtypeInterpreter_<$ItemStack>): void;
        /**
         * @deprecated
         */
        registerSubtypeInterpreter<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $IIngredientSubtypeInterpreter_<I>): void;
        registerSubtypeInterpreter(arg0: $Item, arg1: $ISubtypeInterpreter<$ItemStack_>): void;
        registerSubtypeInterpreter<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $ISubtypeInterpreter<I>): void;
    }
    export class $IAdvancedRegistration {
    }
    export interface $IAdvancedRegistration {
        addRecipeButtonFactory(arg0: $IRecipeButtonControllerFactory_): void;
        /**
         * @deprecated
         */
        getJeiFeatures(): $IJeiFeatures;
        addTypedRecipeManagerPlugin<T>(arg0: $RecipeType<T>, arg1: $ISimpleRecipeManagerPlugin<T>): void;
        getRecipeManagerPluginHelper(): $IRecipeManagerPluginHelper;
        addRecipeCategoryDecorator<T>(arg0: $RecipeType<T>, arg1: $IRecipeCategoryDecorator<T>): void;
        addRecipeManagerPlugin(arg0: $IRecipeManagerPlugin): void;
        getJeiHelpers(): $IJeiHelpers;
        get jeiFeatures(): $IJeiFeatures;
        get recipeManagerPluginHelper(): $IRecipeManagerPluginHelper;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IIngredientAliasRegistration {
    }
    export interface $IIngredientAliasRegistration {
        addAlias<I>(arg0: $ITypedIngredient<I>, arg1: string): void;
        addAlias<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: string): void;
        addAlias<I>(arg0: $IIngredientType_<I>, arg1: I, arg2: string): void;
        addAlias(arg0: $ItemStack_, arg1: string): void;
        addAlias(arg0: $Item, arg1: string): void;
        addAlias(arg0: $Fluid, arg1: string): void;
        addAliases<I>(arg0: $Collection_<$ITypedIngredient<I>>, arg1: string): void;
        addAliases<I>(arg0: $IIngredientType_<I>, arg1: $Collection_<I>, arg2: string): void;
        addAliases<I>(arg0: $ITypedIngredient<I>, arg1: $Collection_<string>): void;
        addAliases<I>(arg0: $IIngredientType_<I>, arg1: $Collection_<I>, arg2: $Collection_<string>): void;
        addAliases<I>(arg0: $Collection_<$ITypedIngredient<I>>, arg1: $Collection_<string>): void;
        addAliases<I>(arg0: $IIngredientType_<I>, arg1: I, arg2: $Collection_<string>): void;
        addAliases(arg0: $Item, arg1: $Collection_<string>): void;
        addAliases(arg0: $Fluid, arg1: $Collection_<string>): void;
        addAliases<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $Collection_<string>): void;
    }
    export class $IRuntimeRegistration {
    }
    export interface $IRuntimeRegistration {
        /**
         * @deprecated
         */
        getSearchStorageFactory(): $ISearchStorageFactory;
        getEditModeConfig(): $IEditModeConfig;
        setBookmarkOverlay(arg0: $IBookmarkOverlay): void;
        setRecipesGui(arg0: $IRecipesGui): void;
        getScreenHelper(): $IScreenHelper;
        getRecipeManager(): $IRecipeManager;
        getIngredientManager(): $IIngredientManager;
        getSearchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
        setIngredientListOverlay(arg0: $IIngredientListOverlay): void;
        getRecipeTransferManager(): $IRecipeTransferManager;
        setIngredientFilter(arg0: $IIngredientFilter): void;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        getJeiHelpers(): $IJeiHelpers;
        get searchStorageFactory(): $ISearchStorageFactory;
        get editModeConfig(): $IEditModeConfig;
        set bookmarkOverlay(value: $IBookmarkOverlay);
        set recipesGui(value: $IRecipesGui);
        get screenHelper(): $IScreenHelper;
        get recipeManager(): $IRecipeManager;
        get ingredientManager(): $IIngredientManager;
        get searchStorageBuilderFactory(): $ISearchStorageBuilderFactory;
        set ingredientListOverlay(value: $IIngredientListOverlay);
        get recipeTransferManager(): $IRecipeTransferManager;
        set ingredientFilter(value: $IIngredientFilter);
        get ingredientVisibility(): $IIngredientVisibility;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IRecipeRegistration {
    }
    export interface $IRecipeRegistration {
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        getIngredientManager(): $IIngredientManager;
        addIngredientInfo<T>(arg0: $List_<T>, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addIngredientInfo(arg0: $ItemLike_, ...arg1: $Component_[]): void;
        addIngredientInfo<T>(arg0: T, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addItemStackInfo(arg0: $ItemStack_, ...arg1: $Component_[]): void;
        addItemStackInfo(arg0: $List_<$ItemStack_>, ...arg1: $Component_[]): void;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        addRecipes<T>(arg0: $RecipeType<T>, arg1: $List_<T>): void;
        getJeiHelpers(): $IJeiHelpers;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
        get ingredientManager(): $IIngredientManager;
        get ingredientVisibility(): $IIngredientVisibility;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IGuiHandlerRegistration {
    }
    export interface $IGuiHandlerRegistration {
        addGenericGuiContainerHandler<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: $IGuiContainerHandler<never>): void;
        addGlobalGuiHandler(arg0: $IGlobalGuiHandler): void;
        addRecipeClickArea<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: number, arg2: number, arg3: number, arg4: number, ...arg5: $RecipeType<never>[]): void;
        addGuiContainerHandler<T extends $AbstractContainerScreen<never>>(arg0: $Class<T>, arg1: $IGuiContainerHandler<T>): void;
        addGhostIngredientHandler<T extends $Screen>(arg0: $Class<T>, arg1: $IGhostIngredientHandler<T>): void;
        addGuiScreenHandler<T extends $Screen>(arg0: $Class<T>, arg1: $IScreenHandler_<T>): void;
        getJeiHelpers(): $IJeiHelpers;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IRecipeTransferRegistration {
    }
    export interface $IRecipeTransferRegistration {
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler<C, R>, arg1: $RecipeType<R>): void;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $Class<C>, arg1: $MenuType<C>, arg2: $RecipeType<R>, arg3: number, arg4: number, arg5: number, arg6: number): void;
        addRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferInfo<C, R>): void;
        getTransferHelper(): $IRecipeTransferHandlerHelper;
        addUniversalRecipeTransferHandler<C extends $AbstractContainerMenu>(arg0: $IUniversalRecipeTransferHandler<C>): void;
        /**
         * @deprecated
         */
        addUniversalRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: $IRecipeTransferHandler<C, R>): void;
        getJeiHelpers(): $IJeiHelpers;
        get transferHelper(): $IRecipeTransferHandlerHelper;
        get jeiHelpers(): $IJeiHelpers;
    }
    export class $IModIngredientRegistration {
    }
    export interface $IModIngredientRegistration {
        /**
         * @deprecated
         */
        register<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $IIngredientHelper<V>, arg3: $IIngredientRenderer<V>): void;
        register<V>(arg0: $IIngredientType_<V>, arg1: $Collection_<V>, arg2: $IIngredientHelper<V>, arg3: $IIngredientRenderer<V>, arg4: $Codec<V>): void;
        getSubtypeManager(): $ISubtypeManager;
        getColorHelper(): $IColorHelper;
        get subtypeManager(): $ISubtypeManager;
        get colorHelper(): $IColorHelper;
    }
}
