import { $TextureAtlasSpriteExtension, $SpriteContentsExtension as $SpriteContentsExtension$2 } from "@package/net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $SpriteContentsExt } from "@package/com/moulberry/axiom/hooks";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $ITextureSize } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpriteContentsFrameInfoAccessor, $AnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/tracking";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContentsInvoker } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures";
import { $ResourceTextureAtlasAccessor } from "@package/foundry/veil/mixin/resource/accessor";
import { $List, $Map_, $Collection_, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $SpriteResourceLoader, $SpriteResourceLoader_ } from "@package/net/minecraft/client/renderer/texture/atlas";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Function_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $SpriteContentsFrameInfoAccessor as $SpriteContentsFrameInfoAccessor$1, $SpriteContentsTickerAccessor, $SpriteContentsAccessor, $SpriteContentsAnimatedTextureAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/features/textures/animations/upload";
import { $SpriteFinderImpl$SpriteFinderAccess as $SpriteFinderImpl$SpriteFinderAccess$1 } from "@package/appeng/thirdparty/fabric";
import { $Record, $RuntimeException, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $File_, $Closeable } from "@package/java/io";
import { $TextureLocationSettable } from "@package/dzwdz/chat_heads/mixininterface";
import { $Logger } from "@package/org/slf4j";
import { $HttpTextureAccessor } from "@package/dev/tr7zw/skinlayers/accessor";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $TextureAtlasExtension, $TextureManagerExtension, $AbstractTextureExtension } from "@package/foundry/veil/ext";
import { $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl } from "@package/net/fabricmc/fabric/impl/renderer";
import { $IntStream } from "@package/java/util/stream";
import { $SpriteContentsExtension as $SpriteContentsExtension$1, $TickerExtension } from "@package/dev/simulated_team/simulated/mixin_interface";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteContentsExtension } from "@package/net/caffeinemc/mods/sodium/client/render/texture";
import { $TextureAtlasAccessor } from "@package/net/caffeinemc/mods/sodium/mixin/core/render/texture";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $StitcherException extends $RuntimeException {
        getAllSprites(): $Collection<$Stitcher$Entry>;
        constructor(entry: $Stitcher$Entry, allSprites: $Collection_<$Stitcher$Entry>);
        get allSprites(): $Collection<$Stitcher$Entry>;
    }
    export class $Stitcher<T extends $Stitcher$Entry> {
        getWidth(): number;
        getHeight(): number;
        stitch(): void;
        gatherSprites(loader: $Stitcher$SpriteLoader_<T>): void;
        registerSprite(stitcherEntry: T): void;
        static smallestFittingMinTexel(dimension: number, mipLevel: number): number;
        constructor(maxWidth: number, maxHeight: number, mipLevel: number);
        get width(): number;
        get height(): number;
    }
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(x: number, y: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable, $AbstractTextureExtension {
        reset(textureManager: $TextureManager, resourceManager: $ResourceManager, path: $ResourceLocation_, executor: $Executor_): void;
        load(resourceManager: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        setFilter(blur: boolean, mipmap: boolean): void;
        handler$bah000$veil$setFilterDSA(arg0: boolean, arg1: boolean, arg2: $CallbackInfo, arg3: number, arg4: number): void;
        handler$bah000$veil$bind(arg0: $CallbackInfo): void;
        restoreLastBlurMipmap(): void;
        setBlurMipmap(blur: boolean, mipmap: boolean): void;
        releaseId(): void;
        getTextureTarget(): number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor();
        get textureTarget(): number;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static v(hurt: boolean): number;
        close(): void;
        static u(u: number): number;
        static pack(u: number, hurt: boolean): number;
        static pack(u: number, v: number): number;
        teardownOverlayColor(): void;
        setupOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $HttpTexture extends $SimpleTexture implements $TextureLocationSettable, $HttpTextureAccessor {
        getImage(): $NativeImage;
        handler$bdm000$chat_heads$chatheads$registerBlendedHeadTexture(image: $NativeImage, ci: $CallbackInfo): void;
        chatheads$setTextureLocation(location: $ResourceLocation_): void;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(file: $File_ | null, urlString: string, location: $ResourceLocation_, processLegacySkin: boolean, onDownloaded: $Runnable_ | null);
        get image(): $NativeImage;
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        close(): void;
        uploadInterpolatedFrame(x: number, y: number, ticker: $SpriteContents$Ticker): void;
        handler$did000$sodium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
        this$0: $SpriteContents;
        constructor(arg0: $SpriteContents);
    }
    export class $SpriteLoader$Preparations extends $Record {
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        width(): number;
        height(): number;
        missing(): $TextureAtlasSprite;
        mipLevel(): number;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>,  } | [width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $Stitcher$Holder<T extends $Stitcher$Entry> extends $Record {
        entry(): T;
        width(): number;
        height(): number;
        constructor(entry: T, mipLevel: number);
        constructor(entry: T, width: number, height: number);
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$Holder}.
     */
    export type $Stitcher$Holder_<T> = { entry?: $Stitcher$Entry, width?: number, height?: number,  } | [entry?: $Stitcher$Entry, width?: number, height?: number, ];
    export class $SpriteLoader {
        static create(atlas: $TextureAtlas): $SpriteLoader;
        stitch(contents: $List_<$SpriteContents>, mipLevel: number, executor: $Executor_): $SpriteLoader$Preparations;
        static runSpriteSuppliers(spriteResourceLoader: $SpriteResourceLoader_, factories: $List_<$Function_<$SpriteResourceLoader, $SpriteContents>>, executor: $Executor_): $CompletableFuture<$List<$SpriteContents>>;
        loadAndStitch(resouceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_): $CompletableFuture<$SpriteLoader$Preparations>;
        loadAndStitch(resourceManager: $ResourceManager, location: $ResourceLocation_, mipLevel: number, executor: $Executor_, sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $CompletableFuture<$SpriteLoader$Preparations>;
        static DEFAULT_METADATA_SECTIONS: $Set<$MetadataSectionSerializer<never>>;
        constructor(location: $ResourceLocation_, maxSupportedTextureSize: number, minWidth: number, minHeight: number);
    }
    export class $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
    }
    export interface $Stitcher$SpriteLoader<T extends $Stitcher$Entry> {
        load(entry: T, x: number, y: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Stitcher$SpriteLoader}.
     */
    export type $Stitcher$SpriteLoader_<T> = ((arg0: T, arg1: number, arg2: number) => void);
    export class $MissingTextureAtlasSprite {
        static getLocation(): $ResourceLocation;
        static create(): $SpriteContents;
        static getTexture(): $DynamicTexture;
        constructor();
        static get location(): $ResourceLocation;
        static get texture(): $DynamicTexture;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor, $SpriteContentsFrameInfoAccessor$1 {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
        constructor(index: number, time: number);
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        width(): number;
        height(): number;
    }
    export class $PreloadedTexture extends $SimpleTexture {
        getFuture(): $CompletableFuture<void>;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(resourceManager: $ResourceManager, location: $ResourceLocation_, backgroundExecutor: $Executor_);
        get future(): $CompletableFuture<void>;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor, $TickerExtension {
        close(): void;
        tickAndUpload(x: number, y: number): void;
        simulated$setPlaying(arg0: boolean): void;
        simulated$isPlaying(): boolean;
        handler$dhp000$sodium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        getFrameIndex(): number;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        getFrameTicks(): number;
        subFrame: number;
        animationInfo: $SpriteContents$AnimatedTexture;
        frame: number;
        constructor(animationInfo: $SpriteContents, interpolationData: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData | null);
        get frameIndex(): number;
        get frameTicks(): number;
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsInvoker, $SpriteContentsExtension, $SpriteContentsAccessor, $SpriteContentsExtension$2, $SpriteContentsExtension$1, $SpriteContentsExt {
        name(): $ResourceLocation;
        close(): void;
        width(): number;
        height(): number;
        metadata(): $ResourceMetadata;
        createTicker(): $SpriteTicker;
        getOriginalImage(): $NativeImage;
        isTransparent(frame: number, x: number, y: number): boolean;
        increaseMipLevel(mipLevel: number): void;
        upload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getFrameCount(): number;
        uploadFirstFrame(x: number, y: number): void;
        axiom$setOpacity(opacity: number, x: number, y: number): void;
        getUniqueFrames(): $IntStream;
        sodium$hasTransparentPixels(): boolean;
        sodium$hasTranslucentPixels(): boolean;
        sodium$isActive(): boolean;
        sodium$setActive(arg0: boolean): void;
        simulated$setTicker(arg0: $SpriteContents$Ticker): void;
        simulated$getTicker(): $SpriteContents$Ticker;
        sodium$hasAnimation(): boolean;
        getImages(): $NativeImage[];
        invokeUpload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(name: $ResourceLocation_, frameSize: $FrameSize_, originalImage: $NativeImage, metadata: $ResourceMetadata_);
        get frameCount(): number;
        get uniqueFrames(): $IntStream;
        get images(): $NativeImage[];
    }
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable {
        getPixels(): $NativeImage;
        setPixels(pixels: $NativeImage): void;
        wrapOperation$iip000$moonlight$forceMipMap(arg0: number, arg1: number, arg2: number, arg3: $Operation_<any>): void;
        wrapOperation$iip000$moonlight$forceMipMap(arg0: $NativeImage, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: $Operation_<any>): void;
        upload(): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        static NOT_ASSIGNED: number;
        pixels: $NativeImage;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(pixels: $NativeImage);
        constructor(width: number, height: number, useCalloc: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $AnimatedTextureAccessor, $SpriteContentsAnimatedTextureAccessor {
        getFrameY(frameIndex: number): number;
        getFrameX(frameIndex: number): number;
        createTicker(): $SpriteTicker;
        uploadFrame(x: number, y: number, frameIndex: number): void;
        uploadFirstFrame(x: number, y: number): void;
        getUniqueFrames(): $IntStream;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        getFrameRowSize(): number;
        frames: $List<$SpriteContents$FrameInfo>;
        frameRowSize: number;
        this$0: $SpriteContents;
        interpolateFrames: boolean;
        get uniqueFrames(): $IntStream;
    }
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $ResourceTextureAtlasAccessor, $TextureAtlasExtension, $TextureAtlasAccessor, $SpriteFinderImpl$SpriteFinderAccess, $SpriteFinderImpl$SpriteFinderAccess$1 {
        location(): $ResourceLocation;
        getWidth(): number;
        getHeight(): number;
        tick(): void;
        maxSupportedTextureSize(): number;
        cycleAnimationFrames(): void;
        fabric_spriteFinder(): $SpriteFinderImpl;
        handler$jkc000$axiom$cycleAnimationFrames(ci: $CallbackInfo): void;
        upload(preparations: $SpriteLoader$Preparations_): void;
        getSprite(name: $ResourceLocation_): $TextureAtlasSprite;
        clearTextureData(): void;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        updateFilter(preparations: $SpriteLoader$Preparations_): void;
        veil$hasTexture(arg0: $ResourceLocation_): boolean;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        getMipLevel(): number;
        sodium$getHeight(): number;
        sodium$getWidth(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        mipmap: boolean;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        width: number;
        blur: boolean;
        id: number;
        sprites: $List<$SpriteContents>;
        height: number;
        constructor(location: $ResourceLocation_);
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get mipLevel(): number;
    }
    export class $Stitcher$Region<T extends $Stitcher$Entry> {
        walk(spriteLoader: $Stitcher$SpriteLoader_<T>): void;
        add(holder: $Stitcher$Holder_<T>): boolean;
        getX(): number;
        getY(): number;
        constructor(originX: number, originY: number, width: number, height: number);
        get x(): number;
        get y(): number;
    }
    export class $SimpleTexture extends $AbstractTexture implements $ITextureSize {
        ldlib2$getImageHeight(): number;
        ldlib2$getImageWidth(): number;
        getTextureImage(resourceManager: $ResourceManager): $SimpleTexture$TextureImage;
        getWidth(): number;
        getHeight(): number;
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
        constructor(location: $ResourceLocation_);
        get width(): number;
        get height(): number;
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable, $TextureManagerExtension, $IdentifiableResourceReloadListener {
        register(path: $ResourceLocation_, texture: $AbstractTexture): void;
        register(name: string, texture: $DynamicTexture): $ResourceLocation;
        close(): void;
        release(path: $ResourceLocation_): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        bindForSetup(path: $ResourceLocation_): void;
        dumpAllSheets(path: $Path_): void;
        getFabricId(): $ResourceLocation;
        preload(path: $ResourceLocation_, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        getTexture(path: $ResourceLocation_): $AbstractTexture;
        getTexture(path: $ResourceLocation_, defaultTexture: $AbstractTexture): $AbstractTexture;
        tick(): void;
        getFabricDependencies(): $Collection<any>;
        veil$registerPreloadedTexture(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $Executor_): $CompletableFuture<any>;
        modify$bbe000$veil$wrap(arg0: $AbstractTexture, arg1: $ResourceLocation_): $AbstractTexture;
        handler$zpn000$veil$applyLabel(arg0: $ResourceLocation_, arg1: $AbstractTexture, arg2: $CallbackInfo): void;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(resourceManager: $ResourceManager);
        get fabricId(): $ResourceLocation;
        get fabricDependencies(): $Collection<any>;
        get name(): string;
    }
    export class $TextureAtlasSprite implements $TextureAtlasSpriteExtension {
        wrap(consumer: $VertexConsumer): $VertexConsumer;
        getX(): number;
        contents(): $SpriteContents;
        getVOffset(u: number): number;
        getY(): number;
        createTicker(): $TextureAtlasSprite$Ticker;
        atlasLocation(): $ResourceLocation;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        uvShrinkRatio(): number;
        getUOffset(u: number): number;
        sodium$hasUnknownImageContents(): boolean;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU1(): number;
        getU(u: number): number;
        getV(u: number): number;
        uploadFirstFrame(): void;
        x: number;
        y: number;
        constructor(atlasLocation: $ResourceLocation_, contents: $SpriteContents, originX: number, originY: number, x: number, y: number);
        get u0(): number;
        get v0(): number;
        get v1(): number;
        get u1(): number;
    }
    export class $SimpleTexture$TextureImage implements $Closeable {
    }
    export class $MipmapGenerator {
        static generateMipLevels(images: $NativeImage[], mipLevel: number): $NativeImage[];
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
}
