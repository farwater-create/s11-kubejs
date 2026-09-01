ServerEvents.recipes(event => {

    let recipes = event.recipes;
    let create = recipes.create;

    //FUNNEL
    event.shaped(
        Item.of('create:brass_funnel', 2),
        [
            ' F ',
            'ZQC',
            ' F '
        ],
        {
            F: 'create:andesite_funnel',
            Z: 'create:zinc_ingot',
            C: 'minecraft:copper_ingot',
            Q: 'create:polished_rose_quartz'
        }
    );

    event.shaped(
        Item.of('create:brass_funnel', 3),
        [
            ' SQ',
            ' K ',
            '   '
        ],
        {
            S: 'create:brass_sheet',
            K: 'minecraft:dried_kelp',
            Q: 'create:polished_rose_quartz'
        }
    );

    //TUNNEL
    event.shaped(
        Item.of('create:brass_tunnel', 2),
        [
            ' F ',
            'ZQC',
            ' F '
        ],
        {
            F: 'create:andesite_tunnel',
            Z: 'create:zinc_ingot',
            C: 'minecraft:copper_ingot',
            Q: 'create:polished_rose_quartz'
        }
    );
    event.shaped(
        Item.of('create:brass_funnel', 3),
        [
            'SSQ',
            'KK ',
            '   '
        ],
        {
            S: 'create:brass_sheet',
            K: 'minecraft:dried_kelp',
            Q: 'create:polished_rose_quartz'
        }
    );

    //SCHUTE
    event.shaped(
        Item.of('create:smart_chute', 2),
        [
            ' F ',
            'ZQC',
            ' F '
        ],
        {
            F: 'create:chute',
            Z: 'create:zinc_ingot',
            C: 'minecraft:copper_ingot',
            Q: 'create:polished_rose_quartz'
        }
    );
    event.shaped(
        Item.of('create:smart_chute', 3),
        [
            ' SQ',
            ' I ',
            ' D '
        ],
        {
            S: 'create:brass_sheet',
            I: 'minecraft:iron_ingot',
            D: 'create:iron_sheet',
            Q: 'create:polished_rose_quartz'
        }
    );


    //FILTER
    event.shaped(
        Item.of('create:filter', 1),
        [
            '   ',
            'NPN',
            '   '
        ],
        {
            N: 'minecraft:iron_nugget',
            P: 'minecraft:paper'
        }
    );
    event.shaped(
        Item.of('create:attribute_filter', 1),
        [
            '   ',
            'NPN',
            '   '
        ],
        {
            N: 'create:brass_nugget',
            P: 'minecraft:paper'
        }
    );


});