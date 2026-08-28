import { $SmartBlockEntity } from "@package/com/simibubi/create/foundation/blockEntity";
import { $SequencedGearshiftBlockEntity } from "@package/com/simibubi/create/content/kinetics/transmission/sequencer";
import { $SignalBlockEntity } from "@package/com/simibubi/create/content/trains/signal";
import { $StickerBlockEntity } from "@package/com/simibubi/create/content/contraptions/chassis";
import { $Map, $Set } from "@package/java/util";
import { $StockTickerBlockEntity } from "@package/com/simibubi/create/content/logistics/stockTicker";
import { $PackageLuaObject } from "@package/com/simibubi/create/compat/computercraft/implementation/luaObjects";
import { $StationBlockEntity } from "@package/com/simibubi/create/content/trains/station";
import { $IArguments, $MethodResult } from "@package/dan200/computercraft/api/lua";
import { $IPeripheral, $IComputerAccess } from "@package/dan200/computercraft/api/peripheral";
import { $ComputerEvent } from "@package/com/simibubi/create/compat/computercraft/events";
import { $Object } from "@package/java/lang";
import { $NixieTubeBlockEntity } from "@package/com/simibubi/create/content/redstone/nixieTube";
import { $RepackagerBlockEntity } from "@package/com/simibubi/create/content/logistics/packager/repackager";
import { $DisplayLinkBlockEntity } from "@package/com/simibubi/create/content/redstone/displayLink";
import { $SpeedControllerBlockEntity } from "@package/com/simibubi/create/content/kinetics/speedController";
import { $PostboxBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort/postbox";
import { $CreativeMotorBlockEntity } from "@package/com/simibubi/create/content/kinetics/motor";
import { $TableClothBlockEntity } from "@package/com/simibubi/create/content/logistics/tableCloth";
import { $PackagerBlockEntity } from "@package/com/simibubi/create/content/logistics/packager";
import { $TrackObserverBlockEntity } from "@package/com/simibubi/create/content/trains/observer";
import { $RedstoneRequesterBlockEntity } from "@package/com/simibubi/create/content/logistics/redstoneRequester";
import { $ScrollValueBehaviour } from "@package/com/simibubi/create/foundation/blockEntity/behaviour/scrollValue";
import { $StressGaugeBlockEntity, $SpeedGaugeBlockEntity } from "@package/com/simibubi/create/content/kinetics/gauge";
import { $FrogportBlockEntity } from "@package/com/simibubi/create/content/logistics/packagePort/frogport";
import { $CreateLuaTable } from "@package/com/simibubi/create/compat/computercraft/implementation";

declare module "@package/com/simibubi/create/compat/computercraft/implementation/peripherals" {
    export class $SpeedGaugePeripheral extends $SyncedPeripheral<$SpeedGaugeBlockEntity> {
        getSpeed(): number;
        constructor(arg0: $SpeedGaugeBlockEntity);
        get speed(): number;
    }
    export class $StressGaugePeripheral extends $SyncedPeripheral<$StressGaugeBlockEntity> {
        getStressCapacity(): number;
        getStress(): number;
        constructor(arg0: $StressGaugeBlockEntity);
        get stressCapacity(): number;
        get stress(): number;
    }
    export class $DisplayLinkPeripheral extends $SyncedPeripheral<$DisplayLinkBlockEntity> {
        getSize(): $Object[];
        update(): void;
        clear(): void;
        write(arg0: string): void;
        writeBytes(arg0: $IArguments): void;
        isColor(): boolean;
        setCursorPos(arg0: number, arg1: number): void;
        clearLine(): void;
        isColour(): boolean;
        getCursorPos(): $Object[];
        static TAG_KEY: string;
        constructor(arg0: $DisplayLinkBlockEntity);
        get size(): $Object[];
        get color(): boolean;
        get colour(): boolean;
    }
    export class $TableClothShopPeripheral extends $SyncedPeripheral<$TableClothBlockEntity> {
        getAddress(): string;
        isShop(): boolean;
        getWares(): $Map<number, $Map<string, never>>;
        setWares(arg0: $IArguments): void;
        setPriceTagCount(arg0: (number) | undefined): void;
        setPriceTagItem(arg0: (string) | undefined): void;
        getPriceTagItem(): $Map<string, never>;
        getPriceTagCount(): number;
        setAddress(arg0: string): void;
        constructor(arg0: $TableClothBlockEntity);
        get shop(): boolean;
    }
    export class $TrackObserverPeripheral extends $SyncedPeripheral<$TrackObserverBlockEntity> {
        getPassingTrainName(): string;
        isTrainPassing(): boolean;
        constructor(arg0: $TrackObserverBlockEntity);
        get passingTrainName(): string;
        get trainPassing(): boolean;
    }
    export class $CreativeMotorPeripheral extends $SyncedPeripheral<$CreativeMotorBlockEntity> {
        setGeneratedSpeed(arg0: number): void;
        getGeneratedSpeed(): number;
        constructor(arg0: $CreativeMotorBlockEntity, arg1: $ScrollValueBehaviour);
    }
    export class $NixieTubePeripheral extends $SyncedPeripheral<$NixieTubeBlockEntity> {
        setText(arg0: $IArguments): void;
        setTextColor(arg0: string): void;
        setTextColour(arg0: string): void;
        setSignal(arg0: $IArguments): void;
        constructor(arg0: $NixieTubeBlockEntity);
        set text(value: $IArguments);
        set textColor(value: string);
        set textColour(value: string);
        set signal(value: $IArguments);
    }
    export class $SpeedControllerPeripheral extends $SyncedPeripheral<$SpeedControllerBlockEntity> {
        setTargetSpeed(arg0: number): void;
        getTargetSpeed(): number;
        constructor(arg0: $SpeedControllerBlockEntity, arg1: $ScrollValueBehaviour);
    }
    export class $SyncedPeripheral<T extends $SmartBlockEntity> implements $IPeripheral {
        equals(arg0: $IPeripheral): boolean;
        attach(arg0: $IComputerAccess): void;
        detach(arg0: $IComputerAccess): void;
        prepareComputerEvent(arg0: $ComputerEvent): void;
        getTarget(): $Object;
        getAdditionalTypes(): $Set<string>;
        constructor(arg0: T);
        get target(): $Object;
        get additionalTypes(): $Set<string>;
    }
    export class $SequencedGearshiftPeripheral extends $SyncedPeripheral<$SequencedGearshiftBlockEntity> {
        rotate(arg0: $IArguments): void;
        move(arg0: $IArguments): void;
        isRunning(): boolean;
        constructor(arg0: $SequencedGearshiftBlockEntity);
        get running(): boolean;
    }
    export class $RedstoneRequesterPeripheral extends $SyncedPeripheral<$RedstoneRequesterBlockEntity> {
        getAddress(): string;
        request(): void;
        setConfiguration(arg0: string): void;
        setRequest(arg0: $IArguments): void;
        getRequest(): $Map<number, $Map<string, never>>;
        getConfiguration(): string;
        setCraftingRequest(arg0: $IArguments): void;
        setAddress(arg0: string): void;
        constructor(arg0: $RedstoneRequesterBlockEntity);
        set craftingRequest(value: $IArguments);
    }
    export class $StockTickerPeripheral extends $SyncedPeripheral<$StockTickerBlockEntity> {
        list(): $Map<number, $Map<string, never>>;
        getItemDetail(arg0: number): $Map<string, never>;
        stock(arg0: (boolean) | undefined): $Map<number, $Map<string, never>>;
        requestFiltered(arg0: string, arg1: $IArguments): number;
        getStockItemDetail(arg0: number): $Map<string, never>;
        constructor(arg0: $StockTickerBlockEntity);
    }
    export class $PostboxPeripheral extends $SyncedPeripheral<$PostboxBlockEntity> {
        list(): $Map<number, $Map<string, never>>;
        getAddress(): string;
        getItemDetail(arg0: number): $Map<string, never>;
        setConfiguration(arg0: string): boolean;
        getConfiguration(): string;
        setAddress(arg0: string): void;
        constructor(arg0: $PostboxBlockEntity);
    }
    export class $FrogportPeripheral extends $SyncedPeripheral<$FrogportBlockEntity> {
        list(): $Map<number, $Map<string, never>>;
        getAddress(): string;
        getItemDetail(arg0: number): $Map<string, never>;
        setConfiguration(arg0: string): boolean;
        getConfiguration(): string;
        setAddress(arg0: string): void;
        constructor(arg0: $FrogportBlockEntity);
    }
    export class $SignalPeripheral extends $SyncedPeripheral<$SignalBlockEntity> {
        getState(): string;
        listBlockingTrainNames(): $CreateLuaTable;
        isForcedRed(): boolean;
        setForcedRed(arg0: boolean): void;
        getSignalType(): string;
        cycleSignalType(): void;
        constructor(arg0: $SignalBlockEntity);
        get state(): string;
        get signalType(): string;
    }
    export class $StickerPeripheral extends $SyncedPeripheral<$StickerBlockEntity> {
        isAttachedToBlock(): boolean;
        toggle(): boolean;
        isExtended(): boolean;
        extend(): boolean;
        retract(): boolean;
        constructor(arg0: $StickerBlockEntity);
        get attachedToBlock(): boolean;
        get extended(): boolean;
    }
    export class $StationPeripheral extends $SyncedPeripheral<$StationBlockEntity> {
        isInAssemblyMode(): boolean;
        getStationName(): string;
        isTrainImminent(): boolean;
        setTrainName(arg0: string): void;
        canTrainReach(arg0: string): $MethodResult;
        setAssemblyMode(arg0: boolean): void;
        isTrainPresent(): boolean;
        isTrainEnroute(): boolean;
        getTrainName(): string;
        setStationName(arg0: string): void;
        getSchedule(): $CreateLuaTable;
        disassemble(): void;
        distanceTo(arg0: string): $MethodResult;
        setSchedule(arg0: $IArguments): void;
        hasSchedule(): boolean;
        assemble(): void;
        constructor(arg0: $StationBlockEntity);
        get inAssemblyMode(): boolean;
        get trainImminent(): boolean;
        set assemblyMode(value: boolean);
        get trainPresent(): boolean;
        get trainEnroute(): boolean;
    }
    export class $RepackagerPeripheral extends $SyncedPeripheral<$RepackagerBlockEntity> {
        list(): $Map<number, $Map<string, never>>;
        getPackage(): $PackageLuaObject;
        getAddress(): string;
        getItemDetail(arg0: number): $Map<string, never>;
        makePackage(): boolean;
        setAddress(arg0: (string) | undefined): void;
        constructor(arg0: $RepackagerBlockEntity);
        get package(): $PackageLuaObject;
    }
    export class $PackagerPeripheral extends $SyncedPeripheral<$PackagerBlockEntity> {
        list(): $Map<number, $Map<string, never>>;
        getPackage(): $PackageLuaObject;
        getAddress(): string;
        getItemDetail(arg0: number): $Map<string, never>;
        makePackage(): boolean;
        setAddress(arg0: (string) | undefined): void;
        constructor(arg0: $PackagerBlockEntity);
        get package(): $PackageLuaObject;
    }
}
