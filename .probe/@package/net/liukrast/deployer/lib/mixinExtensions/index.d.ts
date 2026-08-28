import { $GenericRepackageHelper, $AbstractPackagerBlockEntity, $IdentifiedContainer_, $AbstractInventorySummary, $StockInventoryType, $GenericPackagingRequest } from "@package/net/liukrast/deployer/lib/logistics/packager";
import { $GenericRequestPromise } from "@package/net/liukrast/deployer/lib/logistics/packagerLink";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $AbstractPanelBehaviour } from "@package/net/liukrast/deployer/lib/logistics/board";
import { $List, $Map_, $Map, $Set, $List_ } from "@package/java/util";
import { $PackageOrderWithCrafts_ } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $FactoryPanelConnection } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $PanelConnection } from "@package/net/liukrast/deployer/lib/logistics/board/connection";
import { $RequesterTabScreen } from "@package/net/liukrast/deployer/lib/logistics/packager/screen";
import { $BlockPos } from "@package/net/minecraft/core";
import { $GenericOrderContained_, $Deployer$MappedInfo, $GenericOrderContained, $GenericOrder_ } from "@package/net/liukrast/deployer/lib/logistics/stockTicker";
import { $MutableBoolean } from "@package/org/apache/commons/lang3/mutable";
import { $Object } from "@package/java/lang";
import { $LogisticallyLinkedBehaviour$RequestType_ } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/net/liukrast/deployer/lib/mixinExtensions" {
    export class $RPQExtension {
    }
    export interface $RPQExtension {
        deployer$genericEnteredSystem<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: V, arg2: number): void;
        deployer$getTotalPromisedAndRemoveExpired<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: V, arg2: number): number;
        deployer$forceClear<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: V): void;
        deployer$add<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: $GenericRequestPromise<V>): void;
        deployer$flatten<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: boolean): $List<$GenericRequestPromise<V>>;
    }
    export class $PLBEExtension {
    }
    export interface $PLBEExtension {
        deployer$fetchSummaryFromPackager<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: $IdentifiedContainer_<H> | null): $AbstractInventorySummary<K, V>;
        deployer$getPackager<K, V, H>(arg0: $StockInventoryType<K, V, H>): $AbstractPackagerBlockEntity<K, V, H>;
        deployer$processRequest<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: V, arg2: number, arg3: string, arg4: number, arg5: $MutableBoolean, arg6: number, arg7: $GenericOrderContained_<V> | null, arg8: $IdentifiedContainer_<H> | null): $Pair<$AbstractPackagerBlockEntity<K, V, H>, $GenericPackagingRequest<V>>;
    }
    export class $RRBEExtension {
    }
    export interface $RRBEExtension {
        deployer$getAllEncodedRequests(): $Map<$StockInventoryType<never, never, never>, $GenericOrderContained<never>>;
        deployer$setEncodedRequest<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: $GenericOrderContained_<V>): void;
        deployer$getEncodedRequest<K, V, H>(arg0: $StockInventoryType<K, V, H>): $GenericOrderContained<V>;
    }
    export class $ACPExtension {
    }
    export interface $ACPExtension {
        deployer$getCape(): number;
    }
    /**
     * Values that may be interpreted as {@link $ACPExtension}.
     */
    export type $ACPExtension_ = (() => number);
    export class $FPBExtension {
    }
    export interface $FPBExtension {
        deployer$getExtra(): $Map<$BlockPos, $FactoryPanelConnection>;
        deployer$getOutputConnections(): $Set<$PanelConnection<never>>;
        deployer$getInputConnections(): $Set<$PanelConnection<never>>;
        deployer$getConnectionValue<T>(arg0: $PanelConnection<T>): (T) | undefined;
    }
    export class $SCBEExtension {
    }
    export interface $SCBEExtension {
        deployer$broadcastAllPackageRequest(arg0: $PackageOrderWithCrafts_, arg1: $LogisticallyLinkedBehaviour$RequestType_, arg2: $Map_<$StockInventoryType<never, never, never>, $GenericOrderContained_<never>>, arg3: string): boolean;
        deployer$broadcastPackageRequest<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: $LogisticallyLinkedBehaviour$RequestType_, arg2: $GenericOrderContained_<V>, arg3: $IdentifiedContainer_<H> | null, arg4: string): boolean;
        deployer$broadcastPackageRequest<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: $LogisticallyLinkedBehaviour$RequestType_, arg2: $GenericOrder_<V>, arg3: $IdentifiedContainer_<H> | null, arg4: string): boolean;
        deployer$getAccurateSummary<K, V, H>(arg0: $StockInventoryType<K, V, H>): $AbstractInventorySummary<K, V>;
        deployer$getRecentSummary<K, V, H>(arg0: $StockInventoryType<K, V, H>): $AbstractInventorySummary<K, V>;
    }
    export class $RBEExtension {
    }
    export interface $RBEExtension {
        deployer$setGenericRepackageHelper(arg0: $GenericRepackageHelper): void;
        deployer$getGenericRepackageHelper(): $GenericRepackageHelper;
    }
    export class $FPCExtension {
    }
    export interface $FPCExtension {
        deployer$getLinkMode(): $PanelConnection<never>;
        deployer$setLinkMode(arg0: $PanelConnection<never>): void;
    }
    export class $PRExtension {
    }
    export interface $PRExtension {
        deployer$isFlagged(): boolean;
        deployer$flag(): void;
    }
    export class $LLBExtension {
    }
    export interface $LLBExtension {
        deployer$deductFromAccurateSummary<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: H): void;
        deployer$processRequests<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: V, arg2: number, arg3: string, arg4: number, arg5: $MutableBoolean, arg6: number, arg7: $GenericOrderContained_<V> | null, arg8: $IdentifiedContainer_<H> | null): $Pair<$AbstractPackagerBlockEntity<K, V, H>, $GenericPackagingRequest<V>>;
        deployer$getSummary<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: $IdentifiedContainer_<H>): $AbstractInventorySummary<K, V>;
    }
    export class $RRSExtension {
    }
    export interface $RRSExtension {
        deployer$getTab(): $RequesterTabScreen<never>;
        deployer$mouseClicked(arg0: number, arg1: number, arg2: number): boolean;
        deployer$insertStack(arg0: $ItemStack_): void;
        deployer$receiveData(arg0: $Map_<$StockInventoryType<never, never, never>, $GenericOrderContained_<never>>): void;
    }
    export class $STBEExtension {
    }
    export interface $STBEExtension {
        deployer$broadcastAllPackageRequest(arg0: $PackageOrderWithCrafts_, arg1: $LogisticallyLinkedBehaviour$RequestType_, arg2: $Map_<$StockInventoryType<never, never, never>, $GenericOrderContained_<never>>, arg3: string): boolean;
        deployer$receiveStockPacket<V, K, H>(arg0: $StockInventoryType<V, K, H>, arg1: $List_<K>, arg2: boolean): void;
        deployer$broadcastPackageRequest<K, V, H>(arg0: $StockInventoryType<K, V, H>, arg1: $LogisticallyLinkedBehaviour$RequestType_, arg2: $GenericOrderContained_<V>, arg3: $IdentifiedContainer_<H>, arg4: string): boolean;
        deployer$getClientStockSnapshot<K, V, H>(arg0: $StockInventoryType<K, V, H>): $List<$List<V>>;
        deployer$getLastClientsideStockSnapshotAsSummary<K, V, H>(arg0: $StockInventoryType<K, V, H>): $AbstractInventorySummary<K, V>;
        deployer$getRecentSummary<K, V, H>(arg0: $StockInventoryType<K, V, H>): $AbstractInventorySummary<K, V>;
        deployer$getMappedInfo(): $Deployer$MappedInfo;
    }
    export class $FPBEExtension {
    }
    export interface $FPBEExtension {
        deployer$getExtraDrops(): $List<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $FPBEExtension}.
     */
    export type $FPBEExtension_ = (() => $List_<$ItemStack_>);
    export class $FPSExtension {
    }
    export interface $FPSExtension {
        deployer$isRestocker(arg0: $AbstractPanelBehaviour): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FPSExtension}.
     */
    export type $FPSExtension_ = ((arg0: $AbstractPanelBehaviour) => boolean);
    export class $VITBExtension {
    }
    export interface $VITBExtension {
        deployer$awaitNewVersion(arg0: $Object): void;
        deployer$stillWaiting(arg0: $Object): boolean;
    }
}
