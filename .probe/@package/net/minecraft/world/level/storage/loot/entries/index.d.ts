import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $LootTableEntryAccessor, $ItemEntryAccessor, $LootPoolEntryAccessor, $CombinedEntryAccessor, $LeafEntryAccessor, $TagEntryAccessor } from "@package/fzzyhmstrs/emi_loot/mixins";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LootItemAccessor } from "@package/com/jesz/createdieselgenerators/mixins";
import { $FunctionUserBuilder, $LootItemFunction$Builder, $LootItemFunction$Builder_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $Collection_, $List_ } from "@package/java/util";
import { $Products$P1, $Products$P4 } from "@package/com/mojang/datafixers";
import { $AccessorCompositeEntryBase, $AccessorLootPoolSingletonContainer, $AccessorDynamicLoot, $AccessorLootItem, $AccessorTagEntry, $AccessorNestedLootTable } from "@package/net/darkhax/bookshelf/common/mixin/access/loot";
import { $Predicate, $Consumer, $Function_, $Consumer_, $BiFunction } from "@package/java/util/function";
import { $UnificationLookup } from "@package/com/almostreliable/unified/api/unification";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $CompositeEntryBaseExtension } from "@package/com/almostreliable/lootjs/loot/extension";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Iterable_, $Record } from "@package/java/lang";
import { $LootUnificationHandler } from "@package/com/almostreliable/unified/unification/loot";
import { $ValidationContext, $LootContext, $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/entries" {
    /**
     * Base class for loot pool entry containers. This class just stores a list of conditions that are checked before the entry generates loot.
     */
    export class $LootPoolEntryContainer implements $ComposableEntryContainer, $LootPoolEntryAccessor {
        validate(validationContext: $ValidationContext): void;
        getType(): $LootPoolEntryType;
        canRun(lootContext: $LootContext): boolean;
        static commonFields<T extends $LootPoolEntryContainer>(instance: $RecordCodecBuilder$Instance<T>): $Products$P1<$RecordCodecBuilder$Mu<T>, $List<$LootItemCondition>>;
        or(entry: $ComposableEntryContainer_): $ComposableEntryContainer;
        and(entry: $ComposableEntryContainer_): $ComposableEntryContainer;
        getConditions(): $List<$LootItemCondition>;
        compositeCondition: $Predicate<$LootContext>;
        conditions: $List<$LootItemCondition>;
        constructor(conditions: $List_<$LootItemCondition>);
        get type(): $LootPoolEntryType;
    }
    /**
     * A LootPoolEntryContainer that expands into a single LootPoolEntry.
     */
    export class $LootPoolSingletonContainer extends $LootPoolEntryContainer implements $AccessorLootPoolSingletonContainer, $LeafEntryAccessor {
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
        static simpleBuilder(entryBuilder: $LootPoolSingletonContainer$EntryConstructor_): $LootPoolSingletonContainer$Builder<never>;
        static singletonFields<T extends $LootPoolSingletonContainer>(instance: $RecordCodecBuilder$Instance<T>): $Products$P4<$RecordCodecBuilder$Mu<T>, number, number, $List<$LootItemCondition>, $List<$LootItemFunction>>;
        getWeight(): number;
        bookshelf$weight(): number;
        bookshelf$quality(): number;
        getFunctions(): $List<$LootItemFunction>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    export class $EntryGroup$Builder extends $LootPoolEntryContainer$Builder<$EntryGroup$Builder> {
        getThis(): $EntryGroup$Builder;
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
        get this(): $EntryGroup$Builder;
    }
    export class $NestedLootTable extends $LootPoolSingletonContainer implements $AccessorNestedLootTable, $LootTableEntryAccessor {
        static inlineLootTable(lootTable: $LootTable): $LootPoolSingletonContainer$Builder<never>;
        static lootTableReference(lootTable: $ResourceKey_<$LootTable>): $LootPoolSingletonContainer$Builder<never>;
        getValue(): $Either<$ResourceKey<$LootTable>, $LootTable>;
        bookshelf$contents(): $Either<$ResourceKey<$LootTable>, $LootTable>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$NestedLootTable>;
        functions: $List<$LootItemFunction>;
        contents: $Either<$ResourceKey<$LootTable>, $LootTable>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(contents: $Either<$ResourceKey_<$LootTable>, $LootTable>, weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
        get value(): $Either<$ResourceKey<$LootTable>, $LootTable>;
    }
    /**
     * A loot pool entry that does not generate any items.
     */
    export class $EmptyLootItem extends $LootPoolSingletonContainer {
        static emptyItem(): $LootPoolSingletonContainer$Builder<never>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EmptyLootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    export class $LootPoolSingletonContainer$EntryConstructor {
    }
    export interface $LootPoolSingletonContainer$EntryConstructor {
    }
    /**
     * Values that may be interpreted as {@link $LootPoolSingletonContainer$EntryConstructor}.
     */
    export type $LootPoolSingletonContainer$EntryConstructor_ = (() => void);
    export class $AlternativesEntry$Builder extends $LootPoolEntryContainer$Builder<$AlternativesEntry$Builder> {
        getThis(): $AlternativesEntry$Builder;
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
        get this(): $AlternativesEntry$Builder;
    }
    /**
     * A loot pool entry container that will generate the dynamic drops with a given name.
     * 
     * @see LootContext.DynamicDrops
     */
    export class $DynamicLoot extends $LootPoolSingletonContainer implements $AccessorDynamicLoot {
        static dynamicEntry(dynamicDropsName: $ResourceLocation_): $LootPoolSingletonContainer$Builder<never>;
        bookshelf$name(): $ResourceLocation;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$DynamicLoot>;
        functions: $List<$LootItemFunction>;
        name: $ResourceLocation;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(name: $ResourceLocation_, weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    /**
     * Base class for loot pool entry containers that delegate to one or more children.
     * The actual functionality is provided by composing the children into one composed container (see `#compose`).
     */
    export class $CompositeEntryBase extends $LootPoolEntryContainer implements $LootUnificationHandler, $AccessorCompositeEntryBase, $CombinedEntryAccessor, $CompositeEntryBaseExtension {
        compose(children: $List_<$ComposableEntryContainer_>): $ComposableEntryContainer;
        static createCodec<T extends $CompositeEntryBase>(factory: $CompositeEntryBase$CompositeEntryConstructor_<T>): $MapCodec<T>;
        lootjs$getEntries(): $List<any>;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        getChildren(): $List<$LootPoolEntryContainer>;
        bookshelf$children(): $List<$LootPoolEntryContainer>;
        compositeCondition: $Predicate<$LootContext>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
    /**
     * A composite loot pool entry container that expands all its children in order until one of them succeeds.
     * This container succeeds if one of its children succeeds.
     */
    export class $AlternativesEntry extends $CompositeEntryBase {
        static alternatives(...children: $LootPoolEntryContainer$Builder<never>[]): $AlternativesEntry$Builder;
        static alternatives<E>(childrenSources: $Collection_<E>, toChildrenFunction: $Function_<E, $LootPoolEntryContainer$Builder<never>>): $AlternativesEntry$Builder;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$AlternativesEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
    /**
     * A loot pool entry container that generates based on an item tag.
     * If `expand` is set to true, it will expand into separate LootPoolEntries for every item in the tag, otherwise it will simply generate all items in the tag.
     */
    export class $TagEntry extends $LootPoolSingletonContainer implements $AccessorTagEntry, $TagEntryAccessor {
        static tagContents(tag: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        static expandTag(tag: $TagKey_<$Item>): $LootPoolSingletonContainer$Builder<never>;
        getName(): $TagKey<$Item>;
        bookshelf$tag(): $TagKey<$Item>;
        bookshelf$expand(): boolean;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$TagEntry>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        tag: $TagKey<$Item>;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(tag: $TagKey_<$Item>, expand: boolean, weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
        get name(): $TagKey<$Item>;
    }
    /**
     * A loot pool entry that always generates a given item.
     */
    export class $LootItem extends $LootPoolSingletonContainer implements $LootUnificationHandler, $AccessorLootItem, $ItemEntryAccessor, $LootItemAccessor {
        static create$bookshelf_$md$707fe4$0(arg0: $Holder_<any>, arg1: number, arg2: number, arg3: $List_<any>, arg4: $List_<any>): $LootItem;
        static lootTableItem(item: $ItemLike_): $LootPoolSingletonContainer$Builder<never>;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        getItem(): $Holder<$Item>;
        bookshelf$item(): $Holder<$Item>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        item: $Holder<$Item>;
        static CODEC: $MapCodec<$LootItem>;
        functions: $List<$LootItemFunction>;
        weight: number;
        static DEFAULT_QUALITY: number;
        conditions: $List<$LootItemCondition>;
        static DEFAULT_WEIGHT: number;
        quality: number;
        constructor(item: $Holder_<$Item>, weight: number, quality: number, conditions: $List_<$LootItemCondition>, functions: $List_<$LootItemFunction>);
    }
    /**
     * A loot pool entry generates zero or more stacks of items based on the LootContext.
     * Each loot pool entry has a weight that determines how likely it is to be generated within a given loot pool.
     */
    export class $LootPoolEntry {
    }
    export interface $LootPoolEntry {
        /**
         * Gets the effective weight based on the loot entry's weight and quality multiplied by looter's luck.
         */
        getWeight(luck: number): number;
        /**
         * Generate the loot stacks of this entry.
         * Contrary to the method name this method does not always generate one stack, it can also generate zero or multiple stacks.
         */
        createItemStack(stackConsumer: $Consumer_<$ItemStack>, lootContext: $LootContext): void;
    }
    export class $LootPoolSingletonContainer$Builder<T extends $LootPoolSingletonContainer$Builder<T>> extends $LootPoolEntryContainer$Builder<T> implements $FunctionUserBuilder<T> {
        apply(functionBuilder: $LootItemFunction$Builder_): T;
        setQuality(quality: number): T;
        setWeight(quality: number): T;
        getFunctions(): $List<$LootItemFunction>;
        apply<E>(builderSources: E[], toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): T;
        apply<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): T;
        unwrap(): T;
        weight: number;
        quality: number;
        constructor();
        get functions(): $List<$LootItemFunction>;
    }
    export class $LootPoolSingletonContainer$DummyBuilder extends $LootPoolSingletonContainer$Builder<$LootPoolSingletonContainer$DummyBuilder> {
        weight: number;
        quality: number;
    }
    /**
     * Registration for `LootPoolEntryType`.
     */
    export class $LootPoolEntries {
        static ITEM: $LootPoolEntryType;
        static GROUP: $LootPoolEntryType;
        static CODEC: $Codec<$LootPoolEntryContainer>;
        static SEQUENCE: $LootPoolEntryType;
        static ALTERNATIVES: $LootPoolEntryType;
        static LOOT_TABLE: $LootPoolEntryType;
        static TAG: $LootPoolEntryType;
        static EMPTY: $LootPoolEntryType;
        static DYNAMIC: $LootPoolEntryType;
        constructor();
    }
    export class $LootPoolSingletonContainer$EntryBase implements $LootPoolEntry {
    }
    export class $SequentialEntry$Builder extends $LootPoolEntryContainer$Builder<$SequentialEntry$Builder> {
        getThis(): $SequentialEntry$Builder;
        constructor(...children: $LootPoolEntryContainer$Builder<never>[]);
        get this(): $SequentialEntry$Builder;
    }
    /**
     * The SerializerType for `LootPoolEntryContainer`.
     */
    export class $LootPoolEntryType extends $Record {
        codec(): $MapCodec<$LootPoolEntryContainer>;
        constructor(arg0: $MapCodec<$LootPoolEntryContainer>);
    }
    /**
     * Values that may be interpreted as {@link $LootPoolEntryType}.
     */
    export type $LootPoolEntryType_ = { codec?: $MapCodec<$LootPoolEntryContainer>,  } | [codec?: $MapCodec<$LootPoolEntryContainer>, ];
    export class $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
    }
    export interface $CompositeEntryBase$CompositeEntryConstructor<T extends $CompositeEntryBase> {
        create(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>): T;
    }
    /**
     * Values that may be interpreted as {@link $CompositeEntryBase$CompositeEntryConstructor}.
     */
    export type $CompositeEntryBase$CompositeEntryConstructor_<T> = ((arg0: $List<$LootPoolEntryContainer>, arg1: $List<$LootItemCondition>) => T);
    /**
     * A composite loot pool entry container that expands all its children in order until one of them fails.
     * This container succeeds if all children succeed.
     */
    export class $SequentialEntry extends $CompositeEntryBase {
        static sequential(...children: $LootPoolEntryContainer$Builder<never>[]): $SequentialEntry$Builder;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$SequentialEntry>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
    /**
     * Base interface for loot pool entry containers.
     * A loot pool entry container holds one or more loot pools and will expand into those.
     * Additionally, the container can either succeed or fail, based on its conditions.
     */
    export class $ComposableEntryContainer {
        static ALWAYS_TRUE: $ComposableEntryContainer;
        static ALWAYS_FALSE: $ComposableEntryContainer;
    }
    export interface $ComposableEntryContainer {
        /**
         * Expand this loot pool entry container by calling `entryConsumer` with any applicable entries
         * 
         * @return whether this loot pool entry container successfully expanded or not
         */
        expand(lootContext: $LootContext, entryConsumer: $Consumer_<$LootPoolEntry>): boolean;
        or(entry: $ComposableEntryContainer_): $ComposableEntryContainer;
        and(entry: $ComposableEntryContainer_): $ComposableEntryContainer;
    }
    /**
     * Values that may be interpreted as {@link $ComposableEntryContainer}.
     */
    export type $ComposableEntryContainer_ = ((arg0: $LootContext, arg1: $Consumer<$LootPoolEntry>) => boolean);
    export class $LootPoolEntryContainer$Builder<T extends $LootPoolEntryContainer$Builder<T>> implements $ConditionUserBuilder<T> {
        append(childBuilder: $LootPoolEntryContainer$Builder<never>): $EntryGroup$Builder;
        unwrap(): T;
        build(): $LootPoolEntryContainer;
        when(conditionBuilder: $LootItemCondition$Builder_): T;
        getConditions(): $List<$LootItemCondition>;
        then(childBuilder: $LootPoolEntryContainer$Builder<never>): $SequentialEntry$Builder;
        getThis(): T;
        otherwise(childBuilder: $LootPoolEntryContainer$Builder<never>): $AlternativesEntry$Builder;
        when<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemCondition$Builder>): T;
        constructor();
        get conditions(): $List<$LootItemCondition>;
        get this(): T;
    }
    /**
     * A composite loot pool entry container that expands all its children in order.
     * This container always succeeds.
     */
    export class $EntryGroup extends $CompositeEntryBase {
        static list(...children: $LootPoolEntryContainer$Builder<never>[]): $EntryGroup$Builder;
        compositeCondition: $Predicate<$LootContext>;
        static CODEC: $MapCodec<$EntryGroup>;
        children: $List<$LootPoolEntryContainer>;
        conditions: $List<$LootItemCondition>;
        constructor(children: $List_<$LootPoolEntryContainer>, conditions: $List_<$LootItemCondition>);
    }
}
