import { $Ingredient_, $SingleRecipeInput_, $SingleRecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Set_, $List_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $IFluidHandlerItem } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Predicate, $Predicate_, $Supplier } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SequencedAssemblySubCategory } from "@package/com/simibubi/create/compat/jei/category/sequencedAssembly";
import { $Enum, $Record, $Exception } from "@package/java/lang";
import { $IAssemblyRecipe } from "@package/com/simibubi/create/content/processing/sequenced";
import { $Pair } from "@package/net/createmod/catnip/data";
import { $Level, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ProcessingRecipeParams, $StandardProcessingRecipe } from "@package/com/simibubi/create/content/processing/recipe";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/fluids/transfer" {
    export class $FluidManipulationBehaviour$BlockPosEntry extends $Record {
        pos(): $BlockPos;
        distance(): number;
        constructor(pos: $BlockPos_, distance: number);
    }
    /**
     * Values that may be interpreted as {@link $FluidManipulationBehaviour$BlockPosEntry}.
     */
    export type $FluidManipulationBehaviour$BlockPosEntry_ = { pos?: $BlockPos_, distance?: number,  } | [pos?: $BlockPos_, distance?: number, ];
    export class $GenericItemEmptying {
        static emptyItem(arg0: $Level, arg1: $ItemStack_, arg2: boolean): $Pair<$FluidStack, $ItemStack>;
        static canItemBeEmptied(arg0: $Level, arg1: $ItemStack_): boolean;
        constructor();
    }
    export class $EmptyingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> {
        matches(arg0: $SingleRecipeInput_, arg1: $Level): boolean;
        getResultingFluid(): $FluidStack;
        constructor(arg0: $ProcessingRecipeParams);
        get resultingFluid(): $FluidStack;
    }
    export class $FluidManipulationBehaviour extends $BlockEntityBehaviour {
        reset(): void;
        isInfinite(): boolean;
        counterpartActed(): void;
        blockEntity: $SmartBlockEntity;
        constructor(arg0: $SmartBlockEntity);
        get infinite(): boolean;
    }
    export class $FluidSplashPacket extends $Record implements $ClientboundPacketPayload {
        pos(): $BlockPos;
        handle(arg0: $LocalPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        fluid(): $FluidStack;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidSplashPacket>;
        constructor(pos: $BlockPos_, fluid: $FluidStack_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $FluidSplashPacket}.
     */
    export type $FluidSplashPacket_ = { pos?: $BlockPos_, fluid?: $FluidStack_,  } | [pos?: $BlockPos_, fluid?: $FluidStack_, ];
    export class $FillingRecipe extends $StandardProcessingRecipe<$SingleRecipeInput> implements $IAssemblyRecipe {
        matches(arg0: $SingleRecipeInput_, arg1: $Level): boolean;
        addAssemblyFluidIngredients(arg0: $List_<$SizedFluidIngredient>): void;
        getDescriptionForAssembly(): $Component;
        addRequiredMachines(arg0: $Set_<$ItemLike_>): void;
        addAssemblyIngredients(arg0: $List_<$Ingredient_>): void;
        getJEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        getRequiredFluid(): $SizedFluidIngredient;
        supportsAssembly(): boolean;
        constructor(arg0: $ProcessingRecipeParams);
        get descriptionForAssembly(): $Component;
        get JEISubCategory(): $Supplier<$Supplier<$SequencedAssemblySubCategory>>;
        get requiredFluid(): $SizedFluidIngredient;
    }
    export class $FluidFillingBehaviour extends $FluidManipulationBehaviour {
        tryDeposit(arg0: $Fluid, arg1: $BlockPos_, arg2: boolean): boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$FluidFillingBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $FluidDrainingBehaviour extends $FluidManipulationBehaviour {
        revalidate(arg0: $BlockPos_): void;
        getDrainableFluid(arg0: $BlockPos_): $FluidStack;
        rebuildContext(arg0: $BlockPos_): void;
        pullNext(arg0: $BlockPos_, arg1: boolean): boolean;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$FluidDrainingBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $FluidDrainingBehaviour$FluidBlockType extends $Enum<$FluidDrainingBehaviour$FluidBlockType> {
    }
    /**
     * Values that may be interpreted as {@link $FluidDrainingBehaviour$FluidBlockType}.
     */
    export type $FluidDrainingBehaviour$FluidBlockType_ = "none" | "source" | "flowing";
    export class $FluidManipulationBehaviour$ChunkNotLoadedException extends $Exception {
        constructor();
    }
    export class $GenericItemFilling {
        static fillItem(arg0: $Level, arg1: number, arg2: $ItemStack_, arg3: $FluidStack_): $ItemStack;
        static getRequiredAmountForItem(arg0: $Level, arg1: $ItemStack_, arg2: $FluidStack_): number;
        static canItemBeFilled(arg0: $Level, arg1: $ItemStack_): boolean;
        static isFluidHandlerValid(arg0: $ItemStack_, arg1: $IFluidHandlerItem): boolean;
        constructor();
    }
    export class $FluidFillingBehaviour$SpaceType extends $Enum<$FluidFillingBehaviour$SpaceType> {
    }
    /**
     * Values that may be interpreted as {@link $FluidFillingBehaviour$SpaceType}.
     */
    export type $FluidFillingBehaviour$SpaceType_ = "fillable" | "filled" | "blocking";
    export class $FluidManipulationBehaviour$BottomlessFluidMode extends $Enum<$FluidManipulationBehaviour$BottomlessFluidMode> implements $Predicate<$Fluid> {
        static values(): $FluidManipulationBehaviour$BottomlessFluidMode[];
        test(arg0: $Fluid): boolean;
        static valueOf(arg0: string): $FluidManipulationBehaviour$BottomlessFluidMode;
        or(arg0: $Predicate_<$Fluid>): $Predicate<$Fluid>;
        negate(): $Predicate<$Fluid>;
        and(arg0: $Predicate_<$Fluid>): $Predicate<$Fluid>;
        static ALLOW_ALL: $FluidManipulationBehaviour$BottomlessFluidMode;
        static DENY_ALL: $FluidManipulationBehaviour$BottomlessFluidMode;
        static DENY_BY_TAG: $FluidManipulationBehaviour$BottomlessFluidMode;
        static ALLOW_BY_TAG: $FluidManipulationBehaviour$BottomlessFluidMode;
    }
    /**
     * Values that may be interpreted as {@link $FluidManipulationBehaviour$BottomlessFluidMode}.
     */
    export type $FluidManipulationBehaviour$BottomlessFluidMode_ = "allow_all" | "deny_all" | "allow_by_tag" | "deny_by_tag";
}
