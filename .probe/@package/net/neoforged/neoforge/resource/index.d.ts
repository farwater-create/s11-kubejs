import { $JsonElement } from "@package/com/google/gson";
import { $ContextAwareReloadListenerAccessor as $ContextAwareReloadListenerAccessor$2 } from "@package/net/mehvahdjukaar/moonlight/core/mixins/platform";
import { $IModFileInfo } from "@package/net/neoforged/neoforgespi/language";
import { $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Collection_ } from "@package/java/util";
import { $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $ContextAwareReloadListenerAccessor as $ContextAwareReloadListenerAccessor$1 } from "@package/com/almostreliable/unified/mixin/neoforge";
import { $MetadataSectionType } from "@package/net/minecraft/server/packs/metadata";
import { $PackRepository, $Pack$ResourcesSupplier, $Pack$Metadata_, $Pack, $RepositorySource } from "@package/net/minecraft/server/packs/repository";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $AbstractPackResources, $PackLocationInfo_, $PackSelectionConfig_, $PackResources, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ICondition$IContext, $ICondition$IContext_, $ConditionalOps } from "@package/net/neoforged/neoforge/common/conditions";
import { $PackMetadataSection_, $PackMetadataSection } from "@package/net/minecraft/server/packs/metadata/pack";
import { $ContextAwareReloadListenerAccessor } from "@package/rbasamoyai/createbigcannons/mixin";

declare module "@package/net/neoforged/neoforge/resource" {
    export class $EmptyPackResources$EmptyResourcesSupplier implements $Pack$ResourcesSupplier {
        openFull(id: $PackLocationInfo_, info: $Pack$Metadata_): $PackResources;
        openPrimary(id: $PackLocationInfo_): $PackResources;
        constructor(packMeta: $PackMetadataSection_);
    }
    export class $EmptyPackResources extends $AbstractPackResources {
        constructor(packId: $PackLocationInfo_, packMeta: $PackMetadataSection_);
    }
    export class $ResourcePackLoader {
        static expandAndRemoveRootChildren(packs: $Stream<$Pack>, availablePacks: $Collection_<$Pack>): $List<$Pack>;
        static reorderNewlyDiscoveredPacks(set: $Collection_<string>, old: $Collection_<string>, packRepository: $PackRepository): void;
        static getPackNames(packType: $PackType_): $List<string>;
        static populatePackRepository(resourcePacks: $PackRepository, packType: $PackType_, trusted: boolean): void;
        static buildPackFinder(modResourcePacks: $Map_<$IModFile, $Pack$ResourcesSupplier>, packType: $PackType_): $RepositorySource;
        static readWithOptionalMeta(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, type: $PackType_, selectionConfig: $PackSelectionConfig_): $Pack;
        static createPackForMod(mf: $IModFileInfo): $Pack$ResourcesSupplier;
        static getPackFor(modId: string): ($Pack$ResourcesSupplier) | undefined;
        static MOD_RESOURCES_ID: string;
        static MOD_DATA_ID: string;
        static OPTIONAL_FORMAT: $MetadataSectionType<$PackMetadataSection>;
        constructor();
    }
    /**
     * Reload listeners that descend from this class will have the reload context automatically populated when it is available.
     * 
     * The context is guaranteed to be available for the duration of `PreparableReloadListener#reload`.
     * 
     * For children of `SimplePreparableReloadListener`, it will be available during both `SimplePreparableReloadListener#prepare` prepare()} and apply().
     */
    export class $ContextAwareReloadListener implements $PreparableReloadListener, $ContextAwareReloadListenerAccessor, $ContextAwareReloadListenerAccessor$1, $ContextAwareReloadListenerAccessor$2 {
        injectContext(context: $ICondition$IContext_, registryLookup: $HolderLookup$Provider): void;
        getName(): string;
        invokeGetContext(): $ICondition$IContext;
        callMakeConditionalOps(): $ConditionalOps<$JsonElement>;
        au$makeConditionalOps(): $ConditionalOps<$JsonElement>;
        constructor();
        get name(): string;
    }
}
