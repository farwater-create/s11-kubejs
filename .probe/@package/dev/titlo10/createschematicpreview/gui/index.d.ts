import { $SchematicPreviewAccessor } from "@package/net/swzo/create_blueprinted/mixin";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/dev/titlo10/createschematicpreview/gui" {
    export class $SchematicPreviewPanel implements $SchematicPreviewAccessor {
        clear(): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        onScroll(arg0: number): void;
        setSelected(arg0: string): void;
        updateMouse(arg0: number, arg1: number, arg2: boolean): void;
        yaw(): number;
        pitch(): number;
        constructor();
        set selected(value: string);
    }
}
