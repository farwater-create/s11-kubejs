import { $FramebufferRenderTargetAccessor } from "@package/foundry/veil/mixin/framebuffer/accessor";
import { $ConcurrentLinkedQueue } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AdvancedFbo } from "@package/foundry/veil/api/client/render/framebuffer";
import { $Enum } from "@package/java/lang";
import { $RenderTargetExtension, $PerformanceRenderTargetExtension } from "@package/foundry/veil/ext";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $MainTarget$AttachmentState extends $Enum<$MainTarget$AttachmentState> {
    }
    /**
     * Values that may be interpreted as {@link $MainTarget$AttachmentState}.
     */
    export type $MainTarget$AttachmentState_ = "none" | "color" | "depth" | "color_depth";
    export class $RenderCall {
    }
    export interface $RenderCall {
        execute(): void;
    }
    /**
     * Values that may be interpreted as {@link $RenderCall}.
     */
    export type $RenderCall_ = (() => void);
    export class $RenderTarget implements $FramebufferRenderTargetAccessor, $PerformanceRenderTargetExtension, $RenderTargetExtension {
        clear(useDepth: boolean): void;
        resize(width: number, height: number, disableBlend: boolean): void;
        copyDepthFrom(otherTarget: $RenderTarget): void;
        createBuffers(width: number, height: number, disableBlend: boolean): void;
        veil$getTexture(arg0: number): number;
        enableStencil(): void;
        isStencilEnabled(): boolean;
        getDepthTextureId(): number;
        veil$setWrapper(arg0: $AdvancedFbo): void;
        setFilterMode(filterMode: number): void;
        handler$bbc000$veil$destroyBuffers(arg0: $CallbackInfo): void;
        handler$bbc000$veil$bindRead(arg0: $CallbackInfo): void;
        handler$bbc000$veil$bindWrite(arg0: boolean, arg1: $CallbackInfo): void;
        handler$baj000$veil$copyDepthFrom(arg0: $RenderTarget, arg1: $CallbackInfo): void;
        handler$jkj000$axiom$blitToScreen(ci: $CallbackInfo): void;
        handler$dgk000$sodium$blitToScreen(arg0: number, arg1: number, arg2: boolean, arg3: $CallbackInfo): void;
        handler$bbc000$veil$createBuffers(arg0: $CallbackInfo): void;
        veil$clearColorBuffer(useDepth: boolean): void;
        handler$baj000$veil$clear(arg0: boolean, arg1: $CallbackInfo): void;
        setClearColor(red: number, green: number, blue: number, alpha: number): void;
        checkStatus(): void;
        blitToScreen(width: number, height: number, disableBlend: boolean): void;
        blitToScreen(width: number, height: number): void;
        unbindWrite(): void;
        destroyBuffers(): void;
        handler$bbc000$veil$getColorTextureId(arg0: $CallbackInfoReturnable<any>): void;
        handler$bbc000$veil$getDepthTextureId(arg0: $CallbackInfoReturnable<any>): void;
        bindRead(): void;
        unbindRead(): void;
        bindWrite(useDepth: boolean): void;
        getColorTextureId(): number;
        getClearChannels(): number[];
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(useDepth: boolean);
        get stencilEnabled(): boolean;
        get depthTextureId(): number;
        get colorTextureId(): number;
        get clearChannels(): number[];
    }
    export class $MainTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        static DEFAULT_HEIGHT: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        static DEFAULT_WIDTH: number;
        height: number;
        constructor(width: number, height: number);
    }
    export class $RenderPipeline {
        recordRenderCall(renderCall: $RenderCall_): void;
        beginRecording(): boolean;
        endRecording(): void;
        getProcessedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        getRecordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        processRecordedQueue(): void;
        canBeginProcessing(): boolean;
        startRendering(): $ConcurrentLinkedQueue<$RenderCall>;
        endProcessing(): void;
        beginProcessing(): boolean;
        canBeginRecording(): boolean;
        constructor();
        get processedQueue(): $ConcurrentLinkedQueue<$RenderCall>;
        get recordingQueue(): $ConcurrentLinkedQueue<$RenderCall>;
    }
    export class $MainTarget$Dimension {
    }
    export class $TextureTarget extends $RenderTarget {
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(width: number, height: number, useDepth: boolean, clearError: boolean);
    }
}
