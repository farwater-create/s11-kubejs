import { $DeferredRegister } from "@package/net/neoforged/neoforge/registries";
import { $Level } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $IEventBus } from "@package/net/neoforged/bus/api";
import { $RecipeSerializer, $CraftingBookCategory_, $Recipe, $RecipeHolder, $CraftingInput, $CustomRecipe, $RecipeType, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $ResourceManagerReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $TransientCraftingContainer, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Object } from "@package/java/lang";
import { $IngredientType } from "@package/net/neoforged/neoforge/common/crafting";
export * as trie from "@package/com/simibubi/create/foundation/recipe/trie";

declare module "@package/com/simibubi/create/foundation/recipe" {
    export class $ItemCopyingRecipe extends $CustomRecipe {
        matches(arg0: $CraftingInput, arg1: $Level): boolean;
        assemble(arg0: $CraftingInput, arg1: $HolderLookup$Provider): $ItemStack;
        constructor(arg0: $CraftingBookCategory_);
    }
    export class $DummyCraftingContainer extends $TransientCraftingContainer {
        menu: $AbstractContainerMenu;
        constructor(arg0: $IItemHandler, arg1: number[]);
    }
    export class $ItemCopyingRecipe$SupportsItemCopying {
    }
    export interface $ItemCopyingRecipe$SupportsItemCopying {
        getComponentType(): $DataComponentType<never>;
        createCopy(arg0: $ItemStack_, arg1: number): $ItemStack;
        canCopyToItem(arg0: $ItemStack_): boolean;
        canCopyFromItem(arg0: $ItemStack_): boolean;
        get componentType(): $DataComponentType<never>;
    }
    /**
     * Values that may be interpreted as {@link $ItemCopyingRecipe$SupportsItemCopying}.
     */
    export type $ItemCopyingRecipe$SupportsItemCopying_ = (() => $DataComponentType<never>);
    export class $RecipeFinder {
        static get(arg0: $Object, arg1: $Level, arg2: $Predicate_<$RecipeHolder<$Recipe<never>>>): $List<$RecipeHolder<$Recipe<never>>>;
        static LISTENER: $ResourceManagerReloadListener;
        constructor();
    }
    export class $IRecipeTypeInfo {
    }
    export interface $IRecipeTypeInfo {
        getId(): $ResourceLocation;
        getType<I extends $RecipeInput, R extends $Recipe<I>>(): $RecipeType<R>;
        getSerializer<T extends $RecipeSerializer<never>>(): T;
        get id(): $ResourceLocation;
        get type(): $RecipeType<R>;
        get serializer(): T;
    }
    export class $RecipeConditions {
        static isOfType(...arg0: $RecipeType<never>[]): $Predicate<$RecipeHolder<$Recipe<never>>>;
        static firstIngredientMatches(arg0: $ItemStack_): $Predicate<$RecipeHolder<$Recipe<never>>>;
        static outputMatchesFilter(arg0: $FilteringBehaviour): $Predicate<$RecipeHolder<$Recipe<never>>>;
        constructor();
    }
    export class $AllIngredients {
        static register(arg0: $IEventBus): void;
        static INGREDIENT_TYPES: $DeferredRegister<$IngredientType<never>>;
        constructor();
    }
    export class $RecipeApplier {
        static applyRecipeOn(arg0: $ItemEntity, arg1: $Recipe<never>, arg2: boolean): void;
        static applyRecipeOn(arg0: $Level, arg1: $ItemStack_, arg2: $Recipe<never>, arg3: boolean): $List<$ItemStack>;
        constructor();
    }
}
