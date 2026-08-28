import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $JsonDeserializationContext_, $JsonDeserializer, $JsonElement_ } from "@package/com/google/gson";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $BiomeManager } from "@package/net/minecraft/world/level/biome";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SoundInstanceDelegated, $MovingSoundInstanceDelegate } from "@package/dev/ryanhcode/sable/sound";
import { $List, $List_ } from "@package/java/util";
import { $FabricSoundInstance } from "@package/net/fabricmc/fabric/api/client/sound/v1";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Bee } from "@package/net/minecraft/world/entity/animal";
import { $SoundEvent, $SoundSource, $SoundSource_ } from "@package/net/minecraft/sounds";
import { $Holder_, $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundBufferLibrary, $SoundEngine, $Weighted, $WeighedSoundEvents, $AudioStream, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $SampledFloat_, $SampledFloat } from "@package/net/minecraft/util/valueproviders";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $Type } from "@package/java/lang/reflect";
import { $Guardian } from "@package/net/minecraft/world/entity/monster";
import { $Enum } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";

declare module "@package/net/minecraft/client/resources/sounds" {
    export class $TickableSoundInstance {
    }
    export interface $TickableSoundInstance extends $SoundInstance {
        isStopped(): boolean;
        tick(): void;
        get stopped(): boolean;
    }
    export class $SoundEventRegistrationSerializer implements $JsonDeserializer<$SoundEventRegistration> {
        deserialize(arg0: $JsonElement_, arg1: $Type, arg2: $JsonDeserializationContext_): $SoundEventRegistration;
        constructor();
    }
    export class $Sound implements $Weighted<$Sound> {
        getLocation(): $ResourceLocation;
        getType(): $Sound$Type;
        getPath(): $ResourceLocation;
        /**
         * @return The weight of the element
         */
        getWeight(): number;
        /**
         * Retrieves the sound associated with the element.
         * The sound is obtained using the provided random source.
         * 
         * @return The sound associated with the element
         */
        getSound(randomSource: $RandomSource): $Sound;
        getVolume(): $SampledFloat;
        getPitch(): $SampledFloat;
        /**
         * Preloads the sound if required by the sound engine.
         * This method is called to preload the sound associated with the element into the sound engine, ensuring it is ready for playback.
         */
        preloadIfRequired(engine: $SoundEngine): void;
        shouldStream(): boolean;
        shouldPreload(): boolean;
        /**
         * @return The weight of the element
         */
        getAttenuationDistance(): number;
        static SOUND_LISTER: $FileToIdConverter;
        constructor(location: $ResourceLocation_, volume: $SampledFloat_, pitch: $SampledFloat_, weight: number, type: $Sound$Type_, stream: boolean, preload: boolean, attenuationDistance: number);
        get location(): $ResourceLocation;
        get type(): $Sound$Type;
        get path(): $ResourceLocation;
        get weight(): number;
        get volume(): $SampledFloat;
        get pitch(): $SampledFloat;
        get attenuationDistance(): number;
    }
    export class $AbstractSoundInstance implements $SoundInstance, $SoundInstanceDelegated {
        setDelegate(arg0: $MovingSoundInstanceDelegate): void;
        getLocation(): $ResourceLocation;
        resolve(handler: $SoundManager): $WeighedSoundEvents;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isRelative(): boolean;
        getSource(): $SoundSource;
        getX(): number;
        getDelegate(): $MovingSoundInstanceDelegate;
        getAttenuation(): $SoundInstance$Attenuation;
        getY(): number;
        getDelay(): number;
        getSound(): $Sound;
        getVolume(): number;
        getPitch(): number;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isLooping(): boolean;
        getZ(): number;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canPlaySound(): boolean;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canStartSilent(): boolean;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        getAudioStream(arg0: $SoundBufferLibrary, arg1: $ResourceLocation_, arg2: boolean): $CompletableFuture<$AudioStream>;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(soundEvent: $SoundEvent, source: $SoundSource_, random: $RandomSource);
        constructor(location: $ResourceLocation_, source: $SoundSource_, random: $RandomSource);
    }
    export class $EntityBoundSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(soundEvent: $SoundEvent, source: $SoundSource_, volume: number, pitch: number, entity: $Entity, seed: number);
    }
    export class $BiomeAmbientSoundsHandler implements $AmbientSoundHandler {
        tick(): void;
        getMoodiness(): number;
        constructor(player: $LocalPlayer, soundManager: $SoundManager, biomeManager: $BiomeManager);
        get moodiness(): number;
    }
    export class $SimpleSoundInstance extends $AbstractSoundInstance {
        static forJukeboxSong(sound: $SoundEvent, pos: $Vec3_): $SimpleSoundInstance;
        static forUI(soundHolder: $Holder_<$SoundEvent>, pitch: number): $SimpleSoundInstance;
        static forUI(sound: $SoundEvent, pitch: number): $SimpleSoundInstance;
        static forUI(sound: $SoundEvent, volume: number, pitch: number): $SimpleSoundInstance;
        static forLocalAmbience(sound: $SoundEvent, volume: number, pitch: number): $SimpleSoundInstance;
        static forMusic(sound: $SoundEvent): $SimpleSoundInstance;
        static forAmbientAddition(sound: $SoundEvent): $SimpleSoundInstance;
        static forAmbientMood(soundEvent: $SoundEvent, random: $RandomSource, x: number, arg3: number, y: number): $SimpleSoundInstance;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(soundEvent: $SoundEvent, source: $SoundSource_, volume: number, pitch: number, random: $RandomSource, x: number, arg6: number, y: number);
        constructor(location: $ResourceLocation_, source: $SoundSource_, volume: number, pitch: number, random: $RandomSource, looping: boolean, delay: number, attenuation: $SoundInstance$Attenuation_, x: number, arg9: number, y: number, arg11: boolean);
        constructor(soundEvent: $SoundEvent, source: $SoundSource_, volume: number, pitch: number, random: $RandomSource, entity: $BlockPos_);
    }
    export class $UnderwaterAmbientSoundInstances {
        constructor();
    }
    export class $BeeSoundInstance extends $AbstractTickableSoundInstance {
        getAlternativeSoundInstance(): $AbstractTickableSoundInstance;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        shouldSwitchSounds(): boolean;
        bee: $Bee;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(bee: $Bee, soundEvent: $SoundEvent, source: $SoundSource_);
        get alternativeSoundInstance(): $AbstractTickableSoundInstance;
    }
    export class $Sound$Type extends $Enum<$Sound$Type> {
        static values(): $Sound$Type[];
        static valueOf(name: string): $Sound$Type;
        static getByName(name: string): $Sound$Type;
        static SOUND_EVENT: $Sound$Type;
        static FILE: $Sound$Type;
    }
    /**
     * Values that may be interpreted as {@link $Sound$Type}.
     */
    export type $Sound$Type_ = "file" | "sound_event";
    export class $MinecartSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(minecart: $AbstractMinecart);
    }
    export class $SoundEventRegistration {
        getSubtitle(): string;
        isReplace(): boolean;
        getSounds(): $List<$Sound>;
        constructor(sounds: $List_<$Sound>, replace: boolean, subtitle: string | null);
        get subtitle(): string;
        get replace(): boolean;
        get sounds(): $List<$Sound>;
    }
    export class $UnderwaterAmbientSoundInstances$UnderwaterAmbientSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        static FADE_DURATION: number;
        relative: boolean;
        constructor(player: $LocalPlayer);
    }
    export class $BubbleColumnAmbientSoundHandler implements $AmbientSoundHandler {
        tick(): void;
        constructor(player: $LocalPlayer);
    }
    export class $AmbientSoundHandler {
    }
    export interface $AmbientSoundHandler {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $AmbientSoundHandler}.
     */
    export type $AmbientSoundHandler_ = (() => void);
    export class $UnderwaterAmbientSoundHandler implements $AmbientSoundHandler {
        tick(): void;
        static CHANCE_PER_TICK: number;
        static ULTRA_RARE_CHANCE_PER_TICK: number;
        static RARE_CHANCE_PER_TICK: number;
        constructor(player: $LocalPlayer, soundManager: $SoundManager);
    }
    export class $BiomeAmbientSoundsHandler$LoopSoundInstance extends $AbstractTickableSoundInstance {
        fadeIn(): void;
        fadeOut(): void;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(soundEvent: $SoundEvent);
    }
    export class $AbstractTickableSoundInstance extends $AbstractSoundInstance implements $TickableSoundInstance {
        stop(): void;
        isStopped(): boolean;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(arg0: $SoundEvent, arg1: $SoundSource_, arg2: $RandomSource);
        get stopped(): boolean;
    }
    export class $GuardianAttackSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(guardian: $Guardian);
    }
    export class $RidingMinecartSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(player: $Player, minecart: $AbstractMinecart, underwaterSound: boolean);
    }
    export class $SoundInstance {
        static createUnseededRandom(): $RandomSource;
    }
    export interface $SoundInstance extends $FabricSoundInstance {
        getLocation(): $ResourceLocation;
        resolve(manager: $SoundManager): $WeighedSoundEvents;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isRelative(): boolean;
        getSource(): $SoundSource;
        getX(): number;
        getAttenuation(): $SoundInstance$Attenuation;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canPlaySound(): boolean;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        canStartSilent(): boolean;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        getY(): number;
        getDelay(): number;
        getSound(): $Sound;
        getVolume(): number;
        getPitch(): number;
        /**
         * True if the sound is not tied to a particular position in world (e.g. BGM)
         */
        isLooping(): boolean;
        getZ(): number;
        get location(): $ResourceLocation;
        get relative(): boolean;
        get source(): $SoundSource;
        get x(): number;
        get attenuation(): $SoundInstance$Attenuation;
        get y(): number;
        get delay(): number;
        get sound(): $Sound;
        get volume(): number;
        get pitch(): number;
        get looping(): boolean;
        get z(): number;
    }
    export class $BeeFlyingSoundInstance extends $BeeSoundInstance {
        bee: $Bee;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(bee: $Bee);
    }
    export class $SoundInstance$Attenuation extends $Enum<$SoundInstance$Attenuation> {
        static values(): $SoundInstance$Attenuation[];
        static valueOf(arg0: string): $SoundInstance$Attenuation;
        static NONE: $SoundInstance$Attenuation;
        static LINEAR: $SoundInstance$Attenuation;
    }
    /**
     * Values that may be interpreted as {@link $SoundInstance$Attenuation}.
     */
    export type $SoundInstance$Attenuation_ = "none" | "linear";
    export class $ElytraOnPlayerSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        static DELAY: number;
        relative: boolean;
        constructor(player: $LocalPlayer);
    }
    export class $BeeAggressiveSoundInstance extends $BeeSoundInstance {
        bee: $Bee;
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(bee: $Bee);
    }
    export class $UnderwaterAmbientSoundInstances$SubSound extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(player: $LocalPlayer, soundEvent: $SoundEvent);
    }
    export class $SnifferSoundInstance extends $AbstractTickableSoundInstance {
        attenuation: $SoundInstance$Attenuation;
        looping: boolean;
        sound: $Sound;
        source: $SoundSource;
        volume: number;
        random: $RandomSource;
        delay: number;
        x: number;
        y: number;
        location: $ResourceLocation;
        z: number;
        pitch: number;
        relative: boolean;
        constructor(sniffer: $Sniffer);
    }
}
