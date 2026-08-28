import { $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
export * as properties from "@package/net/caffeinemc/mods/sodium/client/model/quad/properties";

declare module "@package/net/caffeinemc/mods/sodium/client/model/quad" {
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getFlags(): number;
        getX(arg0: number): number;
        getLight(arg0: number): number;
        getY(arg0: number): number;
        getColor(arg0: number): number;
        hasColor(): boolean;
        getTexV(arg0: number): number;
        getTexU(arg0: number): number;
        getZ(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getAccurateNormal(arg0: number): number;
        getVertexNormal(arg0: number): number;
        getFaceNormal(): number;
        getLightFace(): $Direction;
        calculateNormal(): number;
        getColorIndex(): number;
        get flags(): number;
        get sprite(): $TextureAtlasSprite;
        get faceNormal(): number;
        get lightFace(): $Direction;
        get colorIndex(): number;
    }
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        hasShade(): boolean;
        getFaceNormal(): number;
        getNormalFace(): $ModelQuadFacing;
        hasAO(): boolean;
        get faceNormal(): number;
        get normalFace(): $ModelQuadFacing;
    }
}
