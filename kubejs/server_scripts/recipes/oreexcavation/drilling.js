// @ULSTICK
ServerEvents.recipes(event => {
	event.remove({ type: 'createoreexcavation:drilling' })

	// MAX RPM Item/m = Item/m * 8
	// Stress = BaseStress * RPM
	
	// Drilling (Without Fluid)
	function MakeDrilling(veinID, outputs, baseStress) {
		//Tier 1 Drill
		event.recipes.createoreexcavation.drilling(outputs, veinID, 320) // 16s (3,75 I/m to 30 I/m)
			.drill('createoreexcavation:drill')
			.stress(baseStress*1)
		//Tier 2 Drill
		event.recipes.createoreexcavation.drilling(outputs, veinID, 80) // 4s (15 I/m to 120 I/m)
			.drill('createoreexcavation:diamond_drill')
			.stress(baseStress*2)
		//Tier 3 Drill
		event.recipes.createoreexcavation.drilling(outputs, veinID, 20) // 1s (60 I/m to 480 I/m)
			.drill('createoreexcavation:netherite_drill')
			.stress(baseStress*4)
	}

	// Drilling (With Fluid)
	function MakeDrillingF(veinID, outputs, fluid, baseStress) {
		//Tier 1 Drill
		event.recipes.createoreexcavation.drilling(outputs, veinID, 320)
			.fluid(fluid)
			.drill('createoreexcavation:drill')
			.stress(baseStress*1)
		//Tier 2 Drill
		event.recipes.createoreexcavation.drilling(outputs, veinID, 80)
			.fluid(fluid)
			.drill('createoreexcavation:diamond_drill')
			.stress(baseStress*2)
		//Tier 3 Drill
		event.recipes.createoreexcavation.drilling(outputs, veinID, 20)
			.fluid(fluid)
			.drill('createoreexcavation:netherite_drill')
			.stress(baseStress*4)
	}
	
	// Drillings
	// MC
	MakeDrilling('createoreexcavation:ore_vein_type/coal', ['3x minecraft:coal', CreateItem.of('minecraft:coal', 0.5)], 128)

	MakeDrilling('createoreexcavation:ore_vein_type/copper', '2x minecraft:raw_copper', 128)

	MakeDrilling('createoreexcavation:ore_vein_type/iron', 'minecraft:raw_iron', 128)
	MakeDrilling('kubejs:ore_vein_type/ddu_iron', ['minecraft:raw_iron', CreateItem.of('minecraft:raw_iron', 0.5)], 128)

	MakeDrilling('createoreexcavation:ore_vein_type/gold', CreateItem.of('minecraft:raw_gold', 0.5), 128)
	MakeDrilling('kubejs:ore_vein_type/ddu_gold', ['minecraft:raw_gold', CreateItem.of('minecraft:raw_gold', 0.5)], 128)

	MakeDrilling('createoreexcavation:ore_vein_type/lapis', ['minecraft:lapis_lazuli', CreateItem.of('minecraft:lapis_lazuli', 0.5)], 128)

	MakeDrilling('createoreexcavation:ore_vein_type/redstone', ['1x minecraft:redstone', CreateItem.of('minecraft:redstone', 0.5)], 128)
	MakeDrilling('kubejs:ore_vein_type/ddu_redstone', ['3x minecraft:redstone', CreateItem.of('2x minecraft:redstone', 0.5)], 128)

	MakeDrilling('createoreexcavation:ore_vein_type/zinc', 'create:raw_zinc', 128)
	MakeDrilling('kubejs:ore_vein_type/ddu_zinc', ['create:raw_zinc', CreateItem.of('create:raw_zinc', 0.5)], 128)
	
	MakeDrilling('createoreexcavation:ore_vein_type/emerald', CreateItem.of('createoreexcavation:raw_emerald', 0.25), 128)
	MakeDrilling('createoreexcavation:ore_vein_type/diamond', [CreateItem.of('createoreexcavation:raw_diamond', 0.1)], 256)
	MakeDrillingF('createoreexcavation:ore_vein_type/hardened_diamond', CreateItem.of('createoreexcavation:raw_diamond', 0.2), '10x minecraft:lava', 512)

	MakeDrilling('createoreexcavation:ore_vein_type/quartz', ['2x minecraft:quartz', CreateItem.of('minecraft:quartz', 0.5)], 128)
	MakeDrillingF('createoreexcavation:ore_vein_type/netherite', [CreateItem.of('minecraft:ancient_debris', 0.05), CreateItem.of('minecraft:gold_nugget', 0.5)], '10x minecraft:lava', 512)

	// Propulsion
	MakeDrilling('kubejs:ore_vein_type/platinum', CreateItem.of('createpropulsion:raw_platinum', 0.5), 128)

	// IE
	MakeDrilling('kubejs:ore_vein_type/lead', 'immersiveengineering:raw_lead', 128)

	MakeDrilling('kubejs:ore_vein_type/ddu_nickel', 'immersiveengineering:raw_nickel', 128)

	MakeDrilling('kubejs:ore_vein_type/silver', 'immersiveengineering:raw_silver', 128)

	MakeDrilling('kubejs:ore_vein_type/bauxite', 'immersiveengineering:raw_aluminum', 128)

	MakeDrilling('kubejs:ore_vein_type/nether_uranium', ['immersiveengineering:raw_uranium', CreateItem.of('immersiveengineering:raw_uranium', 0.5)], 256)


})