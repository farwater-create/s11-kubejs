import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component, $Style } from "@package/net/minecraft/network/chat";
import { $IRightClickableElement } from "@package/xaero/map/gui";
import { $Object } from "@package/java/lang";

declare module "@package/xaero/map/gui/dropdown/rightclick" {
    export class $RightClickOption {
        isActive(): boolean;
        getDisplayName(): $Component;
        onSelected(arg0: $Screen): boolean;
        onAction(arg0: $Screen): void;
        setActive(arg0: boolean): $RightClickOption;
        setNameFormatArgs(...arg0: $Object[]): $RightClickOption;
        constructor(arg0: string, arg1: $Style, arg2: number, arg3: $IRightClickableElement);
        constructor(arg0: string, arg1: number, arg2: $IRightClickableElement);
        get displayName(): $Component;
        set nameFormatArgs(value: $Object[]);
    }
}
