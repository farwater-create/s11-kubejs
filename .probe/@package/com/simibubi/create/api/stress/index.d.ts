import { $DoubleSupplier } from "@package/java/util/function";
import { $SimpleRegistry } from "@package/com/simibubi/create/api/registry";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $NonNullConsumer } from "@package/com/tterrag/registrate/util/nullness";

declare module "@package/com/simibubi/create/api/stress" {
    export class $BlockStressValues {
        static getCapacity(arg0: $Block): number;
        static getImpact(arg0: $Block): number;
        static setGeneratorSpeed(arg0: number): $NonNullConsumer<$Block>;
        static setGeneratorSpeed(arg0: number, arg1: boolean): $NonNullConsumer<$Block>;
        static CAPACITIES: $SimpleRegistry<$Block, $DoubleSupplier>;
        static IMPACTS: $SimpleRegistry<$Block, $DoubleSupplier>;
        static RPM: $SimpleRegistry<$Block, $BlockStressValues$GeneratedRpm>;
    }
    export class $BlockStressValues$GeneratedRpm extends $Record {
        value(): number;
        mayGenerateLess(): boolean;
        constructor(value: number, mayGenerateLess: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BlockStressValues$GeneratedRpm}.
     */
    export type $BlockStressValues$GeneratedRpm_ = { mayGenerateLess?: boolean, value?: number,  } | [mayGenerateLess?: boolean, value?: number, ];
}
