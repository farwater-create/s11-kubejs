ServerEvents.recipes(event => {

    let recipes = event.recipes;
    let create = recipes.create;

    event.shapeless(
        Item.of('create:brass_funnel', 2),
        [
            'x2 create:andesite_funnel',
            'create:zinc_ingot',
            'minecraft:copper_ingot',
            'create:polished_rose_quartz'
        ]
    )

    event.shapeless(
        Item.of('create:brass_tunnel', 2),
        [
            'x2 create:andesite_tunnel',
            'create:zinc_ingot',
            'minecraft:copper_ingot',
            'create:polished_rose_quartz'
        ]
    )

    event.shapeless(
        Item.of('create:smart_chute', 2),
        [
            'x2 create:chute',
            'create:zinc_ingot',
            'minecraft:copper_ingot',
            'create:polished_rose_quartz'
        ]
    )

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
    )


});