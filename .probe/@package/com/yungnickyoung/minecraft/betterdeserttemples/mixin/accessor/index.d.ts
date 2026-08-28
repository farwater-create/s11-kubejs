import { $BiomeSource } from "@package/net/minecraft/world/level/biome";
import { $StructureProcessorType } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";

declare module "@package/com/yungnickyoung/minecraft/betterdeserttemples/mixin/accessor" {
    export class $ChunkGeneratorStructureStateAccessor {
    }
    export interface $ChunkGeneratorStructureStateAccessor {
        getBiomeSource(): $BiomeSource;
        get biomeSource(): $BiomeSource;
    }
    /**
     * Values that may be interpreted as {@link $ChunkGeneratorStructureStateAccessor}.
     */
    export type $ChunkGeneratorStructureStateAccessor_ = (() => $BiomeSource);
    export class $StructureProcessorAccessor {
    }
    export interface $StructureProcessorAccessor {
        callGetType(): $StructureProcessorType<never>;
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorAccessor}.
     */
    export type $StructureProcessorAccessor_ = (() => $StructureProcessorType<never>);
    export class $BoundingBoxAccessor {
    }
    export interface $BoundingBoxAccessor {
        setMinX(arg0: number): void;
        setMaxZ(arg0: number): void;
        setMaxX(arg0: number): void;
        setMinZ(arg0: number): void;
        setMaxY(arg0: number): void;
        setMinY(arg0: number): void;
        set minX(value: number);
        set maxZ(value: number);
        set maxX(value: number);
        set minZ(value: number);
        set maxY(value: number);
        set minY(value: number);
    }
}
