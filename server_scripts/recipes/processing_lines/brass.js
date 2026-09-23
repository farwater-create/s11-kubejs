ServerEvents.recipes(event => {

    let recipes = event.recipes
    let create = recipes.create

    let nugget = 'create:brass_nugget'
    let ingot = 'create:brass_ingot'
    let block = 'create:brass_block'

    global.removeMetalRecipe(event, ingot)
    global.removeMetalRecipe(event, block)
    global.removeMetalRecipe(event, nugget)

    /*
        "Moved the whole function here cuz it don't work on my singleplayer for some reason"
            ~ ULSTICK
    */
    let inputs = [Ingredient.of('#c:ingots/copper'), Ingredient.of('#c:ingots/zinc')]
    let inputs_crushed = [Ingredient.of('create:crushed_raw_copper'), Ingredient.of('create:crushed_raw_zinc')]
    let fluid = 'kubejs:molten_brass'

    create.mixing(
        Fluid.of(fluid, 90),
        inputs
    ).heated()

    create.mixing(
        Fluid.of(fluid, 135),
        inputs_crushed
    ).heated()

    create.mixing(
        Fluid.of(fluid, 180),
        inputs_crushed
    ).superheated()

    create.compacting(
        block,
        Fluid.of(fluid, 900)
    )

    create.compacting(
        ingot,
        Fluid.of(fluid, 90)
    )

    create.mixing(
        Fluid.of('kubejs:molten_brass', 90),
        'create:brass_ingot'
    ).heated()

})