import { $TagKey } from "@package/net/minecraft/tags";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $NumberProvider } from "@package/net/minecraft/world/level/storage/loot/providers/number";
import { $Item } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItem, $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $LootItemFunction } from "@package/net/minecraft/world/level/storage/loot/functions";
import { $List, $List_ } from "@package/java/util";
import { $LootTable, $LootPool } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/darkhax/bookshelf/common/mixin/access/loot" {
    export class $AccessorLootPool {
    }
    export interface $AccessorLootPool {
        functions(): $List<$LootItemFunction>;
        bookshelf$rolls(): $NumberProvider;
        bookshelf$entries(): $List<$LootPoolEntryContainer>;
        bookshelf$setEntries(arg0: $List_<$LootPoolEntryContainer>): void;
        bookshelf$conditions(): $List<$LootItemCondition>;
        bookshelf$bonusRolls(): $NumberProvider;
    }
    export class $AccessorTagEntry {
    }
    export interface $AccessorTagEntry {
        bookshelf$tag(): $TagKey<$Item>;
        bookshelf$expand(): boolean;
    }
    export class $AccessorLootTable {
    }
    export interface $AccessorLootTable {
        bookshelf$pools(): $List<$LootPool>;
        bookshelf$randomSequence(): ($ResourceLocation) | undefined;
        bookshelf$functions(): $List<$LootItemFunction>;
    }
    export class $AccessorLootPoolSingletonContainer {
    }
    export interface $AccessorLootPoolSingletonContainer {
        bookshelf$weight(): number;
        bookshelf$quality(): number;
    }
    export class $AccessorDynamicLoot {
    }
    export interface $AccessorDynamicLoot {
        bookshelf$name(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $AccessorDynamicLoot}.
     */
    export type $AccessorDynamicLoot_ = (() => $ResourceLocation_);
    export class $AccessorNestedLootTable {
    }
    export interface $AccessorNestedLootTable {
        bookshelf$contents(): $Either<$ResourceKey<$LootTable>, $LootTable>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorNestedLootTable}.
     */
    export type $AccessorNestedLootTable_ = (() => $Either<$ResourceKey_<$LootTable>, $LootTable>);
    export class $AccessorCompositeEntryBase {
    }
    export interface $AccessorCompositeEntryBase {
        bookshelf$children(): $List<$LootPoolEntryContainer>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorCompositeEntryBase}.
     */
    export type $AccessorCompositeEntryBase_ = (() => $List_<$LootPoolEntryContainer>);
    export class $AccessorLootItem {
        static bookshelf$create(arg0: $Holder_<$Item>, arg1: number, arg2: number, arg3: $List_<$LootItemCondition>, arg4: $List_<$LootItemFunction>): $LootItem;
    }
    export interface $AccessorLootItem {
        bookshelf$item(): $Holder<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorLootItem}.
     */
    export type $AccessorLootItem_ = (() => $Holder_<$Item>);
}
