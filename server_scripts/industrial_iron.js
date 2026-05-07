ServerEvents.recipes(event => {

  event.remove({ output: 'create:industrial_iron_block' });

  event.remove({ output: 'createdeco:industrial_iron_ingot', input: 'create:industrial_iron_block' });

  event.remove({ output: 'create:weathered_iron_block', input: 'minecraft:iron_ingot' });

  event.stonecutting('create:industrial_iron_block', 'createdeco:industrial_iron_ingot');

  event.recipes.create.compacting(Item.of('createdeco:industrial_iron_ingot', 4),
    Item.of('minecraft:iron_ingot', 4))
    .heated();

  event.recipes.create.compacting(Item.of('createdeco:industrial_iron_ingot', 16),
    Item.of('minecraft:iron_ingot', 16))
    .heated();


  event.shaped(
    Item.of('create:industrial_iron_block', 4),
    [
      'AA ',
      'AA ',
      '   '
    ],
    {
      A: 'createdeco:industrial_iron_ingot'
    }
  );

  event.shapeless(
    Item.of('createdeco:industrial_iron_ingot', 1),
    [
      'create:industrial_iron_block'
    ]
  );


})