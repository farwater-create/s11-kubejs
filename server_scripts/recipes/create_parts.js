ServerEvents.recipes(event => {

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

    event.recipes.create.filling('create:brass_casing', [Fluid.of('kubejs:molten_brass', 114), '#immersiveengineering:treated_wood']);

    }
)
