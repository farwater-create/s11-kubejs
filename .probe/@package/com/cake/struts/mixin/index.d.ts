import { $Vector3f } from "@package/org/joml";

declare module "@package/com/cake/struts/mixin" {
    export class $StrutRenderSystemAccessor {
        static struts$getShaderLightDirections(): $Vector3f[];
    }
    export interface $StrutRenderSystemAccessor {
    }
}
