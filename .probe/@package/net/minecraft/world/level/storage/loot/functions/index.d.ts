import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $Tag_, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Attribute, $AttributeModifier$Operation_, $AttributeModifier$Operation } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Set_, $Map, $List, $Map_, $List_, $Set } from "@package/java/util";
import { $Products$P1 } from "@package/com/mojang/datafixers";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $UnaryOperator, $Consumer_, $BiFunction, $Consumer, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderSet_, $HolderLookup$Provider, $Holder, $Holder_ } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $LootItemFunctionExtension } from "@package/com/almostreliable/lootjs/loot/extension";
import { $MapDecorationType } from "@package/net/minecraft/world/level/saveddata/maps";
import { $DataComponentType, $DataComponentMap, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable_, $Record } from "@package/java/lang";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootContextUser, $LootTable, $ContainerComponentManipulator, $ValidationContext, $LootContext, $IntRange, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";
import { $IntList } from "@package/it/unimi/dsi/fastutil/ints";
import { $TagKey_, $TagKey } from "@package/net/minecraft/tags";
import { $SetAttributesLootFunctionAccessor, $LimitCountLootFunctionAccessor, $ApplyBonusLootFunctionAccessor, $SetNameLootFunctionAccessor, $SetComponentsLootFunctionAccessor, $SetFireworkExplosionLootFunctionAccessor, $SetEnchantmentsLootFunctionAccessor, $ReferenceLootFunctionAccessor, $AndLootFunctionAccessor, $SetInstrumentLootFunctionAccessor, $SetCustomDataLootFunctionAccessor, $SetLootTableLootFunctionAccessor, $SetItemLootFunctionAccessor, $SetBookCoverLootFunctionAccessor, $SetDamageLootFunctionAccessor, $SetOminousBottleAmplifierLootFunctionAccessor, $SetStewEffectLootFunctionAccessor, $ExplorationMapLootFunctionAccessor, $ModifyContentsLootFunctionAccessor, $ConditionalLootFunctionAccessor, $FilteredLootFunctionAccessor, $SetCountLootFunctionAccessor, $SetPotionLootFunctionAccessor, $SetFireworksLootFunctionAccessor, $CopyNameLootFunctionAccessor } from "@package/fzzyhmstrs/emi_loot/mixins";
import { $Item, $DyeColor_, $ItemStack_, $ItemStack, $Instrument } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Fireworks_, $Fireworks, $WrittenBookContent_, $WritableBookContent, $WrittenBookContent, $WritableBookContent_, $FireworkExplosion$Shape, $FireworkExplosion_, $FireworkExplosion$Shape_, $FireworkExplosion } from "@package/net/minecraft/world/item/component";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $Filterable, $Filterable_ } from "@package/net/minecraft/server/network";
import { $IExplorationFunctionExtension } from "@package/net/mehvahdjukaar/supplementaries/common/utils";
import { $ItemPredicate, $ItemPredicate_ } from "@package/net/minecraft/advancements/critereon";
import { $NbtProvider } from "@package/net/minecraft/world/level/storage/loot/providers/nbt";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey, $ResourceLocation_, $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $SetComponentsFunctionAccessor } from "@package/com/almostreliable/lootjs/mixin";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $BannerPatternLayers_, $BannerPattern, $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/storage/loot/functions" {
    export class $LootItemFunction$Builder {
    }
    export interface $LootItemFunction$Builder {
        build(): $LootItemFunction;
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunction$Builder}.
     */
    export type $LootItemFunction$Builder_ = (() => $LootItemFunction);
    /**
     * LootItemFunction that modifies the stack's count based on an enchantment level on the tool using various formulas.
     */
    export class $ApplyBonusCount extends $LootItemConditionalFunction implements $ApplyBonusLootFunctionAccessor {
        static addBonusBinomialDistributionCount(enchantment: $Holder_<$Enchantment>, probability: number, extraRounds: number): $LootItemConditionalFunction$Builder<never>;
        static addOreBonusCount(enchantment: $Holder_<$Enchantment>): $LootItemConditionalFunction$Builder<never>;
        static addUniformBonusCount(enchantment: $Holder_<$Enchantment>, bonusMultiplier: number): $LootItemConditionalFunction$Builder<never>;
        static addUniformBonusCount(enchantment: $Holder_<$Enchantment>): $LootItemConditionalFunction$Builder<never>;
        getEnchantment(): $Holder<$Enchantment>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ApplyBonusCount>;
        get enchantment(): $Holder<$Enchantment>;
    }
    export class $SetPotionFunction extends $LootItemConditionalFunction implements $SetPotionLootFunctionAccessor {
        static setPotion(potion: $Holder_<$Potion>): $LootItemConditionalFunction$Builder<never>;
        getPotion(): $Holder<$Potion>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetPotionFunction>;
    }
    export class $EnchantWithLevelsFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantWithLevelsFunction$Builder> {
        getThis(): $EnchantWithLevelsFunction$Builder;
        fromOptions(options: $HolderSet_<$Enchantment>): $EnchantWithLevelsFunction$Builder;
        constructor(levels: $NumberProvider_);
        get this(): $EnchantWithLevelsFunction$Builder;
    }
    /**
     * A LootItemFunction that limits the stack's count to fall within a given `IntRange`.
     */
    export class $LimitCount extends $LootItemConditionalFunction implements $LimitCountLootFunctionAccessor {
        static limitCount(countLimit: $IntRange): $LootItemConditionalFunction$Builder<never>;
        getLimit(): $IntRange;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$LimitCount>;
        get limit(): $IntRange;
    }
    export class $CopyCustomDataFunction extends $LootItemConditionalFunction {
        static copyData(target: $LootContext$EntityTarget_): $CopyCustomDataFunction$Builder;
        /**
         * @deprecated
         */
        static copyData(source: $NbtProvider): $CopyCustomDataFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyCustomDataFunction>;
        constructor(conditions: $List_<$LootItemCondition>, source: $NbtProvider, operations: $List_<$CopyCustomDataFunction$CopyOperation_>);
    }
    export class $SetStewEffectFunction$Builder extends $LootItemConditionalFunction$Builder<$SetStewEffectFunction$Builder> {
        getThis(): $SetStewEffectFunction$Builder;
        withEffect(effect: $Holder_<$MobEffect>, amplifier: $NumberProvider_): $SetStewEffectFunction$Builder;
        constructor();
        get this(): $SetStewEffectFunction$Builder;
    }
    /**
     * LootItemFunction that adds a list of attribute modifiers to the stacks.
     */
    export class $SetAttributesFunction extends $LootItemConditionalFunction implements $SetAttributesLootFunctionAccessor {
        static modifier(id: $ResourceLocation_, attribute: $Holder_<$Attribute>, operation: $AttributeModifier$Operation_, amount: $NumberProvider_): $SetAttributesFunction$ModifierBuilder;
        static setAttributes(): $SetAttributesFunction$Builder;
        getModifiers(): $List<$SetAttributesFunction$Modifier>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetAttributesFunction>;
        constructor(conditions: $List_<$LootItemCondition>, modifiers: $List_<$SetAttributesFunction$Modifier_>, replace: boolean);
        get modifiers(): $List<$SetAttributesFunction$Modifier>;
    }
    /**
     * A LootItemFunction modifies an ItemStack based on the current LootContext.
     * 
     * @see LootItemFunctions
     */
    export class $LootItemFunction {
        /**
         * Create a decorated Consumer. The resulting consumer will first apply `stackModification` to all stacks before passing them on to `originalConsumer`.
         */
        static decorate(stackModification: $BiFunction_<$ItemStack, $LootContext, $ItemStack>, originalConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): $Consumer<$ItemStack>;
    }
    export interface $LootItemFunction extends $LootContextUser, $BiFunction<$ItemStack, $LootContext, $ItemStack>, $LootItemFunctionExtension {
        getType(): $LootItemFunctionType<$LootItemFunction>;
        lootjs$when(arg0: $Consumer_<any>): $LootItemFunction;
        get type(): $LootItemFunctionType<$LootItemFunction>;
    }
    export class $ApplyBonusCount$FormulaType extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$FormulaType}.
     */
    export type $ApplyBonusCount$FormulaType_ = { id?: $ResourceLocation_, codec?: $Codec<$ApplyBonusCount$Formula>,  } | [id?: $ResourceLocation_, codec?: $Codec<$ApplyBonusCount$Formula>, ];
    export class $SetOminousBottleAmplifierFunction extends $LootItemConditionalFunction implements $SetOminousBottleAmplifierLootFunctionAccessor {
        amplifier(): $NumberProvider;
        static setAmplifier(amplifier: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        getAmplifierGenerator(): $NumberProvider;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetOminousBottleAmplifierFunction>;
        get amplifierGenerator(): $NumberProvider;
    }
    /**
     * LootItemFunction that sets the LootTable and optionally the loot table seed on the stack's `BlockEntityTag`. The effect of this is that containers such as chests will receive the given LootTable when placed.
     */
    export class $SetContainerLootTable extends $LootItemConditionalFunction implements $SetLootTableLootFunctionAccessor {
        static withLootTable(type: $BlockEntityType<never>, toolTable: $ResourceKey_<$LootTable>): $LootItemConditionalFunction$Builder<never>;
        static withLootTable(type: $BlockEntityType<never>, lootTable: $ResourceKey_<$LootTable>, seed: number): $LootItemConditionalFunction$Builder<never>;
        getLootTable(): $ResourceKey<$LootTable>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetContainerLootTable>;
        get lootTable(): $ResourceKey<$LootTable>;
    }
    export class $SequenceFunction implements $LootItemFunction, $AndLootFunctionAccessor {
        apply(stack: $ItemStack_, context: $LootContext): $ItemStack;
        static of(functions: $List_<$LootItemFunction>): $SequenceFunction;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        getType(): $LootItemFunctionType<$SequenceFunction>;
        lootjs$when(arg0: $Consumer_<any>): $LootItemFunction;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        getFunctions(): $List<$LootItemFunction>;
        static INLINE_CODEC: $Codec<$SequenceFunction>;
        static CODEC: $MapCodec<$SequenceFunction>;
        get type(): $LootItemFunctionType<$SequenceFunction>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get functions(): $List<$LootItemFunction>;
    }
    export class $ListOperation$ReplaceAll implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$ReplaceAll>;
        static INSTANCE: $ListOperation$ReplaceAll;
    }
    /**
     * LootItemFunction that sets the stack's count based on a `NumberProvider`, optionally adding to any existing count.
     */
    export class $SetItemCountFunction extends $LootItemConditionalFunction implements $SetCountLootFunctionAccessor {
        static setCount(countValue: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        static setCount(countValue: $NumberProvider_, add: boolean): $LootItemConditionalFunction$Builder<never>;
        getAdd(): boolean;
        getCountRange(): $NumberProvider;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetItemCountFunction>;
        get add(): boolean;
        get countRange(): $NumberProvider;
    }
    /**
     * Registry for `LootItemFunction`
     */
    export class $LootItemFunctions {
        static compose(functions: $List_<$BiFunction_<$ItemStack, $LootContext, $ItemStack>>): $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static SET_WRITTEN_BOOK_PAGES: $LootItemFunctionType<$SetWrittenBookPagesFunction>;
        static ENCHANTED_COUNT_INCREASE: $LootItemFunctionType<$EnchantedCountIncreaseFunction>;
        static COPY_NAME: $LootItemFunctionType<$CopyNameFunction>;
        static SET_LOOT_TABLE: $LootItemFunctionType<$SetContainerLootTable>;
        static EXPLOSION_DECAY: $LootItemFunctionType<$ApplyExplosionDecay>;
        static ROOT_CODEC: $Codec<$LootItemFunction>;
        static SET_CUSTOM_DATA: $LootItemFunctionType<$SetCustomDataFunction>;
        static FURNACE_SMELT: $LootItemFunctionType<$SmeltItemFunction>;
        static SET_ATTRIBUTES: $LootItemFunctionType<$SetAttributesFunction>;
        static MODIFY_CONTENTS: $LootItemFunctionType<$ModifyContainerContents>;
        static COPY_COMPONENTS: $LootItemFunctionType<$CopyComponentsFunction>;
        static SET_BOOK_COVER: $LootItemFunctionType<$SetBookCoverFunction>;
        static SET_COMPONENTS: $LootItemFunctionType<$SetComponentsFunction>;
        static ENCHANT_WITH_LEVELS: $LootItemFunctionType<$EnchantWithLevelsFunction>;
        static SET_FIREWORK_EXPLOSION: $LootItemFunctionType<$SetFireworkExplosionFunction>;
        static LIMIT_COUNT: $LootItemFunctionType<$LimitCount>;
        static SET_LORE: $LootItemFunctionType<$SetLoreFunction>;
        static SEQUENCE: $LootItemFunctionType<$SequenceFunction>;
        static REFERENCE: $LootItemFunctionType<$FunctionReference>;
        static SET_DAMAGE: $LootItemFunctionType<$SetItemDamageFunction>;
        static EXPLORATION_MAP: $LootItemFunctionType<$ExplorationMapFunction>;
        static SET_CUSTOM_MODEL_DATA: $LootItemFunctionType<$SetCustomModelDataFunction>;
        static SET_ENCHANTMENTS: $LootItemFunctionType<$SetEnchantmentsFunction>;
        static APPLY_BONUS: $LootItemFunctionType<$ApplyBonusCount>;
        static CODEC: $Codec<$Holder<$LootItemFunction>>;
        static FILL_PLAYER_HEAD: $LootItemFunctionType<$FillPlayerHead>;
        static SET_CONTENTS: $LootItemFunctionType<$SetContainerContents>;
        static SET_WRITABLE_BOOK_PAGES: $LootItemFunctionType<$SetWritableBookPagesFunction>;
        static SET_POTION: $LootItemFunctionType<$SetPotionFunction>;
        static COPY_CUSTOM_DATA: $LootItemFunctionType<$CopyCustomDataFunction>;
        static SET_COUNT: $LootItemFunctionType<$SetItemCountFunction>;
        static SET_NAME: $LootItemFunctionType<$SetNameFunction>;
        static TOGGLE_TOOLTIPS: $LootItemFunctionType<$ToggleTooltips>;
        static SET_FIREWORKS: $LootItemFunctionType<$SetFireworksFunction>;
        static IDENTITY: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        static SET_BANNER_PATTERN: $LootItemFunctionType<$SetBannerPatternFunction>;
        static SET_ITEM: $LootItemFunctionType<$SetItemFunction>;
        static COPY_STATE: $LootItemFunctionType<$CopyBlockState>;
        static SET_STEW_EFFECT: $LootItemFunctionType<$SetStewEffectFunction>;
        static SET_OMINOUS_BOTTLE_AMPLIFIER: $LootItemFunctionType<$SetOminousBottleAmplifierFunction>;
        static ENCHANT_RANDOMLY: $LootItemFunctionType<$EnchantRandomlyFunction>;
        static SET_INSTRUMENT: $LootItemFunctionType<$SetInstrumentFunction>;
        static TYPED_CODEC: $Codec<$LootItemFunction>;
        static FILTERED: $LootItemFunctionType<$FilteredFunction>;
        constructor();
    }
    export class $LootItemConditionalFunction$Builder<T extends $LootItemConditionalFunction$Builder<T>> implements $LootItemFunction$Builder, $ConditionUserBuilder<T> {
        unwrap(): T;
        when(arg0: $LootItemCondition$Builder_): T;
        getConditions(): $List<$LootItemCondition>;
        getThis(): T;
        when<E>(arg0: $Iterable_<E>, arg1: $Function_<E, $LootItemCondition$Builder>): T;
        constructor();
        get conditions(): $List<$LootItemCondition>;
        get this(): T;
    }
    export class $SetCustomDataFunction extends $LootItemConditionalFunction implements $SetCustomDataLootFunctionAccessor {
        /**
         * @deprecated
         */
        static setCustomData(tag: $CompoundTag_): $LootItemConditionalFunction$Builder<never>;
        getTag(): $CompoundTag;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetCustomDataFunction>;
        static set customData(value: $CompoundTag_);
        get tag(): $CompoundTag;
    }
    /**
     * LootItemFunction that sets a stack's lore tag, optionally replacing any previously present lore.
     * The Components for the lore tag are optionally resolved relative to a given `EntityTarget` for entity-sensitive component data such as scoreboard scores.
     */
    export class $SetLoreFunction extends $LootItemConditionalFunction {
        static setLore(): $SetLoreFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetLoreFunction>;
        constructor(conditions: $List_<$LootItemCondition>, lore: $List_<$Component_>, mode: $ListOperation, resolutionContext: ($LootContext$EntityTarget_) | undefined);
    }
    export class $SetFireworkExplosionFunction extends $LootItemConditionalFunction implements $SetFireworkExplosionLootFunctionAccessor {
        getShape(): ($FireworkExplosion$Shape) | undefined;
        getFadeColors(): ($IntList) | undefined;
        getTwinkle(): (boolean) | undefined;
        getColors(): ($IntList) | undefined;
        callApply(fireworkExplosion: $FireworkExplosion_): $FireworkExplosion;
        getTrail(): (boolean) | undefined;
        static DEFAULT_VALUE: $FireworkExplosion;
        trail: (boolean) | undefined;
        twinkle: (boolean) | undefined;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetFireworkExplosionFunction>;
        fadeColors: ($IntList) | undefined;
        shape: ($FireworkExplosion$Shape) | undefined;
        colors: ($IntList) | undefined;
        constructor(conditions: $List_<$LootItemCondition>, shape: ($FireworkExplosion$Shape_) | undefined, colors: ($IntList) | undefined, fadeColors: ($IntList) | undefined, trail: (boolean) | undefined, twinkle: (boolean) | undefined);
    }
    export class $SetFireworksFunction extends $LootItemConditionalFunction implements $SetFireworksLootFunctionAccessor {
        callApply(fireworks: $Fireworks_): $Fireworks;
        static DEFAULT_VALUE: $Fireworks;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetFireworksFunction>;
        constructor(conditions: $List_<$LootItemCondition>, explosions: ($ListOperation$StandAlone_<$FireworkExplosion_>) | undefined, flightDuration: (number) | undefined);
    }
    export class $CopyBlockState$Builder extends $LootItemConditionalFunction$Builder<$CopyBlockState$Builder> {
        copy(property: $Property<never>): $CopyBlockState$Builder;
        getThis(): $CopyBlockState$Builder;
        constructor(block: $Block);
        get this(): $CopyBlockState$Builder;
    }
    export class $CopyCustomDataFunction$Builder extends $LootItemConditionalFunction$Builder<$CopyCustomDataFunction$Builder> {
        copy(sourceKey: string, destinationKey: string): $CopyCustomDataFunction$Builder;
        copy(sourceKey: string, destinationKey: string, mergeStrategy: $CopyCustomDataFunction$MergeStrategy_): $CopyCustomDataFunction$Builder;
        getThis(): $CopyCustomDataFunction$Builder;
        constructor(source: $NbtProvider);
        get this(): $CopyCustomDataFunction$Builder;
    }
    export class $EnchantedCountIncreaseFunction extends $LootItemConditionalFunction {
        static lootingMultiplier(registries: $HolderLookup$Provider, count: $NumberProvider_): $EnchantedCountIncreaseFunction$Builder;
        handler$ega000$puzzleslib$run(stack: $ItemStack_, context: $LootContext, callback: $CallbackInfoReturnable<any>): void;
        localvar$ega000$puzzleslib$run(enchantmentLevel: number, itemStack: $ItemStack_, lootContext: $LootContext): number;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$EnchantedCountIncreaseFunction>;
        static NO_LIMIT: number;
        constructor(conditions: $List_<$LootItemCondition>, enchantment: $Holder_<$Enchantment>, value: $NumberProvider_, limit: number);
    }
    export class $ListOperation {
        static codec(maxSize: number): $MapCodec<$ListOperation>;
        static UNLIMITED_CODEC: $MapCodec<$ListOperation>;
    }
    export interface $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(currentValue: $List_<T>, operand: $List_<T>, maxSize: number): $List<T>;
        apply<T>(currentValue: $List_<T>, operand: $List_<T>): $List<T>;
    }
    export class $SetNameFunction$Target extends $Enum<$SetNameFunction$Target> implements $StringRepresentable {
        static values(): $SetNameFunction$Target[];
        static valueOf(arg0: string): $SetNameFunction$Target;
        component(): $DataComponentType<$Component>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SetNameFunction$Target>;
        static CUSTOM_NAME: $SetNameFunction$Target;
        static ITEM_NAME: $SetNameFunction$Target;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SetNameFunction$Target}.
     */
    export type $SetNameFunction$Target_ = "custom_name" | "item_name";
    /**
     * Adds a bonus count based on the enchantment level scaled by a constant multiplier.
     */
    export class $ApplyBonusCount$UniformBonusCount extends $Record implements $ApplyBonusCount$Formula {
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$UniformBonusCount}.
     */
    export type $ApplyBonusCount$UniformBonusCount_ = { bonusMultiplier?: number,  } | [bonusMultiplier?: number, ];
    export class $LootItemConditionalFunction$DummyBuilder extends $LootItemConditionalFunction$Builder<$LootItemConditionalFunction$DummyBuilder> {
    }
    export class $SetAttributesFunction$Builder extends $LootItemConditionalFunction$Builder<$SetAttributesFunction$Builder> {
        getThis(): $SetAttributesFunction$Builder;
        withModifier(modifierBuilder: $SetAttributesFunction$ModifierBuilder): $SetAttributesFunction$Builder;
        constructor(replace: boolean);
        constructor();
        get this(): $SetAttributesFunction$Builder;
    }
    export class $EnchantedCountIncreaseFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantedCountIncreaseFunction$Builder> {
        setLimit(limit: number): $EnchantedCountIncreaseFunction$Builder;
        getThis(): $EnchantedCountIncreaseFunction$Builder;
        constructor(enchantment: $Holder_<$Enchantment>, count: $NumberProvider_);
        set limit(value: number);
        get this(): $EnchantedCountIncreaseFunction$Builder;
    }
    export class $CopyComponentsFunction$Builder extends $LootItemConditionalFunction$Builder<$CopyComponentsFunction$Builder> {
        include(exclude: $DataComponentType<never>): $CopyComponentsFunction$Builder;
        getThis(): $CopyComponentsFunction$Builder;
        exclude(exclude: $DataComponentType<never>): $CopyComponentsFunction$Builder;
        constructor(source: $CopyComponentsFunction$Source_);
        get this(): $CopyComponentsFunction$Builder;
    }
    /**
     * LootItemFunction that sets a stack's name.
     * The Component for the name is optionally resolved relative to a given `EntityTarget` for entity-sensitive component data such as scoreboard scores.
     */
    export class $SetNameFunction extends $LootItemConditionalFunction implements $SetNameLootFunctionAccessor {
        static setName(name: $Component_, target: $SetNameFunction$Target_, resolutionContext: $LootContext$EntityTarget_): $LootItemConditionalFunction$Builder<never>;
        static setName(name: $Component_, target: $SetNameFunction$Target_): $LootItemConditionalFunction$Builder<never>;
        /**
         * Create a UnaryOperator that resolves Components based on the given LootContext and EntityTarget.
         * This will replace for example score components.
         */
        static createResolver(lootContext: $LootContext, resolutionContext: $LootContext$EntityTarget_ | null): $UnaryOperator<$Component>;
        getName(): ($Component) | undefined;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetNameFunction>;
    }
    export class $SetContainerContents$Builder extends $LootItemConditionalFunction$Builder<$SetContainerContents$Builder> {
        getThis(): $SetContainerContents$Builder;
        withEntry(lootEntryBuilder: $LootPoolEntryContainer$Builder<never>): $SetContainerContents$Builder;
        constructor(component: $ContainerComponentManipulator<never>);
        get this(): $SetContainerContents$Builder;
    }
    export class $CopyCustomDataFunction$MergeStrategy extends $Enum<$CopyCustomDataFunction$MergeStrategy> implements $StringRepresentable {
        static values(): $CopyCustomDataFunction$MergeStrategy[];
        static valueOf(arg0: string): $CopyCustomDataFunction$MergeStrategy;
        merge(tag: $Tag_, path: $NbtPathArgument$NbtPath, currentData: $List_<$Tag_>): void;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyCustomDataFunction$MergeStrategy>;
        static MERGE: $CopyCustomDataFunction$MergeStrategy;
        static REPLACE: $CopyCustomDataFunction$MergeStrategy;
        static APPEND: $CopyCustomDataFunction$MergeStrategy;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyCustomDataFunction$MergeStrategy}.
     */
    export type $CopyCustomDataFunction$MergeStrategy_ = "replace" | "append" | "merge";
    /**
     * LootItemFunction that tries to smelt any items using `SMELTING`.
     */
    export class $SmeltItemFunction extends $LootItemConditionalFunction {
        static smelted(): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SmeltItemFunction>;
    }
    export class $FilteredFunction extends $LootItemConditionalFunction implements $FilteredLootFunctionAccessor {
        getFilter(): $ItemPredicate;
        getModifier(): $LootItemFunction;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$FilteredFunction>;
        constructor(conditions: $List_<$LootItemCondition>, filter: $ItemPredicate_, modifier: $LootItemFunction);
        get filter(): $ItemPredicate;
        get modifier(): $LootItemFunction;
    }
    export class $ExplorationMapFunction$Builder extends $LootItemConditionalFunction$Builder<$ExplorationMapFunction$Builder> {
        setZoom(zoom: number): $ExplorationMapFunction$Builder;
        getThis(): $ExplorationMapFunction$Builder;
        setDestination(destination: $TagKey_<$Structure>): $ExplorationMapFunction$Builder;
        setSkipKnownStructures(skipKnownStructures: boolean): $ExplorationMapFunction$Builder;
        setSearchRadius(searchRadius: number): $ExplorationMapFunction$Builder;
        setMapDecoration(mapDecoration: $Holder_<$MapDecorationType>): $ExplorationMapFunction$Builder;
        constructor();
        set zoom(value: number);
        get this(): $ExplorationMapFunction$Builder;
        set destination(value: $TagKey_<$Structure>);
        set skipKnownStructures(value: boolean);
        set searchRadius(value: number);
        set mapDecoration(value: $Holder_<$MapDecorationType>);
    }
    /**
     * LootItemFunction that adds an effect to any suspicious stew items. A random effect is chosen from the given map every time.
     */
    export class $SetStewEffectFunction extends $LootItemConditionalFunction implements $SetStewEffectLootFunctionAccessor {
        static stewEffect(): $SetStewEffectFunction$Builder;
        getEffects(): $List<$SetStewEffectFunction$EffectEntry>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetStewEffectFunction>;
        constructor(conditions: $List_<$LootItemCondition>, effects: $List_<$SetStewEffectFunction$EffectEntry_>);
        get effects(): $List<$SetStewEffectFunction$EffectEntry>;
    }
    export class $ListOperation$ReplaceSection extends $Record implements $ListOperation {
        size(): (number) | undefined;
        mode(): $ListOperation$Type;
        apply<T>(currentValue: $List_<T>, operand: $List_<T>, maxSize: number): $List<T>;
        offset(): number;
        apply<T>(currentValue: $List_<T>, operand: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$ReplaceSection>;
        constructor(offset: number);
        constructor(arg0: number, arg1: (number) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$ReplaceSection}.
     */
    export type $ListOperation$ReplaceSection_ = { offset?: number, size?: (number) | undefined,  } | [offset?: number, size?: (number) | undefined, ];
    export class $CopyNameFunction$NameSource extends $Enum<$CopyNameFunction$NameSource> implements $StringRepresentable {
        static values(): $CopyNameFunction$NameSource[];
        static valueOf(arg0: string): $CopyNameFunction$NameSource;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyNameFunction$NameSource>;
        static LAST_DAMAGE_PLAYER: $CopyNameFunction$NameSource;
        param: $LootContextParam<never>;
        static BLOCK_ENTITY: $CopyNameFunction$NameSource;
        static THIS: $CopyNameFunction$NameSource;
        static ATTACKING_ENTITY: $CopyNameFunction$NameSource;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyNameFunction$NameSource}.
     */
    export type $CopyNameFunction$NameSource_ = "this" | "attacking_entity" | "last_damage_player" | "block_entity" | string;
    export class $SetAttributesFunction$Modifier extends $Record {
        id(): $ResourceLocation;
        slots(): $List<$EquipmentSlotGroup>;
        attribute(): $Holder<$Attribute>;
        amount(): $NumberProvider;
        operation(): $AttributeModifier$Operation;
        static CODEC: $Codec<$SetAttributesFunction$Modifier>;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $AttributeModifier$Operation_, arg3: $NumberProvider_, arg4: $List_<$EquipmentSlotGroup_>);
    }
    /**
     * Values that may be interpreted as {@link $SetAttributesFunction$Modifier}.
     */
    export type $SetAttributesFunction$Modifier_ = { id?: $ResourceLocation_, attribute?: $Holder_<$Attribute>, operation?: $AttributeModifier$Operation_, amount?: $NumberProvider_, slots?: $List_<$EquipmentSlotGroup_>,  } | [id?: $ResourceLocation_, attribute?: $Holder_<$Attribute>, operation?: $AttributeModifier$Operation_, amount?: $NumberProvider_, slots?: $List_<$EquipmentSlotGroup_>, ];
    /**
     * LootItemFunction that copies a set of block state properties to the `"BlockStateTag"` NBT tag of the ItemStack.
     * This tag is checked when the block is placed.
     */
    export class $CopyBlockState extends $LootItemConditionalFunction {
        static copyState(block: $Block): $CopyBlockState$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyBlockState>;
        constructor(conditions: $List_<$LootItemCondition>, block: $Holder_<$Block>, properties: $Set_<$Property<never>>);
    }
    export class $SetInstrumentFunction extends $LootItemConditionalFunction implements $SetInstrumentLootFunctionAccessor {
        static setInstrumentOptions(instrumentOptions: $TagKey_<$Instrument>): $LootItemConditionalFunction$Builder<never>;
        getInstrumentTag(): $TagKey<$Instrument>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetInstrumentFunction>;
        static set instrumentOptions(value: $TagKey_<$Instrument>);
        get instrumentTag(): $TagKey<$Instrument>;
    }
    export class $ListOperation$Insert extends $Record implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(currentValue: $List_<T>, operand: $List_<T>, maxSize: number): $List<T>;
        offset(): number;
        apply<T>(currentValue: $List_<T>, operand: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$Insert>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$Insert}.
     */
    export type $ListOperation$Insert_ = { offset?: number,  } | [offset?: number, ];
    /**
     * Applies a bonus based on a binomial distribution with `n = enchantmentLevel + extraRounds` and `p = probability`.
     */
    export class $ApplyBonusCount$BinomialWithBonusCount extends $Record implements $ApplyBonusCount$Formula {
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$BinomialWithBonusCount}.
     */
    export type $ApplyBonusCount$BinomialWithBonusCount_ = { probability?: number, extraRounds?: number,  } | [probability?: number, extraRounds?: number, ];
    /**
     * LootItemFunction that applies a random enchantment to the stack. If an empty list is given, chooses from all enchantments.
     */
    export class $EnchantRandomlyFunction extends $LootItemConditionalFunction {
        static randomEnchantment(): $EnchantRandomlyFunction$Builder;
        static randomApplicableEnchantment(registries: $HolderLookup$Provider): $EnchantRandomlyFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$EnchantRandomlyFunction>;
        constructor(conditons: $List_<$LootItemCondition>, options: ($HolderSet_<$Enchantment>) | undefined, onlyCompatible: boolean);
    }
    export class $ModifyContainerContents extends $LootItemConditionalFunction implements $ModifyContentsLootFunctionAccessor {
        getModifier(): $LootItemFunction;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ModifyContainerContents>;
        constructor(conditions: $List_<$LootItemCondition>, components: $ContainerComponentManipulator<never>, modifier: $LootItemFunction);
        get modifier(): $LootItemFunction;
    }
    export class $SetComponentsFunction extends $LootItemConditionalFunction implements $SetComponentsLootFunctionAccessor, $SetComponentsFunctionAccessor {
        static setComponent<T>(component: $DataComponentType<T>, value: T): $LootItemConditionalFunction$Builder<never>;
        static create$lootjs_$md$707fe4$0(arg0: $List_<any>, arg1: $DataComponentPatch_): $SetComponentsFunction;
        getComponents(): $DataComponentPatch;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetComponentsFunction>;
        constructor(condition: $List_<$LootItemCondition>, components: $DataComponentPatch_);
        get components(): $DataComponentPatch;
    }
    export class $ListOperation$Type extends $Enum<$ListOperation$Type> implements $StringRepresentable {
        static values(): $ListOperation$Type[];
        static valueOf(arg0: string): $ListOperation$Type;
        getSerializedName(): string;
        mapCodec(): $MapCodec<$ListOperation>;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$ListOperation$Type>;
        static INSERT: $ListOperation$Type;
        static REPLACE_ALL: $ListOperation$Type;
        static APPEND: $ListOperation$Type;
        static REPLACE_SECTION: $ListOperation$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$Type}.
     */
    export type $ListOperation$Type_ = "replace_all" | "replace_section" | "insert" | "append";
    export class $SetBookCoverFunction extends $LootItemConditionalFunction implements $SetBookCoverLootFunctionAccessor {
        getGeneration(): (number) | undefined;
        getAuthor(): (string) | undefined;
        getTitle(): ($Filterable<string>) | undefined;
        callApply(writtenBookContent: $WrittenBookContent_): $WrittenBookContent;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetBookCoverFunction>;
        constructor(conditons: $List_<$LootItemCondition>, title: ($Filterable_<string>) | undefined, author: (string) | undefined, generation: (number) | undefined);
        get generation(): (number) | undefined;
        get author(): (string) | undefined;
        get title(): ($Filterable<string>) | undefined;
    }
    export class $SetBannerPatternFunction$Builder extends $LootItemConditionalFunction$Builder<$SetBannerPatternFunction$Builder> {
        getThis(): $SetBannerPatternFunction$Builder;
        addPattern(pattern: $Holder_<$BannerPattern>, color: $DyeColor_): $SetBannerPatternFunction$Builder;
        constructor(append: boolean);
        get this(): $SetBannerPatternFunction$Builder;
    }
    export class $ApplyBonusCount$Formula {
    }
    export interface $ApplyBonusCount$Formula {
    }
    export class $SetWrittenBookPagesFunction extends $LootItemConditionalFunction {
        apply(writtenBookContent: $WrittenBookContent_): $WrittenBookContent;
        static PAGE_CODEC: $Codec<$Component>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetWrittenBookPagesFunction>;
        constructor(conditions: $List_<$LootItemCondition>, pages: $List_<$Filterable_<$Component_>>, pageOperation: $ListOperation);
    }
    export class $ListOperation$Append implements $ListOperation {
        mode(): $ListOperation$Type;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>, arg2: number): $List<T>;
        apply<T>(arg0: $List_<T>, arg1: $List_<T>): $List<T>;
        static MAP_CODEC: $MapCodec<$ListOperation$Append>;
        static INSTANCE: $ListOperation$Append;
    }
    export class $EnchantRandomlyFunction$Builder extends $LootItemConditionalFunction$Builder<$EnchantRandomlyFunction$Builder> {
        getThis(): $EnchantRandomlyFunction$Builder;
        withOneOf(enchantments: $HolderSet_<$Enchantment>): $EnchantRandomlyFunction$Builder;
        allowingIncompatibleEnchantments(): $EnchantRandomlyFunction$Builder;
        withEnchantment(enchantment: $Holder_<$Enchantment>): $EnchantRandomlyFunction$Builder;
        constructor();
        get this(): $EnchantRandomlyFunction$Builder;
    }
    /**
     * The SerializerType for `LootItemFunction`.
     */
    export class $LootItemFunctionType<T extends $LootItemFunction> extends $Record {
        codec(): $MapCodec<T>;
        constructor(arg0: $MapCodec<T>);
    }
    /**
     * Values that may be interpreted as {@link $LootItemFunctionType}.
     */
    export type $LootItemFunctionType_<T> = { codec?: $MapCodec<$LootItemFunction>,  } | [codec?: $MapCodec<$LootItemFunction>, ];
    export class $ToggleTooltips extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ToggleTooltips>;
        static TOGGLES: $Map<$DataComponentType<never>, $ToggleTooltips$ComponentToggle<never>>;
        constructor(conditions: $List_<$LootItemCondition>, values: $Map_<$ToggleTooltips$ComponentToggle_<never>, boolean>);
    }
    /**
     * LootItemFunction that sets a stack's enchantments. If `add` is set, will add to any already existing enchantment levels instead of replacing them (ignored for enchanted books).
     */
    export class $SetEnchantmentsFunction extends $LootItemConditionalFunction implements $SetEnchantmentsLootFunctionAccessor {
        getAdd(): boolean;
        getEnchantments(): $Map<$Holder<$Enchantment>, $NumberProvider>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetEnchantmentsFunction>;
        constructor(conditions: $List_<$LootItemCondition>, enchantments: $Map_<$Holder_<$Enchantment>, $NumberProvider_>, add: boolean);
        get add(): boolean;
        get enchantments(): $Map<$Holder<$Enchantment>, $NumberProvider>;
    }
    export class $SetEnchantmentsFunction$Builder extends $LootItemConditionalFunction$Builder<$SetEnchantmentsFunction$Builder> {
        getThis(): $SetEnchantmentsFunction$Builder;
        withEnchantment(enchantment: $Holder_<$Enchantment>, level: $NumberProvider_): $SetEnchantmentsFunction$Builder;
        constructor();
        constructor(add: boolean);
        get this(): $SetEnchantmentsFunction$Builder;
    }
    /**
     * Applies a bonus count with a special formula used for fortune ore drops.
     */
    export class $ApplyBonusCount$OreDrops extends $Record implements $ApplyBonusCount$Formula {
    }
    /**
     * Values that may be interpreted as {@link $ApplyBonusCount$OreDrops}.
     */
    export type $ApplyBonusCount$OreDrops_ = {  } | [];
    export class $ToggleTooltips$ComponentToggle<T> extends $Record {
        type(): $DataComponentType<T>;
        setter(): $ToggleTooltips$TooltipWither<T>;
        applyIfPresent(stack: $ItemStack_, showTooltip: boolean): void;
        constructor(arg0: $DataComponentType<T>, arg1: $ToggleTooltips$TooltipWither_<T>);
    }
    /**
     * Values that may be interpreted as {@link $ToggleTooltips$ComponentToggle}.
     */
    export type $ToggleTooltips$ComponentToggle_<T> = { setter?: $ToggleTooltips$TooltipWither_<any>, type?: $DataComponentType<any>,  } | [setter?: $ToggleTooltips$TooltipWither_<any>, type?: $DataComponentType<any>, ];
    /**
     * A LootItemFunction that only modifies the stacks if a list of predicates passes.
     */
    export class $LootItemConditionalFunction implements $LootItemFunction, $ConditionalLootFunctionAccessor, $LootItemFunctionExtension {
        run(stack: $ItemStack_, context: $LootContext): $ItemStack;
        apply(stack: $ItemStack_, context: $LootContext): $ItemStack;
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        getType(): $LootItemFunctionType<$LootItemConditionalFunction>;
        static simpleBuilder(_constructor: $Function_<$List<$LootItemCondition>, $LootItemFunction>): $LootItemConditionalFunction$Builder<never>;
        static commonFields<T extends $LootItemConditionalFunction>(instance: $RecordCodecBuilder$Instance<T>): $Products$P1<$RecordCodecBuilder$Mu<T>, $List<$LootItemCondition>>;
        lootjs$when(arg0: $Consumer_<any>): $LootItemFunction;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        andThen<V>(arg0: $Function_<$ItemStack, V>): $BiFunction<$ItemStack, $LootContext, V>;
        getConditions(): $List<$LootItemCondition>;
        predicates: $List<$LootItemCondition>;
        constructor(predicates: $List_<$LootItemCondition>);
        get type(): $LootItemFunctionType<$LootItemConditionalFunction>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get conditions(): $List<$LootItemCondition>;
    }
    export class $CopyComponentsFunction extends $LootItemConditionalFunction {
        static copyComponents(source: $CopyComponentsFunction$Source_): $CopyComponentsFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyComponentsFunction>;
        constructor(conditions: $List_<$LootItemCondition>, source: $CopyComponentsFunction$Source_, include: ($List_<$DataComponentType<never>>) | undefined, exclude: ($List_<$DataComponentType<never>>) | undefined);
    }
    export class $ListOperation$StandAlone<T> extends $Record {
        value(): $List<T>;
        apply(list: $List_<T>): $List<T>;
        operation(): $ListOperation;
        static codec<T>(elementCodec: $Codec<T>, maxSize: number): $Codec<$ListOperation$StandAlone<T>>;
        constructor(arg0: $List_<T>, arg1: $ListOperation);
    }
    /**
     * Values that may be interpreted as {@link $ListOperation$StandAlone}.
     */
    export type $ListOperation$StandAlone_<T> = { operation?: $ListOperation, value?: $List_<any>,  } | [operation?: $ListOperation, value?: $List_<any>, ];
    export class $SetCustomModelDataFunction extends $LootItemConditionalFunction {
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetCustomModelDataFunction>;
        constructor(conditions: $List_<$LootItemCondition>, valueProvider: $NumberProvider_);
    }
    export class $CopyComponentsFunction$Source extends $Enum<$CopyComponentsFunction$Source> implements $StringRepresentable {
        get(context: $LootContext): $DataComponentMap;
        static values(): $CopyComponentsFunction$Source[];
        static valueOf(arg0: string): $CopyComponentsFunction$Source;
        getSerializedName(): string;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$CopyComponentsFunction$Source>;
        static BLOCK_ENTITY: $CopyComponentsFunction$Source;
        get serializedName(): string;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CopyComponentsFunction$Source}.
     */
    export type $CopyComponentsFunction$Source_ = "block_entity";
    /**
     * LootItemFunction that applies the `"SkullOwner"` NBT tag to any player heads based on the given `EntityTarget`.
     * If the given target does not resolve to a player, nothing happens.
     */
    export class $FillPlayerHead extends $LootItemConditionalFunction {
        static fillPlayerHead(entityTarget: $LootContext$EntityTarget_): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$FillPlayerHead>;
        constructor(conditions: $List_<$LootItemCondition>, entityTarget: $LootContext$EntityTarget_);
    }
    /**
     * LootItemFunction that sets the contents of a container such as a chest by setting the `BlocKEntityTag` of the stacks.
     * The contents are based on a list of loot pools.
     */
    export class $SetContainerContents extends $LootItemConditionalFunction {
        static setContents(component: $ContainerComponentManipulator<never>): $SetContainerContents$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetContainerContents>;
        constructor(conditions: $List_<$LootItemCondition>, component: $ContainerComponentManipulator<never>, entries: $List_<$LootPoolEntryContainer>);
        static set contents(value: $ContainerComponentManipulator<never>);
    }
    export class $FunctionReference extends $LootItemConditionalFunction implements $ReferenceLootFunctionAccessor {
        static functionReference(key: $ResourceKey_<$LootItemFunction>): $LootItemConditionalFunction$Builder<never>;
        getName(): $ResourceKey<$LootItemFunction>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$FunctionReference>;
        get name(): $ResourceKey<$LootItemFunction>;
    }
    export class $SetLoreFunction$Builder extends $LootItemConditionalFunction$Builder<$SetLoreFunction$Builder> {
        setMode(mode: $ListOperation): $SetLoreFunction$Builder;
        addLine(line: $Component_): $SetLoreFunction$Builder;
        getThis(): $SetLoreFunction$Builder;
        setResolutionContext(resolutionContext: $LootContext$EntityTarget_): $SetLoreFunction$Builder;
        constructor();
        set mode(value: $ListOperation);
        get this(): $SetLoreFunction$Builder;
        set resolutionContext(value: $LootContext$EntityTarget_);
    }
    /**
     * LootItemFunction that sets the stack's damage based on a `NumberProvider`, optionally adding to any existing damage.
     */
    export class $SetItemDamageFunction extends $LootItemConditionalFunction implements $SetDamageLootFunctionAccessor {
        static setDamage(damageValue: $NumberProvider_): $LootItemConditionalFunction$Builder<never>;
        static setDamage(damageValue: $NumberProvider_, add: boolean): $LootItemConditionalFunction$Builder<never>;
        getAdd(): boolean;
        getDurabilityRange(): $NumberProvider;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetItemDamageFunction>;
        get add(): boolean;
        get durabilityRange(): $NumberProvider;
    }
    export class $ToggleTooltips$TooltipWither<T> {
    }
    export interface $ToggleTooltips$TooltipWither<T> {
        withTooltip(toggle: T, value: boolean): T;
    }
    /**
     * Values that may be interpreted as {@link $ToggleTooltips$TooltipWither}.
     */
    export type $ToggleTooltips$TooltipWither_<T> = ((arg0: T, arg1: boolean) => T);
    /**
     * Convert any empty maps into explorer maps that lead to a structure that is nearest to the current ORIGIN, if present.
     */
    export class $ExplorationMapFunction extends $LootItemConditionalFunction implements $IExplorationFunctionExtension, $ExplorationMapLootFunctionAccessor {
        static makeExplorationMap(): $ExplorationMapFunction$Builder;
        supplementaries$setCustomDecoration(arg0: $Holder_<any>): void;
        supplementaries$getCustomDecoration(): $Holder<any>;
        handler$bgi000$supplementaries$supp$turnToQuill(arg0: $ItemStack_, arg1: $LootContext, arg2: $CallbackInfoReturnable<any>, arg3: $Vec3_, arg4: $ServerLevel): void;
        getDestination(): $TagKey<$Structure>;
        getDecoration(): $Holder<$MapDecorationType>;
        static CODEC: $MapCodec<$ExplorationMapFunction>;
        supplementaries$customDecoration: $Holder<any>;
        static DEFAULT_DECORATION: $Holder<$MapDecorationType>;
        destination: $TagKey<$Structure>;
        zoom: number;
        mapDecoration: $Holder<$MapDecorationType>;
        static DEFAULT_SEARCH_RADIUS: number;
        predicates: $List<$LootItemCondition>;
        static DEFAULT_ZOOM: number;
        static DEFAULT_SKIP_EXISTING: boolean;
        static DEFAULT_DESTINATION: $TagKey<$Structure>;
        skipKnownStructures: boolean;
        searchRadius: number;
        constructor(conditons: $List_<$LootItemCondition>, destination: $TagKey_<$Structure>, mapDecoration: $Holder_<$MapDecorationType>, zoom: number, searchRadius: number, skipKnownStructures: boolean);
        get decoration(): $Holder<$MapDecorationType>;
    }
    /**
     * LootItemFunction that reduces a stack's count based on the explosion radius.
     */
    export class $ApplyExplosionDecay extends $LootItemConditionalFunction {
        static explosionDecay(): $LootItemConditionalFunction$Builder<never>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$ApplyExplosionDecay>;
    }
    /**
     * LootItemFunction that sets the banner patterns for a banner item. Optionally appends to any existing patterns.
     */
    export class $SetBannerPatternFunction extends $LootItemConditionalFunction {
        static setBannerPattern(append: boolean): $SetBannerPatternFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetBannerPatternFunction>;
        constructor(conditions: $List_<$LootItemCondition>, patterns: $BannerPatternLayers_, append: boolean);
        static set bannerPattern(value: boolean);
    }
    export class $SetItemFunction extends $LootItemConditionalFunction implements $SetItemLootFunctionAccessor {
        getItem(): $Holder<$Item>;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetItemFunction>;
        constructor(conditions: $List_<$LootItemCondition>, item: $Holder_<$Item>);
        get item(): $Holder<$Item>;
    }
    /**
     * Base interface for builders that accept loot functions.
     * 
     * @see LootItemFunction
     */
    export class $FunctionUserBuilder<T extends $FunctionUserBuilder<T>> {
    }
    export interface $FunctionUserBuilder<T extends $FunctionUserBuilder<T>> {
        apply<E>(builderSources: E[], toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): T;
        apply(functionBuilder: $LootItemFunction$Builder_): T;
        unwrap(): T;
    }
    /**
     * Applies a random enchantment to the stack.
     * 
     * @see EnchantmentHelper#enchantItem
     */
    export class $EnchantWithLevelsFunction extends $LootItemConditionalFunction {
        static enchantWithLevels(registries: $HolderLookup$Provider, levels: $NumberProvider_): $EnchantWithLevelsFunction$Builder;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$EnchantWithLevelsFunction>;
        constructor(condtions: $List_<$LootItemCondition>, levels: $NumberProvider_, options: ($HolderSet_<$Enchantment>) | undefined);
    }
    export class $SetAttributesFunction$ModifierBuilder {
        build(): $SetAttributesFunction$Modifier;
        forSlot(slot: $EquipmentSlotGroup_): $SetAttributesFunction$ModifierBuilder;
        constructor(id: $ResourceLocation_, attribute: $Holder_<$Attribute>, operation: $AttributeModifier$Operation_, amount: $NumberProvider_);
    }
    export class $SetStewEffectFunction$EffectEntry extends $Record {
        duration(): $NumberProvider;
        effect(): $Holder<$MobEffect>;
        static CODEC: $Codec<$SetStewEffectFunction$EffectEntry>;
        constructor(arg0: $Holder_<$MobEffect>, arg1: $NumberProvider_);
    }
    /**
     * Values that may be interpreted as {@link $SetStewEffectFunction$EffectEntry}.
     */
    export type $SetStewEffectFunction$EffectEntry_ = { duration?: $NumberProvider_, effect?: $Holder_<$MobEffect>,  } | [duration?: $NumberProvider_, effect?: $Holder_<$MobEffect>, ];
    export class $SetWritableBookPagesFunction extends $LootItemConditionalFunction {
        apply(writableBookContent: $WritableBookContent_): $WritableBookContent;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$SetWritableBookPagesFunction>;
        constructor(conditions: $List_<$LootItemCondition>, pages: $List_<$Filterable_<string>>, pageOperation: $ListOperation);
    }
    /**
     * LootItemFunction that sets the stack's name by copying it from somewhere else, such as the killing player.
     */
    export class $CopyNameFunction extends $LootItemConditionalFunction implements $CopyNameLootFunctionAccessor {
        static copyName(source: $CopyNameFunction$NameSource_): $LootItemConditionalFunction$Builder<never>;
        getSource(): $CopyNameFunction$NameSource;
        predicates: $List<$LootItemCondition>;
        static CODEC: $MapCodec<$CopyNameFunction>;
        get source(): $CopyNameFunction$NameSource;
    }
    export class $CopyCustomDataFunction$CopyOperation extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CopyCustomDataFunction$CopyOperation}.
     */
    export type $CopyCustomDataFunction$CopyOperation_ = { targetPath?: $NbtPathArgument$NbtPath, op?: $CopyCustomDataFunction$MergeStrategy_, sourcePath?: $NbtPathArgument$NbtPath,  } | [targetPath?: $NbtPathArgument$NbtPath, op?: $CopyCustomDataFunction$MergeStrategy_, sourcePath?: $NbtPathArgument$NbtPath, ];
}
