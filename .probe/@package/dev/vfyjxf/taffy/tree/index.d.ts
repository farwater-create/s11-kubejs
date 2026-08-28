import { $TaffySize, $FloatPoint, $FloatRect, $FloatSize } from "@package/dev/vfyjxf/taffy/geometry";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_, $Set } from "@package/java/util";
import { $TaffyStyle, $AvailableSpace } from "@package/dev/vfyjxf/taffy/style";
import { $MeasureFunc_, $MeasureFunc } from "@package/dev/vfyjxf/taffy/util";

declare module "@package/dev/vfyjxf/taffy/tree" {
    export class $LayoutOutput extends $Record {
        size(): $FloatSize;
        static hidden(): $LayoutOutput;
        contentSize(): $FloatSize;
        static fromSizes(arg0: $FloatSize, arg1: $FloatSize): $LayoutOutput;
        marginsCanCollapseThrough(): boolean;
        static fromSizesAndBaselines(arg0: $FloatSize, arg1: $FloatSize, arg2: $FloatPoint): $LayoutOutput;
        topMargin(): $CollapsibleMarginSet;
        firstBaselines(): $FloatPoint;
        bottomMargin(): $CollapsibleMarginSet;
        static fromOuterSize(arg0: $FloatSize): $LayoutOutput;
        static HIDDEN: $LayoutOutput;
        static DEFAULT: $LayoutOutput;
        constructor(size: $FloatSize, contentSize: $FloatSize, firstBaselines: $FloatPoint, topMargin: $CollapsibleMarginSet, bottomMargin: $CollapsibleMarginSet, marginsCanCollapseThrough: boolean);
    }
    /**
     * Values that may be interpreted as {@link $LayoutOutput}.
     */
    export type $LayoutOutput_ = { bottomMargin?: $CollapsibleMarginSet, firstBaselines?: $FloatPoint, topMargin?: $CollapsibleMarginSet, marginsCanCollapseThrough?: boolean, contentSize?: $FloatSize, size?: $FloatSize,  } | [bottomMargin?: $CollapsibleMarginSet, firstBaselines?: $FloatPoint, topMargin?: $CollapsibleMarginSet, marginsCanCollapseThrough?: boolean, contentSize?: $FloatSize, size?: $FloatSize, ];
    export class $Layout extends $Record {
        size(): $FloatSize;
        location(): $FloatPoint;
        copy(): $Layout;
        order(): number;
        padding(): $FloatRect;
        scrollHeight(): number;
        contentBoxSize(): $FloatSize;
        scrollbarSize(): $FloatSize;
        contentBoxY(): number;
        contentBoxX(): number;
        scrollWidth(): number;
        static withOrder(arg0: number): $Layout;
        border(): $FloatRect;
        contentBoxWidth(): number;
        contentBoxHeight(): number;
        margin(): $FloatRect;
        contentSize(): $FloatSize;
        constructor(order: number, location: $FloatPoint, size: $FloatSize, contentSize: $FloatSize, scrollbarSize: $FloatSize, border: $FloatRect, padding: $FloatRect, margin: $FloatRect);
        constructor(arg0: number);
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $Layout}.
     */
    export type $Layout_ = { contentSize?: $FloatSize, border?: $FloatRect, margin?: $FloatRect, order?: number, padding?: $FloatRect, size?: $FloatSize, location?: $FloatPoint, scrollbarSize?: $FloatSize,  } | [contentSize?: $FloatSize, border?: $FloatRect, margin?: $FloatRect, order?: number, padding?: $FloatRect, size?: $FloatSize, location?: $FloatPoint, scrollbarSize?: $FloatSize, ];
    export class $RunMode extends $Enum<$RunMode> {
        static values(): $RunMode[];
        static valueOf(arg0: string): $RunMode;
        static PERFORM_HIDDEN_LAYOUT: $RunMode;
        static COMPUTE_SIZE: $RunMode;
        static PERFORM_LAYOUT: $RunMode;
    }
    /**
     * Values that may be interpreted as {@link $RunMode}.
     */
    export type $RunMode_ = "perform_layout" | "compute_size" | "perform_hidden_layout";
    export class $CollapsibleMarginSet {
        resolve(): number;
        copy(): $CollapsibleMarginSet;
        static zero(): $CollapsibleMarginSet;
        static fromMargin(arg0: number): $CollapsibleMarginSet;
        collapseWithMargin(arg0: number): $CollapsibleMarginSet;
        collapseWithSet(arg0: $CollapsibleMarginSet): $CollapsibleMarginSet;
        static ZERO: $CollapsibleMarginSet;
    }
    export class $LayoutChangeListener {
    }
    export interface $LayoutChangeListener {
        onLayoutChanged(arg0: $NodeId_, arg1: $Layout_, arg2: $Layout_): void;
    }
    /**
     * Values that may be interpreted as {@link $LayoutChangeListener}.
     */
    export type $LayoutChangeListener_ = ((arg0: $NodeId, arg1: $Layout, arg2: $Layout) => void);
    export class $NodeId extends $Record {
        value(): number;
        static of(arg0: number): $NodeId;
        getId(): number;
        toIndex(): number;
        constructor(value: number);
        get id(): number;
    }
    /**
     * Values that may be interpreted as {@link $NodeId}.
     */
    export type $NodeId_ = { value?: number,  } | [value?: number, ];
    export class $TaffyTree {
        remove(arg0: $NodeId_): void;
        clear(): void;
        getParent(arg0: $NodeId_): $NodeId;
        childCount(arg0: $NodeId_): number;
        getChildren(arg0: $NodeId_): $List<$NodeId>;
        isDirty(arg0: $NodeId_): boolean;
        clearCache(arg0: $NodeId_): void;
        getLayout(arg0: $NodeId_): $Layout;
        addChild(arg0: $NodeId_, arg1: $NodeId_): void;
        removeChild(arg0: $NodeId_, arg1: $NodeId_): void;
        setLayout(arg0: $NodeId_, arg1: $Layout_): void;
        getAllNodes(): $Set<$NodeId>;
        newLeaf(arg0: $TaffyStyle): $NodeId;
        disableRounding(): void;
        computeLayout(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>): void;
        insertChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): void;
        containsNode(arg0: $NodeId_): boolean;
        getStyle(arg0: $NodeId_): $TaffyStyle;
        setStyle(arg0: $NodeId_, arg1: $TaffyStyle): void;
        setLayoutChangeListener(arg0: $LayoutChangeListener_): void;
        markDirty(arg0: $NodeId_): void;
        printTree(arg0: $NodeId_): void;
        needsVisit(arg0: $NodeId_): boolean;
        getLayoutChangeListener(): $LayoutChangeListener;
        replaceChildAtIndex(arg0: $NodeId_, arg1: number, arg2: $NodeId_): $NodeId;
        /**
         * @deprecated
         */
        hasUnconsumedLayout(arg0: $NodeId_): boolean;
        computeLayoutWithMeasure(arg0: $NodeId_, arg1: $TaffySize<$AvailableSpace>, arg2: $MeasureFunc_): void;
        removeChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        getChildAtIndex(arg0: $NodeId_, arg1: number): $NodeId;
        totalNodeCount(): number;
        getCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_): $LayoutOutput;
        getUnroundedLayout(arg0: $NodeId_): $Layout;
        storeCacheEntry(arg0: $NodeId_, arg1: $FloatSize, arg2: $TaffySize<$AvailableSpace>, arg3: $RunMode_, arg4: $LayoutOutput_): void;
        hasDirtyDescendant(arg0: $NodeId_): boolean;
        acknowledgeLayout(arg0: $NodeId_): void;
        roundingEnabled(): boolean;
        newLeafWithMeasure(arg0: $TaffyStyle, arg1: $MeasureFunc_): $NodeId;
        setMeasureFunc(arg0: $NodeId_, arg1: $MeasureFunc_): void;
        getMeasureFunc(arg0: $NodeId_): $MeasureFunc;
        acknowledgeSubtree(arg0: $NodeId_): void;
        hasNewLayout(arg0: $NodeId_): boolean;
        setUnroundedLayout(arg0: $NodeId_, arg1: $Layout_): void;
        newWithChildren(arg0: $TaffyStyle, ...arg1: $NodeId_[]): $NodeId;
        newWithChildren(arg0: $TaffyStyle, arg1: $List_<$NodeId_>): $NodeId;
        enableRounding(): void;
        setChildren(arg0: $NodeId_, ...arg1: $NodeId_[]): void;
        constructor();
        constructor(arg0: number);
        get allNodes(): $Set<$NodeId>;
    }
}
