ServerEvents.recipes(event => {

        event.replaceInput({output: 'addon_gancho:grapple_swing'}, 'simulated:gyroscopic_mechanism', 'immersiveengineering:component_iron');


        event.shaped(
            Item.of('simulated:red_portable_engine', 1),
            [
                ' T ',
                'PMP',
                ' F '
            ],
            {
                T: 'create:iron_sheet',
                P: 'createdieselgenerators:engine_piston',
                M: 'immersiveengineering:component_iron',
                F: 'minecraft:blast_furnace'
            }
        );

        event.remove({id: 'simulated:rope_connector'})
        event.shaped(
            Item.of('simulated:rope_connector'),
            [
                'P',
                'B'
            ],
            {
                P: '#c:plates/iron',
                B: 'simulated:iron_handle'
            }
        );

        event.remove({id: 'simulated:rope_winch'})
        event.shaped(
            Item.of('simulated:rope_winch'),
            [
                'P',
                'S',
                'B'
            ],
            {
                P: '#c:plates/iron',
                S: 'create:shaft',
                B: 'simulated:iron_handle'
            }
        );

        event.remove({id: 'simulated:throttle_lever'})
        event.shaped(
            Item.of('simulated:throttle_lever'),
            [
                'A',
                'B'
            ],
            {
                A: 'create:analog_lever',
                B: 'create:brass_sheet'
            }
        );

        event.shaped(
            Item.of('aeronautics:propeller_bearing'),
            [
                'S',
                'B',
                'C'
            ],
            {
                S: '#minecraft:wooden_slabs',
                B: 'create:brass_sheet',
                C: 'create:cogwheel'
            }
        );

    }
)
