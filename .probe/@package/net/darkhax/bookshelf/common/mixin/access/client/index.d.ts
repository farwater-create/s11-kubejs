import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $FontSet, $FontManager } from "@package/net/minecraft/client/gui/font";
import { $Map_, $Map } from "@package/java/util";
export * as gui from "@package/net/darkhax/bookshelf/common/mixin/access/client/gui";

declare module "@package/net/darkhax/bookshelf/common/mixin/access/client" {
    export class $AccessorMinecraft {
    }
    export interface $AccessorMinecraft {
        bookshelf$getFontManager(): $FontManager;
    }
    /**
     * Values that may be interpreted as {@link $AccessorMinecraft}.
     */
    export type $AccessorMinecraft_ = (() => $FontManager);
    export class $AccessorFontManager {
    }
    export interface $AccessorFontManager {
        bookshelf$getFonts(): $Map<$ResourceLocation, $FontSet>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorFontManager}.
     */
    export type $AccessorFontManager_ = (() => $Map_<$ResourceLocation_, $FontSet>);
    export class $AccessorItemBlockRenderTypes {
        static bookshelf$getBlockTypes(): $Map<$Block, $RenderType>;
    }
    export interface $AccessorItemBlockRenderTypes {
    }
}
