import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $EquipmentSlotGroup_, $EquipmentSlot_ } from "@package/net/minecraft/world/entity";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $LootContext, $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $MinMaxBounds$Ints_ } from "@package/net/minecraft/advancements/critereon";

declare module "@package/com/almostreliable/lootjs/core/filters" {
    export class $ItemFilter {
        static tag(arg0: string): $ItemFilter;
        static item(arg0: $ItemStack_, arg1: boolean): $ItemFilter;
        static allOf(...arg0: $ItemFilter_[]): $ItemFilter;
        static not(arg0: $ItemFilter_): $ItemFilter;
        static custom(arg0: $Predicate_<$ItemStack>): $ItemFilter;
        static custom(arg0: $Predicate_<$ItemStack>, arg1: string): $ItemFilter;
        static equipmentSlot(arg0: $EquipmentSlot_): $ItemFilter;
        static hasComponent(...arg0: $DataComponentType<never>[]): $ItemFilter;
        static anyToolAction(...arg0: string[]): $ItemFilter;
        static hasEnchantment(arg0: $IdFilter_, arg1: $MinMaxBounds$Ints_): $ItemFilter;
        static hasEnchantment(arg0: $IdFilter_): $ItemFilter;
        static equipmentSlotGroup(arg0: $EquipmentSlotGroup_): $ItemFilter;
        static anyOf(...arg0: $ItemFilter_[]): $ItemFilter;
        static toolAction(...arg0: string[]): $ItemFilter;
        static hasStoredEnchantment(arg0: $IdFilter_, arg1: $MinMaxBounds$Ints_): $ItemFilter;
        static hasStoredEnchantment(arg0: $IdFilter_): $ItemFilter;
        static BLOCK_ITEM: $ItemFilter;
        static ARMOR: $ItemFilter;
        static DAMAGED: $ItemFilter;
        static NONE: $ItemFilter;
        static ANY: $ItemFilter;
        static ENCHANTED: $ItemFilter;
        static EMPTY: $ItemFilter;
        static DAMAGEABLE: $ItemFilter;
        static EDIBLE: $ItemFilter;
    }
    export interface $ItemFilter {
        test(arg0: $ItemStack_): boolean;
        or(arg0: $ItemFilter_): $ItemFilter;
        negate(): $ItemFilter;
        and(arg0: $ItemFilter_): $ItemFilter;
    }
    /**
     * Values that may be interpreted as {@link $ItemFilter}.
     */
    export type $ItemFilter_ = ((arg0: $ItemStack) => boolean);
    export class $LootTableFilter {
    }
    export interface $LootTableFilter {
        test(arg0: $LootTable): boolean;
        test(arg0: $LootContext): boolean;
    }
    export class $IdFilter {
    }
    export interface $IdFilter extends $Predicate<$ResourceLocation> {
    }
    /**
     * Values that may be interpreted as {@link $IdFilter}.
     */
    export type $IdFilter_ = (() => void);
}
