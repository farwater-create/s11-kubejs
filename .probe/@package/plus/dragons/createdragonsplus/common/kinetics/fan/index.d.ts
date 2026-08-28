import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $FanProcessingType$AirFlowParticleAccess, $FanProcessingType } from "@package/com/simibubi/create/content/kinetics/fan/processing";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/plus/dragons/createdragonsplus/common/kinetics/fan" {
    export class $AirCurrentAccess {
    }
    export interface $AirCurrentAccess {
        getSegmentAccessAt(arg0: number): $AirCurrentSegmentAccess;
    }
    /**
     * Values that may be interpreted as {@link $AirCurrentAccess}.
     */
    export type $AirCurrentAccess_ = ((arg0: number) => $AirCurrentSegmentAccess);
    export class $AirCurrentSegmentAccess {
    }
    export interface $AirCurrentSegmentAccess {
        getType(): $FanProcessingType;
        getStartOffset(): number;
        getEndOffset(): number;
        getParticleData<T>(arg0: $DynamicParticleFanProcessingType<T>): T;
        setParticleData<T>(arg0: $DynamicParticleFanProcessingType<T>, arg1: T): void;
        get type(): $FanProcessingType;
        get startOffset(): number;
        get endOffset(): number;
    }
    export class $DynamicParticleFanProcessingType<T> {
    }
    export interface $DynamicParticleFanProcessingType<T> extends $FanProcessingType {
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource): void;
        morphAirFlow(arg0: $FanProcessingType$AirFlowParticleAccess, arg1: $RandomSource, arg2: T): void;
        getParticleDataAt(arg0: $Level, arg1: $BlockPos_): T;
        spawnProcessingParticles(arg0: $Level, arg1: $Vec3_, arg2: T): void;
        spawnProcessingParticles(arg0: $Level, arg1: $Vec3_): void;
    }
}
