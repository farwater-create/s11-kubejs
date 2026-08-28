import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Predicate_ } from "@package/java/util/function";
import { $Holder_, $Holder$Reference } from "@package/net/minecraft/core";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection } from "@package/java/util";

declare module "@package/com/almostreliable/unified/api/unification" {
    export class $UnificationEntry<T> {
    }
    export interface $UnificationEntry<T> {
        value(): T;
        id(): $ResourceLocation;
        key(): $ResourceKey<T>;
        tag(): $TagKey<T>;
        asHolderOrThrow(): $Holder$Reference<T>;
    }
    export class $UnificationLookup {
    }
    export interface $UnificationLookup {
        isUnifiedIngredientItem(arg0: $Ingredient_, arg1: $ItemStack_): boolean;
        getTags(): $Collection<$TagKey<$Item>>;
        getVariantItemTarget(item: $Item): $UnificationEntry<$Item>;
        getVariantItemTarget(arg0: $ResourceLocation_): $UnificationEntry<$Item>;
        getVariantItemTarget(item: $Holder_<$Item>): $UnificationEntry<$Item>;
        getVariantItemTarget(item: $UnificationEntry<$Item>): $UnificationEntry<$Item>;
        getTagTargetItem(arg0: $TagKey_<$Item>, arg1: $Predicate_<$ResourceLocation>): $UnificationEntry<$Item>;
        getTagTargetItem(tag: $TagKey_<$Item>): $UnificationEntry<$Item>;
        getRelevantItemTag(item: $Item): $TagKey<$Item>;
        getRelevantItemTag(arg0: $ResourceLocation_): $TagKey<$Item>;
        getRelevantItemTag(item: $Holder_<$Item>): $TagKey<$Item>;
        getTagEntries(arg0: $TagKey_<$Item>): $Collection<$UnificationEntry<$Item>>;
        getItemEntry(arg0: $ResourceLocation_): $UnificationEntry<$Item>;
        getItemEntry(item: $Holder_<$Item>): $UnificationEntry<$Item>;
        getItemEntry(item: $Item): $UnificationEntry<$Item>;
        get tags(): $Collection<$TagKey<$Item>>;
    }
}
