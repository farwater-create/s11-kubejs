import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $EntityRenderDispatcher, $LivingEntityRenderer, $EntityRendererProvider$Context } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AbstractClientPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $List } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/entity/player" {
    export class $PlayerRenderer extends $LivingEntityRenderer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>> {
        scale(livingEntity: $AbstractClientPlayer, poseStack: $PoseStack, partialTickTime: number): void;
        getRenderOffset(entity: $AbstractClientPlayer, partialTicks: number): $Vec3;
        renderNameTag(entity: $AbstractClientPlayer, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        render(entity: $AbstractClientPlayer, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        handler$ifk000$skinlayers3d$setModelProperties(abstractClientPlayer: $AbstractClientPlayer, info: $CallbackInfo): void;
        handler$jcn000$parcool$onSetupRotationsHead(arg0: $AbstractClientPlayer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$jcn000$parcool$onSetupRotationsTail(arg0: $AbstractClientPlayer, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        setupRotations(entity: $AbstractClientPlayer, poseStack: $PoseStack, bob: number, yBodyRot: number, partialTick: number, scale: number): void;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $AbstractClientPlayer): $ResourceLocation;
        md707fe4$playeranimator$getShadowRadius$0(entity: $Entity): number;
        renderLeftHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        renderRightHand(poseStack: $PoseStack, buffer: $MultiBufferSource_, combinedLight: number, player: $AbstractClientPlayer): void;
        shadowRadius: number;
        static LEASH_RENDER_STEPS: number;
        entityRenderDispatcher: $EntityRenderDispatcher;
        layers: $List<$RenderLayer<$AbstractClientPlayer, $PlayerModel<$AbstractClientPlayer>>>;
        shadowStrength: number;
        model: $PlayerModel<$AbstractClientPlayer>;
        static NAMETAG_SCALE: number;
        constructor(context: $EntityRendererProvider$Context, useSlimModel: boolean);
    }
}
