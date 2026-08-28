import { $IGridService } from "@package/appeng/api/networking";
import { $Enum } from "@package/java/lang";

declare module "@package/appeng/api/networking/pathing" {
    export class $IPathingService {
    }
    export interface $IPathingService extends $IGridService {
        isNetworkBooting(): boolean;
        getUsedChannels(): number;
        repath(): void;
        getControllerState(): $ControllerState;
        getChannelMode(): $ChannelMode;
        get networkBooting(): boolean;
        get usedChannels(): number;
        get controllerState(): $ControllerState;
        get channelMode(): $ChannelMode;
    }
    export class $ChannelMode extends $Enum<$ChannelMode> {
        static values(): $ChannelMode[];
        static valueOf(arg0: string): $ChannelMode;
        getCableCapacityFactor(): number;
        getAdHocNetworkChannels(): number;
        static X2: $ChannelMode;
        static X3: $ChannelMode;
        static INFINITE: $ChannelMode;
        static X4: $ChannelMode;
        static DEFAULT: $ChannelMode;
        get cableCapacityFactor(): number;
        get adHocNetworkChannels(): number;
    }
    /**
     * Values that may be interpreted as {@link $ChannelMode}.
     */
    export type $ChannelMode_ = "infinite" | "default" | "x2" | "x3" | "x4";
    export class $ControllerState extends $Enum<$ControllerState> {
        static values(): $ControllerState[];
        static valueOf(arg0: string): $ControllerState;
        static CONTROLLER_ONLINE: $ControllerState;
        static CONTROLLER_CONFLICT: $ControllerState;
        static NO_CONTROLLER: $ControllerState;
    }
    /**
     * Values that may be interpreted as {@link $ControllerState}.
     */
    export type $ControllerState_ = "no_controller" | "controller_online" | "controller_conflict";
}
