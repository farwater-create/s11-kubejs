import { $SandPaperPolishingRecipe } from "@package/com/simibubi/create/content/equipment/sandPaper";
import { $CreateRecipeCategoryAccessor } from "@package/plus/dragons/createenchantmentindustry/mixin/accessor";
import { $Codec } from "@package/com/mojang/serialization";
import { $AbstractCookingRecipe, $RecipeHolder_, $Recipe, $RecipeHolder, $SmokingRecipe, $CraftingRecipe, $RecipeType, $Ingredient, $Ingredient_, $StonecutterRecipe, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $IDrawable } from "@package/mezz/jei/api/gui/drawable";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $ConfigBase$ConfigBool } from "@package/net/createmod/catnip/config";
import { $IRecipeSlotsView_, $IRecipeSlotRichTooltipCallback, $IRecipeSlotView, $IRecipeSlotDrawable } from "@package/mezz/jei/api/gui/ingredient";
import { $Minecraft } from "@package/net/minecraft/client";
import { $IRecipeTypeInfo } from "@package/com/simibubi/create/foundation/recipe";
import { $List, $List_, $Collection } from "@package/java/util";
import { $PressingRecipe } from "@package/com/simibubi/create/content/kinetics/press";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $CuttingRecipe } from "@package/com/simibubi/create/content/kinetics/saw";
import { $Supplier_, $Function_, $Consumer_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $IIngredientRenderer } from "@package/mezz/jei/api/ingredients";
import { $IFocusGroup, $IRecipeManager, $RecipeType as $RecipeType$1 } from "@package/mezz/jei/api/recipe";
import { $BatchRenderElement_ } from "@package/mezz/jei/api/ingredients/rendering";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $HauntingRecipe, $SplashingRecipe } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $SequencedAssemblyRecipe } from "@package/com/simibubi/create/content/processing/sequenced";
import { $ItemLike_, $ItemLike } from "@package/net/minecraft/world/level";
import { $IRecipeCatalystRegistration, $IRecipeRegistration } from "@package/mezz/jei/api/registration";
import { $ItemStack_, $ItemStack, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ICodecHelper } from "@package/mezz/jei/api/helpers";
import { $AbstractCrushingRecipe } from "@package/com/simibubi/create/content/kinetics/crusher";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $StandardProcessingRecipe, $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";
import { $IIngredientManager } from "@package/mezz/jei/api/runtime";
import { $ItemApplicationRecipe, $DeployerApplicationRecipe } from "@package/com/simibubi/create/content/kinetics/deployer";
import { $IRecipeSlotBuilder, $IRecipeLayoutBuilder, $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $ConversionRecipe } from "@package/com/simibubi/create/compat/jei";
import { $FillingRecipe, $EmptyingRecipe } from "@package/com/simibubi/create/content/fluids/transfer";
import { $BasinRecipe } from "@package/com/simibubi/create/content/processing/basin";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeExtrasBuilder } from "@package/mezz/jei/api/gui/widgets";
export * as animations from "@package/com/simibubi/create/compat/jei/category/animations";
export * as sequencedAssembly from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";

declare module "@package/com/simibubi/create/compat/jei/category" {
    export class $ProcessingViaFanCategory<T extends $Recipe<never>> extends $CreateRecipeCategory<T> {
        static getFan(arg0: string): $Supplier<$ItemStack>;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: T, arg2: $IFocusGroup): void;
        draw(arg0: T, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        constructor(arg0: $CreateRecipeCategory$Info_<T>);
    }
    export class $CrushingCategory extends $CreateRecipeCategory<$AbstractCrushingRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $AbstractCrushingRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $AbstractCrushingRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$AbstractCrushingRecipe>);
    }
    export class $FanBlastingCategory extends $ProcessingViaFanCategory<$AbstractCookingRecipe> {
        constructor(arg0: $CreateRecipeCategory$Info_<$AbstractCookingRecipe>);
    }
    export class $SequencedAssemblyCategory extends $CreateRecipeCategory<$SequencedAssemblyRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $SequencedAssemblyRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $SequencedAssemblyRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getTooltipStrings(arg0: $SequencedAssemblyRecipe, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        constructor(arg0: $CreateRecipeCategory$Info_<$SequencedAssemblyRecipe>);
    }
    export class $PolishingCategory extends $CreateRecipeCategory<$SandPaperPolishingRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $SandPaperPolishingRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $SandPaperPolishingRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$SandPaperPolishingRecipe>);
    }
    export class $PressingCategory extends $CreateRecipeCategory<$PressingRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $PressingRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $PressingRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$PressingRecipe>);
    }
    export class $SpoutCategory extends $CreateRecipeCategory<$FillingRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $FillingRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $FillingRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        static consumeRecipes(arg0: $Consumer_<$RecipeHolder<$FillingRecipe>>, arg1: $IIngredientManager): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$FillingRecipe>);
    }
    export class $PackingCategory$PackingType extends $Enum<$PackingCategory$PackingType> {
    }
    /**
     * Values that may be interpreted as {@link $PackingCategory$PackingType}.
     */
    export type $PackingCategory$PackingType_ = "compacting" | "auto_square";
    export class $PackingCategory extends $BasinCategory {
        static standard(arg0: $CreateRecipeCategory$Info_<$BasinRecipe>): $PackingCategory;
        static autoSquare(arg0: $CreateRecipeCategory$Info_<$BasinRecipe>): $PackingCategory;
    }
    export class $MechanicalCraftingCategory extends $CreateRecipeCategory<$CraftingRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $CraftingRecipe, arg2: $IFocusGroup): void;
        static getScale(arg0: $CraftingRecipe): number;
        draw(arg0: $CraftingRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        static getXPadding(arg0: $CraftingRecipe): number;
        static getYPadding(arg0: $CraftingRecipe): number;
        constructor(arg0: $CreateRecipeCategory$Info_<$CraftingRecipe>);
    }
    export class $FanWashingCategory extends $ProcessingViaFanCategory$MultiOutput<$SplashingRecipe> {
        constructor(arg0: $CreateRecipeCategory$Info_<$SplashingRecipe>);
    }
    export class $CreateRecipeCategory$Factory<T extends $Recipe<never>> {
    }
    export interface $CreateRecipeCategory$Factory<T extends $Recipe<never>> {
        create(arg0: $CreateRecipeCategory$Info_<T>): $CreateRecipeCategory<T>;
    }
    /**
     * Values that may be interpreted as {@link $CreateRecipeCategory$Factory}.
     */
    export type $CreateRecipeCategory$Factory_<T> = ((arg0: $CreateRecipeCategory$Info<T>) => $CreateRecipeCategory<T>);
    export class $MysteriousItemConversionCategory extends $CreateRecipeCategory<$ConversionRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $ConversionRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $ConversionRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        static RECIPES: $List<$RecipeHolder<$ConversionRecipe>>;
        constructor(arg0: $CreateRecipeCategory$Info_<$ConversionRecipe>);
    }
    export class $MixingCategory extends $BasinCategory {
        static standard(arg0: $CreateRecipeCategory$Info_<$BasinRecipe>): $MixingCategory;
        static autoShapeless(arg0: $CreateRecipeCategory$Info_<$BasinRecipe>): $MixingCategory;
        static autoBrewing(arg0: $CreateRecipeCategory$Info_<$BasinRecipe>): $MixingCategory;
    }
    export class $ItemApplicationCategory extends $CreateRecipeCategory<$ItemApplicationRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $ItemApplicationRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $ItemApplicationRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$ItemApplicationRecipe>);
    }
    export class $BlockCuttingCategory extends $CreateRecipeCategory<$BlockCuttingCategory$CondensedBlockCuttingRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $BlockCuttingCategory$CondensedBlockCuttingRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $BlockCuttingCategory$CondensedBlockCuttingRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        static condenseRecipes(arg0: $List_<$RecipeHolder_<never>>): $List<$RecipeHolder<$BlockCuttingCategory$CondensedBlockCuttingRecipe>>;
        constructor(arg0: $CreateRecipeCategory$Info_<$BlockCuttingCategory$CondensedBlockCuttingRecipe>);
    }
    export class $BasinCategory extends $CreateRecipeCategory<$BasinRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $BasinRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $BasinRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$BasinRecipe>, arg1: boolean);
    }
    export class $MixingCategory$MixingType extends $Enum<$MixingCategory$MixingType> {
    }
    /**
     * Values that may be interpreted as {@link $MixingCategory$MixingType}.
     */
    export type $MixingCategory$MixingType_ = "mixing" | "auto_shapeless" | "auto_brewing";
    export class $CreateRecipeCategory$Info<T extends $Recipe<never>> extends $Record {
        icon(): $IDrawable;
        catalysts(): $List<$Supplier<$ItemStack>>;
        background(): $IDrawable;
        title(): $Component;
        recipeType(): $RecipeType$1<$RecipeHolder<T>>;
        recipes(): $Supplier<$List<$RecipeHolder<T>>>;
        constructor(recipeType: $RecipeType$1<$RecipeHolder_<T>>, title: $Component_, background: $IDrawable, icon: $IDrawable, recipes: $Supplier_<$List<$RecipeHolder<T>>>, catalysts: $List_<$Supplier_<$ItemStack>>);
    }
    /**
     * Values that may be interpreted as {@link $CreateRecipeCategory$Info}.
     */
    export type $CreateRecipeCategory$Info_<T> = { recipes?: $Supplier_<$List<$RecipeHolder<$Recipe<never>>>>, title?: $Component_, background?: $IDrawable, catalysts?: $List_<$Supplier_<$ItemStack>>, recipeType?: $RecipeType$1<$RecipeHolder_<$Recipe<never>>>, icon?: $IDrawable,  } | [recipes?: $Supplier_<$List<$RecipeHolder<$Recipe<never>>>>, title?: $Component_, background?: $IDrawable, catalysts?: $List_<$Supplier_<$ItemStack>>, recipeType?: $RecipeType$1<$RecipeHolder_<$Recipe<never>>>, icon?: $IDrawable, ];
    export class $FanSmokingCategory extends $ProcessingViaFanCategory<$SmokingRecipe> {
        constructor(arg0: $CreateRecipeCategory$Info_<$SmokingRecipe>);
    }
    export class $CreateRecipeCategory$Builder<T extends $Recipe<$RecipeInput>> {
        build(arg0: string, arg1: $CreateRecipeCategory$Factory_<T>): $CreateRecipeCategory<T>;
        build(arg0: $ResourceLocation_, arg1: $CreateRecipeCategory$Factory_<T>): $CreateRecipeCategory<T>;
        icon(arg0: $IDrawable): $CreateRecipeCategory$Builder<T>;
        background(arg0: $IDrawable): $CreateRecipeCategory$Builder<T>;
        catalyst(arg0: $Supplier_<$ItemLike>): $CreateRecipeCategory$Builder<T>;
        itemIcon(arg0: $ItemLike_): $CreateRecipeCategory$Builder<T>;
        addAllRecipesIf(arg0: $Predicate_<$RecipeHolder<T>>): $CreateRecipeCategory$Builder<T>;
        addAllRecipesIf(arg0: $Predicate_<$RecipeHolder<never>>, arg1: $Function_<$RecipeHolder<never>, $RecipeHolder<T>>): $CreateRecipeCategory$Builder<T>;
        addTypedRecipesIf(arg0: $Supplier_<$RecipeType<T>>, arg1: $Predicate_<$RecipeHolder<never>>): $CreateRecipeCategory$Builder<T>;
        catalystStack(arg0: $Supplier_<$ItemStack>): $CreateRecipeCategory$Builder<T>;
        removeRecipes(arg0: $Supplier_<$RecipeType<T>>): $CreateRecipeCategory$Builder<T>;
        enableWhen(arg0: $ConfigBase$ConfigBool): $CreateRecipeCategory$Builder<T>;
        enableWhen(arg0: $Supplier_<boolean>): $CreateRecipeCategory$Builder<T>;
        doubleItemIcon(arg0: $ItemLike_, arg1: $ItemLike_): $CreateRecipeCategory$Builder<T>;
        addTypedRecipes(arg0: $IRecipeTypeInfo): $CreateRecipeCategory$Builder<T>;
        addTypedRecipes<I extends $RecipeInput, R extends $Recipe<I>>(arg0: $Supplier_<$RecipeType<R>>): $CreateRecipeCategory$Builder<T>;
        addTypedRecipes(arg0: $Supplier_<$RecipeType<T>>, arg1: $Function_<$RecipeHolder<never>, $RecipeHolder<T>>): $CreateRecipeCategory$Builder<T>;
        emptyBackground(arg0: number, arg1: number): $CreateRecipeCategory$Builder<T>;
        addRecipes(arg0: $Supplier_<$Collection<$RecipeHolder<T>>>): $CreateRecipeCategory$Builder<T>;
        removeNonAutomation(): $CreateRecipeCategory$Builder<T>;
        addRecipeListConsumer(arg0: $Consumer_<$List<$RecipeHolder<T>>>): $CreateRecipeCategory$Builder<T>;
        addTypedRecipesExcluding(arg0: $Supplier_<$RecipeType<T>>, arg1: $Supplier_<$RecipeType<T>>): $CreateRecipeCategory$Builder<T>;
        constructor(arg0: $Class<T>);
    }
    export class $ItemDrainCategory extends $CreateRecipeCategory<$EmptyingRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $EmptyingRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $EmptyingRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        static consumeRecipes(arg0: $Consumer_<$RecipeHolder<$EmptyingRecipe>>, arg1: $IIngredientManager): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$EmptyingRecipe>);
    }
    export class $MillingCategory extends $CreateRecipeCategory<$AbstractCrushingRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $AbstractCrushingRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $AbstractCrushingRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$AbstractCrushingRecipe>);
    }
    export class $DeployingCategory extends $CreateRecipeCategory<$DeployerApplicationRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $DeployerApplicationRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $DeployerApplicationRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$DeployerApplicationRecipe>);
    }
    export class $FanHauntingCategory extends $ProcessingViaFanCategory$MultiOutput<$HauntingRecipe> {
        constructor(arg0: $CreateRecipeCategory$Info_<$HauntingRecipe>);
    }
    export class $BlockCuttingCategory$CondensedBlockCuttingRecipe extends $StonecutterRecipe {
        getOutputs(): $List<$ItemStack>;
        addOutput(arg0: $ItemStack_): void;
        getCondensedOutputs(): $List<$List<$ItemStack>>;
        result: $ItemStack;
        ingredient: $Ingredient;
        group: string;
        constructor(arg0: $Ingredient_);
        get outputs(): $List<$ItemStack>;
        get condensedOutputs(): $List<$List<$ItemStack>>;
    }
    export class $ProcessingViaFanCategory$MultiOutput<T extends $StandardProcessingRecipe<never>> extends $ProcessingViaFanCategory<T> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: T, arg2: $IFocusGroup): void;
        constructor(arg0: $CreateRecipeCategory$Info_<T>);
    }
    export class $CreateRecipeCategory<T extends $Recipe<never>> implements $IRecipeCategory<$RecipeHolder<T>>, $CreateRecipeCategoryAccessor {
        getIcon(): $IDrawable;
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $RecipeHolder_<$RecipeHolder_<T>>, arg2: $IFocusGroup): void;
        draw(arg0: $RecipeHolder_<$RecipeHolder_<T>>, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        getTitle(): $Component;
        static addStochasticTooltip(arg0: $ProcessingOutput): $IRecipeSlotRichTooltipCallback;
        getRecipeType(): $RecipeType$1<$RecipeHolder<$RecipeHolder<T>>>;
        getTooltipStrings(arg0: $RecipeHolder_<$RecipeHolder_<T>>, arg1: $IRecipeSlotsView_, arg2: number, arg3: number): $List<$Component>;
        static addFluidSlot(arg0: $IRecipeLayoutBuilder, arg1: number, arg2: number, arg3: $FluidStack_): $IRecipeSlotBuilder;
        static addFluidSlot(arg0: $IRecipeLayoutBuilder, arg1: number, arg2: number, arg3: $SizedFluidIngredient): $IRecipeSlotBuilder;
        getBackground(): $IDrawable;
        static getRenderedSlot(arg0: $ProcessingOutput): $IDrawable;
        static getRenderedSlot(arg0: number): $IDrawable;
        static getRenderedSlot(): $IDrawable;
        static getResultItem(arg0: $Recipe<never>): $ItemStack;
        static invokeAddPotionTooltip$create_enchantment_industry_$md$707fe4$0(arg0: $IRecipeSlotView, arg1: $List_<any>): void;
        registerCatalysts(arg0: $IRecipeCatalystRegistration): void;
        registerRecipes(arg0: $IRecipeRegistration): void;
        getWidth(): number;
        getHeight(): number;
        isHandled(arg0: $RecipeHolder_<T>): boolean;
        getRegistryName(arg0: $RecipeHolder_<T>): $ResourceLocation;
        getCodec(arg0: $ICodecHelper, arg1: $IRecipeManager): $Codec<$RecipeHolder<T>>;
        getTooltip(arg0: $ITooltipBuilder, arg1: $RecipeHolder_<T>, arg2: $IRecipeSlotsView_, arg3: number, arg4: number): void;
        onDisplayedIngredientsUpdate(arg0: $RecipeHolder_<T>, arg1: $List_<$IRecipeSlotDrawable>, arg2: $IFocusGroup): void;
        needsRecipeBorder(): boolean;
        /**
         * @deprecated
         */
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $RecipeHolder_<T>, arg2: $IRecipeSlotsView_, arg3: $IFocusGroup): void;
        createRecipeExtras(arg0: $IRecipeExtrasBuilder, arg1: $RecipeHolder_<T>, arg2: $IFocusGroup): void;
        /**
         * @deprecated
         */
        handleInput(arg0: $RecipeHolder_<T>, arg1: number, arg2: number, arg3: $InputConstants$Key): boolean;
        constructor(arg0: $CreateRecipeCategory$Info_<$RecipeHolder_<T>>);
        get icon(): $IDrawable;
        get title(): $Component;
        get recipeType(): $RecipeType$1<$RecipeHolder<$RecipeHolder<T>>>;
        get background(): $IDrawable;
        get width(): number;
        get height(): number;
    }
    export class $SawingCategory extends $CreateRecipeCategory<$CuttingRecipe> {
        setRecipe(arg0: $IRecipeLayoutBuilder, arg1: $CuttingRecipe, arg2: $IFocusGroup): void;
        draw(arg0: $CuttingRecipe, arg1: $IRecipeSlotsView_, arg2: $GuiGraphics, arg3: number, arg4: number): void;
        constructor(arg0: $CreateRecipeCategory$Info_<$CuttingRecipe>);
    }
    export class $MechanicalCraftingCategory$CrafterIngredientRenderer implements $IIngredientRenderer<$ItemStack> {
        getWidth(): number;
        getHeight(): number;
        getFontRenderer(arg0: $Minecraft, arg1: $ItemStack_): $Font;
        renderBatch(arg0: $GuiGraphics, arg1: $List_<$BatchRenderElement_<$ItemStack_>>): void;
        render(arg0: $GuiGraphics, arg1: $ItemStack_, arg2: number, arg3: number): void;
        getTooltip(arg0: $ITooltipBuilder, arg1: $ItemStack_, arg2: $TooltipFlag): void;
        get width(): number;
        get height(): number;
    }
    export class $CrushingCategory$LayoutEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CrushingCategory$LayoutEntry}.
     */
    export type $CrushingCategory$LayoutEntry_ = { posX?: number, output?: $ProcessingOutput, posY?: number,  } | [posX?: number, output?: $ProcessingOutput, posY?: number, ];
}
