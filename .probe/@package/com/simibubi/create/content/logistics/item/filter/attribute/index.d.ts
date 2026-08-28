import { $Level } from "@package/net/minecraft/world/level";
import { $BiPredicate_, $Function_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as attributes from "@package/com/simibubi/create/content/logistics/item/filter/attribute/attributes";

declare module "@package/com/simibubi/create/content/logistics/item/filter/attribute" {
    export class $SingletonItemAttribute implements $ItemAttribute {
        getType(): $ItemAttributeType;
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        format(arg0: boolean): $MutableComponent;
        getTranslationParameters(): $Object[];
        constructor(arg0: $SingletonItemAttribute$Type, arg1: $BiPredicate_<$ItemStack, $Level>, arg2: string);
        get type(): $ItemAttributeType;
        get translationKey(): string;
        get translationParameters(): $Object[];
    }
    export class $AllItemAttributeTypes {
        static init(): void;
        static HAS_ENCHANT: $ItemAttributeType;
        static CRUSHABLE: $ItemAttributeType;
        static BOOK_AUTHOR: $ItemAttributeType;
        static BOOK_COPY: $ItemAttributeType;
        static WASHABLE: $ItemAttributeType;
        static HAS_FLUID: $ItemAttributeType;
        static BADLY_DAMAGED: $ItemAttributeType;
        static EQUIPABLE: $ItemAttributeType;
        static IN_ITEM_GROUP: $ItemAttributeType;
        static NOT_STACKABLE: $ItemAttributeType;
        static FLUID_CONTAINER: $ItemAttributeType;
        static SHULKER_FILL_LEVEL: $ItemAttributeType;
        static MAX_ENCHANTED: $ItemAttributeType;
        static DAMAGED: $ItemAttributeType;
        static CONSUMABLE: $ItemAttributeType;
        static ADDED_BY: $ItemAttributeType;
        static SMOKABLE: $ItemAttributeType;
        static RENAMED: $ItemAttributeType;
        static BLASTABLE: $ItemAttributeType;
        static HAUNTABLE: $ItemAttributeType;
        static IN_TAG: $ItemAttributeType;
        static SMELTABLE: $ItemAttributeType;
        static PLACEABLE: $ItemAttributeType;
        static FURNACE_FUEL: $ItemAttributeType;
        static HAS_NAME: $ItemAttributeType;
        static ENCHANTED: $ItemAttributeType;
        static HAS_COLOR: $ItemAttributeType;
        static COMPOSTABLE: $ItemAttributeType;
        constructor();
    }
    export class $ItemAttribute {
        static saveStatic(arg0: $ItemAttribute, arg1: $HolderLookup$Provider): $CompoundTag;
        static getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        static loadStatic(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ItemAttribute;
        static CODEC: $Codec<$ItemAttribute>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
    }
    export interface $ItemAttribute {
        format(arg0: boolean): $MutableComponent;
        getType(): $ItemAttributeType;
        getTranslationParameters(): $Object[];
        getTranslationKey(): string;
        appliesTo(arg0: $ItemStack_, arg1: $Level): boolean;
        get type(): $ItemAttributeType;
        get translationParameters(): $Object[];
        get translationKey(): string;
    }
    export class $ItemAttributeType {
    }
    export interface $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
    }
    export class $SingletonItemAttribute$Type implements $ItemAttributeType {
        codec(): $MapCodec<$ItemAttribute>;
        createAttribute(): $ItemAttribute;
        getAllAttributes(arg0: $ItemStack_, arg1: $Level): $List<$ItemAttribute>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute>;
        constructor(arg0: $Function_<$SingletonItemAttribute$Type, $SingletonItemAttribute>);
    }
    export class $ItemAttribute$ItemAttributeEntry extends $Record {
        attribute(): $ItemAttribute;
        inverted(): boolean;
        static CODEC: $Codec<$ItemAttribute$ItemAttributeEntry>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemAttribute$ItemAttributeEntry>;
        constructor(attribute: $ItemAttribute, inverted: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ItemAttribute$ItemAttributeEntry}.
     */
    export type $ItemAttribute$ItemAttributeEntry_ = { attribute?: $ItemAttribute, inverted?: boolean,  } | [attribute?: $ItemAttribute, inverted?: boolean, ];
}
