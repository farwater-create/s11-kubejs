import { $Level } from "@package/net/minecraft/world/level";
import { $ToIntFunction } from "@package/java/util/function";
import { $TagKey } from "@package/net/minecraft/tags";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $GameEventListener, $PositionSource, $GameEvent, $GameEvent$Context_, $GameEventListener$DeliveryMode } from "@package/net/minecraft/world/level/gameevent";
import { $Record } from "@package/java/lang";
import { $UUID, $List, $UUID_ } from "@package/java/util";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/gameevent/vibrations" {
    export class $VibrationSystem$User {
    }
    export interface $VibrationSystem$User {
        calculateTravelTimeInTicks(distance: number): number;
        getListenableEvents(): $TagKey<$GameEvent>;
        canTriggerAvoidVibration(): boolean;
        getPositionSource(): $PositionSource;
        getListenerRadius(): number;
        onDataChanged(): void;
        onReceiveVibration(level: $ServerLevel, pos: $BlockPos_, gameEvent: $Holder_<$GameEvent>, entity: $Entity | null, playerEntity: $Entity | null, distance: number): void;
        isValidVibration(gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        requiresAdjacentChunksToBeTicking(): boolean;
        canReceiveVibration(level: $ServerLevel, pos: $BlockPos_, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_): boolean;
        get listenableEvents(): $TagKey<$GameEvent>;
        get positionSource(): $PositionSource;
        get listenerRadius(): number;
    }
    export class $VibrationSystem$Data {
        decrementTravelTime(): void;
        setTravelTimeInTicks(travelTimeInTicks: number): void;
        setReloadVibrationParticle(reloadVibrationParticle: boolean): void;
        getSelectionStrategy(): $VibrationSelector;
        setCurrentVibration(currentVibration: $VibrationInfo_ | null): void;
        getCurrentVibration(): $VibrationInfo;
        getTravelTimeInTicks(): number;
        shouldReloadVibrationParticle(): boolean;
        selectionStrategy: $VibrationSelector;
        static CODEC: $Codec<$VibrationSystem$Data>;
        static NBT_TAG_KEY: string;
        currentVibration: $VibrationInfo;
        constructor();
        set reloadVibrationParticle(value: boolean);
    }
    export class $VibrationSelector {
        chosenCandidate(tick: number): ($VibrationInfo) | undefined;
        addCandidate(vibrationInfo: $VibrationInfo_, tick: number): void;
        startOver(): void;
        static CODEC: $Codec<$VibrationSelector>;
        constructor(event: ($VibrationInfo_) | undefined, tick: number);
        constructor();
    }
    export class $VibrationInfo extends $Record {
        pos(): $Vec3;
        distance(): number;
        uuid(): $UUID;
        getEntity(level: $ServerLevel): ($Entity) | undefined;
        projectileOwnerUuid(): $UUID;
        entity(): $Entity;
        gameEvent(): $Holder<$GameEvent>;
        getProjectileOwner(level: $ServerLevel): ($Entity) | undefined;
        static CODEC: $Codec<$VibrationInfo>;
        constructor(arg0: $Holder_<$GameEvent>, arg1: number, arg2: $Vec3_, arg3: $UUID_ | null, arg4: $UUID_ | null, arg5: $Entity | null);
        constructor(gameEvent: $Holder_<$GameEvent>, distance: number, pos: $Vec3_, entity: $Entity | null);
        constructor(gameEvent: $Holder_<$GameEvent>, distance: number, pos: $Vec3_, uuid: $UUID_ | null, projectileOwnerUuid: $UUID_ | null);
    }
    /**
     * Values that may be interpreted as {@link $VibrationInfo}.
     */
    export type $VibrationInfo_ = { uuid?: $UUID_, pos?: $Vec3_, distance?: number, entity?: $Entity, projectileOwnerUuid?: $UUID_, gameEvent?: $Holder_<$GameEvent>,  } | [uuid?: $UUID_, pos?: $Vec3_, distance?: number, entity?: $Entity, projectileOwnerUuid?: $UUID_, gameEvent?: $Holder_<$GameEvent>, ];
    export class $VibrationSystem$Ticker {
        static tick(level: $Level, data: $VibrationSystem$Data, user: $VibrationSystem$User): void;
    }
    export interface $VibrationSystem$Ticker {
    }
    export class $VibrationSystem {
        static getRedstoneStrengthForDistance(distance: number, maxDistance: number): number;
        static getGameEventFrequency(eventKey: $ResourceKey_<$GameEvent>): number;
        static getGameEventFrequency(gameEvent: $Holder_<$GameEvent>): number;
        static getResonanceEventByFrequency(frequency: number): $ResourceKey<$GameEvent>;
        static DEFAULT_VIBRATION_FREQUENCY: number;
        static RESONANCE_EVENTS: $List<$ResourceKey<$GameEvent>>;
        /**
         * @deprecated
         */
        static VIBRATION_FREQUENCY_FOR_EVENT: $ToIntFunction<$ResourceKey<$GameEvent>>;
    }
    export interface $VibrationSystem {
        getVibrationUser(): $VibrationSystem$User;
        getVibrationData(): $VibrationSystem$Data;
        get vibrationUser(): $VibrationSystem$User;
        get vibrationData(): $VibrationSystem$Data;
    }
    export class $VibrationSystem$Listener implements $GameEventListener {
        static distanceBetweenInBlocks(pos1: $BlockPos_, pos2: $BlockPos_): number;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        forceScheduleVibration(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): void;
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        constructor(system: $VibrationSystem);
        get listenerSource(): $PositionSource;
        get listenerRadius(): number;
        get deliveryMode(): $GameEventListener$DeliveryMode;
    }
}
