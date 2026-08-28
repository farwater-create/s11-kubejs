import { $Function_ } from "@package/java/util/function";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $TrailSettings } from "@package/foundry/veil/api/quasar/emitters/module/render";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/foundry/veil/api/quasar/fx" {
    export class $Trail {
        getLength(): number;
        setLength(arg0: number): void;
        setColor(arg0: number): void;
        setTilingMode(arg0: $Trail$TilingMode): void;
        setParentRotation(arg0: boolean): void;
        setBillboard(arg0: boolean): void;
        render(arg0: $MatrixStack, arg1: $VertexConsumer, arg2: number): void;
        getTexture(): $ResourceLocation;
        setTexture(arg0: $ResourceLocation_): void;
        setFrequency(arg0: number): void;
        pushPoint(arg0: $Vec3_): void;
        setWidthFunction(arg0: $Function_<number, number>): void;
        setMinDistance(arg0: number): void;
        setPoints(arg0: $Vec3_[]): void;
        pushRotatedPoint(arg0: $Vec3_, arg1: $Vec3_): void;
        constructor(arg0: number, arg1: $Function_<number, number>);
        constructor(arg0: $Vec3_[], arg1: number, arg2: $Function_<number, number>);
        constructor(arg0: $TrailSettings);
        set color(value: number);
        set tilingMode(value: $Trail$TilingMode);
        set parentRotation(value: boolean);
        set billboard(value: boolean);
        set frequency(value: number);
        set widthFunction(value: $Function_<number, number>);
        set minDistance(value: number);
        set points(value: $Vec3_[]);
    }
}
