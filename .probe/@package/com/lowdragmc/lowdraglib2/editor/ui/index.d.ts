import { $File, $File_ } from "@package/java/io";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGuiTexture, $IGuiTexture_ } from "@package/com/lowdragmc/lowdraglib2/gui/texture";
import { $InspectorView, $HistoryView, $ResourceView } from "@package/com/lowdragmc/lowdraglib2/editor/ui/view";
import { $IProject } from "@package/com/lowdragmc/lowdraglib2/editor/project";
import { $TreeNode, $TreeBuilder$Menu } from "@package/com/lowdragmc/lowdraglib2/gui/util";
import { $List, $LinkedHashMap, $Map_, $List_, $Map } from "@package/java/util";
import { $EditorSettings } from "@package/com/lowdragmc/lowdraglib2/editor/settings";
import { $UIElementProvider_ } from "@package/com/lowdragmc/lowdraglib2/gui/ui/utils";
import { $Tab, $SplitView, $Button, $Menu, $TabView } from "@package/com/lowdragmc/lowdraglib2/gui/ui/elements";
import { $Supplier_, $Consumer_, $Supplier } from "@package/java/util/function";
import { $YogaEdge_ } from "@package/org/appliedenergistics/yoga";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Style, $UIElement } from "@package/com/lowdragmc/lowdraglib2/gui/ui";
import { $Layout } from "@package/dev/vfyjxf/taffy/tree";
import { $ViewMenu, $FileMenu } from "@package/com/lowdragmc/lowdraglib2/editor/ui/menu";
import { $Record, $Runnable_ } from "@package/java/lang";
export * as menu from "@package/com/lowdragmc/lowdraglib2/editor/ui/menu";
export * as view from "@package/com/lowdragmc/lowdraglib2/editor/ui/view";
export * as resource from "@package/com/lowdragmc/lowdraglib2/editor/ui/resource";

declare module "@package/com/lowdragmc/lowdraglib2/editor/ui" {
    export class $SplittableWindow$LayoutConfig extends $Record {
        first(): $SplittableWindow$LayoutConfig;
        second(): $SplittableWindow$LayoutConfig;
        static deserialize(arg0: $CompoundTag_): $SplittableWindow$LayoutConfig;
        serialize(): $CompoundTag;
        vertical(): boolean;
        anchorId(): string;
        percentage(): number;
        constructor(anchorId: string, vertical: boolean, percentage: number, first: $SplittableWindow$LayoutConfig_, second: $SplittableWindow$LayoutConfig_);
    }
    /**
     * Values that may be interpreted as {@link $SplittableWindow$LayoutConfig}.
     */
    export type $SplittableWindow$LayoutConfig_ = { anchorId?: string, vertical?: boolean, second?: $SplittableWindow$LayoutConfig_, first?: $SplittableWindow$LayoutConfig_, percentage?: number,  } | [anchorId?: string, vertical?: boolean, second?: $SplittableWindow$LayoutConfig_, first?: $SplittableWindow$LayoutConfig_, percentage?: number, ];
    export class $EditorLayout extends $Record {
        slots(): $List<$EditorLayout$SlotEntry>;
        static deserialize(arg0: $CompoundTag_): $EditorLayout;
        serialize(): $CompoundTag;
        findSlotForView(arg0: string): $EditorLayout$SlotEntry;
        layoutConfig(): $SplittableWindow$LayoutConfig;
        constructor(layoutConfig: $SplittableWindow$LayoutConfig_, slots: $List_<$EditorLayout$SlotEntry_>);
    }
    /**
     * Values that may be interpreted as {@link $EditorLayout}.
     */
    export type $EditorLayout_ = { layoutConfig?: $SplittableWindow$LayoutConfig_, slots?: $List_<$EditorLayout$SlotEntry_>,  } | [layoutConfig?: $SplittableWindow$LayoutConfig_, slots?: $List_<$EditorLayout$SlotEntry_>, ];
    export class $View extends $UIElement {
        getName(): string;
        setName(arg0: string): void;
        getIcon(): $IGuiTexture;
        setDynamicName(arg0: $Supplier_<$Component>): void;
        setOnRemove(arg0: $Runnable_): void;
        isCanRemove(): boolean;
        setCanRemove(arg0: boolean): void;
        createTab(): $Tab;
        setIcon(arg0: $IGuiTexture_): void;
        getViewContainer(): $ViewContainer;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor();
        constructor(arg0: string, arg1: $IGuiTexture_);
        constructor(arg0: string);
        set dynamicName(value: $Supplier_<$Component>);
        set onRemove(value: $Runnable_);
        get viewContainer(): $ViewContainer;
    }
    export class $ViewContainer extends $UIElement {
        expand(): void;
        isEmptyWindow(): boolean;
        hasView(arg0: $View): boolean;
        getWindow(): $SplittableWindow;
        selectView(arg0: $View): void;
        addView(arg0: $View): $ViewContainer;
        removeView(arg0: $View): void;
        collapse(): void;
        isCollapse(): boolean;
        getAllViews(): $List<$View>;
        isViewSelected(arg0: $View): boolean;
        addViewAt(arg0: $View, arg1: number): $ViewContainer;
        addViews(...arg0: $View[]): $ViewContainer;
        buttonIcon: $UIElement;
        static CODEC: $Codec<$UIElement>;
        collapseButton: $Button;
        static EMPTY_LAYOUT: $Layout;
        tabView: $TabView;
        constructor();
        get emptyWindow(): boolean;
        get window(): $SplittableWindow;
        get allViews(): $List<$View>;
    }
    export class $EditorWindow extends $UIElement {
        static open(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>): $EditorWindow;
        isMaximized(): boolean;
        minimizeWindow(): void;
        hasMultipleEditors(): boolean;
        maximizeWindow(): void;
        retoreWindow(): void;
        getCurrentEditor(): $Editor;
        showEditor(arg0: $Editor): void;
        getEditors(): $LinkedHashMap<$Editor, $UIElement>;
        static openDefault(arg0: $Supplier_<$Editor>): $EditorWindow;
        removeEditor(arg0: $Editor): void;
        createNewEditor(arg0: $Supplier_<$Editor>): $Editor;
        closeWindow(): void;
        editorButtonContainer: $UIElement;
        static CODEC: $Codec<$UIElement>;
        static DEFAULT_ID: $ResourceLocation;
        editorContainer: $UIElement;
        static EMPTY_LAYOUT: $Layout;
        window: $UIElement;
        windowID: $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $Supplier_<$Editor>);
        constructor(arg0: $Supplier_<$Editor>);
        get maximized(): boolean;
        get currentEditor(): $Editor;
        get editors(): $LinkedHashMap<$Editor, $UIElement>;
    }
    export class $EditorLayout$SlotEntry extends $Record {
        path(): string;
        static deserialize(arg0: $CompoundTag_): $EditorLayout$SlotEntry;
        serialize(): $CompoundTag;
        viewNames(): $List<string>;
        selectedViewName(): string;
        constructor(path: string, viewNames: $List_<string>, selectedViewName: string);
    }
    /**
     * Values that may be interpreted as {@link $EditorLayout$SlotEntry}.
     */
    export type $EditorLayout$SlotEntry_ = { viewNames?: $List_<string>, selectedViewName?: string, path?: string,  } | [viewNames?: $List_<string>, selectedViewName?: string, path?: string, ];
    export class $Editor extends $UIElement {
        exit(): void;
        exit(arg0: $Runnable_): void;
        close(): void;
        getIcon(): $UIElement;
        getTitle(): $Component;
        openMenu<T, C>(arg0: number, arg1: number, arg2: $TreeNode<T, C>, arg3: $UIElementProvider_<T>): $Menu<T, C>;
        openMenu(arg0: number, arg1: number, arg2: $TreeBuilder$Menu): void;
        getSavedLayout(): $EditorLayout;
        getViewFallbacks(): $Map<$View, $Supplier<$ViewContainer>>;
        getWindow(): $EditorWindow;
        getTop(): $UIElement;
        placeView(arg0: $View, arg1: $Supplier_<$ViewContainer>): void;
        getCurrentProjectFile(): $File;
        isCurrentProjectDirty(): boolean;
        closeCurrentProject(arg0: boolean, arg1: $Runnable_): void;
        getAllViews(): $List<$View>;
        loadProject(arg0: $IProject, arg1: $File_): void;
        getViewMenu(): $ViewMenu;
        getEditorSettings(): $EditorSettings;
        openSettingsPanel(): void;
        static emptyEditor(): $Editor;
        applyLayout(arg0: $EditorLayout_): void;
        getMainView(): $UIElement;
        getFileMenu(): $FileMenu;
        getRootWindow(): $SplittableWindow;
        getLeftWindow(): $SplittableWindow;
        getCurrentProject(): $IProject;
        captureLayout(): $EditorLayout;
        saveProject(arg0: $Runnable_): void;
        saveProject(arg0: $Runnable_, arg1: boolean): void;
        getMenuContainer(): $UIElement;
        getTopPlaceholder(): $UIElement;
        askToSaveProject(arg0: $Runnable_): void;
        getButtonContainer(): $UIElement;
        getCloseButton(): $Button;
        getRightWindow(): $SplittableWindow;
        getCenterWindow(): $SplittableWindow;
        getBottomWindow(): $SplittableWindow;
        saveAsProject(arg0: $Runnable_): void;
        saveAsProject(arg0: $File_, arg1: $Runnable_): void;
        getInspectorView(): $InspectorView;
        getResourceView(): $ResourceView;
        getHistoryView(): $HistoryView;
        static ANCHOR_CENTER: string;
        static ANCHOR_BOTTOM: string;
        resourceView: $ResourceView;
        static EMPTY_LAYOUT: $Layout;
        topPlaceholder: $UIElement;
        icon: $UIElement;
        menuContainer: $UIElement;
        buttonContainer: $UIElement;
        inspectorView: $InspectorView;
        static ANCHOR_RIGHT: string;
        rightWindow: $SplittableWindow;
        top: $UIElement;
        closeButton: $Button;
        static ANCHOR_LEFT: string;
        fileMenu: $FileMenu;
        leftWindow: $SplittableWindow;
        static CODEC: $Codec<$UIElement>;
        historyView: $HistoryView;
        static ANCHOR_ROOT: string;
        viewMenu: $ViewMenu;
        centerWindow: $SplittableWindow;
        editorSettings: $EditorSettings;
        rootWindow: $SplittableWindow;
        bottomWindow: $SplittableWindow;
        mainView: $UIElement;
        constructor();
        get title(): $Component;
        get savedLayout(): $EditorLayout;
        get viewFallbacks(): $Map<$View, $Supplier<$ViewContainer>>;
        get window(): $EditorWindow;
        get currentProjectFile(): $File;
        get currentProjectDirty(): boolean;
        get allViews(): $List<$View>;
        get currentProject(): $IProject;
    }
    export class $SplittableWindow extends $UIElement {
        getFirst(): $SplittableWindow;
        getSecond(): $SplittableWindow;
        isSplit(): boolean;
        getSplitView(): $SplitView;
        getSplitStyle(): $SplittableWindow$SplitStyle;
        setParentWindow(arg0: $SplittableWindow): $SplittableWindow;
        getParentWindow(): $SplittableWindow;
        getRightBottom(): $ViewContainer;
        applyLayoutConfig(arg0: $SplittableWindow$LayoutConfig_): $SplittableWindow;
        removeSplitWindow(arg0: $SplittableWindow): void;
        setViewContainer(arg0: $ViewContainer): $SplittableWindow;
        splitWith(arg0: $YogaEdge_, arg1: $SplittableWindow): $Pair<$SplittableWindow, $SplittableWindow>;
        isImmortal(): boolean;
        splitNew(arg0: $YogaEdge_): $Pair<$SplittableWindow, $SplittableWindow>;
        getLeftTop(): $ViewContainer;
        splitStyle(arg0: $Consumer_<$SplittableWindow$SplitStyle>): $SplittableWindow;
        rebuildFromLayoutConfig(arg0: $SplittableWindow$LayoutConfig_, arg1: $Map_<string, $SplittableWindow>): void;
        getViewContainer(): $ViewContainer;
        getLayoutConfig(): $SplittableWindow$LayoutConfig;
        getAllViews(): $List<$View>;
        setAnchorId(arg0: string): $SplittableWindow;
        setImmortal(arg0: boolean): $SplittableWindow;
        getLeftBottom(): $ViewContainer;
        trimEmptySplits(): boolean;
        getAnchorId(): string;
        getRightTop(): $ViewContainer;
        static CODEC: $Codec<$UIElement>;
        static EMPTY_LAYOUT: $Layout;
        constructor(arg0: $SplittableWindow, arg1: $ViewContainer);
        constructor(arg0: $SplittableWindow);
        constructor();
        get first(): $SplittableWindow;
        get second(): $SplittableWindow;
        get split(): boolean;
        get splitView(): $SplitView;
        get rightBottom(): $ViewContainer;
        get leftTop(): $ViewContainer;
        get layoutConfig(): $SplittableWindow$LayoutConfig;
        get allViews(): $List<$View>;
        get leftBottom(): $ViewContainer;
        get rightTop(): $ViewContainer;
    }
    export class $SplittableWindow$SplitStyle extends $Style {
        static init(): void;
        percentage(arg0: number): $SplittableWindow$SplitStyle;
        percentage(): number;
        minPercentage(): number;
        minPercentage(arg0: number): $SplittableWindow$SplitStyle;
        maxPercentage(arg0: number): $SplittableWindow$SplitStyle;
        maxPercentage(): number;
        holder: $UIElement;
        constructor(arg0: $SplittableWindow);
    }
}
