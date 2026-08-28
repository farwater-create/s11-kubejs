import { $IAccessor } from "@package/com/lowdragmc/lowdraglib2/syncdata/accessor";
import { $Predicate_ } from "@package/java/util/function";
import { $DynamicOps } from "@package/com/mojang/serialization";
import { $ManagedKey } from "@package/com/lowdragmc/lowdraglib2/syncdata/field";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";

declare module "@package/com/lowdragmc/lowdraglib2/syncdata/ref" {
    export class $IRef<TYPE> {
    }
    export interface $IRef<TYPE> {
        update(): void;
        getKey(): $ManagedKey;
        getAccessor(): $IAccessor<TYPE>;
        isSyncDirty(): boolean;
        setOnSyncListener(arg0: $BooleanConsumer_): void;
        getPersistedKey(): string;
        readSyncToStream(arg0: $RegistryFriendlyByteBuf): void;
        readInitialSync<T>(arg0: $DynamicOps<T>): T;
        readPersisted<T>(arg0: $DynamicOps<T>): T;
        clearSyncDirty(): void;
        markAsDirty(): void;
        isPersistedDirty(): boolean;
        writePersisted<T>(arg0: $DynamicOps<T>, arg1: T): void;
        writeInitialSync<T>(arg0: $DynamicOps<T>, arg1: T): void;
        writeRaw(arg0: TYPE): void;
        readRaw(): TYPE;
        writeSyncFromStream(arg0: $RegistryFriendlyByteBuf): void;
        setPersistedPrefixName(arg0: string): void;
        getPersistedPrefixName(): string;
        setOnPersistedListener(arg0: $BooleanConsumer_): void;
        clearPersistedDirty(): void;
        setConditionalSynced(arg0: $Predicate_<TYPE>): void;
        get key(): $ManagedKey;
        get accessor(): $IAccessor<TYPE>;
        get syncDirty(): boolean;
        set onSyncListener(value: $BooleanConsumer_);
        get persistedKey(): string;
        get persistedDirty(): boolean;
        set onPersistedListener(value: $BooleanConsumer_);
        set conditionalSynced(value: $Predicate_<TYPE>);
    }
}
