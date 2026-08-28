import { $Behavior, $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $SensorType, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LightningBolt } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Activity } from "@package/net/minecraft/world/entity/schedule";
import { $Map } from "@package/java/util";
import { $Villager } from "@package/net/minecraft/world/entity/npc";
import { $MemoryModuleType, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $VillagerBrainEventInternal } from "@package/net/mehvahdjukaar/moonlight/core/misc";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
export * as platform from "@package/net/mehvahdjukaar/moonlight/api/events/platform";

declare module "@package/net/mehvahdjukaar/moonlight/api/events" {
    export class $ILightningStruckBlockEvent {
        static create(arg0: $BlockState_, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $LightningBolt): $ILightningStruckBlockEvent;
    }
    export interface $ILightningStruckBlockEvent extends $SimpleEvent {
        getState(): $BlockState;
        getLevel(): $LevelAccessor;
        getEntity(): $LightningBolt;
        getPos(): $BlockPos;
        get state(): $BlockState;
        get level(): $LevelAccessor;
        get entity(): $LightningBolt;
        get pos(): $BlockPos;
    }
    export class $IFireConsumeBlockEvent {
        static create(arg0: $BlockPos_, arg1: $Level, arg2: $BlockState_, arg3: number, arg4: number, arg5: $Direction_, arg6: boolean): $IFireConsumeBlockEvent;
    }
    export interface $IFireConsumeBlockEvent extends $SimpleEvent {
        getState(): $BlockState;
        getLevel(): $LevelAccessor;
        getAge(): number;
        wasReplacedByFire(): boolean;
        getFinalState(): $BlockState;
        getPos(): $BlockPos;
        getFace(): $Direction;
        getChance(): number;
        setFinalState(arg0: $BlockState_): void;
        get state(): $BlockState;
        get level(): $LevelAccessor;
        get age(): number;
        get pos(): $BlockPos;
        get face(): $Direction;
        get chance(): number;
    }
    export class $IVillagerBrainEvent {
    }
    export interface $IVillagerBrainEvent extends $SimpleEvent {
        getInternal(): $VillagerBrainEventInternal;
        addTaskToActivity<P extends $Pair<number, $Behavior<$Villager>>>(arg0: $Activity, arg1: P): boolean;
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        scheduleActivity(arg0: $Activity, arg1: number, arg2: number): void;
        getVillager(): $Villager;
        addOrReplaceActivity(arg0: $Activity, arg1: $ImmutableList<$Pair<number, $BehaviorControl<$Villager>>>): void;
        addSensor(arg0: $SensorType<$Sensor<$Villager>>): void;
        get internal(): $VillagerBrainEventInternal;
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        get villager(): $Villager;
    }
    export class $IDropItemOnDeathEvent {
        static create(arg0: $ItemStack_, arg1: $Player, arg2: boolean): $IDropItemOnDeathEvent;
    }
    export interface $IDropItemOnDeathEvent extends $SimpleEvent {
        isBeforeDrop(): boolean;
        setReturnItemStack(arg0: $ItemStack_): void;
        getItemStack(): $ItemStack;
        getPlayer(): $Player;
        getReturnItemStack(): $ItemStack;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
        get beforeDrop(): boolean;
        get itemStack(): $ItemStack;
        get player(): $Player;
    }
    export class $SimpleEvent {
    }
    export interface $SimpleEvent {
    }
}
