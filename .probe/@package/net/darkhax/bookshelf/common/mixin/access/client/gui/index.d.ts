import { $Component_ } from "@package/net/minecraft/network/chat";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";

declare module "@package/net/darkhax/bookshelf/common/mixin/access/client/gui" {
    export class $AccessorAbstractWidget {
        static bookshelf$renderScrollingString(arg0: $GuiGraphics, arg1: $Font, arg2: $Component_, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
    }
    export interface $AccessorAbstractWidget {
    }
}
