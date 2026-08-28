import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/text/action" {
    export class $TextActionBuilder {
        insert(line: number, text: $List_<$Component_>): void;
        clear(): void;
        add(text: $List_<$Component_>): void;
        dynamic(id: string): void;
        removeText(match: $Component_): void;
        removeLine(line: number): void;
        removeExactText(match: $Component_): void;
        constructor();
    }
    export class $DynamicTextAction extends $Record implements $TextAction {
        type(): $TooltipActionType<never>;
        apply(lines: $List_<$Component_>): void;
        id(): string;
        static TYPE: $TooltipActionType<$DynamicTextAction>;
        constructor(id: string);
    }
    /**
     * Values that may be interpreted as {@link $DynamicTextAction}.
     */
    export type $DynamicTextAction_ = { id?: string,  } | [id?: string, ];
    export class $AddTextAction extends $Record implements $TextAction {
        type(): $TooltipActionType<never>;
        lines(): $List<$Component>;
        apply(lines: $List_<$Component_>): void;
        static TYPE: $TooltipActionType<$AddTextAction>;
        constructor(lines: $List_<$Component_>);
    }
    /**
     * Values that may be interpreted as {@link $AddTextAction}.
     */
    export type $AddTextAction_ = { lines?: $List_<$Component_>,  } | [lines?: $List_<$Component_>, ];
    export class $TextAction {
        static MAP: $Map<number, $TooltipActionType<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TextAction>;
    }
    export interface $TextAction {
        type(): $TooltipActionType<never>;
        apply(lines: $List_<$Component_>): void;
    }
    export class $RemoveTextTextAction extends $Record implements $TextAction {
        type(): $TooltipActionType<never>;
        apply(lines: $List_<$Component_>): void;
        match(): $Component;
        static TYPE: $TooltipActionType<$RemoveTextTextAction>;
        constructor(match: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $RemoveTextTextAction}.
     */
    export type $RemoveTextTextAction_ = { match?: $Component_,  } | [match?: $Component_, ];
    export class $InsertTextAction extends $Record implements $TextAction {
        type(): $TooltipActionType<never>;
        lines(): $List<$Component>;
        apply(lines: $List_<$Component_>): void;
        line(): number;
        static TYPE: $TooltipActionType<$InsertTextAction>;
        constructor(line: number, lines: $List_<$Component_>);
    }
    /**
     * Values that may be interpreted as {@link $InsertTextAction}.
     */
    export type $InsertTextAction_ = { lines?: $List_<$Component_>, line?: number,  } | [lines?: $List_<$Component_>, line?: number, ];
    export class $RemoveExactTextTextAction extends $Record implements $TextAction {
        type(): $TooltipActionType<never>;
        apply(lines: $List_<$Component_>): void;
        match(): $Component;
        static TYPE: $TooltipActionType<$RemoveExactTextTextAction>;
        constructor(match: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $RemoveExactTextTextAction}.
     */
    export type $RemoveExactTextTextAction_ = { match?: $Component_,  } | [match?: $Component_, ];
    export class $ClearTextAction extends $Record implements $TextAction {
        type(): $TooltipActionType<never>;
        apply(lines: $List_<$Component_>): void;
        static INSTANCE: $ClearTextAction;
        static TYPE: $TooltipActionType<$ClearTextAction>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $ClearTextAction}.
     */
    export type $ClearTextAction_ = {  } | [];
    export class $RemoveLineTextAction extends $Record implements $TextAction {
        type(): $TooltipActionType<never>;
        apply(lines: $List_<$Component_>): void;
        line(): number;
        static TYPE: $TooltipActionType<$RemoveLineTextAction>;
        constructor(line: number);
    }
    /**
     * Values that may be interpreted as {@link $RemoveLineTextAction}.
     */
    export type $RemoveLineTextAction_ = { line?: number,  } | [line?: number, ];
    export class $TooltipActionType<T extends $TextAction> extends $Record {
        type(): number;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(type: number, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $TooltipActionType}.
     */
    export type $TooltipActionType_<T> = { type?: number, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $TextAction>,  } | [type?: number, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $TextAction>, ];
}
