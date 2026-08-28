import { $ItemLike, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $MixingRecipe, $CompactingRecipe } from "@package/com/simibubi/create/content/kinetics/mixer";
import { $SandPaperPolishingRecipe } from "@package/com/simibubi/create/content/equipment/sandPaper";
import { $Item } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $MillingRecipe } from "@package/com/simibubi/create/content/kinetics/millstone";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RecipeProvider, $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $List_ } from "@package/java/util";
import { $CrushingRecipe } from "@package/com/simibubi/create/content/kinetics/crusher";
import { $PressingRecipe } from "@package/com/simibubi/create/content/kinetics/press";
import { $ProcessingRecipeParams, $ProcessingRecipeBuilder, $StandardProcessingRecipe$Builder, $ProcessingRecipe, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $PackOutput$PathProvider, $PackOutput } from "@package/net/minecraft/data";
import { $ItemApplicationRecipeParams, $ManualApplicationRecipe, $DeployerApplicationRecipe, $ItemApplicationRecipe$Builder } from "@package/com/simibubi/create/content/kinetics/deployer";
import { $ItemEntry } from "@package/com/tterrag/registrate/util/entry";
import { $Supplier_ } from "@package/java/util/function";
import { $CuttingRecipe } from "@package/com/simibubi/create/content/kinetics/saw";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $FillingRecipe, $EmptyingRecipe } from "@package/com/simibubi/create/content/fluids/transfer";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $CopperBlockSet } from "@package/com/simibubi/create/foundation/block";
import { $HauntingRecipe, $SplashingRecipe } from "@package/com/simibubi/create/content/kinetics/fan/processing";

declare module "@package/com/simibubi/create/api/data/recipe" {
    export class $DeployingRecipeGen extends $ProcessingRecipeGen<$ItemApplicationRecipeParams, $DeployerApplicationRecipe, $ItemApplicationRecipe$Builder<$DeployerApplicationRecipe>> {
        addWax(arg0: $Supplier_<$ItemLike>, arg1: $Supplier_<$ItemLike>): $BaseRecipeProvider$GeneratedRecipe;
        copperChain(arg0: $CopperBlockSet): $BaseRecipeProvider$GeneratedRecipe;
        oxidizationChain(arg0: $List_<$Supplier_<$ItemLike>>, arg1: $List_<$Supplier_<$ItemLike>>): $BaseRecipeProvider$GeneratedRecipe;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $ItemApplicationRecipeGen extends $ProcessingRecipeGen<$ItemApplicationRecipeParams, $ManualApplicationRecipe, $ItemApplicationRecipe$Builder<$ManualApplicationRecipe>> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $WashingRecipeGen extends $StandardProcessingRecipeGen<$SplashingRecipe> {
        convert(arg0: $Block, arg1: $Block): $BaseRecipeProvider$GeneratedRecipe;
        crushedOre(arg0: $ItemEntry<$Item>, arg1: $Supplier_<$ItemLike>, arg2: $Supplier_<$ItemLike>, arg3: number): $BaseRecipeProvider$GeneratedRecipe;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $PressingRecipeGen extends $StandardProcessingRecipeGen<$PressingRecipe> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $ProcessingRecipeGen<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>, B extends $ProcessingRecipeBuilder<P, R, B>> extends $BaseRecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $FillingRecipeGen extends $StandardProcessingRecipeGen<$FillingRecipe> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $BaseRecipeProvider$GeneratedRecipe {
    }
    export interface $BaseRecipeProvider$GeneratedRecipe {
        register(arg0: $RecipeOutput): void;
    }
    /**
     * Values that may be interpreted as {@link $BaseRecipeProvider$GeneratedRecipe}.
     */
    export type $BaseRecipeProvider$GeneratedRecipe_ = ((arg0: $RecipeOutput) => void);
    export class $CuttingRecipeGen extends $StandardProcessingRecipeGen<$CuttingRecipe> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $MechanicalCraftingRecipeBuilder {
        key(arg0: string, arg1: $ItemLike_): $MechanicalCraftingRecipeBuilder;
        key(arg0: string, arg1: $Ingredient_): $MechanicalCraftingRecipeBuilder;
        key(arg0: string, arg1: $TagKey_<$Item>): $MechanicalCraftingRecipeBuilder;
        build(arg0: $RecipeOutput): void;
        build(arg0: $RecipeOutput, arg1: string): void;
        build(arg0: $RecipeOutput, arg1: $ResourceLocation_): void;
        whenModMissing(arg0: string): $MechanicalCraftingRecipeBuilder;
        whenModLoaded(arg0: string): $MechanicalCraftingRecipeBuilder;
        withCondition(arg0: $ICondition): $MechanicalCraftingRecipeBuilder;
        static shapedRecipe(arg0: $ItemLike_, arg1: number): $MechanicalCraftingRecipeBuilder;
        static shapedRecipe(arg0: $ItemLike_): $MechanicalCraftingRecipeBuilder;
        patternLine(arg0: string): $MechanicalCraftingRecipeBuilder;
        disallowMirrored(): $MechanicalCraftingRecipeBuilder;
        constructor(arg0: $ItemLike_, arg1: number);
    }
    export class $CrushingRecipeGen extends $StandardProcessingRecipeGen<$CrushingRecipe> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $MixingRecipeGen extends $StandardProcessingRecipeGen<$MixingRecipe> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $PolishingRecipeGen extends $StandardProcessingRecipeGen<$SandPaperPolishingRecipe> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $BaseRecipeProvider extends $RecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $MillingRecipeGen extends $StandardProcessingRecipeGen<$MillingRecipe> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $CompactingRecipeGen extends $StandardProcessingRecipeGen<$CompactingRecipe> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $DatagenMod {
    }
    export interface $DatagenMod {
        getId(): string;
        oreOf(arg0: string): $ResourceLocation;
        ingotOf(arg0: string): $ResourceLocation;
        nuggetOf(arg0: string): $ResourceLocation;
        asResource(arg0: string): $ResourceLocation;
        recipeId(arg0: string): string;
        reversedMetalPrefix(): boolean;
        strippedIsSuffix(): boolean;
        deepslateOreOf(arg0: string): $ResourceLocation;
        omitWoodSuffix(): boolean;
        get id(): string;
    }
    /**
     * Values that may be interpreted as {@link $DatagenMod}.
     */
    export type $DatagenMod_ = (() => string);
    export class $HauntingRecipeGen extends $StandardProcessingRecipeGen<$HauntingRecipe> {
        convert(arg0: $ItemLike_, arg1: $ItemLike_): $BaseRecipeProvider$GeneratedRecipe;
        convert(arg0: $Supplier_<$Ingredient>, arg1: $Supplier_<$ItemLike>): $BaseRecipeProvider$GeneratedRecipe;
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $MechanicalCraftingRecipeGen extends $BaseRecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $SequencedAssemblyRecipeGen extends $BaseRecipeProvider {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $MechanicalCraftingRecipeGen$GeneratedRecipeBuilder {
    }
    export class $StandardProcessingRecipeGen<R extends $StandardProcessingRecipe<never>> extends $ProcessingRecipeGen<$ProcessingRecipeParams, R, $StandardProcessingRecipe$Builder<R>> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
    export class $EmptyingRecipeGen extends $StandardProcessingRecipeGen<$EmptyingRecipe> {
        advancementPathProvider: $PackOutput$PathProvider;
        recipePathProvider: $PackOutput$PathProvider;
        constructor(arg0: $PackOutput, arg1: $CompletableFuture<$HolderLookup$Provider>, arg2: string);
    }
}
