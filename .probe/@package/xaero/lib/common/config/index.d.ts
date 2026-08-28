import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Iterable } from "@package/java/lang";
export * as option from "@package/xaero/lib/common/config/option";
export * as single from "@package/xaero/lib/common/config/single";
export * as channel from "@package/xaero/lib/common/config/channel";
export * as listener from "@package/xaero/lib/common/config/listener";
export * as server from "@package/xaero/lib/common/config/server";
export * as profile from "@package/xaero/lib/common/config/profile";
export * as sync from "@package/xaero/lib/common/config/sync";

declare module "@package/xaero/lib/common/config" {
    export class $Config {
        reset(): void;
        get<T>(arg0: $ConfigOption<T>): T;
        set<T>(arg0: $ConfigOption<T>, arg1: T): T;
        usedOptions(): $Iterable<$ConfigOption<never>>;
        getChangeListener(): $IConfigChangeListener;
        getFailedSerializedValue(arg0: $ConfigOption<never>): string;
        getRemovedLargeOptions(): $Iterable<$ConfigOption<never>>;
        addFailedSerializedValue<T>(arg0: $ConfigOption<T>, arg1: string): void;
        getDirtyOptions(): $Iterable<$ConfigOption<never>>;
        setOptionDefault<T>(arg0: $ConfigOption<T>): void;
        copyOptionsFrom(arg0: $Config): void;
        setChangeListener(arg0: $IConfigChangeListener): void;
        isAllowNullValues(): boolean;
        copyOptionFrom<T>(arg0: $ConfigOption<T>, arg1: $Config): void;
        clearDirtyOptions(): void;
        getChangeCount(): number;
        setDefaults(): void;
        postSave(): void;
        get removedLargeOptions(): $Iterable<$ConfigOption<never>>;
        get dirtyOptions(): $Iterable<$ConfigOption<never>>;
        set optionDefault(value: $ConfigOption<T>);
        get allowNullValues(): boolean;
        get changeCount(): number;
    }
}
