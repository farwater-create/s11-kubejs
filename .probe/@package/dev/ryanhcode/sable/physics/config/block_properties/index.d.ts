import { $Codec, $DataResult } from "@package/com/mojang/serialization";
import { $BlockState_, $StateDefinition } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $List_, $Map_, $Map } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $ExtraCodecs$TagOrElementLocation_, $ExtraCodecs$TagOrElementLocation } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ryanhcode/sable/physics/config/block_properties" {
    export class $BlockStateConditionSet$BlockStateCondition extends $Record {
        property(): string;
        value(): string;
        static parse(arg0: string): $BlockStateConditionSet$BlockStateCondition;
        constructor(property: string, value: string);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateConditionSet$BlockStateCondition}.
     */
    export type $BlockStateConditionSet$BlockStateCondition_ = { property?: string, value?: string,  } | [property?: string, value?: string, ];
    export class $BlockStateConditionSet extends $Record {
        matches(arg0: $StateDefinition<$Block, $BlockState_>, arg1: $BlockState_): boolean;
        static parse(arg0: string): $DataResult<$BlockStateConditionSet>;
        blockStateConditions(): $List<$BlockStateConditionSet$BlockStateCondition>;
        static CODEC: $Codec<$BlockStateConditionSet>;
        constructor(blockStateConditions: $List_<$BlockStateConditionSet$BlockStateCondition_>);
    }
    /**
     * Values that may be interpreted as {@link $BlockStateConditionSet}.
     */
    export type $BlockStateConditionSet_ = { blockStateConditions?: $List_<$BlockStateConditionSet$BlockStateCondition_>,  } | [blockStateConditions?: $List_<$BlockStateConditionSet$BlockStateCondition_>, ];
    export class $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType<T> extends $Record {
        id(): number;
        defaultValue(): T;
        codec(): $Codec<T>;
        constructor(id: number, codec: $Codec<T>, defaultValue: T);
    }
    /**
     * Values that may be interpreted as {@link $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType}.
     */
    export type $PhysicsBlockPropertyTypes$PhysicsBlockPropertyType_<T> = { defaultValue?: any, codec?: $Codec<any>, id?: number,  } | [defaultValue?: any, codec?: $Codec<any>, id?: number, ];
    export class $PhysicsBlockPropertiesDefinition extends $Record {
        priority(): number;
        properties(): $Map<$ResourceLocation, $Object>;
        selector(): $ExtraCodecs$TagOrElementLocation;
        overrides(): ($Map<$BlockStateConditionSet, $Map<$ResourceLocation, $Object>>) | undefined;
        static PROPERTIES_CODEC: $Codec<$Map<$ResourceLocation, $Object>>;
        static CODEC: $Codec<$PhysicsBlockPropertiesDefinition>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $PhysicsBlockPropertiesDefinition>;
        constructor(selector: $ExtraCodecs$TagOrElementLocation_, priority: number, properties: $Map_<$ResourceLocation_, $Object>, overrides: ($Map_<$BlockStateConditionSet_, $Map_<$ResourceLocation_, $Object>>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $PhysicsBlockPropertiesDefinition}.
     */
    export type $PhysicsBlockPropertiesDefinition_ = { selector?: $ExtraCodecs$TagOrElementLocation_, overrides?: ($Map_<$BlockStateConditionSet_, $Map_<$ResourceLocation_, $Object>>) | undefined, properties?: $Map_<$ResourceLocation_, $Object>, priority?: number,  } | [selector?: $ExtraCodecs$TagOrElementLocation_, overrides?: ($Map_<$BlockStateConditionSet_, $Map_<$ResourceLocation_, $Object>>) | undefined, properties?: $Map_<$ResourceLocation_, $Object>, priority?: number, ];
}
