import { $ArtifactRepository } from "@package/org/apache/maven/artifact/repository";
import { $Object } from "@package/java/lang";

declare module "@package/org/apache/maven/repository/legacy/metadata" {
    export class $ArtifactMetadata {
    }
    export interface $ArtifactMetadata {
        merge(arg0: $ArtifactMetadata): void;
        getKey(): $Object;
        getGroupId(): string;
        getArtifactId(): string;
        storeInLocalRepository(arg0: $ArtifactRepository, arg1: $ArtifactRepository): void;
        storedInGroupDirectory(): boolean;
        storedInArtifactVersionDirectory(): boolean;
        getLocalFilename(arg0: $ArtifactRepository): string;
        getRemoteFilename(): string;
        extendedToString(): string;
        getBaseVersion(): string;
        get key(): $Object;
        get groupId(): string;
        get artifactId(): string;
        get remoteFilename(): string;
        get baseVersion(): string;
    }
}
