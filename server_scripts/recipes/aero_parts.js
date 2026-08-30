ServerEvents.recipes(event => {

    event.replaceInput({output:'addon_gancho:grapple_swing'},'simulated:gyroscopic_mechanism','immersiveengineering:component_iron');

    
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

}
)
