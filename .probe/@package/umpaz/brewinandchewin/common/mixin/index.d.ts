import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $Object } from "@package/java/lang";
import { $BitSet, $Map_, $Map, $List } from "@package/java/util";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootParams } from "@package/net/minecraft/world/level/storage/loot";
import { $DSL$TypeReference_, $DSL$TypeReference } from "@package/com/mojang/datafixers";
export * as client from "@package/umpaz/brewinandchewin/common/mixin/client";

declare module "@package/umpaz/brewinandchewin/common/mixin" {
    export class $LootParamsAccessor {
    }
    export interface $LootParamsAccessor {
        brewinandchewin$getParams(): $Map<$LootContextParam<never>, $Object>;
    }
    /**
     * Values that may be interpreted as {@link $LootParamsAccessor}.
     */
    export type $LootParamsAccessor_ = (() => $Map_<$LootContextParam<never>, $Object>);
    export class $LootContextAccessor {
    }
    export interface $LootContextAccessor {
        brewinandchewin$getParams(): $LootParams;
    }
    /**
     * Values that may be interpreted as {@link $LootContextAccessor}.
     */
    export type $LootContextAccessor_ = (() => $LootParams);
    export class $ServerPlaceRecipeAccessor {
    }
    export interface $ServerPlaceRecipeAccessor {
        brewinandchewin$setStackedContents(arg0: $StackedContents): void;
    }
    /**
     * Values that may be interpreted as {@link $ServerPlaceRecipeAccessor}.
     */
    export type $ServerPlaceRecipeAccessor_ = ((arg0: $StackedContents) => void);
    export class $StackedContentsRecipePickerAccessor {
    }
    export interface $StackedContentsRecipePickerAccessor {
        brewinandchewin$invokeGetUniqueAvailableIngredientItems(): number[];
        brewinandchewin$getIngredientCount(): number;
        brewinandchewin$getIngredients(): $List<$Ingredient>;
        brewinandchewin$setItemCount(arg0: number): void;
        brewinandchewin$getItemCount(): number;
        brewinandchewin$setIngredientCount(arg0: number): void;
        brewinandchewin$invokeGetIndex(arg0: boolean, arg1: number, arg2: number): number;
        brewinandchewin$getData(): $BitSet;
        brewinandchewin$setData(arg0: $BitSet): void;
        brewinandchewin$getItems(): number[];
        brewinandchewin$setItems(arg0: number[]): void;
    }
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        brewinandchewin$invokeUpdateEffectVisibility(): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = (() => void);
    export class $DataFixTypesAccessor {
    }
    export interface $DataFixTypesAccessor {
        brewinandchewin$getType(): $DSL$TypeReference;
    }
    /**
     * Values that may be interpreted as {@link $DataFixTypesAccessor}.
     */
    export type $DataFixTypesAccessor_ = (() => $DSL$TypeReference_);
}
