import { $ImmutableList } from "@package/com/google/common/collect";
import { $Map, $Collection_, $List } from "@package/java/util";

declare module "@package/net/minecraft/world/entity/schedule" {
    export class $Activity {
        getName(): string;
        static CORE: $Activity;
        static ROAR: $Activity;
        static FIGHT: $Activity;
        static TONGUE: $Activity;
        static PLAY: $Activity;
        static PANIC: $Activity;
        static INVESTIGATE: $Activity;
        static CELEBRATE: $Activity;
        static RIDE: $Activity;
        static MEET: $Activity;
        static HIDE: $Activity;
        static DIG: $Activity;
        static PLAY_DEAD: $Activity;
        static LONG_JUMP: $Activity;
        static AVOID: $Activity;
        static RAID: $Activity;
        static SWIM: $Activity;
        static EMERGE: $Activity;
        static REST: $Activity;
        static IDLE: $Activity;
        static SNIFF: $Activity;
        static WORK: $Activity;
        static ADMIRE_ITEM: $Activity;
        static PRE_RAID: $Activity;
        static LAY_SPAWN: $Activity;
        static RAM: $Activity;
        constructor(name: string);
        get name(): string;
    }
    export class $ScheduleBuilder$ActivityTransition {
    }
    export class $ScheduleBuilder {
        build(): $Schedule;
        changeActivityAt(duration: number, activity: $Activity): $ScheduleBuilder;
        constructor(schedule: $Schedule);
    }
    export class $Keyframe {
        getValue(): number;
        getTimeStamp(): number;
        constructor(timestamp: number, value: number);
        get value(): number;
        get timeStamp(): number;
    }
    export class $Timeline {
        getValueAt(dayTime: number): number;
        getKeyframes(): $ImmutableList<$Keyframe>;
        addKeyframes(frames: $Collection_<$Keyframe>): $Timeline;
        addKeyframe(duration: number, active: number): $Timeline;
        constructor();
        get keyframes(): $ImmutableList<$Keyframe>;
    }
    export class $Schedule {
        static register(key: string): $ScheduleBuilder;
        ensureTimelineExistsFor(activity: $Activity): void;
        getAllTimelinesExceptFor(activity: $Activity): $List<$Timeline>;
        getTimelineFor(activity: $Activity): $Timeline;
        getActivityAt(dayTime: number): $Activity;
        timelines: $Map<$Activity, $Timeline>;
        static WORK_START_TIME: number;
        static VILLAGER_DEFAULT: $Schedule;
        static VILLAGER_BABY: $Schedule;
        static SIMPLE: $Schedule;
        static TOTAL_WORK_TIME: number;
        static EMPTY: $Schedule;
        constructor();
    }
}
