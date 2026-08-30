ServerEvents.recipes(event => {

    let recipes = event.recipes;
    let create = recipes.create;

    let item = 'mod:item';
  
    event.remove({ output: item });
    event.remove({ input: item });

  

});
