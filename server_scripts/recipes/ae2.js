ServerEvents.recipes(event => {
    event.replaceInput({ mod: 'ae2', input: 'minecraft:iron_ingot' }, 'minecraft:iron_ingot', '#c:plates/aluminum')
    
    event.stonecutting('ae2:calculation_processor_press', 'cataclysm:witherite_ingot')
    event.stonecutting('ae2:engineering_processor_press', 'cataclysm:witherite_ingot')
    event.stonecutting('ae2:logic_processor_press', 'cataclysm:witherite_ingot')
    event.stonecutting('ae2:silicon_press', 'cataclysm:witherite_ingot')

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

    //region Certus Quartz

    event.recipes.create.crushing(['ae2:flawless_budding_quartz', CreateItem.of('ae2:certus_quartz_crystal', 0.5), CreateItem.of('ae2:certus_quartz_crystal', 0.25)], 'ae2:flawless_budding_quartz').processingTime(600)

    event.recipes.create.crushing(['ae2:chipped_budding_quartz', Item.of('ae2:certus_quartz_crystal', 2), CreateItem.of('ae2:certus_quartz_crystal', 0.5), CreateItem.of('ae2:certus_quartz_crystal', 0.25)], 'ae2:flawed_budding_quartz').processingTime(1200)
    event.recipes.create.crushing(['ae2:damaged_budding_quartz', Item.of('ae2:certus_quartz_crystal', 2), CreateItem.of('ae2:certus_quartz_crystal', 0.5), CreateItem.of('ae2:certus_quartz_crystal', 0.25)], 'ae2:chipped_budding_quartz').processingTime(1200)
    event.recipes.create.crushing([Item.of('ae2:certus_quartz_crystal', 6), CreateItem.of('ae2:certus_quartz_crystal', 0.5), CreateItem.of('ae2:certus_quartz_crystal', 0.25)], 'ae2:chipped_budding_quartz').processingTime(1200)

    //endregion Certus Quartz

    //region AE Machines

    event.remove({ id: 'ae2:network/blocks/crystal_processing_charger' })
    event.shaped(
        Item.of('ae2:charger'),
        [
            'APA',
            'A  ',
            'ACA'
        ],
        {
            A: '#c:plates/aluminum',
            P: 'immersiveengineering:wirecoil_copper',
            C: 'immersiveengineering:component_electronic'
        }
    )

    event.remove({ id: 'ae2:network/blocks/inscribers' })
    event.shaped(
        Item.of('ae2:inscriber'),
        [
            'APA',
            'A A',
            'ACA'
        ],
        {
            A: '#c:plates/aluminum',
            P: 'create:mechanical_press',
            C: 'immersiveengineering:component_electronic'
        }
    )

    event.remove({ id: 'ae2:network/blocks/io_condenser' })
    event.shaped(
        Item.of('ae2:condenser'),
        [
            'MFM',
            'MIM',
            'MCM'
        ],
        {
            M: 'abyssal_decor:moonsilver_ingot',
            F: 'ae2:fluix_block',
            I: 'ae2:inscriber',
            C: 'immersiveengineering:component_electronic_adv'
        }
    )

    event.replaceInput({ id: 'ae2:network/blocks/controller' }, 'ae2:smooth_sky_stone_block', 'abyssal_decor:moonsilver_ingot')
    
    event.replaceInput({ id: 'ae2:network/blocks/storage_chest' }, 'minecraft:copper_ingot', 'immersiveengineering:component_electronic')

    //endregion AE Machines

    //region Components

    event.replaceInput({ output: 'ae2:cell_component_1k' }, 'minecraft:redstone', 'abyssal_decor:moonsilver_ingot')
    event.replaceInput({ output: 'ae2:cell_component_4k' }, 'minecraft:redstone', 'abyssal_decor:moonsilver_ingot')
    event.replaceInput({ output: 'ae2:cell_component_16k' }, 'minecraft:glowstone_dust', 'minecraft:shulker_shell')
    event.replaceInput({ output: 'ae2:cell_component_64k' }, 'minecraft:glowstone_dust', 'minecraft:shulker_shell')
    event.replaceInput({ output: 'ae2:cell_component_256k' }, 'ae2:sky_dust', 'minecraft:netherite_ingot')

    //event.replaceInput({ output: 'ae2:spatial_cell_component_2' }, 'minecraft:glowstone_dust', 'abyssal_decor:moonsilver_ingot')
    //event.replaceInput({ output: 'ae2:spatial_cell_component_16' }, 'minecraft:glowstone_dust', 'abyssal_decor:moonsilver_ingot')
    //event.replaceInput({ output: 'ae2:spatial_cell_component_128' }, 'minecraft:glowstone_dust', 'abyssal_decor:moonsilver_ingot')
    
    //endregion Components

})