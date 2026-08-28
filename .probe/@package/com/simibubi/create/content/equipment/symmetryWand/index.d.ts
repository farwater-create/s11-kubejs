import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $CustomRenderedItemModelRenderer } from "@package/com/simibubi/create/foundation/item/render";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $List, $Map, $List_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $RenderLevelStageEvent, $ClientTickEvent$Post } from "@package/net/neoforged/neoforge/client/event";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SymmetryMirror } from "@package/com/simibubi/create/content/equipment/symmetryWand/mirror";
import { $Record, $Object } from "@package/java/lang";
import { $BlockEvent$BreakEvent, $BlockEvent$EntityPlaceEvent } from "@package/net/neoforged/neoforge/event/level";
import { $Level } from "@package/net/minecraft/world/level";
import { $Item$Properties, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LocalPlayer } from "@package/net/minecraft/client/player";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $ClientboundPacketPayload, $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as mirror from "@package/com/simibubi/create/content/equipment/symmetryWand/mirror";

declare module "@package/com/simibubi/create/content/equipment/symmetryWand" {
    export class $SymmetryEffectPacket extends $Record implements $ClientboundPacketPayload {
        handle(arg0: $LocalPlayer): void;
        positions(): $List<$BlockPos>;
        mirror(): $BlockPos;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        handleInternal(arg0: $Player): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SymmetryEffectPacket>;
        constructor(mirror: $BlockPos_, positions: $List_<$BlockPos_>);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $SymmetryEffectPacket}.
     */
    export type $SymmetryEffectPacket_ = { mirror?: $BlockPos_, positions?: $List_<$BlockPos_>,  } | [mirror?: $BlockPos_, positions?: $List_<$BlockPos_>, ];
    export class $SymmetryWandItemRenderer extends $CustomRenderedItemModelRenderer {
        constructor();
    }
    export class $ConfigureSymmetryWandPacket extends $Record implements $ServerboundPacketPayload {
        handle(arg0: $ServerPlayer): void;
        mirror(): $SymmetryMirror;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        hand(): $InteractionHand;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConfigureSymmetryWandPacket>;
        constructor(hand: $InteractionHand_, mirror: $SymmetryMirror);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ConfigureSymmetryWandPacket}.
     */
    export type $ConfigureSymmetryWandPacket_ = { mirror?: $SymmetryMirror, hand?: $InteractionHand_,  } | [mirror?: $SymmetryMirror, hand?: $InteractionHand_, ];
    export class $SymmetryWandItem extends $Item {
        static remove(arg0: $Level, arg1: $ItemStack_, arg2: $Player, arg3: $BlockPos_): void;
        static apply(arg0: $Level, arg1: $ItemStack_, arg2: $Player, arg3: $BlockPos_, arg4: $BlockState_): void;
        static isEnabled(arg0: $ItemStack_): boolean;
        static getMirror(arg0: $ItemStack_): $SymmetryMirror;
        static configureSettings(arg0: $ItemStack_, arg1: $SymmetryMirror): void;
        static presentInHotbar(arg0: $Player): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
    }
    export class $SymmetryHandler {
        static onClientTick(arg0: $ClientTickEvent$Post): void;
        static onBlockPlaced(arg0: $BlockEvent$EntityPlaceEvent): void;
        static onRenderWorld(arg0: $RenderLevelStageEvent): void;
        static onBlockDestroyed(arg0: $BlockEvent$BreakEvent): void;
        static drawEffect(arg0: $BlockPos_, arg1: $BlockPos_): void;
        constructor();
    }
    export class $SymmetryWandScreen extends $AbstractSimiScreen {
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
        constructor(arg0: $ItemStack_, arg1: $InteractionHand_);
    }
}
