import { $Consumer_ } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ItemFilter_ } from "@package/com/almostreliable/lootjs/core/filters";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $NullableFunction_ } from "@package/com/almostreliable/lootjs/util";
import { $Iterable, $Enum } from "@package/java/lang";
import { $Spliterator, $ListIterator, $List_ } from "@package/java/util";
import { $LootEntry } from "@package/com/almostreliable/lootjs/core/entry";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
export * as filters from "@package/com/almostreliable/lootjs/core/filters";
export * as entry from "@package/com/almostreliable/lootjs/core/entry";

declare module "@package/com/almostreliable/lootjs/core" {
    export class $LootType extends $Enum<$LootType> {
        static values(): $LootType[];
        static valueOf(arg0: string): $LootType;
        static getLootType(arg0: $LootContextParamSet): $LootType;
        getParamSet(): $LootContextParamSet;
        static BLOCK: $LootType;
        static VAULT: $LootType;
        static ADVANCEMENT_REWARD: $LootType;
        static ARCHAEOLOGY: $LootType;
        static CHEST: $LootType;
        static ADVANCEMENT_ENTITY: $LootType;
        static EQUIPMENT: $LootType;
        static GIFT: $LootType;
        static FISHING: $LootType;
        static ENTITY: $LootType;
        static GENERIC: $LootType;
        static SELECTOR: $LootType;
        static PIGLIN_BARTER: $LootType;
        static BLOCK_USE: $LootType;
        static COMMAND: $LootType;
        static UNKNOWN: $LootType;
        static ADVANCEMENT_LOCATION: $LootType;
        static SHEARING: $LootType;
        get paramSet(): $LootContextParamSet;
    }
    /**
     * Values that may be interpreted as {@link $LootType}.
     */
    export type $LootType_ = "unknown" | "block" | "block_use" | "chest" | "fishing" | "entity" | "equipment" | "archaeology" | "gift" | "vault" | "piglin_barter" | "advancement_reward" | "advancement_entity" | "advancement_location" | "command" | "selector" | "shearing" | "generic";
    export class $LootBucket implements $Iterable<$ItemStack> {
        remove(arg0: $ItemFilter_): void;
        size(): number;
        get(arg0: number): $ItemStack;
        extract(arg0: $ItemFilter_): $LootBucket;
        clear(): void;
        isEmpty(): boolean;
        replace(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean): void;
        replace(arg0: $ItemFilter_, arg1: $LootEntry): void;
        replace(arg0: $ItemFilter_, arg1: $LootEntry, arg2: boolean, arg3: $DataComponentType<never>[]): void;
        iterator(): $ListIterator<$ItemStack>;
        merge(arg0: $LootBucket): void;
        addEntry(arg0: $LootEntry): void;
        hasItem(arg0: $ItemFilter_): boolean;
        addItem(arg0: $ItemStack_): void;
        modifyItems(arg0: $NullableFunction_<$ItemStack, $ItemStack>): void;
        addAllItems(arg0: $List_<$ItemStack_>): void;
        spliterator(): $Spliterator<$ItemStack>;
        forEach(arg0: $Consumer_<$ItemStack>): void;
        constructor(arg0: $LootContext);
        constructor(arg0: $LootContext, arg1: $List_<$ItemStack_>);
        get empty(): boolean;
    }
}
