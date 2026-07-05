ServerEvents.recipes(event => {
  event.shaped(
    Item.of('minecraft:saddle', 1), // arg 1: output
    [
      '   ',
      ' L ', // arg 2: the shape (array of strings)
      'LIL'
    ],
    {
      L: 'minecraft:leather',
      I: 'minecraft:iron_ingot'  //arg 3: the mapping object
    }
  );

  event.shaped(
    Item.of('create:white_sail', 2), // arg 1: output
    [
      'WS ',
      'SA ', // arg 2: the shape (array of strings)
      '   '
    ],
    {
      W: '#minecraft:wool',
      S: 'minecraft:string',  //arg 3: the mapping object
      A: 'create:andesite_alloy'
    }
  );

  event.remove({ output: 'minecraft:lodestone' });

  event.shaped(
    Item.of('minecraft:lodestone', 1), // arg 1: output
    [
      'BBB',
      'BIB', // arg 2: the shape (array of strings)
      'BBB'
    ],
    {
      B: 'minecraft:chiseled_stone_bricks',
      I: 'minecraft:iron_ingot'
    }
  );

})
