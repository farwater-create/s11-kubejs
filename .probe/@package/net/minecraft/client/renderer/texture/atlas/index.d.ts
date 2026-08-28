import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $AtlasSourceManagerAccessor } from "@package/net/fabricmc/fabric/mixin/client/rendering";
import { $BiMap } from "@package/com/google/common/collect";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $List, $Collection_ } from "@package/java/util";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Predicate_, $Function } from "@package/java/util/function";
import { $SpriteSourcesAccessor, $LateBoundIdMapperAccessor } from "@package/net/mehvahdjukaar/codecui/mixins";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $SpriteContents } from "@package/net/minecraft/client/renderer/texture";
import { $Record } from "@package/java/lang";
import { $SpriteContentsConstructor, $SpriteContentsConstructor_ } from "@package/net/neoforged/neoforge/client/textures";
export * as sources from "@package/net/minecraft/client/renderer/texture/atlas/sources";

declare module "@package/net/minecraft/client/renderer/texture/atlas" {
    export class $SpriteResourceLoader {
        static create(sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $SpriteResourceLoader;
        static LOGGER: $Logger;
    }
    export interface $SpriteResourceLoader {
        loadSprite(location: $ResourceLocation_, resource: $Resource): $SpriteContents;
        loadSprite(arg0: $ResourceLocation_, arg1: $Resource, arg2: $SpriteContentsConstructor_): $SpriteContents;
    }
    /**
     * Values that may be interpreted as {@link $SpriteResourceLoader}.
     */
    export type $SpriteResourceLoader_ = ((arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor) => $SpriteContents);
    export class $SpriteSourceType extends $Record {
        codec(): $MapCodec<$SpriteSource>;
        constructor(arg0: $MapCodec<$SpriteSource>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteSourceType}.
     */
    export type $SpriteSourceType_ = { codec?: $MapCodec<$SpriteSource>,  } | [codec?: $MapCodec<$SpriteSource>, ];
    export class $SpriteSource$SpriteSupplier {
    }
    export interface $SpriteSource$SpriteSupplier extends $Function<$SpriteResourceLoader, $SpriteContents> {
        discard(): void;
    }
    /**
     * Values that may be interpreted as {@link $SpriteSource$SpriteSupplier}.
     */
    export type $SpriteSource$SpriteSupplier_ = (() => void);
    export class $SpriteSource$Output {
    }
    export interface $SpriteSource$Output {
        add(location: $ResourceLocation_, resource: $Resource): void;
        add(location: $ResourceLocation_, sprite: $SpriteSource$SpriteSupplier_): void;
        removeAll(predicate: $Predicate_<$ResourceLocation>): void;
    }
    export class $SpriteSources implements $AtlasSourceManagerAccessor, $SpriteSourcesAccessor, $LateBoundIdMapperAccessor {
        static getTypes$codecui_$md$707fe4$1(): $BiMap<any, any>;
        static getSourceTypeById$fabric_rendering_v1_$md$707fe4$0(): $BiMap<any, any>;
        static TYPE_CODEC: $Codec<$SpriteSourceType>;
        static PALETTED_PERMUTATIONS: $SpriteSourceType;
        static FILE_CODEC: $Codec<$List<$SpriteSource>>;
        static FILTER: $SpriteSourceType;
        static CODEC: $Codec<$SpriteSource>;
        static DIRECTORY: $SpriteSourceType;
        static SINGLE_FILE: $SpriteSourceType;
        static UNSTITCHER: $SpriteSourceType;
        constructor();
        static get types$codecui_$md$707fe4$1(): $BiMap<any, any>;
        static get sourceTypeById$fabric_rendering_v1_$md$707fe4$0(): $BiMap<any, any>;
    }
    export class $SpriteSourceList {
        static load(resourceManager: $ResourceManager, sprite: $ResourceLocation_): $SpriteSourceList;
        list(resourceManager: $ResourceManager): $List<$Function<$SpriteResourceLoader, $SpriteContents>>;
    }
    export class $SpriteSource {
        static TEXTURE_ID_CONVERTER: $FileToIdConverter;
    }
    export interface $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
    }
}
