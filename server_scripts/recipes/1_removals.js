//priority: 10
ServerEvents.recipes(event => {

    let items = [ //Never to be added

        'aeronautics_utility_objects:damping_stress_bearing',
        'steampowered:alternator',

        'create_sa:steam_engine',

        'steampowered:cast_iron_steam_engine',
        'steampowered:cast_iron_flywheel',
        'steampowered:furnace_engine',

        'createpropulsion:thruster',
        'createpropulsion:solid_fuel_thruster',

        'alexsmobs:dimensional_carver', // Causes Problem with Dimthread (going back to a sable spawnpoint)

        'ae2:quantum_ring',
        'ae2:quantum_link',
        'ae2:spatial_cell_component_2',
        'ae2:spatial_cell_component_16',
        'ae2:spatial_cell_component_128',
        'ae2:spatial_storage_cell_2',
        'ae2:spatial_storage_cell_16',
        'ae2:spatial_storage_cell_128',
        'ae2:spatial_pylon',
        'ae2:spatial_io_port',
        'ae2:spatial_anchor',

        'immersiveengineering:dynamo',
        'immersiveengineering:watermill',
        'immersiveengineering:windmill'
    ];

    items.forEach(item => {
        event.remove({output: item});
        event.remove({input: item});
    })

    let items_craftonly_permanent = [ //recipe added elsewhere

        'steampowered:brass_flywheel',
        'steampowered:bronze_flywheel',
        'create:mechanical_crafter'

    ];

    let items_craftonly = [ //recipe to be unlocked or added elsewhere

        'create:precision_mechanism',
        'create:electron_tube',

        'aeronautics:smart_propeller',
        'aeronautics:propeller_bearing',
        'aeronautics:gyroscopic_propeller_bearing',
        'aeronautics:levitite',
        'aeronautics:pearlescent_levitite',

        'simulated_addition:directional_propeller_bearing',
        'simulated_addition:directional_gyroscopic_propeller_bearing',

        'create_new_age:carbon_brushes',
        'create_new_age:generator_coil',
        'create_new_age:reactor_casing',
        'create_new_age:reactor_glass',
        'create_new_age:reactor_rod',
        'create_new_age:nuclear_fuel',
        'create_new_age:reactor_fuel_acceptor'

    ];

    items_craftonly.forEach(item => {
        event.remove({output: item});
    })

    items_craftonly_permanent.forEach(item => {
        event.remove({output: item});
    })

});
