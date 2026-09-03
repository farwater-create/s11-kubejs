ServerEvents.recipes(event => {

        event.shaped(
            Item.of('create:smart_observer'),
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
    }
)
