import { $STBIWriteCallback } from "@package/org/lwjgl/stb";
import { $PipelineNativeImageAccessor } from "@package/foundry/veil/mixin/pipeline/accessor";
import { $SilentInitException } from "@package/net/minecraft/client/main";
import { $NativeImageExt, $WindowExt } from "@package/com/moulberry/axiom/hooks";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_, $Map, $OptionalInt } from "@package/java/util";
import { $NativeImageAccessor as $NativeImageAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $ByteBuffer, $IntBuffer, $Buffer, $FloatBuffer } from "@package/java/nio";
import { $NativeImageAccessor } from "@package/com/corosus/watut/mixin/client";
import { $LazyLoadedValue } from "@package/net/minecraft/util";
import { $BiConsumer_, $LongSupplier, $Supplier_, $IntUnaryOperator_, $Consumer_ } from "@package/java/util/function";
import { $GlStateBackup } from "@package/net/neoforged/neoforge/client";
import { $NativeImagePointerAccessor } from "@package/link/infra/screenshotclipboard/common/mixin";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $LocalIntRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $CharSequence, $Enum, $AutoCloseable } from "@package/java/lang";
import { $Pointer_ } from "@package/org/lwjgl/system";
import { $InputStream, $File_ } from "@package/java/io";
import { $NativeImageAccessor as $NativeImageAccessor$2 } from "@package/dev/tr7zw/skinlayers/accessor";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FT_Face } from "@package/org/lwjgl/util/freetype";
import { $GLFWDropCallbackI_, $GLFWKeyCallbackI_, $GLFWVidMode$Buffer, $GLFWCharModsCallbackI_, $GLFWCursorPosCallbackI_, $GLFWScrollCallbackI_, $GLFWVidMode, $GLFWMouseButtonCallbackI_, $GLFWErrorCallbackI_ } from "@package/org/lwjgl/glfw";
import { $WindowKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $AccessInputConstantsKey } from "@package/com/blamejared/controlling/mixin";
import { $NativeWindowHandle } from "@package/net/caffeinemc/mods/sodium/client/platform";
import { $Matrix4f, $Vector3f, $Quaternionf } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/platform" {
    export class $Window$WindowInitFailed extends $SilentInitException {
    }
    export class $NativeImage$WriteCallback extends $STBIWriteCallback {
    }
    export class $GlStateManager$PolygonOffsetState {
    }
    export class $MonitorCreator {
    }
    export interface $MonitorCreator {
        createMonitor(monitor: number): $Monitor;
    }
    /**
     * Values that may be interpreted as {@link $MonitorCreator}.
     */
    export type $MonitorCreator_ = ((arg0: number) => $Monitor);
    export class $GlStateManager$DepthState {
    }
    export class $GlStateManager$ScissorState {
    }
    export class $GlStateManager$BlendState {
        mode: $GlStateManager$BooleanState;
        dstAlpha: number;
        dstRgb: number;
        srcRgb: number;
        srcAlpha: number;
    }
    export class $GlStateManager {
        static _glUnmapBuffer(texture: number): void;
        static _glMapBuffer(target: number, access: number): $ByteBuffer;
        static _glBlitFrameBuffer(srcX0: number, srcY0: number, srcX1: number, srcY1: number, dstX0: number, dstY0: number, dstX1: number, dstY1: number, mask: number, filter: number): void;
        static setupGuiFlatDiffuseLighting(lightingVector1: $Vector3f, lightingVector2: $Vector3f): void;
        static _getError(): number;
        static _glDrawPixels(tex: number, level: number, format: number, type: number, pixels: number): void;
        static _genTextures(textures: number[]): void;
        static _genTexture(): number;
        static _getTexImage(tex: number, level: number, format: number, type: number, pixels: number): void;
        static _deleteTextures(textures: number[]): void;
        static _texSubImage2D(target: number, level: number, xOffset: number, yOffset: number, width: number, height: number, format: number, type: number, pixels: number): void;
        static _glUseProgram(texture: number): void;
        static glCreateShader(pname: number): number;
        static glDeleteShader(texture: number): void;
        static glAttachShader(sourceFactor: number, destFactor: number): void;
        static glShaderSource(shader: number, shaderData: $List_<string>): void;
        static glCreateProgram(): number;
        static glDeleteProgram(texture: number): void;
        static glCompileShader(texture: number): void;
        static glGetShaderInfoLog(program: number, maxLength: number): string;
        static glLinkProgram(texture: number): void;
        static glGenFramebuffers(): number;
        static glGenRenderbuffers(): number;
        static glCheckFramebufferStatus(pname: number): number;
        static glGetProgrami(program: number, pname: number): number;
        static glActiveTexture(texture: number): void;
        static setupGui3DDiffuseLighting(lightingVector1: $Vector3f, lightingVector2: $Vector3f): void;
        static _getTexLevelParameter(target: number, level: number, parameterName: number): number;
        static setupLevelDiffuseLighting(lightingVector1: $Vector3f, lightingVector2: $Vector3f, matrix: $Matrix4f): void;
        static _glDeleteVertexArrays(texture: number): void;
        static _glFramebufferTexture2D(target: number, attachment: number, texTarget: number, texture: number, level: number): void;
        static _glDeleteFramebuffers(texture: number): void;
        static glGetShaderi(program: number, pname: number): number;
        static glBlendFuncSeparate(srcFactor: number, dstFactor: number, srcFactorAlpha: number, dstFactorAlpha: number): void;
        static glGetProgramInfoLog(program: number, maxLength: number): string;
        static _glFramebufferRenderbuffer(srcFactor: number, dstFactor: number, srcFactorAlpha: number, dstFactorAlpha: number): void;
        static _glCopyTexSubImage2D(target: number, level: number, xOffset: number, yOffset: number, x: number, y: number, width: number, height: number): void;
        static _glDeleteRenderbuffers(texture: number): void;
        static _glRenderbufferStorage(srcFactor: number, dstFactor: number, srcFactorAlpha: number, dstFactorAlpha: number): void;
        static getBoundFramebuffer(): number;
        static _glGetAttribLocation(program: number, name: $CharSequence): number;
        static _glBindAttribLocation(program: number, index: number, name: $CharSequence): void;
        static _glBindRenderbuffer(sourceFactor: number, destFactor: number): void;
        static _glGetUniformLocation(program: number, name: $CharSequence): number;
        static _clearColor(red: number, green: number, blue: number, alpha: number): void;
        static _texParameter(target: number, parameterName: number, parameter: number): void;
        static _texParameter(func: number, ref: number, mask: number): void;
        static _bindTexture(texture: number): void;
        static _enableVertexAttribArray(texture: number): void;
        static _vertexAttribIPointer(tex: number, level: number, format: number, type: number, pixels: number): void;
        static _disableVertexAttribArray(texture: number): void;
        static _vertexAttribPointer(index: number, size: number, type: number, normalized: boolean, stride: number, pointer: number): void;
        static _disableScissorTest(): void;
        static _enablePolygonOffset(): void;
        static _disablePolygonOffset(): void;
        static _enableColorLogicOp(): void;
        static _disableColorLogicOp(): void;
        static _clear(mask: number, checkError: boolean): void;
        static upload(level: number, xOffset: number, yOffset: number, width: number, height: number, format: $NativeImage$Format_, pixels: $IntBuffer, output: $Consumer_<$IntBuffer>): void;
        static _viewport(srcFactor: number, dstFactor: number, srcFactorAlpha: number, dstFactorAlpha: number): void;
        static _colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
        static _blendFunc(sourceFactor: number, destFactor: number): void;
        static _depthMask(flag: boolean): void;
        static _depthFunc(texture: number): void;
        static _stencilOp(func: number, ref: number, mask: number): void;
        static _logicOp(texture: number): void;
        static _getString(name: number): string;
        static _getActiveTexture(): number;
        static _activeTexture(texture: number): void;
        static _enableCull(): void;
        static _disableDepthTest(): void;
        static _enableBlend(): void;
        static _polygonMode(sourceFactor: number, destFactor: number): void;
        static _deleteTexture(texture: number): void;
        static _pixelStore(sourceFactor: number, destFactor: number): void;
        static _clearStencil(texture: number): void;
        static _blendEquation(texture: number): void;
        static _readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: number): void;
        static _readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: $ByteBuffer): void;
        static _scissorBox(srcFactor: number, dstFactor: number, srcFactorAlpha: number, dstFactorAlpha: number): void;
        static _texImage2D(target: number, level: number, internalFormat: number, width: number, height: number, border: number, format: number, type: number, pixels: $IntBuffer | null): void;
        static _drawElements(mode: number, count: number, type: number, indices: number): void;
        static _glBindBuffer(sourceFactor: number, destFactor: number): void;
        static _glDeleteBuffers(texture: number): void;
        static _enableScissorTest(): void;
        static _glBufferData(target: number, size: number, arg2: number): void;
        static _glBufferData(target: number, data: $ByteBuffer, usage: number): void;
        static _polygonOffset(factor: number, units: number): void;
        static _glUniform2(location: number, value: $FloatBuffer): void;
        static _glUniform2(location: number, value: $IntBuffer): void;
        static _stencilMask(texture: number): void;
        static _glBindVertexArray(texture: number): void;
        static _stencilFunc(func: number, ref: number, mask: number): void;
        static _glUniform4(location: number, value: $IntBuffer): void;
        static _glUniform4(location: number, value: $FloatBuffer): void;
        static _clearDepth(depth: number): void;
        static _glUniform3(location: number, value: $FloatBuffer): void;
        static _glUniform3(location: number, value: $IntBuffer): void;
        static _glUniform1i(sourceFactor: number, destFactor: number): void;
        static _glUniformMatrix2(location: number, transpose: boolean, value: $FloatBuffer): void;
        static _glUniformMatrix3(location: number, transpose: boolean, value: $FloatBuffer): void;
        static _glUniformMatrix4(location: number, transpose: boolean, value: $FloatBuffer): void;
        static _disableBlend(): void;
        static _getInteger(pname: number): number;
        static _glUniform1(location: number, value: $FloatBuffer): void;
        static _glUniform1(location: number, value: $IntBuffer): void;
        static _glGenBuffers(): number;
        static _glGenVertexArrays(): number;
        static _disableCull(): void;
        static _blendFuncSeparate(srcFactor: number, dstFactor: number, srcFactorAlpha: number, dstFactorAlpha: number): void;
        static _enableDepthTest(): void;
        static _restoreGlState(arg0: $GlStateBackup): void;
        static _glBindFramebuffer(sourceFactor: number, destFactor: number): void;
        static _backupGlState(arg0: $GlStateBackup): void;
        static TEXTURE_COUNT: number;
        static BLEND: $GlStateManager$BlendState;
        static TEXTURES: $GlStateManager$TextureState[];
        constructor();
        static get boundFramebuffer(): number;
    }
    export class $NativeImage implements $AutoCloseable, $PipelineNativeImageAccessor, $NativeImageAccessor$1, $NativeImageAccessor$2, $NativeImagePointerAccessor, $NativeImageAccessor, $NativeImageExt {
        format(): $NativeImage$Format;
        static read(format: $NativeImage$Format_ | null, textureData: $ByteBuffer): $NativeImage;
        static read(bytes: number[]): $NativeImage;
        static read(textureStream: $InputStream): $NativeImage;
        static read(format: $NativeImage$Format_ | null, textureStream: $InputStream): $NativeImage;
        static read(textureData: $ByteBuffer): $NativeImage;
        close(): void;
        getWidth(): number;
        getHeight(): number;
        copyFrom(other: $NativeImage): void;
        writeToFile(path: $Path_): void;
        writeToFile(file: $File_): void;
        getPixelsRGBA(): number[];
        downloadTexture(level: number, opaque: boolean): void;
        /**
         * @deprecated
         */
        makePixelArray(): number[];
        axiom$asByteArray(): number[];
        getBlueOrLuminance(x: number, y: number): number;
        setPixelLuminance(x: number, y: number, luminance: number): void;
        copyFromFont(face: $FT_Face, index: number): boolean;
        getRedOrLuminance(x: number, y: number): number;
        applyToAllPixels(_function: $IntUnaryOperator_): void;
        untrack(): void;
        drawPixels(): void;
        blendPixel(x: number, y: number, abgrColor: number): void;
        mappedCopy(_function: $IntUnaryOperator_): $NativeImage;
        fillRect(x: number, y: number, width: number, height: number, value: number): void;
        copyRect(source: $NativeImage, xFrom: number, yFrom: number, xTo: number, yTo: number, width: number, height: number, mirrorX: boolean, mirrorY: boolean): void;
        copyRect(xFrom: number, yFrom: number, xToDelta: number, yToDelta: number, width: number, height: number, mirrorX: boolean, mirrorY: boolean): void;
        downloadDepthBuffer(unused: number): void;
        getLuminanceOrAlpha(x: number, y: number): number;
        skinlayers$isAllocated(): boolean;
        getGreenOrLuminance(x: number, y: number): number;
        flipY(): void;
        upload(level: number, xOffset: number, yOffset: number, unpackSkipPixels: number, unpackSkipRows: number, width: number, height: number, blur: boolean, clamp: boolean, mipmap: boolean, autoClose: boolean): void;
        upload(level: number, xOffset: number, yOffset: number, mipmap: boolean): void;
        upload(level: number, xOffset: number, yOffset: number, unpackSkipPixels: number, unpackSkipRows: number, width: number, height: number, mipmap: boolean, autoClose: boolean): void;
        asByteArray(): number[];
        getPixelRGBA(x: number, y: number): number;
        resizeSubRectTo(x: number, y: number, width: number, height: number, image: $NativeImage): void;
        setPixelRGBA(x: number, y: number, abgrColor: number): void;
        getPixels(): number;
        sodium$getPixels(): number;
        pixels(): number;
        getPointer(): number;
        invokeCheckAllocated(): void;
        constructor(format: $NativeImage$Format_, width: number, height: number, useStbFree: boolean, pixels: number);
        constructor(format: $NativeImage$Format_, width: number, height: number, useCalloc: boolean);
        constructor(width: number, height: number, useCalloc: boolean);
        get width(): number;
        get height(): number;
        get pixelsRGBA(): number[];
        get pointer(): number;
    }
    export class $ClipboardManager {
        setClipboard(window: number, arg1: string): void;
        getClipboard(window: number, arg1: $GLFWErrorCallbackI_): string;
        static FORMAT_UNAVAILABLE: number;
        constructor();
    }
    export class $VideoMode {
        write(): string;
        static read(videoMode: string | null): ($VideoMode) | undefined;
        getWidth(): number;
        getHeight(): number;
        getRefreshRate(): number;
        getBlueBits(): number;
        getGreenBits(): number;
        getRedBits(): number;
        constructor(glfwVideoMode: $GLFWVidMode);
        constructor(bufferVideoMode: $GLFWVidMode$Buffer);
        constructor(width: number, height: number, redBits: number, greenBits: number, blueBits: number, refreshRate: number);
        get width(): number;
        get height(): number;
        get refreshRate(): number;
        get blueBits(): number;
        get greenBits(): number;
        get redBits(): number;
    }
    export class $GlConst {
        static GL_PROXY_TEXTURE_2D: number;
        static GL_LEQUAL: number;
        static GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
        static GL_ONE_MINUS_SRC_COLOR: number;
        static GL_FUNC_REVERSE_SUBTRACT: number;
        static GL_DEPTH_TEXTURE_MODE: number;
        static GL_UNSIGNED_INT: number;
        static GL_UNPACK_SKIP_ROWS: number;
        static GL_ONE_MINUS_DST_COLOR: number;
        static GL_FRAMEBUFFER_COMPLETE: number;
        static GL_PACK_ALIGNMENT: number;
        static GL_TRIANGLE_FAN: number;
        static GL_SHORT: number;
        static GL_VERTEX_SHADER: number;
        static GL_COLOR_BUFFER_BIT: number;
        static GL_RGBA8: number;
        static GL_DEPTH_ATTACHMENT: number;
        static GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
        static GL_TEXTURE0: number;
        static GL_ZERO: number;
        static GL_ALWAYS: number;
        static GL_DEPTH_COMPONENT32: number;
        static GL_TEXTURE2: number;
        static GL_TEXTURE1: number;
        static GL_STATIC_DRAW: number;
        static GL_ONE_MINUS_DST_ALPHA: number;
        static GL_NEAREST: number;
        static GL_RENDERBUFFER: number;
        static GL_FUNC_ADD: number;
        static GL_UNSIGNED_SHORT: number;
        static GL_CLAMP_TO_EDGE: number;
        static GL_LINES: number;
        static GL_TRUE: number;
        static GL_COLOR_ATTACHMENT0: number;
        static GL_LINE_STRIP: number;
        static GL_FRAGMENT_SHADER: number;
        static GL_UNPACK_SKIP_PIXELS: number;
        static GL_UNPACK_SWAP_BYTES: number;
        static GL_FRONT_AND_BACK: number;
        static GL_DST_COLOR: number;
        static GL_MIN: number;
        static GL_LINEAR_MIPMAP_LINEAR: number;
        static GL_DRAW_FRAMEBUFFER: number;
        static GL_MAX: number;
        static GL_TEXTURE_COMPARE_MODE: number;
        static GL_TEXTURE_WRAP_S: number;
        static GL_DEPTH_COMPONENT: number;
        static GL_TEXTURE_WRAP_T: number;
        static GL_ONE: number;
        static GL_GREATER: number;
        static GL_ELEMENT_ARRAY_BUFFER: number;
        static GL_WRITE_ONLY: number;
        static GL_FRAMEBUFFER_INCOMPLETE_DRAW_BUFFER: number;
        static GL_FILL: number;
        static GL_REPLACE: number;
        static GL_FLOAT: number;
        static GL_FRAMEBUFFER: number;
        static GL_TRIANGLES: number;
        static GL_FUNC_SUBTRACT: number;
        static GL_TEXTURE_2D: number;
        static GL_RED: number;
        static GL_READ_FRAMEBUFFER: number;
        static GL_FRAMEBUFFER_UNSUPPORTED: number;
        static GL_GEQUAL: number;
        static GL_TEXTURE_MIN_FILTER: number;
        static GL_UNPACK_ROW_LENGTH: number;
        static GL_ARRAY_BUFFER: number;
        static GL_UNSIGNED_BYTE: number;
        static GL_DEPTH_BUFFER_BIT: number;
        static GL_LINEAR: number;
        static GL_RGBA: number;
        static GL_NEAREST_MIPMAP_LINEAR: number;
        static GL_MAX_TEXTURE_SIZE: number;
        static GL_DYNAMIC_DRAW: number;
        static GL_TEXTURE_MAG_FILTER: number;
        static GL_OUT_OF_MEMORY: number;
        static GL_DST_ALPHA: number;
        static GL_LINK_STATUS: number;
        static GL_NONE: number;
        static GL_UNPACK_ALIGNMENT: number;
        static GL_SRC_COLOR: number;
        static GL_RG: number;
        static GL_COMPILE_STATUS: number;
        static GL_FRONT: number;
        static GL_UNPACK_LSB_FIRST: number;
        static GL_BYTE: number;
        static GL_FALSE: number;
        static GL_BGR: number;
        static GL_RGB: number;
        static GL_DEPTH_COMPONENT24: number;
        static GL_EQUAL: number;
        static GL_TEXTURE_WIDTH: number;
        static GL_LINE: number;
        static GL_ONE_MINUS_SRC_ALPHA: number;
        static GL_INT: number;
        static GL_ALPHA_BIAS: number;
        static GL_SRC_ALPHA: number;
        static GL_FRAMEBUFFER_INCOMPLETE_READ_BUFFER: number;
        static GL_TRIANGLE_STRIP: number;
        constructor();
    }
    export class $GLX {
        static make<T>(value: T, consumer: $Consumer_<T>): T;
        static make<T>(supplier: $Supplier_<T>): T;
        static _shouldClose(window: $Window): boolean;
        static _getRefreshRate(window: $Window): number;
        static _getCpuInfo(): string;
        static getOpenGLVersionString(): string;
        static _setGlfwErrorCallback(errorCallback: $GLFWErrorCallbackI_): void;
        static _initGlfw(): $LongSupplier;
        static _init(debugVerbosity: number, synchronous: boolean): void;
        static _getLWJGLVersion(): string;
        static _renderCrosshair(lineLength: number, renderX: boolean, renderY: boolean, renderZ: boolean): void;
        constructor();
        static get openGLVersionString(): string;
    }
    export class $Monitor {
        getX(): number;
        getMode(index: number): $VideoMode;
        getModeCount(): number;
        getCurrentMode(): $VideoMode;
        getVideoModeIndex(videoMode: $VideoMode): number;
        refreshVideoModes(): void;
        getY(): number;
        getMonitor(): number;
        getPreferredVidMode(videoMode: ($VideoMode) | undefined): $VideoMode;
        constructor(monitor: number);
        get x(): number;
        get modeCount(): number;
        get currentMode(): $VideoMode;
        get y(): number;
        get monitor(): number;
    }
    export class $GlStateManager$ColorMask {
    }
    export class $GlStateManager$DestFactor extends $Enum<$GlStateManager$DestFactor> {
        static values(): $GlStateManager$DestFactor[];
        static valueOf(arg0: string): $GlStateManager$DestFactor;
        static ONE_MINUS_SRC_COLOR: $GlStateManager$DestFactor;
        static ZERO: $GlStateManager$DestFactor;
        static DST_COLOR: $GlStateManager$DestFactor;
        static SRC_ALPHA: $GlStateManager$DestFactor;
        static ONE: $GlStateManager$DestFactor;
        static ONE_MINUS_DST_COLOR: $GlStateManager$DestFactor;
        static DST_ALPHA: $GlStateManager$DestFactor;
        static SRC_COLOR: $GlStateManager$DestFactor;
        static ONE_MINUS_DST_ALPHA: $GlStateManager$DestFactor;
        static CONSTANT_ALPHA: $GlStateManager$DestFactor;
        static ONE_MINUS_SRC_ALPHA: $GlStateManager$DestFactor;
        static CONSTANT_COLOR: $GlStateManager$DestFactor;
        static ONE_MINUS_CONSTANT_ALPHA: $GlStateManager$DestFactor;
        static ONE_MINUS_CONSTANT_COLOR: $GlStateManager$DestFactor;
        value: number;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$DestFactor}.
     */
    export type $GlStateManager$DestFactor_ = "constant_alpha" | "constant_color" | "dst_alpha" | "dst_color" | "one" | "one_minus_constant_alpha" | "one_minus_constant_color" | "one_minus_dst_alpha" | "one_minus_dst_color" | "one_minus_src_alpha" | "one_minus_src_color" | "src_alpha" | "src_color" | "zero";
    export class $InputConstants$Key implements $AccessInputConstantsKey {
        getName(): string;
        getValue(): number;
        getType(): $InputConstants$Type;
        getDisplayName(): $Component;
        static getNAME_MAP$controlling_$md$707fe4$0(): $Map<any, any>;
        getNumericKeyValue(): $OptionalInt;
        displayName: $LazyLoadedValue<$Component>;
        get name(): string;
        get value(): number;
        get type(): $InputConstants$Type;
        static get NAME_MAP$controlling_$md$707fe4$0(): $Map<any, any>;
        get numericKeyValue(): $OptionalInt;
    }
    export class $NativeImage$InternalGlFormat extends $Enum<$NativeImage$InternalGlFormat> {
        static values(): $NativeImage$InternalGlFormat[];
        static valueOf(arg0: string): $NativeImage$InternalGlFormat;
        glFormat(): number;
        static RED: $NativeImage$InternalGlFormat;
        static RGBA: $NativeImage$InternalGlFormat;
        static RG: $NativeImage$InternalGlFormat;
        static RGB: $NativeImage$InternalGlFormat;
    }
    /**
     * Values that may be interpreted as {@link $NativeImage$InternalGlFormat}.
     */
    export type $NativeImage$InternalGlFormat_ = "rgba" | "rgb" | "rg" | "red";
    export class $GlStateManager$SourceFactor extends $Enum<$GlStateManager$SourceFactor> {
        static values(): $GlStateManager$SourceFactor[];
        static valueOf(arg0: string): $GlStateManager$SourceFactor;
        static ONE_MINUS_SRC_COLOR: $GlStateManager$SourceFactor;
        static ZERO: $GlStateManager$SourceFactor;
        static DST_COLOR: $GlStateManager$SourceFactor;
        static SRC_ALPHA: $GlStateManager$SourceFactor;
        static ONE: $GlStateManager$SourceFactor;
        static ONE_MINUS_DST_COLOR: $GlStateManager$SourceFactor;
        static DST_ALPHA: $GlStateManager$SourceFactor;
        static SRC_COLOR: $GlStateManager$SourceFactor;
        static SRC_ALPHA_SATURATE: $GlStateManager$SourceFactor;
        static ONE_MINUS_DST_ALPHA: $GlStateManager$SourceFactor;
        static CONSTANT_ALPHA: $GlStateManager$SourceFactor;
        static ONE_MINUS_SRC_ALPHA: $GlStateManager$SourceFactor;
        static CONSTANT_COLOR: $GlStateManager$SourceFactor;
        static ONE_MINUS_CONSTANT_ALPHA: $GlStateManager$SourceFactor;
        static ONE_MINUS_CONSTANT_COLOR: $GlStateManager$SourceFactor;
        value: number;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$SourceFactor}.
     */
    export type $GlStateManager$SourceFactor_ = "constant_alpha" | "constant_color" | "dst_alpha" | "dst_color" | "one" | "one_minus_constant_alpha" | "one_minus_constant_color" | "one_minus_dst_alpha" | "one_minus_dst_color" | "one_minus_src_alpha" | "one_minus_src_color" | "src_alpha" | "src_alpha_saturate" | "src_color" | "zero";
    export class $Lighting {
        static setupNetherLevel(): void;
        static setupForEntityInInventory(quaternion: $Quaternionf): void;
        static setupForEntityInInventory(): void;
        static setupForFlatItems(): void;
        static setupFor3DItems(): void;
        static setupLevel(): void;
        static NETHER_DIFFUSE_LIGHT_1: $Vector3f;
        static NETHER_DIFFUSE_LIGHT_0: $Vector3f;
        static DIFFUSE_LIGHT_0: $Vector3f;
        static DIFFUSE_LIGHT_1: $Vector3f;
        constructor();
    }
    export class $GlStateManager$Viewport extends $Enum<$GlStateManager$Viewport> {
        static values(): $GlStateManager$Viewport[];
        static valueOf(arg0: string): $GlStateManager$Viewport;
        static x(): number;
        static y(): number;
        static width(): number;
        static height(): number;
        static INSTANCE: $GlStateManager$Viewport;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$Viewport}.
     */
    export type $GlStateManager$Viewport_ = "instance";
    export class $ScreenManager {
        shutdown(): void;
        static clamp(value: number, min: number, max: number): number;
        findBestMonitor(window: $Window): $Monitor;
        getMonitor(monitorID: number): $Monitor;
        constructor(monitorCreator: $MonitorCreator_);
    }
    export class $GlDebug {
        static typeToString(token: number): string;
        static sourceToString(token: number): string;
        static severityToString(token: number): string;
        static getLastOpenGlDebugMessages(): $List<string>;
        static isDebugEnabled(): boolean;
        static enableDebugCallback(debugVerbosity: number, synchronous: boolean): void;
        constructor();
        static get lastOpenGlDebugMessages(): $List<string>;
        static get debugEnabled(): boolean;
    }
    export class $IconSet extends $Enum<$IconSet> {
        static values(): $IconSet[];
        static valueOf(arg0: string): $IconSet;
        getStandardIcons(resources: $PackResources): $List<$IoSupplier<$InputStream>>;
        getMacIcon(resources: $PackResources): $IoSupplier<$InputStream>;
        static SNAPSHOT: $IconSet;
        static RELEASE: $IconSet;
    }
    /**
     * Values that may be interpreted as {@link $IconSet}.
     */
    export type $IconSet_ = "release" | "snapshot";
    export class $GlStateManager$ColorLogicState {
    }
    export class $InputConstants {
        static getKey(name: string): $InputConstants$Key;
        static getKey(keyCode: number, scanCode: number): $InputConstants$Key;
        static updateRawMouseInput(window: number, arg1: boolean): void;
        static setupKeyboardCallbacks(window: number, arg1: $GLFWKeyCallbackI_, keyCallback: $GLFWCharModsCallbackI_): void;
        static isRawMouseInputSupported(): boolean;
        static setupMouseCallbacks(window: number, arg1: $GLFWCursorPosCallbackI_, cursorPositionCallback: $GLFWMouseButtonCallbackI_, mouseButtonCallback: $GLFWScrollCallbackI_, scrollCallback: $GLFWDropCallbackI_): void;
        static grabOrReleaseMouse(window: number, arg1: number, cursorValue: number, xPos: number): void;
        static isKeyDown(window: number, arg1: number): boolean;
        static KEY_A: number;
        static KEY_C: number;
        static KEY_B: number;
        static KEY_DELETE: number;
        static KEY_E: number;
        static KEY_D: number;
        static KEY_G: number;
        static KEY_F: number;
        static KEY_I: number;
        static KEY_H: number;
        static KEY_K: number;
        static MOUSE_BUTTON_MIDDLE: number;
        static KEY_J: number;
        static KEY_INSERT: number;
        static KEY_M: number;
        static KEY_COMMA: number;
        static KEY_L: number;
        static KEY_O: number;
        static KEY_N: number;
        static KEY_Q: number;
        static KEY_P: number;
        static KEY_S: number;
        static KEY_R: number;
        static KEY_U: number;
        static KEY_MINUS: number;
        static KEY_T: number;
        static KEY_W: number;
        static KEY_GRAVE: number;
        static KEY_V: number;
        static KEY_Y: number;
        static KEY_X: number;
        static KEY_Z: number;
        static KEY_BACKSLASH: number;
        static KEY_SEMICOLON: number;
        static KEY_MULTIPLY: number;
        static KEY_RSHIFT: number;
        static KEY_NUMLOCK: number;
        static RELEASE: number;
        static KEY_NUMPAD7: number;
        static KEY_NUMPAD8: number;
        static KEY_TAB: number;
        static KEY_NUMPAD5: number;
        static KEY_NUMPAD6: number;
        static KEY_PAGEDOWN: number;
        static KEY_NUMPAD9: number;
        static KEY_NUMPAD0: number;
        static KEY_APOSTROPHE: number;
        static KEY_NUMPAD3: number;
        static KEY_NUMPAD4: number;
        static KEY_NUMPAD1: number;
        static KEY_NUMPAD2: number;
        static KEY_F7: number;
        static KEY_F20: number;
        static KEY_F6: number;
        static KEY_F21: number;
        static KEY_F9: number;
        static KEY_F22: number;
        static KEY_F8: number;
        static KEY_F23: number;
        static KEY_LEFT: number;
        static REPEAT: number;
        static KEY_F24: number;
        static KEY_F25: number;
        static KEY_RBRACKET: number;
        static MOD_CONTROL: number;
        static KEY_F1: number;
        static KEY_F3: number;
        static KEY_F2: number;
        static KEY_F5: number;
        static KEY_F4: number;
        static KEY_NUMPADCOMMA: number;
        static KEY_UP: number;
        static KEY_RWIN: number;
        static CURSOR_NORMAL: number;
        static KEY_1: number;
        static KEY_0: number;
        static KEY_3: number;
        static KEY_2: number;
        static KEY_5: number;
        static KEY_4: number;
        static MOUSE_BUTTON_LEFT: number;
        static KEY_7: number;
        static KEY_NUMPADENTER: number;
        static KEY_RIGHT: number;
        static KEY_6: number;
        static KEY_9: number;
        static KEY_8: number;
        static KEY_SPACE: number;
        static CURSOR: number;
        static KEY_LSHIFT: number;
        static KEY_LCONTROL: number;
        static KEY_PAGEUP: number;
        static KEY_BACKSPACE: number;
        static KEY_PRINTSCREEN: number;
        static KEY_HOME: number;
        static KEY_NUMPADEQUALS: number;
        static KEY_ESCAPE: number;
        static KEY_F10: number;
        static KEY_F11: number;
        static KEY_F12: number;
        static KEY_F17: number;
        static KEY_F18: number;
        static CURSOR_DISABLED: number;
        static KEY_F19: number;
        static KEY_F13: number;
        static KEY_SCROLLLOCK: number;
        static KEY_F14: number;
        static KEY_F15: number;
        static PRESS: number;
        static KEY_F16: number;
        static KEY_RALT: number;
        static KEY_LWIN: number;
        static KEY_EQUALS: number;
        static KEY_CAPSLOCK: number;
        static KEY_PAUSE: number;
        static KEY_RETURN: number;
        static KEY_SLASH: number;
        static KEY_ADD: number;
        static KEY_LBRACKET: number;
        static MOUSE_BUTTON_RIGHT: number;
        static KEY_DOWN: number;
        static KEY_PERIOD: number;
        static KEY_RCONTROL: number;
        static UNKNOWN: $InputConstants$Key;
        static KEY_LALT: number;
        static KEY_END: number;
        constructor();
        static get rawMouseInputSupported(): boolean;
    }
    export class $NativeImage$Format extends $Enum<$NativeImage$Format> {
        static values(): $NativeImage$Format[];
        static valueOf(arg0: string): $NativeImage$Format;
        hasAlpha(): boolean;
        greenOffset(): number;
        supportedByStb(): boolean;
        luminanceOffset(): number;
        alphaOffset(): number;
        hasLuminance(): boolean;
        hasLuminanceOrBlue(): boolean;
        hasLuminanceOrRed(): boolean;
        components(): number;
        glFormat(): number;
        hasBlue(): boolean;
        redOffset(): number;
        blueOffset(): number;
        hasRed(): boolean;
        hasGreen(): boolean;
        setUnpackPixelStoreState(): void;
        luminanceOrRedOffset(): number;
        luminanceOrGreenOffset(): number;
        hasLuminanceOrAlpha(): boolean;
        luminanceOrAlphaOffset(): number;
        luminanceOrBlueOffset(): number;
        setPackPixelStoreState(): void;
        hasLuminanceOrGreen(): boolean;
        static LUMINANCE_ALPHA: $NativeImage$Format;
        static RGBA: $NativeImage$Format;
        static LUMINANCE: $NativeImage$Format;
        static RGB: $NativeImage$Format;
    }
    /**
     * Values that may be interpreted as {@link $NativeImage$Format}.
     */
    export type $NativeImage$Format_ = "rgba" | "rgb" | "luminance_alpha" | "luminance";
    export class $GlStateManager$StencilFunc {
    }
    export class $GlUtil {
        static freeMemory(buffer: $Buffer): void;
        static allocateMemory(size: number): $ByteBuffer;
        static getVendor(): string;
        static getCpuInfo(): string;
        static getRenderer(): string;
        static getOpenGLVersion(): string;
        constructor();
        static get vendor(): string;
        static get cpuInfo(): string;
        static get renderer(): string;
        static get openGLVersion(): string;
    }
    export class $GlStateManager$StencilState {
    }
    export class $TextureUtil {
        static readResource(inputStream: $InputStream): $ByteBuffer;
        static getDebugTexturePath(): $Path;
        static getDebugTexturePath(basePath: $Path_): $Path;
        static prepareImage(textureId: number, mipmapLevel: number, width: number, height: number): void;
        static prepareImage(textureId: number, width: number, height: number): void;
        static prepareImage(pixelFormat: $NativeImage$InternalGlFormat_, textureId: number, width: number, height: number): void;
        static prepareImage(pixelFormat: $NativeImage$InternalGlFormat_, textureId: number, mipmapLevel: number, width: number, height: number): void;
        static generateTextureId(): number;
        static releaseTextureId(textureId: number): void;
        static writeAsPNG(outputDir: $Path_, textureName: string, textureId: number, amount: number, width: number, height: number, _function: $IntUnaryOperator_ | null): void;
        static writeAsPNG(outputDir: $Path_, textureName: string, textureId: number, amount: number, width: number, height: number): void;
        static MIN_MIPMAP_LEVEL: number;
        constructor();
    }
    export class $GlStateManager$TextureState {
        binding: number;
    }
    export class $GlStateManager$CullState {
    }
    export class $GlStateManager$BooleanState {
    }
    export class $GlDebug$LogEntry {
    }
    export class $Window implements $AutoCloseable, $NativeWindowHandle, $WindowKJS, $WindowExt {
        close(): void;
        getWidth(): number;
        getHeight(): number;
        getX(): number;
        static getPlatform(): string;
        axiom$resize(window: number, width: number, framebufferWidth: number): void;
        findBestMonitor(): $Monitor;
        getRefreshRate(): number;
        static checkGlfwError(errorConsumer: $BiConsumer_<number, string>): void;
        /**
         * Gets a pointer to the native window object that is passed to GLFW.
         */
        getWin32Handle(): number;
        updateRawMouseInput(vsyncEnabled: boolean): void;
        setDefaultErrorCallback(): void;
        wrapOperation$dfd000$sodium$setAdditionalWindowHints(arg0: number, arg1: number, arg2: $CharSequence, arg3: number, arg4: number, arg5: $Operation_<any>): number;
        getY(): number;
        changeFullscreenVideoMode(): void;
        axiom$resizeFramebuffer(window: number, width: number, framebufferWidth: number): void;
        defaultErrorCallback(error: number, description: number): void;
        getGuiScaledWidth(): number;
        getGuiScaledHeight(): number;
        getGuiScale(): number;
        setFramerateLimit(limit: number): void;
        setWindowed(windowedWidth: number, windowedHeight: number): void;
        toggleFullScreen(): void;
        updateVsync(vsyncEnabled: boolean): void;
        setErrorSection(errorSection: string): void;
        isFullscreen(): boolean;
        setGuiScale(scaleFactor: number): void;
        calculateScale(guiScale: number, forceUnicode: boolean): number;
        getFramerateLimit(): number;
        shouldClose(): boolean;
        updateDisplay(): void;
        modify$bae000$veil$modifyMinorVersion(arg0: number, arg1: $LocalIntRef): number;
        modify$bbg000$veil$captureMajorVersion(arg0: number, arg1: $LocalIntRef): number;
        modify$bbg000$veil$captureMinorVersion(arg0: number, arg1: $LocalIntRef): number;
        handler$jjm000$axiom$getScreenWidth(cir: $CallbackInfoReturnable<any>): void;
        handler$jjm000$axiom$onResizeInject(l: number, i: number, j: number, ci: $CallbackInfo): void;
        handler$jjm000$axiom$getScreenHeight(cir: $CallbackInfoReturnable<any>): void;
        modify$bae000$veil$modifyMajorVersion(arg0: number, arg1: $LocalIntRef): number;
        handler$jjm000$axiom$calculateScale(scale: number, forceEven: boolean, cir: $CallbackInfoReturnable<any>): void;
        /**
         * Gets a pointer to the native window object that is passed to GLFW.
         */
        getWindow(): number;
        getPreferredFullscreenVideoMode(): ($VideoMode) | undefined;
        handler$jjm000$axiom$getWidth(cir: $CallbackInfoReturnable<any>): void;
        handler$jjm000$axiom$setGuiScale(d: number, ci: $CallbackInfo): void;
        setPreferredFullscreenVideoMode(preferredFullscreenVideoMode: ($VideoMode) | undefined): void;
        handler$jjm000$axiom$getHeight(cir: $CallbackInfoReturnable<any>): void;
        setIcon(packResources: $PackResources, iconSet: $IconSet_): void;
        setTitle(errorSection: string): void;
        setWidth(limit: number): void;
        setHeight(limit: number): void;
        getScreenWidth(): number;
        getScreenHeight(): number;
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
        framebufferWidth: number;
        width: number;
        framebufferHeight: number;
        static BASE_HEIGHT: number;
        static BASE_WIDTH: number;
        height: number;
        constructor(eventHandler: $WindowEventHandler, screenManager: $ScreenManager, displayData: $DisplayData, preferredFullscreenVideoMode: string | null, title: string);
        get x(): number;
        static get platform(): string;
        get refreshRate(): number;
        get win32Handle(): number;
        get y(): number;
        get guiScaledWidth(): number;
        get guiScaledHeight(): number;
        set errorSection(value: string);
        get fullscreen(): boolean;
        get window(): number;
        set title(value: string);
        get screenWidth(): number;
        get screenHeight(): number;
    }
    export class $InputConstants$Type extends $Enum<$InputConstants$Type> {
        static values(): $InputConstants$Type[];
        static valueOf(arg0: string): $InputConstants$Type;
        getOrCreate(keyCode: number): $InputConstants$Key;
        static SCANCODE: $InputConstants$Type;
        static MOUSE: $InputConstants$Type;
        static KEYSYM: $InputConstants$Type;
    }
    /**
     * Values that may be interpreted as {@link $InputConstants$Type}.
     */
    export type $InputConstants$Type_ = "keysym" | "scancode" | "mouse";
    export class $MacosUtil {
        static clearResizableBit(windowId: number): void;
        static loadIcon(iconStreamSupplier: $IoSupplier_<$InputStream>): void;
        static exitNativeFullscreen(windowId: number): void;
        constructor();
    }
    export class $WindowEventHandler {
    }
    export interface $WindowEventHandler {
        setWindowActive(windowActive: boolean): void;
        resizeDisplay(): void;
        cursorEntered(): void;
        set windowActive(value: boolean);
    }
    export class $GlStateManager$LogicOp extends $Enum<$GlStateManager$LogicOp> {
        static values(): $GlStateManager$LogicOp[];
        static valueOf(arg0: string): $GlStateManager$LogicOp;
        static OR: $GlStateManager$LogicOp;
        static SET: $GlStateManager$LogicOp;
        static EQUIV: $GlStateManager$LogicOp;
        static NOOP: $GlStateManager$LogicOp;
        static COPY: $GlStateManager$LogicOp;
        static NAND: $GlStateManager$LogicOp;
        static COPY_INVERTED: $GlStateManager$LogicOp;
        static NOR: $GlStateManager$LogicOp;
        static AND_REVERSE: $GlStateManager$LogicOp;
        static INVERT: $GlStateManager$LogicOp;
        static AND: $GlStateManager$LogicOp;
        static OR_REVERSE: $GlStateManager$LogicOp;
        static XOR: $GlStateManager$LogicOp;
        static AND_INVERTED: $GlStateManager$LogicOp;
        value: number;
        static CLEAR: $GlStateManager$LogicOp;
        static OR_INVERTED: $GlStateManager$LogicOp;
    }
    /**
     * Values that may be interpreted as {@link $GlStateManager$LogicOp}.
     */
    export type $GlStateManager$LogicOp_ = "and" | "and_inverted" | "and_reverse" | "clear" | "copy" | "copy_inverted" | "equiv" | "invert" | "nand" | "noop" | "nor" | "or" | "or_inverted" | "or_reverse" | "set" | "xor";
    export class $DebugMemoryUntracker {
        static untrack(memAddr: number): void;
        static untrack(pointer: $Pointer_): void;
        constructor();
    }
    export class $DisplayData {
        fullscreenHeight: $OptionalInt;
        fullscreenWidth: $OptionalInt;
        width: number;
        height: number;
        isFullscreen: boolean;
        constructor(width: number, height: number, fullscreenWidth: $OptionalInt, fullscreenHeight: $OptionalInt, isFullscreen: boolean);
    }
}
