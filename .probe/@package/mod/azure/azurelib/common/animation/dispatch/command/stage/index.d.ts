import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $AzAnimationStageProperties } from "@package/mod/azure/azurelib/common/animation/property";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mod/azure/azurelib/common/animation/dispatch/command/stage" {
    export class $AzAnimationStage extends $Record {
        name(): string;
        properties(): $AzAnimationStageProperties;
        static CODEC: $StreamCodec<$FriendlyByteBuf, $AzAnimationStage>;
        constructor(name: string, properties: $AzAnimationStageProperties);
    }
    /**
     * Values that may be interpreted as {@link $AzAnimationStage}.
     */
    export type $AzAnimationStage_ = { name?: string, properties?: $AzAnimationStageProperties,  } | [name?: string, properties?: $AzAnimationStageProperties, ];
}
