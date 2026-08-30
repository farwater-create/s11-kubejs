ItemEvents.modifyTooltips(event => {

	function addOreTooltip(ores, lore) {

		ores.forEach(ore => {
			event.add(ore, Text.white('Can be found in:'))
			event.add(ore, lore)
		})

	}

	// Coal
	addOreTooltip(
		['minecraft:coal', 'minecraft:coal_ore', 'minecraft:deepslate_coal_ore', 'natures_spirit:chert_coal_ore'],
		[
			Text.join('  ', Text.green('Overworld'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)
	// Copper
	addOreTooltip(
		['minecraft:raw_copper', 'minecraft:copper_ore', 'minecraft:deepslate_copper_ore', 'natures_spirit:chert_copper_ore'],
		[
			Text.join('  ', Text.green('Overworld'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)
	// Iron
	addOreTooltip(
		['minecraft:raw_iron', 'minecraft:iron_ore', 'minecraft:deepslate_iron_ore', 'natures_spirit:chert_iron_ore'],
		[
			Text.join('  ', Text.green('Overworld'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any')),
			Text.join('  ', Text.white('DDU'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)
	
	// Gold
	addOreTooltip(
		['minecraft:raw_gold', 'minecraft:gold_ore', 'natures_spirit:chert_gold_ore', 'minecraft:deepslate_gold_ore'],
		[
			Text.join('  ', Text.white('DDU'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('-64'), Text.gray(' to '), Text.gold('0'))
		]
	)
	addOreTooltip(
		['minecraft:nether_gold_ore'],
		[
			Text.join('  ', Text.red('Nether'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)
	
	// Lapis
	addOreTooltip(
		['minecraft:lapis_lazuli', 'minecraft:lapis_ore', 'natures_spirit:chert_lapis_ore', 'minecraft:deepslate_lapis_ore'],
		[
			Text.join('  ', Text.white('DDU'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)
	
	// Redstone
	addOreTooltip(
		['minecraft:redstone', 'minecraft:redstone_ore', 'minecraft:deepslate_redstone_ore', 'natures_spirit:chert_redstone_ore'],
		[
			Text.join('  ', Text.white('DDU'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('-64'), Text.gray(' to '), Text.gold('32'))
		]
	)
	
	// Emerald
	addOreTooltip(
		['minecraft:emerald', 'minecraft:emerald_ore', 'natures_spirit:chert_emerald_ore', 'minecraft:deepslate_emerald_ore'],
		[
			Text.join('  ', Text.green('Overworld'), Text.darkGray(' | '), Text.aqua('Cold Biomes')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('128'), Text.gray(' to '), Text.gold('320'))
		]
	)

	// Diamond
	addOreTooltip(
		['minecraft:diamond', 'minecraft:diamond_ore', 'minecraft:deepslate_diamond_ore', 'natures_spirit:chert_diamond_ore'],
		[
			Text.join('  ', Text.white('DDU'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('-64'), Text.gray(' to '), Text.gold('16'))
		]
	)
	
	// Quartz
	addOreTooltip(
		['minecraft:quartz', 'minecraft:nether_quartz_ore'],
		[
			Text.join('  ', Text.red('Nether'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)
	
	// Netherite Scrap
	addOreTooltip(
		['minecraft:netherite_scrap', 'minecraft:ancient_debris'],
		[
			Text.join('  ', Text.red('Nether'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('8'), Text.gray(' to '), Text.gold('24'))
		]
	)
	
	// Palladium
	addOreTooltip(
		['galosphere:raw_palladium', 'galosphere:palladium_ore', 'galosphere:deepslate_palladium_ore'],
		[
			Text.join('  ', Text.white('DDU'), Text.darkGray(' | '), Text.blue('Galosphere Biomes')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)
	
	// Zinc
	addOreTooltip(
		['create:raw_zinc', 'create:zinc_ore', 'create:deepslate_zinc_ore'],
		[
			Text.join('  ', Text.white('DDU'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)
	
	// Platinum
	addOreTooltip(
		['createpropulsion:raw_platinum', 'createpropulsion:platinum_ore', 'createpropulsion:deepslate_platinum_ore'],
		[
			Text.join('  ', Text.white('DDU'), Text.darkGray(' | '), Text.aqua('Cold and Mountain Biomes')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)
	
	// Magnetite
	addOreTooltip(
		['create_new_age:magnetite_block'],
		[
			Text.join('  ', Text.white('DDU'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)

	// Thorium
	addOreTooltip(
		['create_new_age:thorium', 'create_new_age:thorium_ore', 'kubejs:nether_thorium_ore'],
		[
			Text.join('  ', Text.red('Nether'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)

	// Lead
	addOreTooltip(
		['immersiveengineering:raw_lead', 'immersiveengineering:ore_lead', 'immersiveengineering:deepslate_ore_lead', 'kubejs:chert_lead_ore'],
		[
			Text.join('  ', Text.green('Overworld'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)

	// Nickel
	addOreTooltip(
		['immersiveengineering:raw_nickel', 'immersiveengineering:ore_nickel', 'kubejs:chert_nickel_ore', 'immersiveengineering:deepslate_ore_nickel'],
		[
			Text.join('  ', Text.green('Overworld'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('0'), Text.gray(' to '), Text.gold('64')),
			Text.join('  ', Text.green('Overworld'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('64'), Text.gray(' to '), Text.gold('128'))
		]
	)
	
	// Silver
	addOreTooltip(
		['immersiveengineering:raw_silver', 'immersiveengineering:ore_silver', 'immersiveengineering:deepslate_ore_silver'],
		[
			Text.join('  ', Text.green('Overworld'), Text.darkGray(' | '), Text.aqua('Cold Biomes')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('64'), Text.gray(' to '), Text.gold('320'))
		]
	)
	
	// Bauxite
	addOreTooltip(
		['immersiveengineering:raw_aluminum', 'immersiveengineering:ore_aluminum', 'kubejs:chert_bauxite_ore', 'immersiveengineering:deepslate_ore_aluminum'],
		[
			Text.join('  ', Text.green('Overworld'), Text.darkGray(' | '), Text.red('Hot and Dry Biomes')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('64'), Text.gray(' to '), Text.gold('320'))
		]
	)
	
	// Bauxite
	addOreTooltip(
		['immersiveengineering:raw_uranium', 'immersiveengineering:ore_uranium', 'immersiveengineering:deepslate_ore_uranium', 'kubejs:nether_uranium_ore'],
		[
			Text.join('  ', Text.red('Nether'), Text.darkGray(' | '), Text.gray('any biome')),
			Text.join('  ', Text.gray('Y Level '), Text.gold('any'))
		]
	)

})
