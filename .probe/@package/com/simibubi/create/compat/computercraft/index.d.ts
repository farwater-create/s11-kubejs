import { $AbstractSimiScreen } from "@package/net/createmod/catnip/gui";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $SyncedBlockEntity, $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $BlockEntityDataPacket } from "@package/com/simibubi/create/foundation/networking";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $List } from "@package/java/util";
import { $IPeripheral } from "@package/dan200/computercraft/api/peripheral";
import { $BehaviourType, $BlockEntityBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ComputerEvent } from "@package/com/simibubi/create/compat/computercraft/events";
import { $AllGuiTextures, $AllGuiTextures_ } from "@package/com/simibubi/create/foundation/gui";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as implementation from "@package/com/simibubi/create/compat/computercraft/implementation";
export * as events from "@package/com/simibubi/create/compat/computercraft/events";

declare module "@package/com/simibubi/create/compat/computercraft" {
    export class $AttachedComputerPacket extends $BlockEntityDataPacket<$SyncedBlockEntity> {
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $AttachedComputerPacket>;
        constructor(arg0: $BlockPos_, arg1: boolean);
    }
    export class $ComputerCraftProxy {
        static register(): void;
        static behaviour(arg0: $SmartBlockEntity): $AbstractComputerBehaviour;
        constructor();
    }
    export class $AbstractComputerBehaviour extends $BlockEntityBehaviour {
        getPeripheralCapability(): $IPeripheral;
        hasAttachedComputer(): boolean;
        prepareComputerEvent(arg0: $ComputerEvent): void;
        removePeripheral(): void;
        setHasAttachedComputer(arg0: boolean): void;
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AbstractComputerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
        get peripheralCapability(): $IPeripheral;
    }
    export class $ComputerScreen extends $AbstractSimiScreen {
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
        constructor(arg0: $Component_, arg1: $ComputerScreen$RenderWindowFunction_, arg2: $Screen, arg3: $Supplier_<boolean>);
        constructor(arg0: $Component_, arg1: $Supplier_<$Component>, arg2: $ComputerScreen$RenderWindowFunction_, arg3: $Screen, arg4: $Supplier_<boolean>);
    }
    export class $FallbackComputerBehaviour extends $AbstractComputerBehaviour {
        blockEntity: $SmartBlockEntity;
        static TYPE: $BehaviourType<$AbstractComputerBehaviour>;
        constructor(arg0: $SmartBlockEntity);
    }
    export class $ComputerScreen$RenderWindowFunction {
    }
    export interface $ComputerScreen$RenderWindowFunction {
        render(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $AllGuiTextures_): void;
    }
    /**
     * Values that may be interpreted as {@link $ComputerScreen$RenderWindowFunction}.
     */
    export type $ComputerScreen$RenderWindowFunction_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $AllGuiTextures) => void);
}
