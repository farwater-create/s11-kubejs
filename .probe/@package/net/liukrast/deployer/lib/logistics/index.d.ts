import { $Supplier_ } from "@package/java/util/function";
import { $StockInventoryType } from "@package/net/liukrast/deployer/lib/logistics/packager";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GenericOrderContained, $GenericOrderContained_ } from "@package/net/liukrast/deployer/lib/logistics/stockTicker";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as packagerLink from "@package/net/liukrast/deployer/lib/logistics/packagerLink";
export * as packager from "@package/net/liukrast/deployer/lib/logistics/packager";
export * as board from "@package/net/liukrast/deployer/lib/logistics/board";
export * as stockTicker from "@package/net/liukrast/deployer/lib/logistics/stockTicker";

declare module "@package/net/liukrast/deployer/lib/logistics" {
    export class $GenericPackageOrderData<V> extends $Record {
        isFinal(): boolean;
        static createCodec<V>(arg0: $Supplier_<$StockInventoryType<never, V, never>>): $Codec<$GenericPackageOrderData<V>>;
        static createStreamCodec<V>(arg0: $Supplier_<$StockInventoryType<never, V, never>>): $StreamCodec<$RegistryFriendlyByteBuf, $GenericPackageOrderData<V>>;
        isFinalLink(): boolean;
        orderContext(): $GenericOrderContained<V>;
        fragmentIndex(): number;
        orderId(): number;
        linkIndex(): number;
        constructor(arg0: number, arg1: number, arg2: boolean, arg3: number, arg4: boolean, arg5: ($GenericOrderContained_<V>) | undefined);
        constructor(orderId: number, linkIndex: number, isFinalLink: boolean, fragmentIndex: number, isFinal: boolean, orderContext: $GenericOrderContained_<V> | null);
        get final(): boolean;
        get finalLink(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GenericPackageOrderData}.
     */
    export type $GenericPackageOrderData_<V> = { orderContext?: $GenericOrderContained_<any>, linkIndex?: number, isFinalLink?: boolean, isFinal?: boolean, orderId?: number, fragmentIndex?: number,  } | [orderContext?: $GenericOrderContained_<any>, linkIndex?: number, isFinalLink?: boolean, isFinal?: boolean, orderId?: number, fragmentIndex?: number, ];
}
