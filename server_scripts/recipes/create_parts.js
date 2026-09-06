ServerEvents.recipes(event => {

        event.remove({output: 'create:adjustable_chain_gearshift'});
        event.shapeless(
            Item.of('create:adjustable_chain_gearshift'),
            [
                'create:encased_chain_drive',
                'create:polished_rose_quartz'
            ]
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
    }
)
