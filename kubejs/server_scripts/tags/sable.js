// @ULSTICK
// Just wanna add this just in case we need to edit mass
ServerEvents.tags('block', event => {

	// Super Light
    //event.add('sable:super_light', _)

	// Light
    event.add('sable:light', 'bits_n_bobs:girder_strut')
	event.add('sable:light', 'create:metal_girder')
	event.add('sable:light', 'create:industrial_iron_block')

    event.add('sable:light', 'minecraft:campfire')
    event.add('sable:light', 'minecraft:soul_campfire')

    event.add('sable:light', '#railways:locometal')

})