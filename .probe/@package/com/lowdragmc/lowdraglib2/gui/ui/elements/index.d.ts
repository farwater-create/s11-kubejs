import { $HistoryStack } from "@package/com/lowdragmc/lowdraglib2/utils";
import { $Codec } from "@package/com/mojang/serialization";
import { $ConfigNumber$Type } from "@package/com/lowdragmc/lowdraglib2/configurator/annotation";
import { $GUIContext } from "@package/com/lowdragmc/lowdraglib2/gui/ui/rendering";
import { $Tag_, $Tag, $LongArrayTag, $ListTag_, $ByteArrayTag, $IntArrayTag, $CompoundTag, $ListTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $IGuiTexture_, $IGuiTexture } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ISearch, $IResultHandler_ } from "@package/com/lowdragmc/lowdraglib2/utils/search";
import { $ISceneBlockRenderHook, $ParticleManager, $WorldSceneRenderer } from "@package/com/lowdragmc/lowdraglib2/client/scene";
import { $Set_, $Map, $Set, $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $Size } from "@package/com/lowdragmc/lowdraglib2/math";
import { $StringConfigurator, $Configurator, $ConfiguratorGroup } from "@package/com/lowdragmc/lowdraglib2/configurator/ui";
import { $FormattedCharSequence, $Tuple } from "@package/net/minecraft/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Consumer_, $Predicate_, $Function, $Predicate, $BiConsumer, $BiConsumer_, $Function_, $IntConsumer_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $HolderLookup$Provider, $Direction } from "@package/net/minecraft/core";
import { $IngredientIO_ } from "@package/com/lowdragmc/lowdraglib2/integration/xei";
import { $IPersistedSerializable, $ISubscription } from "@package/com/lowdragmc/lowdraglib2/syncdata";
import { $UIEventListener_, $UIEvent } from "@package/com/lowdragmc/lowdraglib2/gui/ui/event";
import { $Style, $ModularUI, $UITemplate, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $BooleanConsumer_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $Enum, $Record, $Class, $Runnable_, $Object } from "@package/java/lang";
import { $TaffyDimension } from "@package/dev/vfyjxf/taffy/style";
import { $IResourcePath } from "@package/com/lowdragmc/lowdraglib2/editor/resource";
import { $StyleSizeLength } from "@package/org/appliedenergistics/yoga/style";
import { $File_, $File } from "@package/java/io";
import { $ClipContext$Fluid_, $ClipContext$Fluid, $ClipContext$Block_, $Level, $ClipContext$Block } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $BiMap } from "@package/com/google/common/collect";
import { $ITreeNode, $FileNode } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $Cursor, $FillDirection, $FillDirection_, $TextWrap_, $ScrollerMode_, $Vertical, $ScrollerMode, $Horizontal, $Cursor_, $ScrollDisplay, $TextWrap, $ScrollDisplay_, $Horizontal_, $Vertical_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/data";
import { $IConfigurable, $IConfigurableHistory } from "@package/com/lowdragmc/lowdraglib2/configurator";
import { $IHistoryStack, $UIElementProvider, $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $FloatConsumer_ } from "@package/it/unimi/dsi/fastutil/floats";
import { $Stream } from "@package/java/util/stream";
import { $IBinding, $IObservable, $IDataProvider, $IDataConsumer, $IObserver_, $IObserver, $IBindable } from "@package/com/lowdragmc/lowdraglib2/gui/sync/bindings";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $TrackedDummyWorld } from "@package/com/lowdragmc/lowdraglib2/utils/virtuallevel";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Font } from "@package/net/minecraft/client/gui";
import { $BlockPosFace, $BlockPosFace_ } from "@package/com/lowdragmc/lowdraglib2/utils/data";
import { $Vector3f } from "@package/org/joml";
export * as inventory from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/inventory";
export * as codeeditor from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements/codeeditor";

declare module "@package/com/lowdragmc/lowdraglib2/gui/ui/elements" {
    export class $SearchComponent$ISearchUI$Empty<T> implements $SearchComponent$ISearchUI<T> {
        search(arg0: string, arg1: $IResultHandler_<T>): void;
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
        constructor();
    }
    export class $TreeList$DropMode extends $Enum<$TreeList$DropMode> {
        static values(): $TreeList$DropMode[];
        static valueOf(arg0: string): $TreeList$DropMode;
        static BEFORE: $TreeList$DropMode;
        static INTO: $TreeList$DropMode;
        static AFTER: $TreeList$DropMode;
    }
    /**
     * Values that may be interpreted as {@link $TreeList$DropMode}.
     */
    export type $TreeList$DropMode_ = "before" | "into" | "after";
    export class $Selector$SelectorStyle extends $Style {
        static init(): void;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $Selector$SelectorStyle;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $Selector$SelectorStyle;
        closeAfterSelect(): boolean;
        closeAfterSelect(arg0: boolean): $Selector$SelectorStyle;
        maxItemCount(): number;
        maxItemCount(arg0: number): $Selector$SelectorStyle;
        scrollerViewHeight(): number;
        scrollerViewHeight(arg0: number): $Selector$SelectorStyle;
        holder: $UIElement;
    }
    export class $TextField extends $BindableUIElement<string> {
        getValue(): string;
        setValue(arg0: string, arg1: boolean): $TextField;
        isError(): boolean;
        setText(arg0: string, arg1: boolean): $TextField;
        setText(arg0: string): $TextField;
        setFormatter(arg0: $Function_<string, $Component>): $TextField;
        getFormatter(): $Function<string, $Component>;
        setNumbersOnlyFloat(arg0: number, arg1: number): $TextField;
        getCursorUnderMouseX(arg0: number): number;
        setNumbersOnlyShort(arg0: number, arg1: number): $TextField;
        setNumbersOnlyDouble(arg0: number, arg1: number): $TextField;
        setTextRegexValidator(arg0: string): $TextField;
        insertText(arg0: string): void;
        getMode(): $TextField$Mode;
        getRawText(): string;
        getText(): string;
        setResourceLocationOnly(): $TextField;
        setCharValidator(arg0: $Predicate_<string>): $TextField;
        getHistoryStack(): $HistoryStack<string>;
        setCompoundTagOnly(): $TextField;
        setNumbersOnlyByte(arg0: number, arg1: number): $TextField;
        getFormattedLine(): $Tuple<$FormattedCharSequence, number>;
        textFieldStyle(arg0: $Consumer_<$TextField$TextFieldStyle>): $TextField;
        getStyledLine(): $Component;
        setWheelDur(arg0: number): $TextField;
        setWheelDur(arg0: number, arg1: number): $TextField;
        setNumbersOnlyLong(arg0: number, arg1: number): $TextField;
        setNumbersOnlyInt(arg0: number, arg1: number): $TextField;
        setAnyString(): $TextField;
        getTextFieldStyle(): $TextField$TextFieldStyle;
        getWheelDur(): number;
        getSelectionStart(): number;
        getSelectionEnd(): number;
        getDisplayOffset(): number;
        deleteCharsToPos(arg0: number): void;
        deleteWords(arg0: number): void;
        getWordPosition(arg0: number): number;
        getHighlighted(): string;
        deleteChars(arg0: number): void;
        isEditable(): boolean;
        setTextValidator(arg0: $Predicate_<string>): $TextField;
        setTextResponder(arg0: $Consumer_<string>): $TextField;
        getCursorPos(): number;
        setSelection(arg0: number, arg1: number): void;
        setCursor(arg0: number): void;
        getFont(): $Font;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        set textRegexValidator(value: string);
        get mode(): $TextField$Mode;
        get rawText(): string;
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<string>;
        get formattedLine(): $Tuple<$FormattedCharSequence, number>;
        get styledLine(): $Component;
        get selectionStart(): number;
        get selectionEnd(): number;
        get displayOffset(): number;
        get highlighted(): string;
        get editable(): boolean;
        set textValidator(value: $Predicate_<string>);
        set textResponder(value: $Consumer_<string>);
        get cursorPos(): number;
        set cursor(value: number);
        get font(): $Font;
    }
    export class $GraphView extends $UIElement {
        getOffsetX(): number;
        getOffsetY(): number;
        getScale(): number;
        fit(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
        clearAllContentChildren(): $GraphView;
        setOffsetX(arg0: number): void;
        setOffsetY(arg0: number): void;
        fitToChildren(arg0: number, arg1: number): void;
        addContentChild(arg0: $UIElement): $GraphView;
        getGraphViewStyle(): $GraphView$GraphViewStyle;
        removeContentChild(arg0: $UIElement): $GraphView;
        contentRoot(arg0: $Consumer_<$UIElement>): $UIElement;
        graphViewStyle(arg0: $Consumer_<$GraphView$GraphViewStyle>): $GraphView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scale(): number;
    }
    export class $Scroller$ScrollerStyle extends $Style {
        static init(): void;
        scrollDelta(arg0: number): $Scroller$ScrollerStyle;
        scrollDelta(): number;
        scrollBarSize(): number;
        scrollBarSize(arg0: number): $Scroller$ScrollerStyle;
        holder: $UIElement;
        constructor(arg0: $Scroller);
    }
    export class $FluidSlot$SlotStyle extends $Style {
        showFluidTooltips(arg0: boolean): $FluidSlot$SlotStyle;
        showFluidTooltips(): boolean;
        showSlotOverlayOnlyEmpty(): boolean;
        showSlotOverlayOnlyEmpty(arg0: boolean): $FluidSlot$SlotStyle;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $FluidSlot$SlotStyle;
        slotOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        slotOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $FluidSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $FluidSlot);
    }
    export class $Tab extends $UIElement {
        getContent(): $UIElement;
        setText(arg0: string): $Tab;
        setText(arg0: string, arg1: boolean): $Tab;
        setText(arg0: $Component_): $Tab;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Tab;
        setSelected(arg0: boolean): void;
        tabStyle(arg0: $Consumer_<$Tab$TabStyle>): $Tab;
        getTabView(): $TabView;
        getTabStyle(): $Tab$TabStyle;
        setDynamicText(arg0: $Supplier_<$Component>): $Tab;
        setOnTabUnselected(arg0: $Runnable_): $Tab;
        setOnTabSelected(arg0: $Runnable_): $Tab;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $Label;
        constructor();
        get content(): $UIElement;
        set selected(value: boolean);
        get tabView(): $TabView;
        set dynamicText(value: $Supplier_<$Component>);
        set onTabUnselected(value: $Runnable_);
        set onTabSelected(value: $Runnable_);
    }
    export class $TextField$TextFieldStyle extends $Style {
        static init(): void;
        placeholder(): $Component;
        placeholder(arg0: $Component_): $TextField$TextFieldStyle;
        textShadow(arg0: boolean): $TextField$TextFieldStyle;
        textShadow(): boolean;
        font(arg0: $ResourceLocation_): $TextField$TextFieldStyle;
        font(): $ResourceLocation;
        fontSize(arg0: number): $TextField$TextFieldStyle;
        fontSize(): number;
        textColor(arg0: number): $TextField$TextFieldStyle;
        textColor(): number;
        errorColor(arg0: number): $TextField$TextFieldStyle;
        errorColor(): number;
        cursorColor(arg0: number): $TextField$TextFieldStyle;
        cursorColor(): number;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $TextField$TextFieldStyle;
        holder: $UIElement;
        constructor(arg0: $TextField);
    }
    export class $Button$ButtonStyle extends $Style {
        hoverTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        hoverTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        baseTexture(): $IGuiTexture;
        pressedTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Button$ButtonStyle;
        holder: $UIElement;
        constructor(arg0: $Button);
    }
    export class $Scroller$Horizontal extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Button$State extends $Enum<$Button$State> {
        static values(): $Button$State[];
        static valueOf(arg0: string): $Button$State;
        static PRESSED: $Button$State;
        static HOVERED: $Button$State;
        static DEFAULT: $Button$State;
    }
    /**
     * Values that may be interpreted as {@link $Button$State}.
     */
    export type $Button$State_ = "default" | "hovered" | "pressed";
    export class $Toggle$ToggleStyle extends $Style {
        static init(): void;
        unmarkTexture(): $IGuiTexture;
        unmarkTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        markTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        baseTexture(arg0: $IGuiTexture_): $Toggle$ToggleStyle;
        holder: $UIElement;
        constructor(arg0: $Toggle);
    }
    export class $ScrollerView extends $UIElement {
        horizontalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        verticalScroller(arg0: $Consumer_<$Scroller>): $ScrollerView;
        viewPort(arg0: $Consumer_<$UIElement>): $ScrollerView;
        clearAllScrollViewChildren(): void;
        addScrollViewChildAt(arg0: $UIElement, arg1: number): $ScrollerView;
        scrollToChildDelayed(arg0: $UIElement): void;
        removeScrollViewChild(arg0: $UIElement): boolean;
        getScrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        addScrollViewChildren(...arg0: $UIElement[]): $ScrollerView;
        getContainerHeight(): number;
        verticalContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        hasScrollViewChild(arg0: $UIElement): boolean;
        scrollToChild(arg0: $UIElement): boolean;
        getContainerWidth(): number;
        scrollerStyle(arg0: $Consumer_<$ScrollerView$ScrollerViewStyle>): $ScrollerView;
        viewContainer(arg0: $Consumer_<$UIElement>): $ScrollerView;
        addScrollViewChild(arg0: $UIElement): $ScrollerView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get scrollerViewStyle(): $ScrollerView$ScrollerViewStyle;
        get containerHeight(): number;
        get containerWidth(): number;
    }
    export class $SearchComponent$SearchStyle extends $Style {
        static init(): void;
        showOverlay(): boolean;
        showOverlay(arg0: boolean): $SearchComponent$SearchStyle;
        focusOverlay(): $IGuiTexture;
        focusOverlay(arg0: $IGuiTexture_): $SearchComponent$SearchStyle;
        closeAfterSelect(): boolean;
        closeAfterSelect(arg0: boolean): $SearchComponent$SearchStyle;
        maxItemCount(): number;
        maxItemCount(arg0: number): $SearchComponent$SearchStyle;
        scrollerViewHeight(): number;
        scrollerViewHeight(arg0: number): $SearchComponent$SearchStyle;
        holder: $UIElement;
    }
    export class $Scroller extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $Scroller;
        setValue(arg0: number): $Scroller;
        isDragging(): boolean;
        setOnValueChanged(arg0: $FloatConsumer_): $Scroller;
        setScrollBarSize(arg0: number): $Scroller;
        getMinValue(): number;
        getMaxValue(): number;
        scrollBar(arg0: $Consumer_<$Button>): $Scroller;
        setClampNormalizedValue(arg0: $Function_<number, number>): $Scroller;
        setRange(arg0: number, arg1: number): $Scroller;
        getClampNormalizedValue(): $Function<number, number>;
        setNormalizedValue(arg0: number, arg1: boolean): $Scroller;
        setNormalizedValue(arg0: number): $Scroller;
        scrollerStyle(arg0: $Consumer_<$Scroller$ScrollerStyle>): $Scroller;
        getNormalizedValue(): number;
        headButton(arg0: $Consumer_<$Button>): $Scroller;
        tailButton(arg0: $Consumer_<$Button>): $Scroller;
        setMaxValue(arg0: number): $Scroller;
        setMinValue(arg0: number): $Scroller;
        getScrollerStyle(): $Scroller$ScrollerStyle;
        scrollContainer(arg0: $Consumer_<$UIElement>): $Scroller;
        scrollValue(arg0: number): void;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get dragging(): boolean;
        set onValueChanged(value: $FloatConsumer_);
        set scrollBarSize(value: number);
    }
    export class $ToggleGroupElement extends $UIElement {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        toggleGroup: $Toggle$ToggleGroup;
        constructor();
    }
    export class $BindableUIElement<T> extends $UIElement implements $IBindable<T>, $IObservable<T>, $IDataConsumer<T> {
        getValue(): T;
        setValue(arg0: T): $BindableUIElement<T>;
        setValue(arg0: T, arg1: boolean): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        bindDataSource(arg0: $IDataProvider<T>, arg1: boolean): $BindableUIElement<T>;
        unbindDataSource(arg0: $IDataProvider<T>): $BindableUIElement<T>;
        unbindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        getBoundObservers(): $Collection<$IObserver<T>>;
        bindObserver(arg0: $IObserver_<T>): $BindableUIElement<T>;
        registerValueListener(arg0: $Consumer_<T>): $ISubscription;
        getBoundDataSources(): $Collection<$IDataProvider<T>>;
        bind(arg0: $IBinding<T>): $UIElement;
        unbind(arg0: $IBinding<T>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get boundObservers(): $Collection<$IObserver<T>>;
        get boundDataSources(): $Collection<$IDataProvider<T>>;
    }
    export class $ItemSlot extends $BindableUIElement<$ItemStack> {
        getSlot(): $Slot;
        getValue(): $ItemStack;
        setValue(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        bind(arg0: $IItemHandlerModifiable, arg1: number): $ItemSlot;
        bind(arg0: $Slot): $ItemSlot;
        xeiPhantom(): $ItemSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_): $ItemSlot;
        slotStyle(arg0: $Consumer_<$ItemSlot$SlotStyle>): $ItemSlot;
        updateSlotPosition(): void;
        xeiRecipeSlot(): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$ItemStack>>): $ItemSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $ItemSlot;
        getSlotStyle(): $ItemSlot$SlotStyle;
        setItem(arg0: $ItemStack_, arg1: boolean): $ItemSlot;
        setItem(arg0: $ItemStack_): $ItemSlot;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        static DRAGGING_BG: $IGuiTexture;
        static ITEM_SLOT_TEXTURE: $IGuiTexture;
        constructor();
        constructor(arg0: $Slot);
        get slot(): $Slot;
        get fullTooltipTexts(): $List<$Component>;
    }
    export class $VirtualItemHeightMode extends $Enum<$VirtualItemHeightMode> {
        static values(): $VirtualItemHeightMode[];
        static valueOf(arg0: string): $VirtualItemHeightMode;
        static VARIABLE: $VirtualItemHeightMode;
        static FIXED: $VirtualItemHeightMode;
    }
    /**
     * Values that may be interpreted as {@link $VirtualItemHeightMode}.
     */
    export type $VirtualItemHeightMode_ = "fixed" | "variable";
    export class $SearchComponent$ISearchUI<T> {
        static empty<T>(): $SearchComponent$ISearchUI<T>;
        static EMPTY: $SearchComponent$ISearchUI$Empty<any>;
    }
    export interface $SearchComponent$ISearchUI<T> extends $ISearch<T> {
        resultText(arg0: T): string;
        onResultSelected(arg0: T): void;
    }
    export class $Tab$TabStyle extends $Style {
        hoverTexture(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        baseTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(arg0: $IGuiTexture_): $Tab$TabStyle;
        selectedTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Tab);
    }
    export class $Label extends $TextElement implements $IBindable<$Component>, $IDataConsumer<$Component> {
        getValue(): $Component;
        setValue(arg0: $Component_): $Label;
        bindDataSource(arg0: $IDataProvider<$Component_>): $Label;
        unbindDataSource(arg0: $IDataProvider<$Component_>): $Label;
        getBoundDataSources(): $Collection<$IDataProvider<$Component>>;
        bind(arg0: $IBinding<$Component_>): $UIElement;
        unbind(arg0: $IBinding<$Component_>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<$Component>>;
    }
    export class $TextArea$History extends $Record {
        lines(): string[];
        cursor(): $Cursor;
        constructor(lines: string[], cursor: $Cursor_);
    }
    /**
     * Values that may be interpreted as {@link $TextArea$History}.
     */
    export type $TextArea$History_ = { lines?: string[], cursor?: $Cursor_,  } | [lines?: string[], cursor?: $Cursor_, ];
    export class $TreeList<NODE extends $ITreeNode<never, never>> extends $UIElement {
        getRoot(): NODE;
        getNodeUIs(): $BiMap<NODE, $UIElement>;
        menuStyle(arg0: $Consumer_<$TreeList$TreeListStyle>): $TreeList<NODE>;
        setRoot(arg0: NODE): $TreeList<NODE>;
        getSelected(): $Set<NODE>;
        expandNodeAlongPath(arg0: NODE): void;
        static optionalIconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        setSelectableNodeFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        setClickToExpandFilter(arg0: $Predicate_<NODE>): $TreeList<NODE>;
        static createDraggingOverlay(arg0: $TreeList$DropMode_, arg1: boolean): $IGuiTexture;
        static createDraggingOverlay(arg0: number): $IGuiTexture;
        setOnSelectedChanged(arg0: $Consumer_<$Set<NODE>>): $TreeList<NODE>;
        setRightClickToExpand(arg0: boolean): $TreeList<NODE>;
        setOnDoubleClickNode(arg0: $Consumer_<NODE>): $TreeList<NODE>;
        static isMouseOverNodeAbove(arg0: $UIEvent): boolean;
        static isMouseOverNodeBelow(arg0: $UIEvent): boolean;
        setDoubleClickToExpand(arg0: boolean): $TreeList<NODE>;
        static isMouseOverNodeCenter(arg0: $UIEvent): boolean;
        setWidthFitsContent(arg0: boolean): $TreeList<NODE>;
        setReorderValidator(arg0: $Predicate_<$TreeList$ReorderRequest<NODE>>): $TreeList<NODE>;
        setDragPayloadFactory(arg0: $Function_<NODE, $Object>): $TreeList<NODE>;
        setSelected(arg0: $Collection_<NODE>, arg1: boolean): $TreeList<NODE>;
        setSupportMultipleSelection(arg0: boolean): $TreeList<NODE>;
        expandNode(arg0: NODE): void;
        reloadList(): $TreeList<NODE>;
        toggleNodeExpanded(arg0: NODE): void;
        setStaticTree(arg0: boolean): $TreeList<NODE>;
        createNodeUI(arg0: NODE): $UIElement;
        removeSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        isNodeExpanded(arg0: NODE): boolean;
        expandsOnClick(arg0: NODE): boolean;
        expandAllNodesIf(arg0: NODE, arg1: $Predicate_<NODE>): void;
        static textTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        collapseNode(arg0: NODE): void;
        setFlattenRoot(arg0: boolean): $TreeList<NODE>;
        isNodeSelected(arg0: NODE): boolean;
        setOnReorder(arg0: $Consumer_<$TreeList$ReorderRequest<NODE>>): $TreeList<NODE>;
        getHoveredNode(): NODE;
        isWidthFitsContent(): boolean;
        addSelected(arg0: NODE, arg1: boolean): $TreeList<NODE>;
        setNodeUISupplier(arg0: $UIElementProvider_<NODE>): $TreeList<NODE>;
        getTreeListStyle(): $TreeList$TreeListStyle;
        setClickToExpand(arg0: boolean): $TreeList<NODE>;
        setOnNodeUICreated(arg0: $BiConsumer_<NODE, $UIElement>): $TreeList<NODE>;
        static iconTextTemplate<NODE extends $ITreeNode<never, never>>(arg0: $Function_<NODE, $IGuiTexture>, arg1: $Function_<NODE, $Component>): $UIElementProvider<NODE>;
        getExpandedNodes(): $Set<NODE>;
        setDraggable(arg0: boolean): $TreeList<NODE>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: NODE, arg1: boolean);
        constructor(arg0: NODE);
        constructor();
        get nodeUIs(): $BiMap<NODE, $UIElement>;
        set selectableNodeFilter(value: $Predicate_<NODE>);
        set clickToExpandFilter(value: $Predicate_<NODE>);
        set onSelectedChanged(value: $Consumer_<$Set<NODE>>);
        set rightClickToExpand(value: boolean);
        set onDoubleClickNode(value: $Consumer_<NODE>);
        set doubleClickToExpand(value: boolean);
        set reorderValidator(value: $Predicate_<$TreeList$ReorderRequest<NODE>>);
        set dragPayloadFactory(value: $Function_<NODE, $Object>);
        set supportMultipleSelection(value: boolean);
        set staticTree(value: boolean);
        set flattenRoot(value: boolean);
        set onReorder(value: $Consumer_<$TreeList$ReorderRequest<NODE>>);
        get hoveredNode(): NODE;
        set nodeUISupplier(value: $UIElementProvider_<NODE>);
        get treeListStyle(): $TreeList$TreeListStyle;
        set clickToExpand(value: boolean);
        set onNodeUICreated(value: $BiConsumer_<NODE, $UIElement>);
        get expandedNodes(): $Set<NODE>;
        set draggable(value: boolean);
    }
    export class $TextArea extends $BindableUIElement<string[]> {
        scale(): number;
        getValue(): string[];
        setValue(arg0: string[]): $TextArea;
        setValue(arg0: string[], arg1: boolean): $TextArea;
        isError(): boolean;
        textAreaStyle(arg0: $Consumer_<$TextArea$TextAreaStyle>): $TextArea;
        getLines(): $List<string>;
        getCursorUnderMouse(arg0: number, arg1: number): $Cursor;
        collapseSelectionToCursor(): void;
        getSelStartCol(): number;
        setCharValidator(arg0: $Predicate_<string>): $TextArea;
        getHistoryStack(): $HistoryStack<$TextArea$History>;
        getSelEndCol(): number;
        hasSelection(): boolean;
        getScrollX(): number;
        getScrollY(): number;
        isEditable(): boolean;
        cursorPos(): $Cursor;
        lineHeight(): number;
        setTextValidator(arg0: $Predicate_<string[]>): $TextArea;
        drawContentView(arg0: $GUIContext): void;
        getCursorLine(): number;
        getTextAreaStyle(): $TextArea$TextAreaStyle;
        getSelStartLine(): number;
        getSelEndLine(): number;
        getCursorCol(): number;
        setLines(arg0: $List_<string>): $TextArea;
        setLines(arg0: string[], arg1: boolean): $TextArea;
        pushHistory(): void;
        setLinesResponder(arg0: $Consumer_<string[]>): $TextArea;
        setSelection(arg0: $Cursor_, arg1: $Cursor_): void;
        setCursor(arg0: number, arg1: number): void;
        getFont(): $Font;
        contentView: $UIElement;
        verticalScroller: $Scroller;
        static CODEC: $Codec<$UIElement>;
        horizontalScroller: $Scroller;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get error(): boolean;
        get selStartCol(): number;
        set charValidator(value: $Predicate_<string>);
        get historyStack(): $HistoryStack<$TextArea$History>;
        get selEndCol(): number;
        get scrollX(): number;
        get scrollY(): number;
        get editable(): boolean;
        set textValidator(value: $Predicate_<string[]>);
        get cursorLine(): number;
        get selStartLine(): number;
        get selEndLine(): number;
        get cursorCol(): number;
        set linesResponder(value: $Consumer_<string[]>);
        get font(): $Font;
    }
    export class $Switch$SwitchStyle extends $Style {
        static init(): void;
        unmarkTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        unmarkTexture(): $IGuiTexture;
        markTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        markTexture(): $IGuiTexture;
        baseTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        baseTexture(): $IGuiTexture;
        pressedTexture(arg0: $IGuiTexture_): $Switch$SwitchStyle;
        pressedTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Switch);
    }
    export class $TreeList$TreeListStyle extends $Style {
        expandIcon(): $IGuiTexture;
        expandIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        collapseIcon(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        collapseIcon(): $IGuiTexture;
        hoverTexture(arg0: $IGuiTexture_): $TreeList$TreeListStyle;
        hoverTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $TreeList<any>);
    }
    export class $SearchComponent<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $SearchComponent<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $SearchComponent<T>;
        hide(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $SearchComponent<T>;
        setSelected(arg0: T, arg1: boolean): $SearchComponent<T>;
        setSelected(arg0: T): $SearchComponent<T>;
        show(): void;
        searchStyle(arg0: $Consumer_<$SearchComponent$SearchStyle>): $SearchComponent<T>;
        setSearchUI(arg0: $SearchComponent$ISearchUI<T>): $SearchComponent<T>;
        getSearchStyle(): $SearchComponent$SearchStyle;
        setSearchOnServer(arg0: $Class<T[]>): $SearchComponent<T>;
        isSearchOnServer(): boolean;
        getSearchUI(): $SearchComponent$ISearchUI<T>;
        preview: $UIElement;
        dialog: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        scrollerView: $VirtualScrollerView<T>;
        textField: $TextField;
        constructor(arg0: $SearchComponent$ISearchUI<T>);
        constructor();
        get open(): boolean;
        set onValueChanged(value: $Consumer_<T>);
        set candidateUIProvider(value: $UIElementProvider_<T>);
    }
    export class $FluidSlot extends $BindableUIElement<$FluidStack> {
        getValue(): $FluidStack;
        setValue(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        bind(arg0: $IFluidHandler, arg1: number): $FluidSlot;
        getCapacity(): number;
        getFluid(): $FluidStack;
        isAllowClickFilled(): boolean;
        getFluidAmountText(): $Component;
        setCapacity(arg0: number): $FluidSlot;
        xeiPhantom(): $FluidSlot;
        setAllowClickFilled(arg0: boolean): $FluidSlot;
        isAllowClickDrained(): boolean;
        setAllowClickDrained(arg0: boolean): $FluidSlot;
        getFullTooltipTexts(): $List<$Component>;
        xeiRecipeIngredient(arg0: $IngredientIO_): $FluidSlot;
        xeiRecipeIngredient(arg0: $IngredientIO_, arg1: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        slotStyle(arg0: $Consumer_<$FluidSlot$SlotStyle>): $FluidSlot;
        setFluid(arg0: $FluidStack_): $FluidSlot;
        setFluid(arg0: $FluidStack_, arg1: boolean): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number): $FluidSlot;
        xeiRecipeSlot(arg0: $IngredientIO_, arg1: number, arg2: number, arg3: $Supplier_<$Stream<$FluidStack>>): $FluidSlot;
        xeiRecipeSlot(): $FluidSlot;
        getSlotStyle(): $FluidSlot$SlotStyle;
        amountLabel: $Label;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get fluidAmountText(): $Component;
        get fullTooltipTexts(): $List<$Component>;
    }
    export class $VirtualScrollerView<T> extends $ScrollerView {
        getItemCount(): number;
        setItems(arg0: $List_<$CompoundTag_>): $VirtualScrollerView<$CompoundTag>;
        getTotalVirtualHeight(): number;
        getLastMountedIndex(): number;
        refreshVisibleItems(arg0: number, arg1: number): void;
        refreshVisibleItems(): void;
        setBeforeMountItems(arg0: $Runnable_): $VirtualScrollerView<$CompoundTag>;
        getFirstMountedIndex(): number;
        getMountedItemCount(): number;
        virtualScrollerViewStyle(arg0: $Consumer_<$VirtualScrollerView$VirtualScrollerViewStyle>): $VirtualScrollerView<$CompoundTag>;
        updateMeasuredItemHeight(arg0: number, arg1: number): boolean;
        getVirtualScrollerViewStyle(): $VirtualScrollerView$VirtualScrollerViewStyle;
        scrollToTop(): void;
        setItemUIProvider(arg0: $UIElementProvider_<$CompoundTag>): $VirtualScrollerView<$CompoundTag>;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get itemCount(): number;
        set items(value: $List_<$CompoundTag_>);
        get totalVirtualHeight(): number;
        get lastMountedIndex(): number;
        set beforeMountItems(value: $Runnable_);
        get firstMountedIndex(): number;
        get mountedItemCount(): number;
        set itemUIProvider(value: $UIElementProvider_<$CompoundTag>);
    }
    export class $TagField extends $BindableUIElement<$Tag> {
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $TagField;
        setCompoundTagOnly(): $TagField;
        setAny(): $TagField;
        setListOnly(): $TagField;
        setTagResponder(arg0: $Consumer_<$Tag>): $TagField;
        setTagValidator(arg0: $Predicate_<$Tag>): $TagField;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        editButton: $Button;
        textField: $TextField;
        constructor();
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
    }
    export class $Button extends $UIElement {
        getState(): $Button$State;
        setText(arg0: string, arg1: boolean): $Button;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $Button;
        setText(arg0: $Component_): $Button;
        setOnClick(arg0: $UIEventListener_): $Button;
        noText(): $Button;
        enableText(): $Button;
        addPreIcon(arg0: $IGuiTexture_): $Button;
        getButtonStyle(): $Button$ButtonStyle;
        addPostIcon(arg0: $IGuiTexture_): $Button;
        setOnServerClick(arg0: $UIEventListener_): $Button;
        buttonStyle(arg0: $Consumer_<$Button$ButtonStyle>): $Button;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        text: $TextElement;
        constructor();
        get state(): $Button$State;
        set onClick(value: $UIEventListener_);
        set onServerClick(value: $UIEventListener_);
    }
    export class $GraphView$GraphViewStyle extends $Style {
        allowPan(arg0: boolean): $GraphView$GraphViewStyle;
        allowPan(): boolean;
        allowZoom(arg0: boolean): $GraphView$GraphViewStyle;
        allowZoom(): boolean;
        gridSize(): number;
        gridSize(arg0: number): $GraphView$GraphViewStyle;
        minScale(arg0: number): $GraphView$GraphViewStyle;
        minScale(): number;
        maxScale(arg0: number): $GraphView$GraphViewStyle;
        maxScale(): number;
        gridTexture(): $IGuiTexture;
        gridTexture(arg0: $IGuiTexture_): $GraphView$GraphViewStyle;
        holder: $UIElement;
        constructor(arg0: $GraphView);
    }
    export class $SplitView$Horizontal extends $SplitView {
        left(arg0: $UIElement): $SplitView$Horizontal;
        right(arg0: $UIElement): $SplitView$Horizontal;
        setPercentage(arg0: number): $SplitView$Horizontal;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $StructuredTagEditor extends $BindableUIElement<$Tag> {
        getValue(): $Tag;
        setValue(arg0: $Tag_, arg1: boolean): $StructuredTagEditor;
        setCompoundTagOnly(): $StructuredTagEditor;
        setAny(): $StructuredTagEditor;
        static insertByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static removeByteArrayElement(arg0: $ByteArrayTag, arg1: number): $ByteArrayTag;
        static removeIntArrayElement(arg0: $IntArrayTag, arg1: number): $IntArrayTag;
        static removeLongArrayElement(arg0: $LongArrayTag, arg1: number): $LongArrayTag;
        static insertLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        static changeListElementType(arg0: $ListTag_, arg1: $StructuredTagEditor$TagKind_): $ListTag;
        static insertIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static setByteArrayElement(arg0: $ByteArrayTag, arg1: number, arg2: number): $ByteArrayTag;
        static setLongArrayElement(arg0: $LongArrayTag, arg1: number, arg2: number): $LongArrayTag;
        setRootTypeFilter(arg0: $Predicate_<$StructuredTagEditor$TagKind>): $StructuredTagEditor;
        static setIntArrayElement(arg0: $IntArrayTag, arg1: number, arg2: number): $IntArrayTag;
        static renameCompoundKey(arg0: $CompoundTag_, arg1: string, arg2: string): boolean;
        static convertTag(arg0: $Tag_, arg1: $StructuredTagEditor$TagKind_): $Tag;
        setListOnly(): $StructuredTagEditor;
        setTagResponder(arg0: $Consumer_<$Tag>): $StructuredTagEditor;
        setTagValidator(arg0: $Predicate_<$Tag>): $StructuredTagEditor;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        set rootTypeFilter(value: $Predicate_<$StructuredTagEditor$TagKind>);
        set tagResponder(value: $Consumer_<$Tag>);
        set tagValidator(value: $Predicate_<$Tag>);
    }
    export class $ItemSlot$SlotStyle extends $Style {
        isPlayerSlot(): boolean;
        isPlayerSlot(arg0: boolean): $ItemSlot$SlotStyle;
        acceptQuickMove(): boolean;
        acceptQuickMove(arg0: boolean): $ItemSlot$SlotStyle;
        quickMovePriority(arg0: number): $ItemSlot$SlotStyle;
        quickMovePriority(): number;
        showSlotOverlayOnlyEmpty(arg0: boolean): $ItemSlot$SlotStyle;
        showSlotOverlayOnlyEmpty(): boolean;
        slotOverlay(): $IGuiTexture;
        slotOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        hoverOverlay(): $IGuiTexture;
        hoverOverlay(arg0: $IGuiTexture_): $ItemSlot$SlotStyle;
        showItemTooltips(): boolean;
        showItemTooltips(arg0: boolean): $ItemSlot$SlotStyle;
        holder: $UIElement;
        constructor(arg0: $ItemSlot);
    }
    export class $ProgressBar$ProgressBarStyle extends $Style {
        static init(): void;
        interpolate(): boolean;
        interpolate(arg0: boolean): $ProgressBar$ProgressBarStyle;
        fillDirection(): $FillDirection;
        fillDirection(arg0: $FillDirection_): $ProgressBar$ProgressBarStyle;
        interpolateStep(): number;
        interpolateStep(arg0: number): $ProgressBar$ProgressBarStyle;
        holder: $UIElement;
        constructor(arg0: $ProgressBar);
    }
    export class $Scroller$Vertical extends $Scroller {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu<K, T> extends $UIElement {
        close(): void;
        getNodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        menuStyle(arg0: $Consumer_<$Menu$MenuStyle>): $Menu<K, $CompoundTag>;
        setHoverTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setOnNodeClicked(arg0: $Consumer_<$ITreeNode<K, $CompoundTag>>): $Menu<K, $CompoundTag>;
        setOnClose(arg0: $Runnable_): $Menu<K, $CompoundTag>;
        setAutoClose(arg0: boolean): $Menu<K, $CompoundTag>;
        setTextureProvider(arg0: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>): $Menu<K, $CompoundTag>;
        setUiProvider(arg0: $UIElementProvider_<K>): $Menu<K, $CompoundTag>;
        getMenuStyle(): $Menu$MenuStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        root: $ITreeNode<K, $CompoundTag>;
        constructor(arg0: $ITreeNode<K, $CompoundTag_>);
        constructor(arg0: $ITreeNode<K, $CompoundTag_>, arg1: $UIElementProvider_<K>);
        get nodeUIs(): $Map<$ITreeNode<K, $CompoundTag>, $UIElement>;
        set hoverTextureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set onNodeClicked(value: $Consumer_<$ITreeNode<K, $CompoundTag>>);
        set onClose(value: $Runnable_);
        set autoClose(value: boolean);
        set textureProvider(value: $Function_<$ITreeNode<K, $CompoundTag>, $IGuiTexture>);
        set uiProvider(value: $UIElementProvider_<K>);
    }
    export class $Dialog extends $UIElement {
        bottom(): $Dialog;
        close(): void;
        top(): $Dialog;
        /**
         * @deprecated
         */
        width(arg0: $StyleSizeLength): $Dialog;
        width(arg0: $TaffyDimension): $Dialog;
        windowMode(arg0: number, arg1: number, arg2: number, arg3: number): $Dialog;
        windowMode(arg0: number, arg1: number): $Dialog;
        addContent(arg0: $UIElement): $Dialog;
        addButton(arg0: $UIElement): $Dialog;
        static showNotification(arg0: string, arg1: number): $Dialog;
        static showNotification(arg0: string, arg1: string, arg2: $Runnable_): $Dialog;
        static suffixFilter(...arg0: string[]): $Predicate<$FileNode>;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $File_, arg4: $Predicate_<$FileNode>, arg5: number, arg6: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $File_, arg4: $Predicate_<$FileNode>, arg5: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: number, arg5: $Consumer_<$File>): $Dialog;
        static showFileDialog(arg0: string, arg1: $File_, arg2: boolean, arg3: $Predicate_<$FileNode>, arg4: $Consumer_<$File>): $Dialog;
        show(arg0: $UIElement): $Dialog;
        show(arg0: $ModularUI): $Dialog;
        static showCancelableCheck(arg0: string, arg1: string, arg2: $BooleanConsumer_, arg3: $Runnable_): $Dialog;
        setTitle(arg0: string): $Dialog;
        setOnClose(arg0: $Runnable_): $Dialog;
        static showCheckBox(arg0: string, arg1: string, arg2: $BooleanConsumer_): $Dialog;
        static showCheckBox(arg0: string, arg1: $Component_, arg2: $BooleanConsumer_): $Dialog;
        setAutoClose(arg0: boolean): $Dialog;
        addExternalElement(arg0: $UIElement): $Dialog;
        static stringEditorDialog(arg0: string, arg1: string, arg2: $Predicate_<string>, arg3: $Consumer_<string>): $Dialog;
        allowInteraction(): $Dialog;
        darkenBackground(): $Dialog;
        removeExternalElement(arg0: $UIElement): $Dialog;
        setClickOutsideClose(arg0: boolean): $Dialog;
        titleBar: $UIElement;
        static CODEC: $Codec<$UIElement>;
        overlay: $UIElement;
        contentContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        buttonContainer: $UIElement;
        constructor();
        set title(value: string);
        set onClose(value: $Runnable_);
        set autoClose(value: boolean);
        set clickOutsideClose(value: boolean);
    }
    export class $TabView extends $UIElement {
        clear(): $TabView;
        removeTab(arg0: $Tab): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement, arg2: number): $TabView;
        addTab(arg0: $Tab, arg1: $UIElement): $TabView;
        selectTab(arg0: $Tab): $TabView;
        tabContentContainer(arg0: $Consumer_<$UIElement>): $TabView;
        tabScroller(arg0: $Consumer_<$ScrollerView>): $TabView;
        getTabContents(): $BiMap<$Tab, $UIElement>;
        setOnTabSelected(arg0: $Consumer_<$Tab>): $TabView;
        getSelectedTab(): $Tab;
        tabHeaderContainer(arg0: $Consumer_<$UIElement>): $TabView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get tabContents(): $BiMap<$Tab, $UIElement>;
        set onTabSelected(value: $Consumer_<$Tab>);
        get selectedTab(): $Tab;
    }
    export class $Scene extends $UIElement {
        getZoom(): number;
        setZoom(arg0: number): $Scene;
        useOrtho(arg0: boolean): $Scene;
        useOrtho(): $Scene;
        camZoom(): number;
        xeiLookup(): $Scene;
        isUseCache(): boolean;
        isUseOrtho(): boolean;
        isScalable(): boolean;
        isDragging(): boolean;
        setCenter(arg0: $Vector3f): $Scene;
        setRenderFacing(arg0: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook, arg2: boolean): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>, arg1: $ISceneBlockRenderHook): $Scene;
        setRenderedCore(arg0: $Collection_<$BlockPos_>): $Scene;
        setRenderSelect(arg0: boolean): $Scene;
        createScene(arg0: $Level, arg1: boolean, arg2: $Size): $Scene;
        createScene(arg0: $Level): $Scene;
        getParticleManager(): $ParticleManager;
        getRange(): number;
        getCenter(): $Vector3f;
        setCameraYawAndPitch(arg0: number, arg1: number): $Scene;
        setCameraYawAndPitchAnima(arg0: number, arg1: number, arg2: number): void;
        isShowHoverBlockTips(): boolean;
        setBeforeWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        releaseRendererResource(): void;
        setAfterWorldRender(arg0: $Consumer_<$Scene>): $Scene;
        getLastSelectedPosFace(): $BlockPosFace;
        getLastHoverPosFace(): $BlockPosFace;
        setShowHoverBlockTips(arg0: boolean): $Scene;
        getLastClickPosFace(): $BlockPosFace;
        setDraggable(arg0: boolean): $Scene;
        renderBlockOverLay(arg0: $WorldSceneRenderer): void;
        useCacheBuffer(): $Scene;
        useCacheBuffer(arg0: boolean): $Scene;
        syncCompile(arg0: boolean): $Scene;
        syncCompile(): $Scene;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number, arg3: number): void;
        drawFacingBorder(arg0: $PoseStack, arg1: $BlockPosFace_, arg2: number): void;
        needCompileCache(): void;
        getClipBlock(): $ClipContext$Block;
        getLastHoverItem(): $ItemStack;
        isRenderSelect(): boolean;
        getRotationPitch(): number;
        setOnSelected(arg0: $BiConsumer_<$BlockPos, $Direction>): $Scene;
        isSyncCompile(): boolean;
        getClipFluid(): $ClipContext$Fluid;
        setTickWorld(arg0: boolean): $Scene;
        isIntractable(): boolean;
        getRotationYaw(): number;
        getOnSelected(): $BiConsumer<$BlockPos, $Direction>;
        setIntractable(arg0: boolean): $Scene;
        setOrthoRange(arg0: number): $Scene;
        setScalable(arg0: boolean): $Scene;
        setClipContext(arg0: $ClipContext$Block_, arg1: $ClipContext$Fluid_): $Scene;
        isTickWorld(): boolean;
        setAllowXEILookup(arg0: boolean): $Scene;
        isRenderFacing(): boolean;
        getDummyWorld(): $TrackedDummyWorld;
        isDraggable(): boolean;
        isAllowXEILookup(): boolean;
        isAutoReleased(): boolean;
        getRenderer(): $WorldSceneRenderer;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get useCache(): boolean;
        get dragging(): boolean;
        get particleManager(): $ParticleManager;
        get range(): number;
        set beforeWorldRender(value: $Consumer_<$Scene>);
        set afterWorldRender(value: $Consumer_<$Scene>);
        get lastSelectedPosFace(): $BlockPosFace;
        get lastHoverPosFace(): $BlockPosFace;
        get lastClickPosFace(): $BlockPosFace;
        get clipBlock(): $ClipContext$Block;
        get lastHoverItem(): $ItemStack;
        get rotationPitch(): number;
        get clipFluid(): $ClipContext$Fluid;
        get rotationYaw(): number;
        set orthoRange(value: number);
        get dummyWorld(): $TrackedDummyWorld;
        get autoReleased(): boolean;
        get renderer(): $WorldSceneRenderer;
    }
    export class $ScrollerView$ScrollerViewStyle extends $Style {
        mode(): $ScrollerMode;
        mode(arg0: $ScrollerMode_): $ScrollerView$ScrollerViewStyle;
        static init(): void;
        adaptiveWidth(): boolean;
        adaptiveWidth(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        maxScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        maxScrollPixel(): number;
        scrollerViewStyle(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(arg0: number): $ScrollerView$ScrollerViewStyle;
        minScrollPixel(): number;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $ScrollerView$ScrollerViewStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $ScrollerView$ScrollerViewStyle;
        scrollerViewMargin(): number;
        holder: $UIElement;
        constructor(arg0: $ScrollerView);
    }
    export class $TextArea$TextAreaStyle extends $Style {
        lineSpacing(): number;
        lineSpacing(arg0: number): $TextArea$TextAreaStyle;
        static init(): void;
        placeholder(): $Component;
        placeholder(arg0: $Component_): $TextArea$TextAreaStyle;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextArea$TextAreaStyle;
        font(arg0: $ResourceLocation_): $TextArea$TextAreaStyle;
        font(): $ResourceLocation;
        fontSize(arg0: number): $TextArea$TextAreaStyle;
        fontSize(): number;
        textColor(): number;
        textColor(arg0: number): $TextArea$TextAreaStyle;
        verticalScrollDisplay(): $ScrollDisplay;
        verticalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        scrollerViewStyle(arg0: number): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(arg0: $ScrollDisplay_): $TextArea$TextAreaStyle;
        horizontalScrollDisplay(): $ScrollDisplay;
        errorColor(): number;
        errorColor(arg0: number): $TextArea$TextAreaStyle;
        viewMode(arg0: $ScrollerMode_): $TextArea$TextAreaStyle;
        viewMode(): $ScrollerMode;
        cursorColor(arg0: number): $TextArea$TextAreaStyle;
        cursorColor(): number;
        focusOverlay(arg0: $IGuiTexture_): $TextArea$TextAreaStyle;
        focusOverlay(): $IGuiTexture;
        scrollerViewMargin(): number;
        holder: $UIElement;
        constructor(arg0: $TextArea);
    }
    export class $TextField$Mode extends $Enum<$TextField$Mode> {
        static values(): $TextField$Mode[];
        static valueOf(arg0: string): $TextField$Mode;
        isNumber(): boolean;
        getNumberType(): $ConfigNumber$Type;
        static NUMBER_FLOAT: $TextField$Mode;
        static RESOURCE_LOCATION: $TextField$Mode;
        static NUMBER_INT: $TextField$Mode;
        static NUMBER_BYTE: $TextField$Mode;
        static INTERNAL: $TextField$Mode;
        static COMPOUND_TAG: $TextField$Mode;
        static STRING: $TextField$Mode;
        static NUMBER_DOUBLE: $TextField$Mode;
        static NUMBER_SHORT: $TextField$Mode;
        static NUMBER_LONG: $TextField$Mode;
        get number(): boolean;
        get numberType(): $ConfigNumber$Type;
    }
    /**
     * Values that may be interpreted as {@link $TextField$Mode}.
     */
    export type $TextField$Mode_ = "internal" | "string" | "compound_tag" | "resource_location" | "number_long" | "number_int" | "number_float" | "number_double" | "number_short" | "number_byte";
    export class $BindableValue<T> extends $BindableUIElement<T> {
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: T);
    }
    export class $TextElement extends $UIElement {
        setText(arg0: string, arg1: boolean): $TextElement;
        textStyle(arg0: $Consumer_<$TextElement$TextStyle>): $TextElement;
        getText(): $Component;
        setText(arg0: $Component_): $TextElement;
        recompute(): void;
        getFont(): $Font;
        getTextStyle(): $TextElement$TextStyle;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        get font(): $Font;
    }
    export class $UITemplateElement extends $UIElement {
        getPath(): $IResourcePath;
        setTemplate(arg0: $IResourcePath): $UITemplateElement;
        getTemplate(): $UITemplate;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: $IResourcePath);
        get path(): $IResourcePath;
    }
    export class $Switch extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Switch;
        setOn(arg0: boolean): $Switch;
        setOn(arg0: boolean, arg1: boolean): $Switch;
        getSwitchStyle(): $Switch$SwitchStyle;
        setOnSwitchChanged(arg0: $BooleanConsumer_): $Switch;
        switchStyle(arg0: $Consumer_<$Switch$SwitchStyle>): $Switch;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        placeholder: $UIElement;
        markIcon: $UIElement;
        constructor();
        set onSwitchChanged(value: $BooleanConsumer_);
    }
    export class $SplitView$Vertical extends $SplitView {
        bottom(arg0: $UIElement): $SplitView$Vertical;
        top(arg0: $UIElement): $SplitView$Vertical;
        setPercentage(arg0: number): $SplitView$Vertical;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set percentage(value: number);
    }
    export class $VirtualScrollerView$VirtualScrollerViewStyle extends $Style {
        static init(): void;
        estimatedItemHeight(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        estimatedItemHeight(): number;
        itemHeightMode(): $VirtualItemHeightMode;
        itemHeightMode(arg0: $VirtualItemHeightMode_): $VirtualScrollerView$VirtualScrollerViewStyle;
        overscanPixels(): number;
        overscanPixels(arg0: number): $VirtualScrollerView$VirtualScrollerViewStyle;
        holder: $UIElement;
    }
    export class $TextElement$TextStyle extends $Style {
        lineSpacing(arg0: number): $TextElement$TextStyle;
        lineSpacing(): number;
        static init(): void;
        textShadow(): boolean;
        textShadow(arg0: boolean): $TextElement$TextStyle;
        font(arg0: $ResourceLocation_): $TextElement$TextStyle;
        font(): $ResourceLocation;
        fontSize(): number;
        fontSize(arg0: number): $TextElement$TextStyle;
        textColor(): number;
        textColor(arg0: number): $TextElement$TextStyle;
        textAlignHorizontal(): $Horizontal;
        textAlignHorizontal(arg0: $Horizontal_): $TextElement$TextStyle;
        textAlignVertical(): $Vertical;
        textAlignVertical(arg0: $Vertical_): $TextElement$TextStyle;
        adaptiveWidth(arg0: boolean): $TextElement$TextStyle;
        adaptiveWidth(): boolean;
        rollSpeed(arg0: number): $TextElement$TextStyle;
        rollSpeed(): number;
        textWrap(): $TextWrap;
        textWrap(arg0: $TextWrap_): $TextElement$TextStyle;
        adaptiveHeight(): boolean;
        adaptiveHeight(arg0: boolean): $TextElement$TextStyle;
        holder: $UIElement;
        constructor(arg0: $TextElement);
    }
    export class $Toggle extends $BindableUIElement<boolean> {
        getValue(): boolean;
        isOn(): boolean;
        setValue(arg0: boolean, arg1: boolean): $Toggle;
        setText(arg0: string, arg1: boolean): $Toggle;
        toggleLabel(arg0: $Consumer_<$Label>): $Toggle;
        setText(arg0: $Component_): $Toggle;
        toggleButton(arg0: $Consumer_<$Button>): $Toggle;
        getToggleStyle(): $Toggle$ToggleStyle;
        toggleStyle(arg0: $Consumer_<$Toggle$ToggleStyle>): $Toggle;
        setOnToggleChanged(arg0: $BooleanConsumer_): $Toggle;
        markIcon(arg0: $Consumer_<$UIElement>): $Toggle;
        noText(): $Toggle;
        setOn(arg0: boolean, arg1: boolean): $Toggle;
        setOn(arg0: boolean): $Toggle;
        enableText(): $Toggle;
        setToggleGroup(arg0: $Toggle$ToggleGroup): $Toggle;
        getToggleGroup(): $Toggle$ToggleGroup;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        set onToggleChanged(value: $BooleanConsumer_);
    }
    export class $Toggle$ToggleGroup implements $IPersistedSerializable, $IConfigurable {
        getToggles(): $List<$Toggle>;
        setAllowEmpty(arg0: boolean): $Toggle$ToggleGroup;
        getCurrentToggle(): $Toggle;
        writeToBuff(arg0: $ByteBuf): void;
        beforeSerialize(): void;
        beforeDeserialize(): void;
        afterDeserialize(): void;
        readFromBuff(arg0: $ByteBuf): void;
        afterSerialize(): void;
        serializeAdditionalNBT(arg0: $HolderLookup$Provider): $Tag;
        deserializeAdditionalNBT(arg0: $Tag_, arg1: $HolderLookup$Provider): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        buildConfigurator(arg0: $ConfiguratorGroup): void;
        createDirectConfigurator(): $Configurator;
        getConfigurableName(): string;
        createHistoryRecorder(): $IConfigurableHistory;
        constructor();
        get toggles(): $List<$Toggle>;
        set allowEmpty(value: boolean);
        get currentToggle(): $Toggle;
        get configurableName(): string;
    }
    export class $StructuredTagEditor$TagKind extends $Enum<$StructuredTagEditor$TagKind> {
        static values(): $StructuredTagEditor$TagKind[];
        static valueOf(arg0: string): $StructuredTagEditor$TagKind;
        static FLOAT: $StructuredTagEditor$TagKind;
        static BYTE_ARRAY: $StructuredTagEditor$TagKind;
        displayName: string;
        static COMPOUND: $StructuredTagEditor$TagKind;
        static INT_ARRAY: $StructuredTagEditor$TagKind;
        static INT: $StructuredTagEditor$TagKind;
        static LONG_ARRAY: $StructuredTagEditor$TagKind;
        static BOOLEAN: $StructuredTagEditor$TagKind;
        static SHORT: $StructuredTagEditor$TagKind;
        static BYTE: $StructuredTagEditor$TagKind;
        static STRING: $StructuredTagEditor$TagKind;
        static END: $StructuredTagEditor$TagKind;
        static DOUBLE: $StructuredTagEditor$TagKind;
        static LIST: $StructuredTagEditor$TagKind;
        static LONG: $StructuredTagEditor$TagKind;
    }
    /**
     * Values that may be interpreted as {@link $StructuredTagEditor$TagKind}.
     */
    export type $StructuredTagEditor$TagKind_ = "end" | "byte" | "short" | "int" | "long" | "float" | "double" | "string" | "list" | "compound" | "byte_array" | "int_array" | "long_array" | "boolean";
    export class $SplitView extends $UIElement {
        first(arg0: $UIElement): $SplitView;
        second(arg0: $UIElement): $SplitView;
        getBorderSize(): number;
        setPercentage(arg0: number): $SplitView;
        getMinPercentage(): number;
        getMaxPercentage(): number;
        getPercentage(): number;
        setBorderSize(arg0: number): $SplitView;
        setMinPercentage(arg0: number): $SplitView;
        setMaxPercentage(arg0: number): $SplitView;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
    }
    export class $Menu$MenuStyle extends $Style {
        nodeTexture(): $IGuiTexture;
        nodeTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        arrowIcon(): $IGuiTexture;
        arrowIcon(arg0: $IGuiTexture_): $Menu$MenuStyle;
        nodeHoverTexture(): $IGuiTexture;
        nodeHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafHoverTexture(): $IGuiTexture;
        leafHoverTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(arg0: $IGuiTexture_): $Menu$MenuStyle;
        leafTexture(): $IGuiTexture;
        holder: $UIElement;
        constructor(arg0: $Menu<any, any>);
    }
    export class $ProgressBar extends $UIElement implements $IBindable<number>, $IDataConsumer<number> {
        getValue(): number;
        setValue(arg0: number): $ProgressBar;
        label(arg0: $Consumer_<$Label>): $ProgressBar;
        bindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        unbindDataSource(arg0: $IDataProvider<number>): $ProgressBar;
        getMinValue(): number;
        getMaxValue(): number;
        bar(arg0: $Consumer_<$UIElement>): $ProgressBar;
        getProgressBarStyle(): $ProgressBar$ProgressBarStyle;
        getBoundDataSources(): $Collection<$IDataProvider<number>>;
        setRange(arg0: number, arg1: number): $ProgressBar;
        barContainer(arg0: $Consumer_<$UIElement>): $ProgressBar;
        progressBarStyle(arg0: $Consumer_<$ProgressBar$ProgressBarStyle>): $ProgressBar;
        getNormalizedValue(): number;
        getNormalizedValue(arg0: number): number;
        setMaxValue(arg0: number): $ProgressBar;
        setMinValue(arg0: number): $ProgressBar;
        setProgress(arg0: number): $ProgressBar;
        bind(arg0: $IBinding<number>): $UIElement;
        unbind(arg0: $IBinding<number>): $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        barBackground: $UIElement;
        constructor();
        get boundDataSources(): $Collection<$IDataProvider<number>>;
        set progress(value: number);
    }
    export class $TreeList$ReorderRequest<N> extends $Record {
        mode(): $TreeList$DropMode;
        target(): N;
        dragged(): $Set<N>;
        constructor(dragged: $Set_<N>, target: N, mode: $TreeList$DropMode_);
    }
    /**
     * Values that may be interpreted as {@link $TreeList$ReorderRequest}.
     */
    export type $TreeList$ReorderRequest_<N> = { dragged?: $Set_<any>, mode?: $TreeList$DropMode_, target?: any,  } | [dragged?: $Set_<any>, mode?: $TreeList$DropMode_, target?: any, ];
    export class $Selector<T> extends $BindableUIElement<T> {
        isOpen(): boolean;
        setValue(arg0: T, arg1: boolean): $Selector<T>;
        setOnValueChanged(arg0: $Consumer_<T>): $Selector<T>;
        hide(): void;
        setCandidateUIProvider(arg0: $UIElementProvider_<T>): $Selector<T>;
        setSelected(arg0: T, arg1: boolean): $Selector<T>;
        setSelected(arg0: T): $Selector<T>;
        setCandidates(arg0: $List_<T>): $Selector<T>;
        show(): void;
        getSelectorStyle(): $Selector$SelectorStyle;
        selectorStyle(arg0: $Consumer_<$Selector$SelectorStyle>): $Selector<T>;
        getCandidates(): $List<T>;
        preview: $UIElement;
        dialog: $UIElement;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        listView: $UIElement;
        display: $UIElement;
        scrollerView: $ScrollerView;
        constructor();
        get open(): boolean;
        set onValueChanged(value: $Consumer_<T>);
        set candidateUIProvider(value: $UIElementProvider_<T>);
    }
    export class $Inspector extends $UIElement {
        clear(): void;
        getHistoryStack(): $IHistoryStack;
        getInspectedConfigurable(): $IConfigurable;
        inspect(arg0: $IConfigurable): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>): $ConfiguratorGroup;
        inspect<T extends $IConfigurable>(arg0: T, arg1: $Consumer_<$Configurator>, arg2: $Runnable_, arg3: $Runnable_): $ConfiguratorGroup;
        inspect(arg0: $IConfigurable, arg1: $Consumer_<$Configurator>, arg2: $Runnable_): $ConfiguratorGroup;
        setHistoryStack(arg0: $IHistoryStack): $Inspector;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        scrollerView: $ScrollerView;
        constructor();
        get inspectedConfigurable(): $IConfigurable;
    }
    export class $ColorSelector extends $BindableUIElement<number> {
        getValue(): number;
        setValue(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number, arg1: boolean): $ColorSelector;
        setColor(arg0: number): $ColorSelector;
        getColor(): number;
        setOnColorChangeListener(arg0: $IntConsumer_): $ColorSelector;
        hexConfigurator: $StringConfigurator;
        colorSlider: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        pickerContainer: $UIElement;
        hsbButton: $Button;
        textContainer: $UIElement;
        colorPreview: $UIElement;
        alphaSlider: $UIElement;
        constructor();
        set onColorChangeListener(value: $IntConsumer_);
    }
}
