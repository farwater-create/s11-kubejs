ServerEvents.recipes(event => {

    let recipes = event.recipes;
    let create = recipes.create;

    event.shaped(
        Item.of('minecraft:bell'),
        [
            'SIS',
            'SPS'
        ],
        {
            S: '#c:rods/wooden',
            I: '#c:ingots/gold',
            P: '#c:plates/gold'
        }
    )

})
