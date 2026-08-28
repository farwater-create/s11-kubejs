import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/mehvahdjukaar/amendments/common/entity" {
    export class $IVisualTransformationProvider {
    }
    export interface $IVisualTransformationProvider {
        amendments$getVisualTransformation(arg0: number): $Matrix4f;
    }
    /**
     * Values that may be interpreted as {@link $IVisualTransformationProvider}.
     */
    export type $IVisualTransformationProvider_ = ((arg0: number) => $Matrix4f);
}
