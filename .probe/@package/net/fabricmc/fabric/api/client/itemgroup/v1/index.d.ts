import { $CreativeModeTab } from "@package/net/minecraft/world/item";
import { $List } from "@package/java/util";

declare module "@package/net/fabricmc/fabric/api/client/itemgroup/v1" {
    export class $FabricCreativeInventoryScreen {
    }
    export interface $FabricCreativeInventoryScreen {
        getPage(arg0: $CreativeModeTab): number;
        setSelectedItemGroup(arg0: $CreativeModeTab): boolean;
        switchToPreviousPage(): boolean;
        getItemGroupsOnPage(arg0: number): $List<$CreativeModeTab>;
        getSelectedItemGroup(): $CreativeModeTab;
        getCurrentPage(): number;
        getPageCount(): number;
        switchToPage(arg0: number): boolean;
        switchToNextPage(): boolean;
        hasAdditionalPages(): boolean;
        get currentPage(): number;
        get pageCount(): number;
    }
}
