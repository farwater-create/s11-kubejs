import { $Function_, $Function } from "@package/java/util/function";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Lazy } from "@package/dev/latvian/mods/kubejs/util";
import { RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Record } from "@package/java/lang";
import { $Map } from "@package/java/util";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/client/icon" {
    export class $AtlasSpriteKubeIcon extends $Record implements $KubeIcon {
        getType(): $KubeIconType<never>;
        atlas(): ($ResourceLocation) | undefined;
        sprite(): $ResourceLocation;
        static TYPE: $KubeIconType<$AtlasSpriteKubeIcon>;
        constructor(atlas: ($ResourceLocation_) | undefined, sprite: $ResourceLocation_);
        get type(): $KubeIconType<never>;
    }
    /**
     * Values that may be interpreted as {@link $AtlasSpriteKubeIcon}.
     */
    export type $AtlasSpriteKubeIcon_ = { atlas?: ($ResourceLocation_) | undefined, sprite?: $ResourceLocation_,  } | [atlas?: ($ResourceLocation_) | undefined, sprite?: $ResourceLocation_, ];
    export class $KubeIconRenderer$FromAtlasSprite extends $Record implements $KubeIconRenderer {
        icon(): $AtlasSpriteKubeIcon;
        draw(mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number): void;
        constructor(icon: $AtlasSpriteKubeIcon_);
    }
    /**
     * Values that may be interpreted as {@link $KubeIconRenderer$FromAtlasSprite}.
     */
    export type $KubeIconRenderer$FromAtlasSprite_ = { icon?: $AtlasSpriteKubeIcon_,  } | [icon?: $AtlasSpriteKubeIcon_, ];
    export class $KubeIconRenderer$FromItem extends $Record implements $KubeIconRenderer {
        icon(): $ItemKubeIcon;
        draw(mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number): void;
        constructor(icon: $ItemKubeIcon_);
    }
    /**
     * Values that may be interpreted as {@link $KubeIconRenderer$FromItem}.
     */
    export type $KubeIconRenderer$FromItem_ = { icon?: $ItemKubeIcon_,  } | [icon?: $ItemKubeIcon_, ];
    export class $TextureKubeIcon extends $Record implements $KubeIcon {
        getType(): $KubeIconType<never>;
        texture(): $ResourceLocation;
        static TYPE: $KubeIconType<$TextureKubeIcon>;
        constructor(texture: $ResourceLocation_);
        get type(): $KubeIconType<never>;
    }
    /**
     * Values that may be interpreted as {@link $TextureKubeIcon}.
     */
    export type $TextureKubeIcon_ = { texture?: $ResourceLocation_,  } | [texture?: $ResourceLocation_, ];
    export class $KubeIconRenderer$FromTexture extends $Record implements $KubeIconRenderer {
        icon(): $TextureKubeIcon;
        draw(mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number): void;
        constructor(icon: $TextureKubeIcon_);
    }
    /**
     * Values that may be interpreted as {@link $KubeIconRenderer$FromTexture}.
     */
    export type $KubeIconRenderer$FromTexture_ = { icon?: $TextureKubeIcon_,  } | [icon?: $TextureKubeIcon_, ];
    export class $KubeIconTypeRegistry {
    }
    export interface $KubeIconTypeRegistry {
        register(type: $KubeIconType_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $KubeIconTypeRegistry}.
     */
    export type $KubeIconTypeRegistry_ = ((type: $KubeIconType<never>) => void);
    export class $KubeIconType<T extends $KubeIcon> extends $Record {
        id(): $ResourceLocation;
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        static TYPES: $Lazy<$Map<$ResourceLocation, $KubeIconType<never>>>;
        static CODEC: $Codec<$KubeIconType<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIconType<never>>;
        constructor(id: $ResourceLocation_, codec: $MapCodec<T>);
        constructor(id: $ResourceLocation_, codec: $MapCodec<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $KubeIconType}.
     */
    export type $KubeIconType_<T> = { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIcon_>, codec?: $MapCodec<$KubeIcon_>, id?: $ResourceLocation_,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIcon_>, codec?: $MapCodec<$KubeIcon_>, id?: $ResourceLocation_, ];
    export class $KubeIconRenderer {
        static from(icon: $KubeIcon_): $KubeIconRenderer;
        static RENDERERS: $Lazy<$Map<$KubeIconType<never>, $Function<never, $KubeIconRenderer>>>;
    }
    export interface $KubeIconRenderer {
        draw(mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number): void;
    }
    /**
     * Values that may be interpreted as {@link $KubeIconRenderer}.
     */
    export type $KubeIconRenderer_ = ((mc: $Minecraft, graphics: $GuiGraphics, x: number, y: number, size: number) => void);
    export class $KubeIcon {
        static CODEC: $Codec<$KubeIcon>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, ($KubeIcon) | undefined>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $KubeIcon>;
    }
    export interface $KubeIcon {
        getType(): $KubeIconType<never>;
        get type(): $KubeIconType<never>;
    }
    /**
     * Values that may be interpreted as {@link $KubeIcon}.
     */
    export type $KubeIcon_ = { type: "kubejs:item", item: { id: RegistryTypes.Item, count?: number,  },  } | { type: "kubejs:texture", texture: `${string}:${string}`,  } | { type: "kubejs:atlas_sprite", atlas?: `${string}:${string}`, sprite: `${string}:${string}`,  } | (() => $KubeIconType_<never>);
    export class $ItemKubeIcon extends $Record implements $KubeIcon {
        getType(): $KubeIconType<never>;
        item(): $ItemStack;
        static TYPE: $KubeIconType<$ItemKubeIcon>;
        constructor(item: $ItemStack_);
        get type(): $KubeIconType<never>;
    }
    /**
     * Values that may be interpreted as {@link $ItemKubeIcon}.
     */
    export type $ItemKubeIcon_ = { item?: $ItemStack_,  } | [item?: $ItemStack_, ];
    export class $KubeIconRenderer$Registry {
    }
    export interface $KubeIconRenderer$Registry {
        register<T extends $KubeIcon>(type: $KubeIconType_<T>, factory: $Function_<T, $KubeIconRenderer>): void;
    }
    /**
     * Values that may be interpreted as {@link $KubeIconRenderer$Registry}.
     */
    export type $KubeIconRenderer$Registry_ = ((type: $KubeIconType<any>, factory: $Function<any, $KubeIconRenderer>) => void);
}
