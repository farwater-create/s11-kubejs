import { $ResourceProvider, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";

declare module "@package/team/creative/ambientsounds/mixin" {
    export class $SoundBufferLibraryAccessor {
    }
    export interface $SoundBufferLibraryAccessor {
        getResourceManager(): $ResourceProvider;
        get resourceManager(): $ResourceProvider;
    }
    /**
     * Values that may be interpreted as {@link $SoundBufferLibraryAccessor}.
     */
    export type $SoundBufferLibraryAccessor_ = (() => $ResourceProvider_);
}
