import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $TransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $Direction$Axis_ } from "@package/net/minecraft/core";
import { $RenderType, $MultiBufferSource } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/createmod/catnip/render" {
    export class $SpriteShiftEntry {
        set(arg0: $ResourceLocation_, arg1: $ResourceLocation_): void;
        getTarget(): $TextureAtlasSprite;
        getOriginal(): $TextureAtlasSprite;
        static getUnInterpolatedV(arg0: $TextureAtlasSprite, arg1: number): number;
        static getUnInterpolatedU(arg0: $TextureAtlasSprite, arg1: number): number;
        getTargetV(arg0: number): number;
        getTargetU(arg0: number): number;
        getTargetResourceLocation(): $ResourceLocation;
        getOriginalResourceLocation(): $ResourceLocation;
        constructor();
        get target(): $TextureAtlasSprite;
        get original(): $TextureAtlasSprite;
        get targetResourceLocation(): $ResourceLocation;
        get originalResourceLocation(): $ResourceLocation;
    }
    export class $StitchedSprite {
        get(): $TextureAtlasSprite;
        getLocation(): $ResourceLocation;
        static onTextureStitchPost(arg0: $TextureAtlas): void;
        getAtlasLocation(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_);
        constructor(arg0: $ResourceLocation_);
        get location(): $ResourceLocation;
        get atlasLocation(): $ResourceLocation;
    }
    export class $SuperByteBufferCache$Compartment<T> {
        constructor();
    }
    export class $SuperByteBuffer {
        static maxLight(arg0: number, arg1: number): number;
    }
    export interface $SuperByteBuffer extends $TransformStack<$SuperByteBuffer> {
        reset<Self extends $SuperByteBuffer>(): Self;
        isEmpty(): boolean;
        "delete"(): void;
        color<Self extends $SuperByteBuffer>(arg0: number): Self;
        color<Self extends $SuperByteBuffer>(arg0: $Color): Self;
        color<Self extends $SuperByteBuffer>(arg0: number, arg1: number, arg2: number, arg3: number): Self;
        rotate<Self extends $SuperByteBuffer>(arg0: $Direction$Axis_, arg1: number): Self;
        overlay<Self extends $SuperByteBuffer>(arg0: number): Self;
        disableDiffuse<Self extends $SuperByteBuffer>(): Self;
        light<Self extends $SuperByteBuffer>(arg0: number): Self;
        getTransforms(): $PoseStack;
        useLevelLight<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter): Self;
        useLevelLight<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter, arg1: $Matrix4f): Self;
        shiftUVScrolling<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry, arg1: number): Self;
        shiftUVScrolling<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry, arg1: number, arg2: number): Self;
        renderInto(arg0: $PoseStack, arg1: $VertexConsumer): void;
        shiftUVtoSheet<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry, arg1: number, arg2: number, arg3: number): Self;
        shiftUV<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry): Self;
        get empty(): boolean;
        get transforms(): $PoseStack;
    }
    export class $BindableTexture {
    }
    export interface $BindableTexture {
        getLocation(): $ResourceLocation;
        bind(): void;
        get location(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $BindableTexture}.
     */
    export type $BindableTexture_ = (() => $ResourceLocation_);
    export class $SuperRenderTypeBuffer {
    }
    export interface $SuperRenderTypeBuffer extends $MultiBufferSource {
        getBuffer(arg0: $RenderType): $VertexConsumer;
        draw(arg0: $RenderType): void;
        draw(): void;
        getLateBuffer(arg0: $RenderType): $VertexConsumer;
        getEarlyBuffer(arg0: $RenderType): $VertexConsumer;
    }
}
