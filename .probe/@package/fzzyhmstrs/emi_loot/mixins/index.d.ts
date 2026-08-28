import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item, $Instrument } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Fireworks_, $Fireworks, $FireworkExplosion_, $WrittenBookContent, $FireworkExplosion$Shape, $WrittenBookContent_, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $Filterable } from "@package/net/minecraft/server/network";
import { $BiMap } from "@package/com/google/common/collect";
import { $CopyNameFunction$NameSource, $SetAttributesFunction$Modifier, $SetAttributesFunction$Modifier_, $SetStewEffectFunction$EffectEntry, $SetStewEffectFunction$EffectEntry_, $CopyNameFunction$NameSource_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $List_, $Map } from "@package/java/util";
import { $EnchantmentPredicate_, $ItemPredicate, $EnchantmentPredicate } from "@package/net/minecraft/advancements/critereon";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootTable, $IntRange, $LootPool } from "@package/net/minecraft/world/level/storage/loot";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";

declare module "@package/fzzyhmstrs/emi_loot/mixins" {
    export class $ReferenceLootFunctionAccessor {
    }
    export interface $ReferenceLootFunctionAccessor {
        getName(): $ResourceKey<$LootItemFunction>;
        get name(): $ResourceKey<$LootItemFunction>;
    }
    /**
     * Values that may be interpreted as {@link $ReferenceLootFunctionAccessor}.
     */
    export type $ReferenceLootFunctionAccessor_ = (() => $ResourceKey_<$LootItemFunction>);
    export class $LootPoolEntryAccessor {
    }
    export interface $LootPoolEntryAccessor {
        getConditions(): $List<$LootItemCondition>;
        get conditions(): $List<$LootItemCondition>;
    }
    /**
     * Values that may be interpreted as {@link $LootPoolEntryAccessor}.
     */
    export type $LootPoolEntryAccessor_ = (() => $List_<$LootItemCondition>);
    export class $CombinedEntryAccessor {
    }
    export interface $CombinedEntryAccessor {
        getChildren(): $List<$LootPoolEntryContainer>;
        get children(): $List<$LootPoolEntryContainer>;
    }
    /**
     * Values that may be interpreted as {@link $CombinedEntryAccessor}.
     */
    export type $CombinedEntryAccessor_ = (() => $List_<$LootPoolEntryContainer>);
    export class $SetDamageLootFunctionAccessor {
    }
    export interface $SetDamageLootFunctionAccessor {
        getAdd(): boolean;
        getDurabilityRange(): $NumberProvider;
        get add(): boolean;
        get durabilityRange(): $NumberProvider;
    }
    export class $AlternativeLootConditionAccessor {
    }
    export interface $AlternativeLootConditionAccessor {
        getConditions(): $List<$LootItemCondition>;
        get conditions(): $List<$LootItemCondition>;
    }
    /**
     * Values that may be interpreted as {@link $AlternativeLootConditionAccessor}.
     */
    export type $AlternativeLootConditionAccessor_ = (() => $List_<$LootItemCondition>);
    export class $ExplorationMapLootFunctionAccessor {
    }
    export interface $ExplorationMapLootFunctionAccessor {
        getDestination(): $TagKey<$Structure>;
        getDecoration(): $Holder<$MapDecorationType>;
        get destination(): $TagKey<$Structure>;
        get decoration(): $Holder<$MapDecorationType>;
    }
    export class $SetEnchantmentsLootFunctionAccessor {
    }
    export interface $SetEnchantmentsLootFunctionAccessor {
        getAdd(): boolean;
        getEnchantments(): $Map<$Holder<$Enchantment>, $NumberProvider>;
        get add(): boolean;
        get enchantments(): $Map<$Holder<$Enchantment>, $NumberProvider>;
    }
    export class $SetAttributesLootFunctionAccessor {
    }
    export interface $SetAttributesLootFunctionAccessor {
        getModifiers(): $List<$SetAttributesFunction$Modifier>;
        get modifiers(): $List<$SetAttributesFunction$Modifier>;
    }
    /**
     * Values that may be interpreted as {@link $SetAttributesLootFunctionAccessor}.
     */
    export type $SetAttributesLootFunctionAccessor_ = (() => $List_<$SetAttributesFunction$Modifier_>);
    export class $SetFireworksLootFunctionAccessor {
    }
    export interface $SetFireworksLootFunctionAccessor {
        callApply(arg0: $Fireworks_): $Fireworks;
    }
    /**
     * Values that may be interpreted as {@link $SetFireworksLootFunctionAccessor}.
     */
    export type $SetFireworksLootFunctionAccessor_ = ((arg0: $Fireworks) => $Fireworks_);
    export class $SetFireworkExplosionLootFunctionAccessor {
    }
    export interface $SetFireworkExplosionLootFunctionAccessor {
        getShape(): ($FireworkExplosion$Shape) | undefined;
        getFadeColors(): ($IntList) | undefined;
        getTwinkle(): (boolean) | undefined;
        getColors(): ($IntList) | undefined;
        callApply(arg0: $FireworkExplosion_): $FireworkExplosion;
        getTrail(): (boolean) | undefined;
        get shape(): ($FireworkExplosion$Shape) | undefined;
        get fadeColors(): ($IntList) | undefined;
        get twinkle(): (boolean) | undefined;
        get colors(): ($IntList) | undefined;
        get trail(): (boolean) | undefined;
    }
    export class $ConditionalLootFunctionAccessor {
    }
    export interface $ConditionalLootFunctionAccessor {
        getConditions(): $List<$LootItemCondition>;
        get conditions(): $List<$LootItemCondition>;
    }
    /**
     * Values that may be interpreted as {@link $ConditionalLootFunctionAccessor}.
     */
    export type $ConditionalLootFunctionAccessor_ = (() => $List_<$LootItemCondition>);
    export class $LootContextTypesAccessor {
        static getREGISTRY(): $BiMap<$ResourceLocation, $LootContextParamSet>;
        static get REGISTRY(): $BiMap<$ResourceLocation, $LootContextParamSet>;
    }
    export interface $LootContextTypesAccessor {
    }
    export class $SetPotionLootFunctionAccessor {
    }
    export interface $SetPotionLootFunctionAccessor {
        getPotion(): $Holder<$Potion>;
        get potion(): $Holder<$Potion>;
    }
    /**
     * Values that may be interpreted as {@link $SetPotionLootFunctionAccessor}.
     */
    export type $SetPotionLootFunctionAccessor_ = (() => $Holder_<$Potion>);
    export class $LimitCountLootFunctionAccessor {
    }
    export interface $LimitCountLootFunctionAccessor {
        getLimit(): $IntRange;
        get limit(): $IntRange;
    }
    /**
     * Values that may be interpreted as {@link $LimitCountLootFunctionAccessor}.
     */
    export type $LimitCountLootFunctionAccessor_ = (() => $IntRange);
    export class $LootPoolAccessor {
    }
    export interface $LootPoolAccessor {
        getEntries(): $List<$LootPoolEntryContainer>;
        getConditions(): $List<$LootItemCondition>;
        getRolls(): $NumberProvider;
        getFunctions(): $List<$LootItemFunction>;
        get entries(): $List<$LootPoolEntryContainer>;
        get conditions(): $List<$LootItemCondition>;
        get rolls(): $NumberProvider;
        get functions(): $List<$LootItemFunction>;
    }
    export class $SetLootTableLootFunctionAccessor {
    }
    export interface $SetLootTableLootFunctionAccessor {
        getLootTable(): $ResourceKey<$LootTable>;
        get lootTable(): $ResourceKey<$LootTable>;
    }
    /**
     * Values that may be interpreted as {@link $SetLootTableLootFunctionAccessor}.
     */
    export type $SetLootTableLootFunctionAccessor_ = (() => $ResourceKey_<$LootTable>);
    export class $LootTableEntryAccessor {
    }
    export interface $LootTableEntryAccessor {
        getValue(): $Either<$ResourceKey<$LootTable>, $LootTable>;
        get value(): $Either<$ResourceKey<$LootTable>, $LootTable>;
    }
    /**
     * Values that may be interpreted as {@link $LootTableEntryAccessor}.
     */
    export type $LootTableEntryAccessor_ = (() => $Either<$ResourceKey_<$LootTable>, $LootTable>);
    export class $SetNameLootFunctionAccessor {
    }
    export interface $SetNameLootFunctionAccessor {
        getName(): ($Component) | undefined;
        get name(): ($Component) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $SetNameLootFunctionAccessor}.
     */
    export type $SetNameLootFunctionAccessor_ = (() => ($Component_) | undefined);
    export class $TagEntryAccessor {
    }
    export interface $TagEntryAccessor {
        getName(): $TagKey<$Item>;
        get name(): $TagKey<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $TagEntryAccessor}.
     */
    export type $TagEntryAccessor_ = (() => $TagKey_<$Item>);
    export class $ModifyContentsLootFunctionAccessor {
    }
    export interface $ModifyContentsLootFunctionAccessor {
        getModifier(): $LootItemFunction;
        get modifier(): $LootItemFunction;
    }
    /**
     * Values that may be interpreted as {@link $ModifyContentsLootFunctionAccessor}.
     */
    export type $ModifyContentsLootFunctionAccessor_ = (() => $LootItemFunction);
    export class $SetInstrumentLootFunctionAccessor {
    }
    export interface $SetInstrumentLootFunctionAccessor {
        getInstrumentTag(): $TagKey<$Instrument>;
        get instrumentTag(): $TagKey<$Instrument>;
    }
    /**
     * Values that may be interpreted as {@link $SetInstrumentLootFunctionAccessor}.
     */
    export type $SetInstrumentLootFunctionAccessor_ = (() => $TagKey_<$Instrument>);
    export class $SetCustomDataLootFunctionAccessor {
    }
    export interface $SetCustomDataLootFunctionAccessor {
        getTag(): $CompoundTag;
        get tag(): $CompoundTag;
    }
    /**
     * Values that may be interpreted as {@link $SetCustomDataLootFunctionAccessor}.
     */
    export type $SetCustomDataLootFunctionAccessor_ = (() => $CompoundTag_);
    export class $EnchantmentsPredicateAccessor {
    }
    export interface $EnchantmentsPredicateAccessor {
        getEnchantments(): $List<$EnchantmentPredicate>;
        get enchantments(): $List<$EnchantmentPredicate>;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentsPredicateAccessor}.
     */
    export type $EnchantmentsPredicateAccessor_ = (() => $List_<$EnchantmentPredicate_>);
    export class $CopyNameLootFunctionAccessor {
    }
    export interface $CopyNameLootFunctionAccessor {
        getSource(): $CopyNameFunction$NameSource;
        get source(): $CopyNameFunction$NameSource;
    }
    /**
     * Values that may be interpreted as {@link $CopyNameLootFunctionAccessor}.
     */
    export type $CopyNameLootFunctionAccessor_ = (() => $CopyNameFunction$NameSource_);
    export class $SetOminousBottleAmplifierLootFunctionAccessor {
    }
    export interface $SetOminousBottleAmplifierLootFunctionAccessor {
        getAmplifierGenerator(): $NumberProvider;
        get amplifierGenerator(): $NumberProvider;
    }
    /**
     * Values that may be interpreted as {@link $SetOminousBottleAmplifierLootFunctionAccessor}.
     */
    export type $SetOminousBottleAmplifierLootFunctionAccessor_ = (() => $NumberProvider_);
    export class $FilteredLootFunctionAccessor {
    }
    export interface $FilteredLootFunctionAccessor {
        getFilter(): $ItemPredicate;
        getModifier(): $LootItemFunction;
        get filter(): $ItemPredicate;
        get modifier(): $LootItemFunction;
    }
    export class $LeafEntryAccessor {
    }
    export interface $LeafEntryAccessor {
        getWeight(): number;
        getFunctions(): $List<$LootItemFunction>;
        get weight(): number;
        get functions(): $List<$LootItemFunction>;
    }
    export class $ApplyBonusLootFunctionAccessor {
    }
    export interface $ApplyBonusLootFunctionAccessor {
        getEnchantment(): $Holder<$Enchantment>;
        get enchantment(): $Holder<$Enchantment>;
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusLootFunctionAccessor}.
     */
    export type $ApplyBonusLootFunctionAccessor_ = (() => $Holder_<$Enchantment>);
    export class $ItemEntryAccessor {
    }
    export interface $ItemEntryAccessor {
        getItem(): $Holder<$Item>;
        get item(): $Holder<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $ItemEntryAccessor}.
     */
    export type $ItemEntryAccessor_ = (() => $Holder_<$Item>);
    export class $SetComponentsLootFunctionAccessor {
    }
    export interface $SetComponentsLootFunctionAccessor {
        getComponents(): $DataComponentPatch;
        get components(): $DataComponentPatch;
    }
    /**
     * Values that may be interpreted as {@link $SetComponentsLootFunctionAccessor}.
     */
    export type $SetComponentsLootFunctionAccessor_ = (() => $DataComponentPatch_);
    export class $AndLootFunctionAccessor {
    }
    export interface $AndLootFunctionAccessor {
        getFunctions(): $List<$LootItemFunction>;
        get functions(): $List<$LootItemFunction>;
    }
    /**
     * Values that may be interpreted as {@link $AndLootFunctionAccessor}.
     */
    export type $AndLootFunctionAccessor_ = (() => $List_<$LootItemFunction>);
    export class $SetBookCoverLootFunctionAccessor {
    }
    export interface $SetBookCoverLootFunctionAccessor {
        getGeneration(): (number) | undefined;
        getAuthor(): (string) | undefined;
        getTitle(): ($Filterable<string>) | undefined;
        callApply(arg0: $WrittenBookContent_): $WrittenBookContent;
        get generation(): (number) | undefined;
        get author(): (string) | undefined;
        get title(): ($Filterable<string>) | undefined;
    }
    export class $SetItemLootFunctionAccessor {
    }
    export interface $SetItemLootFunctionAccessor {
        getItem(): $Holder<$Item>;
        get item(): $Holder<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $SetItemLootFunctionAccessor}.
     */
    export type $SetItemLootFunctionAccessor_ = (() => $Holder_<$Item>);
    export class $SetCountLootFunctionAccessor {
    }
    export interface $SetCountLootFunctionAccessor {
        getAdd(): boolean;
        getCountRange(): $NumberProvider;
        get add(): boolean;
        get countRange(): $NumberProvider;
    }
    export class $BoundedIntUnaryOperatorAccessor {
    }
    export interface $BoundedIntUnaryOperatorAccessor {
        getMin(): $NumberProvider;
        getMax(): $NumberProvider;
        get min(): $NumberProvider;
        get max(): $NumberProvider;
    }
    export class $VariantPredicateAccessor<V> {
    }
    export interface $VariantPredicateAccessor<V> {
        getVariant(): V;
        get variant(): V;
    }
    /**
     * Values that may be interpreted as {@link $VariantPredicateAccessor}.
     */
    export type $VariantPredicateAccessor_<V> = (() => V);
    export class $SetStewEffectLootFunctionAccessor {
    }
    export interface $SetStewEffectLootFunctionAccessor {
        getEffects(): $List<$SetStewEffectFunction$EffectEntry>;
        get effects(): $List<$SetStewEffectFunction$EffectEntry>;
    }
    /**
     * Values that may be interpreted as {@link $SetStewEffectLootFunctionAccessor}.
     */
    export type $SetStewEffectLootFunctionAccessor_ = (() => $List_<$SetStewEffectFunction$EffectEntry_>);
    export class $LootTableAccessor {
    }
    export interface $LootTableAccessor {
        getPools(): $List<$LootPool>;
        get pools(): $List<$LootPool>;
    }
    /**
     * Values that may be interpreted as {@link $LootTableAccessor}.
     */
    export type $LootTableAccessor_ = (() => $List_<$LootPool>);
}
