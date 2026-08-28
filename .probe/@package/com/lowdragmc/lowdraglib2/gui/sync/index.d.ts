import { $RPCEvent_ } from "@package/com/lowdragmc/lowdraglib2/gui/sync/rpc";
import { $Supplier_, $Consumer_, $Consumer, $Supplier } from "@package/java/util/function";
import { $SyncStrategy_, $SyncStrategy } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SyncValueHolder, $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $Type } from "@package/java/lang/reflect";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $List, $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";
export * as bindings from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
export * as rpc from "@package/com/lowdragmc/lowdraglib2/gui/sync/rpc";

declare module "@package/com/lowdragmc/lowdraglib2/gui/sync" {
    export class $IUISyncManagerHolder {
    }
    export interface $IUISyncManagerHolder {
        writeInitialData(arg0: $RegistryFriendlyByteBuf): void;
        readInitialData(arg0: $RegistryFriendlyByteBuf): void;
        getSyncManager(): $UISyncManager;
        get syncManager(): $UISyncManager;
    }
    /**
     * Values that may be interpreted as {@link $IUISyncManagerHolder}.
     */
    export type $IUISyncManagerHolder_ = (() => $UISyncManager);
    export class $UISyncManager {
        unregisterSyncValue(arg0: $SyncValue<never>): $UISyncManager;
        registerRPCEvent(arg0: $RPCEvent_): $UISyncManager;
        registerSyncValue(arg0: $SyncValue<never>): $UISyncManager;
        unregisterRPCEvent(arg0: $RPCEvent_): $UISyncManager;
        tick(): void;
        sendEvent(arg0: $RPCEvent_, ...arg1: $Object[]): void;
        sendEvent<T>(arg0: $RPCEvent_, arg1: $Consumer_<T>, ...arg2: $Object[]): void;
        writeInitialData(arg0: $RegistryFriendlyByteBuf): void;
        handEvent(arg0: $RegistryFriendlyByteBuf): void;
        handleSyncPacket(arg0: $RegistryFriendlyByteBuf): void;
        readInitialData(arg0: $RegistryFriendlyByteBuf): void;
        getReturnCallbacks(): $Map<number, $Consumer<never>>;
        handEventReturn(arg0: $RegistryFriendlyByteBuf): void;
        modularUI: $ModularUI;
        constructor(arg0: $ModularUI);
        get returnCallbacks(): $Map<number, $Consumer<never>>;
    }
    export class $SyncValue<T> {
        update(): void;
        getValue(): T;
        setValue(arg0: T): void;
        writeSyncData(arg0: $RegistryFriendlyByteBuf): void;
        readSyncData(arg0: $RegistryFriendlyByteBuf): void;
        addListener(arg0: $Consumer_<T>): $ISubscription;
        hasChanged(): boolean;
        setToSync(arg0: boolean): void;
        isToSync(): boolean;
        setAcceptSync(arg0: boolean): void;
        clearChanged(): void;
        setValueProvider(arg0: $Supplier_<T>): void;
        getSyncStrategy(): $SyncStrategy;
        markAsChanged(): void;
        isAcceptSync(): boolean;
        setSyncStrategy(arg0: $SyncStrategy_): void;
        toSync: boolean;
        syncValueHolder: $SyncValueHolder<T>;
        listeners: $List<$Consumer<T>>;
        syncStrategy: $SyncStrategy;
        valueProvider: $Supplier<T>;
        acceptSync: boolean;
        constructor(arg0: string, arg1: $Type, arg2: T);
    }
}
