import { $IStorageProvider_, $MEStorage } from "@package/appeng/api/storage";
import { $IGridNode, $IGridService } from "@package/appeng/api/networking";
import { $KeyCounter } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/networking/storage" {
    export class $IStorageService {
    }
    export interface $IStorageService extends $IGridService {
        refreshNodeStorageProvider(arg0: $IGridNode): void;
        addGlobalStorageProvider(arg0: $IStorageProvider_): void;
        invalidateCache(): void;
        getInventory(): $MEStorage;
        refreshGlobalStorageProvider(arg0: $IStorageProvider_): void;
        removeGlobalStorageProvider(arg0: $IStorageProvider_): void;
        getCachedInventory(): $KeyCounter;
        get inventory(): $MEStorage;
        get cachedInventory(): $KeyCounter;
    }
}
