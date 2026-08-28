import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack, $DyeColor_, $Item, $DyeColor } from "@package/net/minecraft/world/item";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Collection } from "@package/java/util";

declare module "@package/plus/dragons/createdragonsplus/common/fluids/dye" {
    export class $DyeVariant extends $Record {
        id(): $ResourceLocation;
        color(): number;
        displayName(): string;
        serializedName(): string;
        isAvailable(): boolean;
        fluidName(): string;
        requiredModId(): string;
        isVanilla(): boolean;
        dyeItemStack(): $ItemStack;
        fanProcessingName(): string;
        vanillaColor(): $DyeColor;
        concreteBlockId(): $ResourceLocation;
        dyeItemId(): $ResourceLocation;
        dyeItemTag(): $TagKey<$Item>;
        constructor(id: $ResourceLocation_, serializedName: string, displayName: string, color: number, dyeItemTag: $TagKey_<$Item>, dyeItemId: $ResourceLocation_, concreteBlockId: $ResourceLocation_, vanillaColor: $DyeColor_, requiredModId: string);
        get available(): boolean;
        get vanilla(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DyeVariant}.
     */
    export type $DyeVariant_ = { requiredModId?: string, dyeItemId?: $ResourceLocation_, concreteBlockId?: $ResourceLocation_, serializedName?: string, vanillaColor?: $DyeColor_, color?: number, id?: $ResourceLocation_, dyeItemTag?: $TagKey_<$Item>, displayName?: string,  } | [requiredModId?: string, dyeItemId?: $ResourceLocation_, concreteBlockId?: $ResourceLocation_, serializedName?: string, vanillaColor?: $DyeColor_, color?: number, id?: $ResourceLocation_, dyeItemTag?: $TagKey_<$Item>, displayName?: string, ];
    export class $DyeVariantRegistry$Builder {
        add(arg0: $DyeVariant_): void;
        build(): $Collection<$DyeVariant>;
        constructor();
    }
    export class $RegisterDyeVariantsEvent extends $Event {
        register(arg0: $DyeVariant_): void;
        constructor(arg0: $DyeVariantRegistry$Builder);
    }
}
