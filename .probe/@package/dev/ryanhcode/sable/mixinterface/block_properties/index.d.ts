import { $StateDefinition, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_, $PhysicsBlockPropertiesDefinition_ } from "@package/dev/ryanhcode/sable/physics/config/block_properties";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/dev/ryanhcode/sable/mixinterface/block_properties" {
    export class $BlockStateExtension {
    }
    export interface $BlockStateExtension {
        sable$loadProperties(arg0: $StateDefinition<$Block, $BlockState_>, arg1: $PhysicsBlockPropertiesDefinition_): void;
        sable$getProperty<T>(arg0: $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<T>): T;
    }
}
