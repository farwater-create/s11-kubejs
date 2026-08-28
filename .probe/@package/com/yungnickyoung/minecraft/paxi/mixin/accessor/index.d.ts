import { $Path } from "@package/java/nio/file";
import { $PackType } from "@package/net/minecraft/server/packs";

declare module "@package/com/yungnickyoung/minecraft/paxi/mixin/accessor" {
    export class $FolderRepositorySourceAccessor {
    }
    export interface $FolderRepositorySourceAccessor {
        getFolder(): $Path;
        getPackType(): $PackType;
        get folder(): $Path;
        get packType(): $PackType;
    }
}
