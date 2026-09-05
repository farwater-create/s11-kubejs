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

    event.replaceInput(
        { output: 'create:brass_casing' },
        '#c:stripped_logs',
        '#immersiveengineering:treated_wood'
    );

    event.remove({output: 'create:brass_casing', input: '#minecraft:logs'});

    }
)
