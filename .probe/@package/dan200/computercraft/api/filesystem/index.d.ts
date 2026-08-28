import { $OpenOption } from "@package/java/nio/file";
import { $BasicFileAttributes } from "@package/java/nio/file/attribute";
import { $List_, $Set_ } from "@package/java/util";
import { $SeekableByteChannel } from "@package/java/nio/channels";

declare module "@package/dan200/computercraft/api/filesystem" {
    export class $WritableMount {
    }
    export interface $WritableMount extends $Mount {
        "delete"(arg0: string): void;
        isReadOnly(arg0: string): boolean;
        rename(arg0: string, arg1: string): void;
        makeDirectory(arg0: string): void;
        getCapacity(): number;
        openFile(arg0: string, arg1: $Set_<$OpenOption>): $SeekableByteChannel;
        getRemainingSpace(): number;
        get capacity(): number;
        get remainingSpace(): number;
    }
    export class $Mount {
    }
    export interface $Mount {
        getSize(arg0: string): number;
        list(arg0: string, arg1: $List_<string>): void;
        getAttributes(arg0: string): $BasicFileAttributes;
        exists(arg0: string): boolean;
        isDirectory(arg0: string): boolean;
        openForRead(arg0: string): $SeekableByteChannel;
    }
}
