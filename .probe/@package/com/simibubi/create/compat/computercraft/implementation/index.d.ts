import { $AbstractComputerBehaviour } from "@package/com/simibubi/create/compat/computercraft";
import { $Function_, $BiFunction_, $Supplier, $BiConsumer_ } from "@package/java/util/function";
import { $SyncedPeripheral } from "@package/com/simibubi/create/compat/computercraft/implementation/peripherals";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $List_, $Map_, $Map, $Collection, $Map$Entry, $Set } from "@package/java/util";
import { $Object, $Enum, $Record } from "@package/java/lang";
import { $BigItemStack } from "@package/com/simibubi/create/content/logistics";
import { $LuaTable } from "@package/dan200/computercraft/api/lua";
import { $BehaviourType } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $InventorySummary } from "@package/com/simibubi/create/content/logistics/packager";
export * as peripherals from "@package/com/simibubi/create/compat/computercraft/implementation/peripherals";
export * as luaObjects from "@package/com/simibubi/create/compat/computercraft/implementation/luaObjects";

declare module "@package/com/simibubi/create/compat/computercraft/implementation" {
    export class $ComputerBehaviour extends $AbstractComputerBehaviour {
        static getPeripheralFor(arg0: $SmartBlockEntity): $Supplier<$SyncedPeripheral<never>>;
        static registerItemDetailProviders(): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AbstractComputerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $ComputerUtil {
        static list(arg0: $IItemHandler): $Map<number, $Map<string, never>>;
        static getItemDetail(arg0: $IItemHandler, arg1: number): $Map<string, never>;
        static getItemDetail(arg0: $InventorySummary, arg1: number): $Map<string, never>;
        static bigItemStackToLuaTableFilter(arg0: $BigItemStack, arg1: $Map_<never, never>): number;
        constructor();
    }
    export class $ComputerUtil$Collection extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ComputerUtil$Collection}.
     */
    export type $ComputerUtil$Collection_ = { list?: $List_<never>, mode?: $ComputerUtil$MatchMode_, map?: $Map_<never, never>,  } | [list?: $List_<never>, mode?: $ComputerUtil$MatchMode_, map?: $Map_<never, never>, ];
    export class $CreateLuaTable implements $LuaTable<$Object, $Object> {
        size(): number;
        get(arg0: $Object): $Object;
        put(arg0: $Object, arg1: $Object): $Object;
        values(): $Collection<$Object>;
        getBoolean(arg0: string): boolean;
        putBoolean(arg0: string, arg1: boolean): void;
        putDouble(arg0: string, arg1: number): void;
        isEmpty(): boolean;
        entrySet(): $Set<$Map$Entry<$Object, $Object>>;
        containsKey(arg0: $Object): boolean;
        keySet(): $Set<$Object>;
        containsValue(arg0: $Object): boolean;
        getMap(): $Map<$Object, $Object>;
        getTable(arg0: string): $CreateLuaTable;
        getString(arg0: string): string;
        putString(arg0: string, arg1: string): void;
        getOptBoolean(arg0: string): (boolean) | undefined;
        tableValues(): $Collection<$CreateLuaTable>;
        stringKeySet(): $Set<string>;
        putTable(arg0: string, arg1: $CreateLuaTable): void;
        putTable(arg0: number, arg1: $CreateLuaTable): void;
        remove(arg0: $Object): $Object;
        get(arg0: number): $Object;
        length(): number;
        getBoolean(arg0: number): boolean;
        getInt(arg0: string): number;
        getInt(arg0: number): number;
        getLong(arg0: number): number;
        getLong(arg0: string): number;
        getDouble(arg0: number): number;
        getDouble(arg0: string): number;
        clear(): void;
        putAll(arg0: $Map_<$Object, $Object>): void;
        getTable(arg0: number): $Map<never, never>;
        getString(arg0: number): string;
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
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: $Object, arg1: $Object, arg2: $Object): boolean;
        replace(arg0: $Object, arg1: $Object): $Object;
        replaceAll(arg0: $BiFunction_<$Object, $Object, $Object>): void;
        merge(arg0: $Object, arg1: $Object, arg2: $BiFunction_<$Object, $Object, $Object>): $Object;
        putIfAbsent(arg0: $Object, arg1: $Object): $Object;
        compute(arg0: $Object, arg1: $BiFunction_<$Object, $Object, $Object>): $Object;
        forEach(arg0: $BiConsumer_<$Object, $Object>): void;
        computeIfAbsent(arg0: $Object, arg1: $Function_<$Object, $Object>): $Object;
        getOrDefault(arg0: $Object, arg1: $Object): $Object;
        computeIfPresent(arg0: $Object, arg1: $BiFunction_<$Object, $Object, $Object>): $Object;
        constructor();
        constructor(arg0: $Map_<never, never>);
        get empty(): boolean;
        get map(): $Map<$Object, $Object>;
    }
    export class $ComputerUtil$MatchMode extends $Enum<$ComputerUtil$MatchMode> {
    }
    /**
     * Values that may be interpreted as {@link $ComputerUtil$MatchMode}.
     */
    export type $ComputerUtil$MatchMode_ = "exact" | "contains" | "contained";
}
