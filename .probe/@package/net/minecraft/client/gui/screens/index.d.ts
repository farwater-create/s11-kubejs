import { $AccessorMenuScreens } from "@package/net/darkhax/bookshelf/neoforge/mixin/access/gui/screen";
import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture, $Executor } from "@package/java/util/concurrent";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ReloadInstance } from "@package/net/minecraft/server/packs/resources";
import { $NarratorStatus, $Minecraft, $Options } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $Event } from "@package/net/fabricmc/fabric/api/event";
import { $FormattedCharSequence, $FormattedCharSequence_, $ProgressListener } from "@package/net/minecraft/util";
import { $TransferState_, $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $StoringChunkProgressListener } from "@package/net/minecraft/server/level/progress";
import { $Consumer_, $BooleanSupplier_ } from "@package/java/util/function";
import { $Music } from "@package/net/minecraft/sounds";
import { $Registry, $HolderGetter, $Holder } from "@package/net/minecraft/core";
import { $CreateWorldScreen, $WorldCreationContext_ } from "@package/net/minecraft/client/gui/screens/worldselection";
import { $Path_ } from "@package/java/nio/file";
import { $URI } from "@package/java/net";
import { $Connection, $DisconnectionDetails_ } from "@package/net/minecraft/network";
import { $ClientTooltipPositioner, $ClientTooltipPositioner_ } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $BooleanConsumer_, $BooleanConsumer } from "@package/it/unimi/dsi/fastutil/booleans";
import { $SimpleTexture, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $MenuType, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Throwable, $Record, $AutoCloseable, $Runnable_ } from "@package/java/lang";
import { $StructureSet_ } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $ScreenExtensions } from "@package/net/fabricmc/fabric/impl/client/screen";
import { $GridLayout$RowHelper } from "@package/net/minecraft/client/gui/layouts";
import { $ScreenAccessor as $ScreenAccessor$2 } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarratableEntry$NarrationPriority_ } from "@package/net/minecraft/client/gui/narration";
import { $MutableComponent, $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $FlatLevelGeneratorSettings } from "@package/net/minecraft/world/level/levelgen/flat";
import { $CommandSuggestions, $Tooltip, $EditBox, $AbstractSelectionList, $ObjectSelectionList, $Renderable, $CycleButton, $WidgetTooltipHolder, $LogoRenderer, $Button$OnPress, $Button, $ObjectSelectionList$Entry } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";
import { $ServerAddress } from "@package/net/minecraft/client/multiplayer/resolver";
import { $ScreenAccessor as $ScreenAccessor$1 } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $ScreenAccessor } from "@package/net/fabricmc/fabric/mixin/screen";
import { $ChannelFuture } from "@package/io/netty/channel";
import { $ConnectScreenAccessor } from "@package/net/fabricmc/fabric/mixin/networking/client/accessor";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BanDetails_ } from "@package/com/mojang/authlib/minecraft";
import { $GuiEventListener, $AbstractContainerEventHandler, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as options from "@package/net/minecraft/client/gui/screens/options";
export * as inventory from "@package/net/minecraft/client/gui/screens/inventory";
export * as reporting from "@package/net/minecraft/client/gui/screens/reporting";
export * as recipebook from "@package/net/minecraft/client/gui/screens/recipebook";
export * as achievement from "@package/net/minecraft/client/gui/screens/achievement";
export * as worldselection from "@package/net/minecraft/client/gui/screens/worldselection";
export * as packs from "@package/net/minecraft/client/gui/screens/packs";
export * as advancements from "@package/net/minecraft/client/gui/screens/advancements";
export * as telemetry from "@package/net/minecraft/client/gui/screens/telemetry";
export * as multiplayer from "@package/net/minecraft/client/gui/screens/multiplayer";
export * as social from "@package/net/minecraft/client/gui/screens/social";
export * as debug from "@package/net/minecraft/client/gui/screens/debug";

declare module "@package/net/minecraft/client/gui/screens" {
    export class $LoadingOverlay extends $Overlay {
        static registerTextures(minecraft: $Minecraft): void;
        reload: $ReloadInstance;
        static FADE_OUT_TIME: number;
        static MOJANG_STUDIOS_LOGO_LOCATION: $ResourceLocation;
        static FADE_IN_TIME: number;
        fadeOutStart: number;
        constructor(minecraft: $Minecraft, reload: $ReloadInstance, onFinish: $Consumer_<($Throwable) | undefined>, fadeIn: boolean);
    }
    export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
    }
    export interface $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
        create(menu: T, inventory: $Inventory, title: $Component_): U;
        fromPacket(title: $Component_, type: $MenuType<T>, mc: $Minecraft, windowId: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MenuScreens$ScreenConstructor}.
     */
    export type $MenuScreens$ScreenConstructor_<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
    export class $ReceivingLevelScreen extends $Screen {
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
        constructor(levelReceived: $BooleanSupplier_, reason: $ReceivingLevelScreen$Reason_);
    }
    export class $DatapackLoadFailureScreen extends $Screen {
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
        constructor(cancelCallback: $Runnable_, safeModeCallback: $Runnable_);
    }
    export class $CreateBuffetWorldScreen extends $Screen {
        updateButtonValidity(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        biomes: $Registry<$Biome>;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        biome: $Holder<$Biome>;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $Screen, context: $WorldCreationContext_, applySettings: $Consumer_<$Holder<$Biome>>);
    }
    export class $OutOfMemoryScreen extends $Screen {
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
    export class $ReceivingLevelScreen$Reason extends $Enum<$ReceivingLevelScreen$Reason> {
        static values(): $ReceivingLevelScreen$Reason[];
        static valueOf(arg0: string): $ReceivingLevelScreen$Reason;
        static OTHER: $ReceivingLevelScreen$Reason;
        static NETHER_PORTAL: $ReceivingLevelScreen$Reason;
        static END_PORTAL: $ReceivingLevelScreen$Reason;
    }
    /**
     * Values that may be interpreted as {@link $ReceivingLevelScreen$Reason}.
     */
    export type $ReceivingLevelScreen$Reason_ = "nether_portal" | "end_portal" | "other";
    export class $PresetFlatWorldScreen$PresetsList$Entry extends $ObjectSelectionList$Entry<$PresetFlatWorldScreen$PresetsList$Entry> {
        select(): void;
        this$1: $PresetFlatWorldScreen$PresetsList;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$PresetFlatWorldScreen$PresetsList$Entry>;
    }
    export class $ProgressScreen extends $Screen implements $ProgressListener {
        stop(): void;
        progressStart(component: $Component_): void;
        /**
         * Updates the progress bar on the loading screen to the specified amount.
         */
        progressStagePercentage(progress: number): void;
        progressStage(component: $Component_): void;
        progressStartNoAbort(component: $Component_): void;
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
        constructor(clearScreenAfterStop: boolean);
    }
    export class $ConnectScreen extends $Screen implements $ConnectScreenAccessor {
        static startConnecting(parent: $Screen, minecraft: $Minecraft, serverAddress: $ServerAddress, serverData: $ServerData, isQuickPlay: boolean, transferState: $TransferState_ | null): void;
        getConnection(): $Connection;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $Screen;
        static UNKNOWN_HOST_MESSAGE: $Component;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        aborted: boolean;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static PANORAMA: $PanoramaRenderer;
        connection: $Connection;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        channelFuture: $ChannelFuture;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static ABORT_CONNECTION: $Component;
        narratables: $List<$NarratableEntry>;
        width: number;
        static LOGGER: $Logger;
        connectFailedTitle: $Component;
        screenExecutor: $Executor;
        font: $Font;
    }
    export class $ErrorScreen extends $Screen {
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
        constructor(title: $Component_, message: $Component_);
    }
    export class $DirectJoinServerScreen extends $Screen {
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
        constructor(lastScreen: $Screen, callback: $BooleanConsumer_, serverData: $ServerData);
    }
    export class $CreateBuffetWorldScreen$BiomeList$Entry extends $ObjectSelectionList$Entry<$CreateBuffetWorldScreen$BiomeList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$CreateBuffetWorldScreen$BiomeList$Entry>;
    }
    export class $CreateFlatWorldScreen extends $Screen {
        setConfig(generator: $FlatLevelGeneratorSettings): void;
        settings(): $FlatLevelGeneratorSettings;
        /**
         * Would update whether the edit and remove buttons are enabled, but is currently disabled and always disables the buttons (which are invisible anyway).
         */
        updateButtonValidity(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        parent: $CreateWorldScreen;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        generator: $FlatLevelGeneratorSettings;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static SLOT_SPRITE: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $CreateWorldScreen, applySettings: $Consumer_<$FlatLevelGeneratorSettings>, generator: $FlatLevelGeneratorSettings);
        set config(value: $FlatLevelGeneratorSettings);
    }
    export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $ScreenExtensions, $ScreenAccessor, $GuiEventListener, $ContainerEventHandler, $ScreenAccessor$1, $ScreenAccessor$2 {
        init(): void;
        init(minecraft: $Minecraft, width: number, height: number): void;
        added(): void;
        removed(): void;
        resize(minecraft: $Minecraft, width: number, height: number): void;
        onClose(): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderBackground(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        repositionElements(): void;
        addRenderableOnly<T extends $Renderable>(renderable: T): T;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWithTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        clearWidgets(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        shouldCloseOnEsc(): boolean;
        static isSelectAll(keyCode: number): boolean;
        rebuildWidgets(): void;
        changeFocus(path: $ComponentPath): void;
        removeWidget(listener: $GuiEventListener): void;
        onFilesDrop(packs: $List_<$Path_>): void;
        afterMouseMove(): void;
        afterMouseAction(): void;
        setInitialFocus(): void;
        setInitialFocus(listener: $GuiEventListener): void;
        renderPanorama(guiGraphics: $GuiGraphics, partialTick: number): void;
        getUsageNarration(): $Component;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        fabric_getButtons(): $List<any>;
        clearTooltipForNextRenderPass(): void;
        fabric_getBeforeRenderEvent(): $Event<any>;
        fabric_getAllowKeyPressEvent(): $Event<any>;
        renderTransparentBackground(partialTick: $GuiGraphics): void;
        static renderMenuBackgroundTexture(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, width: number, height: number): void;
        setTooltipForNextRenderPass(title: $Component_): void;
        setTooltipForNextRenderPass(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_, override: boolean): void;
        setTooltipForNextRenderPass(packs: $List_<$FormattedCharSequence_>): void;
        setTooltipForNextRenderPass(tooltip: $Tooltip, positioner: $ClientTooltipPositioner_, override: boolean): void;
        fabric_getAfterMouseScrollEvent(): $Event<any>;
        fabric_getBeforeMouseScrollEvent(): $Event<any>;
        fabric_getBeforeMouseClickEvent(): $Event<any>;
        fabric_getAllowMouseScrollEvent(): $Event<any>;
        fabric_getAfterKeyPressEvent(): $Event<any>;
        fabric_getAllowMouseReleaseEvent(): $Event<any>;
        fabric_getBeforeKeyPressEvent(): $Event<any>;
        fabric_getBeforeKeyReleaseEvent(): $Event<any>;
        fabric_getAfterMouseClickEvent(): $Event<any>;
        fabric_getAllowMouseClickEvent(): $Event<any>;
        fabric_getAfterKeyReleaseEvent(): $Event<any>;
        fabric_getAllowKeyReleaseEvent(): $Event<any>;
        fabric_getAfterMouseReleaseEvent(): $Event<any>;
        fabric_getBeforeMouseReleaseEvent(): $Event<any>;
        insertText(text: string, overwrite: boolean): void;
        clearFocus(): void;
        addWidget<T extends $GuiEventListener>(widget: T): T;
        static isCut(keyCode: number): boolean;
        static isPaste(keyCode: number): boolean;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        getTitle(): $Component;
        getNarrationMessage(): $Component;
        handleComponentClicked(style: $Style | null): boolean;
        renderBlurredBackground(partialTick: number): void;
        renderMenuBackground(partialTick: $GuiGraphics): void;
        renderMenuBackground(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        addRenderableWidget<T extends $GuiEventListener>(widget: T): T;
        triggerImmediateNarration(onlyNarrateNew: boolean): void;
        isValidCharacterForName(text: string, charTyped: string, cursorPos: number): boolean;
        afterKeyboardAction(): void;
        static findNarratableWidget(entries: $List_<$NarratableEntry>, target: $NarratableEntry | null): $Screen$NarratableSearchResult;
        fabric_getRemoveEvent(): $Event<any>;
        fabric_getBeforeTickEvent(): $Event<any>;
        fabric_getAfterTickEvent(): $Event<any>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        shouldNarrateNavigation(): boolean;
        fabric_getAfterRenderEvent(): $Event<any>;
        updateNarratedWidget(narrationElementOutput: $NarrationElementOutput): void;
        updateNarrationState(narrationElementOutput: $NarrationElementOutput): void;
        updateNarratorStatus(onlyNarrateNew: boolean): void;
        tick(): void;
        static isCopy(keyCode: number): boolean;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isPauseScreen(): boolean;
        static getTooltipFromItem(minecraft: $Minecraft, item: $ItemStack_): $List<$Component>;
        static wrapScreenError(action: $Runnable_, errorDesc: string, screenName: string): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasControlDown(): boolean;
        getBackgroundMusic(): $Music;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasShiftDown(): boolean;
        handleDelayedNarration(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasAltDown(): boolean;
        getMinecraft(): $Minecraft;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        libgui$getChildren(): $List<$GuiEventListener>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        catnip$getRenderables(): $List<$Renderable>;
        getFont(): $Font;
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
        constructor(title: $Component_);
        get usageNarration(): $Component;
        get narrationMessage(): $Component;
        get pauseScreen(): boolean;
        get backgroundMusic(): $Music;
    }
    export class $CreateFlatWorldScreen$DetailsList$Entry extends $ObjectSelectionList$Entry<$CreateFlatWorldScreen$DetailsList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$CreateFlatWorldScreen$DetailsList$Entry>;
    }
    export class $MenuScreens implements $AccessorMenuScreens {
        static getConstructor<T extends $AbstractContainerMenu>(type: $MenuType<T>): $MenuScreens$ScreenConstructor<T, never>;
        /**
         * @deprecated
         */
        static register<M extends $AbstractContainerMenu, U extends $Screen>(type: $MenuType<M>, factory: $MenuScreens$ScreenConstructor_<M, U>): void;
        static init(): void;
        static create<T extends $AbstractContainerMenu>(type: $MenuType<T>, mc: $Minecraft, windowId: number, title: $Component_): void;
        static getScreenFactory<T extends $AbstractContainerMenu>(arg0: $MenuType<T>): ($MenuScreens$ScreenConstructor<T, never>) | undefined;
        static selfTest(): boolean;
        static register$bookshelf_$md$707fe4$0(type: $MenuType<any>, factory: $MenuScreens$ScreenConstructor_<any, any>): void;
        constructor();
    }
    export class $DemoIntroScreen extends $Screen {
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
    export class $LevelLoadingScreen extends $Screen {
        static renderChunks(guiGraphics: $GuiGraphics, progressListener: $StoringChunkProgressListener, x: number, y: number, arg4: number, arg5: number): void;
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
        constructor(progressListener: $StoringChunkProgressListener);
    }
    export class $RecoverWorldDataScreen extends $Screen {
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
        constructor(minecraft: $Minecraft, callback: $BooleanConsumer_, storageAccess: $LevelStorageSource$LevelStorageAccess);
    }
    export class $EditServerScreen extends $Screen {
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
        constructor(lastScreen: $Screen, callback: $BooleanConsumer_, serverData: $ServerData);
    }
    export class $TitleScreen extends $Screen {
        static preloadResources(texMngr: $TextureManager, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        handler$fma003$collective$init(arg0: $CallbackInfo): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        fading: boolean;
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
        constructor(fading: boolean, logoRenderer: $LogoRenderer | null);
        constructor(fading: boolean);
        constructor();
    }
    export class $GenericMessageScreen extends $Screen {
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
        constructor(arg0: $Component_);
    }
    export class $GenericWaitingScreen extends $Screen {
        static createCompleted(title: $Component_, messageText: $Component_, buttonLabel: $Component_, buttonCallback: $Runnable_): $GenericWaitingScreen;
        static createWaiting(title: $Component_, buttonLabel: $Component_, buttonCallback: $Runnable_): $GenericWaitingScreen;
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
        constructor(title: $Component_, messageText: $Component_ | null, buttonLabel: $Component_, buttonCallback: $Runnable_, disableButtonTicks: number);
    }
    export class $ConfirmScreen extends $Screen {
        addExitButton(exitButton: $Button): void;
        addButtons(y: number): void;
        setDelay(y: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_);
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, yesButton: $Component_, noButton: $Component_);
        set delay(value: number);
    }
    export class $LoadingDotsText {
        static get(millis: number): string;
        constructor();
    }
    export class $NoticeWithLinkScreen extends $Screen {
        static createWorldSymlinkWarningScreen(onClose: $Runnable_): $Screen;
        static createPackSymlinkWarningScreen(onClose: $Runnable_): $Screen;
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
        constructor(title: $Component_, message: $Component_, uri: $URI, onClose: $Runnable_);
    }
    export class $ChatScreen extends $Screen {
        /**
         * Input is relative and is applied directly to the sentHistoryCursor so -1 is the previous message, 1 is the next message from the current cursor position.
         */
        moveInHistory(msgPos: number): void;
        handleChatInput(message: string, addToRecentChat: boolean): void;
        normalizeChatMessage(message: string): string;
        handler$dmf000$nochatreports$onBeforeMessage(arg0: string, arg1: $CallbackInfoReturnable<any>): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        input: $EditBox;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(initial: string);
    }
    export class $PauseScreen$FeedbackSubScreen extends $Screen {
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
    }
    export class $CreateBuffetWorldScreen$BiomeList extends $ObjectSelectionList<$CreateBuffetWorldScreen$BiomeList$Entry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $CreateBuffetWorldScreen$BiomeList$Entry;
        height: number;
    }
    export class $DisconnectedScreen extends $Screen {
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
        constructor(parent: $Screen, title: $Component_, details: $DisconnectionDetails_, buttonText: $Component_);
        constructor(parent: $Screen, title: $Component_, details: $DisconnectionDetails_);
        constructor(parent: $Screen, title: $Component_, reason: $Component_, buttonText: $Component_);
        constructor(parent: $Screen, title: $Component_, reason: $Component_);
    }
    export class $ConfirmLinkScreen extends $ConfirmScreen {
        static confirmLinkNow(lastScreen: $Screen, uri: $URI, trusted: boolean): void;
        static confirmLinkNow(lastScreen: $Screen, url: string, trusted: boolean): void;
        static confirmLinkNow(lastScreen: $Screen, uri: $URI): void;
        static confirmLinkNow(lastScreen: $Screen, url: string): void;
        static confirmMessage(trusted: boolean): $MutableComponent;
        static confirmMessage(trusted: boolean, extraInfo: string): $MutableComponent;
        static confirmLink(lastScreen: $Screen, uri: $URI): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, uri: $URI, trusted: boolean): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, url: string, trusted: boolean): $Button$OnPress;
        static confirmLink(lastScreen: $Screen, url: string): $Button$OnPress;
        /**
         * Copies the link to the system clipboard.
         */
        copyToClipboard(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, url: string, noButton: $Component_, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, message: $Component_, uri: $URI, noButton: $Component_, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, uri: $URI, trusted: boolean);
        constructor(callback: $BooleanConsumer_, title: $Component_, url: string, trusted: boolean);
        constructor(callback: $BooleanConsumer_, url: string, trusted: boolean);
    }
    export class $ShareToLanScreen extends $Screen {
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
        constructor(lastScreen: $Screen);
    }
    export class $DeathScreen$TitleConfirmScreen extends $ConfirmScreen {
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        noButton: $Component;
        narratorButton: $CycleButton<$NarratorStatus>;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        callback: $BooleanConsumer;
        static PANORAMA: $PanoramaRenderer;
        yesButton: $Component;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(arg0: $BooleanConsumer_, arg1: $Component_, arg2: $Component_, arg3: $Component_, arg4: $Component_);
    }
    export class $BackupConfirmScreen extends $Screen {
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
        id: number;
        screenExecutor: $Executor;
        onProceed: $BackupConfirmScreen$Listener;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(onCancel: $Runnable_, onProceed: $BackupConfirmScreen$Listener_, title: $Component_, description: $Component_, promptForCacheErase: boolean);
    }
    export class $BackupConfirmScreen$Listener {
    }
    export interface $BackupConfirmScreen$Listener {
        proceed(confirmed: boolean, eraseCache: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BackupConfirmScreen$Listener}.
     */
    export type $BackupConfirmScreen$Listener_ = ((arg0: boolean, arg1: boolean) => void);
    export class $FaviconTexture implements $AutoCloseable {
        clear(): void;
        close(): void;
        static forServer(textureManager: $TextureManager, worldName: string): $FaviconTexture;
        upload(image: $NativeImage): void;
        textureLocation(): $ResourceLocation;
        static forWorld(textureManager: $TextureManager, worldName: string): $FaviconTexture;
    }
    export class $PresetFlatWorldScreen extends $Screen {
        static save(levelGeneratorSettings: $FlatLevelGeneratorSettings): string;
        static fromString(blockGetter: $HolderGetter<$Block>, biomeGetter: $HolderGetter<$Biome>, structureSetGetter: $HolderGetter<$StructureSet_>, placedFeatureGetter: $HolderGetter<$PlacedFeature_>, settings: string, layerGenerationSettings: $FlatLevelGeneratorSettings): $FlatLevelGeneratorSettings;
        updateButtonValidity(valid: boolean): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        settings: $FlatLevelGeneratorSettings;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        static SLOT_SPRITE: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        static LOGGER: $Logger;
        screenExecutor: $Executor;
        static UNKNOWN_PRESET: $Component;
        "export": $EditBox;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(parent: $CreateFlatWorldScreen);
    }
    export class $PauseScreen extends $Screen {
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        showsPauseMenu(): boolean;
        static addFeedbackButtons(lastScreen: $Screen, rowHelper: $GridLayout$RowHelper): void;
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
        constructor(showPauseMenu: boolean);
    }
    export class $WinScreen$CreditsReader {
    }
    export interface $WinScreen$CreditsReader {
    }
    /**
     * Values that may be interpreted as {@link $WinScreen$CreditsReader}.
     */
    export type $WinScreen$CreditsReader_ = (() => void);
    export class $Screen$DeferredTooltipRendering extends $Record {
        positioner(): $ClientTooltipPositioner;
        tooltip(): $List<$FormattedCharSequence>;
        constructor(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_);
    }
    /**
     * Values that may be interpreted as {@link $Screen$DeferredTooltipRendering}.
     */
    export type $Screen$DeferredTooltipRendering_ = { tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_,  } | [tooltip?: $List_<$FormattedCharSequence_>, positioner?: $ClientTooltipPositioner_, ];
    export class $AccessibilityOnboardingScreen extends $Screen {
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
        constructor(options: $Options, onClose: $Runnable_);
    }
    export class $InBedChatScreen extends $ChatScreen {
        onPlayerWokeUp(): void;
        static MENU_BACKGROUND: $ResourceLocation;
        minecraft: $Minecraft;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        static CUBE_MAP: $CubeMap;
        static MOUSE_SCROLL_SPEED: number;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        narratorButton: $CycleButton<$NarratorStatus>;
        input: $EditBox;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        commandSuggestions: $CommandSuggestions;
        narratables: $List<$NarratableEntry>;
        width: number;
        static PANORAMA: $PanoramaRenderer;
        screenExecutor: $Executor;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
    }
    export class $CreditsAndAttributionScreen extends $Screen {
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
        constructor(lastScreen: $Screen);
    }
    export class $Overlay implements $Renderable {
        isPauseScreen(): boolean;
        constructor();
        get pauseScreen(): boolean;
    }
    export class $LoadingOverlay$LogoTexture extends $SimpleTexture {
        ldlib2$imageWidth: number;
        static NOT_ASSIGNED: number;
        mipmap: boolean;
        ldlib2$imageHeight: number;
        blur: boolean;
        static LOGGER: $Logger;
        location: $ResourceLocation;
        id: number;
    }
    export class $CreateFlatWorldScreen$DetailsList extends $ObjectSelectionList<$CreateFlatWorldScreen$DetailsList$Entry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $CreateFlatWorldScreen$DetailsList$Entry;
        height: number;
    }
    export class $PresetFlatWorldScreen$PresetsList extends $ObjectSelectionList<$PresetFlatWorldScreen$PresetsList$Entry> {
        minecraft: $Minecraft;
        static SCROLLER_BACKGROUND_SPRITE: $ResourceLocation;
        visible: boolean;
        itemHeight: number;
        tooltip: $WidgetTooltipHolder;
        static SCROLLBAR_WIDTH: number;
        active: boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        static SCROLLER_SPRITE: $ResourceLocation;
        alpha: number;
        centerListVertically: boolean;
        width: number;
        x: number;
        y: number;
        scrollAmount: number;
        headerHeight: number;
        hovered: $PresetFlatWorldScreen$PresetsList$Entry;
        height: number;
    }
    export class $AlertScreen extends $Screen {
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
        constructor(callback: $Runnable_, title: $Component_, text: $Component_);
        constructor(callback: $Runnable_, title: $Component_, messageText: $Component_, okButton: $Component_, shouldCloseOnEsc: boolean);
    }
    export class $Screen$NarratableSearchResult {
        entry: $NarratableEntry;
        index: number;
        priority: $NarratableEntry$NarrationPriority;
        constructor(entry: $NarratableEntry, index: number, priority: $NarratableEntry$NarrationPriority_);
    }
    export class $DeathScreen extends $Screen {
        static renderDeathBackground(guiGraphics: $GuiGraphics, width: number, height: number): void;
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
        constructor(causeOfDeath: $Component_ | null, hardcore: boolean);
    }
    export class $WinScreen extends $Screen {
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
        constructor(poem: boolean, onFinished: $Runnable_);
    }
    export class $BanNoticeScreens {
        static create(callback: $BooleanConsumer_, banDetails: $BanDetails_): $ConfirmLinkScreen;
        static createSkinBan(callback: $Runnable_): $ConfirmLinkScreen;
        static createNameBan(username: string, callback: $Runnable_): $ConfirmLinkScreen;
        static NAME_BAN_TITLE: $Component;
        constructor();
    }
}
