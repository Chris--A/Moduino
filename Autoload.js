

/***
	Auto loader for Moduino.js. 
	
	Due to some caching configurations on my server, your browser may not check if a new version is available
	for a few days. As Moduino has the ability to check for updates, it can flag this auto updater to disable 
	client side caching and retrieve a new copy.
	
	This method of caching produces faster results, as when there in no new copy not even a `304 Not modified` 
	is received as no requests are sent (304's can be lengthy if the HDD is accessed for modification times).
***/

$( function(){
	if( document.location.href.indexOf( 'forum.arduino.cc' ) == -1 ) return;
	var loggit = function( s ){ if( !(typeof console === 'undefined') ) console.log( 'Moduino{autoload}: ' + s ); };
	
	$.ajax( 'http://arduino.land/Moduino/Source/Resources.js', { dataType: 'script', cache: true })
		.success( function(){
			$.cookie.json = true;
			$.cookie.defaults.path = '/';

			var settings = $.cookie( '__MODUINO__settings' ), getUpdate = false, cachedMods = true, getSuffux = '';

			if( ( $.type(settings) === 'object' ) && ( $.type(settings['get-update']) === 'boolean' ) ) cachedMods = !settings['get-update'];
			if( $.type(settings['latest-version']) === 'object' && $.type(settings['latest-version'].version) === 'string' ){
				getSuffux = '?version=' + settings['latest-version'].version;
			}else cachedMods = false;

			$.ajax( 'http://arduino.land/Moduino/Source/Moduino.js' + getSuffux, { dataType: 'script', cache: cachedMods })
				.success( function(){ Mo.setting.update( 'get-update', false ); })
				.fail( function(){ loggit( 'Failed to retrieve Moduino.js' ); });
		}).fail( function (){ loggit( 'Failed to retrieve Resources.js' ); });	
});