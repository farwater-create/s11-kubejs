ServerEvents.recipes(event => {

    event.remove({id: 'createaddition:charging/electrify_gold_nugget'});
    event.remove({id: 'createaddition:charging/electrify_gold_ingot'});
    event.remove({id: 'createaddition:charging/electrify_gold_block'});
    event.remove({id: 'createaddition:charging/electrify_gold_sheet'});
    event.remove({id: 'createaddition:charging/electrify_gold_rod'});
    event.remove({id: 'createaddition:charging/electrify_gold_wire'});

})