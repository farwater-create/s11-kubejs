import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockItem, $Item, $Item$Properties } from "@package/net/minecraft/world/item";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Map } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/com/simibubi/create/content/kinetics/belt/item" {
    export class $BeltConnectorItem extends $BlockItem {
        static maxLength(): number;
        static canConnect(arg0: $Level, arg1: $BlockPos_, arg2: $BlockPos_): boolean;
        static createBelts(arg0: $Level, arg1: $BlockPos_, arg2: $BlockPos_): void;
        static validateAxis(arg0: $Level, arg1: $BlockPos_): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        /**
         * @deprecated
         */
        block: $Block;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $BeltConnectorHandler {
        static tick(): void;
        constructor();
    }
}
