import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $HangingSignTileExtension } from "@package/net/mehvahdjukaar/amendments/common/tile";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as entity from "@package/net/mehvahdjukaar/amendments/common/entity";
export * as tile from "@package/net/mehvahdjukaar/amendments/common/tile";

declare module "@package/net/mehvahdjukaar/amendments/common" {
    export class $IBellConnection {
    }
    export interface $IBellConnection {
        amendments$getConnection(): $IBellConnection$Type;
        amendments$setConnected(arg0: $IBellConnection$Type_): void;
    }
    export class $ISwingingTile {
    }
    export interface $ISwingingTile {
        amendments$getAnimation(): $SwingAnimation;
    }
    /**
     * Values that may be interpreted as {@link $ISwingingTile}.
     */
    export type $ISwingingTile_ = (() => $SwingAnimation);
    export class $IBetterJukebox {
    }
    export interface $IBetterJukebox {
        amendments$tickAnimation(): void;
        amendments$getRotation(arg0: number): number;
    }
    export class $ExtendedHangingSign {
    }
    export interface $ExtendedHangingSign extends $ISwingingTile {
        amendments$getAnimation(): $SwingAnimation;
        amendments$getExtension(): $HangingSignTileExtension;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedHangingSign}.
     */
    export type $ExtendedHangingSign_ = (() => $HangingSignTileExtension);
    export class $SwingAnimation {
        reset(): void;
        setAngle(arg0: number): void;
        hitByEntity(arg0: $Entity, arg1: $BlockState_, arg2: $BlockPos_): boolean;
        getAngle(arg0: number): number;
        tick(arg0: $Level, arg1: $BlockPos_, arg2: $BlockState_): void;
        static EMPTY: $SwingAnimation;
    }
    export class $IBellConnection$Type extends $Enum<$IBellConnection$Type> implements $StringRepresentable {
        static values(): $IBellConnection$Type[];
        static valueOf(arg0: string): $IBellConnection$Type;
        isEmpty(): boolean;
        getSerializedName(): string;
        isRope(): boolean;
        isChain(): boolean;
        getRemappedEnumConstantName(): string;
        static CHAIN: $IBellConnection$Type;
        static ROPE: $IBellConnection$Type;
        static NONE: $IBellConnection$Type;
        get empty(): boolean;
        get serializedName(): string;
        get rope(): boolean;
        get chain(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $IBellConnection$Type}.
     */
    export type $IBellConnection$Type_ = "none" | "chain" | "rope";
}
