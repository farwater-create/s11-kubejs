import { $Consumer_ } from "@package/java/util/function";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $HolderLookup$Provider, $Holder_, $Holder$Reference, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ArmorMaterial, $Item, $ItemStack_, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/armortrim" {
    export class $TrimMaterial extends $Record {
        static create(assetName: string, ingredient: $Item, itemModelIndex: number, description: $Component_, overrideArmorMaterials: $Map_<$Holder_<$ArmorMaterial>, string>): $TrimMaterial;
        description(): $Component;
        assetName(): string;
        overrideArmorMaterials(): $Map<$Holder<$ArmorMaterial>, string>;
        itemModelIndex(): number;
        ingredient(): $Holder<$Item>;
        static CODEC: $Codec<$Holder<$TrimMaterial>>;
        static DIRECT_CODEC: $Codec<$TrimMaterial>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrimMaterial>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TrimMaterial>>;
        constructor(arg0: string, arg1: $Holder_<$Item>, arg2: number, arg3: $Map_<$Holder_<$ArmorMaterial>, string>, arg4: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $TrimMaterial}.
     */
    export type $TrimMaterial_ = { ingredient?: $Holder_<$Item>, description?: $Component_, assetName?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>,  } | [ingredient?: $Holder_<$Item>, description?: $Component_, assetName?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, ];
    export class $TrimPattern extends $Record {
        description(): $Component;
        decal(): boolean;
        templateItem(): $Holder<$Item>;
        copyWithStyle(trimMaterial: $Holder_<$TrimMaterial>): $Component;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$TrimPattern>>;
        static DIRECT_CODEC: $Codec<$TrimPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrimPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TrimPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Item>, arg2: $Component_, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TrimPattern}.
     */
    export type $TrimPattern_ = { templateItem?: $Holder_<$Item>, decal?: boolean, assetId?: $ResourceLocation_, description?: $Component_,  } | [templateItem?: $Holder_<$Item>, decal?: boolean, assetId?: $ResourceLocation_, description?: $Component_, ];
    export class $TrimPatterns {
        static register(context: $BootstrapContext<$TrimPattern_>, templateItem: $Item, trimPatternKey: $ResourceKey_<$TrimPattern>): void;
        static bootstrap(context: $BootstrapContext<$TrimPattern_>): void;
        static getFromTemplate(registries: $HolderLookup$Provider, template: $ItemStack_): ($Holder$Reference<$TrimPattern>) | undefined;
        static WAYFINDER: $ResourceKey<$TrimPattern>;
        static WILD: $ResourceKey<$TrimPattern>;
        static COAST: $ResourceKey<$TrimPattern>;
        static SNOUT: $ResourceKey<$TrimPattern>;
        static RAISER: $ResourceKey<$TrimPattern>;
        static SHAPER: $ResourceKey<$TrimPattern>;
        static SILENCE: $ResourceKey<$TrimPattern>;
        static DUNE: $ResourceKey<$TrimPattern>;
        static VEX: $ResourceKey<$TrimPattern>;
        static SPIRE: $ResourceKey<$TrimPattern>;
        static HOST: $ResourceKey<$TrimPattern>;
        static RIB: $ResourceKey<$TrimPattern>;
        static BOLT: $ResourceKey<$TrimPattern>;
        static SENTRY: $ResourceKey<$TrimPattern>;
        static FLOW: $ResourceKey<$TrimPattern>;
        static EYE: $ResourceKey<$TrimPattern>;
        static TIDE: $ResourceKey<$TrimPattern>;
        static WARD: $ResourceKey<$TrimPattern>;
        constructor();
    }
    export class $ArmorTrim implements $TooltipProvider {
        pattern(): $Holder<$TrimPattern>;
        material(): $Holder<$TrimMaterial>;
        hasPatternAndMaterial(pattern: $Holder_<$TrimPattern>, material: $Holder_<$TrimMaterial>): boolean;
        innerTexture(armorMaterial: $Holder_<$ArmorMaterial>): $ResourceLocation;
        outerTexture(armorMaterial: $Holder_<$ArmorMaterial>): $ResourceLocation;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        withTooltip(showInTooltip: boolean): $ArmorTrim;
        static CODEC: $Codec<$ArmorTrim>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ArmorTrim>;
        constructor(material: $Holder_<$TrimMaterial>, pattern: $Holder_<$TrimPattern>);
        constructor(material: $Holder_<$TrimMaterial>, pattern: $Holder_<$TrimPattern>, showInTooltip: boolean);
    }
    export class $TrimMaterials {
        static bootstrap(context: $BootstrapContext<$TrimMaterial_>): void;
        static getFromIngredient(regustries: $HolderLookup$Provider, ingredient: $ItemStack_): ($Holder$Reference<$TrimMaterial>) | undefined;
        static GOLD: $ResourceKey<$TrimMaterial>;
        static EMERALD: $ResourceKey<$TrimMaterial>;
        static AMETHYST: $ResourceKey<$TrimMaterial>;
        static NETHERITE: $ResourceKey<$TrimMaterial>;
        static REDSTONE: $ResourceKey<$TrimMaterial>;
        static DIAMOND: $ResourceKey<$TrimMaterial>;
        static LAPIS: $ResourceKey<$TrimMaterial>;
        static IRON: $ResourceKey<$TrimMaterial>;
        static COPPER: $ResourceKey<$TrimMaterial>;
        static QUARTZ: $ResourceKey<$TrimMaterial>;
        constructor();
    }
}
