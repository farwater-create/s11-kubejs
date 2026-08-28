import { $EmiStack, $EmiIngredient } from "@package/dev/emi/emi/api/stack";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Predicate } from "@package/java/util/function";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $RemoveEntriesKubeEvent, $AddEntriesKubeEvent, $RecipeViewerEntryType, $AddInformationKubeEvent } from "@package/dev/latvian/mods/kubejs/recipe/viewer";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $EmiRegistry, $EmiInitRegistry, $EmiPlugin } from "@package/dev/emi/emi/api";
import { $List_ } from "@package/java/util";
import { $Object } from "@package/java/lang";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";

declare module "@package/dev/latvian/mods/kubejs/integration/emi" {
    export class $KubeJSEMIPlugin implements $EmiPlugin {
        register(registry: $EmiRegistry): void;
        initialize(registry: $EmiInitRegistry): void;
        constructor();
    }
    export class $EMIRemoveEntriesKubeEvent implements $RemoveEntriesKubeEvent {
        remove(filter: $Object): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(type: $RecipeViewerEntryType, registry: $EmiRegistry);
    }
    export class $EMIAddEntriesKubeEvent implements $AddEntriesKubeEvent {
        add(items: $Object[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(type: $RecipeViewerEntryType, registry: $EmiRegistry);
    }
    export class $EMIAddInformationKubeEvent implements $AddInformationKubeEvent {
        add(filter: $Object, info: $List_<$Component_>): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(type: $RecipeViewerEntryType, registry: $EmiRegistry);
    }
    export class $EMIIntegration {
        static predicate(ingredient: $FluidIngredient_): $Predicate<$EmiStack>;
        static predicate(ingredient: $ItemPredicate_): $Predicate<$EmiStack>;
        static fluidIngredient(ingredient: $FluidIngredient_): $EmiIngredient;
        static fluid(stack: $FluidStack_): $EmiStack;
        constructor();
    }
}
