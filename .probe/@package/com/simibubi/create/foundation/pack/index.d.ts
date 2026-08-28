import { $InputStream } from "@package/java/io";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $JsonElement_ } from "@package/com/google/gson";
import { $Consumer_ } from "@package/java/util/function";
import { $Pack, $Pack$Position_, $RepositorySource, $KnownPack, $Pack$Position } from "@package/net/minecraft/server/packs/repository";
import { $PackResources, $PackLocationInfo, $PackType, $PackResources$ResourceOutput_, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $IoSupplier_, $IoSupplier } from "@package/net/minecraft/server/packs/resources";
import { $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";

declare module "@package/com/simibubi/create/foundation/pack" {
    export class $DynamicPack implements $PackResources {
        put(arg0: $ResourceLocation_, arg1: number[]): $DynamicPack;
        put(arg0: $ResourceLocation_, arg1: string): $DynamicPack;
        put(arg0: $ResourceLocation_, arg1: $JsonElement_): $DynamicPack;
        put(arg0: $ResourceLocation_, arg1: $IoSupplier_<$InputStream>): $DynamicPack;
        getResource(arg0: $PackType_, arg1: $ResourceLocation_): $IoSupplier<$InputStream>;
        location(): $PackLocationInfo;
        close(): void;
        getRootResource(...arg0: string[]): $IoSupplier<$InputStream>;
        getMetadataSection<T>(arg0: $MetadataSectionSerializer<T>): T;
        packId(): string;
        getNamespaces(arg0: $PackType_): $Set<string>;
        listResources(arg0: $PackType_, arg1: string, arg2: string, arg3: $PackResources$ResourceOutput_): void;
        knownPackInfo(): ($KnownPack) | undefined;
        isHidden(): boolean;
        constructor(arg0: string, arg1: $PackType_);
        get hidden(): boolean;
    }
    export class $DynamicPackSource extends $Record implements $RepositorySource {
        packId(): string;
        packType(): $PackType;
        loadPacks(arg0: $Consumer_<$Pack>): void;
        packResources(): $PackResources;
        packPosition(): $Pack$Position;
        constructor(packId: string, packType: $PackType_, packPosition: $Pack$Position_, packResources: $PackResources);
    }
    /**
     * Values that may be interpreted as {@link $DynamicPackSource}.
     */
    export type $DynamicPackSource_ = { packResources?: $PackResources, packPosition?: $Pack$Position_, packType?: $PackType_, packId?: string,  } | [packResources?: $PackResources, packPosition?: $Pack$Position_, packType?: $PackType_, packId?: string, ];
}
