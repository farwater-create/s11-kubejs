import { $ClipContext$Block_, $Level, $ClipContext$Fluid_ } from "@package/net/minecraft/world/level";
import { $MultiBufferSource, $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ParticleRenderType_, $ParticleRenderType, $Particle } from "@package/net/minecraft/client/particle";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Camera } from "@package/net/minecraft/client";
import { $Comparator, $Map, $Set, $Set_, $Collection_, $List_, $Collection } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PositionedRect } from "@package/com/lowdragmc/lowdraglib2/math";
import { $Consumer_, $BiConsumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $VertexConsumer, $VertexFormatElement_, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Record } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix3f, $Matrix4f, $Vector3f } from "@package/org/joml";

declare module "@package/com/lowdragmc/lowdraglib2/client/scene" {
    export class $ISceneBlockRenderHook {
    }
    export interface $ISceneBlockRenderHook {
        apply(arg0: $RenderType): void;
        applyBESR(arg0: $Level, arg1: $BlockPos_, arg2: $BlockEntity, arg3: $PoseStack, arg4: number): void;
        applyVertexConsumerWrapper(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $WorldSceneRenderer$VertexConsumerWrapper, arg4: $RenderType, arg5: number): void;
    }
    export class $ISceneEntityRenderHook {
    }
    export interface $ISceneEntityRenderHook {
        applyEntity(arg0: $Level, arg1: $Entity, arg2: $PoseStack, arg3: number): void;
    }
    export class $WorldSceneRenderer {
        getEyePos(): $Vector3f;
        useOrtho(arg0: boolean): $WorldSceneRenderer;
        isUseCache(): boolean;
        setBlocked(arg0: $Set_<$BlockPos_>): $WorldSceneRenderer;
        setOnLookingAt(arg0: $Consumer_<$BlockHitResult>): $WorldSceneRenderer;
        render(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        project(arg0: $Vector3f): $Vector3f;
        getParticleManager(): $ParticleManager;
        rayTrace(arg0: $Vector3f): $BlockHitResult;
        removeRenderedBlocks(arg0: $Collection_<$BlockPos_>): $WorldSceneRenderer;
        setBeforeWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        setAfterWorldRender(arg0: $Consumer_<$WorldSceneRenderer>): $WorldSceneRenderer;
        setBeforeBatchEnd(arg0: $BiConsumer_<$MultiBufferSource, number>): $WorldSceneRenderer;
        isCompiling(): boolean;
        setCameraOrtho(arg0: number, arg1: number, arg2: number): void;
        setCameraOrtho(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setCameraLookAt(arg0: $Vector3f, arg1: number, arg2: number, arg3: number): void;
        setCameraLookAt(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f): void;
        setClipBlock(arg0: $ClipContext$Block_): $WorldSceneRenderer;
        useCacheBuffer(arg0: boolean): $WorldSceneRenderer;
        syncCompile(arg0: boolean): $WorldSceneRenderer;
        setClipFluid(arg0: $ClipContext$Fluid_): $WorldSceneRenderer;
        getLastTraceResult(): $BlockHitResult;
        releaseResource(): void;
        needCompileCache(): $WorldSceneRenderer;
        setParticleManager(arg0: $ParticleManager): $WorldSceneRenderer;
        addRenderedBlocks(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $WorldSceneRenderer;
        isSyncCompile(): boolean;
        getCompileProgress(): number;
        getFov(): number;
        unProject(arg0: number, arg1: number, arg2: boolean): $Vector3f;
        unProject(arg0: number, arg1: number): $Vector3f;
        getLastHit(): $Vector3f;
        getLookAt(): $Vector3f;
        getWorldUp(): $Vector3f;
        setFov(arg0: number): $WorldSceneRenderer;
        deleteCacheBuffer(): $WorldSceneRenderer;
        getPositionedRect(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        isEndBatchLast(): boolean;
        setEndBatchLast(arg0: boolean): $WorldSceneRenderer;
        removeAllRenderedBlocks(): $WorldSceneRenderer;
        setSceneEntityRenderHook(arg0: $ISceneEntityRenderHook): $WorldSceneRenderer;
        static setDefaultRenderLayerState(arg0: $RenderType): void;
        getPositionRectRevert(arg0: number, arg1: number, arg2: number, arg3: number): $PositionedRect;
        getSyncCompileMaxBlocksPerFrame(): number;
        getSyncCompileTimeBudgetNanos(): number;
        setSyncCompileMaxBlocksPerFrame(arg0: number): $WorldSceneRenderer;
        setSyncCompileTimeBudgetNanos(arg0: number): $WorldSceneRenderer;
        world: $Level;
        renderedBlocksMap: $Map<$Collection<$BlockPos>, $WorldSceneRenderer$RenderedBlocksEntry>;
        constructor(arg0: $Level);
        get eyePos(): $Vector3f;
        get useCache(): boolean;
        set blocked(value: $Set_<$BlockPos_>);
        set onLookingAt(value: $Consumer_<$BlockHitResult>);
        set beforeWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set afterWorldRender(value: $Consumer_<$WorldSceneRenderer>);
        set beforeBatchEnd(value: $BiConsumer_<$MultiBufferSource, number>);
        get compiling(): boolean;
        set clipBlock(value: $ClipContext$Block_);
        set clipFluid(value: $ClipContext$Fluid_);
        get lastTraceResult(): $BlockHitResult;
        get compileProgress(): number;
        get lastHit(): $Vector3f;
        get lookAt(): $Vector3f;
        get worldUp(): $Vector3f;
        set sceneEntityRenderHook(value: $ISceneEntityRenderHook);
        static set defaultRenderLayerState(value: $RenderType);
    }
    export class $WorldSceneRenderer$RenderedBlocksEntry extends $Record {
        snapshot(): $Set<$BlockPos>;
        hook(): $ISceneBlockRenderHook;
        constructor(snapshot: $Set_<$BlockPos_>, hook: $ISceneBlockRenderHook);
    }
    /**
     * Values that may be interpreted as {@link $WorldSceneRenderer$RenderedBlocksEntry}.
     */
    export type $WorldSceneRenderer$RenderedBlocksEntry_ = { hook?: $ISceneBlockRenderHook, snapshot?: $Set_<$BlockPos_>,  } | [hook?: $ISceneBlockRenderHook, snapshot?: $Set_<$BlockPos_>, ];
    export class $WorldSceneRenderer$VertexConsumerWrapper implements $VertexConsumer {
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addOffset(arg0: number, arg1: number, arg2: number): void;
        setUv(arg0: number, arg1: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        clearColor(): void;
        setOffsetX(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setOffsetY(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setUv1(arg0: number, arg1: number): $VertexConsumer;
        setUv2(arg0: number, arg1: number): $VertexConsumer;
        setNormal(arg0: number, arg1: number, arg2: number): $VertexConsumer;
        clearOffset(): void;
        setColorMultiplier(arg0: number, arg1: number, arg2: number, arg3: number): void;
        setOffsetZ(arg0: number): $WorldSceneRenderer$VertexConsumerWrapper;
        setColor(arg0: number, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        setColor(arg0: number): $VertexConsumer;
        setWhiteAlpha(arg0: number): $VertexConsumer;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        setOverlay(arg0: number): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: $Matrix4f, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        addVertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
        addVertex(arg0: $Vector3f): $VertexConsumer;
        addVertex(arg0: $PoseStack$Pose, arg1: $Vector3f): $VertexConsumer;
        setLight(arg0: number): $VertexConsumer;
        setNormal(arg0: $PoseStack$Pose, arg1: number, arg2: number, arg3: number): $VertexConsumer;
        applyBakedNormals(arg0: $Vector3f, arg1: $ByteBuffer, arg2: $Matrix3f): void;
        applyBakedLighting(arg0: number, arg1: $ByteBuffer): number;
        putBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        constructor(arg0: $VertexConsumer);
        set offsetX(value: number);
        set offsetY(value: number);
        set offsetZ(value: number);
        set whiteAlpha(value: number);
        set overlay(value: number);
        set light(value: number);
    }
    export class $ParticleManager {
        setLevel(arg0: $Level): void;
        render(arg0: $PoseStack, arg1: $Camera, arg2: number, arg3: $Predicate_<$ParticleRenderType>): void;
        tick(): void;
        addParticle(arg0: $Particle): void;
        getParticleAmount(): number;
        clearAllParticles(): void;
        static makeParticleRenderTypeComparator(arg0: $List_<$ParticleRenderType_>): $Comparator<$ParticleRenderType>;
        level: $Level;
        constructor();
        get particleAmount(): number;
    }
}
