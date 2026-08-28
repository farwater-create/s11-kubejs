import { $Codec } from "@package/com/mojang/serialization";
import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $ArrayList, $List, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Thread, $Record } from "@package/java/lang";
import { $NeighborUpdater } from "@package/net/minecraft/world/level/redstone";
import { $Level } from "@package/net/minecraft/world/level";
import { $VisualizationLevel } from "@package/dev/engine_room/flywheel/api/visualization";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $WritableLevelData } from "@package/net/minecraft/world/level/storage";
import { $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $WrappedLevel } from "@package/net/createmod/catnip/levelWrappers";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/simibubi/create/content/contraptions/wrench" {
    export class $RadialWrenchMenu extends $AbstractSimiScreen {
        static tryCreateFor(arg0: $BlockState_, arg1: $BlockPos_, arg2: $Level): ($RadialWrenchMenu) | undefined;
        static registerBlacklistedBlock(arg0: $ResourceLocation_): void;
        static registerRotationProperty(arg0: $Property<never>, arg1: string): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        static VALID_PROPERTIES: $Map<$Property<never>, string>;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static BLOCK_BLACKLIST: $Set<$ResourceLocation>;
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
    }
    export class $NonVisualizationLevel extends $WrappedLevel implements $VisualizationLevel {
        supportsVisualization(): boolean;
        restoringBlockSnapshots: boolean;
        neighborUpdater: $NeighborUpdater;
        static LONG_PARTICLE_CLIP_RANGE: number;
        randValue: number;
        levelData: $WritableLevelData;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        static MAX_BRIGHTNESS: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        rainLevel: number;
        oThunderLevel: number;
        static ATTACHMENTS_NBT_KEY: string;
        thread: $Thread;
        addend: number;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level);
    }
    export class $RadialWrenchMenuSubmitPacket extends $Record implements $ServerboundPacketPayload {
        newState(): $BlockState;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        blockPos(): $BlockPos;
        handler$zep000$openpartiesandclaims$onActivate(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        handler$ide00c$aeroclaims$onHandle(arg0: $ServerPlayer, arg1: $CallbackInfo): void;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $RadialWrenchMenuSubmitPacket>;
        constructor(blockPos: $BlockPos_, newState: $BlockState_);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $RadialWrenchMenuSubmitPacket}.
     */
    export type $RadialWrenchMenuSubmitPacket_ = { blockPos?: $BlockPos_, newState?: $BlockState_,  } | [blockPos?: $BlockPos_, newState?: $BlockState_, ];
    export class $RadialWrenchHandler {
        static onKeyInput(arg0: number, arg1: boolean): void;
        static clientTick(): void;
        static COOLDOWN: number;
        constructor();
    }
}
