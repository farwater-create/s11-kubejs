import { $BlockPos_, $Position, $SectionPos } from "@package/net/minecraft/core";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix4fc, $Vector4fc, $Vector2dc, $Vector3dc, $Matrix3f, $Vector3ic, $Vector2fc, $Vector3fc, $Quaternionfc, $Quaterniondc } from "@package/org/joml";
export * as texture from "@package/foundry/veil/api/client/render/texture";
export * as framebuffer from "@package/foundry/veil/api/client/render/framebuffer";
export * as rendertype from "@package/foundry/veil/api/client/render/rendertype";

declare module "@package/foundry/veil/api/client/render" {
    export class $MatrixStack {
    }
    export interface $MatrixStack {
        clear(): void;
        position(): $Matrix4f;
        isEmpty(): boolean;
        copy(arg0: $MatrixStack): void;
        copy(arg0: $PoseStack$Pose): void;
        copy(arg0: $PoseStack): void;
        isIdentity(): boolean;
        rotate(arg0: $Quaternionfc): void;
        rotate(arg0: $Quaterniondc): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        normal(): $Matrix3f;
        rotateAround(arg0: $Quaternionfc, arg1: number, arg2: number, arg3: number): void;
        rotateAround(arg0: $Quaterniondc, arg1: number, arg2: number, arg3: number): void;
        rotateXYZ(arg0: number, arg1: number, arg2: number): void;
        rotateXYZ(arg0: number, arg1: number, arg2: number): void;
        rotateZYX(arg0: number, arg1: number, arg2: number): void;
        rotateZYX(arg0: number, arg1: number, arg2: number): void;
        setIdentity(): void;
        toPoseStack(): $PoseStack;
        applyScale(arg0: number): void;
        applyScale(arg0: $Vector3fc): void;
        applyScale(arg0: $Vector3dc): void;
        applyScale(arg0: number, arg1: number, arg2: number): void;
        applyScale(arg0: number, arg1: number, arg2: number): void;
        applyScale(arg0: number): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        translate(arg0: $Vector3fc): void;
        translate(arg0: $Vector3dc): void;
        translate(arg0: number, arg1: number, arg2: number): void;
        matrixPop(): void;
        matrixPush(): void;
        pose(): $PoseStack$Pose;
        get empty(): boolean;
    }
    export class $CullFrustum {
    }
    export interface $CullFrustum {
        getPosition(): $Vector3dc;
        getModelViewProjectionMatrix(): $Matrix4fc;
        testSphere(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testSphere(arg0: $Vector3fc, arg1: number): boolean;
        testSphere(arg0: $Vector3dc, arg1: number): boolean;
        testAab(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testAab(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        testAab(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testAab(arg0: $AABB_): boolean;
        testPoint(arg0: $Position): boolean;
        testPoint(arg0: $Vector3ic): boolean;
        testPoint(arg0: $Vector3fc): boolean;
        testPoint(arg0: $Vector3dc): boolean;
        testPoint(arg0: number, arg1: number, arg2: number): boolean;
        testSection(arg0: $SectionPos): boolean;
        testLineSegment(arg0: $Vector3dc, arg1: $Vector3dc): boolean;
        testLineSegment(arg0: $Vector3fc, arg1: $Vector3fc): boolean;
        testLineSegment(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        testPlaneXY(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXY(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXY(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        testPlaneXZ(arg0: $Vector2dc, arg1: $Vector2dc): boolean;
        testPlaneXZ(arg0: $Vector2fc, arg1: $Vector2fc): boolean;
        testPlaneXZ(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getViewVector(): $Vector3fc;
        testBlock(arg0: $BlockPos_): boolean;
        toFrustum(): $Frustum;
        getPlanes(): $Vector4fc[];
        get position(): $Vector3dc;
        get modelViewProjectionMatrix(): $Matrix4fc;
        get viewVector(): $Vector3fc;
        get planes(): $Vector4fc[];
    }
}
