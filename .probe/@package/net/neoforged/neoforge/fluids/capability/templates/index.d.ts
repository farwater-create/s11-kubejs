import { $IFluidHandler$FluidAction_, $IFluidHandlerItem, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $IFluidHandlerModifiable } from "@package/com/lowdragmc/lowdraglib2/misc";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SimpleFluidContent, $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $DataComponentType } from "@package/net/minecraft/core/component";

declare module "@package/net/neoforged/neoforge/fluids/capability/templates" {
    /**
     * Swaps the container item for a different one when it's emptied.
     */
    export class $FluidHandlerItemStackSimple$SwapEmpty extends $FluidHandlerItemStackSimple {
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, emptyContainer: $ItemStack_, capacity: number);
    }
    /**
     * Destroys the container item when it's emptied.
     */
    export class $FluidHandlerItemStack$Consumable extends $FluidHandlerItemStack {
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, capacity: number);
    }
    /**
     * Flexible implementation of a Fluid Storage object. NOT REQUIRED.
     */
    export class $FluidTank implements $IFluidHandler, $IFluidTank, $IFluidHandlerModifiable {
        isEmpty(): boolean;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getSpace(): number;
        getCapacity(): number;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getFluid(): $FluidStack;
        isFluidValid(stack: $FluidStack_): boolean;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        setCapacity(capacity: number): $FluidTank;
        getTankCapacity(tank: number): number;
        getTanks(): number;
        getFluidInTank(tank: number): $FluidStack;
        readFromNBT(lookupProvider: $HolderLookup$Provider, nbt: $CompoundTag_): $FluidTank;
        getFluidAmount(): number;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        setValidator(validator: $Predicate_<$FluidStack>): $FluidTank;
        writeToNBT(lookupProvider: $HolderLookup$Provider, nbt: $CompoundTag_): $CompoundTag;
        setFluid(stack: $FluidStack_): void;
        supportsDrain(arg0: number): boolean;
        supportsFill(arg0: number): boolean;
        constructor(capacity: number);
        constructor(capacity: number, validator: $Predicate_<$FluidStack>);
        get empty(): boolean;
        get space(): number;
        get tanks(): number;
        get fluidAmount(): number;
        set validator(value: $Predicate_<$FluidStack>);
    }
    /**
     * FluidHandlerItemStack is a template capability provider for ItemStacks.
     * Data is stored in a `SimpleFluidContent` component.
     * 
     * This class allows an ItemStack to contain any partial level of fluid up to its capacity, unlike `FluidHandlerItemStackSimple`
     * 
     * Additional examples are provided to enable consumable fluid containers (see `Consumable`),
     * fluid containers with different empty and full items (see `SwapEmpty`,
     */
    export class $FluidHandlerItemStack implements $IFluidHandlerItem {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getFluid(): $FluidStack;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        getContainer(): $ItemStack;
        getTankCapacity(tank: number): number;
        getTanks(): number;
        getFluidInTank(tank: number): $FluidStack;
        canDrainFluidType(fluid: $FluidStack_): boolean;
        canFillFluidType(fluid: $FluidStack_): boolean;
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, capacity: number);
        get fluid(): $FluidStack;
        get container(): $ItemStack;
        get tanks(): number;
    }
    /**
     * Swaps the container item for a different one when it's emptied.
     */
    export class $FluidHandlerItemStack$SwapEmpty extends $FluidHandlerItemStack {
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, emptyContainer: $ItemStack_, capacity: number);
    }
    export class $EmptyFluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        getTankCapacity(tank: number): number;
        getTanks(): number;
        getFluidInTank(tank: number): $FluidStack;
        static INSTANCE: $EmptyFluidHandler;
        get tanks(): number;
    }
    /**
     * FluidHandlerItemStackSimple is a template capability provider for ItemStacks.
     * Data is stored in a `SimpleFluidContent` component.
     * 
     * This implementation only allows item containers to be fully filled or emptied, similar to vanilla buckets.
     */
    export class $FluidHandlerItemStackSimple implements $IFluidHandlerItem {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        getFluid(): $FluidStack;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        getContainer(): $ItemStack;
        getTankCapacity(tank: number): number;
        getTanks(): number;
        getFluidInTank(tank: number): $FluidStack;
        canDrainFluidType(fluid: $FluidStack_): boolean;
        canFillFluidType(fluid: $FluidStack_): boolean;
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, capacity: number);
        get fluid(): $FluidStack;
        get container(): $ItemStack;
        get tanks(): number;
    }
    /**
     * Destroys the container item when it's emptied.
     */
    export class $FluidHandlerItemStackSimple$Consumable extends $FluidHandlerItemStackSimple {
        constructor(componentType: $Supplier_<$DataComponentType<$SimpleFluidContent>>, container: $ItemStack_, capacity: number);
    }
    /**
     * VoidFluidHandler is a template fluid handler that can be filled indefinitely without ever getting full.
     * It does not store fluid that gets filled into it, but "destroys" it upon receiving it.
     */
    export class $VoidFluidHandler implements $IFluidHandler {
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        isFluidValid(tank: number, stack: $FluidStack_): boolean;
        getTankCapacity(tank: number): number;
        getTanks(): number;
        getFluidInTank(tank: number): $FluidStack;
        static INSTANCE: $VoidFluidHandler;
        constructor();
        get tanks(): number;
    }
}
