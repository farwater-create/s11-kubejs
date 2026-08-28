import { $MinecraftServer } from "@package/net/minecraft/server";
import { $MBeanInfo, $DynamicMBean, $AttributeList, $Attribute } from "@package/javax/management";
import { $Object } from "@package/java/lang";

declare module "@package/net/minecraft/util/monitoring/jmx" {
    export class $MinecraftServerStatistics implements $DynamicMBean {
        invoke(actionName: string, params: $Object[], signature: string[]): $Object;
        getAttributes(attributes: string[]): $AttributeList;
        getAttribute(name: string): $Object;
        setAttribute(attribute: $Attribute): void;
        getMBeanInfo(): $MBeanInfo;
        setAttributes(attributes: $AttributeList): $AttributeList;
        static registerJmxMonitoring(server: $MinecraftServer): void;
        get MBeanInfo(): $MBeanInfo;
    }
    export class $MinecraftServerStatistics$AttributeDescription {
    }
}
