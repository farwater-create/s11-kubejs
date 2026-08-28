import { $SceneBuildingUtil, $SceneBuilder } from "@package/net/createmod/ponder/api/scene";
export * as fluid from "@package/com/simibubi/create/infrastructure/ponder/scenes/fluid";
export * as trains from "@package/com/simibubi/create/infrastructure/ponder/scenes/trains";
export * as highLogistics from "@package/com/simibubi/create/infrastructure/ponder/scenes/highLogistics";

declare module "@package/com/simibubi/create/infrastructure/ponder/scenes" {
    export class $FunnelScenes {
        static compat(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static directionality(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static intro(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static brass(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static transposer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $DisplayScenes {
        static link(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static board(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $DetectorScenes {
        static thresholdSwitch(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static smartObserver(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $SteamScenes {
        static engine(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static whistle(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ItemVaultScenes {
        static sizes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static storage(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $FanScenes {
        static direction(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static processing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $EjectorScenes {
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static ejector(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static splitY(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $DeployerScenes {
        static filter(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static modes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static processing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static contraption(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $BearingScenes {
        static clockwork(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static windmillsAnyStructure(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static sail(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static windmillsAsSource(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static bearingModes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static mechanicalBearing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static stabilizedBearings(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static sailFrame(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $RollerScenes {
        static fill(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static clearAndPave(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ElevatorScenes {
        static elevator(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static multiRope(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $KineticsScenes {
        static valveHandle(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static speedController(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static speedometer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static stressometer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static gearshift(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static gearbox(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static clutch(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static creativeMotorMojang(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static cogwheelsCanBeEncased(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static creativeMotor(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static shaftAsRelay(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static sequencedGearshift(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static shaftsCanBeEncased(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static largeCogAsRelay(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static largeWaterWheel(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static cogsSpeedUp(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static waterWheel(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static handCrank(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static cogAsRelay(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $CartAssemblerScenes {
        static anchor(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static modes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static rails(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static dual(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $RedstoneScenes2 {
        static roseQuartzLamp(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static pulseTimer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ProcessingScenes {
        static mixing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static basin(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static blazeBurner(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static millstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static pressing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static compacting(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static emptyBlazeBurner(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static crushingWheels(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $GantryScenes {
        static direction(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static introForShaft(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static introForPinion(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static subgantry(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $PulleyScenes {
        static attachment(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static movement(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static movementModes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static multiRope(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $TemplateScenes {
        static templateMethod(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $MechanicalDrillScenes {
        static contraption(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static breaker(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ChuteScenes {
        static smart(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static downward(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static upward(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $MovementActorScenes {
        static harvester(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static contraptionControls(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static psiTransfer(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static psiRedstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static plough(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ChainDriveScenes {
        static adjustableChainGearshift(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static chainDriveAsRelay(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $TunnelScenes {
        static brass(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static andesite(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static brassModes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ArmScenes {
        static setup(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static modes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static filtering(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstone(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $MechanicalSawScenes {
        static processing(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static contraption(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static treeCutting(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $PistonScenes {
        static movement(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static poles(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static movementModes(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $ChassisScenes {
        static radial(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static superGlue(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static linearGroup(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static linearAttachement(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $CrafterScenes {
        static setup(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static connect(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static covers(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $RedstoneScenes {
        static contact(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static sticker(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static nixieTube(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static poweredToggleLatch(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static poweredLatch(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static analogLever(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static redstoneLink(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static pulseExtender(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static pulseRepeater(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
    export class $BeltScenes {
        static transport(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static depot(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static directions(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static beltConnector(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        static beltsCanBeEncased(arg0: $SceneBuilder, arg1: $SceneBuildingUtil): void;
        constructor();
    }
}
