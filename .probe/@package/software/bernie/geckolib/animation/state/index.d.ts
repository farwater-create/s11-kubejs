import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getOffsetX(): number;
        getOffsetY(): number;
        getRotY(): number;
        getRotX(): number;
        getScaleX(): number;
        getScaleY(): number;
        getBone(): $GeoBone;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        startPosAnim(): void;
        stopScaleAnim(arg0: number): void;
        stopPosAnim(arg0: number): void;
        stopRotAnim(arg0: number): void;
        startScaleAnim(): void;
        startRotAnim(): void;
        getScaleZ(): number;
        getRotZ(): number;
        isPosAnimInProgress(): boolean;
        isScaleAnimInProgress(): boolean;
        getLastResetRotationTick(): number;
        getLastResetPositionTick(): number;
        getLastResetScaleTick(): number;
        isRotAnimInProgress(): boolean;
        getOffsetZ(): number;
        constructor(arg0: $GeoBone);
        get offsetX(): number;
        get offsetY(): number;
        get rotY(): number;
        get rotX(): number;
        get scaleX(): number;
        get scaleY(): number;
        get bone(): $GeoBone;
        get scaleZ(): number;
        get rotZ(): number;
        get posAnimInProgress(): boolean;
        get scaleAnimInProgress(): boolean;
        get lastResetRotationTick(): number;
        get lastResetPositionTick(): number;
        get lastResetScaleTick(): number;
        get rotAnimInProgress(): boolean;
        get offsetZ(): number;
    }
}
