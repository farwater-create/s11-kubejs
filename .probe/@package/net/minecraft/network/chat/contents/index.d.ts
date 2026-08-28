import { $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $ComponentContents$Type, $MutableComponent, $Component_, $Style, $ComponentContents, $FormattedText$ContentConsumer_, $Component, $FormattedText$StyledContentConsumer_, $FormattedText } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $NbtPathArgument$NbtPath } from "@package/net/minecraft/commands/arguments";
import { $EntitySelector } from "@package/net/minecraft/commands/arguments/selector";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Function_, $Function, $Supplier } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Coordinates } from "@package/net/minecraft/commands/arguments/coordinates";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Throwable, $Record, $Object, $IllegalArgumentException } from "@package/java/lang";

declare module "@package/net/minecraft/network/chat/contents" {
    export class $DataSource {
        static CODEC: $MapCodec<$DataSource>;
    }
    export interface $DataSource {
        type(): $DataSource$Type<never>;
        getData(source: $CommandSourceStack): $Stream<$CompoundTag>;
    }
    export class $NbtContents implements $ComponentContents {
        type(): $ComponentContents$Type<never>;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        getSeparator(): ($Component) | undefined;
        getDataSource(): $DataSource;
        isInterpreting(): boolean;
        getNbtPath(): string;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        static CODEC: $MapCodec<$NbtContents>;
        compiledNbtPath: $NbtPathArgument$NbtPath;
        static TYPE: $ComponentContents$Type<$NbtContents>;
        constructor(nbtPathPattern: string, interpreting: boolean, separator: ($Component_) | undefined, dataSource: $DataSource);
        get separator(): ($Component) | undefined;
        get dataSource(): $DataSource;
        get interpreting(): boolean;
        get nbtPath(): string;
    }
    export class $TranslatableFormatException extends $IllegalArgumentException {
        constructor(contents: $TranslatableContents, error: string);
        constructor(component: $TranslatableContents, invalidIndex: number);
        constructor(contents: $TranslatableContents, cause: $Throwable);
    }
    export class $ScoreContents implements $ComponentContents {
        getName(): string;
        type(): $ComponentContents$Type<never>;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        getSelector(): $EntitySelector;
        getObjective(): string;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        static CODEC: $MapCodec<$ScoreContents>;
        static TYPE: $ComponentContents$Type<$ScoreContents>;
        static INNER_CODEC: $MapCodec<$ScoreContents>;
        constructor(name: string, objective: string);
        get name(): string;
        get selector(): $EntitySelector;
        get objective(): string;
    }
    export class $PlainTextContents$LiteralContents extends $Record implements $PlainTextContents {
        text(): string;
        visit<T>(arg0: $FormattedText$StyledContentConsumer_<T>, arg1: $Style): (T) | undefined;
        visit<T>(arg0: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        type(): $ComponentContents$Type<never>;
        resolve(arg0: $CommandSourceStack | null, arg1: $Entity | null, arg2: number): $MutableComponent;
        constructor(arg0: string);
    }
    /**
     * Values that may be interpreted as {@link $PlainTextContents$LiteralContents}.
     */
    export type $PlainTextContents$LiteralContents_ = { text?: string,  } | [text?: string, ];
    export class $TranslatableContents implements $ComponentContents {
        type(): $ComponentContents$Type<never>;
        getKey(): string;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getArgs(): $Object[];
        static isAllowedPrimitiveArgument(other: $Object | null): boolean;
        getFallback(): string;
        getArgument(index: number): $FormattedText;
        args: $Object[];
        static CODEC: $MapCodec<$TranslatableContents>;
        static NO_ARGS: $Object[];
        static TYPE: $ComponentContents$Type<$TranslatableContents>;
        constructor(key: string, fallback: string | null, args: $Object[]);
        get key(): string;
        get fallback(): string;
    }
    export class $KeybindResolver {
        static setKeyResolver(keyResolver: $Function_<string, $Supplier<$Component>>): void;
        static keyResolver: $Function<string, $Supplier<$Component>>;
        constructor();
    }
    export class $SelectorContents implements $ComponentContents {
        type(): $ComponentContents$Type<never>;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        getSeparator(): ($Component) | undefined;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        getPattern(): string;
        getSelector(): $EntitySelector;
        static CODEC: $MapCodec<$SelectorContents>;
        static TYPE: $ComponentContents$Type<$SelectorContents>;
        separator: ($Component) | undefined;
        constructor(pattern: string, separator: ($Component_) | undefined);
        get pattern(): string;
        get selector(): $EntitySelector;
    }
    export class $EntityDataSource extends $Record implements $DataSource {
        type(): $DataSource$Type<never>;
        getData(source: $CommandSourceStack): $Stream<$CompoundTag>;
        compiledSelector(): $EntitySelector;
        selectorPattern(): string;
        static SUB_CODEC: $MapCodec<$EntityDataSource>;
        static TYPE: $DataSource$Type<$EntityDataSource>;
        constructor(selectorPattern: string);
        constructor(arg0: string, arg1: $EntitySelector | null);
    }
    /**
     * Values that may be interpreted as {@link $EntityDataSource}.
     */
    export type $EntityDataSource_ = { compiledSelector?: $EntitySelector, selectorPattern?: string,  } | [compiledSelector?: $EntitySelector, selectorPattern?: string, ];
    export class $DataSource$Type<T extends $DataSource> extends $Record implements $StringRepresentable {
        id(): string;
        getSerializedName(): string;
        codec(): $MapCodec<T>;
        getRemappedEnumConstantName(): string;
        constructor(arg0: $MapCodec<T>, arg1: string);
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DataSource$Type}.
     */
    export type $DataSource$Type_<T> = { id?: string, codec?: $MapCodec<$DataSource>,  } | [id?: string, codec?: $MapCodec<$DataSource>, ];
    export class $PlainTextContents {
        static create(text: string): $PlainTextContents;
        static CODEC: $MapCodec<$PlainTextContents>;
        static TYPE: $ComponentContents$Type<$PlainTextContents>;
        static EMPTY: $PlainTextContents;
    }
    export interface $PlainTextContents extends $ComponentContents {
        type(): $ComponentContents$Type<never>;
        text(): string;
    }
    /**
     * Values that may be interpreted as {@link $PlainTextContents}.
     */
    export type $PlainTextContents_ = (() => string);
    export class $KeybindContents implements $ComponentContents {
        getName(): string;
        type(): $ComponentContents$Type<never>;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        static CODEC: $MapCodec<$KeybindContents>;
        static TYPE: $ComponentContents$Type<$KeybindContents>;
        constructor(name: string);
        get name(): string;
    }
    export class $BlockDataSource extends $Record implements $DataSource {
        type(): $DataSource$Type<never>;
        getData(source: $CommandSourceStack): $Stream<$CompoundTag>;
        compiledPos(): $Coordinates;
        posPattern(): string;
        static SUB_CODEC: $MapCodec<$BlockDataSource>;
        static TYPE: $DataSource$Type<$BlockDataSource>;
        constructor(posPattern: string);
        constructor(arg0: string, arg1: $Coordinates | null);
    }
    /**
     * Values that may be interpreted as {@link $BlockDataSource}.
     */
    export type $BlockDataSource_ = { compiledPos?: $Coordinates, posPattern?: string,  } | [compiledPos?: $Coordinates, posPattern?: string, ];
    export class $StorageDataSource extends $Record implements $DataSource {
        type(): $DataSource$Type<never>;
        id(): $ResourceLocation;
        getData(source: $CommandSourceStack): $Stream<$CompoundTag>;
        static SUB_CODEC: $MapCodec<$StorageDataSource>;
        static TYPE: $DataSource$Type<$StorageDataSource>;
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $StorageDataSource}.
     */
    export type $StorageDataSource_ = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
}
