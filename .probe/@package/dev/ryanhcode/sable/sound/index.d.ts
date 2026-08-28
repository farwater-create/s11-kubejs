import { $SoundSource } from "@package/net/minecraft/sounds";
import { $WeighedSoundEvents, $AudioStream, $SoundBufferLibrary, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Channel } from "@package/com/mojang/blaze3d/audio";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $SoundInstance$Attenuation, $Sound, $TickableSoundInstance, $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $SubLevel } from "@package/dev/ryanhcode/sable/sublevel";

declare module "@package/dev/ryanhcode/sable/sound" {
    export class $SoundInstanceDelegated {
    }
    export interface $SoundInstanceDelegated {
        setDelegate(arg0: $MovingSoundInstanceDelegate): void;
        getDelegate(): $MovingSoundInstanceDelegate;
    }
    export class $MovingSoundInstanceDelegate implements $SoundInstance, $TickableSoundInstance {
        getLocation(): $ResourceLocation;
        resolve(arg0: $SoundManager): $WeighedSoundEvents;
        isRelative(): boolean;
        unload(arg0: $Channel): void;
        getSource(): $SoundSource;
        getX(): number;
        getAttenuation(): $SoundInstance$Attenuation;
        canPlaySound(): boolean;
        canStartSilent(): boolean;
        getStream(arg0: $SoundBufferLibrary, arg1: $Sound, arg2: boolean): $CompletableFuture<any>;
        isStopped(): boolean;
        getY(): number;
        getDelay(): number;
        tick(): void;
        getSound(): $Sound;
        getVolume(): number;
        getPitch(): number;
        isLooping(): boolean;
        tickWithChannel(arg0: $Channel): void;
        getZ(): number;
        getAudioStream(arg0: $SoundBufferLibrary, arg1: $ResourceLocation_, arg2: boolean): $CompletableFuture<$AudioStream>;
        instance: $SoundInstance;
        constructor(arg0: $SoundInstance, arg1: $SubLevel);
        get location(): $ResourceLocation;
        get relative(): boolean;
        get source(): $SoundSource;
        get x(): number;
        get attenuation(): $SoundInstance$Attenuation;
        get stopped(): boolean;
        get y(): number;
        get delay(): number;
        get sound(): $Sound;
        get volume(): number;
        get pitch(): number;
        get looping(): boolean;
        get z(): number;
    }
}
