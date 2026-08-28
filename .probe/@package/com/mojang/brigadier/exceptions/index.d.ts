import { $Function_ } from "@package/java/util/function";
import { $Message_, $Message, $ImmutableStringReader } from "@package/com/mojang/brigadier";
import { $Object, $Exception } from "@package/java/lang";

declare module "@package/com/mojang/brigadier/exceptions" {
    export class $DynamicCommandExceptionType implements $CommandExceptionType {
        create(arg0: $Object): $CommandSyntaxException;
        createWithContext(arg0: $ImmutableStringReader, arg1: $Object): $CommandSyntaxException;
        constructor(arg0: $Function_<$Object, $Message>);
    }
    export class $Dynamic2CommandExceptionType$Function {
    }
    export interface $Dynamic2CommandExceptionType$Function {
        apply(arg0: $Object, arg1: $Object): $Message;
    }
    /**
     * Values that may be interpreted as {@link $Dynamic2CommandExceptionType$Function}.
     */
    export type $Dynamic2CommandExceptionType$Function_ = ((arg0: $Object, arg1: $Object) => $Message_);
    export class $Dynamic3CommandExceptionType implements $CommandExceptionType {
        create(arg0: $Object, arg1: $Object, arg2: $Object): $CommandSyntaxException;
        createWithContext(arg0: $ImmutableStringReader, arg1: $Object, arg2: $Object, arg3: $Object): $CommandSyntaxException;
        constructor(arg0: $Dynamic3CommandExceptionType$Function_);
    }
    export class $Dynamic2CommandExceptionType implements $CommandExceptionType {
        create(arg0: $Object, arg1: $Object): $CommandSyntaxException;
        createWithContext(arg0: $ImmutableStringReader, arg1: $Object, arg2: $Object): $CommandSyntaxException;
        constructor(arg0: $Dynamic2CommandExceptionType$Function_);
    }
    export class $SimpleCommandExceptionType implements $CommandExceptionType {
        create(): $CommandSyntaxException;
        createWithContext(arg0: $ImmutableStringReader): $CommandSyntaxException;
        constructor(arg0: $Message_);
    }
    export class $Dynamic3CommandExceptionType$Function {
    }
    export interface $Dynamic3CommandExceptionType$Function {
        apply(arg0: $Object, arg1: $Object, arg2: $Object): $Message;
    }
    /**
     * Values that may be interpreted as {@link $Dynamic3CommandExceptionType$Function}.
     */
    export type $Dynamic3CommandExceptionType$Function_ = ((arg0: $Object, arg1: $Object, arg2: $Object) => $Message_);
    export class $CommandExceptionType {
    }
    export interface $CommandExceptionType {
    }
    export class $CommandSyntaxException extends $Exception {
        getContext(): string;
        getType(): $CommandExceptionType;
        getInput(): string;
        getRawMessage(): $Message;
        getCursor(): number;
        static BUILT_IN_EXCEPTIONS: $BuiltInExceptionProvider;
        static ENABLE_COMMAND_STACK_TRACES: boolean;
        static CONTEXT_AMOUNT: number;
        constructor(arg0: $CommandExceptionType, arg1: $Message_);
        constructor(arg0: $CommandExceptionType, arg1: $Message_, arg2: string, arg3: number);
        get context(): string;
        get type(): $CommandExceptionType;
        get input(): string;
        get rawMessage(): $Message;
        get cursor(): number;
    }
    export class $BuiltInExceptionProvider {
    }
    export interface $BuiltInExceptionProvider {
        readerInvalidDouble(): $DynamicCommandExceptionType;
        readerExpectedDouble(): $SimpleCommandExceptionType;
        readerExpectedFloat(): $SimpleCommandExceptionType;
        readerExpectedSymbol(): $DynamicCommandExceptionType;
        readerInvalidEscape(): $DynamicCommandExceptionType;
        readerExpectedStartOfQuote(): $SimpleCommandExceptionType;
        dispatcherUnknownCommand(): $SimpleCommandExceptionType;
        readerExpectedEndOfQuote(): $SimpleCommandExceptionType;
        dispatcherUnknownArgument(): $SimpleCommandExceptionType;
        dispatcherParseException(): $DynamicCommandExceptionType;
        readerExpectedInt(): $SimpleCommandExceptionType;
        readerInvalidBool(): $DynamicCommandExceptionType;
        doubleTooLow(): $Dynamic2CommandExceptionType;
        floatTooHigh(): $Dynamic2CommandExceptionType;
        readerInvalidInt(): $DynamicCommandExceptionType;
        readerInvalidLong(): $DynamicCommandExceptionType;
        longTooHigh(): $Dynamic2CommandExceptionType;
        literalIncorrect(): $DynamicCommandExceptionType;
        floatTooLow(): $Dynamic2CommandExceptionType;
        readerExpectedLong(): $SimpleCommandExceptionType;
        readerInvalidFloat(): $DynamicCommandExceptionType;
        integerTooHigh(): $Dynamic2CommandExceptionType;
        integerTooLow(): $Dynamic2CommandExceptionType;
        doubleTooHigh(): $Dynamic2CommandExceptionType;
        readerExpectedBool(): $SimpleCommandExceptionType;
        longTooLow(): $Dynamic2CommandExceptionType;
        dispatcherExpectedArgumentSeparator(): $SimpleCommandExceptionType;
    }
}
