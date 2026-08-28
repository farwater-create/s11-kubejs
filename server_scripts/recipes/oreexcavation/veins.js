// @ULSTICK

ServerEvents.recipes(event => {

	// -------------- Veins --------------

	// Iron
	event.custom({
		type: 'createoreexcavation:vein',
		amountMultiplierMax: 30.0,
		amountMultiplierMin: 10.0,
		biomeWhitelist: 'ddu:is_ddu',
		finite: 'default',
		icon: {
			count: 1,
			id: 'create:crushed_raw_iron'
		},
		name: "{\"text\":\"Deep Iron\"}",
		placement: {
			salt: 1422841362,
			separation: 8,
			spacing: 128
		},
		priority: 0
	}).id('kubejs:ore_vein_type/ddu_iron')

	// Gold
	event.custom({
		type: 'createoreexcavation:vein',
		amountMultiplierMax: 30.0,
		amountMultiplierMin: 10.0,
		biomeWhitelist: 'ddu:is_ddu',
		finite: 'default',
		icon: {
			count: 1,
			id: 'create:crushed_raw_gold'
		},
		name: "{\"text\":\"Deep Gold\"}",
		placement: {
			salt: 1422211112,
			separation: 8,
			spacing: 128
		},
		priority: 0
	}).id('kubejs:ore_vein_type/ddu_gold')

	// Redstone
	event.custom({
		type: 'createoreexcavation:vein',
		amountMultiplierMax: 30.0,
		amountMultiplierMin: 10.0,
		biomeWhitelist: 'ddu:is_ddu',
		finite: 'default',
		icon: {
			count: 1,
			id: 'minecraft:redstone'
		},
		name: "{\"text\":\"Deep Redstone\"}",
		placement: {
			salt: 1212169362,
			separation: 8,
			spacing: 128
		},
		priority: 0
	}).id('kubejs:ore_vein_type/ddu_redstone')

	// ------ Create Propulsion -------
	// Platinum
	event.custom({
		type: 'createoreexcavation:vein',
		amountMultiplierMax: 30.0,
		amountMultiplierMin: 10.0,
		biomeWhitelist: 'c:is_cold',
		finite: 'default',
		icon: {
			count: 1,
			id: 'createpropulsion:raw_platinum'
		},
		name: "{\"translate\":\"item.createpropulsion.raw_platinum\"}",
		placement: {
			salt: 1112867390,
			separation: 4,
			spacing: 32
		},
		priority: 0
	}).id('kubejs:ore_vein_type/platinum')


	// ----- Immersive Egineering -----
	// Lead
	event.custom({
		type: 'createoreexcavation:vein',
		amountMultiplierMax: 30.0,
		amountMultiplierMin: 10.0,
		biomeWhitelist: 'minecraft:is_overworld',
		finite: 'default',
		icon: {
			count: 1,
			id: 'immersiveengineering:raw_lead'
		},
		name: "{\"translate\":\"item.immersiveengineering.raw_lead\"}",
		placement: {
			salt: 1442847360,
			separation: 8,
			spacing: 128
		},
		priority: 0
	}).id('kubejs:ore_vein_type/lead')

	// Nickel
	event.custom({
		type: 'createoreexcavation:vein',
		amountMultiplierMax: 30.0,
		amountMultiplierMin: 10.0,
		biomeWhitelist: 'ddu:is_ddu',
		finite: 'default',
		icon: {
			count: 1,
			id: 'create:crushed_raw_nickel'
		},
		name: "{\"text\":\"Deep Nickel\"}",
		placement: {
			salt: 1442847360,
			separation: 8,
			spacing: 64
		},
		priority: 0
	}).id('kubejs:ore_vein_type/ddu_nickel')

	// Silver
	event.custom({
		type: 'createoreexcavation:vein',
		amountMultiplierMax: 30.0,
		amountMultiplierMin: 10.0,
		biomeWhitelist: 'c:is_cold',
		finite: 'default',
		icon: {
			count: 1,
			id: 'immersiveengineering:raw_silver'
		},
		name: "{\"translate\":\"item.immersiveengineering.raw_silver\"}",
		placement: {
			salt: 1391148214,
			separation: 4,
			spacing: 32
		},
		priority: 0
	}).id('kubejs:ore_vein_type/silver')

	// Bauxite
	event.custom({
		type: 'createoreexcavation:vein',
		amountMultiplierMax: 30.0,
		amountMultiplierMin: 10.0,
		biomeWhitelist: 'c:is_hot',
		finite: 'default',
		icon: {
			count: 1,
			id: 'immersiveengineering:raw_aluminum'
		},
		name: "{\"translate\":\"item.immersiveengineering.raw_aluminum\"}",
		placement: {
			salt: 1341847694,
			separation: 4,
			spacing: 32
		},
		priority: 0
	}).id('kubejs:ore_vein_type/bauxite')

	// Uranium
	event.custom({
		type: 'createoreexcavation:vein',
		amountMultiplierMax: 30.0,
		amountMultiplierMin: 10.0,
		biomeWhitelist: 'minecraft:is_nether',
		finite: 'default',
		icon: {
			count: 1,
			id: 'create:crushed_raw_uranium'
		},
		name: "{\"text\":\"Nether Uranium\"}",
		placement: {
			salt: 1442847360,
			separation: 8,
			spacing: 64
		},
		priority: 0
	}).id('kubejs:ore_vein_type/nether_uranium')
})