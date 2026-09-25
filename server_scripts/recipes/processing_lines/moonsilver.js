ServerEvents.recipes(event => {

    event.recipes.create.mixing(
        Item.of('abyssal_decor:moonsilver_ingot', 2),
        [
            Ingredient.of('#c:ingots/silver'),
            Ingredient.of('ae2:sky_dust'),
            Fluid.of('aeronautics:levitite_blend', 250)
        ]
    ).superheated()

})