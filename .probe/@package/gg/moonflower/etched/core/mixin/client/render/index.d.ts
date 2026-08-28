import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/gg/moonflower/etched/core/mixin/client/render" {
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        getPlayingJukeboxSongs(): $Map<$BlockPos, $SoundInstance>;
        get playingJukeboxSongs(): $Map<$BlockPos, $SoundInstance>;
    }
    /**
     * Values that may be interpreted as {@link $LevelRendererAccessor}.
     */
    export type $LevelRendererAccessor_ = (() => $Map_<$BlockPos_, $SoundInstance>);
}
