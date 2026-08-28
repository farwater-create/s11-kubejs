import { $AbstractInventorySummary, $StockInventoryType } from "@package/net/liukrast/deployer/lib/logistics/packager";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $List, $List_ } from "@package/java/util";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $Object, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/liukrast/deployer/lib/logistics/stockTicker" {
    export class $Deployer$MappedInfo {
        setNewlyReceivedStockSnapshot<T>(arg0: $StockInventoryType<never, T, never>, arg1: $List_<T>): void;
        getNewlyReceivedStockSnapshot<T>(arg0: $StockInventoryType<never, T, never>): $List<T>;
        setLastClientsideStockSnapshot<T>(arg0: $StockInventoryType<never, T, never>, arg1: $List_<$List_<T>>): void;
        getLastClientsideStockSnapshot<T>(arg0: $StockInventoryType<never, T, never>): $List<$List<T>>;
        /**
         * @deprecated
         */
        getCategories(arg0: $StockInventoryType<never, never, never>): $List<$ItemStack>;
        getActiveLinks(arg0: $StockInventoryType<never, never, never>): number;
        setActiveLinks(arg0: $StockInventoryType<never, never, never>, arg1: number): void;
        getLastClientsideStockSnapshotAsSummary<K, V>(arg0: $StockInventoryType<K, V, never>): $AbstractInventorySummary<K, V>;
        setLastClientsideStockSnapshotAsSummary<K, V>(arg0: $StockInventoryType<K, V, never>, arg1: $AbstractInventorySummary<K, V>): void;
        /**
         * @deprecated
         */
        setCategories(arg0: $StockInventoryType<never, never, never>, arg1: $List_<$ItemStack_>): $List<$ItemStack>;
        constructor();
    }
    export class $GenericOrder<V> extends $Record {
        isEmpty(): boolean;
        static empty<V>(): $GenericOrder<V>;
        strategy(): $Hash$Strategy<V>;
        static simpleStreamCodec<V>(arg0: $StreamCodec<$RegistryFriendlyByteBuf, V>, arg1: $Hash$Strategy<V>): $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrder<V>>;
        static simpleCodec<V>(arg0: $Codec<V>, arg1: $Hash$Strategy<V>): $Codec<$GenericOrder<V>>;
        stacks(): $List<V>;
        static DEFAULT_STRATEGY: $Hash$Strategy<$Object>;
        constructor(stacks: $List_<V>, strategy: $Hash$Strategy<V>);
    }
    /**
     * Values that may be interpreted as {@link $GenericOrder}.
     */
    export type $GenericOrder_<V> = { stacks?: $List_<any>, strategy?: $Hash$Strategy<any>,  } | [stacks?: $List_<any>, strategy?: $Hash$Strategy<any>, ];
    export class $GenericOrderContained<V> extends $Record {
        isEmpty(): boolean;
        static empty<V>(): $GenericOrderContained<V>;
        static simple<V>(arg0: $List_<V>, arg1: $Hash$Strategy<V>): $GenericOrderContained<V>;
        static fromOrderCodec<V>(arg0: $Codec<$GenericOrder_<V>>, arg1: $Codec<V>, arg2: $Hash$Strategy<V>): $Codec<$GenericOrderContained<V>>;
        stacks(): $List<V>;
        static fromOrderStreamCodec<V>(arg0: $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrder_<V>>): $StreamCodec<$RegistryFriendlyByteBuf, $GenericOrderContained<V>>;
        orderedStacks(): $GenericOrder<V>;
        constructor(orderedStacks: $GenericOrder_<V>);
    }
    /**
     * Values that may be interpreted as {@link $GenericOrderContained}.
     */
    export type $GenericOrderContained_<V> = { orderedStacks?: $GenericOrder_<any>,  } | [orderedStacks?: $GenericOrder_<any>, ];
}
