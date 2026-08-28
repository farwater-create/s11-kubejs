import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $LootTableAccessor as $LootTableAccessor$2, $LootPoolAccessor as $LootPoolAccessor$2 } from "@package/net/fabricmc/fabric/mixin/loot";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $LootParamsParamSetAccess } from "@package/umpaz/brewinandchewin/common/access";
import { $ILootPoolHooks } from "@package/net/darkhax/bookshelf/common/impl/data/loot/modifiers";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LootPoolEntryContainer$Builder, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Map, $Set, $List, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $StringRepresentable$EnumCodec, $ProblemReporter } from "@package/net/minecraft/util";
import { $LootEntryList, $LootFunctionList, $LootConditionList } from "@package/com/almostreliable/lootjs/loot";
import { $AccessorLootPool, $AccessorLootTable } from "@package/net/darkhax/bookshelf/common/mixin/access/loot";
import { $Container } from "@package/net/minecraft/world";
import { $Consumer_, $BiFunction, $Predicate, $BiConsumer, $Consumer, $BiConsumer_, $Function_, $UnaryOperator_ } from "@package/java/util/function";
import { $ServerLevel, $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderGetter$Provider, $Registry, $Holder, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $LootType_, $LootType } from "@package/com/almostreliable/lootjs/core";
import { $LootTableExtension, $LootParamsExtension, $LootPoolExtension, $LootContextExtension } from "@package/com/almostreliable/lootjs/loot/extension";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Iterable_, $Record, $Object } from "@package/java/lang";
import { $AccessorMixinLootTable } from "@package/noobanidus/mods/lootr/common/mixin/accessor";
import { $LootUnificationHandler } from "@package/com/almostreliable/unified/unification/loot";
import { $LootPoolAccessor, $LootTableAccessor, $BoundedIntUnaryOperatorAccessor } from "@package/fzzyhmstrs/emi_loot/mixins";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LootPoolAccessor as $LootPoolAccessor$1, $LootTableAccessor as $LootTableAccessor$1 } from "@package/com/jesz/createdieselgenerators/mixins";
import { $ItemContainerContents, $ChargedProjectiles, $BundleContents } from "@package/net/minecraft/world/item/component";
import { $FunctionUserBuilder, $LootItemFunction$Builder, $LootItemFunction$Builder_, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $UnificationLookup } from "@package/com/almostreliable/unified/api/unification";
import { $FabricLootPoolBuilder as $FabricLootPoolBuilder$1, $FabricLootTableBuilder } from "@package/net/fabricmc/fabric/api/loot/v2";
import { $Stream } from "@package/java/util/stream";
import { $LootContextAccessor, $LootParamsAccessor } from "@package/umpaz/brewinandchewin/common/mixin";
import { $FabricLootPoolBuilder, $FabricLootTableBuilder as $FabricLootTableBuilder$1 } from "@package/net/fabricmc/fabric/api/loot/v3";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $ConditionUserBuilder, $LootItemCondition$Builder, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $DebugInfo } from "@package/com/almostreliable/lootjs/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $LootContextParam, $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $PostLootAction, $PostLootActionOwner, $PostLootAction_ } from "@package/com/almostreliable/lootjs/loot/table";
import { $DamageSource } from "@package/net/minecraft/world/damagesource";
export * as parameters from "@package/net/minecraft/world/level/storage/loot/parameters";
export * as predicates from "@package/net/minecraft/world/level/storage/loot/predicates";
export * as providers from "@package/net/minecraft/world/level/storage/loot/providers";
export * as entries from "@package/net/minecraft/world/level/storage/loot/entries";
export * as functions from "@package/net/minecraft/world/level/storage/loot/functions";

declare module "@package/net/minecraft/world/level/storage/loot" {
    export class $IntRange$IntLimiter {
    }
    export interface $IntRange$IntLimiter {
    }
    /**
     * Values that may be interpreted as {@link $IntRange$IntLimiter}.
     */
    export type $IntRange$IntLimiter_ = (() => void);
    export class $LootParams$Builder {
        create(params: $LootContextParamSet): $LootParams;
        getLevel(): $ServerLevel;
        getParameter<T>(parameter: $LootContextParam<T>): T;
        withParameter<T>(parameter: $LootContextParam<T>, value: T): $LootParams$Builder;
        handler$fmk000$lootjs$setType(arg0: $LootContextParamSet, arg1: $CallbackInfoReturnable<any>): void;
        withLuck(luck: number): $LootParams$Builder;
        withDynamicDrop(name: $ResourceLocation_, dynamicDrop: $LootParams$DynamicDrop_): $LootParams$Builder;
        withOptionalParameter<T>(parameter: $LootContextParam<T>, value: T | null): $LootParams$Builder;
        getOptionalParameter<T>(parameter: $LootContextParam<T>): T;
        luck: number;
        constructor(level: $ServerLevel);
        get level(): $ServerLevel;
    }
    export class $LootTable$Builder implements $FunctionUserBuilder<$LootTable$Builder>, $FabricLootTableBuilder, $FabricLootTableBuilder$1 {
        apply(functionBuilder: $LootItemFunction$Builder_): $LootTable$Builder;
        apply(arg0: $LootItemFunction): $LootTable$Builder;
        apply(arg0: $Collection_<any>): $LootTable$Builder;
        pool(arg0: $LootPool): $LootTable$Builder;
        unwrap(): $LootTable$Builder;
        build(): $LootTable;
        pools(arg0: $Collection_<any>): $LootTable$Builder;
        modifyPools(arg0: $Consumer_<any>): $LootTable$Builder;
        withPool(lootPool: $LootPool$Builder): $LootTable$Builder;
        setRandomSequence(randomSequence: $ResourceLocation_): $LootTable$Builder;
        setParamSet(parameterSet: $LootContextParamSet): $LootTable$Builder;
        apply<E>(builderSources: E[], toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): $LootTable$Builder;
        apply<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): $LootTable$Builder;
        constructor();
        set randomSequence(value: $ResourceLocation_);
        set paramSet(value: $LootContextParamSet);
    }
    export class $LootPool$Builder implements $FunctionUserBuilder<$LootPool$Builder>, $ConditionUserBuilder<$LootPool$Builder>, $FabricLootPoolBuilder$1, $FabricLootPoolBuilder {
        name(arg0: string): $LootPool$Builder;
        add(entriesBuilder: $LootPoolEntryContainer$Builder<never>): $LootPool$Builder;
        apply(functionBuilder: $LootItemFunction$Builder_): $LootPool$Builder;
        apply(arg0: $LootItemFunction): $LootPool$Builder;
        apply(arg0: $Collection_<any>): $LootPool$Builder;
        "with"(arg0: $LootPoolEntryContainer): $LootPool$Builder;
        "with"(arg0: $Collection_<any>): $LootPool$Builder;
        unwrap(): $LootPool$Builder;
        build(): $LootPool;
        when(conditionBuilder: $LootItemCondition$Builder_): $LootPool$Builder;
        setBonusRolls(bonusRolls: $NumberProvider_): $LootPool$Builder;
        setRolls(bonusRolls: $NumberProvider_): $LootPool$Builder;
        conditionally(arg0: $LootItemCondition): $LootPool$Builder;
        conditionally(arg0: $Collection_<any>): $LootPool$Builder;
        apply<E>(builderSources: E[], toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): $LootPool$Builder;
        apply<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemFunction$Builder>): $LootPool$Builder;
        when<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemCondition$Builder>): $LootPool$Builder;
        constructor();
        set bonusRolls(value: $NumberProvider_);
        set rolls(value: $NumberProvider_);
    }
    /**
     * Represents a type of entity that can be looked up in a `LootContext` using a `LootContextParam`.
     */
    export class $LootContext$EntityTarget extends $Enum<$LootContext$EntityTarget> implements $StringRepresentable {
        getName(): string;
        static values(): $LootContext$EntityTarget[];
        static valueOf(name: string): $LootContext$EntityTarget;
        static getByName(name: string): $LootContext$EntityTarget;
        getSerializedName(): string;
        getParam(): $LootContextParam<$Entity>;
        getRemappedEnumConstantName(): string;
        static DIRECT_ATTACKER: $LootContext$EntityTarget;
        static CODEC: $StringRepresentable$EnumCodec<$LootContext$EntityTarget>;
        static ATTACKER: $LootContext$EntityTarget;
        static ATTACKING_PLAYER: $LootContext$EntityTarget;
        static THIS: $LootContext$EntityTarget;
        get serializedName(): string;
        get param(): $LootContextParam<$Entity>;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LootContext$EntityTarget}.
     */
    export type $LootContext$EntityTarget_ = "this" | "attacker" | "direct_attacker" | "attacking_player" | string;
    export class $LootDataType<T> extends $Record {
        static values(): $Stream<$LootDataType<never>>;
        defaultValue(): T;
        deserialize<V>(resourceLocation: $ResourceLocation_, ops: $DynamicOps<V>, value: V): (T) | undefined;
        validator(): $LootDataType$Validator<T>;
        codec(): $Codec<T>;
        conditionalCodec(): $Codec<(T) | undefined>;
        registryKey(): $ResourceKey<$Registry<T>>;
        runValidation(context: $ValidationContext, key: $ResourceKey_<T>, value: T): void;
        idSetter(): $BiConsumer<T, $ResourceLocation>;
        handler$gbj000$probejs$apply(resourceLocation: $ResourceLocation_, ops: $DynamicOps<any>, value: $Object, cir: $CallbackInfoReturnable<any>): void;
        static TABLE: $LootDataType<$LootTable>;
        static MODIFIER: $LootDataType<$LootItemFunction>;
        static PREDICATE: $LootDataType<$LootItemCondition>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec<T>, validator: $LootDataType$Validator_<T>, defaultValue: T, conditionalCodec: $Codec<(T) | undefined>, idSetter: $BiConsumer_<T, $ResourceLocation>);
    }
    /**
     * Values that may be interpreted as {@link $LootDataType}.
     */
    export type $LootDataType_<T> = { registryKey?: $ResourceKey_<$Registry<any>>, validator?: $LootDataType$Validator_<any>, idSetter?: $BiConsumer_<any, $ResourceLocation>, conditionalCodec?: $Codec<(T) | undefined>, defaultValue?: any, codec?: $Codec<any>,  } | [registryKey?: $ResourceKey_<$Registry<any>>, validator?: $LootDataType$Validator_<any>, idSetter?: $BiConsumer_<any, $ResourceLocation>, conditionalCodec?: $Codec<(T) | undefined>, defaultValue?: any, codec?: $Codec<any>, ];
    /**
     * LootContext stores various context information for loot generation.
     * This includes the Level as well as any known `LootContextParam`s.
     */
    export class $LootContext implements $LootContextAccessor, $LootContextExtension {
        getLevel(): $ServerLevel;
        /**
         * Get the value of the given parameter.
         * 
         * @throws NoSuchElementException if the parameter is not present in this context
         */
        getParam<T>(param: $LootContextParam<T>): T;
        /**
         * Check whether the given parameter is present in this context.
         */
        hasParam(parameter: $LootContextParam<never>): boolean;
        setQueriedLootTableId(arg0: $ResourceLocation_): void;
        getResolver(): $HolderGetter$Provider;
        /**
         * Get the value of the given parameter.
         * 
         * @throws NoSuchElementException if the parameter is not present in this context
         */
        getParamOrNull<T>(param: $LootContextParam<T>): T;
        /**
         * The luck value for this loot context. This is usually just the player's luck value, however it may be modified depending on the context of the looting.
         * When fishing for example it is increased based on the Luck of the Sea enchantment.
         */
        getLuck(): number;
        getRandom(): $RandomSource;
        getQueriedLootTableId(): $ResourceLocation;
        /**
         * Add the dynamic drops for the given dynamic drops name to the given consumer.
         * If no dynamic drops provider for the given name has been registered to this LootContext, nothing is generated.
         * 
         * @see DynamicDrops
         */
        addDynamicDrops(name: $ResourceLocation_, consumer: $Consumer_<$ItemStack>): void;
        hasVisitedElement(element: $LootContext$VisitedEntry_<never>): boolean;
        lootjs$getType(): $LootType;
        lootjs$getData(): $Map<any, any>;
        popVisitedElement(element: $LootContext$VisitedEntry_<never>): void;
        lootjs$self(): $LootContext;
        static createVisitedEntry(lootTable: $LootTable): $LootContext$VisitedEntry<$LootTable>;
        static createVisitedEntry(predicate: $LootItemCondition): $LootContext$VisitedEntry<$LootItemCondition>;
        static createVisitedEntry(modifier: $LootItemFunction): $LootContext$VisitedEntry<$LootItemFunction>;
        pushVisitedElement(element: $LootContext$VisitedEntry_<never>): boolean;
        getAttackingEntity(): $Entity;
        getKillerPlayer(): $ServerPlayer;
        getDamageSource(): $DamageSource;
        /**
         * The luck value for this loot context. This is usually just the player's luck value, however it may be modified depending on the context of the looting.
         * When fishing for example it is increased based on the Luck of the Sea enchantment.
         */
        getExplosionRadius(): number;
        getEntity(): $Entity;
        getTool(): $ItemStack;
        getPosition(): $Vec3;
        isType(arg0: $LootType_): boolean;
        getServer(): $MinecraftServer;
        isExploded(): boolean;
        getId(): $ResourceLocation;
        brewinandchewin$getParams(): $LootParams;
        constructor(params: $LootParams, random: $RandomSource, lootDataResolver: $HolderGetter$Provider_);
        get level(): $ServerLevel;
        get resolver(): $HolderGetter$Provider;
        get luck(): number;
        get random(): $RandomSource;
        get attackingEntity(): $Entity;
        get killerPlayer(): $ServerPlayer;
        get damageSource(): $DamageSource;
        get explosionRadius(): number;
        get entity(): $Entity;
        get tool(): $ItemStack;
        get position(): $Vec3;
        get server(): $MinecraftServer;
        get exploded(): boolean;
        get id(): $ResourceLocation;
    }
    /**
     * Context for validating loot tables. Loot tables are validated recursively by checking that all functions, conditions, etc. (implementing `LootContextUser`) are valid according to their LootTable's `LootContextParamSet`.
     */
    export class $ValidationContext {
        resolver(): $HolderGetter$Provider;
        /**
         * Create a new ValidationContext with the given LootContextParamSet.
         */
        setParams(params: $LootContextParamSet): $ValidationContext;
        reporter(): $ProblemReporter;
        /**
         * Validate the given LootContextUser.
         */
        validateUser(lootContextUser: $LootContextUser): void;
        allowsReferences(): boolean;
        /**
         * Report a problem to this ValidationContext.
         */
        reportProblem(problem: string): void;
        /**
         * Create a new ValidationContext with `childName` being added to the context.
         */
        forChild(childName: string): $ValidationContext;
        hasVisitedElement(key: $ResourceKey_<never>): boolean;
        enterElement(name: string, key: $ResourceKey_<never>): $ValidationContext;
        constructor(reporter: $ProblemReporter, params: $LootContextParamSet);
        constructor(reporter: $ProblemReporter, params: $LootContextParamSet, resolver: $HolderGetter$Provider_);
        set params(value: $LootContextParamSet);
    }
    /**
     * An object that will use some parameters from a LootContext. Used for validation purposes to validate that the correct parameters are present.
     */
    export class $LootContextUser {
    }
    export interface $LootContextUser {
        /**
         * Validate that this object is used correctly according to the given ValidationContext.
         */
        validate(context: $ValidationContext): void;
        /**
         * Get the parameters used by this object.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * A possibly unbounded range of integers based on `LootContext`. Minimum and maximum are given in the form of `NumberProvider`s.
     * Minimum and maximum are both optional. If given, they are both inclusive.
     */
    export class $IntRange implements $BoundedIntUnaryOperatorAccessor {
        /**
         * Check whether the given value falls within this IntRange.
         */
        test(lootContext: $LootContext, value: number): boolean;
        /**
         * Clamp the given value so that it falls within this IntRange.
         */
        clamp(lootContext: $LootContext, value: number): number;
        /**
         * Create an IntRange that contains only exactly the given value.
         */
        static exact(exactValue: number): $IntRange;
        /**
         * Create an IntRange that ranges from `min` to `max`, both inclusive.
         */
        static range(min: number, max: number): $IntRange;
        /**
         * Create an IntRange that contains only exactly the given value.
         */
        static lowerBound(exactValue: number): $IntRange;
        /**
         * Create an IntRange that contains only exactly the given value.
         */
        static upperBound(exactValue: number): $IntRange;
        /**
         * The LootContextParams required for this IntRange.
         */
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getMin(): $NumberProvider;
        getMax(): $NumberProvider;
        static CODEC: $Codec<$IntRange>;
        constructor(min: $NumberProvider_ | null, max: $NumberProvider_ | null);
        get referencedContextParams(): $Set<$LootContextParam<never>>;
        get min(): $NumberProvider;
        get max(): $NumberProvider;
    }
    export class $LootDataType$Validator<T> {
    }
    export interface $LootDataType$Validator<T> {
        run(context: $ValidationContext, key: $ResourceKey_<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $LootDataType$Validator}.
     */
    export type $LootDataType$Validator_<T> = ((arg0: $ValidationContext, arg1: $ResourceKey<T>, arg2: T) => void);
    export class $LootParams$DynamicDrop {
    }
    export interface $LootParams$DynamicDrop {
        add(output: $Consumer_<$ItemStack>): void;
    }
    /**
     * Values that may be interpreted as {@link $LootParams$DynamicDrop}.
     */
    export type $LootParams$DynamicDrop_ = ((arg0: $Consumer<$ItemStack>) => void);
    export class $ContainerComponentManipulators {
        static ALL_MANIPULATORS: $Map<$DataComponentType<never>, $ContainerComponentManipulator<never>>;
        static CODEC: $Codec<$ContainerComponentManipulator<never>>;
        static CHARGED_PROJECTILES: $ContainerComponentManipulator<$ChargedProjectiles>;
        static CONTAINER: $ContainerComponentManipulator<$ItemContainerContents>;
        static BUNDLE_CONTENTS: $ContainerComponentManipulator<$BundleContents>;
    }
    export interface $ContainerComponentManipulators {
    }
    export class $LootParams implements $LootParamsAccessor, $LootParamsParamSetAccess, $LootParamsExtension {
        getLevel(): $ServerLevel;
        hasParam(param: $LootContextParam<never>): boolean;
        getParameter<T>(param: $LootContextParam<T>): T;
        lootjs$setType(arg0: $LootType_): void;
        getParamOrNull<T>(param: $LootContextParam<T>): T;
        brewinandchewin$setParamSet(arg0: $LootContextParamSet): void;
        getLuck(): number;
        addDynamicDrops(location: $ResourceLocation_, consumer: $Consumer_<$ItemStack>): void;
        lootjs$getType(): $LootType;
        brewinandchewin$getParamSet(): $LootContextParamSet;
        getOptionalParameter<T>(param: $LootContextParam<T>): T;
        brewinandchewin$getParams(): $Map<$LootContextParam<never>, $Object>;
        constructor(level: $ServerLevel, params: $Map_<$LootContextParam<never>, $Object>, dynamicDrops: $Map_<$ResourceLocation_, $LootParams$DynamicDrop_>, luck: number);
        get level(): $ServerLevel;
        get luck(): number;
    }
    export class $ContainerComponentManipulator<T> {
    }
    export interface $ContainerComponentManipulator<T> {
        type(): $DataComponentType<T>;
        empty(): T;
        getContents(contents: T): $Stream<$ItemStack>;
        setContents(stack: $ItemStack_, contents: T, items: $Stream<$ItemStack_>): void;
        setContents(stack: $ItemStack_, items: $Stream<$ItemStack_>): void;
        setContents(contents: T, items: $Stream<$ItemStack_>): T;
        modifyItems(stack: $ItemStack_, modifier: $UnaryOperator_<$ItemStack>): void;
    }
    export class $LootTable implements $LootUnificationHandler, $AccessorMixinLootTable, $AccessorLootTable, $LootTableAccessor, $PostLootActionOwner, $LootTableExtension, $LootTableAccessor$2, $LootTableAccessor$1 {
        fill(container: $Container, params: $LootParams, seed: number): void;
        /**
         * Validate this LootTable using the given ValidationContext.
         */
        validate(validator: $ValidationContext): void;
        getPool(arg0: string): $LootPool;
        isFrozen(): boolean;
        freeze(): void;
        getRandomItems(params: $LootParams, seed: number, arg2: $Consumer_<$ItemStack>): void;
        getRandomItems(params: $LootParams, output: $Consumer_<$ItemStack>): void;
        getRandomItems(params: $LootParams, random: $RandomSource): $ObjectArrayList<$ItemStack>;
        /**
         * Generate random items to the given Consumer, ensuring they do not exceed their maximum stack size.
         */
        getRandomItems(contextData: $LootContext, output: $Consumer_<$ItemStack>): void;
        getRandomItems(params: $LootParams): $ObjectArrayList<$ItemStack>;
        getRandomItems(params: $LootParams, seed: number): $ObjectArrayList<$ItemStack>;
        getLootTableId(): $ResourceLocation;
        setLootTableId(arg0: $ResourceLocation_): void;
        lootjs$getPools(): $List<any>;
        /**
         * @deprecated
         */
        getRandomItemsRaw(params: $LootParams, output: $Consumer_<$ItemStack>): void;
        /**
         * @deprecated
         * Generate random items to the given Consumer, ensuring they do not exceed their maximum stack size.
         */
        getRandomItemsRaw(contextData: $LootContext, output: $Consumer_<$ItemStack>): void;
        /**
         * Get the parameter set for this LootTable.
         */
        lootjs$getParamSet(): $LootContextParamSet;
        lootjs$setParamSet(arg0: $LootContextParamSet): void;
        lootjs$setPools(arg0: $List_<any>): void;
        addPool(arg0: $LootPool): void;
        removePool(arg0: string): $LootPool;
        static createStackSplitter(level: $ServerLevel, output: $Consumer_<$ItemStack>): $Consumer<$ItemStack>;
        lootjs$getPostLootAction(): $PostLootAction;
        lootjs$createFunctionList(): $LootFunctionList;
        lootjs$getRandomSequence(): $ResourceLocation;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        lootjs$setPostLootAction(arg0: $PostLootAction_): void;
        lootjs$setRandomSequence(arg0: $ResourceLocation_ | null): void;
        /**
         * Get the parameter set for this LootTable.
         */
        getParamSet(): $LootContextParamSet;
        static lootTable(): $LootTable$Builder;
        getRandomSequence(): ($ResourceLocation) | undefined;
        bookshelf$pools(): $List<$LootPool>;
        fabric_getPools(): $List<$LootPool>;
        getPools(): $List<$LootPool>;
        fabric_getRandomSequenceId(): ($ResourceLocation) | undefined;
        bookshelf$randomSequence(): ($ResourceLocation) | undefined;
        bookshelf$functions(): $List<$LootItemFunction>;
        fabric_getFunctions(): $List<$LootItemFunction>;
        static CODEC: $Codec<$Holder<$LootTable>>;
        functions: $List<$LootItemFunction>;
        paramSet: $LootContextParamSet;
        static DEFAULT_PARAM_SET: $LootContextParamSet;
        pools: $List<$LootPool>;
        static DIRECT_CODEC: $Codec<$LootTable>;
        static RANDOMIZE_SEED: number;
        static EMPTY: $LootTable;
        randomSequence: ($ResourceLocation) | undefined;
        constructor(paramSet: $LootContextParamSet, randomSequence: ($ResourceLocation_) | undefined, pools: $List_<$LootPool>, functions: $List_<$LootItemFunction>);
        get frozen(): boolean;
    }
    export class $LootPool implements $LootUnificationHandler, $AccessorLootPool, $ILootPoolHooks, $LootPoolAccessor, $LootPoolExtension, $LootPoolAccessor$2, $LootPoolAccessor$1 {
        getName(): string;
        /**
         * Validate this LootPool according to the given context.
         */
        validate(context: $ValidationContext): void;
        setName(arg0: string): void;
        isFrozen(): boolean;
        freeze(): void;
        addRandomItems(stackConsumer: $Consumer_<$ItemStack>, context: $LootContext): void;
        setBonusRolls(arg0: $NumberProvider_): void;
        bookshelf$setHash(arg0: number): void;
        lootjs$setName(arg0: string): void;
        getBonusRolls(): $NumberProvider;
        bookshelf$getHash(): number;
        lootjs$getEntries(): $LootEntryList;
        setRolls(arg0: $NumberProvider_): void;
        static lootPool(): $LootPool$Builder;
        lootjs$asVanillaPool(): $LootPool;
        almostunified$unify(lookup: $UnificationLookup): boolean;
        lootjs$getConditions(): $LootConditionList;
        lootjs$getFunctions(): $LootFunctionList;
        bookshelf$matches(arg0: number): boolean;
        lootjs$collectDebugInfo(arg0: $DebugInfo): void;
        getEntries(): $List<$LootPoolEntryContainer>;
        functions(): $List<$LootItemFunction>;
        getConditions(): $List<$LootItemCondition>;
        bookshelf$rolls(): $NumberProvider;
        bookshelf$entries(): $List<$LootPoolEntryContainer>;
        fabric_getEntries(): $List<$LootPoolEntryContainer>;
        fabric_getRolls(): $NumberProvider;
        getRolls(): $NumberProvider;
        bookshelf$setEntries(arg0: $List_<$LootPoolEntryContainer>): void;
        bookshelf$conditions(): $List<$LootItemCondition>;
        fabric_getBonusRolls(): $NumberProvider;
        bookshelf$bonusRolls(): $NumberProvider;
        fabric_getFunctions(): $List<$LootItemFunction>;
        fabric_getConditions(): $List<$LootItemCondition>;
        getFunctions(): $List<$LootItemFunction>;
        compositeFunction: $BiFunction<$ItemStack, $LootContext, $ItemStack>;
        compositeCondition: $Predicate<$LootContext>;
        entries: $List<$LootPoolEntryContainer>;
        static CODEC: $Codec<$LootPool>;
        conditions: $List<$LootItemCondition>;
        rolls: $NumberProvider;
        bonusRolls: $NumberProvider;
        constructor(arg0: $List_<$LootPoolEntryContainer>, arg1: $List_<$LootItemCondition>, arg2: $List_<$LootItemFunction>, arg3: $NumberProvider_, arg4: $NumberProvider_, arg5: (string) | undefined);
        get frozen(): boolean;
    }
    export class $IntRange$IntChecker {
    }
    export interface $IntRange$IntChecker {
    }
    /**
     * Values that may be interpreted as {@link $IntRange$IntChecker}.
     */
    export type $IntRange$IntChecker_ = (() => void);
    export class $LootContext$Builder {
        create(sequence: ($ResourceLocation_) | undefined): $LootContext;
        getLevel(): $ServerLevel;
        withQueriedLootTableId(arg0: $ResourceLocation_): $LootContext$Builder;
        withOptionalRandomSeed(seed: number): $LootContext$Builder;
        withOptionalRandomSource(random: $RandomSource): $LootContext$Builder;
        constructor(params: $LootParams);
        constructor(arg0: $LootContext);
        get level(): $ServerLevel;
    }
    export class $LootContext$VisitedEntry<T> extends $Record {
        type(): $LootDataType<T>;
        value(): T;
        constructor(type: $LootDataType_<T>, value: T);
    }
    /**
     * Values that may be interpreted as {@link $LootContext$VisitedEntry}.
     */
    export type $LootContext$VisitedEntry_<T> = { value?: any, type?: $LootDataType_<any>,  } | [value?: any, type?: $LootDataType_<any>, ];
    /**
     * Stores IDs for built in loot tables, i.e. loot tables which are not based directly on a block or entity ID.
     */
    export class $BuiltInLootTables {
        static all(): $Set<$ResourceKey<$LootTable>>;
        static PANDA_SNEEZE: $ResourceKey<$LootTable>;
        static ANCIENT_CITY_ICE_BOX: $ResourceKey<$LootTable>;
        static PILLAGER_OUTPOST: $ResourceKey<$LootTable>;
        static SHEEP_CYAN: $ResourceKey<$LootTable>;
        static DESERT_WELL_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static CLERIC_GIFT: $ResourceKey<$LootTable>;
        static SHEEP_PURPLE: $ResourceKey<$LootTable>;
        static VILLAGE_SHEPHERD: $ResourceKey<$LootTable>;
        static STRONGHOLD_LIBRARY: $ResourceKey<$LootTable>;
        static SPAWNER_OMINOUS_TRIAL_CHAMBER_CONSUMABLES: $ResourceKey<$LootTable>;
        static BASTION_OTHER: $ResourceKey<$LootTable>;
        static SHEEP_BLACK: $ResourceKey<$LootTable>;
        static UNDERWATER_RUIN_BIG: $ResourceKey<$LootTable>;
        static OCEAN_RUIN_WARM_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static SHEEP_LIGHT_GRAY: $ResourceKey<$LootTable>;
        static RUINED_PORTAL: $ResourceKey<$LootTable>;
        static VILLAGE_TOOLSMITH: $ResourceKey<$LootTable>;
        static VILLAGE_BUTCHER: $ResourceKey<$LootTable>;
        static VILLAGE_WEAPONSMITH: $ResourceKey<$LootTable>;
        static SHEEP_LIGHT_BLUE: $ResourceKey<$LootTable>;
        static UNDERWATER_RUIN_SMALL: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_RARE: $ResourceKey<$LootTable>;
        static BURIED_TREASURE: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER_RANGED: $ResourceKey<$LootTable>;
        static SHIPWRECK_SUPPLY: $ResourceKey<$LootTable>;
        static SHEEP_YELLOW: $ResourceKey<$LootTable>;
        static ABANDONED_MINESHAFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_INTERSECTION_BARREL: $ResourceKey<$LootTable>;
        static FISHING_JUNK: $ResourceKey<$LootTable>;
        static SHEEP_GRAY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_WATER_DISPENSER: $ResourceKey<$LootTable>;
        static SHEEP_PINK: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_CHAMBER_KEY: $ResourceKey<$LootTable>;
        static VILLAGE_SAVANNA_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_UNIQUE: $ResourceKey<$LootTable>;
        static VILLAGE_MASON: $ResourceKey<$LootTable>;
        static FISHING: $ResourceKey<$LootTable>;
        static FISHERMAN_GIFT: $ResourceKey<$LootTable>;
        static BASTION_TREASURE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR: $ResourceKey<$LootTable>;
        static BUTCHER_GIFT: $ResourceKey<$LootTable>;
        static CAT_MORNING_GIFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_COMMON: $ResourceKey<$LootTable>;
        static VILLAGE_TANNERY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD: $ResourceKey<$LootTable>;
        static TRAIL_RUINS_ARCHAEOLOGY_RARE: $ResourceKey<$LootTable>;
        static TRAIL_RUINS_ARCHAEOLOGY_COMMON: $ResourceKey<$LootTable>;
        static BOGGED_SHEAR: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR_DISPENSER: $ResourceKey<$LootTable>;
        static DESERT_PYRAMID: $ResourceKey<$LootTable>;
        static SHEEP_BLUE: $ResourceKey<$LootTable>;
        static CARTOGRAPHER_GIFT: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_ENTRANCE: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER_MELEE: $ResourceKey<$LootTable>;
        static STRONGHOLD_CROSSING: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_UNIQUE: $ResourceKey<$LootTable>;
        static SHEEP_MAGENTA: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CHAMBER_DISPENSER: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_ITEMS_TO_DROP_WHEN_OMINOUS: $ResourceKey<$LootTable>;
        static DESERT_PYRAMID_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static SHEEP_RED: $ResourceKey<$LootTable>;
        static ARMORER_GIFT: $ResourceKey<$LootTable>;
        static MASON_GIFT: $ResourceKey<$LootTable>;
        static SHIPWRECK_TREASURE: $ResourceKey<$LootTable>;
        static FISHING_TREASURE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS_RARE: $ResourceKey<$LootTable>;
        static VILLAGE_ARMORER: $ResourceKey<$LootTable>;
        static SIMPLE_DUNGEON: $ResourceKey<$LootTable>;
        static NETHER_BRIDGE: $ResourceKey<$LootTable>;
        static JUNGLE_TEMPLE_DISPENSER: $ResourceKey<$LootTable>;
        static EQUIPMENT_TRIAL_CHAMBER: $ResourceKey<$LootTable>;
        static VILLAGE_CARTOGRAPHER: $ResourceKey<$LootTable>;
        static FARMER_GIFT: $ResourceKey<$LootTable>;
        static END_CITY_TREASURE: $ResourceKey<$LootTable>;
        static JUNGLE_TEMPLE: $ResourceKey<$LootTable>;
        static FISHING_FISH: $ResourceKey<$LootTable>;
        static ANCIENT_CITY: $ResourceKey<$LootTable>;
        static SNIFFER_DIGGING: $ResourceKey<$LootTable>;
        static SPAWNER_TRIAL_CHAMBER_CONSUMABLES: $ResourceKey<$LootTable>;
        static FLETCHER_GIFT: $ResourceKey<$LootTable>;
        static SHEEP_GREEN: $ResourceKey<$LootTable>;
        static SHEEP_ORANGE: $ResourceKey<$LootTable>;
        static BASTION_BRIDGE: $ResourceKey<$LootTable>;
        static OCEAN_RUIN_COLD_ARCHAEOLOGY: $ResourceKey<$LootTable>;
        static WOODLAND_MANSION: $ResourceKey<$LootTable>;
        static PIGLIN_BARTERING: $ResourceKey<$LootTable>;
        static SPAWN_BONUS_CHEST: $ResourceKey<$LootTable>;
        static SHEEP_BROWN: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_SUPPLY: $ResourceKey<$LootTable>;
        static VILLAGE_DESERT_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_OMINOUS: $ResourceKey<$LootTable>;
        static EMPTY: $ResourceKey<$LootTable>;
        static SHIPWRECK_MAP: $ResourceKey<$LootTable>;
        static SHEPHERD_GIFT: $ResourceKey<$LootTable>;
        static STRONGHOLD_CORRIDOR: $ResourceKey<$LootTable>;
        static LIBRARIAN_GIFT: $ResourceKey<$LootTable>;
        static BASTION_HOGLIN_STABLE: $ResourceKey<$LootTable>;
        static VILLAGE_FLETCHER: $ResourceKey<$LootTable>;
        static VILLAGE_TEMPLE: $ResourceKey<$LootTable>;
        static SHEEP_LIME: $ResourceKey<$LootTable>;
        static IGLOO_CHEST: $ResourceKey<$LootTable>;
        static SHEEP_WHITE: $ResourceKey<$LootTable>;
        static TOOLSMITH_GIFT: $ResourceKey<$LootTable>;
        static WEAPONSMITH_GIFT: $ResourceKey<$LootTable>;
        static VILLAGE_SNOWY_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_REWARD_COMMON: $ResourceKey<$LootTable>;
        static SPAWNER_OMINOUS_TRIAL_CHAMBER_KEY: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_CORRIDOR_POT: $ResourceKey<$LootTable>;
        static VILLAGE_TAIGA_HOUSE: $ResourceKey<$LootTable>;
        static VILLAGE_FISHER: $ResourceKey<$LootTable>;
        static VILLAGE_PLAINS_HOUSE: $ResourceKey<$LootTable>;
        static TRIAL_CHAMBERS_INTERSECTION: $ResourceKey<$LootTable>;
        static LEATHERWORKER_GIFT: $ResourceKey<$LootTable>;
        constructor();
    }
}
