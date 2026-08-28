import { $Supplier_, $IntConsumer_, $IntSupplier_, $Consumer_, $Supplier, $LongSupplier_ } from "@package/java/util/function";
import { $ImmediateWindowProvider } from "@package/net/neoforged/neoforgespi/earlywindow";
import { $ModuleLayer, $Throwable, $Runnable, $Enum, $Record } from "@package/java/lang";

declare module "@package/net/neoforged/fml/earlydisplay" {
    export class $ColourScheme extends $Enum<$ColourScheme> {
        static values(): $ColourScheme[];
        static valueOf(arg0: string): $ColourScheme;
        background(): $ColourScheme$Colour;
        foreground(): $ColourScheme$Colour;
        static RED: $ColourScheme;
        static BLACK: $ColourScheme;
    }
    /**
     * Values that may be interpreted as {@link $ColourScheme}.
     */
    export type $ColourScheme_ = "red" | "black";
    export class $ElementShader {
        clear(): void;
        init(): void;
        close(): void;
        updateScreenSizeUniform(arg0: number, arg1: number): void;
        program(): number;
        activate(): void;
        updateTextureUniform(arg0: number): void;
        updateRenderTypeUniform(arg0: $ElementShader$RenderType_): void;
        constructor();
    }
    export class $RenderElement$DisplayContext extends $Record {
        performance(): $PerformanceInfo;
        scale(): number;
        width(): number;
        height(): number;
        scaledWidth(): number;
        scaledHeight(): number;
        elementShader(): $ElementShader;
        colourScheme(): $ColourScheme;
        constructor(width: number, height: number, scale: number, elementShader: $ElementShader, colourScheme: $ColourScheme_, performance: $PerformanceInfo);
    }
    /**
     * Values that may be interpreted as {@link $RenderElement$DisplayContext}.
     */
    export type $RenderElement$DisplayContext_ = { performance?: $PerformanceInfo, elementShader?: $ElementShader, width?: number, scale?: number, colourScheme?: $ColourScheme_, height?: number,  } | [performance?: $PerformanceInfo, elementShader?: $ElementShader, width?: number, scale?: number, colourScheme?: $ColourScheme_, height?: number, ];
    export class $ColourScheme$Colour extends $Record {
        red(): number;
        blue(): number;
        bluef(): number;
        greenf(): number;
        redf(): number;
        packedint(arg0: number): number;
        green(): number;
        constructor(red: number, green: number, blue: number);
    }
    /**
     * Values that may be interpreted as {@link $ColourScheme$Colour}.
     */
    export type $ColourScheme$Colour_ = { blue?: number, green?: number, red?: number,  } | [blue?: number, green?: number, red?: number, ];
    export class $ElementShader$RenderType extends $Enum<$ElementShader$RenderType> {
        static values(): $ElementShader$RenderType[];
        static valueOf(arg0: string): $ElementShader$RenderType;
        static TEXTURE: $ElementShader$RenderType;
        static BAR: $ElementShader$RenderType;
        static FONT: $ElementShader$RenderType;
    }
    /**
     * Values that may be interpreted as {@link $ElementShader$RenderType}.
     */
    export type $ElementShader$RenderType_ = "font" | "texture" | "bar";
    export class $DisplayWindow implements $ImmediateWindowProvider {
        name(): string;
        context(): $RenderElement$DisplayContext;
        initialize(arg0: string[]): $Runnable;
        start(arg0: string, arg1: string): $Runnable;
        close(): void;
        loadingOverlay<T>(arg0: $Supplier_<never>, arg1: $Supplier_<never>, arg2: $Consumer_<($Throwable) | undefined>, arg3: boolean): $Supplier<T>;
        periodicTick(): void;
        getGLVersion(): string;
        positionWindow(arg0: (never) | undefined, arg1: $IntConsumer_, arg2: $IntConsumer_, arg3: $IntConsumer_, arg4: $IntConsumer_): boolean;
        updateModuleReads(arg0: $ModuleLayer): void;
        getFramebufferTextureId(): number;
        render(arg0: number): void;
        setupMinecraftWindow(arg0: $IntSupplier_, arg1: $IntSupplier_, arg2: $Supplier_<string>, arg3: $LongSupplier_): number;
        updateFramebufferSize(arg0: $IntConsumer_, arg1: $IntConsumer_): void;
        crash(arg0: string): void;
        initWindow(arg0: string): void;
        addMojangTexture(arg0: number): void;
        constructor();
        get GLVersion(): string;
        get framebufferTextureId(): number;
    }
    export class $PerformanceInfo {
    }
}
