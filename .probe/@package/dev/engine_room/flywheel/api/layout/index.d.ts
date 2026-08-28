import { $Map, $List } from "@package/java/util";

declare module "@package/dev/engine_room/flywheel/api/layout" {
    export class $ElementType {
    }
    export interface $ElementType {
        byteSize(): number;
        byteAlignment(): number;
    }
    export class $Layout {
        static MAX_ELEMENT_NAME_LENGTH: number;
    }
    export interface $Layout {
        elements(): $List<$Layout$Element>;
        byteSize(): number;
        byteAlignment(): number;
        asMap(): $Map<string, $Layout$Element>;
    }
    export class $Layout$Element {
    }
    export interface $Layout$Element {
        name(): string;
        type(): $ElementType;
        byteOffset(): number;
        paddedByteSize(): number;
        paddingByteSize(): number;
    }
}
