import ActorSheet5e from "../../../systems/dnd5e/module/actor/sheets/base.js";
import ActorSheet5eVehicle from "../../../systems/dnd5e/module/actor/sheets/vehicle.js";


export class Tidy5eVehicle extends ActorSheet5eVehicle {

	static get defaultOptions() {
	  return mergeObject(super.defaultOptions, {
			classes: ["tidy5e", "sheet", "actor", "vehicle"],
			width: 690,
			height: 720
		});
	}

	/* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   * @type {String}
   */
  get template() {
    if ( !game.user.isGM && this.actor.limited ) return "modules/tidy5e-sheet/templates/actors/tidy5e-vehicle-ltd.html";
    return "modules/tidy5e-sheet/templates/actors/tidy5e-vehicle.html";
  }

	/**
   * Add some extra data when rendering the sheet to reduce the amount of logic required within the template.
   */
  getData() {
    const data = super.getData();

    Object.keys(data.data.abilities).forEach(id => {
    	let Id = id.charAt(0).toUpperCase() + id.slice(1);
      data.data.abilities[id].abbr = game.i18n.localize(`DND5E.Ability${Id}Abbr`);
    });

    return data;
  }

	activateListeners(html) {
		super.activateListeners(html);


 		// set input fields via editable elements
    html.find('[contenteditable]').on('paste', function(e) {
      //strips elements added to the editable tag when pasting
      let $self = $(this);

      // set maxlength
      let maxlength = 40;
      if($self[0].dataset.maxlength){
        maxlength = parseInt($self[0].dataset.maxlength);
      }

      setTimeout(function() {
        let textString = $self.text();
        textString = textString.substring(0,maxlength);
        $self.html(textString);
      }, 0);

    }).on('keypress', function(e) {
      let $self = $(this);

      // set maxlength
      let maxlength = 40;
      if($self[0].dataset.maxlength){
        maxlength = parseInt($self[0].dataset.maxlength);
      }

      // only accept backspace, arrow keys and delete after maximum characters
      let keys = [8,37,38,39,40,46];

      if($(this).text().length === maxlength && keys.indexOf(e.keyCode) < 0) { 
        e.preventDefault();
      }

       if(e.keyCode===13){
        $(this).blur();
      }
    });

    html.find('[contenteditable]').blur(async (event) => {
      let value = event.target.textContent;
      let target = event.target.dataset.target;
      html.find('input[type="hidden"][data-input="'+target+'"]').val(value).submit();
    });

 		html.find('[contenteditable]').blur(async (event) => {
    	let value = event.target.textContent;
    	let target = event.target.dataset.target;
    	html.find('input[type="hidden"][data-input="'+target+'"]').val(value).submit();
 		});

    // actor size menu
    html.find('.actor-size-select .size-label').on('click', function(){
      let currentSize = $(this).data('size');
      $(this).closest('ul').toggleClass('active').find('ul li[data-size="'+currentSize+'"]').addClass("current");
    });
    html.find('.actor-size-select .size-list li').on('click', async (event) => {
      let value = event.target.dataset.size;
      this.actor.update({"data.traits.size": value});
      html.find('.actor-size-select').toggleClass('active');
    });

		// toggle empty traits visibility in the traits list
    html.find('.traits .toggle-traits').click( async (event) => {
      let actor = this.actor;
      if(actor.getFlag('tidy5e-sheet', 'traitsExpanded')){
        await actor.unsetFlag('tidy5e-sheet', 'traitsExpanded');
      } else {
        await actor.setFlag('tidy5e-sheet', 'traitsExpanded', true);
      }
    });

    // toggle item edit protection
    html.find('.toggle-allow-edit span').click(async (event) => {
      event.preventDefault();
      let actor = this.actor;

      if(actor.getFlag('tidy5e-sheet', 'allow-edit')){
        await actor.unsetFlag('tidy5e-sheet', 'allow-edit');
      } else {
        await actor.setFlag('tidy5e-sheet', 'allow-edit', true);
      }
    });


    // open context menu
    html.find('.item-list .item').mousedown( function (event) {
	    switch (event.which) {
	      case 2:
	      	// middle mouse opens item editor
	      	event.preventDefault();
	    		let item = event.currentTarget;
	    		$(item).find('.item-edit').trigger('click');
	      	break;
	      case 3:
	      	// right click opens context menu
	      	$('.item').removeClass('context');
	    		$('.item .item-controls').hide();
	      	itemContextMenu(event);
	        break;
	  	}

	  	// context menu calculations
	    function itemContextMenu(e){
	    	let item = e.currentTarget,
	    			mouseX = event.clientX,
	    			mouseY = event.clientY,
	    			itemTop = $(item).offset().top,
	    			itemLeft = $(item).offset().left,
	    			itemHeight = $(item).height(),
	    			itemWidth = $(item).width(),
	    			contextTop = mouseY-itemTop+1,
	    			contextLeft = mouseX-itemLeft+1,
	    			contextWidth = $(item).find('.item-controls').width(),
	    			contextHeight = $(item).find('.item-controls').height(),
	    			contextRightBound = mouseX + contextWidth,
	    			contextBottomBound = mouseY + contextHeight,
	    			itemsList = $(item).closest('.items-list'),
	    			itemsListRightBound = itemsList.offset().left + itemsList.width() - 17,
	    			itemsListBottomBound = itemsList.offset().top + itemsList.height();

	    	// check right side bounds
	    	if(contextRightBound > itemsListRightBound) {
	    		let rightDiff = itemsListRightBound - contextRightBound;
	    		contextLeft = contextLeft + rightDiff;
	    	}

	    	// check bottom bounds
				if(contextBottomBound > itemsListBottomBound) {
	    		let bottomDiff = itemsListBottomBound - contextBottomBound;
	    		contextTop = contextTop + bottomDiff;
	    	}

	    	$(item)
	    		.addClass('context')
	    		.find('.item-controls')
	    		.css({'top': contextTop+'px', 'left': contextLeft+'px'})
	    		.fadeIn(300);
	    }
		});

    // close context menu on any click outside
    $(document).mousedown( function (event) {
    	switch (event.which) {
	      case 1:
	      if ( ! $(event.target).closest('.item .item-controls').length ) {
	      	html.find('.item').removeClass('context');
	        html.find('.item .item-controls').hide();
  			}
	      	break;
	  	}
		});

	}

}

// Edit Protection - Hide empty Inventory Sections, add and delete-buttons
async function editProtection(app, html, data) {
  let actor = app.actor;
  if(!actor.getFlag('tidy5e-sheet', 'allow-edit')){
    let itemContainer = html.find('.inventory-list.items-list');
    html.find('.inventory-list .items-header').each(function(){
      if($(this).next('.item-list').find('li').length <= 1){
        $(this).next('.item-list').remove();
        $(this).remove();
      }
    });

    html.find('.inventory-list .items-footer').hide();
    html.find('.inventory-list .item-control.item-delete').remove();

    itemContainer.each(function(){
		  if($(this).children().length < 1){
		    $(this).append(`<span class="notice">This section is empty. Unlock the sheet to edit.</span>`)
		  }
    });
  }
}

// handle traits list display
async function toggleTraitsList(app, html, data){
  html.find('.traits:not(.always-visible):not(.expanded) .form-group.inactive').addClass('trait-hidden').hide();
  let visibleTraits = html.find('.traits .form-group:not(.trait-hidden)');
  for (let i = 0; i < visibleTraits.length; i++) {
    if(i % 2 != 0){
      visibleTraits[i].classList.add('even');
    }
  }
}

// Register Tidy5e Vehicle Sheet and make default vehicle sheet
Actors.registerSheet("dnd5e", Tidy5eVehicle, {
	types: ["vehicle"],
	makeDefault: true
});


Hooks.on("renderTidy5eVehicle", (app, html, data) => {
	editProtection(app, html, data);
	toggleTraitsList(app, html, data);
});