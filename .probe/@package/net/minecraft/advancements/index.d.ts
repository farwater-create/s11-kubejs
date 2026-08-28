import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ExistingFileHelper } from "@package/net/neoforged/neoforge/common/data";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $PlayerAdvancements } from "@package/net/minecraft/server";
import { $DataResult, $Codec } from "@package/com/mojang/serialization";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ImmutableMap$Builder } from "@package/com/google/common/collect";
import { $Set_, $Map, $Set, $List, $Map_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $StringRepresentable, $ProblemReporter } from "@package/net/minecraft/util";
import { $DistanceTrigger, $EffectsChangedTrigger, $UsedEnderEyeTrigger, $EnterBlockTrigger, $BredAnimalsTrigger, $SlideDownBlockTrigger, $LootTableTrigger, $BrewedPotionTrigger, $ShotCrossbowTrigger, $TameAnimalTrigger, $FilledBucketTrigger, $PlayerHurtEntityTrigger, $KilledTrigger, $PickedUpItemTrigger, $PlayerInteractTrigger, $EntityHurtPlayerTrigger, $SummonedEntityTrigger, $UsingItemTrigger, $RecipeCraftedTrigger, $StartRidingTrigger, $AnyBlockInteractionTrigger, $ConsumeItemTrigger, $ChangeDimensionTrigger, $PlayerTrigger, $ImpossibleTrigger, $DefaultBlockInteractionTrigger, $InventoryChangeTrigger, $ItemDurabilityTrigger, $ConstructBeaconTrigger, $UsedTotemTrigger, $CriterionValidator, $FallAfterExplosionTrigger, $BeeNestDestroyedTrigger, $KilledByCrossbowTrigger, $RecipeUnlockedTrigger, $EnchantedItemTrigger, $CuredZombieVillagerTrigger, $LevitationTrigger, $LightningStrikeTrigger, $TradeTrigger, $ItemUsedOnLocationTrigger, $ChanneledLightningTrigger, $TargetBlockTrigger, $FishingRodHookedTrigger } from "@package/net/minecraft/advancements/critereon";
import { $CacheableFunction } from "@package/net/minecraft/commands";
import { $Instant } from "@package/java/time";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Registry, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $IAdvancementBuilderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $WithConditions } from "@package/net/neoforged/neoforge/common/conditions";
import { $AdvancementNodeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Enum, $Comparable, $Iterable, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as critereon from "@package/net/minecraft/advancements/critereon";

declare module "@package/net/minecraft/advancements" {
    export class $Advancement$Builder implements $IAdvancementBuilderExtension {
        /**
         * @deprecated
         */
        parent(parentId: $ResourceLocation_): $Advancement$Builder;
        parent(parent: $AdvancementHolder_): $Advancement$Builder;
        save(output: $Consumer_<$AdvancementHolder>, id: string): $AdvancementHolder;
        display(display: $DisplayInfo): $Advancement$Builder;
        display(icon: $ItemStack_, title: $Component_, description: $Component_, background: $ResourceLocation_ | null, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean): $Advancement$Builder;
        display(icon: $ItemLike_, title: $Component_, description: $Component_, background: $ResourceLocation_ | null, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean): $Advancement$Builder;
        build(id: $ResourceLocation_): $AdvancementHolder;
        requirements(requirementsStrategy: $AdvancementRequirements$Strategy_): $Advancement$Builder;
        requirements(requirements: $AdvancementRequirements_): $Advancement$Builder;
        static recipeAdvancement(): $Advancement$Builder;
        addCriterion(key: string, criterion: $Criterion_<never>): $Advancement$Builder;
        sendsTelemetryEvent(): $Advancement$Builder;
        static advancement(): $Advancement$Builder;
        rewards(rewardsBuilder: $AdvancementRewards$Builder): $Advancement$Builder;
        rewards(rewards: $AdvancementRewards_): $Advancement$Builder;
        /**
         * Saves this builder with the given id using the `ExistingFileHelper` to check if the parent is already known.
         */
        save(saver: $Consumer_<$AdvancementHolder>, id: $ResourceLocation_, fileHelper: $ExistingFileHelper): $AdvancementHolder;
        criteria: $ImmutableMap$Builder<string, $Criterion<never>>;
        constructor();
    }
    export class $AdvancementRequirements$Strategy {
        static OR: $AdvancementRequirements$Strategy;
        static AND: $AdvancementRequirements$Strategy;
    }
    export interface $AdvancementRequirements$Strategy {
        create(criteria: $Collection_<string>): $AdvancementRequirements;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRequirements$Strategy}.
     */
    export type $AdvancementRequirements$Strategy_ = ((arg0: $Collection<string>) => $AdvancementRequirements_);
    export class $CriterionTrigger<T extends $CriterionTriggerInstance> {
    }
    export interface $CriterionTrigger<T extends $CriterionTriggerInstance> {
        codec(): $Codec<T>;
        createCriterion(triggerInstance: T): $Criterion<T>;
        addPlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
        removePlayerListeners(playerAdvancements: $PlayerAdvancements): void;
        removePlayerListener(playerAdvancements: $PlayerAdvancements, listener: $CriterionTrigger$Listener_<T>): void;
    }
    export class $CriteriaTriggers {
        static register<T extends $CriterionTrigger<never>>(name: string, trigger: T): T;
        static bootstrap(registry: $Registry<$CriterionTrigger<never>>): $CriterionTrigger<never>;
        static ENCHANTED_ITEM: $EnchantedItemTrigger;
        static TRADE: $TradeTrigger;
        static DEFAULT_BLOCK_USE: $DefaultBlockInteractionTrigger;
        static RECIPE_CRAFTED: $RecipeCraftedTrigger;
        static KILLED_BY_CROSSBOW: $KilledByCrossbowTrigger;
        static TAME_ANIMAL: $TameAnimalTrigger;
        static CHANGED_DIMENSION: $ChangeDimensionTrigger;
        static ITEM_DURABILITY_CHANGED: $ItemDurabilityTrigger;
        static ENTITY_KILLED_PLAYER: $KilledTrigger;
        static AVOID_VIBRATION: $PlayerTrigger;
        static BREWED_POTION: $BrewedPotionTrigger;
        static PLAYER_HURT_ENTITY: $PlayerHurtEntityTrigger;
        static ALLAY_DROP_ITEM_ON_BLOCK: $ItemUsedOnLocationTrigger;
        static RAID_WIN: $PlayerTrigger;
        static SHOT_CROSSBOW: $ShotCrossbowTrigger;
        static RIDE_ENTITY_IN_LAVA_TRIGGER: $DistanceTrigger;
        static NETHER_TRAVEL: $DistanceTrigger;
        static BEE_NEST_DESTROYED: $BeeNestDestroyedTrigger;
        static KILL_MOB_NEAR_SCULK_CATALYST: $KilledTrigger;
        static CRAFTER_RECIPE_CRAFTED: $RecipeCraftedTrigger;
        static CODEC: $Codec<$CriterionTrigger<never>>;
        static FILLED_BUCKET: $FilledBucketTrigger;
        static LIGHTNING_STRIKE: $LightningStrikeTrigger;
        static ENTITY_HURT_PLAYER: $EntityHurtPlayerTrigger;
        static RAID_OMEN: $PlayerTrigger;
        static ANY_BLOCK_USE: $AnyBlockInteractionTrigger;
        static SUMMONED_ENTITY: $SummonedEntityTrigger;
        static TICK: $PlayerTrigger;
        static ITEM_USED_ON_BLOCK: $ItemUsedOnLocationTrigger;
        static TARGET_BLOCK_HIT: $TargetBlockTrigger;
        static EFFECTS_CHANGED: $EffectsChangedTrigger;
        static PLAYER_KILLED_ENTITY: $KilledTrigger;
        static LOCATION: $PlayerTrigger;
        static GENERATE_LOOT: $LootTableTrigger;
        static PLAYER_INTERACTED_WITH_ENTITY: $PlayerInteractTrigger;
        static THROWN_ITEM_PICKED_UP_BY_PLAYER: $PickedUpItemTrigger;
        static RECIPE_UNLOCKED: $RecipeUnlockedTrigger;
        static BRED_ANIMALS: $BredAnimalsTrigger;
        static INVENTORY_CHANGED: $InventoryChangeTrigger;
        static SLEPT_IN_BED: $PlayerTrigger;
        static IMPOSSIBLE: $ImpossibleTrigger;
        static USED_TOTEM: $UsedTotemTrigger;
        static CONSUME_ITEM: $ConsumeItemTrigger;
        static PLACED_BLOCK: $ItemUsedOnLocationTrigger;
        static CURED_ZOMBIE_VILLAGER: $CuredZombieVillagerTrigger;
        static USED_ENDER_EYE: $UsedEnderEyeTrigger;
        static START_RIDING_TRIGGER: $StartRidingTrigger;
        static HONEY_BLOCK_SLIDE: $SlideDownBlockTrigger;
        static CONSTRUCT_BEACON: $ConstructBeaconTrigger;
        static ENTER_BLOCK: $EnterBlockTrigger;
        static FISHING_ROD_HOOKED: $FishingRodHookedTrigger;
        static LEVITATION: $LevitationTrigger;
        static CHANNELED_LIGHTNING: $ChanneledLightningTrigger;
        static FALL_AFTER_EXPLOSION: $FallAfterExplosionTrigger;
        static THROWN_ITEM_PICKED_UP_BY_ENTITY: $PickedUpItemTrigger;
        static USING_ITEM: $UsingItemTrigger;
        static FALL_FROM_HEIGHT: $DistanceTrigger;
        constructor();
    }
    export class $AdvancementTree {
        remove(advancements: $Set_<$ResourceLocation_>): void;
        get(id: $ResourceLocation_): $AdvancementNode;
        get(advancement: $AdvancementHolder_): $AdvancementNode;
        clear(): void;
        addAll(advancements: $Collection_<$AdvancementHolder_>): void;
        roots(): $Iterable<$AdvancementNode>;
        nodes(): $Collection<$AdvancementNode>;
        setListener(listener: $AdvancementTree$Listener | null): void;
        constructor();
        set listener(value: $AdvancementTree$Listener | null);
    }
    export class $CriterionProgress {
        isDone(): boolean;
        grant(): void;
        static fromNetwork(buffer: $FriendlyByteBuf): $CriterionProgress;
        serializeToNetwork(buffer: $FriendlyByteBuf): void;
        revoke(): void;
        getObtained(): $Instant;
        constructor();
        constructor(obtained: $Instant);
        get done(): boolean;
        get obtained(): $Instant;
    }
    export class $AdvancementRewards$Builder {
        /**
         * Adds the given recipe to the rewards.
         */
        static "function"(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        build(): $AdvancementRewards;
        /**
         * Adds the given recipe to the rewards.
         */
        static recipe(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        static loot(lootTable: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        /**
         * Adds the given recipe to the rewards.
         */
        runs(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        /**
         * Adds the given amount of experience. (Not a direct setter)
         */
        static experience(experience: number): $AdvancementRewards$Builder;
        /**
         * Adds the given recipe to the rewards.
         */
        addRecipe(recipeId: $ResourceLocation_): $AdvancementRewards$Builder;
        addLootTable(lootTable: $ResourceKey_<$LootTable>): $AdvancementRewards$Builder;
        /**
         * Adds the given amount of experience. (Not a direct setter)
         */
        addExperience(experience: number): $AdvancementRewards$Builder;
        constructor();
    }
    export class $AdvancementTree$Listener {
    }
    export interface $AdvancementTree$Listener {
        onAdvancementsCleared(): void;
        onRemoveAdvancementTask(advancement: $AdvancementNode): void;
        onAddAdvancementTask(advancement: $AdvancementNode): void;
        onRemoveAdvancementRoot(advancement: $AdvancementNode): void;
        onAddAdvancementRoot(advancement: $AdvancementNode): void;
    }
    export class $Criterion<T extends $CriterionTriggerInstance> extends $Record {
        trigger(): $CriterionTrigger<T>;
        triggerInstance(): T;
        static CODEC: $Codec<$Criterion<never>>;
        constructor(arg0: $CriterionTrigger<T>, arg1: T);
    }
    /**
     * Values that may be interpreted as {@link $Criterion}.
     */
    export type $Criterion_<T> = { trigger?: $CriterionTrigger<$CriterionTriggerInstance_>, triggerInstance?: $CriterionTriggerInstance_,  } | [trigger?: $CriterionTrigger<$CriterionTriggerInstance_>, triggerInstance?: $CriterionTriggerInstance_, ];
    export class $Advancement extends $Record {
        name(): ($Component) | undefined;
        static name(advancement: $AdvancementHolder_): $Component;
        parent(): ($ResourceLocation) | undefined;
        validate(reporter: $ProblemReporter, lootData: $HolderGetter$Provider_): void;
        display(): ($DisplayInfo) | undefined;
        isRoot(): boolean;
        criteria(): $Map<string, $Criterion<never>>;
        requirements(): $AdvancementRequirements;
        sendsTelemetryEvent(): boolean;
        rewards(): $AdvancementRewards;
        static CODEC: $Codec<$Advancement>;
        static CONDITIONAL_CODEC: $Codec<($WithConditions<$Advancement>) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Advancement>;
        constructor(parent: ($ResourceLocation_) | undefined, display: ($DisplayInfo) | undefined, rewards: $AdvancementRewards_, criteria: $Map_<string, $Criterion_<never>>, requirements: $AdvancementRequirements_, sendsTelemetryEvent: boolean);
        constructor(parent: ($ResourceLocation_) | undefined, display: ($DisplayInfo) | undefined, rewards: $AdvancementRewards_, criteria: $Map_<string, $Criterion_<never>>, requirements: $AdvancementRequirements_, sendsTelemetryEvent: boolean, name: ($Component_) | undefined);
        get root(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Advancement}.
     */
    export type $Advancement_ = { parent?: ($ResourceLocation_) | undefined, display?: ($DisplayInfo) | undefined, rewards?: $AdvancementRewards_, name?: ($Component_) | undefined, requirements?: $AdvancementRequirements_, sendsTelemetryEvent?: boolean, criteria?: $Map_<string, $Criterion_<never>>,  } | [parent?: ($ResourceLocation_) | undefined, display?: ($DisplayInfo) | undefined, rewards?: $AdvancementRewards_, name?: ($Component_) | undefined, requirements?: $AdvancementRequirements_, sendsTelemetryEvent?: boolean, criteria?: $Map_<string, $Criterion_<never>>, ];
    export class $AdvancementRequirements extends $Record {
        size(): number;
        test(predicate: $Predicate_<string>): boolean;
        isEmpty(): boolean;
        count(filter: $Predicate_<string>): number;
        validate(requirements: $Set_<string>): $DataResult<$AdvancementRequirements>;
        write(buffer: $FriendlyByteBuf): void;
        names(): $Set<string>;
        static allOf(requirements: $Collection_<string>): $AdvancementRequirements;
        requirements(): $List<$List<string>>;
        static anyOf(requirements: $Collection_<string>): $AdvancementRequirements;
        static CODEC: $Codec<$AdvancementRequirements>;
        static EMPTY: $AdvancementRequirements;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$List_<string>>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRequirements}.
     */
    export type $AdvancementRequirements_ = { requirements?: $List_<$List_<string>>,  } | [requirements?: $List_<$List_<string>>, ];
    export class $AdvancementRewards extends $Record {
        "function"(): ($CacheableFunction) | undefined;
        loot(): $List<$ResourceKey<$LootTable>>;
        grant(player: $ServerPlayer): void;
        experience(): number;
        recipes(): $List<$ResourceLocation>;
        static CODEC: $Codec<$AdvancementRewards>;
        static EMPTY: $AdvancementRewards;
        constructor(experience: number, loot: $List_<$ResourceKey_<$LootTable>>, recipes: $List_<$ResourceLocation_>, arg3: ($CacheableFunction) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $AdvancementRewards}.
     */
    export type $AdvancementRewards_ = { recipes?: $List_<$ResourceLocation_>, function?: ($CacheableFunction) | undefined, loot?: $List_<$ResourceKey_<$LootTable>>, experience?: number,  } | [recipes?: $List_<$ResourceLocation_>, function?: ($CacheableFunction) | undefined, loot?: $List_<$ResourceKey_<$LootTable>>, experience?: number, ];
    export class $CriterionTrigger$Listener<T extends $CriterionTriggerInstance> extends $Record {
        run(playerAdvancements: $PlayerAdvancements): void;
        trigger(): T;
        advancement(): $AdvancementHolder;
        criterion(): string;
        constructor(arg0: T, arg1: $AdvancementHolder_, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $CriterionTrigger$Listener}.
     */
    export type $CriterionTrigger$Listener_<T> = { trigger?: $CriterionTriggerInstance_, advancement?: $AdvancementHolder_, criterion?: string,  } | [trigger?: $CriterionTriggerInstance_, advancement?: $AdvancementHolder_, criterion?: string, ];
    export class $AdvancementType extends $Enum<$AdvancementType> implements $StringRepresentable {
        static values(): $AdvancementType[];
        static valueOf(arg0: string): $AdvancementType;
        getDisplayName(): $Component;
        getSerializedName(): string;
        getChatColor(): $ChatFormatting;
        createAnnouncement(advancement: $AdvancementHolder_, player: $ServerPlayer): $MutableComponent;
        getRemappedEnumConstantName(): string;
        static CHALLENGE: $AdvancementType;
        static TASK: $AdvancementType;
        static GOAL: $AdvancementType;
        static CODEC: $Codec<$AdvancementType>;
        get displayName(): $Component;
        get serializedName(): string;
        get chatColor(): $ChatFormatting;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AdvancementType}.
     */
    export type $AdvancementType_ = "task" | "challenge" | "goal";
    export class $AdvancementProgress implements $Comparable<$AdvancementProgress> {
        compareTo(other: $AdvancementProgress): number;
        update(requirements: $AdvancementRequirements_): void;
        isDone(): boolean;
        getPercent(): number;
        getRemainingCriteria(): $Iterable<string>;
        getCompletedCriteria(): $Iterable<string>;
        hasProgress(): boolean;
        static fromNetwork(buffer: $FriendlyByteBuf): $AdvancementProgress;
        getCriterion(criterionName: string): $CriterionProgress;
        serializeToNetwork(buffer: $FriendlyByteBuf): void;
        revokeProgress(criterionName: string): boolean;
        grantProgress(criterionName: string): boolean;
        getFirstProgressDate(): $Instant;
        getProgressText(): $Component;
        static CODEC: $Codec<$AdvancementProgress>;
        constructor();
        get done(): boolean;
        get percent(): number;
        get remainingCriteria(): $Iterable<string>;
        get completedCriteria(): $Iterable<string>;
        get firstProgressDate(): $Instant;
        get progressText(): $Component;
    }
    export class $DisplayInfo {
        isHidden(): boolean;
        getType(): $AdvancementType;
        getIcon(): $ItemStack;
        getX(): number;
        getDescription(): $Component;
        setLocation(x: number, y: number): void;
        getY(): number;
        getTitle(): $Component;
        getBackground(): ($ResourceLocation) | undefined;
        shouldAnnounceChat(): boolean;
        shouldShowToast(): boolean;
        static CODEC: $Codec<$DisplayInfo>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DisplayInfo>;
        constructor(icon: $ItemStack_, title: $Component_, description: $Component_, background: ($ResourceLocation_) | undefined, type: $AdvancementType_, showToast: boolean, announceChat: boolean, hidden: boolean);
        get hidden(): boolean;
        get type(): $AdvancementType;
        get icon(): $ItemStack;
        get x(): number;
        get description(): $Component;
        get y(): number;
        get title(): $Component;
        get background(): ($ResourceLocation) | undefined;
    }
    export class $AdvancementNode implements $AdvancementNodeKJS {
        parent(): $AdvancementNode;
        root(): $AdvancementNode;
        holder(): $AdvancementHolder;
        static getRoot(node: $AdvancementNode): $AdvancementNode;
        children(): $Iterable<$AdvancementNode>;
        addChild(child: $AdvancementNode): void;
        advancement(): $Advancement;
        getTitle(): $Component;
        getId(): $ResourceLocation;
        self(): $AdvancementNode;
        getChildren(): $Set<$AdvancementNode>;
        getDisplayText(): $Component;
        getDisplay(): $DisplayInfo;
        getParent(): $AdvancementNode;
        addChild(child: $AdvancementNode): void;
        getDescription(): $Component;
        hasDisplay(): boolean;
        constructor(holder: $AdvancementHolder_, parent: $AdvancementNode | null);
        get title(): $Component;
        get id(): $ResourceLocation;
        get displayText(): $Component;
        get display(): $DisplayInfo;
        get description(): $Component;
    }
    export class $TreeNodePosition {
        static run(rootNode: $AdvancementNode): void;
        constructor(node: $AdvancementNode, parent: $TreeNodePosition | null, previousSibling: $TreeNodePosition | null, childIndex: number, x: number);
    }
    export class $AdvancementHolder extends $Record {
        value(): $Advancement;
        id(): $ResourceLocation;
        static LIST_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $List<$AdvancementHolder>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AdvancementHolder>;
        constructor(arg0: $ResourceLocation_, arg1: $Advancement_);
    }
    /**
     * Values that may be interpreted as {@link $AdvancementHolder}.
     */
    export type $AdvancementHolder_ = { id?: $ResourceLocation_, value?: $Advancement_,  } | [id?: $ResourceLocation_, value?: $Advancement_, ];
    export class $CriterionTriggerInstance {
    }
    export interface $CriterionTriggerInstance {
        validate(validator: $CriterionValidator): void;
    }
    /**
     * Values that may be interpreted as {@link $CriterionTriggerInstance}.
     */
    export type $CriterionTriggerInstance_ = ((arg0: $CriterionValidator) => void);
}
