import { $ModelPart, $PartPose } from "@package/net/minecraft/client/model/geom";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/dev/tr7zw/skinlayers/api" {
    export class $OffsetProvider {
        static HEAD: $OffsetProvider;
        static LEFT_ARM: $OffsetProvider;
        static FIRSTPERSON_RIGHT_ARM: $OffsetProvider;
        static SKULL: $OffsetProvider;
        static RIGHT_ARM_SLIM: $OffsetProvider;
        static RIGHT_LEG: $OffsetProvider;
        static LEFT_LEG: $OffsetProvider;
        static FIRSTPERSON_LEFT_ARM_SLIM: $OffsetProvider;
        static FIRSTPERSON_RIGHT_ARM_SLIM: $OffsetProvider;
        static FIRSTPERSON_LEFT_ARM: $OffsetProvider;
        static LEFT_ARM_SLIM: $OffsetProvider;
        static RIGHT_ARM: $OffsetProvider;
        static BODY: $OffsetProvider;
    }
    export interface $OffsetProvider {
        applyOffset(arg0: $PoseStack, arg1: $Mesh): void;
    }
    /**
     * Values that may be interpreted as {@link $OffsetProvider}.
     */
    export type $OffsetProvider_ = ((arg0: $PoseStack, arg1: $Mesh) => void);
    export class $PlayerData {
    }
    export interface $PlayerData {
        getRightLegMesh(): $Mesh;
        getHeadMesh(): $Mesh;
        getRightArmMesh(): $Mesh;
        getTorsoMesh(): $Mesh;
        getLeftArmMesh(): $Mesh;
        getLeftLegMesh(): $Mesh;
        get rightLegMesh(): $Mesh;
        get headMesh(): $Mesh;
        get rightArmMesh(): $Mesh;
        get torsoMesh(): $Mesh;
        get leftArmMesh(): $Mesh;
        get leftLegMesh(): $Mesh;
    }
    export class $Mesh {
        static EMPTY: $Mesh;
    }
    export interface $Mesh {
        reset(): void;
        copyFrom(arg0: $ModelPart): void;
        setPosition(arg0: number, arg1: number, arg2: number): void;
        render(poseStack: $PoseStack, vertexConsumer: $VertexConsumer, light: number, overlay: number): void;
        render(arg0: $ModelPart, arg1: $PoseStack, arg2: $VertexConsumer, arg3: number, arg4: number, arg5: number): void;
        render(vanillaModel: $ModelPart, poseStack: $PoseStack, vertexConsumer: $VertexConsumer, light: number, overlay: number, red: number, green: number, blue: number, alpha: number): void;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        setRotation(arg0: number, arg1: number, arg2: number): void;
        loadPose(arg0: $PartPose): void;
    }
    export class $SkullData {
    }
    export interface $SkullData {
        getMesh(): $Mesh;
        get mesh(): $Mesh;
    }
    /**
     * Values that may be interpreted as {@link $SkullData}.
     */
    export type $SkullData_ = (() => $Mesh);
}
