import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Annotation } from "@package/java/lang/annotation";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $RegisterGameTestsEvent } from "@package/net/neoforged/neoforge/event";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $List, $Map, $List_, $Collection } from "@package/java/util";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $TestFunction, $GameTestInfo, $GameTestHelper } from "@package/net/minecraft/gametest/framework";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $Contraption } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Object2LongMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $Method } from "@package/java/lang/reflect";
import { $Runnable_, $Class } from "@package/java/lang";
import { $BrassTunnelBlockEntity$SelectionMode_ } from "@package/com/simibubi/create/content/logistics/tunnel";
import { $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as tests from "@package/com/simibubi/create/infrastructure/gametest/tests";

declare module "@package/com/simibubi/create/infrastructure/gametest" {
    export class $CreateTestFunction {
        static run(arg0: string, arg1: $Consumer_<$GameTestHelper>): $Consumer<$GameTestHelper>;
        static of(arg0: $Method): $TestFunction;
        static getTestsFrom(...arg0: $Class<never>[]): $Collection<$TestFunction>;
        simpleName: string;
        fullName: string;
        testFunction: $TestFunction;
        static NAMES_TO_FUNCTIONS: $Map<string, $CreateTestFunction>;
    }
    export class $CreateGameTests {
        static registerTests(arg0: $RegisterGameTestsEvent): void;
        static generateTests(): $Collection<$TestFunction>;
        constructor();
    }
    export class $CreateGameTestHelper extends $GameTestHelper {
        static of(arg0: $GameTestHelper): $CreateGameTestHelper;
        spawnItem(arg0: $BlockPos_, arg1: $ItemStack_): $ItemEntity;
        getTankCapacity(arg0: $BlockPos_): number;
        getBlockEntity<T extends $BlockEntity>(arg0: $BlockEntityType<T>, arg1: $BlockPos_): T;
        toggleActorsOfType(arg0: $Contraption, arg1: $ItemLike_): void;
        assertFluidPresent(arg0: $FluidStack_, arg1: $BlockPos_): void;
        assertTankEmpty(arg0: $BlockPos_): void;
        whenSecondsPassed(arg0: number, arg1: $Runnable_): void;
        assertAnyContained(arg0: $BlockPos_, ...arg1: $Item[]): void;
        itemStorageAt(arg0: $BlockPos_): $IItemHandler;
        getEntitiesBetween<T extends $Entity>(arg0: $EntityType<T>, arg1: $BlockPos_, arg2: $BlockPos_): $List<T>;
        getItemContent(arg0: $BlockPos_): $Object2LongMap<$Item>;
        getFluidInTanks(...arg0: $BlockPos_[]): number;
        getFirstEntity<T extends $Entity>(arg0: $EntityType<T>, arg1: $BlockPos_): T;
        getTankContents(arg0: $BlockPos_): $FluidStack;
        assertNixiePower(arg0: $BlockPos_, arg1: number): void;
        fluidStorageAt(arg0: $BlockPos_): $IFluidHandler;
        setTunnelMode(arg0: $BlockPos_, arg1: $BrassTunnelBlockEntity$SelectionMode_): void;
        secondsPassed(): number;
        assertTanksEmpty(...arg0: $BlockPos_[]): void;
        getTotalItems(arg0: $BlockPos_): number;
        unpowerLever(arg0: $BlockPos_): void;
        assertStressometerCapacity(arg0: $BlockPos_, arg1: number): void;
        assertContentPresent(arg0: $Object2LongMap<$Item>, arg1: $BlockPos_): void;
        assertSecondsPassed(arg0: number): void;
        assertCloseEnoughTo(arg0: number, arg1: number): void;
        assertContainerContains(arg0: $BlockPos_, arg1: $ItemLike_): void;
        assertContainerContains(arg0: $BlockPos_, arg1: $ItemStack_): void;
        assertSpeedometerSpeed(arg0: $BlockPos_, arg1: number): void;
        getBehavior<T extends $BlockEntityBehaviour>(arg0: $BlockPos_, arg1: $BehaviourType<T>): T;
        spawnItems(arg0: $BlockPos_, arg1: $Item, arg2: number): void;
        powerLever(arg0: $BlockPos_): void;
        flipBlock(arg0: $BlockPos_): void;
        assertInRange(arg0: number, arg1: number, arg2: number): void;
        assertContainersEmpty(arg0: $List_<$BlockPos_>): void;
        getControllerBlockEntity<T extends $BlockEntity>(arg0: $BlockEntityType<T>, arg1: $BlockPos_): T;
        static FIFTEEN_SECONDS: number;
        testInfo: $GameTestInfo;
        static TEN_SECONDS: number;
        static THIRTY_SECONDS: number;
        static TICKS_PER_SECOND: number;
        static TWENTY_SECONDS: number;
    }
    export class $GameTestGroup implements $Annotation {
        path(): string;
        namespace(): string;
    }
}
