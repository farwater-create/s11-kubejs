import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Holder_, $HolderSet_, $Holder, $HolderGetter, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BiomeGenerationSettings, $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StructureSet_, $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";

declare module "@package/net/minecraft/world/level/levelgen/flat" {
    export class $FlatLevelGeneratorPresets$Bootstrap {
    }
    export class $FlatLevelGeneratorSettings {
        static getDefault(biomes: $HolderGetter<$Biome>, structureSetGetter: $HolderGetter<$StructureSet_>, placedFeatureGetter: $HolderGetter<$PlacedFeature_>): $FlatLevelGeneratorSettings;
        adjustGenerationSettings(biome: $Holder_<$Biome>): $BiomeGenerationSettings;
        updateLayers(): void;
        structureOverrides(): ($HolderSet<$StructureSet>) | undefined;
        setDecoration(): void;
        /**
         * Return the list of layers on this preset.
         */
        getLayersInfo(): $List<$FlatLayerInfo>;
        setAddLakes(): void;
        static getDefaultBiome(biomes: $HolderGetter<$Biome>): $Holder<$Biome>;
        withBiomeAndLayers(layerInfos: $List_<$FlatLayerInfo>, structureSets: ($HolderSet_<$StructureSet>) | undefined, biome: $Holder_<$Biome>): $FlatLevelGeneratorSettings;
        static createLakesList(placedFEatureGetter: $HolderGetter<$PlacedFeature_>): $List<$Holder<$PlacedFeature>>;
        /**
         * Return the list of layers on this preset.
         */
        getLayers(): $List<$BlockState>;
        /**
         * Return the biome used on this preset.
         */
        getBiome(): $Holder<$Biome>;
        static CODEC: $Codec<$FlatLevelGeneratorSettings>;
        constructor(structureOverrides: ($HolderSet_<$StructureSet>) | undefined, biome: $Holder_<$Biome>, lakes: $List_<$Holder_<$PlacedFeature>>);
        get layersInfo(): $List<$FlatLayerInfo>;
        get layers(): $List<$BlockState>;
        get biome(): $Holder<$Biome>;
    }
    export class $FlatLevelGeneratorPreset extends $Record {
        displayItem(): $Holder<$Item>;
        settings(): $FlatLevelGeneratorSettings;
        static CODEC: $Codec<$Holder<$FlatLevelGeneratorPreset>>;
        static DIRECT_CODEC: $Codec<$FlatLevelGeneratorPreset>;
        constructor(arg0: $Holder_<$Item>, arg1: $FlatLevelGeneratorSettings);
    }
    /**
     * Values that may be interpreted as {@link $FlatLevelGeneratorPreset}.
     */
    export type $FlatLevelGeneratorPreset_ = { settings?: $FlatLevelGeneratorSettings, displayItem?: $Holder_<$Item>,  } | [settings?: $FlatLevelGeneratorSettings, displayItem?: $Holder_<$Item>, ];
    export class $FlatLevelGeneratorPresets {
        static bootstrap(context: $BootstrapContext<$FlatLevelGeneratorPreset_>): void;
        static OVERWORLD: $ResourceKey<$FlatLevelGeneratorPreset>;
        static WATER_WORLD: $ResourceKey<$FlatLevelGeneratorPreset>;
        static THE_VOID: $ResourceKey<$FlatLevelGeneratorPreset>;
        static CLASSIC_FLAT: $ResourceKey<$FlatLevelGeneratorPreset>;
        static BOTTOMLESS_PIT: $ResourceKey<$FlatLevelGeneratorPreset>;
        static DESERT: $ResourceKey<$FlatLevelGeneratorPreset>;
        static REDSTONE_READY: $ResourceKey<$FlatLevelGeneratorPreset>;
        static TUNNELERS_DREAM: $ResourceKey<$FlatLevelGeneratorPreset>;
        static SNOWY_KINGDOM: $ResourceKey<$FlatLevelGeneratorPreset>;
        constructor();
    }
    export class $FlatLayerInfo {
        /**
         * Return the amount of layers for this set of layers.
         */
        getHeight(): number;
        getBlockState(): $BlockState;
        static CODEC: $Codec<$FlatLayerInfo>;
        constructor(height: number, block: $Block);
        get height(): number;
        get blockState(): $BlockState;
    }
}
