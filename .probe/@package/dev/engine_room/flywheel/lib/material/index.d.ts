import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CardinalLightingMode_, $Material, $FogShader_, $LightShader, $FogShader, $WriteMask, $DepthTest_, $CutoutShader_, $CutoutShader, $CardinalLightingMode, $WriteMask_, $DepthTest, $Transparency, $LightShader_, $MaterialShaders, $Transparency_ } from "@package/dev/engine_room/flywheel/api/material";

declare module "@package/dev/engine_room/flywheel/lib/material" {
    export class $SimpleMaterial implements $Material {
        static builder(): $SimpleMaterial$Builder;
        texture(): $ResourceLocation;
        transparency(): $Transparency;
        shaders(): $MaterialShaders;
        light(): $LightShader;
        ambientOcclusion(): boolean;
        fog(): $FogShader;
        blur(): boolean;
        mipmap(): boolean;
        depthTest(): $DepthTest;
        cutout(): $CutoutShader;
        cardinalLightingMode(): $CardinalLightingMode;
        polygonOffset(): boolean;
        backfaceCulling(): boolean;
        static builderOf(material: $Material): $SimpleMaterial$Builder;
        useLight(): boolean;
        useOverlay(): boolean;
        writeMask(): $WriteMask;
        equals(other: $Material): boolean;
    }
    export class $SimpleMaterial$Builder implements $Material {
        build(): $SimpleMaterial;
        copyFrom(material: $Material): $SimpleMaterial$Builder;
        texture(value: $ResourceLocation_): $SimpleMaterial$Builder;
        texture(): $ResourceLocation;
        transparency(value: $Transparency_): $SimpleMaterial$Builder;
        transparency(): $Transparency;
        shaders(): $MaterialShaders;
        shaders(value: $MaterialShaders): $SimpleMaterial$Builder;
        light(): $LightShader;
        light(value: $LightShader_): $SimpleMaterial$Builder;
        ambientOcclusion(ambientOcclusion: boolean): $SimpleMaterial$Builder;
        ambientOcclusion(): boolean;
        fog(value: $FogShader_): $SimpleMaterial$Builder;
        fog(): $FogShader;
        blur(): boolean;
        blur(value: boolean): $SimpleMaterial$Builder;
        mipmap(): boolean;
        mipmap(value: boolean): $SimpleMaterial$Builder;
        depthTest(value: $DepthTest_): $SimpleMaterial$Builder;
        depthTest(): $DepthTest;
        cutout(value: $CutoutShader_): $SimpleMaterial$Builder;
        cutout(): $CutoutShader;
        cardinalLightingMode(value: $CardinalLightingMode_): $SimpleMaterial$Builder;
        cardinalLightingMode(): $CardinalLightingMode;
        polygonOffset(): boolean;
        polygonOffset(value: boolean): $SimpleMaterial$Builder;
        backfaceCulling(value: boolean): $SimpleMaterial$Builder;
        backfaceCulling(): boolean;
        /**
         * @deprecated
         */
        diffuse(value: boolean): $SimpleMaterial$Builder;
        useLight(): boolean;
        useLight(value: boolean): $SimpleMaterial$Builder;
        useOverlay(): boolean;
        useOverlay(value: boolean): $SimpleMaterial$Builder;
        writeMask(value: $WriteMask_): $SimpleMaterial$Builder;
        writeMask(): $WriteMask;
        equals(other: $Material): boolean;
        constructor();
        constructor(material: $Material);
    }
}
