ServerEvents.recipes(event => {

        event.remove({output: 'create:adjustable_chain_gearshift'});
        event.shapeless(
            Item.of('create:adjustable_chain_gearshift'),
            [
                'create:encased_chain_drive',
                'create:polished_rose_quartz'
            ]
        );

        event.remove({output: 'create:contraption_control'});
        event.shaped(
            Item.of('create:contraption_controls'),
            [
                'B',
                'A',
                'Q'
            ],
            {
                B: '#minecraft:buttons',
                A: 'create:andesite_casing',
                Q: 'create:polished_rose_quartz'
            }
        );

        event.remove({output: 'create:clockwork_bearing'});
        event.shaped(
            Item.of('create:clockwork_bearing'),
            [
                'S',
                'B',
                'Q'
            ],
            {
                S: '#minecraft:wooden_slabs',
                B: 'create:brass_casing',
                Q: 'create:polished_rose_quartz'
            }
        );

        event.remove({output: 'create:display_board'});
        event.shaped(
            Item.of('create:display_board', 2),
            [
                'AQA'
            ],
            {
                A: 'create:andesite_alloy',
                Q: 'create:polished_rose_quartz'
            }
        );

        event.remove({output: 'create:content_observer'});
        event.shaped(
            Item.of('create:content_observer'),
            [
                ' Q ',
                ' B ',
                ' O '
            ],
            {
                O: 'minecraft:observer',
                B: 'create:brass_sheet',
                Q: 'create:polished_rose_quartz'
            }
        );

        event.remove({output: 'create:stockpile_switch'});
        event.shaped(
            Item.of('create:stockpile_switch'),
            [
                ' Q ',
                ' B ',
                ' O '
            ],
            {
                O: 'minecraft:observer',
                B: 'create:brass_sheet',
                Q: 'minecraft:comparator'
            }
        );

        event.shaped(
            Item.of('steampowered:bronze_flywheel'),
            [
                'BBB',
                'BSB',
                'BBB'
            ],
            {
                B: 'create:brass_ingot',
                S: 'create:shaft'
            }
        );

        event.shaped(
            Item.of('steampowered:bronze_steam_engine'),
            [
                'SPB',
                'SPE',
                'SPB'
            ],
            {
                B: 'create:brass_ingot',
                S: 'create:brass_sheet',
                P: 'create:fluid_pipe',
                E: 'createdieselgenerators:engine_piston',
            }
        );

        event.remove({output: 'create:brass_casing'});

        event.recipes.create.filling('create:brass_casing',
            [Fluid.of('kubejs:molten_brass', 90), 'immersiveengineering:treated_wood_vertical']);

        event.shaped(
            Item.of('createcobblestone:mechanical_generator'),
            [
                'BQB',
                'WDL',
                'BCB'
            ],
            {
                B: 'create:brass_ingot',
                Q: 'create:polished_rose_quartz',
                D: 'create:mechanical_drill',
                W: 'minecraft:water_bucket',
                L: 'minecraft:lava_bucket',
                C: 'create:brass_casing'
            }
        );

        event.shaped(
            Item.of('create:mechanical_crafter'),
            [
                ' I ',
                'WCE',
                ' T '
            ],
            {
                I: 'abyssal_decor:seabrass_ingot',
                C: 'create:brass_casing',
                E: 'create:electron_tube',
                W: 'create:cogwheel',
                T: 'minecraft:crafting_table'
            }
        );

        let c = event.recipes.create;
        let prq = 'create:polished_rose_quartz';

        c.sequenced_assembly(
            // Result:
            [
                CreateItem.of('create:electron_tube')
            ],
            // Input:
            'create:polished_rose_quartz',
            // Sequence:
            [
                c.deploying(prq, [prq,
                    'immersiveengineering:wire_copper',]),
                c.deploying(prq, [prq,
                    'createaddition:gold_wire',]),
                c.deploying(prq, [prq,
                    'create:iron_sheet',]),
                event.recipes.create.pressing(prq, prq)
            ]
        ).transitionalItem(prq);

        event.shaped(
            Item.of('create:mechanical_crafter'),
            [
                ' Q ',
                'C G',
                'DDD'
            ],
            {
                Q: prq,
                C: 'immersiveengineering:wire_copper',
                G: 'createaddition:gold_wire',
                D: 'cataclysm:black_steel_nugget'
            }
        );

        event.remove({ output: 'create:precision_mechanism' })
        let transitional = 'create:incomplete_precision_mechanism'
        event.recipes.create.sequenced_assembly(
            [
                CreateItem.of('create:precision_mechanism', 0.9),
                CreateItem.of('create:brass_sheet', 0.02),
                CreateItem.of('create:andesite_alloy', 0.02),
                CreateItem.of('create:cogwheel', 0.02),
                CreateItem.of('create:shaft', 0.02),
                CreateItem.of('create:crushed_raw_gold', 0.02),
                CreateItem.of('minecraft:gold_nugget', 0.02)
            ],
            '#c:plates/brass',
            [
                event.recipes.create.deploying(
                    transitional,
                    [transitional, Ingredient.of('gnkinetics:tiny_brass_gear')]
                ),
                event.recipes.create.deploying(
                    transitional,
                    [transitional, Ingredient.of('gnkinetics:brass_gear')]
                ),
                event.recipes.create.deploying(
                    transitional,
                    [transitional, Ingredient.of('#c:nuggets/steel')]
                )
            ]
        )
        .transitionalItem(transitional)
        .loops(5)
        .id('farwater:create_parts/precision_mechanism')

    }
)
