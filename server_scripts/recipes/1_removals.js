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
        'createpropulsion:solid_fuel_thruster'
    ];

    items.forEach(item => {
        event.remove({output: item});
        event.remove({input: item});
    })

    let items_craftonly_permanent = [ //recipe added elsewhere

        'steampowered:brass_flywheel',
        'steampowered:bronze_flywheel',

    ];

    let items_craftonly = [ //recipe to be unlocked or added elsewhere


        'immersiveengineering:connector_hv',
        'immersiveengineering:connector_hv_relay',
        'immersiveengineering:connector_lv',
        'immersiveengineering:connector_lv_relay',
        'immersiveengineering:connector_mv',
        'immersiveengineering:connector_mv_relay',
        'immersiveengineering:wirecoil_copper',
        'immersiveengineering:wirecoil_copper_ins',
        'immersiveengineering:wirecoil_electrum',
        'immersiveengineering:wirecoil_electrum_ins',
        'immersiveengineering:wirecoil_redstone',
        'immersiveengineering:wirecoil_steel',
        'immersiveengineering:wirecoil_structure_rope',
        'immersiveengineering:wirecoil_structure_steel',

        'create:mechanical_crafter',
        'create:precision_mechanism',
        'create:electron_tube',

        'aeronautics:smart_propeller',
        'aeronautics:propeller_bearing',
        'aeronautics:gyroscopic_propeller_bearing',
        'aeronautics:levitite',
        'aeronautics:pearlescent_levitite',

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
