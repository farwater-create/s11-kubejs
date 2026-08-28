import { $Level, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FuzzyMode_ } from "@package/appeng/api/config";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $Spliterator, $Iterator, $List, $Set, $List_, $Collection } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $AEKeyFilter } from "@package/appeng/api/storage";
import { $Object2LongMap$Entry } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos_, $Registry } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Object, $Iterable, $Class } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/stacks" {
    export class $AEKeyType {
        contains(arg0: $AEKey): boolean;
        filter(): $AEKeyFilter;
        getId(): $ResourceLocation;
        getDescription(): $Component;
        getKeyClass(): $Class<$AEKey>;
        getAmountPerOperation(): number;
        supportsFuzzyRangeSearch(): boolean;
        static items(): $AEKeyType;
        codec(): $MapCodec<$AEKey>;
        static fluids(): $AEKeyType;
        tryCast(arg0: $AEKey): $AEKey;
        getTagNames(): $Stream<$TagKey<never>>;
        static fromRawId(arg0: number): $AEKeyType;
        getAmountPerUnit(): number;
        readFromPacket(arg0: $RegistryFriendlyByteBuf): $AEKey;
        getUnitSymbol(): string;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        getAmountPerByte(): number;
        getRawId(): number;
        loadKeyFromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        static CODEC: $Codec<$AEKeyType>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$AEKeyType>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKeyType>;
        constructor(arg0: $ResourceLocation_, arg1: $Class<$AEKey>, arg2: $Component_);
        get id(): $ResourceLocation;
        get description(): $Component;
        get keyClass(): $Class<$AEKey>;
        get amountPerOperation(): number;
        get tagNames(): $Stream<$TagKey<never>>;
        get amountPerUnit(): number;
        get unitSymbol(): string;
        get amountPerByte(): number;
        get rawId(): number;
    }
    export class $KeyCounter implements $Iterable<$Object2LongMap$Entry<$AEKey>> {
        remove(arg0: $AEKey): number;
        remove(arg0: $AEKey, arg1: number): void;
        size(): number;
        reset(): void;
        get(arg0: $AEKey): number;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $AEKey, arg1: number): void;
        iterator(): $Iterator<$Object2LongMap$Entry<$AEKey>>;
        addAll(arg0: $KeyCounter): void;
        set(arg0: $AEKey, arg1: number): void;
        keySet(): $Set<$AEKey>;
        removeAll(arg0: $KeyCounter): void;
        getFirstEntry(): $Object2LongMap$Entry<$AEKey>;
        getFirstEntry<T extends $AEKey>(arg0: $Class<T>): $Object2LongMap$Entry<$AEKey>;
        findFuzzy(arg0: $AEKey, arg1: $FuzzyMode_): $Collection<$Object2LongMap$Entry<$AEKey>>;
        getFirstKey<T extends $AEKey>(arg0: $Class<T>): T;
        getFirstKey(): $AEKey;
        removeEmptySubmaps(): void;
        removeZeros(): void;
        spliterator(): $Spliterator<$Object2LongMap$Entry<$AEKey>>;
        forEach(arg0: $Consumer_<$Object2LongMap$Entry<$AEKey>>): void;
        constructor();
        [Symbol.iterator](): Iterator<$Object2LongMap$Entry<$AEKey>>
        get empty(): boolean;
    }
    export class $GenericStack extends $Record {
        static isWrapped(arg0: $ItemStack_): boolean;
        static sum(arg0: $GenericStack_, arg1: $GenericStack_): $GenericStack;
        static writeBuffer(arg0: $GenericStack_, arg1: $RegistryFriendlyByteBuf): void;
        what(): $AEKey;
        static readBuffer(arg0: $RegistryFriendlyByteBuf): $GenericStack;
        amount(): number;
        static unwrapItemStack(arg0: $ItemStack_): $GenericStack;
        static fromItemStack(arg0: $ItemStack_): $GenericStack;
        static readTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $GenericStack;
        static writeTag(arg0: $HolderLookup$Provider, arg1: $GenericStack_): $CompoundTag;
        static fromFluidStack(arg0: $FluidStack_): $GenericStack;
        static getStackSizeOrZero(arg0: $GenericStack_): number;
        static wrapInItemStack(arg0: $AEKey, arg1: number): $ItemStack;
        static wrapInItemStack(arg0: $GenericStack_): $ItemStack;
        static FAULT_TOLERANT_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static CODEC: $Codec<$GenericStack>;
        static AMOUNT_FIELD: string;
        static FAULT_TOLERANT_NULLABLE_LIST_CODEC: $Codec<$List<$GenericStack>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $GenericStack>;
        constructor(what: $AEKey, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $GenericStack}.
     */
    export type $GenericStack_ = { amount?: number, what?: $AEKey,  } | [amount?: number, what?: $AEKey, ];
    export class $AEItemKey extends $AEKey {
        matches(arg0: $ItemStack_): boolean;
        static matches(arg0: $AEKey, arg1: $ItemStack_): boolean;
        matches(arg0: $Ingredient_): boolean;
        static of(arg0: $ItemLike_): $AEItemKey;
        static of(arg0: $ItemStack_): $AEItemKey;
        static filter(): $AEKeyFilter;
        is(arg0: $ItemLike_): boolean;
        static is(arg0: $AEKey): boolean;
        getItem(): $Item;
        static fromPacket(arg0: $RegistryFriendlyByteBuf): $AEItemKey;
        getMaxStackSize(): number;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEItemKey;
        isDamaged(): boolean;
        toStack(): $ItemStack;
        toStack(arg0: number): $ItemStack;
        dropSecondary(): $AEItemKey;
        getReadOnlyStack(): $ItemStack;
        static CODEC: $Codec<$AEItemKey>;
        static MAP_CODEC: $MapCodec<$AEItemKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        get item(): $Item;
        get maxStackSize(): number;
        get damaged(): boolean;
        get readOnlyStack(): $ItemStack;
    }
    export class $AEKey {
        get<T>(arg0: $DataComponentType<T>): T;
        matches(arg0: $GenericStack_): boolean;
        getId(): $ResourceLocation;
        getType(): $AEKeyType;
        getDisplayName(): $Component;
        getAmountPerOperation(): number;
        getFuzzySearchMaxValue(): number;
        supportsFuzzyRangeSearch(): boolean;
        getFuzzySearchValue(): number;
        wrapForDisplayOrFilter(): $ItemStack;
        toTag(arg0: $HolderLookup$Provider): $CompoundTag;
        static writeKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        fuzzyEquals(arg0: $AEKey, arg1: $FuzzyMode_): boolean;
        getModId(): string;
        static readKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        hasComponents(): boolean;
        addDrops(arg0: number, arg1: $List_<$ItemStack_>, arg2: $Level, arg3: $BlockPos_): void;
        isTagged(arg0: $TagKey_<never>): boolean;
        getPrimaryKey(): $Object;
        toTagGeneric(arg0: $HolderLookup$Provider): $CompoundTag;
        getAmountPerUnit(): number;
        getUnitSymbol(): string;
        formatAmount(arg0: number, arg1: $AmountFormat_): string;
        dropSecondary(): $AEKey;
        static writeOptionalKey(arg0: $RegistryFriendlyByteBuf, arg1: $AEKey): void;
        static fromTagGeneric(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $AEKey;
        static readOptionalKey(arg0: $RegistryFriendlyByteBuf): $AEKey;
        getAmountPerByte(): number;
        writeToPacket(arg0: $RegistryFriendlyByteBuf): void;
        static CODEC: $Codec<$AEKey>;
        static MAP_CODEC: $MapCodec<$AEKey>;
        static TYPE_FIELD: string;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $AEKey>;
        constructor();
        get id(): $ResourceLocation;
        get type(): $AEKeyType;
        get displayName(): $Component;
        get amountPerOperation(): number;
        get fuzzySearchMaxValue(): number;
        get fuzzySearchValue(): number;
        get modId(): string;
        get primaryKey(): $Object;
        get amountPerUnit(): number;
        get unitSymbol(): string;
        get amountPerByte(): number;
    }
    export class $AmountFormat extends $Enum<$AmountFormat> {
        static values(): $AmountFormat[];
        static valueOf(arg0: string): $AmountFormat;
        static SLOT_LARGE_FONT: $AmountFormat;
        static SLOT: $AmountFormat;
        static FULL: $AmountFormat;
    }
    /**
     * Values that may be interpreted as {@link $AmountFormat}.
     */
    export type $AmountFormat_ = "full" | "slot" | "slot_large_font";
}
