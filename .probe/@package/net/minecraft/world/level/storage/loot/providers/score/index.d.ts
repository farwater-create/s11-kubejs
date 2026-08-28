import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ScoreHolder } from "@package/net/minecraft/world/scores";
import { $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContext, $LootContext$EntityTarget, $LootContext$EntityTarget_ } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/providers/score" {
    /**
     * A `ScoreboardNameProvider` that provides the scoreboard name for an entity selected by a `EntityTarget`.
     */
    export class $ContextScoreboardNameProvider extends $Record implements $ScoreboardNameProvider {
        target(): $LootContext$EntityTarget;
        getType(): $LootScoreProviderType;
        static forTarget(target: $LootContext$EntityTarget_): $ScoreboardNameProvider;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(context: $LootContext): $ScoreHolder;
        static INLINE_CODEC: $Codec<$ContextScoreboardNameProvider>;
        static CODEC: $MapCodec<$ContextScoreboardNameProvider>;
        constructor(target: $LootContext$EntityTarget_);
        get type(): $LootScoreProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $ContextScoreboardNameProvider}.
     */
    export type $ContextScoreboardNameProvider_ = { target?: $LootContext$EntityTarget_,  } | [target?: $LootContext$EntityTarget_, ];
    /**
     * Provides a scoreboard name based on a `LootContext`.
     */
    export class $ScoreboardNameProvider {
    }
    export interface $ScoreboardNameProvider {
        getType(): $LootScoreProviderType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(context: $LootContext): $ScoreHolder;
        get type(): $LootScoreProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * The SerializerType for `ScoreboardNameProvider`.
     */
    export class $LootScoreProviderType extends $Record {
        codec(): $MapCodec<$ScoreboardNameProvider>;
        constructor(arg0: $MapCodec<$ScoreboardNameProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootScoreProviderType}.
     */
    export type $LootScoreProviderType_ = { codec?: $MapCodec<$ScoreboardNameProvider>,  } | [codec?: $MapCodec<$ScoreboardNameProvider>, ];
    /**
     * Registration for `ScoreboardNameProvider`.
     */
    export class $ScoreboardNameProviders {
        static CODEC: $Codec<$ScoreboardNameProvider>;
        static FIXED: $LootScoreProviderType;
        static CONTEXT: $LootScoreProviderType;
        constructor();
    }
    /**
     * A `ScoreboardNameProvider` that always provides a fixed name.
     */
    export class $FixedScoreboardNameProvider extends $Record implements $ScoreboardNameProvider {
        name(): string;
        static forName(name: string): $ScoreboardNameProvider;
        getType(): $LootScoreProviderType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(context: $LootContext): $ScoreHolder;
        static CODEC: $MapCodec<$FixedScoreboardNameProvider>;
        constructor(name: string);
        get type(): $LootScoreProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * Values that may be interpreted as {@link $FixedScoreboardNameProvider}.
     */
    export type $FixedScoreboardNameProvider_ = { name?: string,  } | [name?: string, ];
}
