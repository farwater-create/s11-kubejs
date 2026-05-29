ServerEvents.recipes(event => {
	console.log('adding crushing recipes');
    event.remove({ input: 'minecraft:tuff' , mod: 'create', output: 'minecraft:flint'});
    
    event.remove({ input: 'create:crushed_raw_iron' , mod: 'create', output: 'minecraft:iron_nugget'});
    event.remove({ input: 'create:crushed_raw_gold' , mod: 'create', output: 'minecraft:gold_nugget'});
    event.remove({ input: 'create:crushed_raw_copper' , mod: 'create', output: 'create:copper_nugget'});
    event.remove({ input: 'create:crushed_raw_zinc' , mod: 'create', output: 'create:zinc_nugget'});
    
    event.recipes.create.crushing([Item.of('create:crushed_raw_iron').withChance(0.0625)], 'create:crimsite');
    event.recipes.create.crushing([Item.of('create:crushed_raw_gold').withChance(0.0625)], 'create:ochrum');
    event.recipes.create.crushing([Item.of('create:crushed_raw_copper').withChance(0.0625)], 'create:veridium');
    event.recipes.create.crushing([Item.of('create:crushed_raw_zinc').withChance(0.0625)], 'create:asurine');
    
    event.recipes.create.splashing([ Item.of('minecraft:iron_nugget',10) , Item.of('minecraft:iron_nugget',7).withChance(0.57) , Item.of('minecraft:redstone').withChance(0.75)], 'create:crushed_raw_iron');
    
    event.recipes.create.splashing([ Item.of('minecraft:gold_nugget',10) , Item.of('minecraft:gold_nugget',7).withChance(0.57) , Item.of('minecraft:quartz').withChance(0.75)], 'create:crushed_raw_gold');
    
    event.recipes.create.splashing([ Item.of('create:copper_nugget',10) , Item.of('create:copper_nugget',7).withChance(0.57) , Item.of('minecraft:clay_ball').withChance(0.25)], 'create:crushed_raw_copper');
    
    event.recipes.create.splashing([ Item.of('create:zinc_nugget',10) , Item.of('create:zinc_nugget',7).withChance(0.57) , Item.of('minecraft:gunpowder') , Item.of('minecraft:gunpowder').withChance(0.5)], 'create:crushed_raw_zinc');

    
	event.recipes.create.milling([Item.of('minecraft:wheat_seeds'), Item.of('minecraft:green_dye').withChance(0.08)], 'minecraft:grass');
});
