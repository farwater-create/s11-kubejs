import { $FullTQuad } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad";
import { $ReferenceArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $ByteBuffer } from "@package/java/nio";
import { $ChunkMeshBufferBuilder } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/builder";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree" {
    export class $UpdatedQuadsList extends $ReferenceArrayList<$FullTQuad> {
        getIndexQuadCount(): number;
        applyBufferUpdates(arg0: $ChunkMeshBufferBuilder, arg1: $ByteBuffer): void;
        getMeshQuadCount(): number;
        setQuadCounts(arg0: number, arg1: number): void;
        static DEFAULT_INITIAL_CAPACITY: number;
        constructor();
        get indexQuadCount(): number;
        get meshQuadCount(): number;
    }
}
