import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockItem, $Item$Properties } from "@package/net/minecraft/world/item";
import { $CreateRegistrate } from "@package/com/simibubi/create/foundation/data";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IPreConstructEvent } from "@package/com/cake/azimuth/foundation/preconstruct";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $NonNullBiFunction_ } from "@package/com/tterrag/registrate/util/nullness";
import { $BlockEntityType } from "@package/net/minecraft/world/level/block/entity";
import { $BlockBuilder } from "@package/com/tterrag/registrate/builders";

declare module "@package/com/cake/azimuth/registration/event" {
    export class $RegisterVisualWrapperInterestEvent extends $Event implements $IPreConstructEvent {
        registerInterest(arg0: $Predicate_<$BlockEntityType<never>>): void;
        registerInterest(arg0: $BlockEntityType<never>): void;
        constructor();
    }
    export class $RegisterCreateBlockEditsEvent extends $Event implements $IPreConstructEvent {
        forBlockItem<T extends $Block>(arg0: $ResourceLocation_, arg1: $NonNullBiFunction_<T, $Item$Properties, $BlockItem>): void;
        forBlockItem<T extends $Block>(arg0: string, arg1: $NonNullBiFunction_<T, $Item$Properties, $BlockItem>): void;
        forBlock(arg0: $ResourceLocation_, arg1: $Consumer_<$BlockBuilder<never, $CreateRegistrate>>): void;
        forBlock(arg0: string, arg1: $Consumer_<$BlockBuilder<never, $CreateRegistrate>>): void;
        constructor();
    }
}
