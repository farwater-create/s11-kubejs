import { $EntityModel, $HumanoidModel } from "@package/net/minecraft/client/model";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $TriState_, $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $Event } from "@package/net/neoforged/bus/api";
import { $RenderType, $MultiBufferSource_, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/com/github/alexthe666/citadel/client/event" {
    export class $EventGetOutlineColor extends $Event {
        setColor(arg0: number): void;
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        getEntityIn(): $Entity;
        getColor(): number;
        setEntityIn(arg0: $Entity): void;
        constructor(arg0: $Entity, arg1: number);
    }
    export class $EventLivingRenderer$PostSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number, arg5: $MultiBufferSource_, arg6: number);
    }
    export class $EventLivingRenderer$PostRenderModel extends $EventLivingRenderer$AccessToBufferSource {
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number, arg5: $MultiBufferSource_, arg6: number);
    }
    export class $EventLivingRenderer extends $Event {
        getEntity(): $LivingEntity;
        getPoseStack(): $PoseStack;
        getModel(): $EntityModel<any>;
        getPartialTicks(): number;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number);
        get entity(): $LivingEntity;
        get poseStack(): $PoseStack;
        get model(): $EntityModel<any>;
        get partialTicks(): number;
    }
    export class $EventRenderSplashText$Pre extends $EventRenderSplashText {
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        setSplashTextColor(arg0: number): void;
        getSplashTextColor(): number;
        constructor(arg0: string, arg1: $GuiGraphics, arg2: number, arg3: number);
    }
    export class $EventRenderSplashText$Post extends $EventRenderSplashText {
        constructor(arg0: string, arg1: $GuiGraphics, arg2: number);
    }
    export class $EventGetFluidRenderType extends $Event {
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        getRenderType(): $RenderType;
        getFluidState(): $FluidState;
        setRenderType(arg0: $RenderType): void;
        constructor(arg0: $FluidState, arg1: $RenderType);
        get fluidState(): $FluidState;
    }
    export class $EventGetStarBrightness extends $Event {
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        getLevel(): $ClientLevel;
        setBrightness(arg0: number): void;
        getPartialTicks(): number;
        getBrightness(): number;
        constructor(arg0: $ClientLevel, arg1: number, arg2: number);
        get level(): $ClientLevel;
        get partialTicks(): number;
    }
    export class $EventLivingRenderer$AccessToBufferSource extends $EventLivingRenderer {
        getPackedLight(): number;
        getBodyYRot(): number;
        getBufferSource(): $MultiBufferSource;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number, arg5: $MultiBufferSource_, arg6: number);
        get packedLight(): number;
        get bodyYRot(): number;
        get bufferSource(): $MultiBufferSource;
    }
    export class $EventPosePlayerHand extends $Event {
        getResult(): $TriState;
        setResult(arg0: $TriState_): void;
        getEntityIn(): $Entity;
        getModel(): $HumanoidModel<any>;
        isLeftHand(): boolean;
        constructor(arg0: $LivingEntity, arg1: $HumanoidModel<any>, arg2: boolean);
        get entityIn(): $Entity;
        get model(): $HumanoidModel<any>;
        get leftHand(): boolean;
    }
    export class $EventRenderSplashText extends $Event {
        setSplashText(arg0: string): void;
        getSplashText(): string;
        getGuiGraphics(): $GuiGraphics;
        getPartialTicks(): number;
        constructor(arg0: string, arg1: $GuiGraphics, arg2: number);
        get guiGraphics(): $GuiGraphics;
        get partialTicks(): number;
    }
    export class $EventLivingRenderer$PreSetupAnimations extends $EventLivingRenderer$AccessToBufferSource {
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number, arg5: $MultiBufferSource_, arg6: number);
    }
    export class $EventLivingRenderer$SetupRotations extends $EventLivingRenderer {
        getBodyYRot(): number;
        constructor(arg0: $LivingEntity, arg1: $EntityModel<any>, arg2: $PoseStack, arg3: number, arg4: number);
        get bodyYRot(): number;
    }
}
