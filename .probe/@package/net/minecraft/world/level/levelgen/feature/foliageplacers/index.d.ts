import { $LevelSimulatedReader } from "@package/net/minecraft/world/level";
import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RecordCodecBuilder$Mu, $RecordCodecBuilder$Instance } from "@package/com/mojang/serialization/codecs";
import { $Products$P3, $Products$P2 } from "@package/com/mojang/datafixers";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/feature/foliageplacers" {
    export class $FoliagePlacer {
        type(): $FoliagePlacerType<never>;
        /**
         * Skips certain positions based on the provided shape, such as rounding corners randomly.
         * The coordinates are passed in as absolute value, and should be within [0, `range`].
         */
        shouldSkipLocationSigned(random: $RandomSource, localX: number, localY: number, localZ: number, range: number, large: boolean): boolean;
        static foliagePlacerParts<P extends $FoliagePlacer>(instance: $RecordCodecBuilder$Instance<P>): $Products$P2<$RecordCodecBuilder$Mu<P>, $IntProvider, $IntProvider>;
        createFoliage(level: $LevelSimulatedReader, blockSetter: $FoliagePlacer$FoliageSetter, random: $RandomSource, config: $TreeConfiguration, maxFreeTreeHeight: number, attachment: $FoliagePlacer$FoliageAttachment, foliageHeight: number, foliageRadius: number): void;
        createFoliage(level: $LevelSimulatedReader, blockSetter: $FoliagePlacer$FoliageSetter, random: $RandomSource, config: $TreeConfiguration, maxFreeTreeHeight: number, attachment: $FoliagePlacer$FoliageAttachment, foliageHeight: number, foliageRadius: number, offset: number): void;
        static tryPlaceLeaf(level: $LevelSimulatedReader, foliageSetter: $FoliagePlacer$FoliageSetter, random: $RandomSource, treeConfiguration: $TreeConfiguration, pos: $BlockPos_): boolean;
        foliageHeight(random: $RandomSource, height: number, config: $TreeConfiguration): number;
        foliageRadius(random: $RandomSource, radius: number): number;
        placeLeavesRow(level: $LevelSimulatedReader, foliageSetter: $FoliagePlacer$FoliageSetter, random: $RandomSource, treeConfiguration: $TreeConfiguration, pos: $BlockPos_, range: number, localY: number, large: boolean): void;
        /**
         * Skips certain positions based on the provided shape, such as rounding corners randomly.
         * The coordinates are passed in as absolute value, and should be within [0, `range`].
         */
        shouldSkipLocation(random: $RandomSource, localX: number, localY: number, localZ: number, range: number, large: boolean): boolean;
        placeLeavesRowWithHangingLeavesBelow(level: $LevelSimulatedReader, foliageSetter: $FoliagePlacer$FoliageSetter, random: $RandomSource, treeConfiguration: $TreeConfiguration, pos: $BlockPos_, range: number, localY: number, large: boolean, hangingLeavesChance: number, hangingLeavesExtensionChance: number): void;
        static CODEC: $Codec<$FoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(radius: $IntProvider_, offset: $IntProvider_);
    }
    export class $FoliagePlacer$FoliageAttachment {
        pos(): $BlockPos;
        doubleTrunk(): boolean;
        radiusOffset(): number;
        constructor(pos: $BlockPos_, radiusOffset: number, doubleTrunk: boolean);
    }
    export class $FancyFoliagePlacer extends $BlobFoliagePlacer {
        static CODEC: $MapCodec<$FancyFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        height: number;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $RandomSpreadFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$RandomSpreadFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(radius: $IntProvider_, offset: $IntProvider_, foliageHeight: $IntProvider_, leafPlacementAttempts: number);
    }
    export class $PineFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$PineFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(radius: $IntProvider_, offset: $IntProvider_, height: $IntProvider_);
    }
    export class $FoliagePlacerType<P extends $FoliagePlacer> {
        codec(): $MapCodec<P>;
        static MEGA_PINE_FOLIAGE_PLACER: $FoliagePlacerType<$MegaPineFoliagePlacer>;
        static PINE_FOLIAGE_PLACER: $FoliagePlacerType<$PineFoliagePlacer>;
        static RANDOM_SPREAD_FOLIAGE_PLACER: $FoliagePlacerType<$RandomSpreadFoliagePlacer>;
        static MEGA_JUNGLE_FOLIAGE_PLACER: $FoliagePlacerType<$MegaJungleFoliagePlacer>;
        static SPRUCE_FOLIAGE_PLACER: $FoliagePlacerType<$SpruceFoliagePlacer>;
        static BUSH_FOLIAGE_PLACER: $FoliagePlacerType<$BushFoliagePlacer>;
        static ACACIA_FOLIAGE_PLACER: $FoliagePlacerType<$AcaciaFoliagePlacer>;
        static BLOB_FOLIAGE_PLACER: $FoliagePlacerType<$BlobFoliagePlacer>;
        static DARK_OAK_FOLIAGE_PLACER: $FoliagePlacerType<$DarkOakFoliagePlacer>;
        static CHERRY_FOLIAGE_PLACER: $FoliagePlacerType<$CherryFoliagePlacer>;
        static FANCY_FOLIAGE_PLACER: $FoliagePlacerType<$FancyFoliagePlacer>;
        constructor(codec: $MapCodec<P>);
    }
    export class $MegaPineFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$MegaPineFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(radius: $IntProvider_, offset: $IntProvider_, crownHeight: $IntProvider_);
    }
    export class $DarkOakFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$DarkOakFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $BushFoliagePlacer extends $BlobFoliagePlacer {
        static CODEC: $MapCodec<$BushFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        height: number;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_, arg2: number);
    }
    export class $BlobFoliagePlacer extends $FoliagePlacer {
        static blobParts<P extends $BlobFoliagePlacer>(instance: $RecordCodecBuilder$Instance<P>): $Products$P3<$RecordCodecBuilder$Mu<P>, $IntProvider, $IntProvider, number>;
        static CODEC: $MapCodec<$BlobFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        height: number;
        constructor(radius: $IntProvider_, offset: $IntProvider_, height: number);
    }
    export class $SpruceFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$SpruceFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(radius: $IntProvider_, offset: $IntProvider_, trunkHeight: $IntProvider_);
    }
    export class $CherryFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$CherryFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(radius: $IntProvider_, offset: $IntProvider_, height: $IntProvider_, wideBottomLayerHoleChance: number, cornerHoleChance: number, hangingLeavesChance: number, hangingLeavesExtensionChance: number);
    }
    export class $MegaJungleFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$MegaJungleFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        height: number;
        constructor(radius: $IntProvider_, offset: $IntProvider_, height: number);
    }
    export class $AcaciaFoliagePlacer extends $FoliagePlacer {
        static CODEC: $MapCodec<$AcaciaFoliagePlacer>;
        offset: $IntProvider;
        radius: $IntProvider;
        constructor(arg0: $IntProvider_, arg1: $IntProvider_);
    }
    export class $FoliagePlacer$FoliageSetter {
    }
    export interface $FoliagePlacer$FoliageSetter {
        set(pos: $BlockPos_, state: $BlockState_): void;
        isSet(pos: $BlockPos_): boolean;
    }
}
