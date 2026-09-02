
ServerEvents.tags('block', event => {

	const immovable = [
		'abovethecloudstweaks:vent_stone',
		'abovethecloudstweaks:vent_sandstone',
		'abovethecloudstweaks:vent_kaolin',
		'abovethecloudstweaks:vent_granite',
		'abovethecloudstweaks:vent_chert',
		'abovethecloudstweaks:vent_travertine',
		'abovethecloudstweaks:vent_terracotta',
		'abovethecloudstweaks:vent_pink_sandstone',
		'abovethecloudstweaks:vent_chalk',
		'abovethecloudstweaks:vent_red_sandstone',
		'abovethecloudstweaks:tractor_beam'
	];

	immovable.forEach( block => {event.add('create:non_movable', block) });

	event.add('create:non_movable', '#spudaciousshops:spuds_shops')


})