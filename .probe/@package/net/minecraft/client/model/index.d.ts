import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $AgeableListModelAccessor as $AgeableListModelAccessor$1 } from "@package/net/mehvahdjukaar/moonlight/core/mixins/accessor";
import { $HumanoidArm, $LivingEntity, $HumanoidArm_, $Mob, $Entity, $AnimationState } from "@package/net/minecraft/world/entity";
import { $AbstractWindCharge } from "@package/net/minecraft/world/entity/projectile/windcharge";
import { $Goat } from "@package/net/minecraft/world/entity/animal/goat";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $AgeableListModelAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Mesh } from "@package/dev/tr7zw/skinlayers/api";
import { $ArmorStand } from "@package/net/minecraft/world/entity/decoration";
import { $List } from "@package/java/util";
import { $PlayerModelAccessor } from "@package/dev/kosmx/playerAnim/mixin";
import { $SetableSupplier } from "@package/dev/kosmx/playerAnim/core/util";
import { $Warden } from "@package/net/minecraft/world/entity/monster/warden";
import { $RandomSource } from "@package/net/minecraft/util";
import { $AbstractHorse, $AbstractChestedHorse } from "@package/net/minecraft/world/entity/animal/horse";
import { $Turtle, $Cat, $Panda, $Fox, $PolarBear, $Sheep, $Wolf, $Bee, $Rabbit, $Parrot, $IronGolem } from "@package/net/minecraft/world/entity/animal";
import { $Function_ } from "@package/java/util/function";
import { $AnimationHolder } from "@package/net/neoforged/neoforge/client/entity/animation/json";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $Bat } from "@package/net/minecraft/world/entity/ambient";
import { $Enum, $Iterable } from "@package/java/lang";
import { $IExtensibleEnum, $ExtensionInfo } from "@package/net/neoforged/fml/common/asm/enumextension";
import { $Sniffer } from "@package/net/minecraft/world/entity/animal/sniffer";
import { $Axolotl } from "@package/net/minecraft/world/entity/animal/axolotl";
import { $SkullModelAccessor, $PlayerEntityModelAccessor } from "@package/dev/tr7zw/skinlayers/accessor";
import { $Breeze } from "@package/net/minecraft/world/entity/monster/breeze";
import { $AgeableListModelAccessor as $AgeableListModelAccessor$2 } from "@package/com/jesz/createdieselgenerators/mixins";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $ImmutableList, $ImmutableList$Builder } from "@package/com/google/common/collect";
import { $IPlayerModel, $IMutableModel } from "@package/dev/kosmx/playerAnim/impl";
import { $Armadillo } from "@package/net/minecraft/world/entity/animal/armadillo";
import { $Camel } from "@package/net/minecraft/world/entity/animal/camel";
import { $MeshDefinition, $LayerDefinition, $CubeDeformation, $PartDefinition } from "@package/net/minecraft/client/model/geom/builders";
import { $AnimationDefinition_ } from "@package/net/minecraft/client/animation";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Frog, $Tadpole } from "@package/net/minecraft/world/entity/animal/frog";
import { $Allay } from "@package/net/minecraft/world/entity/animal/allay";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Bogged, $Zombie, $Monster, $Strider, $Guardian, $Shulker, $Ravager, $Phantom, $Vex, $AbstractIllager, $Slime, $Giant } from "@package/net/minecraft/world/entity/monster";
import { $WitherBoss } from "@package/net/minecraft/world/entity/boss/wither";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
export * as geom from "@package/net/minecraft/client/model/geom";
export * as dragon from "@package/net/minecraft/client/model/dragon";

declare module "@package/net/minecraft/client/model" {
    export class $WaterPatchModel {
    }
    export interface $WaterPatchModel {
        waterPatch(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $WaterPatchModel}.
     */
    export type $WaterPatchModel_ = (() => $ModelPart);
    export class $RabbitModel<T extends $Rabbit> extends $EntityModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        handler$eal004$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BoatModel extends $ListModel<$Boat> implements $WaterPatchModel {
        parts(): $ImmutableList<$ModelPart>;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Boat, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createChildren(root: $PartDefinition): void;
        createPartsBuilder(root: $ModelPart): $ImmutableList$Builder<$ModelPart>;
        waterPatch(): $ModelPart;
        static createBodyModel(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $EndermiteModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $RaftModel extends $ListModel<$Boat> {
        parts(): $ImmutableList<$ModelPart>;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Boat, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createChildren(root: $PartDefinition): void;
        createPartsBuilder(root: $ModelPart): $ImmutableList$Builder<$ModelPart>;
        static createBodyModel(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ShieldModel extends $Model {
        handle(): $ModelPart;
        static createLayer(): $LayerDefinition;
        plate(): $ModelPart;
        constructor(root: $ModelPart);
    }
    export class $QuadrupedModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyMesh(yOffset: number, cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart, scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number, babyHeadScale: number, babyBodyScale: number, bodyYOffset: number);
    }
    export class $AbstractZombieModel<T extends $Monster> extends $HumanoidModel<T> {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        isAggressive(entity: T): boolean;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $HumanoidArmorModel<T extends $LivingEntity> extends $HumanoidModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $OcelotModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyMesh(cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        static SITTING_STATE: number;
        static BACK_LEG_Z: number;
        body: $ModelPart;
        static BACK_LEG_Y: number;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        tail1: $ModelPart;
        static FRONT_LEG_Y: number;
        tail2: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        state: number;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $ArmedModel {
    }
    export interface $ArmedModel {
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
    }
    /**
     * Values that may be interpreted as {@link $ArmedModel}.
     */
    export type $ArmedModel_ = ((arg0: $HumanoidArm, arg1: $PoseStack) => void);
    export class $PufferfishMidModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $VexModel extends $HierarchicalModel<$Vex> implements $ArmedModel {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Vex, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $TurtleModel<T extends $Turtle> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $CatModel<T extends $Cat> extends $OcelotModel<T> {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        static SITTING_STATE: number;
        static BACK_LEG_Z: number;
        body: $ModelPart;
        static BACK_LEG_Y: number;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        tail1: $ModelPart;
        static FRONT_LEG_Y: number;
        tail2: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        state: number;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $HeadedModel {
    }
    export interface $HeadedModel {
        getHead(): $ModelPart;
        get head(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $HeadedModel}.
     */
    export type $HeadedModel_ = (() => $ModelPart);
    export class $AnimationUtils {
        static animateCrossbowCharge(rightArm: $ModelPart, leftArm: $ModelPart, livingEntity: $LivingEntity, rightHanded: boolean): void;
        static animateCrossbowHold(rightArm: $ModelPart, leftArm: $ModelPart, head: $ModelPart, rightHanded: boolean): void;
        static bobModelPart(modelPart: $ModelPart, ageInTicks: number, multiplier: number): void;
        static swingWeaponDown<T extends $Mob>(rightArm: $ModelPart, leftArm: $ModelPart, mob: T, attackTime: number, ageInTicks: number): void;
        static animateZombieArms(leftArm: $ModelPart, rightArm: $ModelPart, isAggressive: boolean, attackTime: number, ageInTicks: number): void;
        static bobArms(rightArm: $ModelPart, leftArm: $ModelPart, ageInTicks: number): void;
        constructor();
    }
    export class $BlazeModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ZombieVillagerModel<T extends $Zombie> extends $HumanoidModel<T> implements $VillagerHeadModel {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createArmorLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        hatVisible(visible: boolean): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $FoxModel<T extends $Fox> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        head: $ModelPart;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $EvokerFangsModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $AgeableHierarchicalModel<E extends $Entity> extends $HierarchicalModel<E> {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(youngScaleFactor: number, bodyYOffset: number);
        constructor(youngScaleFactor: number, bodyYOffset: number, renderType: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $HierarchicalModel<E extends $Entity> extends $EntityModel<E> {
        root(): $ModelPart;
        animate(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number): void;
        animate(animationState: $AnimationState, animationDefinition: $AnimationDefinition_, ageInTicks: number, speed: number): void;
        animate(arg0: $AnimationState, arg1: $AnimationHolder, arg2: number, arg3: number): void;
        animate(animationState: $AnimationState, animationDefinition: $AnimationDefinition_, ageInTicks: number): void;
        getAnyDescendantWithName(name: string): ($ModelPart) | undefined;
        static getAnimation(arg0: $ResourceLocation_): $AnimationHolder;
        animateWalk(arg0: $AnimationHolder, arg1: number, arg2: number, arg3: number, arg4: number): void;
        animateWalk(animationDefinition: $AnimationDefinition_, limbSwing: number, limbSwingAmount: number, maxAnimationSpeed: number, animationScaleFactor: number): void;
        applyStatic(arg0: $AnimationHolder): void;
        applyStatic(animationDefinition: $AnimationDefinition_): void;
        handler$eam005$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $AgeableListModel<E extends $Entity> extends $EntityModel<E> implements $AgeableListModelAccessor, $AgeableListModelAccessor$1, $AgeableListModelAccessor$2 {
        headParts(): $Iterable<$ModelPart>;
        bodyParts(): $Iterable<$ModelPart>;
        handler$eab000$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        moonlight$invokeBodyParts(): $Iterable<$ModelPart>;
        create$callHeadParts(): $Iterable<$ModelPart>;
        create$callBodyParts(): $Iterable<$ModelPart>;
        getScaleHead(): boolean;
        getBabyHeadScale(): number;
        getBabyYHeadOffset(): number;
        getBabyZHeadOffset(): number;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor();
        constructor(scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number);
        constructor(scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number, babyHeadScale: number, babyBodyScale: number, bodyYOffset: number);
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>, scaleHead: boolean, babyYHeadOffset: number, babyZHeadOffset: number, babyHeadScale: number, babyBodyScale: number, bodyYOffset: number);
    }
    export class $ArmorStandModel extends $ArmorStandArmorModel {
        static createBodyLayer(): $LayerDefinition;
        prepareMobModel(entity: $ArmorStand, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $SilverfishModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $HoglinModel<T extends $Mob> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $RavagerModel extends $HierarchicalModel<$Ravager> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Ravager, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: $Ravager, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SnowGolemModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        getHead(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get head(): $ModelPart;
    }
    export class $ChestedHorseModel<T extends $AbstractChestedHorse> extends $HorseModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        static HEAD_PARTS: string;
        babyYHeadOffset: number;
        babyBodyScale: number;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $GuardianModel extends $HierarchicalModel<$Guardian> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Guardian, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SheepModel<T extends $Sheep> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $SquidModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ColorableAgeableListModel<E extends $Entity> extends $AgeableListModel<E> {
        setColor(color: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor();
        set color(value: number);
    }
    export class $WardenModel<T extends $Warden> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getHeartLayerModelParts(): $List<$ModelPart>;
        getTendrilsLayerModelParts(): $List<$ModelPart>;
        getBioluminescentLayerModelParts(): $List<$ModelPart>;
        getPulsatingSpotsLayerModelParts(): $List<$ModelPart>;
        leftRibcage: $ModelPart;
        rightRibcage: $ModelPart;
        attackTime: number;
        leftTendril: $ModelPart;
        young: boolean;
        rightArm: $ModelPart;
        bone: $ModelPart;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        head: $ModelPart;
        rightLeg: $ModelPart;
        leftArm: $ModelPart;
        rightTendril: $ModelPart;
        constructor(root: $ModelPart);
        get heartLayerModelParts(): $List<$ModelPart>;
        get tendrilsLayerModelParts(): $List<$ModelPart>;
        get bioluminescentLayerModelParts(): $List<$ModelPart>;
        get pulsatingSpotsLayerModelParts(): $List<$ModelPart>;
    }
    export class $EndermanModel<T extends $LivingEntity> extends $HumanoidModel<T> {
        static createBodyLayer(): $LayerDefinition;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        creepy: boolean;
        carrying: boolean;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $HorseModel<T extends $AbstractHorse> extends $AgeableListModel<T> {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        static createBodyMesh(cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        static HEAD_PARTS: string;
        babyYHeadOffset: number;
        babyBodyScale: number;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $AllayModel extends $HierarchicalModel<$Allay> implements $ArmedModel {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Allay, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $AxolotlModel<T extends $Axolotl> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static SWIMMING_LEG_XROT: number;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $EntityModel<T extends $Entity> extends $Model {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        copyPropertiesTo(otherModel: $EntityModel<T>): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $ArmadilloModel extends $AgeableHierarchicalModel<$Armadillo> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Armadillo, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ParrotModel$State extends $Enum<$ParrotModel$State> {
        static values(): $ParrotModel$State[];
        static valueOf(arg0: string): $ParrotModel$State;
        static PARTY: $ParrotModel$State;
        static SITTING: $ParrotModel$State;
        static FLYING: $ParrotModel$State;
        static ON_SHOULDER: $ParrotModel$State;
        static STANDING: $ParrotModel$State;
    }
    /**
     * Values that may be interpreted as {@link $ParrotModel$State}.
     */
    export type $ParrotModel$State_ = "flying" | "standing" | "sitting" | "party" | "on_shoulder";
    export class $WolfModel<T extends $Wolf> extends $ColorableAgeableListModel<T> {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        static createMeshDefinition(cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $ChestBoatModel extends $BoatModel {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $BatModel extends $HierarchicalModel<$Bat> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Bat, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SlimeModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createInnerBodyLayer(): $LayerDefinition;
        static createOuterBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SkullModel extends $SkullModelBase implements $SkullModelAccessor {
        static createHeadModel(): $MeshDefinition;
        static createMobHeadLayer(): $LayerDefinition;
        injectHatMesh(mesh: $Mesh): void;
        static createHumanoidHeadLayer(): $LayerDefinition;
        head: $ModelPart;
        constructor(root: $ModelPart);
    }
    export class $SheepFurModel<T extends $Sheep> extends $QuadrupedModel<T> {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        static createFurLayer(): $LayerDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $PiglinModel<T extends $Mob> extends $PlayerModel<T> {
        static addHead(cubeDeformation: $CubeDeformation, mesh: $MeshDefinition): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        setupAttackAnimation(livingEntity: T, ageInTicks: number): void;
        static createMesh(cubeDeformation: $CubeDeformation): $MeshDefinition;
        scaleHead: boolean;
        young: boolean;
        leftSleeve: $ModelPart;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        slim: boolean;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        rightPants: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        ear: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        jacket: $ModelPart;
        leftPants: $ModelPart;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightSleeve: $ModelPart;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightEar: $ModelPart;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $HumanoidModel$ArmPose extends $Enum<$HumanoidModel$ArmPose> implements $IExtensibleEnum {
        static values(): $HumanoidModel$ArmPose[];
        static valueOf(arg0: string): $HumanoidModel$ArmPose;
        static getExtensionInfo(): $ExtensionInfo;
        applyTransform<T extends $LivingEntity>(arg0: $HumanoidModel<T>, arg1: T, arg2: $HumanoidArm_): void;
        isTwoHanded(): boolean;
        static ITEM: $HumanoidModel$ArmPose;
        static BOW_AND_ARROW: $HumanoidModel$ArmPose;
        static BRUSH: $HumanoidModel$ArmPose;
        static TOOT_HORN: $HumanoidModel$ArmPose;
        static CROSSBOW_HOLD: $HumanoidModel$ArmPose;
        static FARMERSDELIGHT_SKILLET_FLIP: $HumanoidModel$ArmPose;
        static BLOCK: $HumanoidModel$ArmPose;
        static CROSSBOW_CHARGE: $HumanoidModel$ArmPose;
        static THROW_SPEAR: $HumanoidModel$ArmPose;
        static EMPTY: $HumanoidModel$ArmPose;
        static SPYGLASS: $HumanoidModel$ArmPose;
        static PARAGLIDER_PARAGLIDING: $HumanoidModel$ArmPose;
        static get extensionInfo(): $ExtensionInfo;
        get twoHanded(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $HumanoidModel$ArmPose}.
     */
    export type $HumanoidModel$ArmPose_ = "empty" | "item" | "block" | "bow_and_arrow" | "throw_spear" | "crossbow_charge" | "crossbow_hold" | "spyglass" | "toot_horn" | "brush" | "farmersdelight_skillet_flip" | "paraglider_paragliding";
    export class $GhastModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $Model {
        renderType(location: $ResourceLocation_): $RenderType;
        renderToBuffer(poseStack: $PoseStack, vertexConsumer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        renderToBuffer(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        constructor(renderType: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $PufferfishBigModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BeeModel<T extends $Bee> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $GoatModel<T extends $Goat> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $SalmonModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $VillagerModel<T extends $Entity> extends $HierarchicalModel<T> implements $HeadedModel, $VillagerHeadModel {
        getHead(): $ModelPart;
        static createBodyModel(): $MeshDefinition;
        hatVisible(visible: boolean): void;
        nose: $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get head(): $ModelPart;
    }
    export class $TropicalFishModelA<T extends $Entity> extends $ColorableHierarchicalModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $TropicalFishModelB<T extends $Entity> extends $ColorableHierarchicalModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PigModel<T extends $Entity> extends $QuadrupedModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $IllagerModel<T extends $AbstractIllager> extends $HierarchicalModel<T> implements $ArmedModel, $HeadedModel {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getHead(): $ModelPart;
        getHat(): $ModelPart;
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
        handler$ein000$illagerinvasion$setupAnim(entity: $Entity, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number, callback: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get head(): $ModelPart;
        get hat(): $ModelPart;
    }
    export class $SnifferModel<T extends $Sniffer> extends $AgeableHierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BookModel extends $Model {
        static createBodyLayer(): $LayerDefinition;
        setupAnim(time: number, rightPageFlipAmount: number, leftPageFlipAmount: number, bookOpenAmount: number): void;
        render(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        constructor(root: $ModelPart);
    }
    export class $DrownedModel<T extends $Zombie> extends $ZombieModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $HumanoidModel<T extends $LivingEntity> extends $AgeableListModel<T> implements $ArmedModel, $HeadedModel, $IMutableModel {
        getArm(side: $HumanoidArm_): $ModelPart;
        rotlerpRad(angle: number, maxAngle: number, mul: number): number;
        wrapMethod$cfh000$createbigcannons$setupAnimHead(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $Operation_<any>): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getHead(): $ModelPart;
        copyPropertiesTo(model: $HumanoidModel<T>): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        setupAttackAnimation(livingEntity: T, ageInTicks: number): void;
        handler$dli000$immersiveengineering$rotationAngleCallback(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$ijh001$moonlight$poseRightArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        handler$ijh001$moonlight$poseLeftArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        handler$zhp000$etched$setupAttackAnimation(arg0: $LivingEntity, arg1: number, arg2: $CallbackInfo, arg3: $HumanoidArm_, arg4: $ModelPart): void;
        translateToHand(side: $HumanoidArm_, poseStack: $PoseStack): void;
        static createMesh(cubeDeformation: $CubeDeformation, yOffset: number): $MeshDefinition;
        handler$zhp000$etched$poseRightArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        handler$ijh000$moonlight$setupAnim(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$zhp000$etched$poseLeftArm(arg0: $LivingEntity, arg1: $CallbackInfo): void;
        setEmoteSupplier(emoteSupplier: $SetableSupplier<any>): void;
        getEmoteSupplier(): $SetableSupplier<any>;
        setAllVisible(visible: boolean): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
        constructor(root: $ModelPart, renderType: $Function_<$ResourceLocation, $RenderType>);
        set allVisible(value: boolean);
    }
    export class $CowModel<T extends $Entity> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        getHead(): $ModelPart;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $CreeperModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PlayerModel<T extends $LivingEntity> extends $HumanoidModel<T> implements $PlayerModelAccessor, $PlayerEntityModelAccessor, $IPlayerModel {
        handler$jgf000$armor_visibility$setupCloakAnim(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        playerAnimator_prepForFirstPersonRender(): void;
        static createMesh(cubeDeformation: $CubeDeformation, slim: boolean): $MeshDefinition;
        hasThinArms(): boolean;
        handler$jdl001$watut$setupAnim(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        renderEars(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        setIgnored(visible: boolean): void;
        renderCloak(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        getRandomModelPart(random: $RandomSource): $ModelPart;
        handler$jcm000$parcool$onSetupAnimHead(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        handler$jcm000$parcool$onSetupAnimTail(arg0: $LivingEntity, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        getCloak(): $ModelPart;
        scaleHead: boolean;
        young: boolean;
        leftSleeve: $ModelPart;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        slim: boolean;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        rightPants: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        ear: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        jacket: $ModelPart;
        leftPants: $ModelPart;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightSleeve: $ModelPart;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart, slim: boolean);
        set ignored(value: boolean);
        get cloak(): $ModelPart;
    }
    export class $StriderModel<T extends $Strider> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Strider, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $MinecartModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SpiderModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createSpiderBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $WitchModel<T extends $Entity> extends $VillagerModel<T> {
        static createBodyLayer(): $LayerDefinition;
        getNose(): $ModelPart;
        setHoldingItem(holdingItem: boolean): void;
        nose: $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        set holdingItem(value: boolean);
    }
    export class $ShulkerModel<T extends $Shulker> extends $ListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getHead(): $ModelPart;
        getLid(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get head(): $ModelPart;
        get lid(): $ModelPart;
    }
    export class $TridentModel extends $Model {
        static createLayer(): $LayerDefinition;
        static TEXTURE: $ResourceLocation;
        constructor(root: $ModelPart);
    }
    export class $CodModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ListModel<E extends $Entity> extends $EntityModel<E> {
        parts(): $Iterable<$ModelPart>;
        handler$eag001$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        constructor(arg0: $Function_<$ResourceLocation, $RenderType>);
    }
    export class $SkeletonModel<T extends $Mob> extends $HumanoidModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        static createDefaultSkeletonMesh(partDefinition: $PartDefinition): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $ModelUtils {
        static rotlerpRad(min: number, max: number, delta: number): number;
        constructor();
    }
    export class $ElytraModel<T extends $LivingEntity> extends $AgeableListModel<T> {
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        static createLayer(): $LayerDefinition;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $DolphinModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $CamelModel<T extends $Camel> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BreezeModel<T extends $Breeze> extends $HierarchicalModel<T> {
        head(): $ModelPart;
        static createBodyLayer(width: number, height: number): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        eyes(): $ModelPart;
        rods(): $ModelPart;
        wind(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PolarBearModel<T extends $PolarBear> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $ArmorStandArmorModel extends $HumanoidModel<$ArmorStand> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $ArmorStand, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $LeashKnotModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PiglinHeadModel extends $SkullModelBase {
        static createHeadModel(): $MeshDefinition;
        constructor(root: $ModelPart);
    }
    export class $ColorableHierarchicalModel<E extends $Entity> extends $HierarchicalModel<E> {
        setColor(color: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor();
        set color(value: number);
    }
    export class $ParrotModel extends $HierarchicalModel<$Parrot> {
        prepare(state: $ParrotModel$State_): void;
        static createBodyLayer(): $LayerDefinition;
        setupAnim(state: $ParrotModel$State_, tickCount: number, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $Parrot, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: $Parrot, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        handler$zib000$etched$setupDanceAnimation(arg0: $Parrot, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        renderOnShoulder(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, limbSwing: number, limbSwingAmount: number, netHeadYaw: number, headPitch: number, tickCount: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $LlamaModel<T extends $AbstractChestedHorse> extends $EntityModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        handler$eaj003$xaerominimap$onRender(arg0: $PoseStack, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $FrogModel<T extends $Frog> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $VillagerHeadModel {
    }
    export interface $VillagerHeadModel {
        hatVisible(visible: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $VillagerHeadModel}.
     */
    export type $VillagerHeadModel_ = ((arg0: boolean) => void);
    export class $TadpoleModel<T extends $Tadpole> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $IronGolemModel<T extends $IronGolem> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        getFlowerHoldingArm(): $ModelPart;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
        get flowerHoldingArm(): $ModelPart;
    }
    export class $LavaSlimeModel<T extends $Slime> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $WitherBossModel<T extends $WitherBoss> extends $HierarchicalModel<T> {
        static createBodyLayer(cubeDeformation: $CubeDeformation): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $SkullModelBase extends $Model {
        setupAnim(mouthAnimation: number, yRot: number, xRot: number): void;
        constructor();
    }
    export class $PhantomModel<T extends $Phantom> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $GiantZombieModel extends $AbstractZombieModel<$Giant> {
        isAggressive(entity: $Giant): boolean;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $ZombieModel<T extends $Zombie> extends $AbstractZombieModel<T> {
        isAggressive(entity: T): boolean;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(root: $ModelPart);
    }
    export class $WindChargeModel extends $HierarchicalModel<$AbstractWindCharge> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: $AbstractWindCharge, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $BoggedModel extends $SkeletonModel<$Bogged> {
        prepareMobModel(arg0: $Bogged, arg1: number, arg2: number, arg3: number): void;
        scaleHead: boolean;
        young: boolean;
        rightArm: $ModelPart;
        static OVERLAY_SCALE: number;
        leftLeg: $ModelPart;
        riding: boolean;
        body: $ModelPart;
        swimAmount: number;
        head: $ModelPart;
        leftArm: $ModelPart;
        babyYHeadOffset: number;
        static TOOT_HORN_YROT_BASE: number;
        hat: $ModelPart;
        bodyYOffset: number;
        static TOOT_HORN_XROT_BASE: number;
        leftArmPose: $HumanoidModel$ArmPose;
        attackTime: number;
        babyZHeadOffset: number;
        babyHeadScale: number;
        static LEGGINGS_OVERLAY_SCALE: number;
        static HAT_OVERLAY_SCALE: number;
        crouching: boolean;
        rightLeg: $ModelPart;
        babyBodyScale: number;
        rightArmPose: $HumanoidModel$ArmPose;
        constructor(arg0: $ModelPart);
    }
    export class $ChestRaftModel extends $RaftModel {
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(arg0: $ModelPart);
    }
    export class $LlamaSpitModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $PandaModel<T extends $Panda> extends $QuadrupedModel<T> {
        static createBodyLayer(): $LayerDefinition;
        /**
         * Sets this entity's model rotation angles
         */
        setupAnim(entity: T, limbSwing: number, limbSwingAmount: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        prepareMobModel(entity: T, limbSwing: number, limbSwingAmount: number, partialTick: number): void;
        scaleHead: boolean;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        riding: boolean;
        body: $ModelPart;
        rightHindLeg: $ModelPart;
        head: $ModelPart;
        leftFrontLeg: $ModelPart;
        babyYHeadOffset: number;
        rightFrontLeg: $ModelPart;
        babyBodyScale: number;
        leftHindLeg: $ModelPart;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $ChickenModel<T extends $Entity> extends $AgeableListModel<T> {
        static createBodyLayer(): $LayerDefinition;
        scaleHead: boolean;
        static RED_THING: string;
        attackTime: number;
        babyZHeadOffset: number;
        young: boolean;
        babyHeadScale: number;
        babyYHeadOffset: number;
        babyBodyScale: number;
        riding: boolean;
        bodyYOffset: number;
        constructor(root: $ModelPart);
    }
    export class $PufferfishSmallModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
    export class $ShulkerBulletModel<T extends $Entity> extends $HierarchicalModel<T> {
        static createBodyLayer(): $LayerDefinition;
        attackTime: number;
        young: boolean;
        riding: boolean;
        constructor(root: $ModelPart);
    }
}
