import { $CubeMap, $PanoramaRenderer } from "@package/net/minecraft/client/renderer";
import { $Executor } from "@package/java/util/concurrent";
import { $Language } from "@package/net/minecraft/locale";
import { $PlayerTabOverlayInvoker } from "@package/com/vladmarica/betterpingdisplay/mixin";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $GuiMessage, $OptionInstance, $GuiMessageTag, $NarratorStatus, $OptionInstance$TooltipSupplier_, $GuiMessage$Line_, $Minecraft, $GuiMessage_, $Options, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $UUID_, $Map, $OptionalInt, $UUID, $List, $Collection_, $List_, $AbstractList } from "@package/java/util";
import { $IClickableWidget } from "@package/xaero/lib/client/gui/widget";
import { $AbstractSelectionListAccessor } from "@package/dev/isxander/yacl3/mixin";
import { $OptionsSubScreen } from "@package/net/minecraft/client/gui/screens/options";
import { $FormattedCharSequence, $FormattedCharSequence_, $ArrayListDeque } from "@package/net/minecraft/util";
import { $PlayerModel } from "@package/net/minecraft/client/model";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Supplier_, $Consumer_, $Predicate_, $Predicate, $Consumer, $Function_, $BooleanSupplier, $BooleanSupplier_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $BossEvent$BossBarColor, $BossEvent, $BossEvent$BossBarOverlay_, $BossEvent$BossBarColor_, $BossEvent$BossBarOverlay } from "@package/net/minecraft/world";
import { $SoundManager, $WeighedSoundEvents, $SoundEventListener } from "@package/net/minecraft/client/sounds";
import { $Suggestion } from "@package/com/mojang/brigadier/suggestion";
import { $Tab, $TabManager } from "@package/net/minecraft/client/gui/components/tabs";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $LocalIntRef, $LocalFloatRef, $LocalRef } from "@package/com/llamalad7/mixinextras/sugar/ref";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Enum, $Iterable, $Record, $Runnable_ } from "@package/java/lang";
import { $HeaderAndFooterLayout, $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarrationElementOutput, $NarratableEntry, $NarrationSupplier } from "@package/net/minecraft/client/gui/narration";
import { $MessageSignature_, $MutableComponent, $Component_, $FormattedText, $MutableComponent_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $EntityModelSet } from "@package/net/minecraft/client/model/geom";
import { $ScreenRectangle_, $FocusNavigationEvent_, $ScreenRectangle, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $AccessorAbstractWidget } from "@package/net/darkhax/bookshelf/common/mixin/access/client/gui";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $AccessEditBox } from "@package/com/blamejared/searchables/mixin";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $PlayerSkin, $PlayerSkin_ } from "@package/net/minecraft/client/resources";
import { $ChatComponentAccess } from "@package/blusunrize/immersiveengineering/mixin/accessors/client";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener, $ContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as tabs from "@package/net/minecraft/client/gui/components/tabs";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";
export * as debugchart from "@package/net/minecraft/client/gui/components/debugchart";
export * as events from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/minecraft/client/gui/components" {
    export class $Tooltip implements $NarrationSupplier {
        static create(message: $Component_): $Tooltip;
        static create(message: $Component_, narration: $Component_ | null): $Tooltip;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        static splitTooltip(minecraft: $Minecraft, message: $Component_): $List<$FormattedCharSequence>;
        toCharSequence(minecraft: $Minecraft): $List<$FormattedCharSequence>;
        static MAX_WIDTH: number;
        narration: $Component;
        cachedTooltip: $List<$FormattedCharSequence>;
        message: $Component;
        splitWithLanguage: $Language;
        constructor(message: $Component_, narration: $Component_ | null);
    }
    export class $CommonButtons {
        static language(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        static accessibility(width: number, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton;
        constructor();
    }
    export class $WidgetTooltipHolder {
        get(): $Tooltip;
        set(tooltip: $Tooltip | null): void;
        updateNarration(output: $NarrationElementOutput): void;
        setDelay(delay: $Duration_): void;
        refreshTooltipForNextRenderPass(hovering: boolean, focused: boolean, screenRectangle: $ScreenRectangle_): void;
        createTooltipPositioner(screenRectangle: $ScreenRectangle_, hovering: boolean, focused: boolean): $ClientTooltipPositioner;
        constructor();
        set delay(value: $Duration_);
    }
    export class $PopupScreen$ButtonOption extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PopupScreen$ButtonOption}.
     */
    export type $PopupScreen$ButtonOption_ = { message?: $Component_, action?: $Consumer_<$PopupScreen>,  } | [message?: $Component_, action?: $Consumer_<$PopupScreen>, ];
    export class $MultilineTextField$StringView extends $Record {
        beginIndex(): number;
        endIndex(): number;
        static EMPTY: $MultilineTextField$StringView;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultilineTextField$StringView}.
     */
    export type $MultilineTextField$StringView_ = { endIndex?: number, beginIndex?: number,  } | [endIndex?: number, beginIndex?: number, ];
    export class $TabButton extends $AbstractWidget {
        tab(): $Tab;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isSelected(): boolean;
        renderMenuBackground(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(tabManager: $TabManager, tab: $Tab, width: number, height: number);
        get selected(): boolean;
    }
    export class $SubtitleOverlay$Subtitle {
    }
    export class $SplashRenderer {
        render(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number): void;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        static NEW_YEAR: $SplashRenderer;
        constructor(splash: string);
    }
    export class $AbstractScrollWidget extends $AbstractWidget implements $Renderable, $GuiEventListener {
        renderBackground(guiGraphics: $GuiGraphics): void;
        renderContents(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScrollAmount(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        totalInnerPadding(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        innerPadding(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getInnerHeight(): number;
        renderBorder(guiGraphics: $GuiGraphics, x: number, y: number, width: number, height: number): void;
        setScrollAmount(scrollAmount: number): void;
        renderDecorations(guiGraphics: $GuiGraphics): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        scrollbarWidth(): number;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        scrollbarVisible(): boolean;
        withinContentAreaPoint(x: number, arg1: number): boolean;
        withinContentAreaTopBottom(top: number, bottom: number): boolean;
        scrollRate(): number;
        scrollAmount(): number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get maxScrollAmount(): number;
        get innerHeight(): number;
    }
    export class $Button extends $AbstractButton {
        static builder(message: $Component_, onPress: $Button$OnPress_): $Button$Builder;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: $Button$Builder);
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, createNarration: $Button$CreateNarration_);
    }
    export class $CycleButton$Builder<T> {
        create(message: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_): $CycleButton<T>;
        create(x: number, y: number, width: number, height: number, name: $Component_, onValueChange: $CycleButton$OnValueChange_<T>): $CycleButton<T>;
        withCustomNarration(narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>): $CycleButton$Builder<T>;
        displayOnlyValue(): $CycleButton$Builder<T>;
        withValues(values: $Collection_<T>): $CycleButton$Builder<T>;
        withValues(defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withValues(...values: T[]): $CycleButton$Builder<T>;
        withValues(values: $CycleButton$ValueListSupplier<T>): $CycleButton$Builder<T>;
        withValues(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$Builder<T>;
        withInitialValue(initialValue: T): $CycleButton$Builder<T>;
        withTooltip(tooltipSupplier: $OptionInstance$TooltipSupplier_<T>): $CycleButton$Builder<T>;
        constructor(valueStringifier: $Function_<T, $Component>);
    }
    export class $Whence extends $Enum<$Whence> {
        static values(): $Whence[];
        static valueOf(arg0: string): $Whence;
        static ABSOLUTE: $Whence;
        static RELATIVE: $Whence;
        static END: $Whence;
    }
    /**
     * Values that may be interpreted as {@link $Whence}.
     */
    export type $Whence_ = "absolute" | "relative" | "end";
    export class $Button$Builder {
        size(x: number, y: number): $Button$Builder;
        bounds(x: number, y: number, width: number, height: number): $Button$Builder;
        pos(x: number, y: number): $Button$Builder;
        build(): $Button;
        build(arg0: $Function_<$Button$Builder, $Button>): $Button;
        width(width: number): $Button$Builder;
        tooltip(tooltip: $Tooltip | null): $Button$Builder;
        createNarration(createNarration: $Button$CreateNarration_): $Button$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_);
    }
    export class $MultiLineLabel {
        static create(font: $Font, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, maxRows: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, maxWidth: number, ...components: $Component_[]): $MultiLineLabel;
        static create(font: $Font, component: $Component_, maxWidth: number): $MultiLineLabel;
        static EMPTY: $MultiLineLabel;
    }
    export interface $MultiLineLabel {
        getWidth(): number;
        getLineCount(): number;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderCentered(guiGraphics: $GuiGraphics, x: number, y: number): void;
        renderLeftAligned(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): void;
        renderLeftAlignedNoShadow(guiGraphics: $GuiGraphics, x: number, y: number, lineHeight: number, color: number): number;
        get width(): number;
        get lineCount(): number;
    }
    export class $CommandSuggestions$SuggestionsList {
        cycle(change: number): void;
        mouseClicked(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseScrolled(delta: number): boolean;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        select(change: number): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        getNarrationMessage(): $Component;
        modify$bdh000$chat_heads$chatheads$renderChatHead(y: number, playerRef: $LocalRef<any>, graphicsRef: $LocalRef<any>): number;
        useSuggestion(): void;
        localvar$bdh000$chat_heads$chatheads$captureSuggestion(suggestion: $Suggestion, playerRef: $LocalRef<any>): $Suggestion;
        localvar$bdh000$chat_heads$chatheads$captureGuiGraphics(guiGraphics: $GuiGraphics, graphicsRef: $LocalRef<any>): $GuiGraphics;
        modify$bdh000$chat_heads$chatheads$enlargeBackground(x: number, playerRef: $LocalRef<any>): number;
        handler$bdh000$chat_heads$chatheads$fixOutOfBoundChatHeads(commandSuggestions: $CommandSuggestions, x: number, y: number, width: number, suggestions: $List_<any>, narrateFirstSuggestion: boolean, ci: $CallbackInfo): void;
        tabCycles: boolean;
        this$0: $CommandSuggestions;
        get narrationMessage(): $Component;
    }
    export class $LogoRenderer {
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number): void;
        renderLogo(guiGraphics: $GuiGraphics, screenWidth: number, transparency: number, height: number): void;
        static EASTER_EGG_LOGO: $ResourceLocation;
        static DEFAULT_HEIGHT_OFFSET: number;
        static LOGO_WIDTH: number;
        static LOGO_TEXTURE_WIDTH: number;
        static LOGO_HEIGHT: number;
        static MINECRAFT_LOGO: $ResourceLocation;
        static LOGO_TEXTURE_HEIGHT: number;
        static MINECRAFT_EDITION: $ResourceLocation;
        constructor(keepLogoThroughFade: boolean);
    }
    export class $Checkbox$Builder {
        pos(x: number, y: number): $Checkbox$Builder;
        build(): $Checkbox;
        tooltip(tooltip: $Tooltip): $Checkbox$Builder;
        selected(option: $OptionInstance<boolean>): $Checkbox$Builder;
        selected(selected: boolean): $Checkbox$Builder;
        maxWidth(maxWidth: number): $Checkbox$Builder;
        onValueChange(onValueChange: $Checkbox$OnValueChange_): $Checkbox$Builder;
        constructor(message: $Component_, font: $Font);
    }
    export class $PlayerTabOverlay$ScoreDisplayEntry extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerTabOverlay$ScoreDisplayEntry}.
     */
    export type $PlayerTabOverlay$ScoreDisplayEntry_ = { formattedScore?: $Component_, score?: number, name?: $Component_, scoreWidth?: number,  } | [formattedScore?: $Component_, score?: number, name?: $Component_, scoreWidth?: number, ];
    export class $ImageWidget$Texture extends $ImageWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $SpriteIconButton extends $Button {
        static builder(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean): $SpriteIconButton$Builder;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(width: number, height: number, message: $Component_, spriteWidth: number, spriteHeight: number, sprite: $ResourceLocation_, onPress: $Button$OnPress_, createNarration: $Button$CreateNarration_ | null);
    }
    export class $CycleButton$OnValueChange<T> {
    }
    export interface $CycleButton$OnValueChange<T> {
        onValueChange(cycleButton: $CycleButton<T>, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $CycleButton$OnValueChange}.
     */
    export type $CycleButton$OnValueChange_<T> = ((arg0: $CycleButton<T>, arg1: T) => void);
    export class $AbstractSelectionList<E extends $AbstractSelectionList$Entry<E>> extends $AbstractContainerWidget implements $AbstractSelectionListAccessor {
        remove(index: number): E;
        addEntry(entry: E): number;
        getEntry(index: number): E;
        nextEntry(direction: $ScreenDirection_): E;
        nextEntry(direction: $ScreenDirection_, predicate: $Predicate_<E>): E;
        nextEntry(direction: $ScreenDirection_, predicate: $Predicate_<E>, selected: E | null): E;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getItemCount(): number;
        removeEntry(entry: E): boolean;
        ensureVisible(entry: E): void;
        getScrollAmount(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowRight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowWidth(): number;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): E;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRowLeft(): number;
        /**
         * Gets the focused GUI element.
         */
        getSelected(): E;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxScroll(): number;
        getRowTop(index: number): number;
        updateSizeAndPosition(width: number, height: number, y: number): void;
        centerScrollOn(entry: E): void;
        replaceEntries(entries: $Collection_<E>): void;
        setScrollAmount(scroll: number): void;
        renderDecorations(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        scrollbarVisible(): boolean;
        enableScissor(guiGraphics: $GuiGraphics): void;
        setSelected(entry: E | null): void;
        updateSize(width: number, layout: $HeaderAndFooterLayout): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getMaxPosition(): number;
        /**
         * Gets the focused GUI element.
         */
        getHovered(): E;
        renderItem(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number, index: number, left: number, top: number, width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getDefaultScrollbarPosition(): number;
        narrateListElementPosition(narrationElementOutput: $NarrationElementOutput, entry: E): void;
        updateScrollingState(mouseX: number, arg1: number, mouseY: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getScrollbarPosition(): number;
        renderListSeparators(guiGraphics: $GuiGraphics): void;
        setClampedScrollAmount(scroll: number): void;
        renderListBackground(guiGraphics: $GuiGraphics): void;
        renderSelection(guiGraphics: $GuiGraphics, top: number, width: number, height: number, outerColor: number, innerColor: number): void;
        getEntryAtPosition(mouseX: number, arg1: number): E;
        renderHeader(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        removeEntryFromTop(entry: E): boolean;
        addEntryToTop(entry: E): void;
        clickedHeader(x: number, y: number): boolean;
        bindEntryToSelf(entry: $AbstractSelectionList$Entry<E>): void;
        clearEntries(): void;
        clampScrollAmount(): void;
        setRenderHeader(renderHeader: boolean, headerHeight: number): void;
        renderListItems(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        isSelectedItem(index: number): boolean;
        getRowBottom(index: number): number;
        isValidMouseClick(index: number): boolean;
        /**
         * Gets the focused GUI element.
         */
        getFirstElement(): E;
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
        hovered: E;
        height: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
        get itemCount(): number;
        get rowRight(): number;
        get rowWidth(): number;
        get focused(): E;
        get rowLeft(): number;
        get maxScroll(): number;
        get maxPosition(): number;
        get defaultScrollbarPosition(): number;
        get scrollbarPosition(): number;
        set clampedScrollAmount(value: number);
        get firstElement(): E;
    }
    export class $SpriteIconButton$TextAndIcon extends $SpriteIconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_ | null);
    }
    export class $AbstractContainerWidget extends $AbstractWidget implements $ContainerEventHandler {
        setDragging(arg0: boolean): void;
        setFocused(arg0: $GuiEventListener | null): void;
        isDragging(): boolean;
        getFocused(): $GuiEventListener;
        getChildAt(arg0: number, arg1: number): ($GuiEventListener) | undefined;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_);
    }
    export class $LerpingBossEvent extends $BossEvent {
        darkenScreen: boolean;
        playBossMusic: boolean;
        color: $BossEvent$BossBarColor;
        overlay: $BossEvent$BossBarOverlay;
        name: $Component;
        progress: number;
        createWorldFog: boolean;
        targetPercent: number;
        setTime: number;
        constructor(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, bossMusic: boolean, worldFog: boolean);
    }
    export class $MultilineTextField {
        value(): string;
        setValue(text: string): void;
        cursor(): number;
        getLineCount(): number;
        insertText(text: string): void;
        keyPressed(keyCode: number): boolean;
        getSelected(): $MultilineTextField$StringView;
        hasSelection(): boolean;
        getLineView(offset: number): $MultilineTextField$StringView;
        setCursorListener(cursorListener: $Runnable_): void;
        getLineAtCursor(): number;
        setSelecting(selecting: boolean): void;
        seekCursorToPoint(x: number, arg1: number): void;
        hasCharacterLimit(): boolean;
        iterateLines(): $Iterable<$MultilineTextField$StringView>;
        deleteText(length: number): void;
        setCharacterLimit(length: number): void;
        characterLimit(): number;
        setValueListener(valueListener: $Consumer_<string>): void;
        getSelectedText(): string;
        seekCursor(whence: $Whence_, position: number): void;
        getPreviousWord(): $MultilineTextField$StringView;
        seekCursorLine(length: number): void;
        getNextWord(): $MultilineTextField$StringView;
        static NO_CHARACTER_LIMIT: number;
        constructor(font: $Font, width: number);
        get lineCount(): number;
        get selected(): $MultilineTextField$StringView;
        set cursorListener(value: $Runnable_);
        get lineAtCursor(): number;
        set selecting(value: boolean);
        set valueListener(value: $Consumer_<string>);
        get selectedText(): string;
        get previousWord(): $MultilineTextField$StringView;
        get nextWord(): $MultilineTextField$StringView;
    }
    export class $ChatComponent$State {
        messages: $List<$GuiMessage>;
        history: $List<string>;
        delayedMessageDeletions: $List<$ChatComponent$DelayedMessageDeletion>;
        constructor(messages: $List_<$GuiMessage_>, history: $List_<string>, delayedMessageDeletions: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $ContainerObjectSelectionList$Entry<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $ContainerEventHandler {
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        narratables(): $List<$NarratableEntry>;
        /**
         * Sets if the GUI element is dragging or not.
         */
        setDragging(dragging: boolean): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(listener: $GuiEventListener | null): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isDragging(): boolean;
        /**
         * Gets the focused GUI element.
         */
        getFocused(): $GuiEventListener;
        focusPathAtIndex(event: $FocusNavigationEvent_, index: number): $ComponentPath;
        /**
         * Returns the first event listener that intersects with the mouse coordinates.
         */
        getChildAt(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
    }
    export class $Checkbox extends $AbstractButton {
        static builder(message: $Component_, font: $Font): $Checkbox$Builder;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        selected(): boolean;
        static getBoxSize(font: $Font): number;
        static getDefaultWidth(message: $Component_, font: $Font): number;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, maxWidth: number, message: $Component_, font: $Font, selected: boolean, onValueChange: $Checkbox$OnValueChange_);
    }
    export class $LoadingDotsWidget extends $AbstractWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(font: $Font, message: $Component_);
    }
    export class $SpriteIconButton$Builder {
        size(width: number, height: number): $SpriteIconButton$Builder;
        build(): $SpriteIconButton;
        width(width: number): $SpriteIconButton$Builder;
        narration(narration: $Button$CreateNarration_): $SpriteIconButton$Builder;
        sprite(sprite: $ResourceLocation_, spriteWidth: number, spriteHeight: number): $SpriteIconButton$Builder;
        constructor(message: $Component_, onPress: $Button$OnPress_, iconOnly: boolean);
    }
    export class $PlainTextButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, onPress: $Button$OnPress_, font: $Font);
    }
    export class $ImageWidget$Sprite extends $ImageWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $WidgetSprites extends $Record {
        get(enabled: boolean, focused: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        disabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_, enabledFocused: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_,  } | [enabledFocused?: $ResourceLocation_, enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, ];
    export class $ImageButton extends $Button {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        sprites: $WidgetSprites;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_, message: $Component_);
        constructor(x: number, y: number, width: number, height: number, sprites: $WidgetSprites_, onPress: $Button$OnPress_);
    }
    export class $ComponentRenderUtils {
        static wrapComponents(component: $FormattedText, maxWidth: number, font: $Font): $List<$FormattedCharSequence>;
        constructor();
    }
    export class $PlayerTabOverlay$HealthState {
    }
    export class $StateSwitchingButton extends $AbstractWidget {
        setStateTriggered(triggered: boolean): void;
        initTextureValues(sprites: $WidgetSprites_): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isStateTriggered(): boolean;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        sprites: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, initialState: boolean);
    }
    export class $MultiLineLabel$TextAndWidth extends $Record {
        text(): $FormattedCharSequence;
        width(): number;
        constructor(arg0: $FormattedCharSequence_, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $MultiLineLabel$TextAndWidth}.
     */
    export type $MultiLineLabel$TextAndWidth_ = { text?: $FormattedCharSequence_, width?: number,  } | [text?: $FormattedCharSequence_, width?: number, ];
    export class $PlayerSkinWidget$Model extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkinWidget$Model}.
     */
    export type $PlayerSkinWidget$Model_ = { slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>,  } | [slimModel?: $PlayerModel<never>, wideModel?: $PlayerModel<never>, ];
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { location?: $Vec3_, time?: number,  } | [location?: $Vec3_, time?: number, ];
    export class $Renderable {
    }
    export interface $Renderable {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $AccessorAbstractWidget {
        getMessage(): $Component;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        setSize(width: number, height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeight(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isFocused(): boolean;
        setAlpha(alpha: number): void;
        setTooltip(tooltip: $Tooltip | null): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, centerX: number, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, width: number, color: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHovered(): boolean;
        setMessage(message: $Component_): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        getTooltip(): $Tooltip;
        static renderScrollingString$bookshelf_$md$707fe4$0(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        static wrapDefaultNarrationMessage(message: $Component_): $MutableComponent;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRight(): number;
        playDownSound(handler: $SoundManager): void;
        setTooltipDelay(tooltipDelay: $Duration_): void;
        setRectangle(width: number, height: number, x: number, y: number): void;
        setTabOrderGroup(height: number): void;
        isValidClickButton(button: number): boolean;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        clearFGColor(): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHoveredOrFocused(): boolean;
        clicked(mouseX: number, arg1: number): boolean;
        createNarrationMessage(): $MutableComponent;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        defaultButtonNarrationText(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * @deprecated
         */
        onClick(mouseX: number, arg1: number): void;
        onDrag(mouseX: number, arg1: number, mouseY: number, arg3: number): void;
        onRelease(mouseX: number, arg1: number): void;
        setFGColor(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFGColor(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBottom(): number;
        setY(height: number): void;
        setX(height: number): void;
        setWidth(height: number): void;
        setHeight(height: number): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        setPosition(width: number, height: number): void;
        /**
         * Handles the logic for when this widget is clicked. Vanilla calls this after `AbstractWidget#mouseClicked(double, double, int)` validates that:
         * 
         * - this widget is active and visible
         * - the button can be handled by this widget
         * - the mouse is over this widget
         */
        onClick(mouseX: number, mouseY: number, button: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get hovered(): boolean;
        get right(): number;
        set tooltipDelay(value: $Duration_);
        get hoveredOrFocused(): boolean;
        get bottom(): number;
        get currentFocusPath(): $ComponentPath;
    }
    export class $Button$CreateNarration {
    }
    export interface $Button$CreateNarration {
        createNarrationMessage(messageSupplier: $Supplier_<$MutableComponent>): $MutableComponent;
    }
    /**
     * Values that may be interpreted as {@link $Button$CreateNarration}.
     */
    export type $Button$CreateNarration_ = ((arg0: $Supplier<$MutableComponent>) => $MutableComponent_);
    export class $MultiLineTextWidget$CacheKey extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $MultiLineTextWidget$CacheKey}.
     */
    export type $MultiLineTextWidget$CacheKey_ = { maxRows?: $OptionalInt, message?: $Component_, maxWidth?: number,  } | [maxRows?: $OptionalInt, message?: $Component_, maxWidth?: number, ];
    export class $DebugScreenOverlay {
        reset(): void;
        toggleOverlay(): void;
        toggleFpsCharts(): void;
        render(guiGraphics: $GuiGraphics): void;
        toggleProfilerChart(): void;
        toggleNetworkCharts(): void;
        getTickTimeLogger(): $LocalSampleLogger;
        clearChunkCache(): void;
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(frameDuration: number): void;
        getPingLogger(): $LocalSampleLogger;
        showNetworkCharts(): boolean;
        logRemoteSample(sample: number[], sampleType: $RemoteDebugSampleType_): void;
        localvar$bal000$veil$modifyGameInformation(arg0: $List_<any>): $List<any>;
        handler$edc000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        getSystemInformation(): $List<string>;
        drawSystemInformation(guiGraphics: $GuiGraphics): void;
        collectGameInformationText(): $List<string>;
        drawGameInformation(guiGraphics: $GuiGraphics): void;
        collectSystemInformationText(): $List<string>;
        localvar$hel000$sable$addDebugInfo(arg0: $List_<any>): $List<any>;
        getGameInformation(): $List<string>;
        getBandwidthLogger(): $LocalSampleLogger;
        showFpsCharts(): boolean;
        handler$ego000$fabric_renderer_api_v1$getLeftText(arg0: $CallbackInfoReturnable<any>): void;
        constructor(minecraft: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
        get systemInformation(): $List<string>;
        get gameInformation(): $List<string>;
        get bandwidthLogger(): $LocalSampleLogger;
    }
    export class $PopupScreen extends $Screen {
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
        constructor(backgroundScreen: $Screen, width: number, image: $ResourceLocation_ | null, title: $Component_, message: $Component_, buttons: $List_<$PopupScreen$ButtonOption_>, onClose: $Runnable_ | null);
    }
    export class $DebugScreenOverlay$AllocationRateCalculator {
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $AccessEditBox {
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getValue(): string;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setValue(textToWrite: string): void;
        setFilter(validator: $Predicate_<string>): void;
        setResponder(responder: $Consumer_<string>): void;
        setCanLoseFocus(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setMaxLength(num: number): void;
        setBordered(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColor(num: number): void;
        setFormatter(textFormatter: $BiFunction_<string, number, $FormattedCharSequence>): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        insertText(textToWrite: string): void;
        setHint(hint: $Component_): void;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLength(): number;
        renderHighlight(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setCursorPosition(num: number): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setSuggestion(textToWrite: string | null): void;
        /**
         * Returns the current position of the cursor.
         */
        getInnerWidth(): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteCharsToPos(num: number): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        canConsumeInput(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteWords(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setHighlightPos(num: number): void;
        moveCursorToStart(select: boolean): void;
        moveCursorTo(delta: number, select: boolean): void;
        setEditable(select: boolean): void;
        getWordPosition(delta: number): number;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getHighlighted(): string;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteChars(num: number): void;
        setTextShadow(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getTextShadow(): boolean;
        moveCursorToEnd(select: boolean): void;
        /**
         * Returns the current position of the cursor.
         */
        getCursorPosition(): number;
        setVisible(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isVisible(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColorUneditable(num: number): void;
        moveCursor(delta: number, select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isEditable(): boolean;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isBordered(): boolean;
        getScreenX(delta: number): number;
        searchables$getFilter(): $Predicate<string>;
        searchables$getResponder(): $Consumer<string>;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        responder: $Consumer<string>;
        active: boolean;
        static DEFAULT_TEXT_COLOR: number;
        textColor: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static FORWARDS: number;
        height: number;
        constructor(font: $Font, x: number, y: number, width: number, height: number, editBox: $EditBox | null, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, message: $Component_);
        constructor(font: $Font, width: number, height: number, message: $Component_);
        set filter(value: $Predicate_<string>);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
        set hint(value: $Component_);
        set suggestion(value: string | null);
        get innerWidth(): number;
        set highlightPos(value: number);
        get highlighted(): string;
        set textColorUneditable(value: number);
    }
    export class $StringWidget extends $AbstractStringWidget {
        setColor(color: number): $StringWidget;
        alignCenter(): $StringWidget;
        alignLeft(): $StringWidget;
        alignRight(): $StringWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        constructor(width: number, height: number, message: $Component_, font: $Font);
        constructor(message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $SpriteIconButton$CenteredIcon extends $SpriteIconButton {
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        spriteHeight: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        sprite: $ResourceLocation;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        spriteWidth: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(arg0: number, arg1: number, arg2: $Component_, arg3: number, arg4: number, arg5: $ResourceLocation_, arg6: $Button$OnPress_, arg7: $Button$CreateNarration_ | null);
    }
    export class $Checkbox$OnValueChange {
        static NOP: $Checkbox$OnValueChange;
    }
    export interface $Checkbox$OnValueChange {
        onValueChange(checkbox: $Checkbox, value: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $Checkbox$OnValueChange}.
     */
    export type $Checkbox$OnValueChange_ = ((arg0: $Checkbox, arg1: boolean) => void);
    export class $FocusableTextWidget extends $MultiLineTextWidget {
        containWithin(width: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(maxWidth: number, message: $Component_, font: $Font, alwaysShowBorder: boolean, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font, padding: number);
        constructor(maxWidth: number, message: $Component_, font: $Font);
    }
    export class $CycleButton<T> extends $AbstractButton {
        getValue(): T;
        static builder<T>(valueStringifier: $Function_<T, $Component>): $CycleButton$Builder<T>;
        setValue(value: T): void;
        createDefaultNarrationMessage(): $MutableComponent;
        static booleanBuilder(componentOn: $Component_, componentOff: $Component_): $CycleButton$Builder<boolean>;
        static onOffBuilder(): $CycleButton$Builder<boolean>;
        static onOffBuilder(initialValue: boolean): $CycleButton$Builder<boolean>;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        onValueChange: $CycleButton$OnValueChange<T>;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_ALT_LIST_SELECTOR: $BooleanSupplier;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, name: $Component_, index: number, value: T, values: $CycleButton$ValueListSupplier<T>, valueStringifier: $Function_<T, $Component>, narrationProvider: $Function_<$CycleButton<T>, $MutableComponent>, onValueChange: $CycleButton$OnValueChange_<T>, tooltipSupplier: $OptionInstance$TooltipSupplier_<T>, displayOnlyValue: boolean);
    }
    export class $FittingMultiLineTextWidget extends $AbstractScrollWidget {
        setColor(color: number): $FittingMultiLineTextWidget;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        showingScrollBar(): boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        set color(value: number);
    }
    export class $Button$OnPress {
    }
    export interface $Button$OnPress {
        onPress(button: $Button): void;
    }
    /**
     * Values that may be interpreted as {@link $Button$OnPress}.
     */
    export type $Button$OnPress_ = ((arg0: $Button) => void);
    export class $AbstractOptionSliderButton extends $AbstractSliderButton {
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        options: $Options;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(options: $Options, x: number, y: number, width: number, height: number, value: number);
    }
    export class $ImageWidget extends $AbstractWidget {
        static texture(width: number, height: number, texture: $ResourceLocation_, textureWidth: number, textureHeight: number): $ImageWidget;
        static sprite(width: number, height: number, sprite: $ResourceLocation_): $ImageWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number);
    }
    export class $ObjectSelectionList<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
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
        hovered: E;
        height: number;
        constructor(arg0: $Minecraft, arg1: number, arg2: number, arg3: number, arg4: number);
    }
    export class $BossHealthOverlay {
        reset(): void;
        update(packet: $ClientboundBossEventPacket): void;
        render(guiGraphics: $GuiGraphics): void;
        shouldCreateWorldFog(): boolean;
        shouldPlayMusic(): boolean;
        shouldDarkenScreen(): boolean;
        events: $Map<$UUID, $LerpingBossEvent>;
        constructor(minecraft: $Minecraft);
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(values: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $AbstractStringWidget extends $AbstractWidget {
        setColor(color: number): $AbstractStringWidget;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getColor(): number;
        getFont(): $Font;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, font: $Font);
        get font(): $Font;
    }
    export class $AbstractSelectionList$Entry<E extends $AbstractSelectionList$Entry<E>> implements $GuiEventListener {
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        render(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        renderBack(guiGraphics: $GuiGraphics, index: number, top: number, left: number, width: number, height: number, mouseX: number, mouseY: number, hovering: boolean, partialTick: number): void;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a mouse button is released within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
    export class $AbstractSelectionList$TrackedList extends $AbstractList<E> {
    }
    export class $LockIconButton$Icon extends $Enum<$LockIconButton$Icon> {
    }
    /**
     * Values that may be interpreted as {@link $LockIconButton$Icon}.
     */
    export type $LockIconButton$Icon_ = "locked" | "locked_hover" | "locked_disabled" | "unlocked" | "unlocked_hover" | "unlocked_disabled";
    export class $ContainerObjectSelectionList<E extends $ContainerObjectSelectionList$Entry<E>> extends $AbstractSelectionList<E> {
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
        hovered: E;
        height: number;
        constructor(minecraft: $Minecraft, width: number, height: number, y: number, itemHeight: number);
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { signature?: $MessageSignature_, deletableAfter?: number,  } | [signature?: $MessageSignature_, deletableAfter?: number, ];
    export class $AbstractButton extends $AbstractWidget implements $IClickableWidget {
        onPress(): void;
        setXaero_tooltip(arg0: $Supplier_<any>): void;
        getXaero_tooltip(): $Supplier<any>;
        renderString(guiGraphics: $GuiGraphics, font: $Font, color: number): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
    }
    export class $PlayerSkinWidget extends $AbstractWidget {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(width: number, height: number, model: $EntityModelSet, skin: $Supplier_<$PlayerSkin>);
    }
    export class $OptionsList$OptionEntry extends $OptionsList$Entry {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $MultiLineTextWidget extends $AbstractStringWidget {
        setColor(color: number): $MultiLineTextWidget;
        setMaxWidth(color: number): $MultiLineTextWidget;
        setMaxRows(color: number): $MultiLineTextWidget;
        setCentered(centered: boolean): $MultiLineTextWidget;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
        constructor(message: $Component_, font: $Font);
        constructor(x: number, y: number, message: $Component_, font: $Font);
        set color(value: number);
        set maxWidth(value: number);
        set maxRows(value: number);
        set centered(value: boolean);
    }
    export class $ObjectSelectionList$Entry<E extends $ObjectSelectionList$Entry<E>> extends $AbstractSelectionList$Entry<E> implements $NarrationSupplier {
        updateNarration(arg0: $NarrationElementOutput): void;
        getNarration(): $Component;
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<E>;
        constructor();
        get narration(): $Component;
    }
    export class $CommandSuggestions {
        getUsageNarration(): $Component;
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        mouseScrolled(delta: number): boolean;
        setAllowHiding(allowHiding: boolean): void;
        updateCommandInfo(): void;
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        showSuggestions(allowHiding: boolean): void;
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): void;
        hide(): void;
        getNarrationMessage(): $Component;
        setAllowSuggestions(allowHiding: boolean): void;
        static calculateSuggestionSuffix(inputText: string, suggestionText: string): string;
        isVisible(): boolean;
        renderUsage(guiGraphics: $GuiGraphics): void;
        renderSuggestions(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number): boolean;
        minecraft: $Minecraft;
        fillColor: number;
        input: $EditBox;
        keepSuggestions: boolean;
        anchorToBottom: boolean;
        lineStartOffset: number;
        suggestions: $CommandSuggestions$SuggestionsList;
        suggestionLineLimit: number;
        font: $Font;
        constructor(minecraft: $Minecraft, screen: $Screen, input: $EditBox, font: $Font, commandsOnly: boolean, onlyShowIfCursorPastError: boolean, lineStartOffset: number, suggestionLineLimit: number, anchorToBottom: boolean, fillColor: number);
        get usageNarration(): $Component;
        set allowHiding(value: boolean);
        get narrationMessage(): $Component;
        set allowSuggestions(value: boolean);
        get visible(): boolean;
    }
    export class $PopupScreen$Builder {
        build(): $PopupScreen;
        onClose(onClose: $Runnable_): $PopupScreen$Builder;
        setMessage(message: $Component_): $PopupScreen$Builder;
        addButton(message: $Component_, action: $Consumer_<$PopupScreen>): $PopupScreen$Builder;
        setWidth(width: number): $PopupScreen$Builder;
        setImage(image: $ResourceLocation_): $PopupScreen$Builder;
        constructor(backgroundScreen: $Screen, title: $Component_);
        set message(value: $Component_);
        set width(value: number);
        set image(value: $ResourceLocation_);
    }
    export class $OptionsList$Entry extends $ContainerObjectSelectionList$Entry<$OptionsList$Entry> {
        /**
         * @deprecated
         */
        list: $AbstractSelectionList<$OptionsList$Entry>;
    }
    export class $ChatComponent implements $ChatComponentAccess {
        getWidth(): number;
        static getWidth(height: number): number;
        getHeight(): number;
        static getHeight(height: number): number;
        getRecentChat(): $ArrayListDeque<string>;
        getLinesPerPage(): number;
        /**
         * Adds this string to the list of sent messages, for recall using the up/down arrow keys
         */
        addRecentChat(message: string): void;
        getMessageTagAt(mouseX: number, arg1: number): $GuiMessageTag;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        resetChatScroll(): void;
        scrollChat(posInc: number): void;
        storeState(): $ChatComponent$State;
        modify$bdd000$chat_heads$chatheads$correctClickPosition(x: number, guiMessage: $GuiMessage$Line_): number;
        handler$bdd000$chat_heads$chatheads$forgetRenderData(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo): void;
        render(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean): void;
        getScale(): number;
        addMessage(chatComponent: $Component_, headerSignature: $MessageSignature_ | null, tag: $GuiMessageTag_ | null): void;
        addMessage(chatComponent: $Component_): void;
        modify$bdd000$chat_heads$chatheads$moveText(font: $Font, formattedCharSequence: $FormattedCharSequence_, x: number, y: number, color: number, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): number;
        handler$bdd000$chat_heads$chatheads$renderChatHead(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean, ci: $CallbackInfo, guiMessage: $GuiMessage$Line_, yRef: $LocalIntRef, opacityRef: $LocalFloatRef): void;
        handleChatQueueClicked(mouseX: number, arg1: number): boolean;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        tick(): void;
        static defaultUnfocusedPct(): number;
        restoreState(state: $ChatComponent$State): void;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        rescaleChat(): void;
        /**
         * Clears the chat.
         */
        clearMessages(clearSentMsgHistory: boolean): void;
        /**
         * Returns `true` if the chat GUI is open
         */
        isChatFocused(): boolean;
        modifyExpressionValue$bdd000$chat_heads$chatheads$fixTextOverflow(original: number): number;
        deleteMessage(messageSignature: $MessageSignature_): void;
        getAllMessages(): $List<$GuiMessage>;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        invokeRefreshTrimmedMessages(): void;
        allMessages: $List<$GuiMessage>;
        constructor(minecraft: $Minecraft);
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get scale(): number;
        get chatFocused(): boolean;
    }
    export class $PlayerTabOverlay implements $PlayerTabOverlayInvoker {
        reset(): void;
        setHeader(footer: $Component_ | null): void;
        setFooter(footer: $Component_ | null): void;
        render(guiGraphics: $GuiGraphics, width: number, scoreboard: $Scoreboard, objective: $Objective | null): void;
        /**
         * Called by GuiIngame to update the information stored in the playerlist, does not actually render the list, however.
         */
        setVisible(visible: boolean): void;
        getNameForDisplay(playerInfo: $PlayerInfo): $Component;
        renderPingIcon(guiGraphics: $GuiGraphics, width: number, x: number, y: number, playerInfo: $PlayerInfo): void;
        redirect$jdm000$watut$renderPingIcon(arg0: $PlayerTabOverlay, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: $PlayerInfo): void;
        invokeRenderPingIcon(guiGraphics: $GuiGraphics, width: number, x: number, y: number, playerInfo: $PlayerInfo): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(minecraft: $Minecraft, gui: $Gui);
        set header(value: $Component_ | null);
        set footer(value: $Component_ | null);
    }
    export class $PlayerFaceRenderer {
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number, drawHat: boolean, upsideDown: boolean): void;
        static draw(guiGraphics: $GuiGraphics, atlasLocation: $ResourceLocation_, x: number, y: number, size: number): void;
        static draw(guiGraphics: $GuiGraphics, skin: $PlayerSkin_, x: number, y: number, size: number): void;
        static SKIN_HAT_WIDTH: number;
        static SKIN_HAT_HEIGHT: number;
        static SKIN_HEAD_WIDTH: number;
        static SKIN_HAT_U: number;
        static SKIN_TEX_HEIGHT: number;
        static SKIN_HEAD_HEIGHT: number;
        static SKIN_HEAD_V: number;
        static SKIN_HEAD_U: number;
        static SKIN_HAT_V: number;
        static SKIN_TEX_WIDTH: number;
        constructor();
    }
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $OptionsList extends $ContainerObjectSelectionList<$OptionsList$Entry> {
        applyUnsavedChanges(): void;
        addBig(option: $OptionInstance<never>): void;
        addSmall(leftOption: $AbstractWidget, rightOption: $AbstractWidget | null): void;
        addSmall(...options: $OptionInstance<never>[]): void;
        addSmall(options: $List_<$AbstractWidget>): void;
        findOption(option: $OptionInstance<never>): $AbstractWidget;
        getMouseOver(mouseX: number, arg1: number): ($GuiEventListener) | undefined;
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
        hovered: $OptionsList$Entry;
        height: number;
        constructor(minecraft: $Minecraft, width: number, screen: $OptionsSubScreen);
    }
    export class $SubtitleOverlay implements $SoundEventListener {
        render(guiGraphics: $GuiGraphics): void;
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $AbstractSliderButton extends $AbstractWidget {
        getHandleSprite(): $ResourceLocation;
        applyValue(): void;
        updateMessage(): void;
        getSprite(): $ResourceLocation;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        value: number;
        height: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_, value: number);
        get handleSprite(): $ResourceLocation;
        get sprite(): $ResourceLocation;
    }
    export class $LockIconButton extends $Button {
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isLocked(): boolean;
        setLocked(locked: boolean): void;
        static SPRITES: $WidgetSprites;
        visible: boolean;
        createNarration: $Button$CreateNarration;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        static DEFAULT_WIDTH: number;
        static TEXT_MARGIN: number;
        packedFGColor: number;
        static DEFAULT_NARRATION: $Button$CreateNarration;
        static UNSET_FG_COLOR: number;
        static DEFAULT_HEIGHT: number;
        static SMALL_WIDTH: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        static BIG_WIDTH: number;
        static DEFAULT_SPACING: number;
        height: number;
        constructor(x: number, y: number, onPress: $Button$OnPress_);
    }
    export class $MultiLineEditBox extends $AbstractScrollWidget {
        getValue(): string;
        setValue(fullText: string): void;
        setCharacterLimit(characterLimit: number): void;
        setValueListener(valueListener: $Consumer_<string>): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        textField: $MultilineTextField;
        height: number;
        constructor(font: $Font, x: number, y: number, width: number, height: number, placeholder: $Component_, message: $Component_);
        set characterLimit(value: number);
        set valueListener(value: $Consumer_<string>);
    }
}
