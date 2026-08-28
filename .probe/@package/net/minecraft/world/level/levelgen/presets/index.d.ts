import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $Holder, $RegistryAccess } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Map_ } from "@package/java/util";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $WorldDimensions, $WorldDimensions_ } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/presets" {
    export class $WorldPresets {
        static bootstrap(context: $BootstrapContext<$WorldPreset>): void;
        static createNormalWorldDimensions(registry: $RegistryAccess): $WorldDimensions;
        static getNormalOverworld(registry: $RegistryAccess): $LevelStem;
        static fromSettings(worldDimensions: $WorldDimensions_): ($ResourceKey<$WorldPreset>) | undefined;
        static AMPLIFIED: $ResourceKey<$WorldPreset>;
        static FLAT: $ResourceKey<$WorldPreset>;
        static SINGLE_BIOME_SURFACE: $ResourceKey<$WorldPreset>;
        static LARGE_BIOMES: $ResourceKey<$WorldPreset>;
        static DEBUG: $ResourceKey<$WorldPreset>;
        static NORMAL: $ResourceKey<$WorldPreset>;
        constructor();
    }
    export class $WorldPresets$Bootstrap {
    }
    export class $WorldPreset {
        overworld(): ($LevelStem) | undefined;
        createWorldDimensions(): $WorldDimensions;
        static CODEC: $Codec<$Holder<$WorldPreset>>;
        static DIRECT_CODEC: $Codec<$WorldPreset>;
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
    }
}
