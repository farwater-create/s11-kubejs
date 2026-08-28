import { $BlazeBurnerBlock$HeatLevel_, $BlazeBurnerBlock$HeatLevel } from "@package/com/simibubi/create/content/processing/burner";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $RecipeSerializer, $Recipe, $RecipeType, $Ingredient, $Ingredient_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $IRecipeTypeInfo } from "@package/com/simibubi/create/foundation/recipe";
import { $List, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Consumer, $Supplier_, $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $Enum } from "@package/java/lang";
import { $DatagenMod_ } from "@package/com/simibubi/create/api/data/recipe";
import { $ICustomIngredient } from "@package/net/neoforged/neoforge/common/crafting";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FlowingFluid, $Fluid } from "@package/net/minecraft/world/level/material";
import { $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $KubeCreateOutput } from "@package/dev/latvian/mods/kubejs/create/wrapper";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/processing/recipe" {
    export class $ProcessingOutput implements $KubeCreateOutput {
        getStack(): $ItemStack;
        rollOutput(arg0: $RandomSource): $ItemStack;
        getChance(): number;
        /**
         * @deprecated
         */
        static CODEC: $Codec<$ProcessingOutput>;
        /**
         * @deprecated
         */
        static CODEC_OLD: $Codec<$ProcessingOutput>;
        static EMPTY: $ProcessingOutput;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ProcessingOutput>;
        static CODEC_NEW: $Codec<$ProcessingOutput>;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: number);
        constructor(arg0: $Item, arg1: number, arg2: $DataComponentPatch_, arg3: number);
        constructor(arg0: $Item, arg1: number, arg2: number);
        constructor(arg0: $ItemStack_, arg1: number);
        get stack(): $ItemStack;
        get chance(): number;
    }
    export class $StandardProcessingRecipe<T extends $RecipeInput> extends $ProcessingRecipe<T, $ProcessingRecipeParams> {
        constructor(arg0: $IRecipeTypeInfo, arg1: $ProcessingRecipeParams);
    }
    export class $HeatCondition extends $Enum<$HeatCondition> implements $StringRepresentable {
        static values(): $HeatCondition[];
        static valueOf(arg0: string): $HeatCondition;
        getSerializedName(): string;
        visualizeAsBlazeBurner(): $BlazeBurnerBlock$HeatLevel;
        getColor(): number;
        testBlazeBurner(arg0: $BlazeBurnerBlock$HeatLevel_): boolean;
        getTranslationKey(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HeatCondition>;
        static HEATED: $HeatCondition;
        static SUPERHEATED: $HeatCondition;
        static NONE: $HeatCondition;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $HeatCondition>;
        get serializedName(): string;
        get color(): number;
        get translationKey(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $HeatCondition}.
     */
    export type $HeatCondition_ = "none" | "heated" | "superheated";
    export class $ProcessingRecipe$Factory<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>> {
    }
    export interface $ProcessingRecipe$Factory<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>> {
        create(arg0: P): R;
    }
    /**
     * Values that may be interpreted as {@link $ProcessingRecipe$Factory}.
     */
    export type $ProcessingRecipe$Factory_<P, R> = ((arg0: P) => R);
    export class $ProcessingInventory extends $ItemStackHandler {
        clear(): void;
        isEmpty(): boolean;
        withSlotLimit(arg0: boolean): $ProcessingInventory;
        appliedRecipe: boolean;
        recipeDuration: number;
        callback: $Consumer<$ItemStack>;
        remainingTime: number;
        constructor(arg0: $Consumer_<$ItemStack>);
        get empty(): boolean;
    }
    export class $StandardProcessingRecipe$Builder<R extends $StandardProcessingRecipe<never>> extends $ProcessingRecipeBuilder<$ProcessingRecipeParams, R, $StandardProcessingRecipe$Builder<R>> {
        self(): $StandardProcessingRecipe$Builder<R>;
        constructor(arg0: $StandardProcessingRecipe$Factory_<R>, arg1: $ResourceLocation_);
    }
    export class $ProcessingRecipe<I extends $RecipeInput, P extends $ProcessingRecipeParams> implements $Recipe<I> {
        validate(): $List<string>;
        getType(): $RecipeType<never>;
        isSpecial(): boolean;
        getProcessingDuration(): number;
        getFluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        getGroup(): string;
        getTypeInfo(): $IRecipeTypeInfo;
        static codec<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>>(arg0: $ProcessingRecipe$Factory_<P, R>, arg1: $MapCodec<P>): $MapCodec<R>;
        getParams(): P;
        enforceNextResult(arg0: $Supplier_<$ItemStack>): void;
        getRollableResults(): $List<$ProcessingOutput>;
        getRollableResultsAsItemStacks(): $List<$ItemStack>;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        rollResults(arg0: $RandomSource): $List<$ItemStack>;
        rollResults(arg0: $List_<$ProcessingOutput>, arg1: $RandomSource): $List<$ItemStack>;
        getRequiredHeat(): $HeatCondition;
        getFluidResults(): $NonNullList<$FluidStack>;
        assemble(arg0: I, arg1: $HolderLookup$Provider): $ItemStack;
        static streamCodec<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>>(arg0: $ProcessingRecipe$Factory_<P, R>, arg1: $StreamCodec<$RegistryFriendlyByteBuf, P>): $StreamCodec<$RegistryFriendlyByteBuf, R>;
        showNotification(): boolean;
        isIncomplete(): boolean;
        getToastSymbol(): $ItemStack;
        getRemainingItems(arg0: I): $NonNullList<$ItemStack>;
        constructor(arg0: $IRecipeTypeInfo, arg1: P);
        get type(): $RecipeType<never>;
        get special(): boolean;
        get processingDuration(): number;
        get fluidIngredients(): $NonNullList<$SizedFluidIngredient>;
        get group(): string;
        get typeInfo(): $IRecipeTypeInfo;
        get params(): P;
        get rollableResults(): $List<$ProcessingOutput>;
        get rollableResultsAsItemStacks(): $List<$ItemStack>;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get requiredHeat(): $HeatCondition;
        get fluidResults(): $NonNullList<$FluidStack>;
        get incomplete(): boolean;
        get toastSymbol(): $ItemStack;
    }
    export class $StandardProcessingRecipe$Factory<R extends $StandardProcessingRecipe<never>> {
    }
    export interface $StandardProcessingRecipe$Factory<R extends $StandardProcessingRecipe<never>> extends $ProcessingRecipe$Factory<$ProcessingRecipeParams, R> {
        create(arg0: $ProcessingRecipeParams): R;
    }
    /**
     * Values that may be interpreted as {@link $StandardProcessingRecipe$Factory}.
     */
    export type $StandardProcessingRecipe$Factory_<R> = ((arg0: $ProcessingRecipeParams) => R);
    export class $StandardProcessingRecipe$Serializer<R extends $StandardProcessingRecipe<never>> implements $RecipeSerializer<R> {
        factory(): $StandardProcessingRecipe$Factory<R>;
        codec(): $MapCodec<R>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, R>;
        constructor(arg0: $StandardProcessingRecipe$Factory_<R>);
    }
    export class $ProcessingRecipeBuilder<P extends $ProcessingRecipeParams, R extends $ProcessingRecipe<never, P>, S extends $ProcessingRecipeBuilder<P, R, S>> {
        duration(arg0: number): S;
        self(): S;
        build(arg0: $RecipeOutput): void;
        build(): R;
        output(arg0: number, arg1: $ItemStack_): S;
        output(arg0: number, arg1: $DatagenMod_, arg2: string, arg3: number): S;
        output(arg0: $ResourceLocation_): S;
        output(arg0: $DatagenMod_, arg1: string): S;
        output(arg0: $ItemLike_): S;
        output(arg0: number, arg1: $ItemLike_): S;
        output(arg0: $ItemLike_, arg1: number): S;
        output(arg0: number, arg1: $ItemLike_, arg2: number): S;
        output(arg0: $ItemStack_): S;
        output(arg0: $FluidStack_): S;
        output(arg0: $Fluid, arg1: number): S;
        output(arg0: $ProcessingOutput): S;
        output(arg0: number, arg1: $ResourceLocation_, arg2: number): S;
        withItemOutputs(arg0: $NonNullList<$ProcessingOutput>): S;
        withItemOutputs(...arg0: $ProcessingOutput[]): S;
        whenModMissing(arg0: string): S;
        withFluidOutputs(arg0: $NonNullList<$FluidStack_>): S;
        withFluidOutputs(...arg0: $FluidStack_[]): S;
        whenModLoaded(arg0: string): S;
        require(arg0: $ICustomIngredient): S;
        require(arg0: $Ingredient_): S;
        require(arg0: $ItemLike_): S;
        require(arg0: $TagKey_<$Item>): S;
        require(arg0: $SizedFluidIngredient): S;
        require(arg0: $TagKey_<$Fluid>, arg1: number): S;
        require(arg0: $FlowingFluid, arg1: number): S;
        require(arg0: $DatagenMod_, arg1: string): S;
        withSingleItemOutput(arg0: $ItemStack_): S;
        withItemIngredients(arg0: $NonNullList<$Ingredient_>): S;
        withItemIngredients(...arg0: $Ingredient_[]): S;
        requiresHeat(arg0: $HeatCondition_): S;
        withCondition(arg0: $ICondition): S;
        averageProcessingDuration(): S;
        withFluidIngredients(arg0: $NonNullList<$SizedFluidIngredient>): S;
        withFluidIngredients(...arg0: $SizedFluidIngredient[]): S;
        constructor(arg0: $ProcessingRecipe$Factory_<P, R>, arg1: $ResourceLocation_);
    }
    export class $ProcessingRecipeParams {
        static CODEC: $MapCodec<$ProcessingRecipeParams>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ProcessingRecipeParams>;
    }
}
