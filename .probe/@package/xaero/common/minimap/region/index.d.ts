import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getTile(arg0: number, arg1: number): $MinimapTile;
        getBuffer(arg0: number): $IntBuffer;
        getX(): number;
        setBlockTextureUpload(arg0: boolean): void;
        setChanged(arg0: boolean): void;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $IntBuffer, arg7: number): void;
        getGlTexture(arg0: number): number;
        setLevelsBuffered(arg0: number): void;
        updateBuffers(arg0: number): void;
        setHasSomething(arg0: boolean): void;
        isHasSomething(): boolean;
        isRefreshRequired(arg0: number): boolean;
        recycleTiles(): void;
        setGlTexture(arg0: number, arg1: number): void;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        getLevelsBuffered(): number;
        isChanged(): boolean;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        getZ(): number;
        bindTexture(arg0: number): number;
        isBlockTextureUpload(): boolean;
        getLevelToRefresh(arg0: number): number;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get x(): number;
        get z(): number;
    }
    export class $MinimapTile {
        getHeight(arg0: number, arg1: number): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getX(): number;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        isSuccess(): boolean;
        setHighlightVersion(arg0: number): void;
        getHighlightVersion(): number;
        setSuccess(arg0: boolean): void;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isSlimeChunk(): boolean;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        setHasSomething(arg0: boolean): void;
        isHasSomething(): boolean;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        setHighlights(arg0: number[]): void;
        setWasTransfered(arg0: boolean): void;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasTerrain(arg0: boolean): void;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        getHighlights(): number[];
        hasTerrain(): boolean;
        getRed(arg0: number, arg1: number, arg2: number): number;
        recycle(): void;
        getZ(): number;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        isChunkGrid(): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get x(): number;
        get z(): number;
        get chunkGrid(): boolean;
    }
}
