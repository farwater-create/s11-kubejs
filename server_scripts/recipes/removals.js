ServerEvents.recipes(event => {

    let items = [

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

	'create:brass_block',
	'create:brass_ingot',
	'create:brass_nugget',
	'create:brass_sheet',
	'create:brass_casing',
	'create:brass_hand',
	'create:mechanical_crafter',
	'create:steam_engine',
	'create:smart_observer',
	'create:precision_mechanism',
	'create:electron_tube',
	'create:crushing_wheel',

	'create_sa:steam_engine',

	'steampowered:bronze_steam_engine',
	'steampowered:cast_iron_steam_engine',
	'steampowered:steel_steam_engine',

	'aeronautics:smart_propeller',
	'aeronautics:propeller_bearing',
	'aeronautics:gyroscopic_propeller_bearing',
	'aeronautics:levitite',
	'aeronautics:pearlescent_levitite',
];
  
    event.remove({ output: item });
    event.remove({ input: item });

  

});
