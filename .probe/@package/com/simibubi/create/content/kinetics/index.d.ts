import { $RotationPropagatorAccessor } from "@package/com/hlysine/create_connected/mixin";
import { $KineticNetworkAccessor } from "@package/com/hlysine/create_connected/mixin/kineticbattery";
import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $FlywheelAccessibleKineticNetwork } from "@package/com/kipti/bnb/mixin_accessor";
import { $RotationPropagatorAccessor as $RotationPropagatorAccessor$1 } from "@package/dev/lopyluna/gnkinetics/mixins";
import { $KineticBlockEntity } from "@package/com/simibubi/create/content/kinetics/base";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Map } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as turntable from "@package/com/simibubi/create/content/kinetics/turntable";
export * as base from "@package/com/simibubi/create/content/kinetics/base";
export * as press from "@package/com/simibubi/create/content/kinetics/press";
export * as chainConveyor from "@package/com/simibubi/create/content/kinetics/chainConveyor";
export * as crafter from "@package/com/simibubi/create/content/kinetics/crafter";
export * as mechanicalArm from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
export * as deployer from "@package/com/simibubi/create/content/kinetics/deployer";
export * as transmission from "@package/com/simibubi/create/content/kinetics/transmission";
export * as waterwheel from "@package/com/simibubi/create/content/kinetics/waterwheel";
export * as simpleRelays from "@package/com/simibubi/create/content/kinetics/simpleRelays";
export * as crank from "@package/com/simibubi/create/content/kinetics/crank";
export * as belt from "@package/com/simibubi/create/content/kinetics/belt";
export * as speedController from "@package/com/simibubi/create/content/kinetics/speedController";
export * as motor from "@package/com/simibubi/create/content/kinetics/motor";
export * as gauge from "@package/com/simibubi/create/content/kinetics/gauge";
export * as flywheel from "@package/com/simibubi/create/content/kinetics/flywheel";
export * as saw from "@package/com/simibubi/create/content/kinetics/saw";
export * as mixer from "@package/com/simibubi/create/content/kinetics/mixer";
export * as crusher from "@package/com/simibubi/create/content/kinetics/crusher";
export * as fan from "@package/com/simibubi/create/content/kinetics/fan";
export * as gearbox from "@package/com/simibubi/create/content/kinetics/gearbox";
export * as millstone from "@package/com/simibubi/create/content/kinetics/millstone";
export * as steamEngine from "@package/com/simibubi/create/content/kinetics/steamEngine";
export * as chainDrive from "@package/com/simibubi/create/content/kinetics/chainDrive";
export * as drill from "@package/com/simibubi/create/content/kinetics/drill";
export * as clock from "@package/com/simibubi/create/content/kinetics/clock";
export * as gantry from "@package/com/simibubi/create/content/kinetics/gantry";

declare module "@package/com/simibubi/create/content/kinetics" {
    export class $RotationPropagator implements $RotationPropagatorAccessor, $RotationPropagatorAccessor$1 {
        static isConnected(arg0: $KineticBlockEntity, arg1: $KineticBlockEntity): boolean;
        static handleRemoved(arg0: $Level, arg1: $BlockPos_, arg2: $KineticBlockEntity): void;
        static handleAdded(arg0: $Level, arg1: $BlockPos_, arg2: $KineticBlockEntity): void;
        static callFindConnectedNeighbour$create_connected_$md$707fe4$0(arg0: $KineticBlockEntity, arg1: $BlockPos_): $KineticBlockEntity;
        static getAxisModifier$gnkinetics_$md$707fe4$1(arg0: $KineticBlockEntity, arg1: $Direction_): number;
        constructor();
    }
    export class $KineticDebugger {
        static isActive(): boolean;
        static isF3DebugModeActive(): boolean;
        static tick(): void;
        static getSelectedBE(): $KineticBlockEntity;
        static rainbowDebug: boolean;
        constructor();
        static get active(): boolean;
        static get f3DebugModeActive(): boolean;
        static get selectedBE(): $KineticBlockEntity;
    }
    export class $TorquePropagator {
        getOrCreateNetworkFor(arg0: $KineticBlockEntity): $KineticNetwork;
        onLoadWorld(arg0: $LevelAccessor): void;
        onUnloadWorld(arg0: $LevelAccessor): void;
        constructor();
    }
    export class $KineticNetwork implements $FlywheelAccessibleKineticNetwork, $KineticNetworkAccessor {
        getSize(): number;
        remove(arg0: $KineticBlockEntity): void;
        add(arg0: $KineticBlockEntity): void;
        sync(): void;
        handler$fei000$bits_n_bobs$addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        bits_n_bobs$getFlywheelStressReleaseCapacity(): number;
        bits_n_bobs$getFlywheelStressAbsoptionCapacity(): number;
        redirect$enj000$simulated$extraKineticsCapacity(arg0: $Level, arg1: $BlockPos_): $BlockEntity;
        redirect$enj000$simulated$extraKineticsStress(arg0: $Level, arg1: $BlockPos_): $BlockEntity;
        handler$fei000$bits_n_bobs$updateNetworkHead(arg0: $CallbackInfo): void;
        addSilently(arg0: $KineticBlockEntity, arg1: number, arg2: number): void;
        updateNetwork(): void;
        getActualCapacityOf(arg0: $KineticBlockEntity): number;
        calculateCapacity(): number;
        initFromTE(arg0: number, arg1: number, arg2: number): void;
        updateStressFor(arg0: $KineticBlockEntity, arg1: number): void;
        updateStress(): void;
        updateCapacityFor(arg0: $KineticBlockEntity, arg1: number): void;
        bits_n_bobs$updateFlywheelStresses(): void;
        calculateStress(): number;
        getActualStressOf(arg0: $KineticBlockEntity): number;
        updateCapacity(): void;
        handler$fei000$bits_n_bobs$add(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        handler$fei000$bits_n_bobs$remove(arg0: $KineticBlockEntity, arg1: $CallbackInfo): void;
        getUnloadedStress(): number;
        sources: $Map<$KineticBlockEntity, number>;
        members: $Map<$KineticBlockEntity, number>;
        initialized: boolean;
        id: number;
        constructor();
        get size(): number;
        get unloadedStress(): number;
    }
}
