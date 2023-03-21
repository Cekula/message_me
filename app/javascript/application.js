// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import '@doabit/semantic-ui-sass'
import '@doabit/semantic-ui-sass/src/scss/semantic-ui.scss'

//= require semantic-ui
//= require jquery

$(document).on('turbolinks:load', function(){
	$('.ui.dropdown').dropdown();
	$('.message .close').on('click', function() {
	    $(this).closest('.message').transition('fade');
	  })

})

import "./channels"
