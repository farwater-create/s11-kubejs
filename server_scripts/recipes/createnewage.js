// @ULSTICK
ServerEvents.recipes(event => {

    event.recipes.create.mechanical_crafting(
        Item.of('create_new_age:generator_coil'),
        [
            'CCC',
            'CSC',
            'CCC'
        ],
        {
            C: 'immersiveengineering:coil_lv',
            S: 'immersiveengineering:component_steel'
        }
    )

    event.shaped(
        Item.of('create_new_age:carbon_brushes'),
        [
            ' W ',
            'CSC',
            ' E '
        ],
        {
			W: 'immersiveengineering:wirecoil_copper',
            C: 'minecraft:coal',
            S: 'immersiveengineering:component_steel',
            E: 'create:electron_tube'
        }
    )

})