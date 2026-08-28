import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $List_, $List } from "@package/java/util";

declare module "@package/com/terraformersmc/mod_menu/mixin" {
    export class $AccessorGridLayout {
    }
    export interface $AccessorGridLayout {
        getChildren(): $List<$LayoutElement>;
        get children(): $List<$LayoutElement>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorGridLayout}.
     */
    export type $AccessorGridLayout_ = (() => $List_<$LayoutElement>);
}
