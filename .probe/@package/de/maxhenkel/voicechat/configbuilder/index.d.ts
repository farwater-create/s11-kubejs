import { $StringConfigEntry, $BooleanConfigEntry, $LongConfigEntry, $IntegerConfigEntry, $EnumConfigEntry, $FloatConfigEntry, $ConfigEntry, $DoubleConfigEntry } from "@package/de/maxhenkel/voicechat/configbuilder/entry";
import { $Function_ } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";
export * as entry from "@package/de/maxhenkel/voicechat/configbuilder/entry";

declare module "@package/de/maxhenkel/voicechat/configbuilder" {
    export class $ConfigBuilder {
        static builder<C>(arg0: $Function_<$ConfigBuilder, C>): $ConfigBuilder$Builder<C>;
    }
    export interface $ConfigBuilder {
        entry<T>(arg0: string, arg1: T, ...arg2: string[]): $ConfigEntry<T>;
        header(...arg0: string[]): $ConfigBuilder;
        booleanEntry(arg0: string, arg1: boolean, ...arg2: string[]): $BooleanConfigEntry;
        integerEntry(arg0: string, arg1: number, arg2: number, arg3: number, ...arg4: string[]): $IntegerConfigEntry;
        integerEntry(arg0: string, arg1: number, ...arg2: string[]): $IntegerConfigEntry;
        doubleEntry(arg0: string, arg1: number, ...arg2: string[]): $DoubleConfigEntry;
        doubleEntry(arg0: string, arg1: number, arg2: number, arg3: number, ...arg4: string[]): $DoubleConfigEntry;
        stringEntry(arg0: string, arg1: string, ...arg2: string[]): $StringConfigEntry;
        enumEntry<E extends $Enum<E>>(arg0: string, arg1: E, ...arg2: string[]): $EnumConfigEntry<E>;
        longEntry(arg0: string, arg1: number, arg2: number, arg3: number, ...arg4: string[]): $LongConfigEntry;
        longEntry(arg0: string, arg1: number, ...arg2: string[]): $LongConfigEntry;
        floatEntry(arg0: string, arg1: number, arg2: number, arg3: number, ...arg4: string[]): $FloatConfigEntry;
        floatEntry(arg0: string, arg1: number, ...arg2: string[]): $FloatConfigEntry;
    }
}
