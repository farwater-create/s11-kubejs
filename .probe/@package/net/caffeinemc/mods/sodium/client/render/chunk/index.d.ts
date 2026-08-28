import { $Long2ReferenceMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ChunkBuilder, $ChunkJob } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/executor";
import { $TextProvider } from "@package/net/caffeinemc/mods/sodium/client/gui/options";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Camera } from "@package/net/minecraft/client";
import { $BlockEntityRenderPredicate_, $BlockEntityRenderPredicate } from "@package/net/caffeinemc/mods/sodium/api/blockentity";
import { $RenderRegion } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
import { $Map_, $Map, $ArrayDeque, $Collection } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $BuiltSectionInfo } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $CameraMovement_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger";
import { $CameraTransform, $Viewport } from "@package/net/caffeinemc/mods/sodium/client/render/viewport";
import { $CommandList } from "@package/net/caffeinemc/mods/sodium/client/gl/device";
import { $BlockGetter } from "@package/net/minecraft/world/level";
import { $Component } from "@package/net/minecraft/network/chat";
import { $RenderSectionManagerAccessor } from "@package/foundry/veil/forge/mixin/client/perspective/sodium";
import { $SortBehavior_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
import { $RenderSectionManagerAccessor as $RenderSectionManagerAccessor$1 } from "@package/foundry/veil/forge/mixin/compat/sodium";
import { $TerrainRenderPass } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";
import { $ChunkBuilderMeshingTask, $ChunkBuilderSortingTask } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/tasks";
import { $TranslucentData } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data";
import { $RenderSectionExtension } from "@package/foundry/veil/forge/ext";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SortedRenderLists, $ChunkRenderListIterable_ } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Vector3dc, $Matrix4fc } from "@package/org/joml";
export * as data from "@package/net/caffeinemc/mods/sodium/client/render/chunk/data";
export * as translucent_sorting from "@package/net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting";
export * as lists from "@package/net/caffeinemc/mods/sodium/client/render/chunk/lists";
export * as compile from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile";
export * as map from "@package/net/caffeinemc/mods/sodium/client/render/chunk/map";
export * as vertex from "@package/net/caffeinemc/mods/sodium/client/render/chunk/vertex";
export * as region from "@package/net/caffeinemc/mods/sodium/client/render/chunk/region";
export * as terrain from "@package/net/caffeinemc/mods/sodium/client/render/chunk/terrain";

declare module "@package/net/caffeinemc/mods/sodium/client/render/chunk" {
    export class $RenderSectionManager implements $RenderSectionManagerAccessor, $RenderSectionManagerAccessor$1 {
        update(arg0: $Camera, arg1: $Viewport, arg2: boolean): void;
        destroy(): void;
        getTotalSections(): number;
        renderLayer(arg0: $ChunkRenderMatrices_, arg1: $TerrainRenderPass, arg2: number, arg3: number, arg4: number): void;
        handler$bcg000$veil$isSectionVisible(arg0: number, arg1: number, arg2: number, arg3: $CallbackInfoReturnable<any>): void;
        getBuilder(): $ChunkBuilder;
        scheduleSort(arg0: number, arg1: boolean): void;
        onSectionRemoved(arg0: number, arg1: number, arg2: number): void;
        createRebuildTask(arg0: $RenderSection, arg1: number): $ChunkBuilderMeshingTask;
        createSortTask(arg0: $RenderSection, arg1: number): $ChunkBuilderSortingTask;
        onSectionAdded(arg0: number, arg1: number, arg2: number): void;
        getVisibleChunkCount(): number;
        scheduleRebuild(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        needsUpdate(): boolean;
        updateChunks(arg0: boolean): void;
        onChunkAdded(arg0: number, arg1: number): void;
        markGraphDirty(): void;
        cleanupAndFlip(): void;
        getRenderLists(): $SortedRenderLists;
        onChunkRemoved(arg0: number, arg1: number): void;
        tickVisibleRenders(): void;
        isSectionBuilt(arg0: number, arg1: number, arg2: number): boolean;
        isSectionVisible(arg0: number, arg1: number, arg2: number): boolean;
        uploadChunks(): void;
        prepareFrame(arg0: $Vector3dc): void;
        getSectionsWithGlobalEntities(): $Collection<$RenderSection>;
        getDebugStrings(): $Collection<string>;
        beforeSectionUpdates(): void;
        finalizeRenderLists(arg0: $Viewport): void;
        processGFNIMovement(arg0: $CameraMovement_): void;
        getTaskLists(): $Map<$TaskQueueType, $ArrayDeque<$RenderSection>>;
        getChunkRenderer(): $ChunkRenderer;
        setRenderLists(arg0: $SortedRenderLists): void;
        setTaskLists(arg0: $Map_<$TaskQueueType_, $ArrayDeque<$RenderSection>>): void;
        getSectionByPosition(): $Long2ReferenceMap<$RenderSection>;
        constructor(arg0: $ClientLevel, arg1: number, arg2: $SortBehavior_, arg3: $CommandList);
        get totalSections(): number;
        get builder(): $ChunkBuilder;
        get visibleChunkCount(): number;
        get sectionsWithGlobalEntities(): $Collection<$RenderSection>;
        get debugStrings(): $Collection<string>;
        get chunkRenderer(): $ChunkRenderer;
        get sectionByPosition(): $Long2ReferenceMap<$RenderSection>;
    }
    export class $TaskQueueType extends $Enum<$TaskQueueType> {
        static values(): $TaskQueueType[];
        static valueOf(arg0: string): $TaskQueueType;
        queueSizeLimit(): number;
        allowsUnlimitedUploadDuration(): boolean;
        static ALWAYS_DEFER: $TaskQueueType;
        static ZERO_FRAME_DEFER: $TaskQueueType;
        static ONE_FRAME_DEFER: $TaskQueueType;
        static INITIAL_BUILD: $TaskQueueType;
    }
    /**
     * Values that may be interpreted as {@link $TaskQueueType}.
     */
    export type $TaskQueueType_ = "zero_frame_defer" | "one_frame_defer" | "always_defer" | "initial_build";
    export class $RenderSection implements $RenderSectionExtension {
        "delete"(): void;
        getRegion(): $RenderRegion;
        getFlags(): number;
        getPosition(): $SectionPos;
        isBuilt(): boolean;
        handler$bch000$veil$getIncomingDirections(arg0: $CallbackInfoReturnable<any>): void;
        getCenterY(): number;
        setInfo(arg0: $BuiltSectionInfo): boolean;
        setTranslucentData(arg0: $TranslucentData): void;
        getLastUploadFrame(): number;
        setRunningJob(arg0: $ChunkJob): void;
        setLastUploadFrame(arg0: number): void;
        getAnimatedSprites(): $TextureAtlasSprite[];
        getPendingUpdate(): number;
        getRunningJob(): $ChunkJob;
        setPendingUpdate(arg0: number, arg1: number): void;
        getTranslucentData(): $TranslucentData;
        clearPendingUpdate(): void;
        setAdjacentNode(arg0: number, arg1: $RenderSection): void;
        prepareTrigger(arg0: boolean): void;
        getAdjacentMask(): number;
        veil$markRendered(): void;
        getVisibilityData(): number;
        getAdjacent(arg0: number): $RenderSection;
        getCenterX(): number;
        getCenterZ(): number;
        isDisposed(): boolean;
        getSectionIndex(): number;
        getCulledBlockEntities(): $BlockEntity[];
        getGlobalBlockEntities(): $BlockEntity[];
        getOriginX(): number;
        getOriginY(): number;
        getChunkY(): number;
        getOriginZ(): number;
        setLastMeshResultSize(arg0: number): void;
        veil$hasNotRendered(): boolean;
        setLastSubmittedFrame(arg0: number): void;
        setLastVisibleFrame(arg0: number): void;
        getLastVisibleFrame(): number;
        getLastSubmittedFrame(): number;
        addIncomingDirections(arg0: number): void;
        setIncomingDirections(arg0: number): void;
        getIncomingDirections(): number;
        getLastMeshResultSize(): number;
        getPendingUpdateSince(): number;
        veil$addIncomingDirections(arg0: number): void;
        getChunkX(): number;
        getChunkZ(): number;
        getSquaredDistance(arg0: $BlockPos_): number;
        getSquaredDistance(arg0: number, arg1: number, arg2: number): number;
        adjacentEast: $RenderSection;
        adjacentUp: $RenderSection;
        adjacentWest: $RenderSection;
        adjacentSouth: $RenderSection;
        adjacentDown: $RenderSection;
        adjacentNorth: $RenderSection;
        constructor(arg0: $RenderRegion, arg1: number, arg2: number, arg3: number);
        get region(): $RenderRegion;
        get flags(): number;
        get position(): $SectionPos;
        get built(): boolean;
        get centerY(): number;
        set info(value: $BuiltSectionInfo);
        get animatedSprites(): $TextureAtlasSprite[];
        get adjacentMask(): number;
        get visibilityData(): number;
        get centerX(): number;
        get centerZ(): number;
        get disposed(): boolean;
        get sectionIndex(): number;
        get culledBlockEntities(): $BlockEntity[];
        get globalBlockEntities(): $BlockEntity[];
        get originX(): number;
        get originY(): number;
        get chunkY(): number;
        get originZ(): number;
        get pendingUpdateSince(): number;
        get chunkX(): number;
        get chunkZ(): number;
    }
    export class $ChunkRenderer {
    }
    export interface $ChunkRenderer {
        "delete"(arg0: $CommandList): void;
        render(arg0: $ChunkRenderMatrices_, arg1: $CommandList, arg2: $ChunkRenderListIterable_, arg3: $TerrainRenderPass, arg4: $CameraTransform, arg5: boolean): void;
    }
    export class $DeferMode extends $Enum<$DeferMode> implements $TextProvider {
        static values(): $DeferMode[];
        static valueOf(arg0: string): $DeferMode;
        getLocalizedName(): $Component;
        getImportantRebuildQueueType(): $TaskQueueType;
        static ONE_FRAME: $DeferMode;
        static ALWAYS: $DeferMode;
        static ZERO_FRAMES: $DeferMode;
        get localizedName(): $Component;
        get importantRebuildQueueType(): $TaskQueueType;
    }
    /**
     * Values that may be interpreted as {@link $DeferMode}.
     */
    export type $DeferMode_ = "always" | "one_frame" | "zero_frames";
    export class $ChunkRenderMatrices extends $Record {
        static from(arg0: $PoseStack): $ChunkRenderMatrices;
        projection(): $Matrix4fc;
        modelView(): $Matrix4fc;
        constructor(projection: $Matrix4fc, modelView: $Matrix4fc);
    }
    /**
     * Values that may be interpreted as {@link $ChunkRenderMatrices}.
     */
    export type $ChunkRenderMatrices_ = { projection?: $Matrix4fc, modelView?: $Matrix4fc,  } | [projection?: $Matrix4fc, modelView?: $Matrix4fc, ];
    export class $ExtendedBlockEntityType<T extends $BlockEntity> {
        static shouldRender<T extends $BlockEntity>(arg0: $BlockEntityType<T>, arg1: $BlockGetter, arg2: $BlockPos_, arg3: T): boolean;
        static removeRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType<T>, arg1: $BlockEntityRenderPredicate_<T>): boolean;
        static addRenderPredicate<T extends $BlockEntity>(arg0: $BlockEntityType<T>, arg1: $BlockEntityRenderPredicate_<T>): void;
    }
    export interface $ExtendedBlockEntityType<T extends $BlockEntity> {
        sodium$getRenderPredicates(): $BlockEntityRenderPredicate<T>[];
        sodium$addRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): void;
        sodium$removeRenderPredicate(arg0: $BlockEntityRenderPredicate_<T>): boolean;
    }
}
