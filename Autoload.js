/*!
	Moduino, A modification system for the Arduino.cc forums.
    Copyright (C) 2014  Christopher Andrews
	http://arduino.land/Moduino/
*/
/***
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
***/

/***
	Auto loader for Moduino.js. 
	
	Due to some caching configurations on my server, your browser may not check if a new version is available
	for a few hours or days. As Moduino has the ability to check for updates, it can flag this auto updater to disable 
	client side caching and retrieve a new copy.
	
	This method of caching produces faster results, as when there in no new copy not even a `304 Not modified` 
	is received as no requests are sent while the browser cache is valid. (304's can be lengthy if the HDD is 
	accessed for modification times).
***/

$( function(){
	if( document.location.href.indexOf( 'forum.arduino.cc' ) == -1 ) return;
	var loggit = function( s ){ if( !(typeof console === 'undefined') ) console.log( 'Moduino{autoload}: ' + s ); };
	
	$.ajax( 'http://arduino.land/Moduino/Source/Resources.js', { dataType: 'script', cache: true })
		.success( function(){
			$.cookie.json = true;
			$.cookie.defaults.path = '/';

			var settings = $.cookie( '__MODUINO__settings' ), getUpdate = false, cachedMods = true, getSuffux = '';

			try{
			
				if( ( $.type(settings) === 'object' ) && ( $.type(settings['get-update']) === 'boolean' ) ) cachedMods = !settings['get-update'];
				
				if( $.type(settings['latest-version']) === 'object' && $.type(settings['latest-version'].version) === 'string' ){
					getSuffux = '?version=' + settings['latest-version'].version;
					cachedMods = true;
				}else cachedMods = false;
				
			}catch(e){
				cachedMods = false;
				getSuffux = '?dummy=' + Math.round(new Date().getTime() / 1000); //A time-stamp will ensure a new copy is grabbed.
			}

			$.ajax( 'http://arduino.land/Moduino/Source/Moduino.js' + getSuffux, { dataType: 'script', cache: cachedMods })
				.success( function(){ Mo.setting.update( 'get-update', false ); })
				.fail( function(){ loggit( 'Failed to retrieve Moduino.js' ); });
		}).fail( function (){ loggit( 'Failed to retrieve Resources.js' ); });	
});