import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $RenderSection } from "@package/net/caffeinemc/mods/sodium/client/render/chunk";
import { $BlockRenderCache } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $ChunkModelBuilder } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/buffers";
import { $UpdatedQuadsList } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/bsp_tree";
import { $ChunkVertexType } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex/format";
import { $BuiltSectionMeshParts, $BuiltSectionInfo$Builder, $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $Map_, $Map } from "@package/java/util";
import { $Sorter, $TranslucentData, $DynamicTopoData$DynamicTopoSorter } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $Material } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain/material";
export * as tasks from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
export * as estimation from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/estimation";
export * as executor from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
export * as pipeline from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile" {
    export class $ChunkSortOutput extends $BuilderTaskOutput {
        getDynamicSorter(): $DynamicTopoData$DynamicTopoSorter;
        setSorter(arg0: $Sorter): void;
        getSorter(): $Sorter;
        markAsReusingUploadedData(): void;
        isReusingUploadedIndexData(): boolean;
        submitTime: number;
        render: $RenderSection;
        constructor(arg0: $RenderSection, arg1: number);
        constructor(arg0: $RenderSection, arg1: number, arg2: $Sorter);
        get dynamicSorter(): $DynamicTopoData$DynamicTopoSorter;
        get reusingUploadedIndexData(): boolean;
    }
    export class $BuilderTaskOutput {
        destroy(): void;
        getResultSize(): number;
        submitTime: number;
        render: $RenderSection;
        constructor(arg0: $RenderSection, arg1: number);
        get resultSize(): number;
    }
    export class $ChunkBuildContext {
        cleanup(): void;
        cache: $BlockRenderCache;
        buffers: $ChunkBuildBuffers;
        constructor(arg0: $ClientLevel, arg1: $ChunkVertexType);
    }
    export class $ChunkBuildOutput extends $ChunkSortOutput {
        getMesh(arg0: $TerrainRenderPass): $BuiltSectionMeshParts;
        calculateResultSize(): number;
        submitTime: number;
        translucentData: $TranslucentData;
        render: $RenderSection;
        meshes: $Map<$TerrainRenderPass, $BuiltSectionMeshParts>;
        info: $BuiltSectionInfo;
        constructor(arg0: $RenderSection, arg1: number, arg2: $TranslucentData, arg3: $BuiltSectionInfo, arg4: $Map_<$TerrainRenderPass, $BuiltSectionMeshParts>);
    }
    export class $ChunkBuildBuffers {
        get(arg0: $Material): $ChunkModelBuilder;
        get(arg0: $TerrainRenderPass): $ChunkModelBuilder;
        init(arg0: $BuiltSectionInfo$Builder, arg1: number): void;
        destroy(): void;
        static makeVertexSegments(): number[];
        createMesh(arg0: $TerrainRenderPass, arg1: number, arg2: boolean, arg3: boolean): $BuiltSectionMeshParts;
        createModifiedTranslucentMesh(arg0: $UpdatedQuadsList): $BuiltSectionMeshParts;
        constructor(arg0: $ChunkVertexType);
    }
}
