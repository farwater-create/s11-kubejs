import { $BiomeSource } from "@package/net/minecraft/world/level/biome";

declare module "@package/com/yungnickyoung/minecraft/betterjungletemples/mixin/accessor" {
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
}
