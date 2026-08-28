import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $SuperBlockEntityBehaviour } from "@package/com/cake/azimuth/behaviour";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/com/cake/azimuth/behaviour/render" {
    export class $BlockEntityBehaviourRenderer<T extends $SmartBlockEntity> {
        renderSafe(arg0: $SuperBlockEntityBehaviour, arg1: T, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number): void;
        castRenderSafe(arg0: $SuperBlockEntityBehaviour, arg1: $SmartBlockEntity, arg2: number, arg3: $PoseStack, arg4: $MultiBufferSource_, arg5: number, arg6: number): void;
        constructor();
    }
}
