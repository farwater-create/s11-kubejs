import { $SchematicPreviewPanel } from "@package/dev/titlo10/createschematicpreview/gui";

declare module "@package/dev/titlo10/createschematicpreview/mixin_interfaces" {
    export class $PreviewScreenAccess {
    }
    export interface $PreviewScreenAccess {
        csp$getPanel(): $SchematicPreviewPanel;
    }
    /**
     * Values that may be interpreted as {@link $PreviewScreenAccess}.
     */
    export type $PreviewScreenAccess_ = (() => $SchematicPreviewPanel);
}
