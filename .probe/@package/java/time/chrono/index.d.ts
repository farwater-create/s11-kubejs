import { $ZoneOffset, $LocalDate, $Period, $Instant, $ZoneId, $LocalDateTime, $ZonedDateTime, $Clock, $LocalTime } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $DateTimeFormatter, $ResolverStyle_, $TextStyle_ } from "@package/java/time/format";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $Comparator, $List, $Map_, $Locale, $Set } from "@package/java/util";
import { $TemporalField, $TemporalAmount_, $Temporal, $ChronoField_, $TemporalUnit, $ValueRange, $TemporalQuery_, $TemporalAccessor, $TemporalAdjuster, $TemporalAmount, $TemporalAdjuster_ } from "@package/java/time/temporal";

declare module "@package/java/time/chrono" {
    export class $IsoEra extends $Enum<$IsoEra> implements $Era {
        static values(): $IsoEra[];
        static valueOf(arg0: string): $IsoEra;
        getValue(): number;
        static of(arg0: number): $IsoEra;
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        isSupported(arg0: $TemporalField): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        adjustInto(arg0: $Temporal): $Temporal;
        static CE: $IsoEra;
        static BCE: $IsoEra;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $IsoEra}.
     */
    export type $IsoEra_ = "bce" | "ce";
    export class $ChronoZonedDateTime<D extends $ChronoLocalDate> {
        static from(arg0: $TemporalAccessor): $ChronoZonedDateTime<never>;
        static timeLineOrder(): $Comparator<$ChronoZonedDateTime<never>>;
    }
    export interface $ChronoZonedDateTime<D extends $ChronoLocalDate> extends $Temporal, $Comparable<$ChronoZonedDateTime<never>> {
        get(arg0: $TemporalField): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoZonedDateTime<never>): number;
        getLong(arg0: $TemporalField): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalField): boolean;
        isSupported(arg0: $TemporalUnit): boolean;
        "with"(arg0: $TemporalAdjuster_): $ChronoZonedDateTime<D>;
        "with"(arg0: $TemporalField, arg1: number): $ChronoZonedDateTime<D>;
        query<R>(arg0: $TemporalQuery_<R>): R;
        getOffset(): $ZoneOffset;
        range(arg0: $TemporalField): $ValueRange;
        isEqual(arg0: $ChronoZonedDateTime<never>): boolean;
        toEpochSecond(): number;
        toInstant(): $Instant;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoZonedDateTime<D>;
        plus(arg0: $TemporalAmount_): $ChronoZonedDateTime<D>;
        getZone(): $ZoneId;
        toLocalDateTime(): $ChronoLocalDateTime<D>;
        toLocalTime(): $LocalTime;
        toLocalDate(): D;
        minus(arg0: $TemporalAmount_): $ChronoZonedDateTime<D>;
        minus(arg0: number, arg1: $TemporalUnit): $ChronoZonedDateTime<D>;
        isAfter(arg0: $ChronoZonedDateTime<never>): boolean;
        isBefore(arg0: $ChronoZonedDateTime<never>): boolean;
        getChronology(): $Chronology;
        withZoneSameInstant(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withZoneSameLocal(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withLaterOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        withEarlierOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        get offset(): $ZoneOffset;
        get zone(): $ZoneId;
        get chronology(): $Chronology;
    }
    export class $AbstractChronology implements $Chronology {
        compareTo(arg0: $Chronology): number;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $ChronoLocalDate;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $ChronoLocalDate;
        period(arg0: number, arg1: number, arg2: number): $ChronoPeriod;
        epochSecond(arg0: $Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ZoneOffset): number;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ZoneOffset): number;
        localDateTime(arg0: $TemporalAccessor): $ChronoLocalDateTime<$ChronoLocalDate>;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $ChronoLocalDate;
        dateNow(arg0: $Clock): $ChronoLocalDate;
        dateNow(): $ChronoLocalDate;
        dateNow(arg0: $ZoneId): $ChronoLocalDate;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ChronoZonedDateTime<$ChronoLocalDate>;
        zonedDateTime(arg0: $TemporalAccessor): $ChronoZonedDateTime<$ChronoLocalDate>;
        isIsoBased(): boolean;
        get isoBased(): boolean;
    }
    export class $ChronoPeriod {
        static between(arg0: $ChronoLocalDate, arg1: $ChronoLocalDate): $ChronoPeriod;
    }
    export interface $ChronoPeriod extends $TemporalAmount {
        get(arg0: $TemporalUnit): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        normalized(): $ChronoPeriod;
        plus(arg0: $TemporalAmount_): $ChronoPeriod;
        isZero(): boolean;
        getUnits(): $List<$TemporalUnit>;
        negated(): $ChronoPeriod;
        multipliedBy(arg0: number): $ChronoPeriod;
        isNegative(): boolean;
        minus(arg0: $TemporalAmount_): $ChronoPeriod;
        addTo(arg0: $Temporal): $Temporal;
        subtractFrom(arg0: $Temporal): $Temporal;
        getChronology(): $Chronology;
        get zero(): boolean;
        get units(): $List<$TemporalUnit>;
        get negative(): boolean;
        get chronology(): $Chronology;
    }
    export class $Era {
    }
    export interface $Era extends $TemporalAccessor, $TemporalAdjuster {
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        getValue(): number;
        isSupported(arg0: $TemporalField): boolean;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        adjustInto(arg0: $Temporal): $Temporal;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $Era}.
     */
    export type $Era_ = (() => number);
    export class $ChronoLocalDateTime<D extends $ChronoLocalDate> {
        static from(arg0: $TemporalAccessor): $ChronoLocalDateTime<never>;
        static timeLineOrder(): $Comparator<$ChronoLocalDateTime<never>>;
    }
    export interface $ChronoLocalDateTime<D extends $ChronoLocalDate> extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDateTime<never>> {
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDateTime<never>): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalField): boolean;
        isSupported(arg0: $TemporalUnit): boolean;
        "with"(arg0: $TemporalField, arg1: number): $ChronoLocalDateTime<D>;
        "with"(arg0: $TemporalAdjuster_): $ChronoLocalDateTime<D>;
        query<R>(arg0: $TemporalQuery_<R>): R;
        isEqual(arg0: $ChronoLocalDateTime<never>): boolean;
        toEpochSecond(arg0: $ZoneOffset): number;
        toInstant(arg0: $ZoneOffset): $Instant;
        plus(arg0: $TemporalAmount_): $ChronoLocalDateTime<D>;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDateTime<D>;
        toLocalTime(): $LocalTime;
        toLocalDate(): D;
        minus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDateTime<D>;
        minus(arg0: $TemporalAmount_): $ChronoLocalDateTime<D>;
        adjustInto(arg0: $Temporal): $Temporal;
        isAfter(arg0: $ChronoLocalDateTime<never>): boolean;
        isBefore(arg0: $ChronoLocalDateTime<never>): boolean;
        atZone(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        getChronology(): $Chronology;
        get chronology(): $Chronology;
    }
    export class $Chronology {
        static of(arg0: string): $Chronology;
        static from(arg0: $TemporalAccessor): $Chronology;
        static ofLocale(arg0: $Locale): $Chronology;
        static getAvailableChronologies(): $Set<$Chronology>;
        static get availableChronologies(): $Set<$Chronology>;
    }
    export interface $Chronology extends $Comparable<$Chronology> {
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $Chronology): number;
        getId(): string;
        range(arg0: $ChronoField_): $ValueRange;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        eraOf(arg0: number): $Era;
        date(arg0: number, arg1: number, arg2: number): $ChronoLocalDate;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $ChronoLocalDate;
        date(arg0: $TemporalAccessor): $ChronoLocalDate;
        eras(): $List<$Era>;
        getCalendarType(): string;
        isLeapYear(arg0: number): boolean;
        period(arg0: number, arg1: number, arg2: number): $ChronoPeriod;
        epochSecond(arg0: $Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ZoneOffset): number;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ZoneOffset): number;
        localDateTime(arg0: $TemporalAccessor): $ChronoLocalDateTime<$ChronoLocalDate>;
        prolepticYear(arg0: $Era_, arg1: number): number;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $ChronoLocalDate;
        dateYearDay(arg0: number, arg1: number): $ChronoLocalDate;
        dateNow(arg0: $Clock): $ChronoLocalDate;
        dateNow(): $ChronoLocalDate;
        dateNow(arg0: $ZoneId): $ChronoLocalDate;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $ChronoLocalDate;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ChronoZonedDateTime<$ChronoLocalDate>;
        zonedDateTime(arg0: $TemporalAccessor): $ChronoZonedDateTime<$ChronoLocalDate>;
        dateEpochDay(arg0: number): $ChronoLocalDate;
        isIsoBased(): boolean;
        get id(): string;
        get calendarType(): string;
        get isoBased(): boolean;
    }
    export class $ChronoLocalDate {
        static from(arg0: $TemporalAccessor): $ChronoLocalDate;
        static timeLineOrder(): $Comparator<$ChronoLocalDate>;
    }
    export interface $ChronoLocalDate extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDate> {
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDate): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalUnit): boolean;
        isSupported(arg0: $TemporalField): boolean;
        "with"(arg0: $TemporalField, arg1: number): $ChronoLocalDate;
        "with"(arg0: $TemporalAdjuster_): $ChronoLocalDate;
        query<R>(arg0: $TemporalQuery_<R>): R;
        isEqual(arg0: $ChronoLocalDate): boolean;
        plus(arg0: $TemporalAmount_): $ChronoLocalDate;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDate;
        getEra(): $Era;
        isLeapYear(): boolean;
        until(arg0: $Temporal, arg1: $TemporalUnit): number;
        until(arg0: $ChronoLocalDate): $ChronoPeriod;
        lengthOfMonth(): number;
        toEpochDay(): number;
        minus(arg0: $TemporalAmount_): $ChronoLocalDate;
        minus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDate;
        adjustInto(arg0: $Temporal): $Temporal;
        isAfter(arg0: $ChronoLocalDate): boolean;
        isBefore(arg0: $ChronoLocalDate): boolean;
        getChronology(): $Chronology;
        lengthOfYear(): number;
        atTime(arg0: $LocalTime): $ChronoLocalDateTime<never>;
        get era(): $Era;
        get leapYear(): boolean;
        get chronology(): $Chronology;
    }
    export class $IsoChronology extends $AbstractChronology implements $Serializable {
        eraOf(arg0: number): $IsoEra;
        date(arg0: number, arg1: number, arg2: number): $LocalDate;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $LocalDate;
        date(arg0: $TemporalAccessor): $LocalDate;
        period(arg0: number, arg1: number, arg2: number): $Period;
        localDateTime(arg0: $TemporalAccessor): $LocalDateTime;
        dateYearDay(arg0: number, arg1: number): $LocalDate;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $LocalDate;
        dateNow(arg0: $Clock): $LocalDate;
        dateNow(arg0: $ZoneId): $LocalDate;
        dateNow(): $LocalDate;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $LocalDate;
        zonedDateTime(arg0: $TemporalAccessor): $ZonedDateTime;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ZonedDateTime;
        dateEpochDay(arg0: number): $LocalDate;
        static INSTANCE: $IsoChronology;
    }
}
