ServerEvents.recipes(event => {
    const deletethis = (item) => {
        event.remove({output: item });
        event.remove({input: item });
    }
    deletethis('createaddition:alternator');
    deletethis('createaddition:electric_motor');
    deletethis('createaddition:connector');
    deletethis('createaddition:large_connector');
    deletethis('createaddition:small_light_connector');
    deletethis('create_new_age:copper_wire');
    deletethis('create_new_age:overcharged_iron_wire');
    deletethis('create_new_age:overcharged_gold_wire');
    deletethis('create_new_age:overcharged_diamond_wire');
    deletethis('createaddition:copper_spool');
    deletethis('createaddition:gold_spool');
    deletethis('createaddition:electrum_spool');
    deletethis('createaddition:festive_spool');
})
