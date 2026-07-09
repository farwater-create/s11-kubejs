ServerEvents.recipes(event => {
	console.log('adding crushing recipes');
    event.remove({ input: 'minecraft:tuff' , mod: 'create', output: 'minecraft:flint'});
    
    event.remove({ input: 'create:crushed_raw_iron' , mod: 'create', output: 'minecraft:iron_nugget'});
    event.remove({ input: 'create:crushed_raw_gold' , mod: 'create', output: 'minecraft:gold_nugget'});
    event.remove({ input: 'create:crushed_raw_copper' , mod: 'create', output: 'create:copper_nugget'});
    event.remove({ input: 'create:crushed_raw_zinc' , mod: 'create', output: 'create:zinc_nugget'});
    
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_iron',0.0625)], 'create:crimsite');
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_gold',0.0625)], 'create:ochrum');
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_copper',0.0625)], 'create:veridium');
    event.recipes.create.crushing([CreateItem.of('create:crushed_raw_zinc',0.0625)], 'create:asurine');
    
    event.recipes.create.splashing([ Item.of('minecraft:iron_nugget',10) , Item.of('minecraft:iron_nugget',4) , CreateItem.of('minecraft:redstone',0.75)], 'create:crushed_raw_iron');
    
    event.recipes.create.splashing([ Item.of('minecraft:gold_nugget',10) , Item.of('minecraft:gold_nugget',4) , CreateItem.of('minecraft:quartz',0.75)], 'create:crushed_raw_gold');
    
    event.recipes.create.splashing([ Item.of('create:copper_nugget',10) , Item.of('create:copper_nugget',4) , CreateItem.of('minecraft:clay_ball',0.25)], 'create:crushed_raw_copper');
    
    event.recipes.create.splashing([ Item.of('create:zinc_nugget',10) , Item.of('create:zinc_nugget',4) , Item.of('minecraft:gunpowder') , CreateItem.of('minecraft:gunpowder',0.5)], 'create:crushed_raw_zinc');

    
	event.recipes.create.milling([CreateItem.of('minecraft:wheat_seeds'), CreateItem.of('minecraft:green_dye',0.08)], Item.of('minecraft:short_grass'));
});
