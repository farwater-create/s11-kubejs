import { $SchematicTransformation } from "@package/com/simibubi/create/content/schematics/client";
import { $Component, $MutableComponent } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $RaycastHelper$PredicateTraceResult } from "@package/com/simibubi/create/foundation/utility";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List } from "@package/java/util";
import { $SuperRenderTypeBuffer } from "@package/net/createmod/catnip/render";
import { $Predicate_ } from "@package/java/util/function";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $LocalIntRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $AllIcons } from "@package/com/simibubi/create/foundation/gui";
import { $Enum } from "@package/java/lang";
import { $Gui, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/content/schematics/client/tools" {
    export class $RotateTool extends $PlacementToolBase {
        constructor();
    }
    export class $ToolType extends $Enum<$ToolType> {
        static values(): $ToolType[];
        static valueOf(arg0: string): $ToolType;
        getDisplayName(): $MutableComponent;
        getIcon(): $AllIcons;
        getDescription(): $List<$Component>;
        getTool(): $ISchematicTool;
        static getTools(arg0: boolean): $List<$ToolType>;
        static PRINT: $ToolType;
        static MOVE: $ToolType;
        static ROTATE: $ToolType;
        static DEPLOY: $ToolType;
        static MOVE_Y: $ToolType;
        static FLIP: $ToolType;
        get displayName(): $MutableComponent;
        get icon(): $AllIcons;
        get description(): $List<$Component>;
        get tool(): $ISchematicTool;
    }
    /**
     * Values that may be interpreted as {@link $ToolType}.
     */
    export type $ToolType_ = "deploy" | "move" | "move_y" | "rotate" | "flip" | "print";
    export class $ISchematicTool {
    }
    export interface $ISchematicTool {
        init(): void;
        handleRightClick(): boolean;
        renderTool(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        renderOverlay(arg0: $Gui, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        renderOnSchematic(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer): void;
        handleMouseWheel(arg0: number): boolean;
        updateSelection(): void;
    }
    export class $FlipTool extends $PlacementToolBase {
        constructor();
    }
    export class $MoveTool extends $PlacementToolBase {
        constructor();
    }
    export class $PlacementToolBase extends $SchematicToolBase {
        constructor();
    }
    export class $PlaceTool extends $SchematicToolBase {
        constructor();
    }
    export class $SchematicToolBase implements $ISchematicTool {
        init(): void;
        wrapOperation$hlf000$sable$rayTraceSublevels(arg0: $Vec3_, arg1: $Vec3_, arg2: $Predicate_<any>, arg3: $Operation_<any>, arg4: $LocalPlayer, arg5: $SchematicTransformation): $RaycastHelper$PredicateTraceResult;
        renderTool(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer, arg2: $Vec3_): void;
        renderOverlay(arg0: $Gui, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number): void;
        handler$hlf000$sable$forceUpdateSelection(arg0: $CallbackInfo, arg1: $Vec3_): void;
        wrapOperation$hlf000$sable$rayTraceSublevels$mixinextras$bridge$10(arg0: $Vec3_, arg1: $Vec3_, arg2: $Predicate_<any>, arg3: $Operation_<any>, arg4: $LocalRef<any>, arg5: $LocalRef<any>): $RaycastHelper$PredicateTraceResult;
        updateTargetPos(): void;
        renderOnSchematic(arg0: $PoseStack, arg1: $SuperRenderTypeBuffer): void;
        updateSelection(): void;
        constructor();
    }
    export class $MoveVerticalTool extends $PlacementToolBase {
        constructor();
    }
    export class $DeployTool extends $PlacementToolBase {
        wrapOperation$hla000$sable$manualTransformBB(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: number, arg6: number, arg7: $Vec3_): void;
        wrapOperation$hla000$sable$manualTransformBB$mixinextras$bridge$7(arg0: $PoseStack, arg1: number, arg2: number, arg3: number, arg4: $Operation_<any>, arg5: $LocalIntRef, arg6: $LocalIntRef, arg7: $LocalRef<any>): void;
        constructor();
    }
}
