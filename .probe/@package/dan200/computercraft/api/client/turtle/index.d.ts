import { $UpgradeType_, $UpgradeType } from "@package/dan200/computercraft/api/upgrades";
import { $Stream } from "@package/java/util/stream";
import { $Event } from "@package/net/neoforged/bus/api";
import { $TransformedModel, $TransformedModel_, $ModelLocation } from "@package/dan200/computercraft/api/client";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ITurtleUpgrade, $ITurtleAccess, $TurtleSide, $TurtleSide_ } from "@package/dan200/computercraft/api/turtle";
import { $DataComponentPatch, $DataComponentPatch_ } from "@package/net/minecraft/core/component";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/dan200/computercraft/api/client/turtle" {
    export class $RegisterTurtleModellersEvent extends $Event implements $IModBusEvent, $RegisterTurtleUpgradeModeller {
        register<T extends $ITurtleUpgrade>(arg0: $UpgradeType_<T>, arg1: $TurtleUpgradeModeller_<T>): void;
        constructor(arg0: $RegisterTurtleUpgradeModeller_);
    }
    export class $TurtleUpgradeModeller<T extends $ITurtleUpgrade> {
        static flatItem<T extends $ITurtleUpgrade>(): $TurtleUpgradeModeller<T>;
        static sided<T extends $ITurtleUpgrade>(arg0: $ResourceLocation_, arg1: $ResourceLocation_): $TurtleUpgradeModeller<T>;
        static sided<T extends $ITurtleUpgrade>(arg0: $ModelLocation, arg1: $ModelLocation): $TurtleUpgradeModeller<T>;
    }
    export interface $TurtleUpgradeModeller<T extends $ITurtleUpgrade> {
        getModel(arg0: T, arg1: $ITurtleAccess, arg2: $TurtleSide_, arg3: $DataComponentPatch_): $TransformedModel;
        getDependencies(): $Stream<$ResourceLocation>;
        get dependencies(): $Stream<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $TurtleUpgradeModeller}.
     */
    export type $TurtleUpgradeModeller_<T> = ((arg0: T, arg1: $ITurtleAccess, arg2: $TurtleSide, arg3: $DataComponentPatch) => $TransformedModel_);
    export class $RegisterTurtleUpgradeModeller {
    }
    export interface $RegisterTurtleUpgradeModeller {
        register<T extends $ITurtleUpgrade>(arg0: $UpgradeType_<T>, arg1: $TurtleUpgradeModeller_<T>): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterTurtleUpgradeModeller}.
     */
    export type $RegisterTurtleUpgradeModeller_ = ((arg0: $UpgradeType<any>, arg1: $TurtleUpgradeModeller<any>) => void);
}
