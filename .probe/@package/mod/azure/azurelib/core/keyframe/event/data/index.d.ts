
declare module "@package/mod/azure/azurelib/core/keyframe/event/data" {
    export class $KeyFrameData {
        getStartTick(): number;
        get startTick(): number;
    }
    export class $CustomInstructionKeyframeData extends $KeyFrameData {
        getInstructions(): string;
        constructor(arg0: number, arg1: string);
        get instructions(): string;
    }
    export class $ParticleKeyframeData extends $KeyFrameData {
        script(): string;
        getLocator(): string;
        getEffect(): string;
        constructor(arg0: number, arg1: string, arg2: string, arg3: string);
        get locator(): string;
        get effect(): string;
    }
    export class $SoundKeyframeData extends $KeyFrameData {
        getSound(): string;
        constructor(arg0: number, arg1: string);
        get sound(): string;
    }
}
