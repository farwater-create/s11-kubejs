import { $JsonObject_ } from "@package/com/google/gson";
import { $NumberProvider, $NumberProvider_ } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EquipmentSlot_, $Entity } from "@package/net/minecraft/world/entity";
import { $ModifyLootAction$Callback_ } from "@package/com/almostreliable/lootjs/loot/modifier/handler";
import { $List, $Map_, $Collection_, $List_ } from "@package/java/util";
import { $LootFunctionsContainer, $LootConditionsContainer, $LootActionContainer, $AddAttributesFunction$Builder } from "@package/com/almostreliable/lootjs/loot";
import { $Predicate, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Holder_, $HolderSet_, $BlockPos_ } from "@package/net/minecraft/core";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $LootBucket } from "@package/com/almostreliable/lootjs/core";
import { $ItemFilter, $ItemFilter_ } from "@package/com/almostreliable/lootjs/core/filters";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $Explosion$BlockInteraction_ } from "@package/net/minecraft/world/level";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $SetEnchantmentsFunction$Builder, $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $DistancePredicate_, $StatePropertiesPredicate_, $DamageSourcePredicate_, $ItemPredicate_, $EntityPredicate_, $MinMaxBounds$Doubles_, $LocationPredicate_ } from "@package/net/minecraft/advancements/critereon";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $LootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $MutableLootPool } from "@package/com/almostreliable/lootjs/loot/table";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as handler from "@package/com/almostreliable/lootjs/loot/modifier/handler";

declare module "@package/com/almostreliable/lootjs/loot/modifier" {
    export class $LootAction {
    }
    export interface $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
    }
    /**
     * Values that may be interpreted as {@link $LootAction}.
     */
    export type $LootAction_ = ((arg0: $LootContext, arg1: $LootBucket) => void);
    export class $GroupedLootAction$Builder implements $LootConditionsContainer<$GroupedLootAction$Builder>, $LootFunctionsContainer<$GroupedLootAction$Builder>, $LootActionContainer<$GroupedLootAction$Builder> {
        build(): $GroupedLootAction;
        rolls(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        addCondition(arg0: $LootItemCondition): $GroupedLootAction$Builder;
        addFunction(arg0: $LootItemFunction): $GroupedLootAction$Builder;
        addAction(arg0: $LootAction_): $GroupedLootAction$Builder;
        containsLoot(arg0: $ItemFilter_, arg1: boolean): $GroupedLootAction$Builder;
        containsLoot(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchLocation(arg0: $BlockPos_, arg1: $LocationPredicate_): $GroupedLootAction$Builder;
        matchLocation(arg0: $LocationPredicate_): $GroupedLootAction$Builder;
        blockEntity(arg0: $Predicate_<$BlockEntity>): $GroupedLootAction$Builder;
        randomChance(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        survivesExplosion(): $GroupedLootAction$Builder;
        killedByPlayer(): $GroupedLootAction$Builder;
        matchTool(arg0: $ItemPredicate_): $GroupedLootAction$Builder;
        randomChanceWithEnchantment(arg0: $Holder_<$Enchantment>, arg1: number[]): $GroupedLootAction$Builder;
        matchCustomCondition(arg0: $JsonObject_): $GroupedLootAction$Builder;
        matchAnyInventorySlot(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchDirectAttackerCustom(arg0: $Predicate_<$Entity>): $GroupedLootAction$Builder;
        matchDirectAttacker(arg0: $EntityPredicate_): $GroupedLootAction$Builder;
        matchAttackerCustom(arg0: $Predicate_<$Entity>): $GroupedLootAction$Builder;
        luck(arg0: $MinMaxBounds$Doubles_): $GroupedLootAction$Builder;
        matchHead(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchFeet(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchEquip(arg0: $EquipmentSlot_, arg1: $ItemFilter_): $GroupedLootAction$Builder;
        matchChest(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchTime(arg0: number, arg1: number): $GroupedLootAction$Builder;
        matchTime(arg0: number, arg1: number, arg2: number): $GroupedLootAction$Builder;
        matchBiome(arg0: $HolderSet_<$Biome>): $GroupedLootAction$Builder;
        matchAnyOf(...arg0: $LootItemCondition[]): $GroupedLootAction$Builder;
        matchAllOf(...arg0: $LootItemCondition[]): $GroupedLootAction$Builder;
        matchLegs(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchBlock(arg0: $Block, arg1: $StatePropertiesPredicate_): $GroupedLootAction$Builder;
        matchBlock(arg0: $Block): $GroupedLootAction$Builder;
        matchMainHand(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchOffHand(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchPlayerCustom(arg0: $Predicate_<$ServerPlayer>): $GroupedLootAction$Builder;
        matchDistance(arg0: $DistancePredicate_): $GroupedLootAction$Builder;
        hasAnyStage(...arg0: string[]): $GroupedLootAction$Builder;
        matchDamageSource(arg0: $DamageSourcePredicate_): $GroupedLootAction$Builder;
        matchWeather(arg0: boolean | null, arg1: boolean | null): $GroupedLootAction$Builder;
        matchPlayer(arg0: $EntityPredicate_): $GroupedLootAction$Builder;
        matchEntity(arg0: $EntityPredicate_): $GroupedLootAction$Builder;
        randomTableBonus(arg0: $Holder_<$Enchantment>, arg1: number[]): $GroupedLootAction$Builder;
        matchDimension(...arg0: $ResourceLocation_[]): $GroupedLootAction$Builder;
        matchEntityCustom(arg0: $Predicate_<$Entity>): $GroupedLootAction$Builder;
        matchAttacker(arg0: $EntityPredicate_): $GroupedLootAction$Builder;
        matchAnyHotbarSlot(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        matchStructure(arg0: $HolderSet_<$Structure>): $GroupedLootAction$Builder;
        matchStructure(arg0: $HolderSet_<$Structure>, arg1: boolean): $GroupedLootAction$Builder;
        isLightLevel(arg0: number, arg1: number): $GroupedLootAction$Builder;
        setName(arg0: $Component_): $GroupedLootAction$Builder;
        addAttributes(arg0: $Consumer_<$AddAttributesFunction$Builder>): $GroupedLootAction$Builder;
        addPotion(arg0: $Potion): $GroupedLootAction$Builder;
        applyBonus(arg0: $Holder_<$Enchantment>, arg1: number): $GroupedLootAction$Builder;
        addLore(...arg0: $Component_[]): $GroupedLootAction$Builder;
        setCount(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        limitCount(arg0: $NumberProvider_ | null, arg1: $NumberProvider_ | null): $GroupedLootAction$Builder;
        enchant(arg0: $Consumer_<$SetEnchantmentsFunction$Builder>): $GroupedLootAction$Builder;
        enchant(arg0: boolean, arg1: $Consumer_<$SetEnchantmentsFunction$Builder>): $GroupedLootAction$Builder;
        damage(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        setCustomData(arg0: $CompoundTag_): $GroupedLootAction$Builder;
        enchantWithLevels(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        applyBinomialDistributionBonus(arg0: $Holder_<$Enchantment>, arg1: number, arg2: number): $GroupedLootAction$Builder;
        simulateExplosionDecay(): $GroupedLootAction$Builder;
        applyEnchantmentBonus(arg0: $Holder_<$Enchantment>, arg1: $NumberProvider_): $GroupedLootAction$Builder;
        applyEnchantmentBonus(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        smelt(): $GroupedLootAction$Builder;
        applyOreBonus(arg0: $Holder_<$Enchantment>): $GroupedLootAction$Builder;
        toggleTooltips(arg0: $Map_<string, boolean>): $GroupedLootAction$Builder;
        enchantRandomly(): $GroupedLootAction$Builder;
        enchantRandomly(arg0: $HolderSet_<$Enchantment>): $GroupedLootAction$Builder;
        jsonFunction(arg0: $JsonObject_): $GroupedLootAction$Builder;
        replaceLore(...arg0: $Component_[]): $GroupedLootAction$Builder;
        group(arg0: $Consumer_<$GroupedLootAction$Builder>): $GroupedLootAction$Builder;
        group(arg0: $ItemFilter_, arg1: $Consumer_<$GroupedLootAction$Builder>): $GroupedLootAction$Builder;
        pool(arg0: $Consumer_<$MutableLootPool>): $GroupedLootAction$Builder;
        modifyLoot(arg0: $ItemFilter_, arg1: $ModifyLootAction$Callback_): $GroupedLootAction$Builder;
        dropExperience(arg0: $NumberProvider_): $GroupedLootAction$Builder;
        addLoot(...arg0: $LootEntry[]): $GroupedLootAction$Builder;
        removeLoot(arg0: $ItemFilter_): $GroupedLootAction$Builder;
        triggerLightningStrike(arg0: boolean): $GroupedLootAction$Builder;
        addAlternativesLoot(...arg0: $LootEntry[]): $GroupedLootAction$Builder;
        triggerExplosion(arg0: number, arg1: $Explosion$BlockInteraction_, arg2: boolean): $GroupedLootAction$Builder;
        triggerExplosion(arg0: number, arg1: boolean, arg2: boolean): $GroupedLootAction$Builder;
        playerAction(arg0: $Consumer_<$ServerPlayer>): $GroupedLootAction$Builder;
        customAction(arg0: $LootAction_): $GroupedLootAction$Builder;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean): $GroupedLootAction$Builder;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry): $GroupedLootAction$Builder;
        replaceLoot(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean, arg3: $DataComponentType<never>[]): $GroupedLootAction$Builder;
        addSequenceLoot(...arg0: $LootEntry[]): $GroupedLootAction$Builder;
        constructor(arg0: $ItemFilter_);
        constructor();
        set name(value: $Component_);
        set count(value: $NumberProvider_);
        set customData(value: $CompoundTag_);
    }
    export class $LootModifier$Builder extends $GroupedLootAction$Builder {
        name(arg0: string): $LootModifier$Builder;
        build(): $LootModifier;
        constructor(arg0: $Predicate_<$LootContext>, arg1: string);
    }
    export class $GroupedLootAction implements $LootAction {
        apply(arg0: $LootContext, arg1: $LootBucket): void;
        exact(): boolean;
        actions(): $List<$LootAction>;
        functions(): $List<$LootItemFunction>;
        conditions(): $List<$LootItemCondition>;
        rolls(): $NumberProvider;
        containsLootFilter(): $ItemFilter;
        constructor(arg0: $NumberProvider_, arg1: $List_<$LootItemCondition>, arg2: $List_<$LootItemFunction>, arg3: $Collection_<$LootAction_>, arg4: $ItemFilter_ | null, arg5: boolean);
    }
    export class $LootModifier extends $GroupedLootAction {
        name(): string;
        run(arg0: $LootContext, arg1: $LootBucket): void;
        runPredicate(): $Predicate<$LootContext>;
        constructor(arg0: $Predicate_<$LootContext>, arg1: $NumberProvider_, arg2: $List_<$LootItemCondition>, arg3: $List_<$LootItemFunction>, arg4: $Collection_<$LootAction_>, arg5: string, arg6: $ItemFilter_, arg7: boolean);
    }
}
