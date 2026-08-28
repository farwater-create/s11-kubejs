import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Parkourability } from "@package/com/alrex/parcool/common/attachment/common";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AnimationOption } from "@package/com/alrex/parcool/api/unstable/animation";
import { $Vector3f } from "@package/org/joml";
import { $RenderFrameEvent, $ViewportEvent$ComputeCameraAngles } from "@package/net/neoforged/neoforge/client/event";

declare module "@package/com/alrex/parcool/client/animation" {
    export class $PlayerModelTransformer {
        reset(): void;
        end(): void;
        setOption(arg0: $AnimationOption): void;
        rotateAdditionallyHeadRoll(arg0: number): $PlayerModelTransformer;
        addRotateLeftLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        addRotateLeftLeg(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        addRotateRightLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        addRotateRightLeg(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        makeLegsLittleMoving(): $PlayerModelTransformer;
        getPartialTick(): number;
        rotateHeadYawRadian(arg0: number): $PlayerModelTransformer;
        getLimbSwing(): number;
        addRotateLeftArm(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        addRotateLeftArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        addRotateRightArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        addRotateRightArm(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        getRawModel(): $PlayerModel<any>;
        rotateHeadPitch(arg0: number): $PlayerModelTransformer;
        getLimbSwingAmount(): number;
        rotateRightArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateRightArm(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        translateRightArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateLeftArm(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        rotateLeftArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        translateRightLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        translateLeftLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        makeArmsNatural(): $PlayerModelTransformer;
        translateLeftArm(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateLeftLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateLeftLeg(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        rotateRightLeg(arg0: number, arg1: number, arg2: number, arg3: number): $PlayerModelTransformer;
        rotateRightLeg(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        rotateAdditionallyHeadPitch(arg0: number): $PlayerModelTransformer;
        rotateAdditionallyHeadYaw(arg0: number): $PlayerModelTransformer;
        translateHead(arg0: number, arg1: number, arg2: number): $PlayerModelTransformer;
        resetModel(arg0: $ModelPart): void;
        getNetHeadYaw(): number;
        getHeadPitch(): number;
        rotateHeadYaw(arg0: number): $PlayerModelTransformer;
        copyFromBodyToWear(): void;
        makeLegsMoveDynamically(arg0: number): $PlayerModelTransformer;
        makeArmsMoveDynamically(arg0: number): $PlayerModelTransformer;
        makeLegsShakingDynamically(arg0: number): $PlayerModelTransformer;
        constructor(arg0: $Player, arg1: $PlayerModel<any>, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number);
        set option(value: $AnimationOption);
        get partialTick(): number;
        get limbSwing(): number;
        get rawModel(): $PlayerModel<any>;
        get limbSwingAmount(): number;
        get netHeadYaw(): number;
        get headPitch(): number;
    }
    export class $PlayerModelRotator {
        end(): void;
        start(): $PlayerModelRotator;
        rotate(arg0: number, arg1: $Vector3f): $PlayerModelRotator;
        startBasedCenter(): $PlayerModelRotator;
        rotateRollRightward(arg0: number): $PlayerModelRotator;
        rotatePitchFrontward(arg0: number): $PlayerModelRotator;
        rotateYawRightward(arg0: number): $PlayerModelRotator;
        getPartialTick(): number;
        startBasedTop(): $PlayerModelRotator;
        translateY(arg0: number): $PlayerModelRotator;
        translate(arg0: number, arg1: number, arg2: number): $PlayerModelRotator;
        endEnabledLegGrounding(): void;
        getYRot(): number;
        getRawStack(): $PoseStack;
        constructor(arg0: $PoseStack, arg1: $Player, arg2: number, arg3: number);
        get partialTick(): number;
        get YRot(): number;
        get rawStack(): $PoseStack;
    }
    export class $Animator {
        onRenderTick(arg0: $RenderFrameEvent, arg1: $Player, arg2: $Parkourability): void;
        rotatePre(arg0: $Player, arg1: $Parkourability, arg2: $PlayerModelRotator): boolean;
        animatePre(arg0: $Player, arg1: $Parkourability, arg2: $PlayerModelTransformer): boolean;
        rotatePost(arg0: $Player, arg1: $Parkourability, arg2: $PlayerModelRotator): void;
        tick(arg0: $Player): void;
        animatePost(arg0: $Player, arg1: $Parkourability, arg2: $PlayerModelTransformer): void;
        onCameraSetUp(arg0: $ViewportEvent$ComputeCameraAngles, arg1: $Player, arg2: $Parkourability): void;
        shouldRemoved(arg0: $Player, arg1: $Parkourability): boolean;
        constructor();
    }
}
