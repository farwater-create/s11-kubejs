import { $TrackData_, $TrackData } from "@package/gg/moonflower/etched/api/record";
import { $List_, $List } from "@package/java/util";

declare module "@package/gg/moonflower/etched/core/extension" {
    export class $JukeboxSongExt {
    }
    export interface $JukeboxSongExt {
        veil$tracks(): $List<$TrackData>;
    }
    /**
     * Values that may be interpreted as {@link $JukeboxSongExt}.
     */
    export type $JukeboxSongExt_ = (() => $List_<$TrackData_>);
}
