ServerEvents.recipes(event => {
    
    event.remove({ output: 'immersiveengineering:ingot_aluminum', type: 'minecraft:smelting'})
    event.remove({ output: 'immersiveengineering:ingot_aluminum', type: 'minecraft:blasting' })
    event.remove({ output: 'immersiveengineering:ingot_aluminum', type: 'immersiveengineering:arc_furnace' })
    event.remove({ output: 'advancedweather:aluminum_ingot', type: 'minecraft:blasting'})
    event.remove({ id: 'advancedweather:compat/aluminum_ingot_from_mixing'})
    event.remove({ id: 'immersiveengineering:crafting/hammercrushing_aluminum'})
    event.remove({ id: 'immersiveengineering:crafting/raw_hammercrushing_aluminum'})
    event.remove({ id: 'immersiveengineering:crusher/ore_aluminum'})
    event.remove({ id: 'immersiveengineering:crusher/raw_ore_aluminum'})
    event.remove({ id: 'immersiveengineering:crusher/raw_block_aluminum'})
    event.remove({ id: 'create:splashing/immersiveengineering/crushed_raw_aluminum'})
    event.remove({ id: 'create:crushing/aluminum_ore'})

    // Bauxite Automation

    event.recipes.create.mixing(
        'immersiveengineering:raw_block_aluminum',
        [
            Ingredient.of('advancedweather:bauxite_rock'),
            Ingredient.of('#c:raw_materials/aluminum', 4)
        ]
    ).heated()
    .id('farwater:processing_lines/aluminum/bauxite_block')
    event.recipes.create.mixing(
        'advancedweather:bauxite_rock',
        [
            Ingredient.of('#c:raw_materials/aluminum', 4),
            Ingredient.of('advancedweather:alumina')
        ]
    ).heated()
    .id('farwater:processing_lines/aluminum/bauxite_rock')

    // Aluminum

    event.recipes.create.crushing(
        [
            Item.of('advancedweather:alumina', 2),
            CreateItem.of('advancedweather:alumina', 0.5),
            CreateItem.of('create:experience_nugget', 0.75)
        ],
        Ingredient.of('create:crushed_raw_aluminum')
    ).id('farwater:processing_lines/aluminum/alumina')
    event.custom({
        type: 'immersiveengineering:crusher',
        energy: 6000,
        input: {
          tag: 'c:raw_materials/aluminum'
        },
        result: {
          item: 'advancedweather:alumina',
          count: 3
        },
        secondaries: [
          {
            chance: 0.25,
            output: {
              item: 'advancedweather:alumina'
            }
          }
        ]
    }).id('farwater:processing_lines/aluminum/alumina_ie_crusher')

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
        time: 2400
    }).id('farwater:processing_lines/aluminum/aluminum')

    event.custom({
        type: "immersiveengineering:arc_furnace",
        additives: [],
        energy: 51200,
        input: {
            item: 'advancedweather:alumina_carbon_mix'
        },
        results: [
            {
                tag: 'c:ingots/aluminum'
            }
        ],
        time: 600
    }).id('farwater:processing_lines/aluminum/aluminum_arc_furnace')

    event.recipes.create.crushing(
        [
            Item.of('immersiveengineering:dust_aluminum')
        ],
        Ingredient.of('#c:ingots/aluminum')
    ).id('farwater:processing_lines/aluminum/aluminum_dust')

})