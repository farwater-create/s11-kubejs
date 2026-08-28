import { $IClaimingModeAPI_ } from "@package/xaero/pac/common/claims/player/mode/api";
import { $Predicate, $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $PlayerConfigType } from "@package/xaero/pac/common/server/player/config/api";
import { $IServerPlayerConfigGroupManagerAPI } from "@package/xaero/pac/common/server/player/config/group/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Enum, $Class } from "@package/java/lang";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";

declare module "@package/xaero/pac/common/server/player/config/api/v2" {
    export class $IPlayerConfigManagerAPI {
    }
    export interface $IPlayerConfigManagerAPI {
        getLoadedConfig(arg0: $UUID_ | null): $IPlayerConfigAPI;
        getWildernessConfig(): $IPlayerConfigAPI;
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        getDefaultConfig(): $IPlayerConfigAPI;
        getServerClaimConfig(): $IPlayerConfigAPI;
        getPartyOwnerConfig(arg0: $UUID_): $IPlayerConfigAPI;
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        get wildernessConfig(): $IPlayerConfigAPI;
        get defaultConfig(): $IPlayerConfigAPI;
        get serverClaimConfig(): $IPlayerConfigAPI;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get allOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
    }
    export class $IPlayerConfigOptionSpecAPI<T> {
    }
    export interface $IPlayerConfigOptionSpecAPI<T> {
        getDefaultValue(): T;
        getId(): string;
        getType(): $Class<T>;
        getPath(): $List<string>;
        getComment(): string;
        getTranslation(): string;
        getTranslationArgs(): string[];
        isOverridable(): boolean;
        getCommentTranslationArgs(): string[];
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        getCommandInputParser(): $Function<string, T>;
        getCommentTranslation(): string;
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        isDirectlyConfigurable(): boolean;
        getTooltipPrefix(): string;
        getComponentWriter(): $Function<T, $Component>;
        getShortenedId(): string;
        get defaultValue(): T;
        get id(): string;
        get type(): $Class<T>;
        get path(): $List<string>;
        get comment(): string;
        get translation(): string;
        get translationArgs(): string[];
        get overridable(): boolean;
        get commentTranslationArgs(): string[];
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get commandInputParser(): $Function<string, T>;
        get commentTranslation(): string;
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get directlyConfigurable(): boolean;
        get tooltipPrefix(): string;
        get componentWriter(): $Function<T, $Component>;
        get shortenedId(): string;
    }
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        getType(): $PlayerConfigType;
        getRaw<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        getEffective<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getPlayerId(): $UUID;
        getFromEffectiveConfig<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        /**
         * @deprecated
         */
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        getSubConfigIds(): $List<string>;
        getDefaultRawValue<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        isBeingDeleted(): boolean;
        getSubId(): string;
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        getSubCount(): number;
        getSubConfigLimit(): number;
        getSubIndex(): number;
        tryToReset<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        getPlayerGroups(): $IServerPlayerConfigGroupManagerAPI;
        subConfigExists(arg0: number): boolean;
        subConfigExists(arg0: string): boolean;
        getUsedSubConfig(): $IPlayerConfigAPI;
        getUsedSubConfig(arg0: $IClaimingModeAPI_): $IPlayerConfigAPI;
        tryToSet<T>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T | null): $IPlayerConfigAPI$SetResult;
        get type(): $PlayerConfigType;
        get playerId(): $UUID;
        get subConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        get usedServerSubConfig(): $IPlayerConfigAPI;
        get subConfigIds(): $List<string>;
        get beingDeleted(): boolean;
        get subId(): string;
        get subCount(): number;
        get subConfigLimit(): number;
        get subIndex(): number;
        get playerGroups(): $IServerPlayerConfigGroupManagerAPI;
    }
    export class $IPlayerConfigAPI$SetResult extends $Enum<$IPlayerConfigAPI$SetResult> {
        static values(): $IPlayerConfigAPI$SetResult[];
        static valueOf(arg0: string): $IPlayerConfigAPI$SetResult;
        static SUCCESS: $IPlayerConfigAPI$SetResult;
        static ILLEGAL_OPTION: $IPlayerConfigAPI$SetResult;
        static NOT_DIRECTLY_CONFIGURABLE: $IPlayerConfigAPI$SetResult;
        static INVALID: $IPlayerConfigAPI$SetResult;
        static DEFAULTED: $IPlayerConfigAPI$SetResult;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerConfigAPI$SetResult}.
     */
    export type $IPlayerConfigAPI$SetResult_ = "invalid" | "illegal_option" | "defaulted" | "success" | "not_directly_configurable";
}
