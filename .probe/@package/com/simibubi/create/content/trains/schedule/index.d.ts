import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $AbstractSimiContainerScreen, $HeldItemGhostItemMenu } from "@package/com/simibubi/create/foundation/gui/menu";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Executor } from "@package/java/util/concurrent";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ScheduleInstruction } from "@package/com/simibubi/create/content/trains/schedule/destination";
import { $CustomPacketPayload$Type, $CustomPacketPayload } from "@package/net/minecraft/network/protocol/common/custom";
import { $Minecraft, $NarratorStatus } from "@package/net/minecraft/client";
import { $ItemCopyingRecipe$SupportsItemCopying } from "@package/com/simibubi/create/foundation/recipe";
import { $List, $List_, $Collection, $Map, $Set } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $PlayerInteractEvent$EntityInteractSpecific } from "@package/net/neoforged/neoforge/event/entity/player";
import { $Train } from "@package/com/simibubi/create/content/trains/entity";
import { $Supplier } from "@package/java/util/function";
import { $InteractionResult, $MenuProvider, $InteractionHand_, $Container } from "@package/net/minecraft/world";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $DiscoveredPath } from "@package/com/simibubi/create/content/trains/graph";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ModularUI } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $ContainerSynchronizer, $MenuType, $AbstractContainerMenu, $Slot, $ContainerListener } from "@package/net/minecraft/world/inventory";
import { $DataComponentType } from "@package/net/minecraft/core/component";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $Pair, $IntAttached } from "@package/net/createmod/catnip/data";
import { $Level } from "@package/net/minecraft/world/level";
import { $ScheduleWaitCondition } from "@package/com/simibubi/create/content/trains/schedule/condition";
import { $GlobalTrainDisplayData$TrainDeparturePrediction } from "@package/com/simibubi/create/content/trains/display";
import { $Item, $ItemStack_, $ItemStack, $Item$Properties } from "@package/net/minecraft/world/item";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $CycleButton, $CommandSuggestions, $EditBox, $CommandSuggestions$SuggestionsList, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $SlotItemHandler, $ItemStackHandler } from "@package/net/neoforged/neoforge/items";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $ScreenOverlay } from "@package/com/simibubi/create/foundation/gui/widget";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ModularGuiLineBuilder } from "@package/com/simibubi/create/foundation/gui";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BasePacketPayload$PacketTypeProvider, $ServerboundPacketPayload } from "@package/net/createmod/catnip/net/base";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as condition from "@package/com/simibubi/create/content/trains/schedule/condition";
export * as destination from "@package/com/simibubi/create/content/trains/schedule/destination";
export * as hat from "@package/com/simibubi/create/content/trains/schedule/hat";

declare module "@package/com/simibubi/create/content/trains/schedule" {
    export class $ScheduleItemEntityInteraction {
        static interactWithConductor(arg0: $PlayerInteractEvent$EntityInteractSpecific): void;
        constructor();
    }
    export class $ScheduleRuntime$State extends $Enum<$ScheduleRuntime$State> {
        static values(): $ScheduleRuntime$State[];
        static valueOf(arg0: string): $ScheduleRuntime$State;
        static IN_TRANSIT: $ScheduleRuntime$State;
        static PRE_TRANSIT: $ScheduleRuntime$State;
        static POST_TRANSIT: $ScheduleRuntime$State;
    }
    /**
     * Values that may be interpreted as {@link $ScheduleRuntime$State}.
     */
    export type $ScheduleRuntime$State_ = "pre_transit" | "in_transit" | "post_transit";
    export class $ScheduleItem extends $Item implements $MenuProvider, $ItemCopyingRecipe$SupportsItemCopying {
        getComponentType(): $DataComponentType<never>;
        getDisplayName(): $Component;
        static getSchedule(arg0: $HolderLookup$Provider, arg1: $ItemStack_): $Schedule;
        handScheduleTo(arg0: $ItemStack_, arg1: $Player, arg2: $LivingEntity, arg3: $InteractionHand_): $InteractionResult;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        createCopy(arg0: $ItemStack_, arg1: number): $ItemStack;
        canCopyToItem(arg0: $ItemStack_): boolean;
        canCopyFromItem(arg0: $ItemStack_): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        shouldCloseCurrentScreen(): boolean;
        static BASE_ATTACK_DAMAGE_ID: $ResourceLocation;
        static DEFAULT_MAX_STACK_SIZE: number;
        static MAX_BAR_WIDTH: number;
        static BASE_ATTACK_SPEED_ID: $ResourceLocation;
        static ABSOLUTE_MAX_STACK_SIZE: number;
        canRepair: boolean;
        moonlight$clientAnimationProvider: $Object;
        static BY_BLOCK: $Map<$Block, $Item>;
        constructor(arg0: $Item$Properties);
        get componentType(): $DataComponentType<never>;
        get displayName(): $Component;
    }
    export class $ScheduleEntry {
        clone(arg0: $HolderLookup$Provider): $ScheduleEntry;
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $ScheduleEntry;
        instruction: $ScheduleInstruction;
        conditions: $List<$List<$ScheduleWaitCondition>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleEntry>;
        constructor();
        constructor(arg0: $ScheduleInstruction, arg1: $List_<$List_<$ScheduleWaitCondition>>);
    }
    export class $DestinationSuggestions extends $CommandSuggestions {
        isEmpty(): boolean;
        tick(): void;
        minecraft: $Minecraft;
        fillColor: number;
        input: $EditBox;
        keepSuggestions: boolean;
        anchorToBottom: boolean;
        lineStartOffset: number;
        suggestions: $CommandSuggestions$SuggestionsList;
        suggestionLineLimit: number;
        font: $Font;
        constructor(arg0: $Minecraft, arg1: $Screen, arg2: $EditBox, arg3: $Font, arg4: $List_<$IntAttached<string>>, arg5: boolean, arg6: number);
        get empty(): boolean;
    }
    export class $ScheduleDataEntry implements $IScheduleInput {
        getData(): $CompoundTag;
        setData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getItem(arg0: number): $ItemStack;
        getTitleAs(arg0: string): $List<$Component>;
        initConfigurationWidgets(arg0: $ModularGuiLineBuilder): void;
        getSecondLineTooltip(arg0: number): $List<$Component>;
        setItem(arg0: number, arg1: $ItemStack_): void;
        renderSpecialIcon(arg0: $GuiGraphics, arg1: number, arg2: number): boolean;
        slotsTargeted(): number;
        getSecondLineIcon(): $ItemStack;
        constructor();
        get secondLineIcon(): $ItemStack;
    }
    export class $ScheduleEditPacket extends $Record implements $ServerboundPacketPayload {
        schedule(): $Schedule;
        handle(arg0: $ServerPlayer): void;
        getTypeProvider(): $BasePacketPayload$PacketTypeProvider;
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ScheduleEditPacket>;
        constructor(schedule: $Schedule);
        get typeProvider(): $BasePacketPayload$PacketTypeProvider;
    }
    /**
     * Values that may be interpreted as {@link $ScheduleEditPacket}.
     */
    export type $ScheduleEditPacket_ = { schedule?: $Schedule,  } | [schedule?: $Schedule, ];
    export class $ScheduleScreen extends $AbstractSimiContainerScreen<$ScheduleMenu> {
        action(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number): boolean;
        renderScheduleConditions(arg0: $GuiGraphics, arg1: $ScheduleEntry, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void;
        renderScheduleEntry(arg0: $GuiGraphics, arg1: $ScheduleEntry, arg2: number, arg3: number, arg4: number, arg5: number): number;
        leftPos: number;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        clickedSlot: $Slot;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        titleLabelX: number;
        titleLabelY: number;
        renderables: $List<$Renderable>;
        hoveredSlot: $Slot;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        isSplittingStack: boolean;
        static PANORAMA: $PanoramaRenderer;
        static INVENTORY_LOCATION: $ResourceLocation;
        doubleclick: boolean;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        imageWidth: number;
        draggingItem: $ItemStack;
        slotColor: number;
        static SLOT_ITEM_BLIT_OFFSET: number;
        isQuickCrafting: boolean;
        quickCraftingRemainder: number;
        lastQuickMoved: $ItemStack;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static $assertionsDisabled: boolean;
        inventoryLabelY: number;
        inventoryLabelX: number;
        menu: $ScheduleMenu;
        static FOOTER_SEPARATOR: $ResourceLocation;
        imageHeight: number;
        quickCraftingType: number;
        narratorButton: $CycleButton<$NarratorStatus>;
        playerInventoryTitle: $Component;
        quickCraftSlots: $Set<$Slot>;
        narratables: $List<$NarratableEntry>;
        width: number;
        screenExecutor: $Executor;
        topPos: number;
        font: $Font;
        constructor(arg0: $ScheduleMenu, arg1: $Inventory, arg2: $Component_);
    }
    export class $Schedule {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        static fromTag(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Schedule;
        static getTypeOptions<T>(arg0: $List_<$Pair<$ResourceLocation_, T>>): $List<$Component>;
        entries: $List<$ScheduleEntry>;
        static CONDITION_TYPES: $List<$Pair<$ResourceLocation, $Supplier<$ScheduleWaitCondition>>>;
        static INSTRUCTION_TYPES: $List<$Pair<$ResourceLocation, $Supplier<$ScheduleInstruction>>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Schedule>;
        cyclic: boolean;
        savedProgress: number;
        constructor();
        constructor(arg0: $List_<$ScheduleEntry>, arg1: boolean, arg2: number);
    }
    export class $ScheduleMenu extends $HeldItemGhostItemMenu {
        quickcraftSlots: $Set<$Slot>;
        remoteCarried: $ItemStack;
        static QUICKCRAFT_HEADER_START: number;
        remoteSlots: $NonNullList<$ItemStack>;
        ghostInventory: $ItemStackHandler;
        static QUICKCRAFT_HEADER_CONTINUE: number;
        static QUICKCRAFT_TYPE_CLONE: number;
        ldlib2$itemSlotMap: $Map<any, any>;
        containerId: number;
        static QUICKCRAFT_TYPE_CHARITABLE: number;
        player: $Player;
        playerInventory: $Inventory;
        stateId: number;
        lastSlots: $NonNullList<$ItemStack>;
        static QUICKCRAFT_TYPE_GREEDY: number;
        static QUICKCRAFT_HEADER_END: number;
        slots: $NonNullList<$Slot>;
        static CARRIED_SLOT_SIZE: number;
        static SLOT_CLICKED_OUTSIDE: number;
        slotsActive: boolean;
        ldlib2$modularUI: $ModularUI;
        quickcraftType: number;
        synchronizer: $ContainerSynchronizer;
        contentHolder: $ItemStack;
        menuType: $MenuType<never>;
        containerListeners: $List<$ContainerListener>;
        quickcraftStatus: number;
        targetSlotsActive: number;
        constructor(arg0: $MenuType<never>, arg1: number, arg2: $Inventory, arg3: $RegistryFriendlyByteBuf);
        constructor(arg0: $MenuType<never>, arg1: number, arg2: $Inventory, arg3: $ItemStack_);
    }
    export class $ScheduleMenu$InactiveSlot extends $Slot {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $ScheduleMenu$InactiveItemHandlerSlot extends $SlotItemHandler {
        container: $Container;
        x: number;
        index: number;
        y: number;
        slot: number;
    }
    export class $ScheduleRuntime {
        write(arg0: $HolderLookup$Provider): $CompoundTag;
        read(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getWaitingStatus(arg0: $Level): $MutableComponent;
        tick(arg0: $Level): void;
        getSchedule(): $Schedule;
        submitPredictions(): $Collection<$GlobalTrainDisplayData$TrainDeparturePrediction>;
        setSchedule(arg0: $Schedule, arg1: boolean): void;
        returnSchedule(arg0: $HolderLookup$Provider): $ItemStack;
        startCooldown(): void;
        startCurrentInstruction(arg0: $Level): $DiscoveredPath;
        destinationReached(): void;
        discardSchedule(): void;
        tickConditions(arg0: $Level): void;
        transitInterrupted(): void;
        setSchedulePresentClientside(arg0: boolean): void;
        paused: boolean;
        predictionTicks: $List<number>;
        currentEntry: number;
        completed: boolean;
        displayLinkUpdateRequested: boolean;
        schedule: $Schedule;
        currentTitle: string;
        conditionContext: $List<$CompoundTag>;
        isAutoSchedule: boolean;
        state: $ScheduleRuntime$State;
        conditionProgress: $List<number>;
        train: $Train;
        ticksInTransit: number;
        constructor(arg0: $Train);
        set schedulePresentClientside(value: boolean);
    }
    export class $ScheduleScreen$EditorSubWidgets extends $ScreenOverlay {
        zOffset: number;
    }
    export class $IScheduleInput {
    }
    export interface $IScheduleInput {
        getId(): $ResourceLocation;
        getData(): $CompoundTag;
        setData(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        getItem(arg0: number): $ItemStack;
        getSummary(): $Pair<$ItemStack, $Component>;
        getTitleAs(arg0: string): $List<$Component>;
        initConfigurationWidgets(arg0: $ModularGuiLineBuilder): void;
        getSecondLineTooltip(arg0: number): $List<$Component>;
        setItem(arg0: number, arg1: $ItemStack_): void;
        renderSpecialIcon(arg0: $GuiGraphics, arg1: number, arg2: number): boolean;
        slotsTargeted(): number;
        getSecondLineIcon(): $ItemStack;
        get id(): $ResourceLocation;
        get summary(): $Pair<$ItemStack, $Component>;
        get secondLineIcon(): $ItemStack;
    }
}
