import { $JigsawJunction } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $ObjectListIterator } from "@package/it/unimi/dsi/fastutil/objects";
import { $EnhancedTerrainAdaptation } from "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/adaptations";
import { $Rotation_, $Rotation } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $NoiseChunk } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/com/yungnickyoung/minecraft/yungsapi/world/structure/terrainadaptation/beardifier" {
    export class $EnhancedJigsawJunction extends $Record {
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        jigsawJunction(): $JigsawJunction;
        constructor(jigsawJunction: $JigsawJunction, pieceTerrainAdaptation: $EnhancedTerrainAdaptation);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedJigsawJunction}.
     */
    export type $EnhancedJigsawJunction_ = { jigsawJunction?: $JigsawJunction, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation,  } | [jigsawJunction?: $JigsawJunction, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, ];
    export class $EnhancedBeardifierRigid extends $Record {
        rotation(): $Rotation;
        pieceTerrainAdaptation(): $EnhancedTerrainAdaptation;
        pieceGroundLevelDelta(): number;
        pieceBoundingBox(): $BoundingBox;
        constructor(pieceBoundingBox: $BoundingBox, pieceTerrainAdaptation: $EnhancedTerrainAdaptation, pieceGroundLevelDelta: number, rotation: $Rotation_);
    }
    /**
     * Values that may be interpreted as {@link $EnhancedBeardifierRigid}.
     */
    export type $EnhancedBeardifierRigid_ = { rotation?: $Rotation_, pieceGroundLevelDelta?: number, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, pieceBoundingBox?: $BoundingBox,  } | [rotation?: $Rotation_, pieceGroundLevelDelta?: number, pieceTerrainAdaptation?: $EnhancedTerrainAdaptation, pieceBoundingBox?: $BoundingBox, ];
    export class $EnhancedBeardifierData {
    }
    export interface $EnhancedBeardifierData {
        getNoiseChunk(): $NoiseChunk;
        setNoiseChunk(arg0: $NoiseChunk): void;
        setEnhancedPieceIterator(arg0: $ObjectListIterator<$EnhancedBeardifierRigid_>): void;
        getEnhancedPieceIterator(): $ObjectListIterator<$EnhancedBeardifierRigid>;
        getEnhancedJunctionIterator(): $ObjectListIterator<$EnhancedJigsawJunction>;
        setEnhancedJunctionIterator(arg0: $ObjectListIterator<$EnhancedJigsawJunction_>): void;
    }
}
