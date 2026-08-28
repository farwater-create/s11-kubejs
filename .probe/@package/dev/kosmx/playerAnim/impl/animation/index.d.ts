import { $AnimationProcessor } from "@package/dev/kosmx/playerAnim/core/impl";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $IAnimation } from "@package/dev/kosmx/playerAnim/api/layered";

declare module "@package/dev/kosmx/playerAnim/impl/animation" {
    export class $AnimationApplier extends $AnimationProcessor {
        updatePart(partName: string, part: $ModelPart): void;
        constructor(animation: $IAnimation);
    }
}
