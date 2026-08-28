import { $VersionRange, $ArtifactVersion } from "@package/org/apache/maven/artifact/versioning";
import { $ElementType, $Annotation, $ElementType_ } from "@package/java/lang/annotation";
import { $Stream } from "@package/java/util/stream";
import { $Type } from "@package/org/objectweb/asm";
import { $URL } from "@package/java/net";
import { $Dist_ } from "@package/net/neoforged/api/distmarker";
import { $List, $Map_, $Map, $Set, $Set_, $Collection_ } from "@package/java/util";
import { $ModuleLayer, $Enum, $Record, $Object, $Class } from "@package/java/lang";
import { $ForgeFeature$Bound, $IModFile } from "@package/net/neoforged/neoforgespi/locating";
import { $ModContainer } from "@package/net/neoforged/fml";
import { $IIssueReporting_ } from "@package/net/neoforged/neoforgespi";

declare module "@package/net/neoforged/neoforgespi/language" {
    export class $ModFileScanData {
        getClasses(): $Set<$ModFileScanData$ClassData>;
        getAnnotations(): $Set<$ModFileScanData$AnnotationData>;
        getIModInfoData(): $List<$IModFileInfo>;
        addModFileInfo(arg0: $IModFileInfo): void;
        getAnnotatedBy(arg0: $Class<$Annotation>, arg1: $ElementType_): $Stream<$ModFileScanData$AnnotationData>;
        constructor();
        get classes(): $Set<$ModFileScanData$ClassData>;
        get annotations(): $Set<$ModFileScanData$AnnotationData>;
        get IModInfoData(): $List<$IModFileInfo>;
    }
    export class $ModFileScanData$ClassData extends $Record {
        clazz(): $Type;
        parent(): $Type;
        interfaces(): $Set<$Type>;
        constructor(clazz: $Type, parent: $Type, interfaces: $Set_<$Type>);
    }
    /**
     * Values that may be interpreted as {@link $ModFileScanData$ClassData}.
     */
    export type $ModFileScanData$ClassData_ = { parent?: $Type, interfaces?: $Set_<$Type>, clazz?: $Type,  } | [parent?: $Type, interfaces?: $Set_<$Type>, clazz?: $Type, ];
    export class $IModInfo$DependencySide extends $Enum<$IModInfo$DependencySide> {
        static values(): $IModInfo$DependencySide[];
        static valueOf(arg0: string): $IModInfo$DependencySide;
        isContained(arg0: $Dist_): boolean;
        isCorrectSide(): boolean;
        static SERVER: $IModInfo$DependencySide;
        static CLIENT: $IModInfo$DependencySide;
        static BOTH: $IModInfo$DependencySide;
        get correctSide(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IModInfo$DependencySide}.
     */
    export type $IModInfo$DependencySide_ = "client" | "server" | "both";
    export class $ModFileScanData$AnnotationData extends $Record {
        clazz(): $Type;
        annotationData(): $Map<string, $Object>;
        annotationType(): $Type;
        targetType(): $ElementType;
        memberName(): string;
        constructor(annotationType: $Type, targetType: $ElementType_, clazz: $Type, memberName: string, annotationData: $Map_<string, $Object>);
    }
    /**
     * Values that may be interpreted as {@link $ModFileScanData$AnnotationData}.
     */
    export type $ModFileScanData$AnnotationData_ = { memberName?: string, clazz?: $Type, annotationData?: $Map_<string, $Object>, annotationType?: $Type, targetType?: $ElementType_,  } | [memberName?: string, clazz?: $Type, annotationData?: $Map_<string, $Object>, annotationType?: $Type, targetType?: $ElementType_, ];
    export class $IModInfo$ModVersion {
    }
    export interface $IModInfo$ModVersion {
        getType(): $IModInfo$DependencyType;
        getOwner(): $IModInfo;
        setOwner(arg0: $IModInfo): void;
        getReason(): (string) | undefined;
        getSide(): $IModInfo$DependencySide;
        getVersionRange(): $VersionRange;
        getOrdering(): $IModInfo$Ordering;
        getReferralURL(): ($URL) | undefined;
        getModId(): string;
        get type(): $IModInfo$DependencyType;
        get reason(): (string) | undefined;
        get side(): $IModInfo$DependencySide;
        get versionRange(): $VersionRange;
        get ordering(): $IModInfo$Ordering;
        get referralURL(): ($URL) | undefined;
        get modId(): string;
    }
    export class $IModInfo$DependencyType extends $Enum<$IModInfo$DependencyType> {
        static values(): $IModInfo$DependencyType[];
        static valueOf(arg0: string): $IModInfo$DependencyType;
        static OPTIONAL: $IModInfo$DependencyType;
        static DISCOURAGED: $IModInfo$DependencyType;
        static REQUIRED: $IModInfo$DependencyType;
        static INCOMPATIBLE: $IModInfo$DependencyType;
    }
    /**
     * Values that may be interpreted as {@link $IModInfo$DependencyType}.
     */
    export type $IModInfo$DependencyType_ = "required" | "optional" | "incompatible" | "discouraged";
    export class $IModInfo$Ordering extends $Enum<$IModInfo$Ordering> {
        static values(): $IModInfo$Ordering[];
        static valueOf(arg0: string): $IModInfo$Ordering;
        static BEFORE: $IModInfo$Ordering;
        static AFTER: $IModInfo$Ordering;
        static NONE: $IModInfo$Ordering;
    }
    /**
     * Values that may be interpreted as {@link $IModInfo$Ordering}.
     */
    export type $IModInfo$Ordering_ = "before" | "after" | "none";
    export class $IModInfo {
        static UNBOUNDED: $VersionRange;
    }
    export interface $IModInfo {
        getLoader(): $IModLanguageLoader;
        getDisplayName(): string;
        getVersion(): $ArtifactVersion;
        getDescription(): string;
        getModURL(): ($URL) | undefined;
        getConfig(): $IConfigurable;
        getNamespace(): string;
        getLogoBlur(): boolean;
        getLogoFile(): (string) | undefined;
        getForgeFeatures(): $List<$ForgeFeature$Bound>;
        getModProperties(): $Map<string, $Object>;
        getUpdateURL(): ($URL) | undefined;
        getOwningFile(): $IModFileInfo;
        getDependencies(): $List<$IModInfo$ModVersion>;
        getModId(): string;
        get loader(): $IModLanguageLoader;
        get displayName(): string;
        get version(): $ArtifactVersion;
        get description(): string;
        get modURL(): ($URL) | undefined;
        get config(): $IConfigurable;
        get namespace(): string;
        get logoBlur(): boolean;
        get logoFile(): (string) | undefined;
        get forgeFeatures(): $List<$ForgeFeature$Bound>;
        get modProperties(): $Map<string, $Object>;
        get updateURL(): ($URL) | undefined;
        get owningFile(): $IModFileInfo;
        get dependencies(): $List<$IModInfo$ModVersion>;
        get modId(): string;
    }
    export class $IModFileInfo {
    }
    export interface $IModFileInfo {
        moduleName(): string;
        getFile(): $IModFile;
        getMods(): $List<$IModInfo>;
        getLicense(): string;
        getConfig(): $IConfigurable;
        requiredLanguageLoaders(): $List<$IModFileInfo$LanguageSpec>;
        versionString(): string;
        showAsDataPack(): boolean;
        getFileProperties(): $Map<string, $Object>;
        showAsResourcePack(): boolean;
        usesServices(): $List<string>;
        get file(): $IModFile;
        get mods(): $List<$IModInfo>;
        get license(): string;
        get config(): $IConfigurable;
        get fileProperties(): $Map<string, $Object>;
    }
    export class $IModLanguageLoader {
    }
    export interface $IModLanguageLoader {
        name(): string;
        version(): string;
        validate(arg0: $IModFile, arg1: $Collection_<$ModContainer>, arg2: $IIssueReporting_): void;
        loadMod(arg0: $IModInfo, arg1: $ModFileScanData, arg2: $ModuleLayer): $ModContainer;
    }
    export class $IConfigurable {
    }
    export interface $IConfigurable {
        getConfigElement<T>(...arg0: string[]): (T) | undefined;
        getConfigList(...arg0: string[]): $List<$IConfigurable>;
    }
    export class $IModFileInfo$LanguageSpec extends $Record {
        languageName(): string;
        acceptedVersions(): $VersionRange;
        constructor(languageName: string, acceptedVersions: $VersionRange);
    }
    /**
     * Values that may be interpreted as {@link $IModFileInfo$LanguageSpec}.
     */
    export type $IModFileInfo$LanguageSpec_ = { languageName?: string, acceptedVersions?: $VersionRange,  } | [languageName?: string, acceptedVersions?: $VersionRange, ];
}
