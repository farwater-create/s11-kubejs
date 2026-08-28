import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $List, $List_ } from "@package/java/util";
import { $GlobalMixin } from "@package/dev/emi/emi/mixin";
import { $Function_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EmiRenderable } from "@package/dev/emi/emi/api/render";
import { $ClientTooltipComponent } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $DataComponentType, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $EmiRecipe } from "@package/dev/emi/emi/api/recipe";
import { $Object, $Class } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as serializer from "@package/dev/emi/emi/api/stack/serializer";

declare module "@package/dev/emi/emi/api/stack" {
    export class $EmiIngredient {
        static of(list: $List_<$EmiIngredient>): $EmiIngredient;
        static of<T>(key: $TagKey_<T>): $EmiIngredient;
        static of(ingredient: $Ingredient_): $EmiIngredient;
        static of<T>(key: $TagKey_<T>, amount: number): $EmiIngredient;
        static of(ingredient: $Ingredient_, amount: number): $EmiIngredient;
        static of(list: $List_<$EmiIngredient>, amount: number): $EmiIngredient;
        static areEqual(a: $EmiIngredient, b: $EmiIngredient): boolean;
        static RENDER_AMOUNT: number;
        static RENDER_INGREDIENT: number;
        static RENDER_ICON: number;
        static RENDER_REMAINDER: number;
    }
    export interface $EmiIngredient extends $EmiRenderable, $GlobalMixin {
        isEmpty(): boolean;
        copy(): $EmiIngredient;
        setAmount(arg0: number): $EmiIngredient;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        getTooltip(): $List<$ClientTooltipComponent>;
        getEmiStacks(): $List<$EmiStack>;
        getAmount(): number;
        setChance(arg0: number): $EmiIngredient;
        getChance(): number;
        get empty(): boolean;
        get tooltip(): $List<$ClientTooltipComponent>;
        get emiStacks(): $List<$EmiStack>;
    }
    export class $EmiStackInteraction implements $GlobalMixin {
        isEmpty(): boolean;
        getStack(): $EmiIngredient;
        getRecipeContext(): $EmiRecipe;
        isClickable(): boolean;
        static EMPTY: $EmiStackInteraction;
        constructor(stack: $EmiIngredient);
        constructor(stack: $EmiIngredient, recipe: $EmiRecipe, clickable: boolean);
        get empty(): boolean;
        get stack(): $EmiIngredient;
        get recipeContext(): $EmiRecipe;
        get clickable(): boolean;
    }
    export class $EmiRegistryAdapter$StackConstructor<T> {
    }
    export interface $EmiRegistryAdapter$StackConstructor<T> extends $GlobalMixin {
        of(arg0: T, arg1: $DataComponentPatch_, arg2: number): $EmiStack;
    }
    /**
     * Values that may be interpreted as {@link $EmiRegistryAdapter$StackConstructor}.
     */
    export type $EmiRegistryAdapter$StackConstructor_<T> = ((arg0: T, arg1: $DataComponentPatch, arg2: number) => $EmiStack);
    export class $Comparison implements $GlobalMixin {
        compare(a: $EmiStack, b: $EmiStack): boolean;
        static of(comparator: $Comparison$Predicate_): $Comparison;
        static of(comparator: $Comparison$Predicate_, hashFunction: $Comparison$HashFunction_): $Comparison;
        static compareComponents(): $Comparison;
        static compareData<T>(arg0: $Function_<$EmiStack, T>): $Comparison;
        getHash(stack: $EmiStack): number;
        static DEFAULT_COMPARISON: $Comparison;
    }
    export class $Comparison$Predicate {
    }
    export interface $Comparison$Predicate extends $GlobalMixin {
        test(arg0: $EmiStack, arg1: $EmiStack): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Comparison$Predicate}.
     */
    export type $Comparison$Predicate_ = ((arg0: $EmiStack, arg1: $EmiStack) => boolean);
    export class $EmiStack implements $EmiIngredient, $GlobalMixin {
        getName(): $Component;
        get<T>(type: $DataComponentType<T>): T;
        isEmpty(): boolean;
        static of(fluid: $Fluid, amount: number): $EmiStack;
        static of(fluid: $Fluid): $EmiStack;
        static of(item: $ItemLike_, componentChanges: $DataComponentPatch_): $EmiStack;
        static of(item: $ItemLike_, componentChanges: $DataComponentPatch_, amount: number): $EmiStack;
        static of(item: $ItemLike_): $EmiStack;
        static of(stack: $ItemStack_, amount: number): $EmiStack;
        static of(item: $ItemLike_, amount: number): $EmiStack;
        static of(fluid: $Fluid, componentChanges: $DataComponentPatch_): $EmiStack;
        static of(fluid: $Fluid, componentChanges: $DataComponentPatch_, amount: number): $EmiStack;
        static of(stack: $ItemStack_): $EmiStack;
        getKey(): $Object;
        getId(): $ResourceLocation;
        getOrDefault<T>(type: $DataComponentType<T>, fallback: T): T;
        copy(): $EmiStack;
        isEqual(stack: $EmiStack, comparison: $Comparison): boolean;
        isEqual(stack: $EmiStack): boolean;
        comparison(comparison: $Comparison): $EmiStack;
        comparison(comparison: $Function_<$Comparison, $Comparison>): $EmiStack;
        getComponentChanges(): $DataComponentPatch;
        getKeyOfType<T>(clazz: $Class<T>): T;
        getTooltipText(): $List<$Component>;
        getRemainder(): $EmiStack;
        setRemainder(stack: $EmiStack): $EmiStack;
        setAmount(amount: number): $EmiStack;
        getTooltip(): $List<$ClientTooltipComponent>;
        getEmiStacks(): $List<$EmiStack>;
        getItemStack(): $ItemStack;
        getAmount(): number;
        setChance(chance: number): $EmiStack;
        getChance(): number;
        render(draw: $GuiGraphics, x: number, y: number, delta: number): void;
        static EMPTY: $EmiStack;
        constructor();
        get name(): $Component;
        get empty(): boolean;
        get key(): $Object;
        get id(): $ResourceLocation;
        get componentChanges(): $DataComponentPatch;
        get tooltipText(): $List<$Component>;
        get tooltip(): $List<$ClientTooltipComponent>;
        get emiStacks(): $List<$EmiStack>;
        get itemStack(): $ItemStack;
    }
    export class $Comparison$HashFunction {
    }
    export interface $Comparison$HashFunction extends $GlobalMixin {
        hash(arg0: $EmiStack): number;
    }
    /**
     * Values that may be interpreted as {@link $Comparison$HashFunction}.
     */
    export type $Comparison$HashFunction_ = ((arg0: $EmiStack) => number);
    export class $EmiRegistryAdapter<T> {
        static simple<T>(clazz: $Class<T>, registry: $Registry<T>, arg2: $EmiRegistryAdapter$StackConstructor_<T>): $EmiRegistryAdapter<T>;
    }
    export interface $EmiRegistryAdapter<T> extends $GlobalMixin {
        of(arg0: T, arg1: $DataComponentPatch_, arg2: number): $EmiStack;
        getRegistry(): $Registry<T>;
        getBaseClass(): $Class<T>;
        get registry(): $Registry<T>;
        get baseClass(): $Class<T>;
    }
}
