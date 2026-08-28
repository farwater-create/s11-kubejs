import { $Instant, $Duration, $Duration_ } from "@package/java/time";
import { $Reader, $InputStream, $Closeable } from "@package/java/io";
import { $Annotation } from "@package/java/lang/annotation";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Event as $Event$1 } from "@package/jdk/internal/event";
import { $Enum, $Object, $Class } from "@package/java/lang";
import { $List, $Map_, $Map, $List_ } from "@package/java/util";
export * as consumer from "@package/jdk/jfr/consumer";

declare module "@package/jdk/jfr" {
    export class $Event extends $Event$1 {
    }
    export class $RecordingState extends $Enum<$RecordingState> {
        static values(): $RecordingState[];
        static valueOf(arg0: string): $RecordingState;
        static NEW: $RecordingState;
        static DELAYED: $RecordingState;
        static CLOSED: $RecordingState;
        static RUNNING: $RecordingState;
        static STOPPED: $RecordingState;
    }
    /**
     * Values that may be interpreted as {@link $RecordingState}.
     */
    export type $RecordingState_ = "new" | "delayed" | "running" | "stopped" | "closed";
    export class $Configuration {
        getName(): string;
        static create(arg0: $Reader): $Configuration;
        static create(arg0: $Path_): $Configuration;
        getProvider(): string;
        getContents(): string;
        getDescription(): string;
        static getConfiguration(arg0: string): $Configuration;
        getSettings(): $Map<string, string>;
        getLabel(): string;
        static getConfigurations(): $List<$Configuration>;
        get name(): string;
        get provider(): string;
        get contents(): string;
        get description(): string;
        get settings(): $Map<string, string>;
        get label(): string;
        static get configurations(): $List<$Configuration>;
    }
    export class $AnnotationElement {
        getValue(arg0: string): $Object;
        getTypeName(): string;
        getAnnotation<A>(arg0: $Class<$Annotation>): A;
        hasValue(arg0: string): boolean;
        getValueDescriptors(): $List<$ValueDescriptor>;
        getTypeId(): number;
        getValues(): $List<$Object>;
        getAnnotationElements(): $List<$AnnotationElement>;
        constructor(arg0: $Class<$Annotation>);
        constructor(arg0: $Class<$Annotation>, arg1: $Object);
        constructor(arg0: $Class<$Annotation>, arg1: $Map_<string, $Object>);
        get typeName(): string;
        get valueDescriptors(): $List<$ValueDescriptor>;
        get typeId(): number;
        get values(): $List<$Object>;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $ValueDescriptor {
        getName(): string;
        isArray(): boolean;
        getTypeName(): string;
        getFields(): $List<$ValueDescriptor>;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getContentType(): string;
        getDescription(): string;
        getTypeId(): number;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        constructor(arg0: $Class<never>, arg1: string, arg2: $List_<$AnnotationElement>);
        constructor(arg0: $Class<never>, arg1: string);
        get name(): string;
        get array(): boolean;
        get typeName(): string;
        get fields(): $List<$ValueDescriptor>;
        get contentType(): string;
        get description(): string;
        get typeId(): number;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $EventType {
        getName(): string;
        isEnabled(): boolean;
        getFields(): $List<$ValueDescriptor>;
        getField(arg0: string): $ValueDescriptor;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getId(): number;
        getDescription(): string;
        getCategoryNames(): $List<string>;
        getSettingDescriptors(): $List<$SettingDescriptor>;
        getLabel(): string;
        static getEventType(arg0: $Class<$Event>): $EventType;
        getAnnotationElements(): $List<$AnnotationElement>;
        get name(): string;
        get enabled(): boolean;
        get fields(): $List<$ValueDescriptor>;
        get id(): number;
        get description(): string;
        get categoryNames(): $List<string>;
        get settingDescriptors(): $List<$SettingDescriptor>;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $Recording implements $Closeable {
        dump(arg0: $Path_): void;
        getSize(): number;
        getName(): string;
        start(): void;
        stop(): boolean;
        setName(arg0: string): void;
        getId(): number;
        getState(): $RecordingState;
        close(): void;
        copy(arg0: boolean): $Recording;
        enable(arg0: string): $EventSettings;
        enable(arg0: $Class<$Event>): $EventSettings;
        getDuration(): $Duration;
        disable(arg0: string): $EventSettings;
        disable(arg0: $Class<$Event>): $EventSettings;
        getStream(arg0: $Instant, arg1: $Instant): $InputStream;
        getDumpOnExit(): boolean;
        getStopTime(): $Instant;
        getStartTime(): $Instant;
        setToDisk(arg0: boolean): void;
        setSettings(arg0: $Map_<string, string>): void;
        setMaxAge(arg0: $Duration_): void;
        setMaxSize(arg0: number): void;
        setDuration(arg0: $Duration_): void;
        setDumpOnExit(arg0: boolean): void;
        scheduleStart(arg0: $Duration_): void;
        isToDisk(): boolean;
        getSettings(): $Map<string, string>;
        setDestination(arg0: $Path_): void;
        getMaxSize(): number;
        getMaxAge(): $Duration;
        getDestination(): $Path;
        constructor(arg0: $Map_<string, string>);
        constructor(arg0: $Configuration);
        constructor();
        get size(): number;
        get id(): number;
        get state(): $RecordingState;
        get stopTime(): $Instant;
        get startTime(): $Instant;
    }
    export class $SettingDescriptor {
        getDefaultValue(): string;
        getName(): string;
        getTypeName(): string;
        getAnnotation<A extends $Annotation>(arg0: $Class<A>): A;
        getContentType(): string;
        getDescription(): string;
        getTypeId(): number;
        getLabel(): string;
        getAnnotationElements(): $List<$AnnotationElement>;
        get defaultValue(): string;
        get name(): string;
        get typeName(): string;
        get contentType(): string;
        get description(): string;
        get typeId(): number;
        get label(): string;
        get annotationElements(): $List<$AnnotationElement>;
    }
    export class $EventSettings {
        "with"(arg0: string, arg1: string): $EventSettings;
        withStackTrace(): $EventSettings;
        withoutStackTrace(): $EventSettings;
        withoutThreshold(): $EventSettings;
        withPeriod(arg0: $Duration_): $EventSettings;
        withThreshold(arg0: $Duration_): $EventSettings;
    }
}
