import { $Predicate, $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IPlayerConfigOptionSpecAPI as $IPlayerConfigOptionSpecAPI$1, $IPlayerConfigAPI$SetResult_ } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $Comparable, $Enum, $Class } from "@package/java/lang";
import { $UUID_, $UUID, $List } from "@package/java/util";
import { $IPlayerConfigClientStorageAPI } from "@package/xaero/pac/client/player/config/api";
export * as v2 from "@package/xaero/pac/common/server/player/config/api/v2";

declare module "@package/xaero/pac/common/server/player/config/api" {
    export class $PlayerConfigType extends $Enum<$PlayerConfigType> {
        getName(): $Component;
        static values(): $PlayerConfigType[];
        static valueOf(arg0: string): $PlayerConfigType;
        isGlobal(): boolean;
        getSubClaimOption(): $IPlayerConfigOptionSpecAPI$1<string>;
        static PLAYER: $PlayerConfigType;
        static SERVER: $PlayerConfigType;
        static EXPIRED: $PlayerConfigType;
        static DEFAULT_PLAYER: $PlayerConfigType;
        static PARTY_CLAIMS: $PlayerConfigType;
        static WILDERNESS: $PlayerConfigType;
        get global(): boolean;
        get subClaimOption(): $IPlayerConfigOptionSpecAPI$1<string>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerConfigType}.
     */
    export type $PlayerConfigType_ = "server" | "expired" | "wilderness" | "default_player" | "player" | "party_claims";
    /**
     * @deprecated
     */
    export class $IPlayerConfigManagerAPI {
    }
    export interface $IPlayerConfigManagerAPI {
        /**
         * @deprecated
         */
        getLoadedConfig(arg0: $UUID_ | null): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getWildernessConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getOptionForId(arg0: string): $IPlayerConfigOptionSpecAPI<never>;
        /**
         * @deprecated
         */
        getDefaultConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getServerClaimConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getExpiredClaimConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getAllOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
        get wildernessConfig(): $IPlayerConfigAPI;
        get defaultConfig(): $IPlayerConfigAPI;
        get serverClaimConfig(): $IPlayerConfigAPI;
        get expiredClaimConfig(): $IPlayerConfigAPI;
        get allOptionsStream(): $Stream<$IPlayerConfigOptionSpecAPI<never>>;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigOptionSpecAPI<T extends $Comparable<T>> {
    }
    export interface $IPlayerConfigOptionSpecAPI<T extends $Comparable<T>> {
        /**
         * @deprecated
         */
        getDefaultValue(): T;
        /**
         * @deprecated
         */
        getId(): string;
        /**
         * @deprecated
         */
        getType(): $Class<T>;
        /**
         * @deprecated
         */
        getPath(): $List<string>;
        /**
         * @deprecated
         */
        getComment(): string;
        /**
         * @deprecated
         */
        getTranslation(): string;
        /**
         * @deprecated
         */
        getTranslationArgs(): string[];
        /**
         * @deprecated
         */
        getCommentTranslationArgs(): string[];
        /**
         * @deprecated
         */
        getServerSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        /**
         * @deprecated
         */
        getCommandInputParser(): $Function<string, T>;
        /**
         * @deprecated
         */
        getCommentTranslation(): string;
        /**
         * @deprecated
         */
        getClientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        /**
         * @deprecated
         */
        getConfigTypeFilter(): $Predicate<$PlayerConfigType>;
        /**
         * @deprecated
         */
        getTooltipPrefix(): string;
        /**
         * @deprecated
         */
        getShortenedId(): string;
        /**
         * @deprecated
         */
        getCommandOutputWriter(): $Function<T, $Component>;
        get defaultValue(): T;
        get id(): string;
        get type(): $Class<T>;
        get path(): $List<string>;
        get comment(): string;
        get translation(): string;
        get translationArgs(): string[];
        get commentTranslationArgs(): string[];
        get serverSideValidator(): $BiPredicate<$IPlayerConfigAPI, T>;
        get commandInputParser(): $Function<string, T>;
        get commentTranslation(): string;
        get clientSideValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get configTypeFilter(): $Predicate<$PlayerConfigType>;
        get tooltipPrefix(): string;
        get shortenedId(): string;
        get commandOutputWriter(): $Function<T, $Component>;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigAPI {
    }
    export interface $IPlayerConfigAPI {
        /**
         * @deprecated
         */
        getType(): $PlayerConfigType;
        /**
         * @deprecated
         */
        getRaw<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        createSubConfig(arg0: string): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getEffective<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        getPlayerId(): $UUID;
        /**
         * @deprecated
         */
        getFromEffectiveConfig<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        getSubConfigAPIStream(): $Stream<$IPlayerConfigAPI>;
        /**
         * @deprecated
         */
        getUsedServerSubConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getSubConfigIds(): $List<string>;
        /**
         * @deprecated
         */
        getDefaultRawValue<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): T;
        /**
         * @deprecated
         */
        isOptionAllowed(arg0: $IPlayerConfigOptionSpecAPI<never>): boolean;
        /**
         * @deprecated
         */
        isBeingDeleted(): boolean;
        /**
         * @deprecated
         */
        getSubId(): string;
        /**
         * @deprecated
         */
        getEffectiveSubConfig(arg0: number): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getEffectiveSubConfig(arg0: string): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getSubConfig(arg0: string): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        getSubCount(): number;
        /**
         * @deprecated
         */
        getSubConfigLimit(): number;
        /**
         * @deprecated
         */
        getSubIndex(): number;
        /**
         * @deprecated
         */
        tryToReset<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigAPI$SetResult;
        /**
         * @deprecated
         */
        subConfigExists(arg0: string): boolean;
        /**
         * @deprecated
         */
        subConfigExists(arg0: number): boolean;
        /**
         * @deprecated
         */
        getUsedSubConfig(): $IPlayerConfigAPI;
        /**
         * @deprecated
         */
        tryToSet<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI<T>, arg1: T | null): $IPlayerConfigAPI$SetResult;
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
        get usedSubConfig(): $IPlayerConfigAPI;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigAPI$SetResult extends $Enum<$IPlayerConfigAPI$SetResult> {
        static values(): $IPlayerConfigAPI$SetResult[];
        static valueOf(arg0: string): $IPlayerConfigAPI$SetResult;
        static fromReal(arg0: $IPlayerConfigAPI$SetResult_): $IPlayerConfigAPI$SetResult;
        static SUCCESS: $IPlayerConfigAPI$SetResult;
        static ILLEGAL_OPTION: $IPlayerConfigAPI$SetResult;
        static INVALID: $IPlayerConfigAPI$SetResult;
        static DEFAULTED: $IPlayerConfigAPI$SetResult;
    }
    /**
     * Values that may be interpreted as {@link $IPlayerConfigAPI$SetResult}.
     */
    export type $IPlayerConfigAPI$SetResult_ = "invalid" | "illegal_option" | "defaulted" | "success";
}
