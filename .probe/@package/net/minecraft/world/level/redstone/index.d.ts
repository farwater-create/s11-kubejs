import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/redstone" {
    export class $CollectingNeighborUpdater$ShapeUpdate extends $Record implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    /**
     * Values that may be interpreted as {@link $CollectingNeighborUpdater$ShapeUpdate}.
     */
    export type $CollectingNeighborUpdater$ShapeUpdate_ = { updateLimit?: number, pos?: $BlockPos_, neighborPos?: $BlockPos_, direction?: $Direction_, state?: $BlockState_, updateFlags?: number,  } | [updateLimit?: number, pos?: $BlockPos_, neighborPos?: $BlockPos_, direction?: $Direction_, state?: $BlockState_, updateFlags?: number, ];
    export class $CollectingNeighborUpdater$SimpleNeighborUpdate extends $Record implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    /**
     * Values that may be interpreted as {@link $CollectingNeighborUpdater$SimpleNeighborUpdate}.
     */
    export type $CollectingNeighborUpdater$SimpleNeighborUpdate_ = { neighborPos?: $BlockPos_, block?: $Block, pos?: $BlockPos_,  } | [neighborPos?: $BlockPos_, block?: $Block, pos?: $BlockPos_, ];
    export class $InstantNeighborUpdater implements $NeighborUpdater {
        neighborChanged(state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        neighborChanged(pos: $BlockPos_, neighborBlock: $Block, neighborPos: $BlockPos_): void;
        shapeUpdate(direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
        updateNeighborsAtExceptFromFacing(pos: $BlockPos_, block: $Block, facing: $Direction_ | null): void;
        constructor(level: $Level);
    }
    export class $Redstone {
        static SIGNAL_MIN: number;
        static SIGNAL_NONE: number;
        static SIGNAL_MAX: number;
        constructor();
    }
    export class $CollectingNeighborUpdater implements $NeighborUpdater {
        neighborChanged(pos: $BlockPos_, neighborBlock: $Block, neighborPos: $BlockPos_): void;
        neighborChanged(state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        shapeUpdate(direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
        updateNeighborsAtExceptFromFacing(pos: $BlockPos_, block: $Block, facing: $Direction_ | null): void;
        constructor(level: $Level, maxChainedNeighborUpdates: number);
    }
    export class $CollectingNeighborUpdater$NeighborUpdates {
    }
    export interface $CollectingNeighborUpdater$NeighborUpdates {
    }
    /**
     * Values that may be interpreted as {@link $CollectingNeighborUpdater$NeighborUpdates}.
     */
    export type $CollectingNeighborUpdater$NeighborUpdates_ = (() => void);
    export class $CollectingNeighborUpdater$FullNeighborUpdate extends $Record implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    /**
     * Values that may be interpreted as {@link $CollectingNeighborUpdater$FullNeighborUpdate}.
     */
    export type $CollectingNeighborUpdater$FullNeighborUpdate_ = { state?: $BlockState_, pos?: $BlockPos_, block?: $Block, neighborPos?: $BlockPos_, movedByPiston?: boolean,  } | [state?: $BlockState_, pos?: $BlockPos_, block?: $Block, neighborPos?: $BlockPos_, movedByPiston?: boolean, ];
    export class $CollectingNeighborUpdater$MultiNeighborUpdate implements $CollectingNeighborUpdater$NeighborUpdates {
    }
    export class $NeighborUpdater {
        static executeUpdate(level: $Level, state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        static executeShapeUpdate(level: $LevelAccessor, direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
        static UPDATE_ORDER: $Direction[];
    }
    export interface $NeighborUpdater {
        neighborChanged(pos: $BlockPos_, neighborBlock: $Block, neighborPos: $BlockPos_): void;
        neighborChanged(state: $BlockState_, pos: $BlockPos_, neighborBlock: $Block, neighborPos: $BlockPos_, movedByPiston: boolean): void;
        shapeUpdate(direction: $Direction_, state: $BlockState_, pos: $BlockPos_, neighborPos: $BlockPos_, flags: number, recursionLevel: number): void;
        updateNeighborsAtExceptFromFacing(pos: $BlockPos_, block: $Block, facing: $Direction_ | null): void;
    }
}
