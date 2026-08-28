import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $SensorType, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Logger } from "@package/org/slf4j";
import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $BrainAccessor as $BrainAccessor$1 } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $MemoryModificationCounter } from "@package/net/caffeinemc/mods/lithium/common/ai";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $BrainAccessor } from "@package/net/caffeinemc/mods/lithium/mixin/ai/useless_sensors";
import { $Schedule, $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $List, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $MemoryStatus, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Stream } from "@package/java/util/stream";
import { $Object } from "@package/java/lang";
export * as goal from "@package/net/minecraft/world/entity/ai/goal";
export * as behavior from "@package/net/minecraft/world/entity/ai/behavior";
export * as attributes from "@package/net/minecraft/world/entity/ai/attributes";
export * as util from "@package/net/minecraft/world/entity/ai/util";
export * as village from "@package/net/minecraft/world/entity/ai/village";
export * as navigation from "@package/net/minecraft/world/entity/ai/navigation";
export * as sensing from "@package/net/minecraft/world/entity/ai/sensing";
export * as control from "@package/net/minecraft/world/entity/ai/control";
export * as memory from "@package/net/minecraft/world/entity/ai/memory";
export * as gossip from "@package/net/minecraft/world/entity/ai/gossip";
export * as targeting from "@package/net/minecraft/world/entity/ai/targeting";

declare module "@package/net/minecraft/world/entity/ai" {
    export class $Brain$MemoryValue<U> {
    }
    export class $Brain<E extends $LivingEntity> implements $MemoryModificationCounter, $BrainAccessor<any>, $BrainAccessor$1<any> {
        static provider<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType<never>>, sensorTypes: $Collection_<$SensorType<$Sensor<E>>>): $Brain$Provider<E>;
        setMemory<U>(memoryType: $MemoryModuleType<U>, memory: (U) | undefined): void;
        setMemory<U>(memoryType: $MemoryModuleType<U>, memory: U | null): void;
        isActive(activity: $Activity): boolean;
        setMemoryInternal<U>(memoryType: $MemoryModuleType<U>, memory: ($ExpirableValue<never>) | undefined): void;
        addActivityAndRemoveMemoryWhenStopped(activity: $Activity, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<$Object>>, memoryType: $MemoryModuleType<never>): void;
        stopAll(level: $ServerLevel, entity: $Object): void;
        static codec<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType<never>>, sensorTypes: $Collection_<$SensorType<$Sensor<E>>>): $Codec<$Brain<E>>;
        /**
         * @deprecated
         */
        getActiveActivities(): $Set<$Activity>;
        activityRequirementsAreMet(activity: $Activity): boolean;
        createPriorityPairs(priorityStart: number, tasks: $ImmutableList<$BehaviorControl<$Object>>): $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>;
        forgetOutdatedMemories(): void;
        /**
         * @deprecated
         */
        getRunningBehaviors(): $List<any>;
        lithium$getModCount(): number;
        /**
         * @deprecated
         */
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        tick(level: $ServerLevel, entity: $Object): void;
        getSchedule(): $Schedule;
        setMemoryWithExpiry<U>(memoryType: $MemoryModuleType<U>, memory: U, timeToLive: number): void;
        getActiveNonCoreActivity(): ($Activity) | undefined;
        getMemory<U>(type: $MemoryModuleType<U>): (U) | undefined;
        memories(): $Stream<$Brain$MemoryValue<never>>;
        checkMemory(memoryType: $MemoryModuleType<never>, memoryStatus: $MemoryStatus_): boolean;
        eraseMemory<U>(type: $MemoryModuleType<U>): void;
        getTimeUntilExpiry<U>(memoryType: $MemoryModuleType<U>): number;
        clearMemories(): void;
        serializeStart<T>(ops: $DynamicOps<T>): $DataResult<T>;
        addActivityWithConditions(activity: $Activity, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, memoryStatuses: $Set_<$Pair<$MemoryModuleType<never>, $MemoryStatus_>>): void;
        copyWithoutBehaviors(): $Brain<$Object>;
        updateActivityFromSchedule(dayTime: number, arg1: number): void;
        addActivity(activity: $Activity, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<$Object>>): void;
        addActivity(activity: $Activity, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>): void;
        setCoreActivities(newActivities: $Set_<$Activity>): void;
        setDefaultActivity(activity: $Activity): void;
        useDefaultActivity(): void;
        setSchedule(newSchedule: $Schedule): void;
        isMemoryValue<U>(memoryType: $MemoryModuleType<U>, memory: U): boolean;
        setActiveActivityToFirstValid(activities: $List_<$Activity>): void;
        setActiveActivityIfPossible(activity: $Activity): void;
        removeAllBehaviors(): void;
        hasMemoryValue(type: $MemoryModuleType<never>): boolean;
        addActivityAndRemoveMemoriesWhenStopped(activity: $Activity, tasks: $ImmutableList<$Pair<number, $BehaviorControl<$Object>>>, memorieStatuses: $Set_<$Pair<$MemoryModuleType<never>, $MemoryStatus_>>, memoryTypes: $Set_<$MemoryModuleType<never>>): void;
        getMemoryInternal<U>(type: $MemoryModuleType<U>): (U) | undefined;
        setActiveActivity(activity: $Activity): void;
        getSensors(): $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        getAvailableBehaviorsByPriority(): $Map<number, $Map<$Activity, $Set<$Behavior<$Object>>>>;
        activityMemoriesToEraseWhenStopped: $Map<$Activity, $Set<$MemoryModuleType<never>>>;
        sensors: $Map<$SensorType<$Sensor<$Object>>, $Sensor<$Object>>;
        coreActivities: $Set<$Activity>;
        activeActivities: $Set<$Activity>;
        static LOGGER: $Logger;
        availableBehaviorsByPriority: $Map<number, $Map<$Activity, $Set<$BehaviorControl<$Object>>>>;
        activityRequirements: $Map<$Activity, $Set<$Pair<$MemoryModuleType<never>, $MemoryStatus>>>;
        constructor(memoryModuleTypes: $Collection_<$MemoryModuleType<never>>, sensorTypes: $Collection_<$SensorType<$Sensor<$Object>>>, memoryValues: $ImmutableList<$Brain$MemoryValue<never>>, codec: $Supplier_<$Codec<$Brain<$Object>>>);
        get runningBehaviors(): $List<any>;
        get activeNonCoreActivity(): ($Activity) | undefined;
        set defaultActivity(value: $Activity);
        set activeActivityToFirstValid(value: $List_<$Activity>);
        set activeActivityIfPossible(value: $Activity);
        set activeActivity(value: $Activity);
    }
    export class $Brain$Provider<E extends $LivingEntity> {
        makeBrain(ops: $Dynamic<never>): $Brain<E>;
        constructor(memoryTypes: $Collection_<$MemoryModuleType<never>>, sensorTypes: $Collection_<$SensorType<$Sensor<E>>>);
    }
}
