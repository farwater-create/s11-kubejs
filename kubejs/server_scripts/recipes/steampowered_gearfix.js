// @ULSTICK
ServerEvents.recipes(event => {

	// Steam Powered Cogwheels
	function cogwheel(type, material) {
		let cogwheel = 'steampowered:'+type+'_cogwheel'
		let largeCogwheel = 'steampowered:'+type+'_large_cogwheel'
		event.remove({ output: 'steampowered:'+type+'_cogwheel' })
		event.remove({ output: 'steampowered:'+type+'_large_cogwheel' })

		event.shapeless(
			cogwheel,
			[
				'create:shaft',
				material
			]
		)
		event.shapeless(
			largeCogwheel,
			[
				'create:shaft',
				material,
				material
			]
		)
		event.shapeless(
			largeCogwheel,
			[
				cogwheel,
				material
			]
		)
	}
	cogwheel('steel', '#c:ingots/steel')
	cogwheel('cast_iron', '#c:ingots/industrial_iron')
	cogwheel('bronze', '#c:plates/brass')
	
})