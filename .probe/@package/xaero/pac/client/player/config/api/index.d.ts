import { $BiPredicate, $Function } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $IPlayerConfigOptionSpecAPI as $IPlayerConfigOptionSpecAPI$1, $PlayerConfigType } from "@package/xaero/pac/common/server/player/config/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IClientPlayerConfigGroupManagerAPI } from "@package/xaero/pac/client/player/config/group/api";
import { $IPlayerConfigOptionSpecAPI } from "@package/xaero/pac/common/server/player/config/api/v2";
import { $UUID, $List } from "@package/java/util";
import { $Comparable, $Object, $Class } from "@package/java/lang";
import { $IPlayerConfigPermissionAPI } from "@package/xaero/pac/common/player/config/api";
import { $IPlayerConfigStringableOptionClientStorageAPI as $IPlayerConfigStringableOptionClientStorageAPI$1 } from "@package/xaero/pac/client/player/config/api/v2";
export * as v2 from "@package/xaero/pac/client/player/config/api/v2";

declare module "@package/xaero/pac/client/player/config/api" {
    export class $IPlayerConfigClientStorageAPI {
    }
    export interface $IPlayerConfigClientStorageAPI {
        options(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI$1<never>>;
        getPermissions(): $IPlayerConfigPermissionAPI;
        getType(): $PlayerConfigType;
        getOwner(): $UUID;
        getOption<T>(arg0: $IPlayerConfigOptionSpecAPI<T>): $IPlayerConfigStringableOptionClientStorageAPI$1<T>;
        getSubConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        /**
         * @deprecated
         */
        getOptionStorage<T extends $Comparable<T>>(arg0: $IPlayerConfigOptionSpecAPI$1<T>): $IPlayerConfigStringableOptionClientStorageAPI<never>;
        /**
         * @deprecated
         */
        optionStream(): $Stream<$IPlayerConfigStringableOptionClientStorageAPI<never>>;
        getSubConfigIds(): $List<string>;
        isBeingDeleted(): boolean;
        getEffectiveSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getSubConfig(arg0: string): $IPlayerConfigClientStorageAPI;
        getSubCount(): number;
        getSubConfigLimit(): number;
        getMain(): $IPlayerConfigClientStorageAPI;
        getPlayerGroups(): $IClientPlayerConfigGroupManagerAPI;
        subConfigExists(arg0: string): boolean;
        get permissions(): $IPlayerConfigPermissionAPI;
        get type(): $PlayerConfigType;
        get owner(): $UUID;
        get subConfigAPIStream(): $Stream<$IPlayerConfigClientStorageAPI>;
        get subConfigIds(): $List<string>;
        get beingDeleted(): boolean;
        get subCount(): number;
        get subConfigLimit(): number;
        get main(): $IPlayerConfigClientStorageAPI;
        get playerGroups(): $IClientPlayerConfigGroupManagerAPI;
    }
    /**
     * @deprecated
     */
    export class $IPlayerConfigStringableOptionClientStorageAPI<T extends $Comparable<T>> {
    }
    export interface $IPlayerConfigStringableOptionClientStorageAPI<T extends $Comparable<T>> extends $IPlayerConfigOptionClientStorageAPI<T> {
        getValue(): T;
        getId(): string;
        getType(): $Class<T>;
        getComment(): string;
        getOption(): $IPlayerConfigOptionSpecAPI$1<T>;
        getTranslation(): string;
        getValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        isMutable(): boolean;
        /**
         * @deprecated
         */
        getCommandOutputWriterCast(): $Function<$Object, $Component>;
        isDefaulted(): boolean;
        /**
         * @deprecated
         */
        getStringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        /**
         * @deprecated
         */
        getCommandInputParser(): $Function<string, T>;
        getTooltipPrefix(): string;
        get value(): T;
        get id(): string;
        get type(): $Class<T>;
        get comment(): string;
        get option(): $IPlayerConfigOptionSpecAPI$1<T>;
        get translation(): string;
        get validator(): $BiPredicate<$IPlayerConfigClientStorageAPI, T>;
        get mutable(): boolean;
        get commandOutputWriterCast(): $Function<$Object, $Component>;
        get defaulted(): boolean;
        get stringValidator(): $BiPredicate<$IPlayerConfigClientStorageAPI, string>;
        get commandInputParser(): $Function<string, T>;
        get tooltipPrefix(): string;
    }
}
