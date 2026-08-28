import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Enum, $Record } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/level/dimension/end" {
    export class $DragonRespawnAnimation extends $Enum<$DragonRespawnAnimation> {
        static values(): $DragonRespawnAnimation[];
        static valueOf(arg0: string): $DragonRespawnAnimation;
        tick(level: $ServerLevel, manager: $EndDragonFight, crystals: $List_<$EndCrystal>, ticks: number, pos: $BlockPos_): void;
        static SUMMONING_PILLARS: $DragonRespawnAnimation;
        static START: $DragonRespawnAnimation;
        static END: $DragonRespawnAnimation;
        static PREPARING_TO_SUMMON_PILLARS: $DragonRespawnAnimation;
        static SUMMONING_DRAGON: $DragonRespawnAnimation;
    }
    /**
     * Values that may be interpreted as {@link $DragonRespawnAnimation}.
     */
    export type $DragonRespawnAnimation_ = "start" | "preparing_to_summon_pillars" | "summoning_pillars" | "summoning_dragon" | "end";
    export class $EndDragonFight {
        tick(): void;
        hasPreviouslyKilledDragon(): boolean;
        setDragonKilled(dragon: $EnderDragon): void;
        getCrystalsAlive(): number;
        getDragonUUID(): $UUID;
        updateDragon(dragon: $EnderDragon): void;
        onCrystalDestroyed(crystal: $EndCrystal, dmgSrc: $DamageSource_): void;
        tryRespawn(): void;
        removePlayer(arg0: $ServerPlayer): void;
        saveData(): $EndDragonFight$Data;
        addPlayer(arg0: $ServerPlayer): void;
        handler$bei000$paraglider$awardVessel(arg0: $EnderDragon, arg1: $CallbackInfo): void;
        setRespawnStage(state: $DragonRespawnAnimation_): void;
        resetSpikeCrystals(): void;
        /**
         * @deprecated
         */
        removeAllGateways(): void;
        /**
         * @deprecated
         */
        skipArenaLoadedCheck(): void;
        static TIME_BETWEEN_PLAYER_SCANS: number;
        static ARENA_TICKET_LEVEL: number;
        static DRAGON_SPAWN_Y: number;
        constructor(level: $ServerLevel, seed: number, arg2: $EndDragonFight$Data_);
        constructor(level: $ServerLevel, seed: number, arg2: $EndDragonFight$Data_, data: $BlockPos_);
        set dragonKilled(value: $EnderDragon);
        get crystalsAlive(): number;
        get dragonUUID(): $UUID;
        set respawnStage(value: $DragonRespawnAnimation_);
    }
    export class $EndDragonFight$Data extends $Record {
        dragonUUID(): ($UUID) | undefined;
        gateways(): ($List<number>) | undefined;
        isRespawning(): boolean;
        needsStateScanning(): boolean;
        exitPortalLocation(): ($BlockPos) | undefined;
        dragonKilled(): boolean;
        previouslyKilled(): boolean;
        static CODEC: $Codec<$EndDragonFight$Data>;
        static DEFAULT: $EndDragonFight$Data;
        constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: ($UUID_) | undefined, exitPortalLocation: ($BlockPos_) | undefined, gateways: ($List_<number>) | undefined);
        get respawning(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EndDragonFight$Data}.
     */
    export type $EndDragonFight$Data_ = { dragonKilled?: boolean, dragonUUID?: ($UUID_) | undefined, gateways?: ($List_<number>) | undefined, exitPortalLocation?: ($BlockPos_) | undefined, previouslyKilled?: boolean, isRespawning?: boolean, needsStateScanning?: boolean,  } | [dragonKilled?: boolean, dragonUUID?: ($UUID_) | undefined, gateways?: ($List_<number>) | undefined, exitPortalLocation?: ($BlockPos_) | undefined, previouslyKilled?: boolean, isRespawning?: boolean, needsStateScanning?: boolean, ];
}
