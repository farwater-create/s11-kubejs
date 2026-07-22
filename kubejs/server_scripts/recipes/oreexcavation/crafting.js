// @ULSTICK
ServerEvents.recipes(event => {

	event.remove({ id: 'createoreexcavation:drilling_machine' })
	event.recipes.create.mechanical_crafting('createoreexcavation:drilling_machine', [
		'BBPBB',
		'SVOTS',
		'S   S'
	], {
		B: 'create:brass_casing',
		P: 'create:precision_mechanism',
		S: '#immersiveengineering:scaffoldings/steel',
		V: 'create:item_vault',
		O: '#c:plates/obsidian',
		T: 'create:fluid_tank'
	})
	
	event.remove({ id: 'createoreexcavation:drill' })
	event.shaped('createoreexcavation:drill', [
		' IB',
		'NII',
		'NN '
	], {
		B: '#c:storage_blocks/steel',
		I: '#c:ingots/steel',
		N: '#c:nuggets/steel'
	})

	event.remove({ id: 'createoreexcavation:diamond_drill' })
	event.shaped('createoreexcavation:diamond_drill', [
		' IB',
		'NCI',
		'NN '
	], {
		B: '#c:storage_blocks/diamond',
		I: '#c:gems/diamond',
		N: '#c:nuggets/aluminum',
		C: ['cataclysm:witherite_ingot', 'cataclysm:ancient_metal_ingot']
	})

	event.remove({ id: 'createoreexcavation:netherite_drill' })
	event.shaped('createoreexcavation:netherite_drill', [
		' IB',
		'NCI',
		'NN '
	], {
		B: '#c:ingots/netherite',
		I: 'minecraft:netherite_scrap',
		N: '#c:nuggets/nethersteel',
		C: ['cataclysm:cursium_ingot', 'cataclysm:ancient_metal_ingot']
	})
})