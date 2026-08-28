import { $Map_, $Map } from "@package/java/util";

declare module "@package/com/natamus/collective_common_neoforge/translations" {
    export class $TranslationStorage {
    }
    export interface $TranslationStorage {
        collective$mergeTranslations(arg0: $Map_<string, string>): void;
    }
    /**
     * Values that may be interpreted as {@link $TranslationStorage}.
     */
    export type $TranslationStorage_ = ((arg0: $Map<string, string>) => void);
}
