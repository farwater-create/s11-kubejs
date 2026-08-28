import { $Level } from "@package/net/minecraft/world/level";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $Set } from "@package/java/util";
import { $FilteringBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/filtering";
import { $BehaviourType, $ValueBoxTransform } from "@package/com/simibubi/create/foundation/blockEntity/behaviour";
import { $FactoryPanelBlockEntity, $FactoryPanelConnection, $FactoryPanelPosition, $FactoryPanelBlock$PanelType_, $FactoryPanelBehaviour, $FactoryPanelBlock$PanelSlot_, $FactoryPanelBlock$PanelSlot, $FactoryPanelBlock$PanelState_ } from "@package/com/simibubi/create/content/logistics/factoryBoard";
import { $PanelConnection, $PanelInteractionBuilder, $PanelValue, $ProvidesConnection } from "@package/net/liukrast/deployer/lib/logistics/board/connection";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record, $Class } from "@package/java/lang";
import { $PartialModel } from "@package/dev/engine_room/flywheel/lib/model/baked";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $RequestPromiseQueue } from "@package/com/simibubi/create/content/logistics/packagerLink";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as connection from "@package/net/liukrast/deployer/lib/logistics/board/connection";

declare module "@package/net/liukrast/deployer/lib/logistics/board" {
    export class $AbstractPanelBehaviour$AttachedBlock extends $Record {
        state(): $BlockState;
        pos(): $BlockPos;
        level(): $Level;
        constructor(level: $Level, pos: $BlockPos_, state: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $AbstractPanelBehaviour$AttachedBlock}.
     */
    export type $AbstractPanelBehaviour$AttachedBlock_ = { state?: $BlockState_, level?: $Level, pos?: $BlockPos_,  } | [state?: $BlockState_, level?: $Level, pos?: $BlockPos_, ];
    export class $AbstractPanelBehaviour$ConnectionValue<T> extends $Record {
        value(): T;
        connection(): $FactoryPanelConnection;
        constructor(connection: $FactoryPanelConnection, value: T);
    }
    /**
     * Values that may be interpreted as {@link $AbstractPanelBehaviour$ConnectionValue}.
     */
    export type $AbstractPanelBehaviour$ConnectionValue_<T> = { value?: any, connection?: $FactoryPanelConnection,  } | [value?: any, connection?: $FactoryPanelConnection, ];
    export class $AbstractPanelBehaviour extends $FactoryPanelBehaviour implements $ProvidesConnection {
        reset(): void;
        static getValue<T>(arg0: $FactoryPanelConnection, arg1: $PanelConnection<T>, arg2: $FactoryPanelBehaviour): $PanelValue<T>;
        onShortInteract(arg0: $Player, arg1: $InteractionHand_, arg2: $Direction_, arg3: $BlockHitResult, arg4: boolean): void;
        getItem(): $Item;
        hasInteraction(arg0: string): boolean;
        getModel(arg0: $FactoryPanelBlock$PanelState_, arg1: $FactoryPanelBlock$PanelType_): $PartialModel;
        canConnect(arg0: $FactoryPanelBehaviour): string;
        getPanelType(): $PanelType<never>;
        addInteractions(arg0: $PanelInteractionBuilder): void;
        getBulbState(): $AbstractPanelBehaviour$BulbState;
        isInInteraction(): boolean;
        notifiedFromInput(): void;
        getInteraction(arg0: string): $AbstractPanelBehaviour$AttachedBlock;
        getInteraction(): $AbstractPanelBehaviour$AttachedBlock;
        notifyOutputs(): void;
        onConnectionAdded(arg0: $FactoryPanelConnection): void;
        getTargetedByExtra(): $Map<$BlockPos, $FactoryPanelConnection>;
        canBePointed(arg0: $FactoryPanelBehaviour): string;
        getItemDrops(): $List<$ItemStack>;
        getDisplayLinkComponent(arg0: boolean): $MutableComponent;
        easyRead(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        canPoint(arg0: $FactoryPanelBehaviour): string;
        easyWrite(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        getDefaultConnectionAmount(): number;
        getInteractionBlockEntity(arg0: string): $BlockEntity;
        hasInteractionUncached(arg0: string, arg1: $Level, arg2: $BlockPos_, arg3: $BlockState_): boolean;
        static TOP_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        upTo: boolean;
        static BOTTOM_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        restockerPromises: $RequestPromiseQueue;
        slot: $FactoryPanelBlock$PanelSlot;
        activeCraftingArrangement: $List<$ItemStack>;
        network: $UUID;
        recipeAddress: string;
        targeting: $Set<$FactoryPanelPosition>;
        redstonePowered: boolean;
        blockEntity: $SmartBlockEntity;
        static TOP_RIGHT: $BehaviourType<$FactoryPanelBehaviour>;
        promisedSatisfied: boolean;
        static BOTTOM_LEFT: $BehaviourType<$FactoryPanelBehaviour>;
        static TYPE: $BehaviourType<$FilteringBehaviour>;
        forceClearPromises: boolean;
        waitingForNetwork: boolean;
        satisfied: boolean;
        targetedByLinks: $Map<$BlockPos, $FactoryPanelConnection>;
        bulb: $LerpedFloat;
        count: number;
        active: boolean;
        targetedBy: $Map<$FactoryPanelPosition, $FactoryPanelConnection>;
        recipeOutput: number;
        customLabel: $MutableComponent;
        promiseClearingInterval: number;
        constructor(arg0: $ValueBoxTransform, arg1: $PanelType<never>, arg2: $FactoryPanelBlockEntity, arg3: $FactoryPanelBlock$PanelSlot_);
        constructor(arg0: $PanelType<never>, arg1: $FactoryPanelBlockEntity, arg2: $FactoryPanelBlock$PanelSlot_);
        get item(): $Item;
        get panelType(): $PanelType<never>;
        get bulbState(): $AbstractPanelBehaviour$BulbState;
        get inInteraction(): boolean;
        get targetedByExtra(): $Map<$BlockPos, $FactoryPanelConnection>;
        get itemDrops(): $List<$ItemStack>;
        get defaultConnectionAmount(): number;
    }
    export class $PanelType<T extends $AbstractPanelBehaviour> {
        create(arg0: $FactoryPanelBlockEntity, arg1: $FactoryPanelBlock$PanelSlot_): $AbstractPanelBehaviour;
        asClass(): $Class<T>;
        constructor(arg0: $PanelType$Constructor_<T>, arg1: $Class<T>);
    }
    export class $AbstractPanelBehaviour$BulbState extends $Enum<$AbstractPanelBehaviour$BulbState> {
        static values(): $AbstractPanelBehaviour$BulbState[];
        static valueOf(arg0: string): $AbstractPanelBehaviour$BulbState;
        static DISABLED: $AbstractPanelBehaviour$BulbState;
        static RED: $AbstractPanelBehaviour$BulbState;
        static GREEN: $AbstractPanelBehaviour$BulbState;
    }
    /**
     * Values that may be interpreted as {@link $AbstractPanelBehaviour$BulbState}.
     */
    export type $AbstractPanelBehaviour$BulbState_ = "disabled" | "red" | "green";
    export class $PanelType$Constructor<T extends $AbstractPanelBehaviour> {
    }
    export interface $PanelType$Constructor<T extends $AbstractPanelBehaviour> {
        apply(arg0: $PanelType<T>, arg1: $FactoryPanelBlockEntity, arg2: $FactoryPanelBlock$PanelSlot_): T;
    }
    /**
     * Values that may be interpreted as {@link $PanelType$Constructor}.
     */
    export type $PanelType$Constructor_<T> = ((arg0: $PanelType<T>, arg1: $FactoryPanelBlockEntity, arg2: $FactoryPanelBlock$PanelSlot) => T);
}
