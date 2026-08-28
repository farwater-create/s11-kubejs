import { $PoseTransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $ShaderInstance } from "@package/net/minecraft/client/renderer";
import { $BufferBuilderExt } from "@package/com/moulberry/axiom/hooks";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $Deque } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $PoseStackExtension } from "@package/dev/engine_room/flywheel/impl/extension";
import { $MatrixStack } from "@package/foundry/veil/api/client/render";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IPoseStackExtension, $IVertexConsumerExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $BufferBuilderExtension } from "@package/net/caffeinemc/mods/sodium/client/render/vertex/buffer";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $MemoryStack } from "@package/org/lwjgl/system";
import { $MeshDataAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/render/immediate/buffer_builder/sorting";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $BufferBuilderAccessor as $BufferBuilderAccessor$1 } from "@package/net/caffeinemc/mods/sodium/mixin/features/render/immediate/buffer_builder/intrinsics";
import { $MeshDataAccessor as $MeshDataAccessor$1, $BufferBuilderAccessor } from "@package/com/lowdragmc/lowdraglib2/core/mixins/accessor";
import { $PoseStackAccessor as $PoseStackAccessor$1 } from "@package/dev/engine_room/flywheel/impl/mixin";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $VertexFormatExtensions } from "@package/net/caffeinemc/mods/sodium/api/vertex/format";
import { $ImmutableMap } from "@package/com/google/common/collect";
import { $VertexBufferExtension, $DebugVertexBufferExt } from "@package/foundry/veil/ext";
import { $VertexBufferWriter } from "@package/net/caffeinemc/mods/sodium/api/vertex/buffer";
import { $BufferBuilderAccessor as $BufferBuilderAccessor$3 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Stream } from "@package/java/util/stream";
import { $Transformation } from "@package/com/mojang/math";
import { $BufferBuilderAccessor as $BufferBuilderAccessor$2 } from "@package/rbasamoyai/createbigcannons/mixin/client";
import { $PoseStackAccessor } from "@package/org/embeddedt/modernfix/common/mixin/bugfix/entity_pose_stack";
import { $Vector3dc, $Matrix4f, $Vector3f, $Quaterniondc, $Matrix3f, $Vector3fc, $Quaternionf, $Quaternionfc } from "@package/org/joml";

declare module "@package/com/mojang/blaze3d/vertex" {
    export class $DefaultVertexFormat {
        static POSITION_COLOR_NORMAL: $VertexFormat;
        static BLIT_SCREEN: $VertexFormat;
        static PARTICLE: $VertexFormat;
        static POSITION_TEX_COLOR_NORMAL: $VertexFormat;
        static BLOCK: $VertexFormat;
        static POSITION_TEX: $VertexFormat;
        static POSITION_TEX_COLOR: $VertexFormat;
        static POSITION: $VertexFormat;
        static POSITION_TEX_LIGHTMAP_COLOR: $VertexFormat;
        static POSITION_COLOR_LIGHTMAP: $VertexFormat;
        static POSITION_COLOR: $VertexFormat;
        static POSITION_COLOR_TEX_LIGHTMAP: $VertexFormat;
        static NEW_ENTITY: $VertexFormat;
        constructor();
    }
    export class $ByteBufferBuilder implements $AutoCloseable {
        clear(): void;
        close(): void;
        build(): $ByteBufferBuilder$Result;
        discard(): void;
        reserve(bytes: number): number;
        localvar$jkd000$axiom$modifyCapacity(value: number): number;
        constructor(capacity: number);
    }
    export class $VertexConsumer {
    }
    export interface $VertexConsumer extends $IVertexConsumerExtension {
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(color: number): $VertexConsumer;
        setWhiteAlpha(color: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        setOverlay(color: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setLight(color: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, x: number, y: number, z: number): $VertexConsumer;
        set whiteAlpha(value: number);
        set overlay(value: number);
        set light(value: number);
    }
    export class $VertexFormat$Mode extends $Enum<$VertexFormat$Mode> {
        static values(): $VertexFormat$Mode[];
        static valueOf(arg0: string): $VertexFormat$Mode;
        indexCount(vertices: number): number;
        asGLMode: number;
        static QUADS: $VertexFormat$Mode;
        primitiveLength: number;
        primitiveStride: number;
        connectedPrimitives: boolean;
        static TRIANGLE_FAN: $VertexFormat$Mode;
        static DEBUG_LINES: $VertexFormat$Mode;
        static TRIANGLES: $VertexFormat$Mode;
        static DEBUG_LINE_STRIP: $VertexFormat$Mode;
        static LINE_STRIP: $VertexFormat$Mode;
        static LINES: $VertexFormat$Mode;
        static TRIANGLE_STRIP: $VertexFormat$Mode;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormat$Mode}.
     */
    export type $VertexFormat$Mode_ = "lines" | "line_strip" | "debug_lines" | "debug_line_strip" | "triangles" | "triangle_strip" | "triangle_fan" | "quads";
    export class $VertexSorting$DistanceFunction {
    }
    export interface $VertexSorting$DistanceFunction {
        apply(vector: $Vector3f): number;
    }
    /**
     * Values that may be interpreted as {@link $VertexSorting$DistanceFunction}.
     */
    export type $VertexSorting$DistanceFunction_ = ((arg0: $Vector3f) => number);
    export class $MeshData$SortState extends $Record {
        centroids(): $Vector3f[];
        indexType(): $VertexFormat$IndexType;
        buildSortedIndexBuffer(bufferBuilder: $ByteBufferBuilder, sorting: $VertexSorting_): $ByteBufferBuilder$Result;
        constructor(arg0: $Vector3f[], arg1: $VertexFormat$IndexType_);
    }
    /**
     * Values that may be interpreted as {@link $MeshData$SortState}.
     */
    export type $MeshData$SortState_ = { centroids?: $Vector3f[], indexType?: $VertexFormat$IndexType_,  } | [centroids?: $Vector3f[], indexType?: $VertexFormat$IndexType_, ];
    export class $VertexMultiConsumer {
        static create(...delegates: $VertexConsumer[]): $VertexConsumer;
        static create(first: $VertexConsumer, second: $VertexConsumer): $VertexConsumer;
        static create(consumer: $VertexConsumer): $VertexConsumer;
        static create(): $VertexConsumer;
        constructor();
    }
    export class $VertexMultiConsumer$Multiple extends $Record implements $VertexConsumer, $VertexBufferWriter {
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(packedOverlay: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        setOverlay(packedOverlay: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setLight(packedOverlay: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
        canUseIntrinsics(): boolean;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        set whiteAlpha(value: number);
        set overlay(value: number);
        set light(value: number);
    }
    /**
     * Values that may be interpreted as {@link $VertexMultiConsumer$Multiple}.
     */
    export type $VertexMultiConsumer$Multiple_ = { delegates?: $VertexConsumer[],  } | [delegates?: $VertexConsumer[], ];
    export class $BufferBuilder implements $VertexConsumer, $BufferBuilderAccessor, $BufferBuilderAccessor$2, $BufferBuilderExtension, $VertexBufferWriter, $BufferBuilderAccessor$1, $BufferBuilderAccessor$3, $BufferBuilderExt {
        build(): $MeshData;
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(color: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        buildOrThrow(): $MeshData;
        sodium$duplicateVertex(): void;
        axiom$reserve(bytes: number): number;
        setOverlay(color: number): $VertexConsumer;
        setUv(u: number, v: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        setUv1(u: number, v: number): $VertexConsumer;
        setLight(color: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        axiom$getByteBufferBuilder(): $ByteBufferBuilder;
        sodium$getVertexFormat(): $VertexFormat;
        axiom$getVertexPointer(): number;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setWhiteAlpha(color: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
        canUseIntrinsics(): boolean;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        invokeBeginElement(element: $VertexFormatElement_): number;
        sodium$fastFormat(): boolean;
        callBeginElement(element: $VertexFormatElement_): number;
        catnip$getVertices(): number;
        mode: $VertexFormat$Mode;
        vertices: number;
        format: $VertexFormat;
        building: boolean;
        constructor(buffer: $ByteBufferBuilder, mode: $VertexFormat$Mode_, format: $VertexFormat);
        set overlay(value: number);
        set light(value: number);
        set whiteAlpha(value: number);
    }
    export class $VertexSorting {
        static byDistance(x: number, y: number, z: number): $VertexSorting;
        static byDistance(distanceFunction: $VertexSorting$DistanceFunction_): $VertexSorting;
        static byDistance(vector: $Vector3f): $VertexSorting;
        static ORTHOGRAPHIC_Z: $VertexSorting;
        static DISTANCE_TO_ORIGIN: $VertexSorting;
    }
    export interface $VertexSorting {
        sort(vectors: $Vector3f[]): number[];
    }
    /**
     * Values that may be interpreted as {@link $VertexSorting}.
     */
    export type $VertexSorting_ = ((arg0: $Vector3f[]) => number[]);
    export class $VertexFormatElement$Type extends $Enum<$VertexFormatElement$Type> {
        size(): number;
        static values(): $VertexFormatElement$Type[];
        static valueOf(arg0: string): $VertexFormatElement$Type;
        glType(): number;
        static UBYTE: $VertexFormatElement$Type;
        static FLOAT: $VertexFormatElement$Type;
        static BYTE: $VertexFormatElement$Type;
        static USHORT: $VertexFormatElement$Type;
        static UINT: $VertexFormatElement$Type;
        static INT: $VertexFormatElement$Type;
        static SHORT: $VertexFormatElement$Type;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Type}.
     */
    export type $VertexFormatElement$Type_ = "float" | "ubyte" | "byte" | "ushort" | "short" | "uint" | "int";
    export class $VertexFormatElement$Usage$SetupState {
    }
    export interface $VertexFormatElement$Usage$SetupState {
        setupBufferState(size: number, type: number, stride: number, pointer: number, arg4: number): void;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Usage$SetupState}.
     */
    export type $VertexFormatElement$Usage$SetupState_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $VertexFormat implements $VertexFormatExtensions {
        static builder(): $VertexFormat$Builder;
        contains(element: $VertexFormatElement_): boolean;
        getOffset(element: $VertexFormatElement_): number;
        getImmediateDrawVertexBuffer(): $VertexBuffer;
        getElementName(element: $VertexFormatElement_): string;
        getElements(): $List<$VertexFormatElement>;
        getVertexSize(): number;
        getElementAttributeNames(): $List<string>;
        getOffsetsByElement(): number[];
        hasColor(): boolean;
        hasUV(arg0: number): boolean;
        hasNormal(): boolean;
        handler$zpo000$veil$nameImmediateDrawVertexBuffer(arg0: $CallbackInfoReturnable<any>): void;
        getElementsMask(): number;
        clearBufferState(): void;
        sodium$getGlobalId(): number;
        hasPosition(): boolean;
        setupBufferState(): void;
        getElementMapping(): $ImmutableMap<string, $VertexFormatElement>;
        static UNKNOWN_ELEMENT: number;
        get immediateDrawVertexBuffer(): $VertexBuffer;
        get elements(): $List<$VertexFormatElement>;
        get vertexSize(): number;
        get elementAttributeNames(): $List<string>;
        get offsetsByElement(): number[];
        get elementsMask(): number;
        get elementMapping(): $ImmutableMap<string, $VertexFormatElement>;
    }
    export class $ByteBufferBuilder$Result implements $AutoCloseable {
        close(): void;
        byteBuffer(): $ByteBuffer;
    }
    export class $MeshData implements $AutoCloseable, $MeshDataAccessor$1, $MeshDataAccessor {
        close(): void;
        drawState(): $MeshData$DrawState;
        sortQuads(bufferBuilder: $ByteBufferBuilder, sorting: $VertexSorting_): $MeshData$SortState;
        vertexBuffer(): $ByteBuffer;
        indexBuffer(): $ByteBuffer;
        sodium$setIndexBuffer(arg0: $ByteBufferBuilder$Result): void;
        getIndexBuffer(): $ByteBufferBuilder$Result;
        setIndexBuffer(arg0: $ByteBufferBuilder$Result): void;
        constructor(vertexBuffer: $ByteBufferBuilder$Result, drawState: $MeshData$DrawState_);
    }
    export class $VertexFormatElement$Usage extends $Enum<$VertexFormatElement$Usage> implements $IExtensibleEnum {
        static values(): $VertexFormatElement$Usage[];
        static valueOf(arg0: string): $VertexFormatElement$Usage;
        static getExtensionInfo(): $ExtensionInfo;
        static POSITION: $VertexFormatElement$Usage;
        static UV: $VertexFormatElement$Usage;
        static GENERIC: $VertexFormatElement$Usage;
        static COLOR: $VertexFormatElement$Usage;
        static NORMAL: $VertexFormatElement$Usage;
        static get extensionInfo(): $ExtensionInfo;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement$Usage}.
     */
    export type $VertexFormatElement$Usage_ = "position" | "normal" | "color" | "uv" | "generic";
    export class $Tesselator {
        clear(): void;
        begin(mode: $VertexFormat$Mode_, format: $VertexFormat): $BufferBuilder;
        static getInstance(): $Tesselator;
        static init(): void;
        constructor();
        constructor(capacity: number);
        static get instance(): $Tesselator;
    }
    export class $MeshData$DrawState extends $Record {
        mode(): $VertexFormat$Mode;
        format(): $VertexFormat;
        vertexCount(): number;
        indexType(): $VertexFormat$IndexType;
        indexCount(): number;
        constructor(arg0: $VertexFormat, arg1: number, arg2: number, arg3: $VertexFormat$Mode_, arg4: $VertexFormat$IndexType_);
    }
    /**
     * Values that may be interpreted as {@link $MeshData$DrawState}.
     */
    export type $MeshData$DrawState_ = { mode?: $VertexFormat$Mode_, indexType?: $VertexFormat$IndexType_, indexCount?: number, format?: $VertexFormat, vertexCount?: number,  } | [mode?: $VertexFormat$Mode_, indexType?: $VertexFormat$IndexType_, indexCount?: number, format?: $VertexFormat, vertexCount?: number, ];
    export class $BufferUploader {
        static reset(): void;
        static invalidate(): void;
        static draw(meshData: $MeshData): void;
        static drawWithShader(meshData: $MeshData): void;
        static lastImmediateBuffer: $VertexBuffer;
        constructor();
    }
    export class $VertexMultiConsumer$Double implements $VertexConsumer, $VertexBufferWriter {
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        canUseIntrinsics(): boolean;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
        setUv(u: number, v: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(packedOverlay: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        setOverlay(packedOverlay: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setLight(packedOverlay: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        first: $VertexConsumer;
        second: $VertexConsumer;
        constructor(first: $VertexConsumer, second: $VertexConsumer);
        set whiteAlpha(value: number);
        set overlay(value: number);
        set light(value: number);
    }
    export class $SheetedDecalTextureGenerator implements $VertexConsumer, $VertexBufferWriter {
        push(arg0: $MemoryStack, arg1: number, arg2: number, arg3: $VertexFormat): void;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        canUseIntrinsics(): boolean;
        canUseIntrinsics(arg0: $VertexFormat): boolean;
        setUv(u: number, v: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number): $VertexConsumer;
        setUv1(u: number, v: number): $VertexConsumer;
        setUv2(u: number, v: number): $VertexConsumer;
        setNormal(x: number, y: number, z: number): $VertexConsumer;
        setColor(red: number, green: number, blue: number, alpha: number): $VertexConsumer;
        setColor(packedOverlay: number): $VertexConsumer;
        setWhiteAlpha(packedOverlay: number): $VertexConsumer;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number): void;
        putBulkData(pose: $PoseStack$Pose, quad: $BakedQuad, brightness: number[], red: number, green: number, blue: number, alpha: number, lightmap: number[], packedOverlay: number, readAlpha: boolean): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number[], arg3: number, arg4: number, arg5: number, arg6: number, arg7: number[], arg8: number, arg9: boolean, arg10: $Operation_<any>): void;
        wrapMethod$dhc000$sodium$modifyPutBulkData(arg0: $PoseStack$Pose, arg1: $BakedQuad, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: $Operation_<any>): void;
        setOverlay(packedOverlay: number): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        addVertex(pose: $Matrix4f, x: number, y: number, z: number): $VertexConsumer;
        addVertex(x: number, y: number, z: number, color: number, u: number, v: number, packedOverlay: number, packedLight: number, normalX: number, normalY: number, normalZ: number): void;
        addVertex(pos: $Vector3f): $VertexConsumer;
        addVertex(pose: $PoseStack$Pose, pos: $Vector3f): $VertexConsumer;
        setLight(packedOverlay: number): $VertexConsumer;
        setNormal(pose: $PoseStack$Pose, normalX: number, normalY: number, normalZ: number): $VertexConsumer;
        applyBakedNormals(generated: $Vector3f, data: $ByteBuffer, normalTransform: $Matrix3f): void;
        applyBakedLighting(packedLight: number, data: $ByteBuffer): number;
        /**
         * Variant with no per-vertex shading.
         */
        putBulkData(pose: $PoseStack$Pose, bakedQuad: $BakedQuad, red: number, green: number, blue: number, alpha: number, packedLight: number, packedOverlay: number, readExistingColor: boolean): void;
        misc(arg0: $VertexFormatElement_, ...arg1: number[]): $VertexConsumer;
        constructor(delegate: $VertexConsumer, pose: $PoseStack$Pose, textureScale: number);
        set whiteAlpha(value: number);
        set overlay(value: number);
        set light(value: number);
    }
    export class $VertexBuffer implements $AutoCloseable, $DebugVertexBufferExt, $VertexBufferExtension {
        close(): void;
        isInvalid(): boolean;
        bind(): void;
        getFormat(): $VertexFormat;
        static unbind(): void;
        veil$drawInstanced(arg0: number): void;
        veil$getIndexCount(): number;
        veil$drawIndirect(arg0: number, arg1: number, arg2: number): void;
        draw(): void;
        drawWithShader(modelViewMatrix: $Matrix4f, projectionMatrix: $Matrix4f, shader: $ShaderInstance): void;
        upload(meshData: $MeshData): void;
        handler$bbf000$veil$drawPatches(arg0: $CallbackInfo): void;
        modify$bbf000$veil$modifyDrawMode(arg0: number): number;
        veil$setName(arg0: string): void;
        uploadIndexBuffer(result: $ByteBufferBuilder$Result): void;
        constructor(usage: $VertexBuffer$Usage_);
        get invalid(): boolean;
        get format(): $VertexFormat;
    }
    export class $VertexBuffer$Usage extends $Enum<$VertexBuffer$Usage> {
        static values(): $VertexBuffer$Usage[];
        static valueOf(arg0: string): $VertexBuffer$Usage;
        static STATIC: $VertexBuffer$Usage;
        static DYNAMIC: $VertexBuffer$Usage;
    }
    /**
     * Values that may be interpreted as {@link $VertexBuffer$Usage}.
     */
    export type $VertexBuffer$Usage_ = "static" | "dynamic";
    export class $PoseStack$Pose {
        copy(): $PoseStack$Pose;
        normal(): $Matrix3f;
        transformNormal(x: number, y: number, z: number, destination: $Vector3f): $Vector3f;
        transformNormal(vector: $Vector3f, destination: $Vector3f): $Vector3f;
        pose(): $Matrix4f;
        trustedNormals: boolean;
        constructor(pose: $Matrix4f, normal: $Matrix3f);
    }
    export class $VertexFormatElement extends $Record {
        mask(): number;
        index(): number;
        type(): $VertexFormatElement$Type;
        count(): number;
        static register(id: number, index: number, type: $VertexFormatElement$Type_, usage: $VertexFormatElement$Usage_, count: number): $VertexFormatElement;
        id(): number;
        byteSize(): number;
        usage(): $VertexFormatElement$Usage;
        static findNextId(): number;
        static byId(id: number): $VertexFormatElement;
        static elementsFromMask(mask: number): $Stream<$VertexFormatElement>;
        setupBufferState(stateIndex: number, offset: number, arg2: number): void;
        static UV2: $VertexFormatElement;
        static POSITION: $VertexFormatElement;
        static UV: $VertexFormatElement;
        static UV1: $VertexFormatElement;
        static MAX_COUNT: number;
        static COLOR: $VertexFormatElement;
        static BY_ID: $VertexFormatElement[];
        static UV0: $VertexFormatElement;
        static NORMAL: $VertexFormatElement;
        constructor(id: number, index: number, type: $VertexFormatElement$Type_, usage: $VertexFormatElement$Usage_, count: number);
    }
    /**
     * Values that may be interpreted as {@link $VertexFormatElement}.
     */
    export type $VertexFormatElement_ = { index?: number, type?: $VertexFormatElement$Type_, usage?: $VertexFormatElement$Usage_, count?: number, id?: number,  } | [index?: number, type?: $VertexFormatElement$Type_, usage?: $VertexFormatElement$Usage_, count?: number, id?: number, ];
    export class $PoseStack implements $IPoseStackExtension, $PoseStackAccessor, $MatrixStack, $PoseStackAccessor$1, $PoseStackExtension {
        clear(): boolean;
        scale(x: number, y: number, z: number): void;
        isEmpty(): boolean;
        last(): $PoseStack$Pose;
        isIdentity(): boolean;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        rotate(arg0: $Quaternionfc): void;
        rotate(arg0: $Quaterniondc): void;
        rotateAround(arg0: $Quaterniondc, arg1: number, arg2: number, arg3: number): void;
        rotateAround(quaternion: $Quaternionf, x: number, y: number, z: number): void;
        rotateAround(arg0: $Quaternionfc, arg1: number, arg2: number, arg3: number): void;
        rotateXYZ(x: number, y: number, z: number): void;
        rotateZYX(x: number, y: number, z: number): void;
        setIdentity(): void;
        toPoseStack(): $PoseStack;
        applyScale(x: number, y: number, z: number): void;
        flywheel$transformStack(): $PoseTransformStack;
        translate(x: number, arg1: number, y: number): void;
        translate(x: number, y: number, z: number): void;
        matrixPop(): void;
        matrixPush(): void;
        mulPose(quaternion: $Quaternionf): void;
        mulPose(pose: $Matrix4f): void;
        pose(): $PoseStack$Pose;
        pushPose(): void;
        popPose(): void;
        /**
         * Pushes and applies the `transformation` to this pose stack.
         * 
         * The effects of this method can be reversed by a corresponding `PoseStack#popPose()` call.
         */
        pushTransformation(transformation: $Transformation): void;
        position(): $Matrix4f;
        copy(arg0: $MatrixStack): void;
        copy(arg0: $PoseStack$Pose): void;
        copy(arg0: $PoseStack): void;
        rotate(arg0: number, arg1: number, arg2: number, arg3: number): void;
        normal(): $Matrix3f;
        rotateXYZ(x: number, arg1: number, y: number): void;
        rotateZYX(x: number, arg1: number, y: number): void;
        applyScale(arg0: number): void;
        applyScale(arg0: $Vector3fc): void;
        applyScale(arg0: $Vector3dc): void;
        applyScale(x: number, arg1: number, y: number): void;
        applyScale(arg0: number): void;
        translate(arg0: $Vector3fc): void;
        translate(arg0: $Vector3dc): void;
        getPoseStack(): $Deque<$PoseStack$Pose>;
        flywheel$getPoseStack(): $Deque<$PoseStack$Pose>;
        constructor();
        get empty(): boolean;
        get poseStack(): $Deque<$PoseStack$Pose>;
    }
    export class $VertexFormat$Builder {
        add(name: string, element: $VertexFormatElement_): $VertexFormat$Builder;
        build(): $VertexFormat;
        padding(padding: number): $VertexFormat$Builder;
    }
    export class $VertexFormat$IndexType extends $Enum<$VertexFormat$IndexType> {
        static values(): $VertexFormat$IndexType[];
        static valueOf(arg0: string): $VertexFormat$IndexType;
        static least(indexCount: number): $VertexFormat$IndexType;
        bytes: number;
        asGLType: number;
        static INT: $VertexFormat$IndexType;
        static SHORT: $VertexFormat$IndexType;
    }
    /**
     * Values that may be interpreted as {@link $VertexFormat$IndexType}.
     */
    export type $VertexFormat$IndexType_ = "short" | "int";
}
