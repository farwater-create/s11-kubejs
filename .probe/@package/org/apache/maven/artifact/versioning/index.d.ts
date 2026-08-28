import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMajorVersion(): number;
        getMinorVersion(): number;
        parseVersion(arg0: string): void;
        getQualifier(): string;
        getBuildNumber(): number;
        getIncrementalVersion(): number;
        get majorVersion(): number;
        get minorVersion(): number;
        get qualifier(): string;
        get buildNumber(): number;
        get incrementalVersion(): number;
    }
    export class $VersionRange {
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        restrict(arg0: $VersionRange): $VersionRange;
        hasRestrictions(): boolean;
        static createFromVersion(arg0: string): $VersionRange;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        getRestrictions(): $List<$Restriction>;
        containsVersion(arg0: $ArtifactVersion): boolean;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        getRecommendedVersion(): $ArtifactVersion;
        static createFromVersionSpec(arg0: string): $VersionRange;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        get restrictions(): $List<$Restriction>;
        get recommendedVersion(): $ArtifactVersion;
    }
    export class $Restriction {
        containsVersion(arg0: $ArtifactVersion): boolean;
        getLowerBound(): $ArtifactVersion;
        getUpperBound(): $ArtifactVersion;
        isUpperBoundInclusive(): boolean;
        isLowerBoundInclusive(): boolean;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get lowerBound(): $ArtifactVersion;
        get upperBound(): $ArtifactVersion;
        get upperBoundInclusive(): boolean;
        get lowerBoundInclusive(): boolean;
    }
}
