import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_, $RecipeHolder_, $RecipeHolder } from "@package/net/minecraft/world/item/crafting";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget, $WidgetTooltipHolder, $StateSwitchingButton, $WidgetSprites, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $Minecraft, $ClientRecipeBook, $RecipeBookCategories, $RecipeBookCategories_ } from "@package/net/minecraft/client";
import { $Iterator, $List, $Set, $List_ } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $RecipeBookComponentAccessor, $GhostRecipeAccessor } from "@package/umpaz/brewinandchewin/common/mixin/client";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Slot, $RecipeBookMenu } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics, $ComponentPath } from "@package/net/minecraft/client/gui";
import { $PlaceRecipe } from "@package/net/minecraft/recipebook";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $RecipeBook } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/recipebook" {
    export class $OverlayRecipeComponent$OverlayRecipeButton extends $AbstractWidget implements $PlaceRecipe<$Ingredient> {
        placeRecipe(width: number, height: number, outputSlot: number, recipe: $RecipeHolder_<never>, ingredients: $Iterator<$Ingredient_>, maxAmount: number): void;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $RecipeBookComponent implements $PlaceRecipe<$Ingredient>, $Renderable, $GuiEventListener, $NarratableEntry, $RecipeShownListener, $RecipeBookComponentAccessor {
        init(width: number, height: number, minecraft: $Minecraft, widthTooNarrow: boolean, menu: $RecipeBookMenu<never, never>): void;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        slotClicked(slot: $Slot | null): void;
        recipesUpdated(): void;
        renderGhostRecipe(guiGraphics: $GuiGraphics, leftPos: number, topPos: number, arg3: boolean, partialTick: number): void;
        hasClickedOutside(mouseX: number, arg1: number, mouseY: number, arg3: number, x: number, y: number, width: number): boolean;
        toggleVisibility(): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        updateScreenPosition(width: number, imageWidth: number): number;
        tick(): void;
        renderTooltip(guiGraphics: $GuiGraphics, x: number, y: number, mouseX: number, mouseY: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setVisible(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isVisible(): boolean;
        addItemToSlot(item: $Ingredient_, slot: number, maxAmount: number, x: number, y: number): void;
        recipesShown(recipes: $List_<$RecipeHolder_<never>>): void;
        sendUpdateSettings(): void;
        initVisuals(): void;
        setupGhostRecipe(recipe: $RecipeHolder_<never>, slots: $List_<$Slot>): void;
        handler$dkh000$emi$toggleOpen(info: $CallbackInfo): void;
        initFilterButtonTextures(): void;
        getRecipeFilterName(): $Component;
        placeRecipe(width: number, height: number, outputSlot: number, recipe: $RecipeHolder_<never>, ingredients: $Iterator<$Ingredient_>, maxAmount: number): void;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isActive(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        brewinandchewin$setStackedContents(arg0: $StackedContents): void;
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
        get recipeFilterName(): $Component;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get active(): boolean;
        get tabOrderGroup(): number;
    }
    export class $SmeltingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
    }
    export class $AbstractFurnaceRecipeBookComponent extends $RecipeBookComponent {
        getFuelItems(): $Set<$Item>;
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
        get fuelItems(): $Set<$Item>;
    }
    export class $SmokingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
    }
    export class $RecipeBookTabButton extends $StateSwitchingButton {
        getCategory(): $RecipeBookCategories;
        updateVisibility(recipeBook: $ClientRecipeBook): boolean;
        startAnimation(minecraft: $Minecraft): void;
        visible: boolean;
        tooltip: $WidgetTooltipHolder;
        active: boolean;
        sprites: $WidgetSprites;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        alpha: number;
        width: number;
        x: number;
        y: number;
        height: number;
        constructor(category: $RecipeBookCategories_);
        get category(): $RecipeBookCategories;
    }
    export class $GhostRecipe implements $GhostRecipeAccessor {
        size(): number;
        get(index: number): $GhostRecipe$GhostIngredient;
        clear(): void;
        setRecipe(recipe: $RecipeHolder_<never>): void;
        render(guiGraphics: $GuiGraphics, minecraft: $Minecraft, leftPos: number, topPos: number, offset: boolean, partialTick: number): void;
        getRecipe(): $RecipeHolder<never>;
        addIngredient(ingredient: $Ingredient_, x: number, y: number): void;
        brewinandchewin$getTime(): number;
        time: number;
        constructor();
    }
    export class $OverlayRecipeComponent$OverlayRecipeButton$Pos {
    }
    export class $OverlayRecipeComponent$OverlaySmeltingRecipeButton extends $OverlayRecipeComponent$OverlayRecipeButton {
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        height: number;
    }
    export class $RecipeCollection {
        getRecipes(): $List<$RecipeHolder<never>>;
        getRecipes(craftable: boolean): $List<$RecipeHolder<never>>;
        canCraft(handler: $StackedContents, width: number, height: number, book: $RecipeBook): void;
        registryAccess(): $RegistryAccess;
        /**
         * Checks if recipebook is not empty
         */
        hasKnownRecipes(): boolean;
        /**
         * Checks if recipebook is not empty
         */
        hasCraftable(): boolean;
        updateKnownRecipes(book: $RecipeBook): void;
        /**
         * Checks if recipebook is not empty
         */
        hasFitting(): boolean;
        isCraftable(recipe: $RecipeHolder_<never>): boolean;
        getDisplayRecipes(craftable: boolean): $List<$RecipeHolder<never>>;
        /**
         * Checks if recipebook is not empty
         */
        hasSingleResultItem(): boolean;
        constructor(registryAccess: $RegistryAccess, recipes: $List_<$RecipeHolder_<never>>);
    }
    export class $RecipeUpdateListener {
    }
    export interface $RecipeUpdateListener {
        recipesUpdated(): void;
        getRecipeBookComponent(): $RecipeBookComponent;
        get recipeBookComponent(): $RecipeBookComponent;
    }
    export class $GhostRecipe$GhostIngredient {
        getItem(): $ItemStack;
        getX(): number;
        getY(): number;
        this$0: $GhostRecipe;
        constructor(ingredient: $GhostRecipe, x: $Ingredient_, y: number, arg3: number);
        get item(): $ItemStack;
        get x(): number;
        get y(): number;
    }
    export class $RecipeBookPage {
        init(minecraft: $Minecraft, x: number, y: number): void;
        getMinecraft(): $Minecraft;
        mouseClicked(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number, arg5: number, arg6: number): boolean;
        render(guiGraphics: $GuiGraphics, x: number, y: number, mouseX: number, mouseY: number, partialTick: number): void;
        addListener(listener: $RecipeBookComponent): void;
        getRecipeBook(): $RecipeBook;
        setInvisible(): void;
        renderTooltip(guiGraphics: $GuiGraphics, x: number, y: number): void;
        listButtons(consumer: $Consumer_<$AbstractWidget>): void;
        updateCollections(recipeCollections: $List_<$RecipeCollection>, resetPageNumber: boolean): void;
        recipesShown(recipes: $List_<$RecipeHolder_<never>>): void;
        getLastClickedRecipeCollection(): $RecipeCollection;
        getLastClickedRecipe(): $RecipeHolder<never>;
        static ITEMS_PER_PAGE: number;
        constructor();
        get minecraft(): $Minecraft;
        get recipeBook(): $RecipeBook;
        get lastClickedRecipeCollection(): $RecipeCollection;
        get lastClickedRecipe(): $RecipeHolder<never>;
    }
    export class $BlastingRecipeBookComponent extends $AbstractFurnaceRecipeBookComponent {
        minecraft: $Minecraft;
        xOffset: number;
        static IMAGE_HEIGHT: number;
        static RECIPE_BUTTON_SPRITES: $WidgetSprites;
        ghostRecipe: $GhostRecipe;
        width: number;
        static IMAGE_WIDTH: number;
        menu: $RecipeBookMenu<never, never>;
        filterButton: $StateSwitchingButton;
        static RECIPE_BOOK_LOCATION: $ResourceLocation;
        height: number;
        tabButtons: $List<$RecipeBookTabButton>;
        constructor();
    }
    export class $OverlayRecipeComponent implements $Renderable, $GuiEventListener {
        init(minecraft: $Minecraft, collection: $RecipeCollection, x: number, y: number, arg4: number, arg5: number, arg6: number): void;
        /**
         * Checks if the given mouse coordinates are over the GUI element.
         * 
         * @return `true` if the mouse is over the GUI element, `false` otherwise.
         */
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isFocused(): boolean;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setVisible(focused: boolean): void;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isVisible(): boolean;
        getLastRecipeClicked(): $RecipeHolder<never>;
        getRecipeCollection(): $RecipeCollection;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when the mouse is moved within the GUI element.
         */
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        static CRAFTING_OVERLAY_HIGHLIGHTED_SPRITE: $ResourceLocation;
        isFurnaceMenu: boolean;
        static FURNACE_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static BUTTON_SIZE: number;
        static CRAFTING_OVERLAY_SPRITE: $ResourceLocation;
        time: number;
        static FURNACE_OVERLAY_SPRITE: $ResourceLocation;
        static FURNACE_OVERLAY_DISABLED_SPRITE: $ResourceLocation;
        static CRAFTING_OVERLAY_DISABLED_HIGHLIGHTED_SPRITE: $ResourceLocation;
        static CRAFTING_OVERLAY_DISABLED_SPRITE: $ResourceLocation;
        static FURNACE_OVERLAY_HIGHLIGHTED_SPRITE: $ResourceLocation;
        constructor();
        get lastRecipeClicked(): $RecipeHolder<never>;
        get recipeCollection(): $RecipeCollection;
        get rectangle(): $ScreenRectangle;
        get currentFocusPath(): $ComponentPath;
        get tabOrderGroup(): number;
    }
    export class $RecipeShownListener {
    }
    export interface $RecipeShownListener {
        recipesShown(recipes: $List_<$RecipeHolder_<never>>): void;
    }
    /**
     * Values that may be interpreted as {@link $RecipeShownListener}.
     */
    export type $RecipeShownListener_ = ((arg0: $List<$RecipeHolder<never>>) => void);
    export class $RecipeButton extends $AbstractWidget {
        init(collection: $RecipeCollection, recipeBookPage: $RecipeBookPage): void;
        getTooltipText(): $List<$Component>;
        getRecipe(): $RecipeHolder<never>;
        getCollection(): $RecipeCollection;
        /**
         * @return `true` if the GUI element is focused, `false` otherwise
         */
        isOnlyOption(): boolean;
        packedFGColor: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        alpha: number;
        width: number;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        static TICKS_TO_SWAP: number;
        height: number;
        constructor();
        get tooltipText(): $List<$Component>;
        get recipe(): $RecipeHolder<never>;
        get collection(): $RecipeCollection;
        get onlyOption(): boolean;
    }
}
