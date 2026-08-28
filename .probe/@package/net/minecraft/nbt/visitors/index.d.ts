import { $TagType, $StreamTagVisitor$EntryResult, $StreamTagVisitor$ValueResult, $StreamTagVisitor, $Tag } from "@package/net/minecraft/nbt";
import { $Record } from "@package/java/lang";
import { $List, $List_, $Map_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/nbt/visitors" {
    export class $SkipFields extends $CollectToTag {
        constructor(...selectors: $FieldSelector_[]);
    }
    export class $CollectToTag implements $StreamTagVisitor {
        depth(): number;
        getResult(): $Tag;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: number[]): $StreamTagVisitor$ValueResult;
        visit(entry: string): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visit(entry: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
        visitElement(type: $TagType<never>, size: number): $StreamTagVisitor$EntryResult;
        visitList(type: $TagType<never>, size: number): $StreamTagVisitor$ValueResult;
        visitRootEntry(type: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitEntry(type: $TagType<never>, id: string): $StreamTagVisitor$EntryResult;
        visitEntry(type: $TagType<never>): $StreamTagVisitor$EntryResult;
        constructor();
        get result(): $Tag;
    }
    export class $SkipAll {
        static INSTANCE: $SkipAll;
    }
    export interface $SkipAll extends $StreamTagVisitor {
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: number[]): $StreamTagVisitor$ValueResult;
        visit(arg0: string): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visit(arg0: number): $StreamTagVisitor$ValueResult;
        visitEnd(): $StreamTagVisitor$ValueResult;
        visitElement(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$EntryResult;
        visitList(arg0: $TagType<never>, arg1: number): $StreamTagVisitor$ValueResult;
        visitRootEntry(arg0: $TagType<never>): $StreamTagVisitor$ValueResult;
        visitContainerEnd(): $StreamTagVisitor$ValueResult;
        visitEntry(arg0: $TagType<never>): $StreamTagVisitor$EntryResult;
        visitEntry(arg0: $TagType<never>, arg1: string): $StreamTagVisitor$EntryResult;
    }
    export class $FieldTree extends $Record {
        depth(): number;
        addEntry(selector: $FieldSelector_): void;
        static createRoot(): $FieldTree;
        isSelected(type: $TagType<never>, name: string): boolean;
        fieldsToRecurse(): $Map<string, $FieldTree>;
        selectedFields(): $Map<string, $TagType<never>>;
        constructor(arg0: number, arg1: $Map_<string, $TagType<never>>, arg2: $Map_<string, $FieldTree_>);
    }
    /**
     * Values that may be interpreted as {@link $FieldTree}.
     */
    export type $FieldTree_ = { depth?: number, fieldsToRecurse?: $Map_<string, $FieldTree_>, selectedFields?: $Map_<string, $TagType<never>>,  } | [depth?: number, fieldsToRecurse?: $Map_<string, $FieldTree_>, selectedFields?: $Map_<string, $TagType<never>>, ];
    export class $CollectFields extends $CollectToTag {
        getMissingFieldCount(): number;
        constructor(...selectors: $FieldSelector_[]);
        get missingFieldCount(): number;
    }
    export class $FieldSelector extends $Record {
        name(): string;
        type(): $TagType<never>;
        path(): $List<string>;
        constructor(arg0: $List_<string>, arg1: $TagType<never>, arg2: string);
        constructor(firstElement: string, secondElement: string, type: $TagType<never>, name: string);
        constructor(element: string, type: $TagType<never>, name: string);
        constructor(type: $TagType<never>, name: string);
    }
    /**
     * Values that may be interpreted as {@link $FieldSelector}.
     */
    export type $FieldSelector_ = { name?: string, type?: $TagType<never>, path?: $List_<string>,  } | [name?: string, type?: $TagType<never>, path?: $List_<string>, ];
}
