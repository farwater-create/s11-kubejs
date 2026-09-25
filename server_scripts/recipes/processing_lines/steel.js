ServerEvents.recipes(event => {

    let nugget = 'immersiveengineering:nugget_steel'
    let ingot = 'immersiveengineering:ingot_steel'
    let block = 'immersiveengineering:storage_steel'

    global.removeMetalRecipe(event, nugget)
    global.removeMetalRecipe(event, ingot)
    global.removeMetalRecipe(event, block)

    // Steel
    event.custom({
        type: 'immersiveengineering:blast_furnace',
        input: {
            item: 'create:crushed_raw_iron'
        },
        result: {
            tag: 'c:ingots/steel'
        },
        slag: {
            tag: 'c:slag'
        },
        time: 1200
    }).id('farwater:processing_lines/steel/steel_from_crushed')

    event.custom({
        type: 'immersiveengineering:blast_furnace',
        input: {
            item: 'create_compressed:crushed_iron_pile'
        },
        result: {
            tag: 'c:storage_blocks/steel'
        },
        slag: {
            basePredicate: {
                tag: 'c:slag'
            },
            count: 9
        },
        time: 10800
    }).id('farwater:processing_lines/steel/steel_from_crushed_block')

    event.custom({
        type: 'immersiveengineering:blast_furnace',
        input: {
            item: 'immersiveengineering:dust_iron'
        },
        result: {
            tag: 'c:ingots/steel'
        },
        slag: {
            tag: 'c:slag'
        },
        time: 800
    }).id('farwater:processing_lines/steel/steel_from_dust')

})