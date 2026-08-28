import { $Translate, $PoseTransformStack } from "@package/dev/engine_room/flywheel/lib/transform";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $AABBOutline } from "@package/net/createmod/catnip/outliner";
import { $Executor } from "@package/java/util/concurrent";
import { $Minecraft, $NarratorStatus, $DeltaTracker } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $SuperRenderTypeBuffer } from "@package/net/createmod/catnip/render";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $Direction$Axis_ } from "@package/net/minecraft/core";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $ToolType_, $ToolType } from "@package/com/simibubi/create/content/schematics/client/tools";
import { $File_ } from "@package/java/io";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $StructurePlaceSettings } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $SchematicLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $Font, $GuiGraphics, $LayeredDraw$Layer } from "@package/net/minecraft/client/gui";
import { $Vec3_, $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";
export * as tools from "@package/com/simibubi/create/content/schematics/client/tools";

declare module "@package/com/simibubi/create/content/schematics/client" {
    export class $SchematicRenderer$ThreadLocalObjects {
    }
    export class $SchematicPromptScreen extends $AbstractSimiScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $SchematicRenderer {
        update(): void;
        render(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer): void;
        constructor(arg0: $SchematicLevel);
    }
    export class $SchematicTransformation {
        init(arg0: $BlockPos_, arg1: $StructurePlaceSettings, arg2: $AABB_): void;
        flip(arg0: $Direction$Axis_): void;
        move(arg0: number, arg1: number, arg2: number): void;
        wrapOperation$hoj000$sable$transformFromSublevel(arg0: $PoseTransformStack, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $Vec3_, arg4: number, arg5: $PoseStack): $Translate<any>;
        startAt(arg0: $BlockPos_): void;
        getAnchor(): $BlockPos;
        tick(): void;
        moveTo(arg0: $BlockPos_): void;
        moveTo(arg0: number, arg1: number, arg2: number): void;
        toSettings(): $StructurePlaceSettings;
        isFlipped(): boolean;
        applyTransformations(arg0: $PoseStack, arg1: $Vec3_): void;
        getScaleLR(): $LerpedFloat;
        getScaleFB(): $LerpedFloat;
        rotate90(arg0: boolean): void;
        toLocalSpace(arg0: $Vec3_): $Vec3;
        getCurrentRotation(): number;
        getMirrorModifier(arg0: $Direction$Axis_): number;
        getRotationTarget(): number;
        getRotationOffset(arg0: boolean): $Vec3;
        wrapOperation$hoj000$sable$transformFromSublevel$mixinextras$bridge$22(arg0: $PoseTransformStack, arg1: $Vec3_, arg2: $Operation_<any>, arg3: $LocalRef<any>, arg4: $LocalFloatRef, arg5: $LocalRef<any>): $Translate<any>;
        fromAnchor(arg0: $BlockPos_): $BlockPos;
        constructor();
        get anchor(): $BlockPos;
        get flipped(): boolean;
        get scaleLR(): $LerpedFloat;
        get scaleFB(): $LerpedFloat;
        get currentRotation(): number;
        get rotationTarget(): number;
    }
    export class $SchematicAndQuillHandler {
        mouseScrolled(arg0: number): boolean;
        discard(): void;
        tick(): void;
        saveSchematic(arg0: string, arg1: boolean): void;
        wrapOperation$hlb000$sable$preventMovingSelectedOutOfPlot(arg0: $BlockHitResult, arg1: $Operation_<any>): $BlockPos;
        onMouseInput(arg0: number, arg1: boolean): boolean;
        secondPos: $BlockPos;
        firstPos: $BlockPos;
        constructor();
    }
    export class $ClientSchematicLoader {
        refresh(): void;
        static validateSizeLimitation(arg0: number): boolean;
        getAvailableSchematics(): $List<$Component>;
        tick(): void;
        static isGZIPEncoded(arg0: $File_): boolean;
        startNewUpload(arg0: string): void;
        static PACKET_DELAY: number;
        constructor();
        get availableSchematics(): $List<$Component>;
    }
    export class $ToolSelectionScreen extends $Screen {
        update(): void;
        cycle(arg0: number): void;
        setSelectedElement(arg0: $ToolType_): void;
        renderPassive(arg0: $GuiGraphics, arg1: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        scrollToCycle: string;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        holdToFocus: string;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        focused: boolean;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $List_<$ToolType_>, arg1: $Consumer_<$ToolType>);
        set selectedElement(value: $ToolType_);
    }
    export class $SchematicHotbarSlotOverlay {
        renderOn(arg0: $GuiGraphics, arg1: number): void;
        constructor();
    }
    export class $SchematicHandler implements $LayeredDraw$Layer {
        getBounds(): $AABB;
        isActive(): boolean;
        sync(): void;
        getTransformation(): $SchematicTransformation;
        mouseScrolled(arg0: number): boolean;
        updateRenderers(): void;
        render(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        render(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        tick(): void;
        onKeyInput(arg0: number, arg1: boolean): void;
        loadSettings(arg0: $ItemStack_): void;
        deploy(): void;
        isDeployed(): boolean;
        getActiveSchematicItem(): $ItemStack;
        getCurrentSchematicName(): string;
        equip(arg0: $ToolType_): void;
        markDirty(): void;
        getOutline(): $AABBOutline;
        printInstantly(): void;
        onMouseInput(arg0: number, arg1: boolean): boolean;
        constructor();
        get bounds(): $AABB;
        get active(): boolean;
        get transformation(): $SchematicTransformation;
        get deployed(): boolean;
        get activeSchematicItem(): $ItemStack;
        get currentSchematicName(): string;
        get outline(): $AABBOutline;
    }
    export class $SchematicEditScreen extends $AbstractSimiScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
}
