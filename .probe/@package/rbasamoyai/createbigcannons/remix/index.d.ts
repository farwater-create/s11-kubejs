import { $Level } from "@package/net/minecraft/world/level";
import { $AbstractContraptionEntity } from "@package/com/simibubi/create/content/contraptions";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Map, $Set } from "@package/java/util";

declare module "@package/rbasamoyai/createbigcannons/remix" {
    export class $HasFragileContraption {
        static defaultBlockBreaksAssembly(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_, arg3: $HasFragileContraption): boolean;
        static checkForIntersectingBlocks(arg0: $Level, arg1: $AbstractContraptionEntity, arg2: $HasFragileContraption): boolean;
        static defaultShouldCheck(): boolean;
    }
    export interface $HasFragileContraption {
        createbigcannons$getEncounteredBlocks(): $Map<$BlockPos, $BlockState>;
        createbigcannons$fragileDisassemble(): void;
        createbigcannons$setBrokenDisassembly(arg0: boolean): void;
        createbigcannons$isBrokenDisassembly(): boolean;
        createbigcannons$getFragileBlockPositions(): $Set<$BlockPos>;
        createbigcannons$blockBreaksDisassembly(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): boolean;
        createbigcannons$shouldCheckFragility(): boolean;
    }
    export class $CustomBlockDamageDisplay {
    }
    export interface $CustomBlockDamageDisplay {
        createbigcannons$trackCustomProgress(arg0: $BlockPos_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomBlockDamageDisplay}.
     */
    export type $CustomBlockDamageDisplay_ = ((arg0: $BlockPos, arg1: number) => void);
}
