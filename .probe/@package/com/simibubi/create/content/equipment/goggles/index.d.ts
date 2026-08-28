import { $Level } from "@package/net/minecraft/world/level";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Item$Properties, $Item, $ItemStack, $Equipable } from "@package/net/minecraft/world/item";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $EquipmentSlot } from "@package/net/minecraft/world/entity";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $BakedModel } from "@package/net/minecraft/client/resources/model";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $NarratorStatus, $DeltaTracker } from "@package/net/minecraft/client";
import { $List, $Map } from "@package/java/util";
import { $Predicate_ } from "@package/java/util/function";
import { $InteractionResultHolder, $InteractionHand_ } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Holder } from "@package/net/minecraft/core";
import { $BakedModelWrapper } from "@package/net/neoforged/neoforge/client/model";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $Font, $GuiGraphics, $LayeredDraw$Layer } from "@package/net/minecraft/client/gui";

declare module "@package/com/simibubi/create/content/equipment/goggles" {
    export class $GoggleOverlayRenderer {
        static proxiedOverlayPosition(arg0: $Level, arg1: $BlockPos_): $BlockPos;
        static renderOverlay(arg0: $GuiGraphics, arg1: $DeltaTracker): void;
        static hoverTicks: number;
        static lastHovered: $BlockPos;
        static OVERLAY: $LayeredDraw$Layer;
        constructor();
    }
    export class $GoggleConfigScreen extends $AbstractSimiScreen {
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
    export class $GogglesModel extends $BakedModelWrapper<$BakedModel> {
        constructor(arg0: $BakedModel);
    }
    export class $GogglesItem extends $Item implements $Equipable {
        static addIsWearingPredicate(arg0: $Predicate_<$Player>): void;
        getEquipmentSlot(): $EquipmentSlot;
        static isWearingGoggles(arg0: $Player): boolean;
        getEquipSound(): $Holder<$SoundEvent>;
        swapWithEquipmentSlot(arg0: $Item, arg1: $Level, arg2: $Player, arg3: $InteractionHand_): $InteractionResultHolder<$ItemStack>;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get equipmentSlot(): $EquipmentSlot;
        get equipSound(): $Holder<$SoundEvent>;
    }
}
