import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $GlyphProviderDefinition$Conditional_ } from "@package/net/minecraft/client/gui/font/providers";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IdentifiableResourceReloadListener } from "@package/net/fabricmc/fabric/api/resource";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $Minecraft, $Options } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Map_, $Set_, $List_, $Collection, $Map } from "@package/java/util";
import { $StringRepresentable, $DependencySorter$Entry } from "@package/net/minecraft/util";
import { $SheetGlyphInfo, $GlyphProvider, $GlyphInfo, $GlyphProvider_, $GlyphProvider$Conditional_ } from "@package/com/mojang/blaze3d/font";
import { $Consumer, $IntFunction_, $Supplier_, $Consumer_, $Predicate_, $Supplier } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $AccessorFontManager } from "@package/net/darkhax/bookshelf/common/mixin/access/client";
import { $FontResourceManagerAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Dumpable, $AbstractTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $Font, $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
export * as providers from "@package/net/minecraft/client/gui/font/providers";
export * as glyphs from "@package/net/minecraft/client/gui/font/glyphs";

declare module "@package/net/minecraft/client/gui/font" {
    export class $FontOption extends $Enum<$FontOption> implements $StringRepresentable {
        static values(): $FontOption[];
        static valueOf(arg0: string): $FontOption;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$FontOption>;
        static UNIFORM: $FontOption;
        static JAPANESE_VARIANTS: $FontOption;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FontOption}.
     */
    export type $FontOption_ = "uniform" | "jp";
    export class $FontTexture extends $AbstractTexture implements $Dumpable {
        add(glyphInfo: $SheetGlyphInfo): $BakedGlyph;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        blur: boolean;
        id: number;
        constructor(renderTypes: $GlyphRenderTypes_, colored: boolean);
    }
    export class $FontSet$GlyphInfoFilter extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontSet$GlyphInfoFilter}.
     */
    export type $FontSet$GlyphInfoFilter_ = { glyphInfoNotFishy?: $GlyphInfo, glyphInfo?: $GlyphInfo,  } | [glyphInfoNotFishy?: $GlyphInfo, glyphInfo?: $GlyphInfo, ];
    export class $CodepointMap$Output<T> {
    }
    export interface $CodepointMap$Output<T> {
        accept(index: number, object: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CodepointMap$Output}.
     */
    export type $CodepointMap$Output_<T> = ((arg0: number, arg1: T) => void);
    export class $FontTexture$Node {
    }
    export class $TextFieldHelper$CursorStep extends $Enum<$TextFieldHelper$CursorStep> {
        static values(): $TextFieldHelper$CursorStep[];
        static valueOf(arg0: string): $TextFieldHelper$CursorStep;
        static WORD: $TextFieldHelper$CursorStep;
        static CHARACTER: $TextFieldHelper$CursorStep;
    }
    /**
     * Values that may be interpreted as {@link $TextFieldHelper$CursorStep}.
     */
    export type $TextFieldHelper$CursorStep_ = "character" | "word";
    export class $CodepointMap<T> {
        remove(index: number): T;
        get(index: number): T;
        put(index: number, value: T): T;
        clear(): void;
        forEach(output: $CodepointMap$Output_<T>): void;
        computeIfAbsent(index: number, valueIfAbsentGetter: $IntFunction_<T>): T;
        keySet(): $IntSet;
        constructor(blockConstructor: $IntFunction_<T[]>, blockMapConstructor: $IntFunction_<T[][]>);
    }
    export class $FontOption$Filter {
        apply(options: $Set_<$FontOption_>): boolean;
        merge(filter: $FontOption$Filter): $FontOption$Filter;
        static CODEC: $Codec<$FontOption$Filter>;
        static ALWAYS_PASS: $FontOption$Filter;
        constructor(values: $Map_<$FontOption_, boolean>);
    }
    export class $FontManager$UnresolvedBuilderBundle extends $Record implements $DependencySorter$Entry<$ResourceLocation> {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$UnresolvedBuilderBundle}.
     */
    export type $FontManager$UnresolvedBuilderBundle_ = { builders?: $List_<$FontManager$BuilderResult_>, fontId?: $ResourceLocation_, dependencies?: $Set_<$ResourceLocation_>,  } | [builders?: $List_<$FontManager$BuilderResult_>, fontId?: $ResourceLocation_, dependencies?: $Set_<$ResourceLocation_>, ];
    export class $FontManager$FontDefinitionFile extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$FontDefinitionFile}.
     */
    export type $FontManager$FontDefinitionFile_ = { providers?: $List_<$GlyphProviderDefinition$Conditional_>,  } | [providers?: $List_<$GlyphProviderDefinition$Conditional_>, ];
    export class $GlyphRenderTypes extends $Record {
        normal(): $RenderType;
        select(displayMode: $Font$DisplayMode_): $RenderType;
        static createForIntensityTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        static createForColorTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        polygonOffset(): $RenderType;
        seeThrough(): $RenderType;
        constructor(arg0: $RenderType, arg1: $RenderType, arg2: $RenderType);
    }
    /**
     * Values that may be interpreted as {@link $GlyphRenderTypes}.
     */
    export type $GlyphRenderTypes_ = { polygonOffset?: $RenderType, seeThrough?: $RenderType, normal?: $RenderType,  } | [polygonOffset?: $RenderType, seeThrough?: $RenderType, normal?: $RenderType, ];
    export class $FontManager implements $PreparableReloadListener, $AutoCloseable, $FontResourceManagerAccess, $AccessorFontManager, $IdentifiableResourceReloadListener {
        close(): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        createFontFilterFishy(): $Font;
        getFabricId(): $ResourceLocation;
        updateOptions(options: $Options): void;
        createFont(): $Font;
        getName(): string;
        getFabricDependencies(): $Collection<$ResourceLocation>;
        bookshelf$getFonts(): $Map<$ResourceLocation, $FontSet>;
        getFontSets(): $Map<$ResourceLocation, $FontSet>;
        static LOGGER: $Logger;
        fontSets: $Map<$ResourceLocation, $FontSet>;
        static MISSING_FONT: $ResourceLocation;
        constructor(textureManager: $TextureManager);
        get fabricId(): $ResourceLocation;
        get name(): string;
        get fabricDependencies(): $Collection<$ResourceLocation>;
    }
    export class $FontManager$Preparation extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$Preparation}.
     */
    export type $FontManager$Preparation_ = { fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>, allProviders?: $List_<$GlyphProvider_>,  } | [fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>, allProviders?: $List_<$GlyphProvider_>, ];
    export class $FontSet implements $AutoCloseable {
        name(): $ResourceLocation;
        close(): void;
        reload(allProviders: $List_<$GlyphProvider$Conditional_>, options: $Set_<$FontOption_>): void;
        reload(options: $Set_<$FontOption_>): void;
        getGlyphInfo(character: number, filterFishyGlyphs: boolean): $GlyphInfo;
        getRandomGlyph(glyph: $GlyphInfo): $BakedGlyph;
        getGlyph(character: number): $BakedGlyph;
        whiteGlyph(): $BakedGlyph;
        constructor(textureManager: $TextureManager, name: $ResourceLocation_);
    }
    export class $TextFieldHelper {
        copy(): void;
        insertText(text: string): void;
        keyPressed(key: number): boolean;
        charTyped(character: string): boolean;
        cut(): void;
        static setClipboardContents(text: $Minecraft, arg1: string): void;
        static getClipboardContents(minecraft: $Minecraft): string;
        setCursorPos(direction: number, keepSelection: boolean): void;
        setCursorPos(direction: number): void;
        paste(): void;
        selectAll(): void;
        setCursorToStart(): void;
        setCursorToStart(keepSelection: boolean): void;
        removeFromCursor(direction: number, step: $TextFieldHelper$CursorStep_): void;
        removeCharsFromCursor(direction: number): void;
        getCursorPos(): number;
        setSelectionPos(direction: number): void;
        setCursorToEnd(keepSelection: boolean): void;
        setCursorToEnd(): void;
        moveByChars(direction: number, keepSelection: boolean): void;
        moveByChars(direction: number): void;
        isSelecting(): boolean;
        setSelectionRange(selectionStart: number, selectionEnd: number): void;
        getSelectionPos(): number;
        moveByWords(direction: number, keepSelection: boolean): void;
        moveByWords(direction: number): void;
        moveBy(direction: number, keepSelection: boolean, cursorStep: $TextFieldHelper$CursorStep_): void;
        static createClipboardGetter(minecraft: $Minecraft): $Supplier<string>;
        removeWordsFromCursor(direction: number): void;
        static createClipboardSetter(minecraft: $Minecraft): $Consumer<string>;
        getMessageFn: $Supplier<string>;
        constructor(getMessage: $Supplier_<string>, setMessage: $Consumer_<string>, getClipboard: $Supplier_<string>, setClipboard: $Consumer_<string>, stringValidator: $Predicate_<string>);
        get selecting(): boolean;
    }
    export class $AllMissingGlyphProvider implements $GlyphProvider {
        getGlyph(arg0: number): $GlyphInfo;
        getSupportedGlyphs(): $IntSet;
        close(): void;
        constructor();
        get supportedGlyphs(): $IntSet;
    }
    export class $FontManager$BuilderId extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$BuilderId}.
     */
    export type $FontManager$BuilderId_ = { pack?: string, fontId?: $ResourceLocation_, index?: number,  } | [pack?: string, fontId?: $ResourceLocation_, index?: number, ];
    export class $FontManager$BuilderResult extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $FontManager$BuilderResult}.
     */
    export type $FontManager$BuilderResult_ = { filter?: $FontOption$Filter, result?: $Either<$CompletableFuture<($GlyphProvider_) | undefined>, $ResourceLocation_>, id?: $FontManager$BuilderId_,  } | [filter?: $FontOption$Filter, result?: $Either<$CompletableFuture<($GlyphProvider_) | undefined>, $ResourceLocation_>, id?: $FontManager$BuilderId_, ];
}
