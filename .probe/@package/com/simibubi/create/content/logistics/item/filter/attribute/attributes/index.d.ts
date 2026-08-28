import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec } from "@package/com/mojang/serialization";
import { $CreativeModeTab, $DyeColor_, $Item, $ItemStack_, $DyeColor } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment } from "@package/net/minecraft/world/item/enchantment";
import { $ItemAttribute, $ItemAttributeType } from "@package/com/simibubi/create/content/logistics/item/filter/attribute";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/logistics/item/filter/attribute/attributes" {
    export class $FluidContentsAttribute extends $Record implements $ItemAttribute {
        getType(): $ItemAttributeType;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        fluid(): $Fluid;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$FluidContentsAttribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidContentsAttribute>;
        constructor(fluid: $Fluid);
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $FluidContentsAttribute}.
     */
    export type $FluidContentsAttribute_ = { fluid?: $Fluid,  } | [fluid?: $Fluid, ];
    export class $AddedByAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
    export class $ShulkerFillLevelAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
    export class $BookAuthorAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
    export class $BookAuthorAttribute extends $Record implements $ItemAttribute {
        getType(): $ItemAttributeType;
        author(): string;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$BookAuthorAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BookAuthorAttribute>;
        constructor(author: string);
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $BookAuthorAttribute}.
     */
    export type $BookAuthorAttribute_ = { author?: string,  } | [author?: string, ];
    export class $BookCopyAttribute extends $Record implements $ItemAttribute {
        getType(): $ItemAttributeType;
        generation(): number;
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        getTranslationParameters(): $Object[];
        static CODEC: $MapCodec<$BookCopyAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BookCopyAttribute>;
        constructor(generation: number);
        get type(): $ItemAttributeType;
        get translationKey(): string;
        get translationParameters(): $Object[];
    }
    /**
     * Values that may be interpreted as {@link $BookCopyAttribute}.
     */
    export type $BookCopyAttribute_ = { generation?: number,  } | [generation?: number, ];
    export class $FluidContentsAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
    export class $InTagAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
    export class $ItemNameAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
    export class $ShulkerFillLevelAttribute$ShulkerLevels extends $Enum<$ShulkerFillLevelAttribute$ShulkerLevels> implements $StringRepresentable {
        getRemappedEnumConstantName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerFillLevelAttribute$ShulkerLevels}.
     */
    export type $ShulkerFillLevelAttribute$ShulkerLevels_ = "empty" | "partial" | "full";
    export class $ShulkerFillLevelAttribute extends $Record implements $ItemAttribute {
        getType(): $ItemAttributeType;
        levels(): $ShulkerFillLevelAttribute$ShulkerLevels;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$ShulkerFillLevelAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ShulkerFillLevelAttribute>;
        constructor(levels: $ShulkerFillLevelAttribute$ShulkerLevels_);
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ShulkerFillLevelAttribute}.
     */
    export type $ShulkerFillLevelAttribute_ = { levels?: $ShulkerFillLevelAttribute$ShulkerLevels_,  } | [levels?: $ShulkerFillLevelAttribute$ShulkerLevels_, ];
    export class $ItemNameAttribute extends $Record implements $ItemAttribute {
        getType(): $ItemAttributeType;
        itemName(): string;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$ItemNameAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ItemNameAttribute>;
        constructor(itemName: string);
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ItemNameAttribute}.
     */
    export type $ItemNameAttribute_ = { itemName?: string,  } | [itemName?: string, ];
    export class $ColorAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
    export class $InItemGroupAttribute implements $ItemAttribute {
        getType(): $ItemAttributeType;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$InItemGroupAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $InItemGroupAttribute>;
        constructor(arg0: $CreativeModeTab);
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    export class $AddedByAttribute extends $Record implements $ItemAttribute {
        getType(): $ItemAttributeType;
        modId(): string;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$AddedByAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AddedByAttribute>;
        constructor(modId: string);
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $AddedByAttribute}.
     */
    export type $AddedByAttribute_ = { modId?: string,  } | [modId?: string, ];
    export class $ColorAttribute extends $Record implements $ItemAttribute {
        getType(): $ItemAttributeType;
        color(): $DyeColor;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$ColorAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ColorAttribute>;
        constructor(color: $DyeColor_);
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $ColorAttribute}.
     */
    export type $ColorAttribute_ = { color?: $DyeColor_,  } | [color?: $DyeColor_, ];
    export class $BookCopyAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
    export class $EnchantAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
    export class $EnchantAttribute extends $Record implements $ItemAttribute {
        getType(): $ItemAttributeType;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        enchantment(): $Holder<$Enchantment>;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$EnchantAttribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $EnchantAttribute>;
        constructor(enchantment: $Holder_<$Enchantment>);
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnchantAttribute}.
     */
    export type $EnchantAttribute_ = { enchantment?: $Holder_<$Enchantment>,  } | [enchantment?: $Holder_<$Enchantment>, ];
    export class $InTagAttribute extends $Record implements $ItemAttribute {
        getType(): $ItemAttributeType;
        tag(): $TagKey<$Item>;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        static CODEC: $MapCodec<$InTagAttribute>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $InTagAttribute>;
        constructor(tag: $TagKey_<$Item>);
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    /**
     * Values that may be interpreted as {@link $InTagAttribute}.
     */
    export type $InTagAttribute_ = { tag?: $TagKey_<$Item>,  } | [tag?: $TagKey_<$Item>, ];
    export class $InItemGroupAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor();
    }
}
