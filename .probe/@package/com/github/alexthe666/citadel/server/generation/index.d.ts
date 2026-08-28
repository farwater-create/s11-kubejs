import { $Enum } from "@package/java/lang";

declare module "@package/com/github/alexthe666/citadel/server/generation" {
    export class $SurfaceRulesManager$RuleCategory extends $Enum<$SurfaceRulesManager$RuleCategory> {
        static values(): $SurfaceRulesManager$RuleCategory[];
        static valueOf(arg0: string): $SurfaceRulesManager$RuleCategory;
        static OVERWORLD: $SurfaceRulesManager$RuleCategory;
        static NETHER: $SurfaceRulesManager$RuleCategory;
        static END: $SurfaceRulesManager$RuleCategory;
    }
    /**
     * Values that may be interpreted as {@link $SurfaceRulesManager$RuleCategory}.
     */
    export type $SurfaceRulesManager$RuleCategory_ = "overworld" | "nether" | "end";
    export class $IExtendedNoiseGeneratorSettings {
    }
    export interface $IExtendedNoiseGeneratorSettings {
        citadel$setRuleCategory(arg0: $SurfaceRulesManager$RuleCategory_): void;
        citadel$getRuleCategory(): $SurfaceRulesManager$RuleCategory;
    }
}
