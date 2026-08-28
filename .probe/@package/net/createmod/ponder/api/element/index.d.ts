import { $Level } from "@package/net/minecraft/world/level";
import { $PonderScene } from "@package/net/createmod/ponder/foundation";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MultiBufferSource_, $RenderType } from "@package/net/minecraft/client/renderer";
import { $PonderPalette_ } from "@package/net/createmod/ponder/api";
import { $Selection } from "@package/net/createmod/ponder/api/scene";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $UUID } from "@package/java/util";
import { $Parrot } from "@package/net/minecraft/world/entity/animal";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ScreenElement_ } from "@package/net/createmod/catnip/gui/element";
import { $Object } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $PonderLevel } from "@package/net/createmod/ponder/api/level";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $Vec3_, $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Pair } from "@package/net/createmod/catnip/data";

declare module "@package/net/createmod/ponder/api/element" {
    export class $InputElementBuilder {
    }
    export interface $InputElementBuilder {
        withItem(arg0: $ItemStack_): $InputElementBuilder;
        scroll(): $InputElementBuilder;
        rightClick(): $InputElementBuilder;
        leftClick(): $InputElementBuilder;
        whileSneaking(): $InputElementBuilder;
        showing(arg0: $ScreenElement_): $InputElementBuilder;
        whileCTRL(): $InputElementBuilder;
    }
    export class $PonderSceneElement {
    }
    export interface $PonderSceneElement extends $PonderElement {
        renderLayer(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $RenderType, arg3: $GuiGraphics, arg4: number): void;
        renderFirst(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
        renderLast(arg0: $PonderLevel, arg1: $MultiBufferSource_, arg2: $GuiGraphics, arg3: number): void;
    }
    export class $MinecartElement {
    }
    export interface $MinecartElement extends $AnimatedSceneElement {
        getRotation(): $Vec3;
        getPositionOffset(): $Vec3;
        setPositionOffset(arg0: $Vec3_, arg1: boolean): void;
        setRotation(arg0: number, arg1: boolean): void;
    }
    export class $TextElementBuilder {
    }
    export interface $TextElementBuilder {
        text(arg0: string): $TextElementBuilder;
        text(arg0: string, ...arg1: $Object[]): $TextElementBuilder;
        pointAt(arg0: $Vec3_): $TextElementBuilder;
        colored(arg0: $PonderPalette_): $TextElementBuilder;
        independent(): $TextElementBuilder;
        independent(arg0: number): $TextElementBuilder;
        attachKeyFrame(): $TextElementBuilder;
        placeNearTarget(): $TextElementBuilder;
        sharedText(arg0: $ResourceLocation_): $TextElementBuilder;
        sharedText(arg0: string, ...arg1: $Object[]): $TextElementBuilder;
        sharedText(arg0: string): $TextElementBuilder;
        sharedText(arg0: $ResourceLocation_, ...arg1: $Object[]): $TextElementBuilder;
    }
    export class $MinecartElement$MinecartConstructor {
    }
    export interface $MinecartElement$MinecartConstructor {
        create(arg0: $Level, arg1: number, arg2: number, arg3: number): $AbstractMinecart;
    }
    /**
     * Values that may be interpreted as {@link $MinecartElement$MinecartConstructor}.
     */
    export type $MinecartElement$MinecartConstructor_ = ((arg0: $Level, arg1: number, arg2: number, arg3: number) => $AbstractMinecart);
    export class $ParrotElement {
    }
    export interface $ParrotElement extends $AnimatedSceneElement {
        getRotation(): $Vec3;
        getPositionOffset(): $Vec3;
        setPose(arg0: $ParrotPose): void;
        setPositionOffset(arg0: $Vec3_, arg1: boolean): void;
        setRotation(arg0: $Vec3_, arg1: boolean): void;
        set pose(value: $ParrotPose);
    }
    export class $PonderElement {
    }
    export interface $PonderElement {
        reset(arg0: $PonderScene): void;
        tick(arg0: $PonderScene): void;
        setVisible(arg0: boolean): void;
        isVisible(): boolean;
        whileSkipping(arg0: $PonderScene): void;
    }
    export class $ElementLink<T extends $PonderElement> {
    }
    export interface $ElementLink<T extends $PonderElement> {
        cast(arg0: $PonderElement): T;
        getId(): $UUID;
        get id(): $UUID;
    }
    export class $TrackedElement<T> {
    }
    export interface $TrackedElement<T> extends $PonderSceneElement {
        ifPresent(arg0: $Consumer_<T>): void;
        isStillValid(arg0: T): boolean;
    }
    export class $ParrotPose {
        create(arg0: $PonderLevel): $Parrot;
        tick(arg0: $PonderScene, arg1: $Parrot, arg2: $Vec3_): void;
        constructor();
    }
    export class $EntityElement {
    }
    export interface $EntityElement extends $TrackedElement<$Entity> {
    }
    export class $WorldSectionElement {
    }
    export interface $WorldSectionElement extends $AnimatedSceneElement {
        isEmpty(): boolean;
        add(arg0: $Selection): void;
        set(arg0: $Selection): void;
        erase(arg0: $Selection): void;
        setEmpty(): void;
        setAnimatedOffset(arg0: $Vec3_, arg1: boolean): void;
        rayTrace(arg0: $PonderLevel, arg1: $Vec3_, arg2: $Vec3_): $Pair<$Vec3, $BlockHitResult>;
        getAnimatedOffset(): $Vec3;
        resetSelectedBlock(): void;
        stabilizeRotation(arg0: $Vec3_): void;
        selectBlock(arg0: $BlockPos_): void;
        queueRedraw(): void;
        mergeOnto(arg0: $WorldSectionElement): void;
        setCenterOfRotation(arg0: $Vec3_): void;
        setAnimatedRotation(arg0: $Vec3_, arg1: boolean): void;
        getAnimatedRotation(): $Vec3;
        set centerOfRotation(value: $Vec3_);
    }
    export class $AnimatedSceneElement {
    }
    export interface $AnimatedSceneElement extends $PonderSceneElement {
        forceApplyFade(arg0: number): void;
        setFadeVec(arg0: $Vec3_): void;
        setFade(arg0: number): void;
        set fadeVec(value: $Vec3_);
        set fade(value: number);
    }
}
