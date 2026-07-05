// @ULSTICK
// Just wanna add this just in case we need to edit mass
ServerEvents.tags('block', event => {

	// Super Light
	const super_light = [
		'dustydecorations:wicker_basket',
		'dustydecorations:apple_wicker_basket',
		'dustydecorations:beet_wicker_basket',
		'dustydecorations:carrot_wicker_basket',
		'dustydecorations:cod_wicker_basket',
		'dustydecorations:glowberries_wicker_basket',
		'dustydecorations:potato_wicker_basket',
		'dustydecorations:salmon_wicker_basket',
		'dustydecorations:sweet_berries_wicker_basket',
		'dustydecorations:pickle_wicker_basket',
		'dustydecorations:rose_wicker_basket',
		'dustydecorations:peony_wicker_basket',
		'dustydecorations:lilac_wicker_basket',
		'dustydecorations:pink_petal_wicker_basket',
		'dustydecorations:rope_coil',
		'dustydecorations:honey_jar',
		'dustydecorations:honey_jar_2',
		'dustydecorations:honey_jar_3',
		'dustydecorations:jars',
		'dustydecorations:jars_2',
		'dustydecorations:jars_3',
		'dustydecorations:jars_4',
		'dustydecorations:jars_5',
		'dustydecorations:jars_6',
		'dustydecorations:rope',
		
		'minecraft:small_amethyst_bud',
		'minecraft:medium_amethyst_bud',
		'minecraft:large_amethyst_bud',
		'ae2:small_quartz_bud',
		'ae2:medium_quartz_bud',
		'ae2:large_quartz_bud',

		'immersiveengineering:connector_lv',
		'immersiveengineering:connector_lv_relay',
		'immersiveengineering:connector_mv',
		'immersiveengineering:connector_mv_relay',
		'immersiveengineering:connector_hv',
		'immersiveengineering:connector_hv_relay',
		'immersiveengineering:connector_redstone',
		'immersiveengineering:connector_probe',
		'immersiveengineering:connector_bundled',
		'immersiveengineering:redstone_state_cell',
		'immersiveengineering:redstone_timer',
		'immersiveengineering:redstone_switchboard',

		'immersiveengineering:alu_wallmount',
		'immersiveengineering:breaker_switch',
		'immersiveengineering:cagelamp',
		'immersiveengineering:electric_lantern',
		'immersiveengineering:hatch',
		'immersiveengineering:lantern',
		'immersiveengineering:steel_wallmount',
		'immersiveengineering:treated_catwalk',
		'immersiveengineering:treated_catwalk_stairs',
		'immersiveengineering:treated_post',
		'immersiveengineering:treated_wallmount',
		'immersiveengineering:treated_window'
	]
	// Light
	const light = [
		'dustydecorations:empty_barrel',
		'dustydecorations:apple_barrel',
		'dustydecorations:beetroot_barrel',
		'dustydecorations:carrot_barrel',
		'dustydecorations:cod_barrel',
		'dustydecorations:glowberries_barrel',
		'dustydecorations:potato_barrel',
		'dustydecorations:salmon_barrel',
		'dustydecorations:sweet_berries_barrel',
		'dustydecorations:sea_pickle_barrel',
		'dustydecorations:stacked_paper',
	
		'bits_n_bobs:girder_strut',
		'bits_n_bobs:large_flanged_cogwheel',
		'bits_n_bobs:small_flanged_cogwheel',
		'copycats:copycat_cogwheel',
		'copycats:copycat_large_cogwheel',
		'create:metal_girder',
		'create:industrial_iron_block',
		'gnkinetics:andesite_cogwheel',
		'gnkinetics:chainable_cogwheel',
		'gnkinetics:cog_crank',
		'gnkinetics:cogstone',
		'gnkinetics:hollow_cogwheel',
		'gnkinetics:hollow_large_cogwheel',
		'gnkinetics:large_cog_crank',
		'gnkinetics:shaftless_andesite_cogwheel',
		'gnkinetics:shaftless_cogstone',
		'gnkinetics:shaftless_cogwheel',
		'gnkinetics:shaftless_large_cogwheel',
		'gnkinetics:shaftless_tiny_cogwheel',
		'gnkinetics:tiny_cogwheel',
		'steampowered:bronze_cogwheel',
		'steampowered:bronze_large_cogwheel',
		'steampowered:cast_iron_cogwheel',
		'steampowered:cast_iron_large_cogwheel',
		'steampowered:steel_cogwheel',
		'steampowered:steel_large_cogwheel',
		
		'immersiveengineering:conveyor_basic',
		'immersiveengineering:conveyor_redstone',
		'immersiveengineering:conveyor_dropper',
		'immersiveengineering:conveyor_vertical',
		'immersiveengineering:conveyor_splitter',
		'immersiveengineering:conveyor_extract',
		
		'immersiveengineering:alu_catwalk',
		'immersiveengineering:alu_catwalk_stairs',
		'immersiveengineering:alu_post',
		'immersiveengineering:alu_window',
		'immersiveengineering:reinforced_window',
		'immersiveengineering:steel_catwalk',
		'immersiveengineering:steel_catwalk_stairs',
		'immersiveengineering:steel_post',
		'immersiveengineering:steel_window',
		'immersiveengineering:treated_scaffold',

		'minecraft:campfire',
		'minecraft:soul_campfire',

		'#railways:locometal'
	]
	// Super Heavy
	const super_heavy = [
		'cataclysm:enderite_block',
		'cataclysm:witherite_block',
		'cataclysm:ignitium_block',
		'cataclysm:ancient_metal_block',
		'cataclysm:cursium_block'
	]

	super_light.forEach( block => {event.add('sable:super_light', block) })
	light.forEach( block => {event.add('sable:light', block) })
	super_heavy.forEach( block => {event.add('sable:super_heavy', block) })

})