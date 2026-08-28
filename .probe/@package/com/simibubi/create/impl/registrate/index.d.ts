import { $Registry } from "@package/net/minecraft/core";
import { $CreateRegistrate } from "@package/com/simibubi/create/foundation/data";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $NonNullConsumer_ } from "@package/com/tterrag/registrate/util/nullness";

declare module "@package/com/simibubi/create/impl/registrate" {
    export class $CreateRegistrateRegistrationCallbackImpl$CallbackImpl<R, T extends R> extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $CreateRegistrateRegistrationCallbackImpl$CallbackImpl}.
     */
    export type $CreateRegistrateRegistrationCallbackImpl$CallbackImpl_<R, T> = { registry?: $ResourceKey_<$Registry<any>>, callback?: $NonNullConsumer_<R>, id?: $ResourceLocation_,  } | [registry?: $ResourceKey_<$Registry<any>>, callback?: $NonNullConsumer_<R>, id?: $ResourceLocation_, ];
    export class $CreateRegistrateRegistrationCallbackImpl {
        static register<R, T extends R>(arg0: $ResourceKey_<$Registry<R>>, arg1: $ResourceLocation_, arg2: $NonNullConsumer_<T>): void;
        static provideRegistrate(arg0: $CreateRegistrate): void;
        constructor();
    }
}
