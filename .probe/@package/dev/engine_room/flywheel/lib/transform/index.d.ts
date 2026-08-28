import { $Vec3i, $Direction$Axis_, $Direction_ } from "@package/net/minecraft/core";
import { $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Axis_ } from "@package/com/mojang/math";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Matrix4fc, $AxisAngle4f, $Matrix3fc, $Vector3ic, $Vector3fc, $Quaternionfc } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/lib/transform" {
    export class $Rotate<Self extends $Rotate<Self>> {
    }
    export interface $Rotate<Self extends $Rotate<Self>> {
        self(): Self;
        rotate(radians: number, axis: $Vector3fc): Self;
        rotate(radians: number, axis: $Direction_): Self;
        rotate(radians: number, axis: $Direction$Axis_): Self;
        rotate(arg0: $Quaternionfc): Self;
        rotate(axisAngle: $AxisAngle4f): Self;
        rotate(radians: number, axisX: number, axisY: number, axisZ: number): Self;
        rotate(radians: number, axis: $Axis_): Self;
        rotateX(radians: number): Self;
        rotateY(radians: number): Self;
        rotateZ(radians: number): Self;
        rotateTo(from: $Direction_, to: $Direction_): Self;
        rotateTo(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): Self;
        rotateTo(from: $Vector3fc, to: $Vector3fc): Self;
        rotateYDegrees(degrees: number): Self;
        rotateXDegrees(degrees: number): Self;
        rotateZDegrees(degrees: number): Self;
        rotateToFace(facing: $Direction_): Self;
        rotateDegrees(degrees: number, axis: $Direction$Axis_): Self;
        rotateDegrees(degrees: number, axis: $Vector3fc): Self;
        rotateDegrees(degrees: number, axis: $Axis_): Self;
        rotateDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): Self;
        rotateDegrees(degrees: number, axis: $Direction_): Self;
    }
    /**
     * Values that may be interpreted as {@link $Rotate}.
     */
    export type $Rotate_<Self> = ((arg0: $Quaternionfc) => Self);
    export class $Affine<Self extends $Affine<Self>> {
    }
    export interface $Affine<Self extends $Affine<Self>> extends $Translate<Self>, $Rotate<Self>, $Scale<Self> {
        rotateAround(quaternion: $Quaternionfc, x: number, y: number, z: number): Self;
        rotateAround(quaternion: $Quaternionfc, vec: $Vector3fc): Self;
        rotateZCenteredDegrees(degrees: number): Self;
        rotateYCenteredDegrees(degrees: number): Self;
        rotateXCenteredDegrees(degrees: number): Self;
        rotateCentered(radians: number, axisX: number, axisY: number, axisZ: number): Self;
        rotateCentered(q: $Quaternionfc): Self;
        rotateCentered(radians: number, axis: $Direction_): Self;
        rotateCentered(radians: number, axis: $Axis_): Self;
        rotateCentered(radians: number, axis: $Direction$Axis_): Self;
        rotateCentered(radians: number, axis: $Vector3fc): Self;
        rotateCenteredDegrees(degrees: number, axis: $Direction$Axis_): Self;
        rotateCenteredDegrees(degrees: number, axis: $Axis_): Self;
        rotateCenteredDegrees(degrees: number, axis: $Vector3fc): Self;
        rotateCenteredDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): Self;
        rotateCenteredDegrees(degrees: number, axis: $Direction_): Self;
        rotateYCentered(radians: number): Self;
        rotateZCentered(radians: number): Self;
        rotateXCentered(radians: number): Self;
    }
    export class $TransformStack<Self extends $TransformStack<Self>> {
        static of(stack: $PoseStack): $PoseTransformStack;
    }
    export interface $TransformStack<Self extends $TransformStack<Self>> extends $Transform<Self> {
        pushPose(): Self;
        popPose(): Self;
    }
    export class $Transform<Self extends $Transform<Self>> {
    }
    export interface $Transform<Self extends $Transform<Self>> extends $Affine<Self> {
        transform(pose: $PoseStack$Pose): Self;
        transform(stack: $PoseStack): Self;
        transform(pose: $Matrix4fc, normal: $Matrix3fc): Self;
        mulPose(arg0: $Matrix4fc): Self;
        mulNormal(arg0: $Matrix3fc): Self;
    }
    export class $Translate<Self extends $Translate<Self>> {
        static CENTER: number;
    }
    export interface $Translate<Self extends $Translate<Self>> {
        translateBack(vec: $Vector3fc): Self;
        translateBack(vec: $Vector3ic): Self;
        translateBack(vec: $Vec3i): Self;
        translateBack(v: number): Self;
        translateBack(x: number, y: number, z: number): Self;
        translateBack(vec: $Vec3_): Self;
        translateBack(x: number, y: number, z: number): Self;
        translateX(x: number): Self;
        center(): Self;
        nudge(seed: number): Self;
        translateY(y: number): Self;
        uncenter(): Self;
        translate(vec: $Vec3_): Self;
        translate(v: number): Self;
        translate(x: number, y: number, z: number): Self;
        translate(arg0: number, arg1: number, arg2: number): Self;
        translate(vec: $Vector3fc): Self;
        translate(vec: $Vec3i): Self;
        translate(vec: $Vector3ic): Self;
        translateZ(z: number): Self;
    }
    /**
     * Values that may be interpreted as {@link $Translate}.
     */
    export type $Translate_<Self> = ((arg0: number, arg1: number, arg2: number) => Self);
    export class $Scale<Self extends $Scale<Self>> {
    }
    export interface $Scale<Self extends $Scale<Self>> {
        scale(factors: $Vector3fc): Self;
        scale(factor: number): Self;
        scale(arg0: number, arg1: number, arg2: number): Self;
        scaleY(factor: number): Self;
        scaleZ(factor: number): Self;
        scaleX(factor: number): Self;
    }
    /**
     * Values that may be interpreted as {@link $Scale}.
     */
    export type $Scale_<Self> = ((arg0: number, arg1: number, arg2: number) => Self);
    export class $PoseTransformStack implements $TransformStack<$PoseTransformStack> {
        scale(factorX: number, factorY: number, factorZ: number): $PoseTransformStack;
        unwrap(): $PoseStack;
        rotate(quaternion: $Quaternionfc): $PoseTransformStack;
        rotateAround(quaternion: $Quaternionfc, x: number, y: number, z: number): $PoseTransformStack;
        translate(x: number, y: number, z: number): $PoseTransformStack;
        mulPose(pose: $Matrix4fc): $PoseTransformStack;
        pushPose(): $PoseTransformStack;
        popPose(): $PoseTransformStack;
        mulNormal(normal: $Matrix3fc): $PoseTransformStack;
        transform(pose: $PoseStack$Pose): $PoseTransformStack;
        transform(stack: $PoseStack): $PoseTransformStack;
        transform(pose: $Matrix4fc, normal: $Matrix3fc): $PoseTransformStack;
        rotateAround(quaternion: $Quaternionfc, vec: $Vector3fc): $PoseTransformStack;
        rotateZCenteredDegrees(degrees: number): $PoseTransformStack;
        rotateYCenteredDegrees(degrees: number): $PoseTransformStack;
        rotateXCenteredDegrees(degrees: number): $PoseTransformStack;
        rotateCentered(radians: number, axisX: number, axisY: number, axisZ: number): $PoseTransformStack;
        rotateCentered(q: $Quaternionfc): $PoseTransformStack;
        rotateCentered(radians: number, axis: $Direction_): $PoseTransformStack;
        rotateCentered(radians: number, axis: $Axis_): $PoseTransformStack;
        rotateCentered(radians: number, axis: $Direction$Axis_): $PoseTransformStack;
        rotateCentered(radians: number, axis: $Vector3fc): $PoseTransformStack;
        rotateCenteredDegrees(degrees: number, axis: $Direction$Axis_): $PoseTransformStack;
        rotateCenteredDegrees(degrees: number, axis: $Axis_): $PoseTransformStack;
        rotateCenteredDegrees(degrees: number, axis: $Vector3fc): $PoseTransformStack;
        rotateCenteredDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): $PoseTransformStack;
        rotateCenteredDegrees(degrees: number, axis: $Direction_): $PoseTransformStack;
        rotateYCentered(radians: number): $PoseTransformStack;
        rotateZCentered(radians: number): $PoseTransformStack;
        rotateXCentered(radians: number): $PoseTransformStack;
        translateBack(vec: $Vector3fc): $PoseTransformStack;
        translateBack(vec: $Vector3ic): $PoseTransformStack;
        translateBack(vec: $Vec3i): $PoseTransformStack;
        translateBack(v: number): $PoseTransformStack;
        translateBack(x: number, y: number, z: number): $PoseTransformStack;
        translateBack(vec: $Vec3_): $PoseTransformStack;
        translateBack(x: number, y: number, z: number): $PoseTransformStack;
        translateX(x: number): $PoseTransformStack;
        center(): $PoseTransformStack;
        nudge(seed: number): $PoseTransformStack;
        translateY(y: number): $PoseTransformStack;
        uncenter(): $PoseTransformStack;
        translate(vec: $Vec3_): $PoseTransformStack;
        translate(v: number): $PoseTransformStack;
        translate(x: number, y: number, z: number): $PoseTransformStack;
        translate(vec: $Vector3fc): $PoseTransformStack;
        translate(vec: $Vec3i): $PoseTransformStack;
        translate(vec: $Vector3ic): $PoseTransformStack;
        translateZ(z: number): $PoseTransformStack;
        self(): $PoseTransformStack;
        rotate(radians: number, axis: $Vector3fc): $PoseTransformStack;
        rotate(radians: number, axis: $Direction_): $PoseTransformStack;
        rotate(radians: number, axis: $Direction$Axis_): $PoseTransformStack;
        rotate(axisAngle: $AxisAngle4f): $PoseTransformStack;
        rotate(radians: number, axisX: number, axisY: number, axisZ: number): $PoseTransformStack;
        rotate(radians: number, axis: $Axis_): $PoseTransformStack;
        rotateX(radians: number): $PoseTransformStack;
        rotateY(radians: number): $PoseTransformStack;
        rotateZ(radians: number): $PoseTransformStack;
        rotateTo(from: $Direction_, to: $Direction_): $PoseTransformStack;
        rotateTo(fromX: number, fromY: number, fromZ: number, toX: number, toY: number, toZ: number): $PoseTransformStack;
        rotateTo(from: $Vector3fc, to: $Vector3fc): $PoseTransformStack;
        rotateYDegrees(degrees: number): $PoseTransformStack;
        rotateXDegrees(degrees: number): $PoseTransformStack;
        rotateZDegrees(degrees: number): $PoseTransformStack;
        rotateToFace(facing: $Direction_): $PoseTransformStack;
        rotateDegrees(degrees: number, axis: $Direction$Axis_): $PoseTransformStack;
        rotateDegrees(degrees: number, axis: $Vector3fc): $PoseTransformStack;
        rotateDegrees(degrees: number, axis: $Axis_): $PoseTransformStack;
        rotateDegrees(degrees: number, axisX: number, axisY: number, axisZ: number): $PoseTransformStack;
        rotateDegrees(degrees: number, axis: $Direction_): $PoseTransformStack;
        scale(factors: $Vector3fc): $PoseTransformStack;
        scale(factor: number): $PoseTransformStack;
        scaleY(factor: number): $PoseTransformStack;
        scaleZ(factor: number): $PoseTransformStack;
        scaleX(factor: number): $PoseTransformStack;
        constructor(stack: $PoseStack);
    }
}
