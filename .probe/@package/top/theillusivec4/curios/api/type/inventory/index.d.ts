import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ICurio$DropRule } from "@package/top/theillusivec4/curios/api/type/capability";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $AttributeModifier_, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Map, $Collection, $Set } from "@package/java/util";

declare module "@package/top/theillusivec4/curios/api/type/inventory" {
    export class $IDynamicStackHandler {
    }
    export interface $IDynamicStackHandler extends $IItemHandlerModifiable {
        grow(arg0: number): void;
        getSlots(): number;
        shrink(arg0: number): void;
        getStackInSlot(arg0: number): $ItemStack;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getPreviousStackInSlot(arg0: number): $ItemStack;
        setPreviousStackInSlot(arg0: number, arg1: $ItemStack_): void;
        get slots(): number;
    }
    export class $ICurioStacksHandler {
    }
    export interface $ICurioStacksHandler {
        getStacks(): $IDynamicStackHandler;
        getModifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        update(): void;
        /**
         * @deprecated
         */
        grow(arg0: number): void;
        getIdentifier(): string;
        getSlots(): number;
        clearCachedModifiers(): void;
        getPermanentModifiers(): $Set<$AttributeModifier>;
        getModifiersByOperation(arg0: $AttributeModifier$Operation_): $Collection<$AttributeModifier>;
        getActiveStates(): $NonNullList<boolean>;
        getDropRule(): $ICurio$DropRule;
        updateActiveState(arg0: number): void;
        /**
         * @deprecated
         */
        shrink(arg0: number): void;
        clearModifiers(): void;
        removeModifier(arg0: $ResourceLocation_): void;
        serializeNBT(): $CompoundTag;
        deserializeNBT(arg0: $CompoundTag_): void;
        getCosmeticStacks(): $IDynamicStackHandler;
        getRenders(): $NonNullList<boolean>;
        isVisible(): boolean;
        hasCosmetic(): boolean;
        canToggleRendering(): boolean;
        addTransientModifier(arg0: $AttributeModifier_): void;
        addPermanentModifier(arg0: $AttributeModifier_): void;
        getSyncTag(): $CompoundTag;
        copyModifiers(arg0: $ICurioStacksHandler): void;
        applySyncTag(arg0: $CompoundTag_): void;
        /**
         * @deprecated
         */
        getSizeShift(): number;
        getCachedModifiers(): $Set<$AttributeModifier>;
        get stacks(): $IDynamicStackHandler;
        get modifiers(): $Map<$ResourceLocation, $AttributeModifier>;
        get identifier(): string;
        get slots(): number;
        get permanentModifiers(): $Set<$AttributeModifier>;
        get activeStates(): $NonNullList<boolean>;
        get dropRule(): $ICurio$DropRule;
        get cosmeticStacks(): $IDynamicStackHandler;
        get renders(): $NonNullList<boolean>;
        get visible(): boolean;
        get syncTag(): $CompoundTag;
        get sizeShift(): number;
        get cachedModifiers(): $Set<$AttributeModifier>;
    }
}
