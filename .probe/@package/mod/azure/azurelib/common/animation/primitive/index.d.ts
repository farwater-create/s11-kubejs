import { $AzAnimationController } from "@package/mod/azure/azurelib/common/animation/controller";
import { $JsonElement_ } from "@package/com/google/gson";
import { $AzBoneAnimation, $AzBoneAnimation_ } from "@package/mod/azure/azurelib/common/animation/controller/keyframe";
import { $ParticleKeyframeData, $CustomInstructionKeyframeData, $SoundKeyframeData } from "@package/mod/azure/azurelib/core/keyframe/event/data";
import { $AzPlayBehavior } from "@package/mod/azure/azurelib/common/animation/play_behavior";
import { $Map } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $TriFunction_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/mod/azure/azurelib/common/animation/primitive" {
    export class $AzBakedAnimation extends $Record {
        name(): string;
        length(): number;
        loopType(): $AzLoopType;
        keyframes(): $AzKeyframes;
        boneAnimations(): $AzBoneAnimation[];
        constructor(name: string, length: number, loopType: $AzLoopType, boneAnimations: $AzBoneAnimation_[], keyframes: $AzKeyframes_);
    }
    /**
     * Values that may be interpreted as {@link $AzBakedAnimation}.
     */
    export type $AzBakedAnimation_ = { length?: number, name?: string, boneAnimations?: $AzBoneAnimation_[], keyframes?: $AzKeyframes_, loopType?: $AzLoopType,  } | [length?: number, name?: string, boneAnimations?: $AzBoneAnimation_[], keyframes?: $AzKeyframes_, loopType?: $AzLoopType, ];
    export class $AzQueuedAnimation extends $Record {
        animation(): $AzBakedAnimation;
        playBehavior(): $AzPlayBehavior;
        constructor(animation: $AzBakedAnimation_, playBehavior: $AzPlayBehavior);
    }
    /**
     * Values that may be interpreted as {@link $AzQueuedAnimation}.
     */
    export type $AzQueuedAnimation_ = { animation?: $AzBakedAnimation_, playBehavior?: $AzPlayBehavior,  } | [animation?: $AzBakedAnimation_, playBehavior?: $AzPlayBehavior, ];
    export class $AzKeyframes extends $Record {
        sounds(): $SoundKeyframeData[];
        particles(): $ParticleKeyframeData[];
        customInstructions(): $CustomInstructionKeyframeData[];
        constructor(sounds: $SoundKeyframeData[], particles: $ParticleKeyframeData[], customInstructions: $CustomInstructionKeyframeData[]);
    }
    /**
     * Values that may be interpreted as {@link $AzKeyframes}.
     */
    export type $AzKeyframes_ = { sounds?: $SoundKeyframeData[], customInstructions?: $CustomInstructionKeyframeData[], particles?: $ParticleKeyframeData[],  } | [sounds?: $SoundKeyframeData[], customInstructions?: $CustomInstructionKeyframeData[], particles?: $ParticleKeyframeData[], ];
    export class $AzLoopType {
        static register(arg0: string, arg1: $AzLoopType): $AzLoopType;
        static register(arg0: string, arg1: $TriFunction_<$Object, $AzAnimationController<never>, $AzBakedAnimation, boolean>): $AzLoopType;
        static fromJson(arg0: $JsonElement_): $AzLoopType;
        static fromString(arg0: string): $AzLoopType;
        static LOOP: $AzLoopType;
        static HOLD_ON_LAST_FRAME: $AzLoopType;
        static TRUE: $AzLoopType;
        static FALSE: $AzLoopType;
        static PLAY_ONCE: $AzLoopType;
        static LOOP_TYPES: $Map<string, $AzLoopType>;
    }
    export interface $AzLoopType {
        name(): string;
        shouldPlayAgain(arg0: $Object, arg1: $AzAnimationController<never>, arg2: $AzBakedAnimation_): boolean;
    }
}
