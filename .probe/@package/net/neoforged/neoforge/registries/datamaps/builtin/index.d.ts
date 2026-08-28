import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $Weight } from "@package/net/minecraft/util/random";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/neoforged/neoforge/registries/datamaps/builtin" {
    export class $Waxable extends $Record {
        waxed(): $Block;
        static CODEC: $Codec<$Waxable>;
        static WAXABLE_CODEC: $Codec<$Waxable>;
        constructor(waxed: $Block);
    }
    /**
     * Values that may be interpreted as {@link $Waxable}.
     */
    export type $Waxable_ = { waxed?: $Block,  } | [waxed?: $Block, ];
    export class $Oxidizable extends $Record {
        nextOxidationStage(): $Block;
        static CODEC: $Codec<$Oxidizable>;
        static OXIDIZABLE_CODEC: $Codec<$Oxidizable>;
        constructor(nextOxidationStage: $Block);
    }
    /**
     * Values that may be interpreted as {@link $Oxidizable}.
     */
    export type $Oxidizable_ = { nextOxidationStage?: $Block,  } | [nextOxidationStage?: $Block, ];
    export class $ParrotImitation extends $Record {
        sound(): $SoundEvent;
        static CODEC: $Codec<$ParrotImitation>;
        static SOUND_CODEC: $Codec<$ParrotImitation>;
        constructor(sound: $SoundEvent);
    }
    /**
     * Values that may be interpreted as {@link $ParrotImitation}.
     */
    export type $ParrotImitation_ = { sound?: $SoundEvent,  } | [sound?: $SoundEvent, ];
    export class $VibrationFrequency extends $Record {
        frequency(): number;
        static CODEC: $Codec<$VibrationFrequency>;
        static FREQUENCY_CODEC: $Codec<$VibrationFrequency>;
        constructor(frequency: number);
    }
    /**
     * Values that may be interpreted as {@link $VibrationFrequency}.
     */
    export type $VibrationFrequency_ = { frequency?: number,  } | [frequency?: number, ];
    export class $RaidHeroGift extends $Record {
        lootTable(): $ResourceKey<$LootTable>;
        static LOOT_TABLE_CODEC: $Codec<$RaidHeroGift>;
        static CODEC: $Codec<$RaidHeroGift>;
        constructor(lootTable: $ResourceKey_<$LootTable>);
    }
    /**
     * Values that may be interpreted as {@link $RaidHeroGift}.
     */
    export type $RaidHeroGift_ = { lootTable?: $ResourceKey_<$LootTable>,  } | [lootTable?: $ResourceKey_<$LootTable>, ];
    export class $Strippable extends $Record {
        strippedBlock(): $Block;
        static CODEC: $Codec<$Strippable>;
        static STRIPPED_BLOCK_CODEC: $Codec<$Strippable>;
        constructor(strippedBlock: $Block);
    }
    /**
     * Values that may be interpreted as {@link $Strippable}.
     */
    export type $Strippable_ = { strippedBlock?: $Block,  } | [strippedBlock?: $Block, ];
    export class $Compostable extends $Record {
        canVillagerCompost(): boolean;
        chance(): number;
        static CODEC: $Codec<$Compostable>;
        static CHANCE_CODEC: $Codec<$Compostable>;
        constructor(arg0: number);
        constructor(chance: number, canVillagerCompost: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Compostable}.
     */
    export type $Compostable_ = { canVillagerCompost?: boolean, chance?: number,  } | [canVillagerCompost?: boolean, chance?: number, ];
    export class $BiomeVillagerType extends $Record {
        type(): $VillagerType;
        static TYPE_CODEC: $Codec<$BiomeVillagerType>;
        static CODEC: $Codec<$BiomeVillagerType>;
        constructor(type: $VillagerType);
    }
    /**
     * Values that may be interpreted as {@link $BiomeVillagerType}.
     */
    export type $BiomeVillagerType_ = { type?: $VillagerType,  } | [type?: $VillagerType, ];
    /**
     * Holds all data maps provided by NeoForge.
     * 
     * These data maps are usually replacements for vanilla in-code maps, and are optionally
     * synced so that mods can use them on the client side.
     */
    export class $NeoForgeDataMaps {
        static RAID_HERO_GIFTS: $DataMapType<$VillagerProfession, $RaidHeroGift>;
        static WAXABLES: $DataMapType<$Block, $Waxable>;
        static OXIDIZABLES: $DataMapType<$Block, $Oxidizable>;
        static VILLAGER_TYPES: $DataMapType<$Biome, $BiomeVillagerType>;
        static STRIPPABLES: $DataMapType<$Block, $Strippable>;
        static VIBRATION_FREQUENCIES: $DataMapType<$GameEvent, $VibrationFrequency>;
        static FURNACE_FUELS: $DataMapType<$Item, $FurnaceFuel>;
        static MONSTER_ROOM_MOBS: $DataMapType<$EntityType<never>, $MonsterRoomMob>;
        static PARROT_IMITATIONS: $DataMapType<$EntityType<never>, $ParrotImitation>;
        static COMPOSTABLES: $DataMapType<$Item, $Compostable>;
        constructor();
    }
    export class $FurnaceFuel extends $Record {
        burnTime(): number;
        static CODEC: $Codec<$FurnaceFuel>;
        static BURN_TIME_CODEC: $Codec<$FurnaceFuel>;
        constructor(burnTime: number);
    }
    /**
     * Values that may be interpreted as {@link $FurnaceFuel}.
     */
    export type $FurnaceFuel_ = { burnTime?: number,  } | [burnTime?: number, ];
    export class $MonsterRoomMob extends $Record {
        weight(): $Weight;
        static CODEC: $Codec<$MonsterRoomMob>;
        static WEIGHT_CODEC: $Codec<$MonsterRoomMob>;
        constructor(weight: $Weight);
    }
    /**
     * Values that may be interpreted as {@link $MonsterRoomMob}.
     */
    export type $MonsterRoomMob_ = { weight?: $Weight,  } | [weight?: $Weight, ];
}
