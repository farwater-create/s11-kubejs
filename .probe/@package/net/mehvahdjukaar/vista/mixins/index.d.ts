import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/net/mehvahdjukaar/vista/mixins" {
    export class $GameRendererAccessor {
    }
    export interface $GameRendererAccessor {
        vista$bobHurt(arg0: $PoseStack, arg1: number): void;
        vista$bobView(arg0: $PoseStack, arg1: number): void;
    }
}
