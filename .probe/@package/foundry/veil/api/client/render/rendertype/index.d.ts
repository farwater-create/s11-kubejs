import { $RenderStateShard$TexturingStateShard, $RenderType$OutlineProperty, $RenderStateShard$LineStateShard, $RenderStateShard$OverlayStateShard, $RenderStateShard$CullStateShard, $RenderStateShard$TransparencyStateShard, $RenderType$OutlineProperty_, $RenderStateShard$EmptyTextureStateShard, $RenderType$CompositeState, $RenderStateShard$OutputStateShard, $RenderStateShard$ShaderStateShard, $RenderStateShard$WriteMaskStateShard, $RenderStateShard, $RenderStateShard$DepthTestStateShard, $RenderStateShard$LightmapStateShard, $RenderStateShard$ColorLogicStateShard, $RenderStateShard$LayeringStateShard } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $List } from "@package/java/util";

declare module "@package/foundry/veil/api/client/render/rendertype" {
    export class $VeilRenderTypeBuilder {
    }
    export interface $VeilRenderTypeBuilder {
        create(arg0: $RenderType$OutlineProperty_): $RenderType$CompositeState;
        create(arg0: boolean): $RenderType$CompositeState;
        outputState(arg0: $RenderStateShard$OutputStateShard): $VeilRenderTypeBuilder;
        lineState(arg0: $RenderStateShard$LineStateShard): $VeilRenderTypeBuilder;
        addLayer(arg0: $RenderStateShard): $VeilRenderTypeBuilder;
        cullState(arg0: $RenderStateShard$CullStateShard): $VeilRenderTypeBuilder;
        textureState(arg0: $RenderStateShard$EmptyTextureStateShard): $VeilRenderTypeBuilder;
        layeringState(arg0: $RenderStateShard$LayeringStateShard): $VeilRenderTypeBuilder;
        texturingState(arg0: $RenderStateShard$TexturingStateShard): $VeilRenderTypeBuilder;
        writeMaskState(arg0: $RenderStateShard$WriteMaskStateShard): $VeilRenderTypeBuilder;
        colorLogicState(arg0: $RenderStateShard$ColorLogicStateShard): $VeilRenderTypeBuilder;
        shaderState(arg0: $RenderStateShard$ShaderStateShard): $VeilRenderTypeBuilder;
        transparencyState(arg0: $RenderStateShard$TransparencyStateShard): $VeilRenderTypeBuilder;
        depthTestState(arg0: $RenderStateShard$DepthTestStateShard): $VeilRenderTypeBuilder;
        lightmapState(arg0: $RenderStateShard$LightmapStateShard): $VeilRenderTypeBuilder;
        overlayState(arg0: $RenderStateShard$OverlayStateShard): $VeilRenderTypeBuilder;
    }
    export class $VeilRenderTypeAccessor {
    }
    export interface $VeilRenderTypeAccessor {
        states(): $List<$RenderStateShard>;
        outputState(): $RenderStateShard$OutputStateShard;
        lineState(): $RenderStateShard$LineStateShard;
        cullState(): $RenderStateShard$CullStateShard;
        textureState(): $RenderStateShard$EmptyTextureStateShard;
        outlineProperty(): $RenderType$OutlineProperty;
        layeringState(): $RenderStateShard$LayeringStateShard;
        texturingState(): $RenderStateShard$TexturingStateShard;
        writeMaskState(): $RenderStateShard$WriteMaskStateShard;
        colorLogicState(): $RenderStateShard$ColorLogicStateShard;
        shaderState(): $RenderStateShard$ShaderStateShard;
        transparencyState(): $RenderStateShard$TransparencyStateShard;
        depthTestState(): $RenderStateShard$DepthTestStateShard;
        lightmapState(): $RenderStateShard$LightmapStateShard;
        overlayState(): $RenderStateShard$OverlayStateShard;
        veilShaderId(): $ResourceLocation;
    }
}
