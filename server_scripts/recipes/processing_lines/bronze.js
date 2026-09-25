ServerEvents.recipes(event => {

    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_brass' })
    event.remove({ id: 'createbigcannons:mixing/alloy_bronze_tinless' })

    event.recipes.create.mixing(
        Fluid.of('createbigcannons:molten_bronze', 180),
        [
            Ingredient.of('#c:ingots/brass', 2),
            Ingredient.of('create:cinder_flour')
        ]
    ).heated()

    event.recipes.create.mixing(
        Item.of('abyssal_decor:deepbronze_ingot', 2),
        [
            Fluid.of('createbigcannons:molten_bronze', 180),
            Ingredient.of('#c:ingots/nickel'),
            Ingredient.of('#c:gems/amethyst')
        ]
    ).heated()

    event.recipes.create.mixing(
        Item.of('abyssal_decor:deepbronze_ingot', 2),
        [
            Fluid.of('createbigcannons:molten_bronze', 180),
            Ingredient.of('create:crushed_raw_nickel'),
            Ingredient.of('#c:gems/amethyst')
        ]
    ).heated()

})