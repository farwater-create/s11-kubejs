ServerEvents.recipes(event => {

        let recipes = event.recipes;
        let create = recipes.create;


        create.mixing(
            ['2x abyssal_decor:seabrass_ingot', 'abyssal_decor:seabrass_catalyst'],
            [Fluid.of('kubejs:molten_brass', 100), 'abyssal_decor:seabrass_catalyst']
        );

    }
);
