// @ULSTICK
// Just wanna add this just in case we need to edit mass
ServerEvents.tags('block', event => {

	// Super Light
	const super_light = [
		'immersiveengineering:connector_lv',
		'immersiveengineering:connector_lv_relay',
		'immersiveengineering:connector_mv',
		'immersiveengineering:connector_mv_relay',
		'immersiveengineering:connector_hv',
		'immersiveengineering:connector_hv_relay'
	]
	// Light
	const light = [
		'bits_n_bobs:girder_strut',
		'create:metal_girder',
		'create:industrial_iron_block',

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