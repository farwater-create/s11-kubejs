ServerEvents.recipes(event => {

    let nugget = 'immersiveengineering:nugget_constantan'
    let ingot = 'immersiveengineering:ingot_constantan'
    let block = 'immersiveengineering:storage_constantan'

    global.removeMetalRecipe(event, nugget)
    global.removeMetalRecipe(event, ingot)
    global.removeMetalRecipe(event, block)

    event.recipes.create.mixing(
        'immersiveengineering:ingot_constantan',
        [
            Ingredient.of('#c:ingots/copper'),
            Ingredient.of('#c:ingots/nickel')
        ]
    ).superheated()
    .id('farwater:processing_lines/constantan/ingot_mixing')

    event.custom({
        type: 'immersiveengineering:arc_furnace',
        additives: [
            {
                tag: 'c:ingots/nickel'
            }
        ],
        energy: 51200,
        input: {
            tag: 'c:ingots/copper'
        },
        results: [
            {
                tag: 'c:ingots/aluminum'
            }
        ],
        time: 600
    }).id('farwater:processing_lines/constantan/constantan_arc_furnace')

})