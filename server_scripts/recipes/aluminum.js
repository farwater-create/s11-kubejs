ServerEvents.recipes(event => {
    
    event.remove({ output: 'immersiveengineering:ingot_aluminum', type: 'minecraft:smelting'})
    event.remove({ output: 'immersiveengineering:ingot_aluminum', type: 'minecraft:blasting' })
    event.remove({ output: 'advancedweather:aluminum_ingot', type: 'minecraft:blasting'})
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_aluminum'})
    event.remove({ id: 'create:splashing/immersiveengineering/crushed_raw_aluminum'})
    event.remove({ id: 'create:crushing/aluminum_ore'})

    /* !! DISABLED !! REMOVE COMMENT TO ACTIVATE !!

    // Bauxite Automation

    event.recipes.create.mixing(
        'immersiveengineering:raw_block_aluminum',
        [
            Ingredient.of('advancedweather:bauxite_rock'),
            Ingredient.of('#c:raw_materials/aluminum', 4)
        ]
    ).heated()
    event.recipes.create.mixing(
        'advancedweather:bauxite_rock',
        [
            Ingredient.of('#c:raw_materials/aluminum', 4),
            Ingredient.of('advancedweather:alumina')
        ]
    ).heated()

    // Aluminum

    event.recipes.create.crushing(
        [
            Item.of('advancedweather:alumina', 2),
            CreateItem.of('advancedweather:alumina', 0.5),
            CreateItem.of('create:experience_nugget', 0.75)
        ],
        Ingredient.of('create:crushed_raw_aluminum')
    )

    event.custom({
        type: 'immersiveengineering:blast_furnace',
        input: {
            item: 'advancedweather:alumina_carbon_mix'
        },
        result: {
            tag: 'c:ingots/aluminum'
        },
        slag: {
            tag: 'c:slag'
        },
        time: 1800
    })
    */
})