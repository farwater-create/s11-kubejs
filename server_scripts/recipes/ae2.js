ServerEvents.recipes(event => {
    event.replaceInput({ output:'ae2:inscriber' }, 'minecraft:copper_ingot', 'kubejs:redstone_circuit')
    event.replaceInput({ mod: 'ae2', input: 'minecraft:iron_ingot' }, 'minecraft:iron_ingot', '#c:ingots/aluminum')
    event.replaceInput({ mod: 'ae2', input: '#c:ingots/iron', }, '#c:ingots/iron', '#c:ingots/aluminum')

    //region assemblies
    let transitional

    // Calculation
    event.remove({ output: 'ae2:calculation_processor'})
    transitional = 'ae2:printed_calculation_processor'
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('ae2:calculation_processor', 0.7),
            CreateItem.of('ae2:printed_calculation_processor', 0.2),
            CreateItem.of('ae2:printed_silicon', 0.1)
        ],
        'ae2:printed_calculation_processor',
        [
            event.recipes.create.deploying(
                transitional,
                [transitional, 'ae2:printed_silicon']
            ),
            event.recipes.create.deploying(
                transitional,
                [transitional, Ingredient.of('#c:wires/copper')]
            ),
            event.recipes.create.filling(
                transitional,
                [transitional, Fluid.of('immersiveengineering:redstone_acid', 250)]
            ),
            event.recipes.create.pressing(
                transitional,
                transitional
            )
        ]
    )
    .transitionalItem(transitional)
    .loops(1)
    .id('farwater:ae2/calculation_processor')

    // Logic
    event.remove({ output: 'ae2:logic_processor'})
    transitional = 'ae2:printed_logic_processor'
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('ae2:logic_processor', 0.7),
            CreateItem.of('ae2:printed_logic_processor', 0.2),
            CreateItem.of('ae2:printed_silicon', 0.1)
        ],
        'ae2:printed_logic_processor',
        [
            event.recipes.create.deploying(
                transitional,
                [transitional, 'ae2:printed_silicon']
            ),
            event.recipes.create.deploying(
                transitional,
                [transitional, Ingredient.of('#c:wires/iron')]
            ),
            event.recipes.create.filling(
                transitional,
                [transitional, Fluid.of('immersiveengineering:redstone_acid', 250)]
            ),
            event.recipes.create.pressing(
                transitional,
                transitional
            )
        ]
    )
    .transitionalItem(transitional)
    .loops(1)
    .id('farwater:ae2/logic_processor')

    // Engineering
    event.remove({ output: 'ae2:engineering_processor' })
    transitional = 'ae2:printed_engineering_processor'
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('ae2:engineering_processor', 0.7),
            CreateItem.of('ae2:printed_engineering_processor', 0.2),
            CreateItem.of('ae2:printed_silicon', 0.1)
        ],
        'ae2:printed_engineering_processor',
        [
            event.recipes.create.deploying(
                transitional,
                [transitional, 'ae2:printed_silicon']
            ),
            event.recipes.create.deploying(
                transitional,
                [transitional, Ingredient.of('#c:wires/gold')]
            ),
            event.recipes.create.filling(
                transitional,
                [transitional, Fluid.of('immersiveengineering:redstone_acid', 250)]
            ),
            event.recipes.create.pressing(
                transitional,
                transitional
            )
        ]
    )
    .transitionalItem(transitional)
    .loops(1)
    .id('farwater:ae2/engineering_processor')

    //endregion assemblies

    event.remove({ output: 'ae2:sky_dust' })
    event.recipes.create.crushing(['ae2:sky_stone_block', CreateItem.of('ae2:sky_dust', 0.25)], 'ae2:sky_stone_block')

    event.recipes.create.mixing(
        'ae2:damaged_budding_quartz',
        [
            'ae2:quartz_block',
            'ae2:charged_certus_quartz_crystal',
            Fluid.of('minecraft:water', 250)
        ]
    )
    event.recipes.create.mixing(
        'ae2:chipped_budding_quartz',
        [
            'ae2:damaged_budding_quartz',
            'ae2:charged_certus_quartz_crystal',
            Fluid.of('minecraft:water', 250)
        ]
    )
    event.recipes.create.mixing(
        'ae2:flawed_budding_quartz',
        [
            'ae2:chipped_budding_quartz',
            'ae2:charged_certus_quartz_crystal',
            Fluid.of('minecraft:water', 250)
        ]
    )
    event.recipes.create.crushing(['ae2:flawless_budding_quartz', CreateItem.of('ae2:certus_quartz_crystal', 0.5), CreateItem.of('ae2:certus_quartz_crystal', 0.25)], 'ae2:flawless_budding_quartz').processingTime(600)

    event.recipes.create.crushing(['ae2:chipped_budding_quartz', Item.of('ae2:certus_quartz_crystal', 2), CreateItem.of('ae2:certus_quartz_crystal', 0.5), CreateItem.of('ae2:certus_quartz_crystal', 0.25)], 'ae2:flawed_budding_quartz').processingTime(1200)
    event.recipes.create.crushing(['ae2:damaged_budding_quartz', Item.of('ae2:certus_quartz_crystal', 2), CreateItem.of('ae2:certus_quartz_crystal', 0.5), CreateItem.of('ae2:certus_quartz_crystal', 0.25)], 'ae2:chipped_budding_quartz').processingTime(1200)
    event.recipes.create.crushing([Item.of('ae2:certus_quartz_crystal', 6), CreateItem.of('ae2:certus_quartz_crystal', 0.5), CreateItem.of('ae2:certus_quartz_crystal', 0.25)], 'ae2:chipped_budding_quartz').processingTime(1200)
    
})