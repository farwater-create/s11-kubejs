import { $AzAnimationStage_, $AzAnimationStage } from "@package/mod/azure/azurelib/common/animation/dispatch/command/stage";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mod/azure/azurelib/common/animation/dispatch/command/sequence" {
    export class $AzAnimationSequence extends $Record {
        stages(): $List<$AzAnimationStage>;
        static CODEC: $StreamCodec<$FriendlyByteBuf, $AzAnimationSequence>;
        constructor(stages: $List_<$AzAnimationStage_>);
    }
    /**
     * Values that may be interpreted as {@link $AzAnimationSequence}.
     */
    export type $AzAnimationSequence_ = { stages?: $List_<$AzAnimationStage_>,  } | [stages?: $List_<$AzAnimationStage_>, ];
}
