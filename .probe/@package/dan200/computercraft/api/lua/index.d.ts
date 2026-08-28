import { $Map_, $Map } from "@package/java/util";
import { $Object, $Enum, $Class } from "@package/java/lang";
import { $ByteBuffer } from "@package/java/nio";

declare module "@package/dan200/computercraft/api/lua" {
    export class $IArguments {
    }
    export interface $IArguments {
        get(arg0: number): $Object;
        getBoolean(arg0: number): boolean;
        getInt(arg0: number): number;
        getLong(arg0: number): number;
        getDouble(arg0: number): number;
        getBytes(arg0: number): $ByteBuffer;
        count(): number;
        getType(arg0: number): string;
        getTable(arg0: number): $Map<never, never>;
        getString(arg0: number): string;
        drop(arg0: number): $IArguments;
        getAll(): $Object[];
        getEnum<T extends $Enum<T>>(arg0: number, arg1: $Class<T>): T;
        escapes(): void;
        optTable(arg0: number): ($Map<never, never>) | undefined;
        optTable(arg0: number, arg1: $Map_<$Object, $Object>): $Map<never, never>;
        optString(arg0: number): (string) | undefined;
        optString(arg0: number, arg1: string): string;
        getFiniteDouble(arg0: number): number;
        optBoolean(arg0: number): (boolean) | undefined;
        optBoolean(arg0: number, arg1: boolean): boolean;
        optInt(arg0: number, arg1: number): number;
        optInt(arg0: number): (number) | undefined;
        optEnum<T extends $Enum<T>>(arg0: number, arg1: $Class<T>): (T) | undefined;
        getBytesCoerced(arg0: number): $ByteBuffer;
        getTableUnsafe(arg0: number): $LuaTable<never, never>;
        optTableUnsafe(arg0: number): ($LuaTable<never, never>) | undefined;
        getStringCoerced(arg0: number): string;
        optFiniteDouble(arg0: number): (number) | undefined;
        optFiniteDouble(arg0: number, arg1: number): number;
        optLong(arg0: number, arg1: number): number;
        optLong(arg0: number): (number) | undefined;
        optDouble(arg0: number): (number) | undefined;
        optDouble(arg0: number, arg1: number): number;
        optBytes(arg0: number): ($ByteBuffer) | undefined;
        get all(): $Object[];
    }
    export class $ILuaCallback {
    }
    export interface $ILuaCallback {
        resume(arg0: $Object[]): $MethodResult;
    }
    /**
     * Values that may be interpreted as {@link $ILuaCallback}.
     */
    export type $ILuaCallback_ = ((arg0: $Object[]) => $MethodResult);
    export class $MethodResult {
        static of(): $MethodResult;
        static of(...arg0: $Object[]): $MethodResult;
        static of(arg0: $Object): $MethodResult;
        static "yield"(arg0: $Object[], arg1: $ILuaCallback_): $MethodResult;
        getResult(): $Object[];
        getCallback(): $ILuaCallback;
        static pullEvent(arg0: string, arg1: $ILuaCallback_): $MethodResult;
        adjustError(arg0: number): $MethodResult;
        getErrorAdjust(): number;
        static pullEventRaw(arg0: string, arg1: $ILuaCallback_): $MethodResult;
        get result(): $Object[];
        get callback(): $ILuaCallback;
        get errorAdjust(): number;
    }
    export class $LuaTable<K, V> {
    }
    export interface $LuaTable<K, V> extends $Map<K, V> {
        remove(arg0: $Object): V;
        get(arg0: number): $Object;
        put(arg0: K, arg1: V): V;
        length(): number;
        getBoolean(arg0: number): boolean;
        getBoolean(arg0: string): boolean;
        getInt(arg0: string): number;
        getInt(arg0: number): number;
        getLong(arg0: number): number;
        getLong(arg0: string): number;
        getDouble(arg0: number): number;
        getDouble(arg0: string): number;
        clear(): void;
        putAll(arg0: $Map_<K, V>): void;
        getTable(arg0: string): $Map<never, never>;
        getTable(arg0: number): $Map<never, never>;
        getString(arg0: number): string;
        getString(arg0: string): string;
        optTable(arg0: string): ($Map<never, never>) | undefined;
        optTable(arg0: number): ($Map<never, never>) | undefined;
        optString(arg0: number): (string) | undefined;
        optString(arg0: string): (string) | undefined;
        getFiniteDouble(arg0: string): number;
        getFiniteDouble(arg0: number): number;
        optBoolean(arg0: string): (boolean) | undefined;
        optBoolean(arg0: number): (boolean) | undefined;
        optInt(arg0: number): (number) | undefined;
        optInt(arg0: string): (number) | undefined;
        optFiniteDouble(arg0: string): (number) | undefined;
        optFiniteDouble(arg0: number): (number) | undefined;
        optLong(arg0: number): (number) | undefined;
        optLong(arg0: string): (number) | undefined;
        optDouble(arg0: number): (number) | undefined;
        optDouble(arg0: string): (number) | undefined;
    }
}
