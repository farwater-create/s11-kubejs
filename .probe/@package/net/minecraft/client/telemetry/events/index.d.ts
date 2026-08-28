import { $Duration_ } from "@package/java/time";
import { $GameType_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $TelemetryProperty_, $TelemetryEventSender_, $TelemetryPropertyMap$Builder } from "@package/net/minecraft/client/telemetry";
import { $Record } from "@package/java/lang";
import { $Ticker, $Stopwatch } from "@package/com/google/common/base";

declare module "@package/net/minecraft/client/telemetry/events" {
    export class $GameLoadTimesEvent {
        setBootstrapTime(bootstrapTime: number): void;
        send(sender: $TelemetryEventSender_): void;
        endStep(measurement: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        beginStep(measurement: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>, stopwatch: $Stopwatch): void;
        beginStep(measurement: $TelemetryProperty_<$GameLoadTimesEvent$Measurement_>): void;
        static INSTANCE: $GameLoadTimesEvent;
        constructor(timeSource: $Ticker);
        set bootstrapTime(value: number);
    }
    export class $WorldLoadTimesEvent {
        send(sender: $TelemetryEventSender_): void;
        constructor(newWorld: boolean, wordLoadDuration: $Duration_ | null);
    }
    export class $WorldUnloadEvent {
        setTime(time: number): void;
        send(sender: $TelemetryEventSender_): void;
        onPlayerInfoReceived(): void;
        constructor();
        set time(value: number);
    }
    export class $AggregatedTelemetryEvent {
        start(): void;
        stop(): void;
        tick(sender: $TelemetryEventSender_): void;
        sendEvent(sender: $TelemetryEventSender_): void;
        takeSample(): void;
        getSampleCount(): number;
        shouldTakeSample(): boolean;
        shouldSentEvent(): boolean;
        constructor();
        get sampleCount(): number;
    }
    export class $GameLoadTimesEvent$Measurement extends $Record {
        millis(): number;
        static CODEC: $Codec<$GameLoadTimesEvent$Measurement>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $GameLoadTimesEvent$Measurement}.
     */
    export type $GameLoadTimesEvent$Measurement_ = { millis?: number,  } | [millis?: number, ];
    export class $PerformanceMetricsEvent extends $AggregatedTelemetryEvent {
        constructor();
    }
    export class $WorldLoadEvent {
        addProperties(builder: $TelemetryPropertyMap$Builder): void;
        send(sender: $TelemetryEventSender_): boolean;
        setGameMode(gameMode: $GameType_, isHardcore: boolean): void;
        setServerBrand(minigameName: string): void;
        constructor(minigameName: string | null);
        set serverBrand(value: string);
    }
}
