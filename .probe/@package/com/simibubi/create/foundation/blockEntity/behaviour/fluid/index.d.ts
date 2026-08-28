import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Consumer_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $CombinedTankWrapper, $SmartFluidTank } from "@package/com/simibubi/create/foundation/fluid";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Runnable_ } from "@package/java/lang";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";

declare module "@package/com/simibubi/create/foundation/blockEntity/behaviour/fluid" {
    export class $SmartFluidTankBehaviour$InternalFluidHandler extends $CombinedTankWrapper {
        forceFill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        constructor(arg0: $SmartFluidTankBehaviour, arg1: $IFluidHandler[], arg2: boolean);
    }
    export class $SmartFluidTankBehaviour$TankSegment {
        isEmpty(arg0: number): boolean;
        onFluidStackChanged(): void;
        readNBT(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getRenderedFluid(): $FluidStack;
        getTotalUnits(arg0: number): number;
        getFluidLevel(): $LerpedFloat;
        constructor(arg0: $SmartFluidTankBehaviour, arg1: number);
        get renderedFluid(): $FluidStack;
        get fluidLevel(): $LerpedFloat;
    }
    export class $SmartFluidTankBehaviour extends $BlockEntityBehaviour {
        isEmpty(): boolean;
        static single(arg0: $SmartBlockEntity, arg1: number): $SmartFluidTankBehaviour;
        forEach(arg0: $Consumer_<$SmartFluidTankBehaviour$TankSegment>): void;
        getCapability(): $IFluidHandler;
        sendDataImmediately(): void;
        forbidExtraction(): $SmartFluidTankBehaviour;
        getPrimaryTank(): $SmartFluidTankBehaviour$TankSegment;
        getTanks(): $SmartFluidTankBehaviour$TankSegment[];
        forbidInsertion(): $SmartFluidTankBehaviour;
        whenFluidUpdates(arg0: $Runnable_): $SmartFluidTankBehaviour;
        allowInsertion(): $SmartFluidTankBehaviour;
        getPrimaryHandler(): $SmartFluidTank;
        allowExtraction(): $SmartFluidTankBehaviour;
        sendDataLazily(): void;
        static INPUT: $BehaviourType<$SmartFluidTankBehaviour>;
        static OUTPUT: $BehaviourType<$SmartFluidTankBehaviour>;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$SmartFluidTankBehaviour>;
        constructor(arg0: $BehaviourType<$SmartFluidTankBehaviour>, arg1: $SmartBlockEntity, arg2: number, arg3: number, arg4: boolean);
        get empty(): boolean;
        get capability(): $IFluidHandler;
        get primaryTank(): $SmartFluidTankBehaviour$TankSegment;
        get tanks(): $SmartFluidTankBehaviour$TankSegment[];
        get primaryHandler(): $SmartFluidTank;
    }
}
