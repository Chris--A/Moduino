/*!
	Moduino, A modification system for the Arduino.cc forums.
    Copyright (C) 2014  Christopher Andrews
	https://arduino.land/Moduino/
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

var Moduino = {

	/***
		The central configuration determining which modifications are run.
	***/
	
	'config' : {
	
		'global' : {
		
			'enabled' 		: true,
			
			'resizeContent'	: {
				'enabled'	: true, 			
				'value'		: '87%' 			/** Value to resize content to. **/
			},
			
			'minimizeHeader' : {
				'enabled'			: true,		/** Shrink the forum header. **/
				'useContentWidth'	: true		/** Resize to width of page content if enabled ( config.global.resizeContent ). **/
			},
			
			'removeShopping'	: true,			/** Remove the shopping cart icon. **/
			'preventScrollNav'	: true,			/** Prevent nav from sticking to page while scrolling down. **/
			'addLastPosts'		: true,			/** Add a 'last posts' link to the menu bar. **/
		},
		
		'index' : {
			'enabled' : true,
			
			'root' : {
				'enabled'			: true,
				'shrinkBoardList'	: true,
				'hideDescription'	: true		/** Hide each forums description in listing. **/
			},
			
			'forum' : {
				'enabled'			: true,
				'shrinkContainers'	: true,		/** Minimize thread listing sizes. **/
				'removeMenu'		: true,		/** There is currently an empty menu bar above thread listing. (17px high) **/
				
				'sticky' : {
					'enabled'	: true,			
					'hide'		: true,			/** Hide sticky threads **/
					'addToggle'	: true			/** Add a button to toggle visibility **/
				},
				'sizeLastPostInfo' : true,		/** Enlarge last post info to incorporate unused width & place info on a single line (if possible) **/
			}
		
		},
	
		'thread' : {
			'enabled' 			: true,	

			'code'				: {
				'enabled' 		: true,
				'hoverSelect'	: true			/** Allow selection of code text using a hover over, this hides the code header. **/
			},
			
			'quote'				: {
				'enabled' 		: true,
				'hoverSelect'	: true,			/** Allow selection of quote text using a hover over **/
				'hideEmptyHead'	: true,			/** Hide the header if all it contains is 'Quote'. **/
				'trimBreaks'	: true,			/*** Remove excess <br> tags from end of quote. ***/
				'colours'		: [ 
					'#e4e4e4', 					/** Quote header background. **/
					'rgba(250, 242, 0, 0.28)',	/** Quote content background. **/
					'rgb(245, 215, 120)'		/** Quote border. **/
				]
			},
			
			'sizeableCode'		: {
				'enabled'		: true,			/** Can be set to false if using highlighting. (value is used). **/
				'value'			: 220			/** Maximum starting height for long code boxes **/
			},
			
			'hideIP'			: true,			/** No need to know everyone's IP has been logged. **/
			'shrinkPost'		: true,			/** Minor padding & margin fixes. **/
			'combineKarma'		: true,			/** Combine the '[Add Karma]' link with the karma count **/
			'hideProfileLink'	: true,			/** Currently a users post profile can show two web links **/
			'movePostOptions'	: true,			/** Move the options like quote/edit/report to the post header **/
			'blurbToToolTip'	: true,			/** Remove the 'blurb' from the post profile and add as tooltip to avatar picture. **/
			'hideQuickReply'	: true,			/** Hides the quick reply box & adds a toggle button **/
			
			'gravatarAvatar'	: {				/** Show a unique avatar for members with no avatar set. **/
				'enabled'	: true,
				'salt'	: '_pepper_',				/** A little bit of salt **/
				'style'		: 'wavatar',		/** Valid styles: identicon, monsterid, wavatar, retro **/
			},
			
			'codeHighlighting'	: {
				'enabled'		: true,
				'lineNumbers'	: true,			/** Allow syntax highlighter to insert line numbers. **/
				'pathToJS'		: 'https://arduino.land/JS/SyntaxHighlighter/',	/** Location of repo for JS files. **/
				'pathToCSS'		: 'https://arduino.land/CSS/SyntaxHighlighter/',	/** Location of repo for CSS files. **/
				'core'			: 'Moduino',	/** Theme core. **/
				'brushes'		: [ 'Cpp' ],	/** Array of  brushes to use ( different languages ). **/
				'theme'			: 'Moduino',	/** Theme CSS. **/
				'cssExt'		: 'scss'		/** CSS source file extension. **/
			},
			'disableQuickReplyQuote' : true,
			
			'temporary' : {
				'hide2ndKarma'	: true
			}
		},
		
		/***
			Debugging configuration data.
			
			There are no modifications controlled with these settings.
		***/		
		
		'debug' : {
			'enabled' 			: true,		/** Not currently used. **/
		},
		
		/***
			Internal configuration data.  
			
			There are no modifications controlled with these settings.
			Adding an enable = false does nothing.
		***/
		   
		'internal' : { 
			'idPrefix' : '__MODUINO__',	 /** ID prefix for page elements inserted by Moduino. **/
			'version' : {
				'components':{'major':0,'minor':1,'revision':3},										/** Version data for this copy of Moduino. **/
				'versionCheckJSON' : 'https://arduino.land/Moduino/Version', 							/** URI returning the latest version number JSON. **/
				'checkFrequency' : 1800, 																/** Time in seconds between checking for updates (default: 30 mins). **/
			},
			'fontAwesome'	: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css', /** Path to font awesome, default is Twitters Bootstrap CDN **/
			'jQueryUI'		: 'https://code.jquery.com/ui/1.11.2/jquery-ui.min.js',
			'jQueryUITheme'	: 'https://code.jquery.com/ui/1.11.2/themes/start/jquery-ui.min.css',
			'contextmenu'	: 'https://cdnjs.cloudflare.com/ajax/libs/jquery.ui-contextmenu/1.8.1/jquery.ui-contextmenu.min.js',
			'crypto-js'		: {
				'Core'		: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/core-min.js',
				'MD5'		: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/md5-min.js',
				'ready'		: function(){ 
					return ( typeof CryptoJS !== 'undefined' ) && ( typeof CryptoJS.MD5 !== 'undefined');
				}
			},
			'sourceRepository' : 'https://arduino.land/Moduino/Source/',  								/** Location of the Moduino core JS files. **/
		},		
	},
	
	mode : {
		GLOBAL: 0,
		INDEX : {
			ROOT : 1,
			FORUM : 2
		},
		THREAD: 3,
		REPLY: 4,
		LASTPOSTS:5
	},
	
	'themes' : {
		'list' : [],
		'add' : function( theme ){
		  Moduino.themes.list.push( theme );
		}
	},
	
	
	/** Debugging constants for use with the Moduino.dbg() function. Use these values as they may change ( from an integer to a function! ). **/

	'debug' : {
		'notification'	: 0,
		'warning'		: 1,
		'error'			: 2,
		'mod'			: 3
	},
	
	
	'capFirst' : function( s ){
		return s.charAt(0).toUpperCase() + s.slice(1);
	},
	
	
	'resizeEvents' : {
		'events' : [],
		'add' : function(ev){
		  Moduino.resizeEvents.events.push(ev);
		  ev(); //Call it once to do initial size.
		}
	},
	
	'resize' : function (){
	
		/** Modification based resizing. **/
		$( Moduino.resizeEvents.events ).each(function(i,e){ e(); });
	
		/** Moduino device resize events **/
	
		var pfx = Moduino.config.internal.idPrefix;
		
		$( '#' + pfx + 'title-box' ).position({
			of: $( '#' + pfx + 'footer' ),
			my: 'center center',
			at: 'center center',
		});

		$( '#' + pfx + 'settings-btn' )
			.css( 'margin-left', '0px' )
			.position({
			of: $( '#' + pfx + 'footer' ),
			my: 'right center',
			at: 'right center',
			collision: 'none'
		}).css( 'margin-left', '-5px' );//.css( 'left', $( '#' + pfx + 'settings-btn' ).css( 'left' ) );
		
		$( '#' + pfx + 'version-box' ).position({
			of: $( '#' + pfx + 'footer' ),
			my: 'left center',
			at: 'left center',
			collision: 'none'
		});		
	},
	
	/** Images need their dimensions so jQueryUI can position elements correctly. **/

	'DisplayAndSize' : function ( img, dest ){
		img
			.appendTo( dest )
			.attr( 'width', img.width() + 'px' )
			.attr( 'height', img.height() + 'px' );		
		return img;
	},
	
	/** A timestamp in seconds since the epoch **/
	
	'unixTime' : function (){ return Math.round(new Date().getTime() / 1000); },
	
	/***
		cookie object.
		Customizes hQuery cookie plugin for Moduino 
	***/
	
	'cookie' : {
		'get' : function ( name, def ){
			var result = $.cookie( Moduino.config.internal.idPrefix + name );
			return ( result === undefined ) ? (def || null) : result;
		},
		'set' : function ( name, value ){ return $.cookie( Moduino.config.internal.idPrefix + name, value ); },
		'remove' : function ( name ){ return $.removeCookie( Moduino.config.internal.idPrefix + name ); },
	},
	
	/***
		setting object.
		This wraps the functionality of the cookie object.
		It allows all settings to be stored in a single cookie rather than one per setting.
	***/
	
	'setting' : {
		'id': 'settings',
		'set' : function ( name, value, update ){
			var settings = Moduino.cookie.get( this.id, {} );
			if( update && (settings[ name ] !== undefined) ) if( settings[ name ] === value ){ return; }
			settings[ name ] = value;
			Moduino.cookie.set( this.id, settings );
		},
		'get' : function ( name, def ){
			var settings = Moduino.cookie.get( this.id, {} );
			if( settings[ name ] === undefined ) return def || null;
			return settings[ name ];
		},
		'remove' : function ( name ){
			var settings = Moduino.cookie.get( this.id, {} );
			if(settings[ name ] === undefined) return;
			delete settings[ name ];
			Moduino.cookie.set( this.id, settings );
		},
		'update' : function ( name, value ){ this.set( name, value, true ); },
		'removeAll' : function (){ return Moduino.cookie.set( this.id, {} ); }
	},	
	

	'checkVersion' : function (){
	
		if( this.initialized ){

			var config		= this.config.internal;
			var pfx			= config.idPrefix;
			var cv			= config.version;
			var ver			= cv.components;
			var updateTime	= this.unixTime() - cv.checkFrequency;
			
			var setImg = function( colour, alt ){
				$( '<img id="' + pfx + 'version-badge"  class="badges"  src="//img.shields.io/badge/version-' + [ ver.major, ver.minor, ver.revision ].join('.') + '-' + colour + '.svg" title="' + ( alt || '' ) + '">' )
					.load( function (){
						$( '#' + pfx + 'version-badge' ).off().remove();
						Mo.DisplayAndSize( $(this), '#' + pfx + 'version-box' )
							.css({ 'margin-left' : '5px', 'cursor' : 'pointer' })
							.on( 'click', function (){
								Mo.setting.remove( 'last-check' );
								Mo.setting.remove( 'latest-version' );
								$(this).off();
								Mo.checkVersion();
							});
						Mo.resize();
					});
			};
			
			var setState = function ( nv ){ 
			    var nvc	= nv.components,
					info = [ [ 'red', 'Moduino is out of date. Latest: ' + nv.version ], [ 'green', 'Moduino is up to date!' ]  ],
					idx = ( nvc.revision > ver.revision || nvc.minor > ver.minor || nvc.major > ver.major ) ? 0 : 1;
				Mo.setting.update( 'get-update', !!!idx );
				setImg( info[idx][0], info[idx][1] );
			};
			
			//Use cookie if recently checked.
			if( this.setting.get( 'last-check', updateTime ) <= updateTime ){
			
				setImg( 'lightgrey', 'Checking for updates...' );
				this.setting.remove( 'latest-version' );

				$.getJSON( cv.versionCheckJSON, function( data ){
					setState( data );
					Mo.setting.update( 'last-check', Mo.unixTime() );
					Mo.setting.update( 'latest-version', data );
				}).fail( function (){ setImg( 'orange', 'Unable to check for updates at this time.' ); });
			
			}else{
				var data = this.setting.get( 'latest-version' );

				if( data == null ){
					this.setting.remove( 'last-check' );
					this.checkVersion(); //Re-run to grab a fresh copy.
				}else setState( data );
			}
		}
	},
	
	'initialized' : false,
	
	'init' : function( autoRun ){
	
		
	
		//Create console bar and thank you note.
		var cint = this.config.internal;
		var footer = $( 'div#pagefooter.pagefooter' );
		var dbg = cint.idPrefix + 'footer';
		var ver = cint.version.components;
		var pfx = cint.idPrefix;
		var delayedInit = function(){
		
			$.cookie.json = true;
			$.cookie.defaults.path = '/';
		
			//Add footer to page once loaded.
			//$(window).load(function() {
			//$(window).bind("load", function() {
			
			var loadGUI = function(){ 
				var htm = '\
				<div id="' + dbg + '">																	\
					<div id="' + pfx + 'version-box">											\
					</div>																				\
					<div id="' + pfx + 'title-box">											\
						<span>																			\
							<strong><a href="//arduino.land/Moduino/">Moduino</a></strong>				\
						</span>																			\
					</div> 																				\
					<span id="' + pfx + 'settings-btn" class="btn"> \
						<i class="fa fa-bars fa-2x"></i> \
					</span>			 						\
				</div> \
				<div id="' + pfx + 'content"> \
					<div id="tabs">																		\
						<ul>																			\
							<li><a href="#tabs-1">Dashboard</a></li>											\
							<li><a href="#tabs-2">Settings</a></li>										\
							<li><a href="#tabs-3">Console</a></li>										\
						</ul>																			\
						<div id="tabs-1">																\
							<h2>Moduino</h2> \
							<article><p> \
								Thank you for using Moduino,<br>\
								Designed and written by Christopher Andrews, Copyright 2014<br> \
								<a href="https://arduino.land/Moduino/">https://arduino.land/Moduino/</a>. \
							</p></article>						\
							<h2>Bugs/Requests</h2> \
							<article><p> \
								<a href="https://github.com/Chris--A/Moduino" target="_blank">					\
									<img id="' + pfx + 'octo" src="//arduino.land/Images/ArduinoForum/Octocat.png" width="40" height="34"> \
								</a> Got ideas for improvements or new features? Drop a line on GitHub or post in the forum: \
							</p> \
							<ul class="btn-lst">\
							<li><a class="btn" href="https://github.com/Chris--A/Moduino" target="_blank">Fork the repo</a></li>\
							<li><a class="btn" href="https://github.com/Chris--A/Moduino/issues/" target="_blank">Create a new issue</a></li>\
							<li><a class="btn" href="//forum.arduino.cc/index.php?board=24.0" target="_blank">Discuss in the forum</a></li>\
							</ul></article>\						\
							<h2>Support</h2> \
							<article><p> \
								Want to help support the project? You can do this safely using PayPal. \
								<br>\
								<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_donations"><input type="hidden" name="business" value="GYFSELTGAYHEY"><input type="hidden" name="lc" value="AU"><input type="hidden" name="item_name" value="Moduino"><input type="hidden" name="currency_code" value="AUD"><input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHosted"><input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal — The safer, easier way to pay online."><img alt="" border="0" src="https://www.paypalobjects.com/en_AU/i/scr/pixel.gif" width="1" height="1"></form> \
							</p></article>						\
						</div>																			\
						<div id="tabs-2">																\
							<p>Settings tabs</p>														\
						</div>																			\
						<div id="tabs-3">																\
							<p>Settings tabs</p>														\
						</div>																			\
					</div>																				\
				</div><a href="#" id="' + pfx + 'cbottom"></a>';
			
			
				$( htm ).insertAfter( 'div#pagefooter.pagefooter' );
				
				var issueLink = $( '<a href="https://github.com/Chris--A/Moduino/issues/" target="_blank">' ).appendTo( '#' + pfx + 'version-box' );
				
				$( '<img id="' + pfx + 'issue-badge" class="badges" src="https://img.shields.io/github/issues/Chris--A/Moduino.svg" alt="View current issues.">' )
					.load( function (){ 
						Mo.DisplayAndSize( $(this), issueLink ).css( 'margin-left', '5px' );
						Mo.resize();
					});				
			
				var parent = $( '#' + dbg );		
			
				/** jQuery UI widget & theme setup **/
				$( '.btn' ).button();
				$( '#tabs' ).tabs();
				
				var	width	= 0;
				
				$( 'ul.btn-lst' ).find( '.btn' )
					.each( function(){ if( $(this).width() > width ) width = $(this).width(); })
					.width( width )
					.parent()
					.css( 'padding', '1px' );
				
				$( '#' + pfx + 'content' )
					.hide()
					.css({ 'padding' : '10px 20px', 'background-color' : '#0078AE', 'min-height' : '390px' })
					.find( 'h1,h2,h3' )
					.each( function (){
						$(this).css({
							'font-size' : ( this.tagName == 'H1' ? 'xx-large' : ( this.tagName == 'H2' ? 'larger' : 'large' ) ),
							'padding' : '5px 2px'
						});
					})
					.next( 'article' )
					.css( 'padding', '1px 12px' );
				
				$( parent )
					.addClass( 'ui-state-default' )
					.css( 'padding', '5px' )
					.find('*')
					.css({ 'display' : 'inline-block', 'background-color' : 'transparent', 'border': 'none' });
			
				$( '#' + pfx + 'title-box a' ).css( 'font-size', 'xx-large' );
				
				/** Toggle button to open and hide the control panel **/
				$( '#' + pfx + 'settings-btn' )
					.on( 'click', function(){ 
					$( '#' + pfx + 'content' ).toggle();
					$('html, body').animate({ scrollTop: $( '#' + pfx + 'cbottom' ).offset().top }, 500);
				});
				
				$(window).resize( Moduino.resize );
				Moduino.resize();	
				Moduino.checkVersion();			 
			};
			
			/** Pollute a namespace, just to stick it to all the JS Nazis **/
			String.prototype.repeat = function( num ){ 
				var result = '';
				while( num-- ) result += this;
				return result;
				//return new Array( parseInt(num) + 1 ).join( this ); /** http://stackoverflow.com/a/202627/4057102 **/ << Fails in chrome 36
			}			
			
			var readyStateCheckInterval = setInterval(function() {
				if (document.readyState === "complete") {
					if (jQuery.ui) {
						loadGUI();
						clearInterval(readyStateCheckInterval);
					}
				}
			}, 100);			

			$( '#' + cint.idPrefix + 'octo' ).css({
				'border-radius': '20px',
				'-webkit-border-radius': '20px',
				'-moz-border-radius': '20px',
				'margin' : '0 2px'
			});

			Moduino.dbg = function ( str, level ){
				var	config = Moduino.config.internal, msgType;
				$.each( Moduino.debug, function( k,v ){ return ( v == ( level || Moduino.debug.notification ) ) ? ( msgType = Moduino.capFirst(k), false ) : true; });
				
				var bar = "\r\n" + '='.repeat( 40 ) + "\r\n";
				var msg = 'Moduino{' + msgType + '}: ' + ( str || (bar + "Thank you for using Moduino\r\nWritten by: Christopher Andrews\r\nhttps://arduino.land/Moduino/ 2014\r\nReleased using GPL licence"+bar));
				if( !(typeof console === 'undefined') ) console.log( msg );
			}
			
			Moduino.dbg();
			Moduino.initialized = true;
			
			if( autoRun || false ) Moduino.run();
		};
		
		$( 'head' )
			.append( '<link href="' + cint.fontAwesome + '" rel="stylesheet">' )
			.append( '<script src="' + cint['crypto-js'].Core + '"></script>' )
			.append( '<link href="' + cint.jQueryUITheme + '" rel="stylesheet">' )
			.append( '<script src="' + cint.jQueryUI + '"></script>' );
			
		var CryptoJSInterval = setInterval(function(){
			if( typeof CryptoJS === 'object' ){
				clearInterval( CryptoJSInterval );
				$( 'head' ).append( '<script src="' + cint['crypto-js'].MD5 + '"></script>' );
			}
		}, 100 );
		
		var contextmenuInterval = setInterval(function(){
			if(jQuery && jQuery.ui){
				clearInterval( contextmenuInterval );
				$( 'head' ).append( '<script src="' + cint.contextmenu + '"></script>' )
			}
		}, 100 );		
			
		$.getCached
			
		if( typeof __MODUINO__RESOURCES_LOADED__ === 'undefined' ){
			$.ajax( cint.sourceRepository + 'Resources.js', { dataType: 'script', cache: true })
				.success(delayedInit)
				.fail( function (){ 
					if( !(typeof console === 'undefined') ) console.log( "Moduino{error}: Failed to retrieve Resources.js" );
				});			
		}else{
			delayedInit();
		}
	},
	'dbgm'		: function ( msg )	{ this.dbg( msg, Moduino.debug.mod ); },
	'isTrue'	: function ( x )	{ return !!x; },
	'run'		: function(){
	
		var isGlobalIndex		= false,
			isForumIndex		= false,
			isThread			= false,
			isNewReply			= false,
			isLastPosts			= false;
			
			
		this.cookie.set( 'pages-modded', this.cookie.get( 'pages-modded', 0 ) + 1 );
		
		this.themes.add( ReHash );

		//Try determine page via its title string.
		switch( $( 'title' ).first().text() ){
		
			case 'Arduino Forum - Index':	isGlobalIndex	= true; break;
			case 'Post Reply': 				isNewReply		= true; break;
			default:
			
				if( !(isLastPosts = $('title').first().text().indexOf('Show Posts') === 0) ){
					if( !(isLastPosts = $('title').first().text().indexOf('Topics - ') === 0) ){
						isLastPosts = $('title').first().text() =='Recent Posts';
					}
				}
			
				//Only threads should contain a #tob_subject element.
				isThread = !!$( 'span#top_subject' ).length;
				
				//Detect forum index.
				if( document.location.href.indexOf( 'action=unread' ) == -1 ){
					isForumIndex = ( /https?:\/\/forum.arduino.cc\/(index.php)?\?(\w*=\w*&)?board=[0-9.]*/ ).test( document.location.href );
				}else{
					isForumIndex = true;
				}
		}
		
		switch( bv( isGlobalIndex ) +
				bv( isForumIndex ) +
				bv( isThread ) + 
				bv( isNewReply ) +
				bv( isLastPosts ) ){
		
			case 0:
				Mo.dbg( 'Page does not match any detection rule!', Mo.debug.warning );
			case 1:
			
				var steps = {};
				steps[ Moduino.mode.INDEX.ROOT ]	= [ isGlobalIndex, GlobalIndexMods ];
				steps[ Moduino.mode.INDEX.FORUM ]	= [ isForumIndex, ForumIndexMods ];
				steps[ Moduino.mode.THREAD ]		= [ isThread, ThreadMods ];
				steps[ Moduino.mode.REPLY ]			= [ isNewReply, ReplyMods ];
				steps[ Moduino.mode.LASTPOSTS ]		= [ isLastPosts, null ];
				
				GlobalMods();
				$.each( Moduino.themes.list, function(){ this( Moduino.mode.GLOBAL ); });
				
				$.each( steps, function(k,v){
					if(v[0]){
						if( v[1] !== null ) v[1]();
						$.each(Moduino.themes.list, function(){this(k);});
						return false;
					}
				});
				break;
				
			default:
				Mo.dbg( 'Page matches more than one rule!', Mo.debug.error );
		}		
	},
	
	/***
		JSONMenu function
		Item array.
		0: link
		1: icon
		2: [optional] disabled (true/false)
	***/

	'JSONMenu' : function( json, csscls ){
		var result = '<ul' + ( csscls ? ' class="' + csscls + '"' : '' ) + '>';
		$.each( json, function(k,v){
			var internalData = '';
			var classes = [];
			
			switch( $.type(v) ){
				case 'null':
				case 'undefined':
					internalData = '-';
					break;
				case 'array':
					if(v[1]) classes.push(v[1]);
					if(v.length == 3 && v[2]) classes.push('ui-state-disabled');
					v = v[0]; //Let string handle the link
				case 'string': 
					internalData = k;// /#|(https?)?\/?\//.test(v) ? k : k; //'<a href="' + v + '">' + k + '</a>' : k; 
					break;
				case 'object':
					internalData = k + ' ' + Moduino.JSONMenu(v); 
			}
			// /#|(https?)?\/?\//.test(v) ? '' : 
			
			result	+= '<li' + ( classes.length ? ' class="' + classes.join(' ') + '"' : '' ) + ' cmd="' + v + '">' + internalData + '</li>';
		});
		return result + '</ul>';
	}	
};

var Mo = Moduino;

/***
	Helper functions and jQuery add ons.
***/


/** pcss() set css styles using vendor prefixes **/
(function ( $ ) {
	$.fn.pcss = function( k, v ){
		return this.css((function (o){ 
			$.each([ '-webkit-', '-moz-', '' ],function(){ o[this+k]=v; });
			return o;
		})({}));
	};
}( jQuery ));

function formatButton( b ){
	return $( b ).css({
		'padding'			: 0,
		'margin'			: 0,
		'min-height'		: 'inherit',
		'font-size'			: '0.8em',
		'line-height'		: '1.1em',
		'letter-spacing'	: '0',
		'width'				: 'auto'
	});
}


/***
	addHoverSelect function.
	This adds a 'Select All' button in the form of a hover over.
	owner:	element to show button on hover.
	what:	element containing text to select.
	returns: owner as a jQuery object for function chaining.
***/

function addHoverSelect( owner, what ){

		what = what || 'this';

		//Handler to reposition hover box if page scrolls ( when container scroll reaches the bottom ).
		var handler = function(){
			$( '.select-all-hover' )
				.filter( ':visible' )
				.each(function( i, e ){
					$(e).css( 'top', $(e).parent().offset().top - $(window).scrollTop() );
			});
		};
		
		$( owner )
			.append( '<button class="select-all-hover" onClick="' + "selectElementText(" + what + ");" + '">Select All</button>' )
			.on('mouseenter', function () {
				$(this)
					.children( '.select-all-hover' )
					.show();
				handler();
				$(window).bind( 'scroll', handler );
			}).on('mouseleave', function () {
				$(this).children( '.select-all-hover' ).hide();
				$(window).unbind( 'scroll', handler );
		});
		formatButton( '.select-all-hover' )
			.css( 'position', 'fixed' )
			.hide();
		return $( owner );
}


/** Moduino entry point. **/

$( function (){

	//Do nothing if not on forum pages.
	if( document.location.href.indexOf( 'forum.arduino.cc' ) == -1 ) return;
	
	Mo.init( true );
});


/***
	bv function.
	Convert a boolean into a integer.
***/

function bv( b ){ return b ? 1 : 0; }

/***
	GlobalMods function.
	
	All modifications that run on every forum page go here.
***/

function GlobalMods(){ 

	Mo.dbg( 'Running global junk' );
	
	var config = Mo.config.global;
	
	
	
	if( config.resizeContent.enabled ){
	
		

		Mo.dbgm( 'resizeContent' );
		
		var dRC = $( 'div.row.collapse' );
		
		dRC.first().css( 'margin-right', '5px' );
		
		$(dRC[1])
			.css({ 'cssText'	: 'max-width: none !important;', 'width' : config.resizeContent.value })
			.find( 'div#wrapper' )
			.css( 'max-width', 'none' );
	}
	
	/** This modification will reduce the space taken up by the forum header. **/
	
	if( config.minimizeHeader.enabled ){
	
		Mo.dbgm( 'minimizeHeader' );
		
		$('#navWrapper' ).css({ 'max-width' : 'none', 'width' : '100%' });
		
		//Remove colour from page.
		$( 'body' ).css( 'background', 'none' );
		$('#pageheader .row, #headerbread>.row').css('cssText','max-width: none !important;padding:0 3px 0 3px');
		$( '#pageheader' ).css({ 'margin-top'	: '5px', 'padding-top'	: '3px' })
			.children( 'div.row' )
			.first()
			.css( 'padding-left', '3px' )
			.find( 'div.title' )
			.css( 'margin-bottom', '0' );
		
		$( 'nav.top-bar' ).css( 'margin', '0 3px 0 0' );
		
		
		
		//Remove margin from bread crumbs and move to header navigation.
		$( '#headerbread' )
			.css({ 'margin' : '0px', 'padding' : '0 3px 0 3px' })
			.appendTo( '#pageheader' );
		
		//Move bread crumbs into header navigation.
		
		
		/** If the content width has been modified, this  option will use the same value for the header. **/
		
		if( config.minimizeHeader.useContentWidth && config.resizeContent.enabled ){
		
			$( 'div#page' ).css({
				'max-width' : 'none',
				'width'		: config.resizeContent.value
			});
		}
	}
	
	/** Hide the damn shopping cart. **/
	
	if( config.removeShopping ){
		Mo.dbgm( 'removeShopping' );
		$( 'a.cart' )
			.each( function (i,e){
				if( ( /(shopping_cart)$/ ).test( $(e).attr("href") ) )
					$(e).hide();
			});
	}
	
	
	/** Prevent nav from sticking to page while scrolling down. **/
	
	if( config.preventScrollNav ){
		Mo.dbgm( 'preventScrollNav' );
		$( window ).scroll( function(){ 
			if($('#navWrapper' ).is( '.fixed' ))		$('#navWrapper' ).removeClass( 'fixed' );
			if($('#menuWings' ).hide().is( '.fixed' ))	$('#menuWings' ).removeClass( 'fixed' );
		});
	}
	

	/** Add a 'last posts' link to the menu bar. **/
	
	if( config.addLastPosts ){
		Mo.dbgm( 'addLastPosts:Removed' );
		$( '.unread_links' ).append( '<a href="//forum.arduino.cc/index.php?action=recent">Recent posts</a>' ); //Not last posts any more, recent posts instead.
	}
	
	if( $.type( smf_member_id ) == 'number' ){
	
		var usergravInterval = setInterval( function(){
			if( Mo.config.internal['crypto-js'].ready() && String.prototype.repeat ){
				clearInterval( usergravInterval );
				
				var uimg = $('.userPic>a>img');

				if( uimg.length  ){
					if( uimg.attr('src').indexOf('user_default.png') != -1 ){
						uimg.attr('src', GenerateGravatar( smf_member_id ) );
					}
				}
			}
		}, 100 );
	}
}


/***
	GlobalIndexMods function.
***/

function GlobalIndexMods(){ 

	Mo.dbg( 'Found global index' );

	var config = Mo.config.index.root;
	
	if( config.shrinkBoardList ){
	
		Mo.dbgm( 'shrinkBoardList' );
		$( 'div.stats' ).css( 'padding', '5px 0 0 0' );
		
		$( '.info.home-s' )
			.css( 'min-height', 'inherit' )
			.iff( Mo.isTrue, config.hideDescription )
			.children( '.subject' )
			.next( 'p' )
			.hide();
	}
}

/***
	ForumIndexMods function.
***/

function ForumIndexMods( mode ){ 
	Mo.dbg( 'Found forum index' );
	
	var config = Mo.config.index.forum;
	
	if( config.shrinkContainers ){
	
		Mo.dbgm( 'shrinkContainers' );
		$( '#topic_container>.windowbg' )
			.height( 'auto' )
			.css( 'border', '0' )
			.find( 'p' )
			.css( 'min-height' , 'inherit' );
			
		$( '#description_board' ).css({ 'padding': '5px', 'margin': '0px' });
	}
			
	/** There is currently an empty menu bar above thread listing. (17px high) **/
	
	if( config.removeMenu ){
	
		Mo.dbgm( 'removeMenu' );
		$( '#wrapper>#upper_section' ).hide();
	}
	
	/** Hide sticky threads **/
	var sel = '.sticky-forum.windowbg';
	
	if( config.sticky.enabled && $(sel).length ){
	
		Mo.dbgm( 'sticky' );
		
		if( config.sticky.hide ) $(sel).hide();
			
		if( config.sticky.addToggle ){
			$( '#description_board' ).prepend( '<span class="btn" id="sticky-toggle" onClick="' + "$( '" + sel + "' ).toggle();" + '">Sticky Threads</span>' );
			formatButton( '#sticky-toggle' ).css( 'float','right' );
		}
	}
	
	if( config.sizeLastPostInfo ){
		Mo.dbgm( 'sizeLastPostInfo' );
		
		$('.msg-bstat').removeClass('msg-bstat'); //Uncompress the view/replies in updated topics.
		
		$('.lastpost')
			.slice(1)
			.css('padding', '4px 0 1px 0') //Bottom padding prevents low chars like 'g' and 'y' getting cut off.
			.removeClass('msg-blpost')
			.find( 'br' )
			.replaceWith( '<span> </span>' );
		
		Mo.resizeEvents.add( function(){

			var width = 0;
		
			//Get width of title elements & title bar.
			width = $('#topic_header')
				.children()
				.not('div.lastpost')
				.each(function(){ 
					width += $(this).outerWidth( true ); 
				}).end()
				.end()
				.width() - width;
				
			$('.lastpost')
				.slice(1)
				.css('width', width + 'px');
		});
	}
}

/***
	ThreadMods function.
***/

function ThreadMods(){

	var config = Mo.config.thread;

	Mo.dbg( 'Found thread' );
	
	
	/*** Allow resizing of code containers ***/
	
	if( config.sizeableCode.enabled ){
	
		Mo.dbgm( 'sizeableCode' );
		
		$( '.bbc_code' ).each( function( i, e ){ 
			$(e).css({ 
				'max-height' : 'none', 
				'height' : ( e.scrollHeight > config.sizeableCode.value ? config.sizeableCode.value + 'px' : 'auto' ) 
			});
		});
	}
	
	/*** Hide IP information ***/
	
	if( config.hideIP ){
	
		Mo.dbgm( 'hideIP' );
		$( 'li.poster_ip' ).hide();
	}
	
	/*** Reduce the size of post containers ***/
	
	if( config.shrinkPost ){
	
		Mo.dbgm( 'shrinkPost' );
		
		$( 'div#upper_section' ).hide();

		$( 'div.post_wrapper' )
			.css( 'padding', '2px' )
			.parent()
			.css( 'padding', '0px' );
			
		$( 'ul.user_info' ).css( 'margin-bottom', '0px' );
	}	
	
	/*** Combine the '[Add Karma]' link with the karma count ***/
	
	if( config.combineKarma ){
	
		Mo.dbgm( 'combineKarma' );
		$( 'li.custom.karma_good' ).wrapInner(function(){ 
			return '<a href="' + $(this).siblings( '.karma_labels' ).hide().children( 'a' ).attr( 'href' ) + '"></a>'; 
		});
	}
	
	/** Currently a users post profile shows two web links **/
	
	if( config.hideProfileLink ){
	
		Mo.dbgm( 'hideProfileLink' );
		$( 'li.link-profile' ).hide();

	}
	
	/** Add highlighting to code boxes **/
	
	if( config.codeHighlighting.enabled && $( '.bbc_code' ).length ){
	
		var chl = config.codeHighlighting,
		txt;
	
		Mo.dbgm( txt = 'codeHighlighting' );
		txt += ': ';
		
		var successCount = 0,
			successHandler = function( s ){
				if( ++successCount == chl.brushes.length + 1 ){
				
					Mo.dbg( txt + 'Got all files!' );
					
					/***
						The forum will serve Internet Explorer & FireFox browsers with different HTML
						for code boxes. It appears they have their <code> tags wrapped in <pre> tags. The
						correct method requires the contents of the <code> tags to be wrapped in a <pre>
						tags instead. 
					***/
					
					$( 'code.bbc_code' )
						.each( function(i,e){
							if( $(e).parent()[0].tagName === 'PRE' ) 
								$(e).insertBefore( $(e).parent() )
									.next().remove(); /** Kill empty pre otherwise SyntaxHighlighter will try and parse its contents. **/
									
							//Remove tab spans:
							$(e).children('span')
								.each(function(){
									$(this).replaceWith(this.childNodes);
							});
							
						}).css({ 'padding' : '0px', 'max-height' : 'none', 'border' : '1px solid #cfcfcf', 'position' : 'relative' })
						.wrapInner( '<pre class="brush: cpp"></pre>' )
						.children()
						.each( function ( i, e ){ 
							e.innerHTML = e.innerHTML.replace(/\&lt;br\&gt;/gi,"\n").replace( /<br>/g,'\n' );
						});
						
					SyntaxHighlighter.defaults.gutter = chl.lineNumbers;
					SyntaxHighlighter.defaults.toolbar = false;
					SyntaxHighlighter.highlight();
					
					if( config.code.hoverSelect  )
						addHoverSelect( '.bbc_code', "$(this).parent().find( 'div.container' )[0]" );

					//Fix code box height, as highlighted code is smaller than the standard SMF code.
					$( '.bbc_code' ).each( function( i, e ){ 
						$(e).css( 'height', ( $(e).find( '.syntaxhighlighter' )[0].scrollHeight > config.sizeableCode.value ? config.sizeableCode.value + 'px' : 'auto' ) )
							.children('div')
							.css({ 'display' : 'inline-block', 'width' : 'auto', 'min-width' : '100%' })
							.children()
							.css({ 'overflow':'hidden', 'display' : 'inline-block'});
					});
				}},
			failHandler = function (s){
				Mo.dbg( txt + 'AJAX Failed', Mo.debug.error );
			};
			
		//Insert syntax highlighter CSS
		$('head')
			.append('<link rel="stylesheet" href="' + chl.pathToCSS + 'shCore.' + chl.cssExt + '" type="text/css" />')
			.append('<link rel="stylesheet" href="' + chl.pathToCSS + 'shCore' + chl.core + '.' + chl.cssExt + '" type="text/css" />')
			.append('<link rel="stylesheet" href="' + chl.pathToCSS + 'shTheme' + chl.theme + '.' + chl.cssExt + '" type="text/css" />');
			
		//Grab JavaScript.
		$.cachedScript( chl.pathToJS + 'shCore.js' )
			.fail( failHandler )
			.success( function( s ){
				$.each( chl.brushes, function ( i, e ){
					$.cachedScript( chl.pathToJS + 'shBrush' + e + '.js' )
						.fail( failHandler )
						.success( successHandler );				
				});
				successHandler( s );
			});
	}
	
	/*** Move code '[Select]' function to hover over ***/
	
	if( config.code.hoverSelect  ){
	
		Mo.dbgm( 'code.hoverSelect' );
		$( '.codeheader' ).hide();
		if( !config.codeHighlighting.enabled )
			addHoverSelect( '.bbc_code' );
	}
	
	
	/*** Quote modifications. ***/
	
	if( config.quote.enabled ){

		Mo.dbgm( 'quote' );
	
		/*** Hide the header if empty, or shrink it. ***/
		
		$( '.quoteheader' ).each(function ( i, e ){
			if( config.quote.hideEmptyHead && $(e).children().text() === 'Quote' )
				$(e).hide();
			else
				$(e).css( 'padding', '0 4px' );
		});
		
		/*** Add the ability to select a quotes text. ***/
		
		if( config.quote.hoverSelect  ){
		
			Mo.dbgm( 'quote.hoverSelect' );
			$( '.bbc_standard_quote' )
				.wrapInner( '<div></div>' )
				.children('div')
				.css('display','inline');
				
			addHoverSelect( '.bbc_standard_quote', "$(this).parent().find('div').first()[0]" )
				.css( 'padding', '4px 4px' );
		}
		
		/*** Allow custom colours used with quotes. (like old forum) ***/
	
		if( config.quote.colours != false ){
		
			Mo.dbgm( 'quote.colours' );
			
			$( '.bbc_standard_quote' ).css({
				'background-color' : config.quote.colours[ 1 ],
				'border' : '1px solid ' + config.quote.colours[ 2 ],
			});
			
			$( '.quoteheader' ).css({
				'background-color' : config.quote.colours[ 0 ],
				'border' : '1px solid ' + config.quote.colours[ 2 ],
				'margin-bottom' : '-1px'
			});			
		}
		
		/*** Remove excess <br> tags from end of quote. ***/
	
		if( config.quote.trimBreaks ){
		
			Mo.dbgm( 'quote.trimBreaks' );
			$( 'blockquote.bbc_standard_quote' ).each( function( i, e ){
				$(e).children( 'div' ).html( $(e).children( 'div' ).html().replace( /(<br>\s*)+$/, '' ) );
			});
		}
		
		if( config.disableQuickReplyQuote ){
		
			Mo.dbgm( 'disableQuickReplyQuote' );
			if( QuickReply.prototype.quote != undefined ) QuickReply.prototype.quote = null;
		}
		
		if( config.movePostOptions ){
		
			Mo.dbgm( 'movePostOptions' );
			
			$('.post_wrapper')
				.each(function(){
					var pn = $(this).find('.page_number');
					var qb = $(this).find('ul.quickbuttons');
					
					qb.insertAfter( pn )
						.addClass( 'floatright' )
						.css({
							'clear' : 'none',
							'margin' : -((qb.outerHeight(true) - pn.outerHeight(true))/4) + 'px 0px 0px 0px'
						}).prepend( $(this).find('li.report_link') );
				}).find('.postarea .post')
				.css('overflow','visible');
			
			$('.under_message').hide();
		}
		
		if( config.blurbToToolTip ){
		
			Mo.dbgm( 'blurbToToolTip' );
			
			$('.post_wrapper').each(function(){
				var blurb = $(this).find('li.blurb');
				$(this)
					.find('img.avatar')
					.attr('title',blurb.text());
				blurb.remove();
			});
			
		}
		
		if( config.hideQuickReply ){
		
			Mo.dbgm( 'hideQuickReply' );

			formatButton( 
				$('<span class="btn floatright">Toggle Quick Reply</span>')
					.appendTo( $('#quickreplybox h3') )
					.on( 'click', function(){
						$('#quickReplyOptions').toggle();
					}));
				
			$('#quickReplyOptions').toggle();
		}
		
		if( config.gravatarAvatar.enabled ){
		
			Mo.dbgm( 'gravatarAvatar' );

			var gravInterval = setInterval( function(){
				if( Mo.config.internal['crypto-js'].ready() ){
					clearInterval( gravInterval );

					$('ul.user_info > .avatar > a > img').each(function(){
					
						if( $(this).attr('src').indexOf('avatars/default.png') != -1 ){
						
							var profileURI = $(this).parent().attr('href').split(';');

							if( profileURI.length ){
								$(this).attr('src', GenerateGravatar(profileURI[ profileURI.length - 1 ].split('=')[1]) )
									.css( 'border','1px solid #bfbfbf' );
							}
						}
					});
				}
			}, 100 );
		}		
		
		if( config.temporary ){
		
			if( config.temporary.hide2ndKarma ){
				Mo.dbgm( 'temporary.hide2ndKarma' );
				
				$('ul.user_info').each(function(){ 
					$(this).find('.karma_labels').eq(1).remove();
				});
			}
		}
	}
}

function GenerateGravatar( id ){
	var ga = Mo.config.thread.gravatarAvatar;
	var salt = ga.salt.repeat( 3 );
	var hash = CryptoJS.MD5( salt + String(id).repeat(2) + salt );
	var domain = ('https:' == document.location.protocol ? 'https://secure.gravatar.com/' : 'http://www.gravatar.com/');
	return domain + 'avatar/' + hash + '?f=y&d=' + ga.style;
}

/***
	ReplyMods function.
***/

function ReplyMods(){ 
	Mo.dbg( 'Found reply' );
}

/*****************************************************************************************
	Themes
*****************************************************************************************/

function ReHash( step ){

	switch( Number(step) ){
	
		case Mo.mode.GLOBAL:
		
			//Install gravatar image for default avatars.
		
			var fURL = '//forum.arduino.cc/index.php?action=';
		
			var menu = {
				'View My...' : {
					'Last Posts' : fURL + 'profile;area=showposts',
					'Topics' : fURL + 'profile;area=showposts;sa=topics',
					'Attachments' : fURL + 'profile;area=showposts;sa=attach',
					'Alerts' : fURL + 'profile;area=showalerts',
					'Drafts' : fURL + 'profile;area=showdrafts',
					'Stats' : fURL + 'profile;area=statistics',
					'Unwatched Topics' : fURL + 'profile;area=showposts;sa=unwatchedtopics',
					'Sep4' : null,
					'Forum Profile' : fURL + 'profile',
					'Site Profile' : 'https://id.arduino.cc/',
					'Messages' : fURL + 'pm'
				},
				/*'Recent Posts' : fURL + 'recent',
				'Bookmarks' : {
					'No bookmarks' : [ 'null', '', true  ],
				},*/
				'Sep0' : null,
				'Logout' : 'https://id.arduino.cc/auth/logout/?returnurl=http%3A%2F%2Fforum.arduino.cc',
				'Sep6' : null,
				'SMF' : {
					'Whos online' : fURL + 'who',
					'Forum groups' : fURL + 'groups',
					'Sep1' : null,
					'Statistics' : fURL + 'stats',
					'Clock' : {
						'BCD' : fURL + 'clock',
						'Binary' : fURL + 'clock;rb'
					},
					'Calendar' : fURL + 'calendar',
					'Sep2' : null, 
					'Help' : fURL + 'help',
					'Credits' : fURL + 'credits',
					'Sep3' : null, 
					'about:unknown' : fURL + 'about:unknown'
				},
				'Moduino' : {
					'Configuration': '',
					'Sep5' : null,
					'Homepage' : 'https://arduino.land/Moduino/',
					'GitHub' : 'https://github.com/Chris--A/Moduino'
				}
			};

			var menuInterval = setInterval(function(){
				if(jQuery && jQuery.ui && jQuery.fn.contextmenu){
					clearInterval( menuInterval );
					
					$(Mo.JSONMenu(menu, 'mo-menu'))
						.appendTo( $('body') )
						.css( 'display','none' );
					
					$('.userPic')
						.attr('id','mo-menu-target')
						.parent()
						.attr('id','mo-menu-context');
						
					setTimeout( function(){
						$("#mo-menu-context").contextmenu({
							delegate: "#mo-menu-target",
							menu: '.mo-menu',
							select: function(event, ui) { 
							
								var cmd = ui.item.attr('cmd');
								
								if( /#|(https?)?\/?\//.test(cmd) ){
									window.location.href = cmd;
								}
							}
						});
						$('.userPic').removeClass('has-dropdown not-click');
					},1234 );
				}
			},25);
			
			$('#headerbread').css('border', '1px solid #00979C')
				.pcss( 'border-bottom-left-radius','6px' )
				.pcss( 'border-bottom-right-radius','6px' );
			
			$('#description_board,.cat_bar').pcss('border-radius','6px');
				
			Rehash_stylizeWhiteBtns( 'input[type="submit"]:not([name="btnG"]),input[type="button"],button[type="submit"]' );
			break;

		case Mo.mode.INDEX.FORUM:
		
			$('.windowbg.clearfix').css({ 'border' : '1px solid #DFDFDF', 'border-top' : '0px', 'background-color' : '#eee' })
				.pcss( 'box-shadow', 'inset 0px 0px 3px 1px rgba(235,235,235,1)' )
				.filter(':odd')
				.css('background-color','#f7f7f7');
				
			$('#topic_container').css({ 'border-top' : '1px solid #DFDFDF', 'margin' : '3px 1px 0 1px' });
				
			$('div.info,div.stats').css( 'height', 'auto' );		
			$('.windowbg.clearfix>*').css('padding-bottom', '4px');
			
			
			/** Thread info sizing **/
			$('.info>p').css({ 'font-size' : '0.89em', 'margin-left' : '11px' })
			.next('small')
			.each(function(){
				if( $(this).prev()[0].tagName === 'P' ){ $(this).appendTo($(this).prev()); }
			});
			
			$('span.new_posts').css({ 'background' : '#69ABBF', 'color' :  '#FFF695', 'border' : '1px solid #777', 'margin' : 0 })
			.pcss( 'border-radius', '11px' )
			.pcss( 'text-shadow', '1px 1px #105557' );
			
			//break; //Fall through to root index modifications.
			
		case Mo.mode.INDEX.ROOT:
		
			$('.cat_bar').next().find('.up_contain:first').pcss('border-top-left-radius','6px').pcss('border-top-right-radius','6px');
			
			$('.info.home-s>a').css({ 'text-shadow' : '1px 1px white', 'font-size' : '1.3em' })
			.next('.lastpost-hack').css('margin',0);
			
			$('.stats>p>strong').css('text-shadow', '1px 1px white');
			
			$('div.up_contain')
				.css('border','1px solid #AAA')
				.pcss( 'box-shadow', 'inset 0px 0px 7px 1px rgba(225,225,225,1)' )
				.children('div.icon')
				.css('padding-top','15px');
				
			Rehash_stylizeWhiteBtns( '.topbottom,.button-forum' );
			break;			

		case Mo.mode.THREAD:
		
		//
			Rehash_stylizeWhiteBtns( '.topbottom,.button-forum' );
			Rehash_stylizePosts( $('.post_wrapper') );
			
			//If images load late, their post container will need to be resized.
			$('.post > .inner > img').on('load', function() {
				Rehash_stylizePosts( $(this).closest('.post_wrapper') );
				$(this).off();
			}).each(function() {
			  if(this.complete) $(this).off();
			});	
			break;

		case Mo.mode.LASTPOSTS:
			Rehash_stylizePosts( $('.windowbg,.windowbg2') );
			break;
	};
}

function Rehash_stylizeWhiteBtns( who ){

	$(who).css({ 'border-radius':'6px', 'background-color':'#ddd', 'border':'1px solid #999', 'color':'black' });
		
	$('.pagesection').each(function(){
		$(this)
			.prepend('<div class="buttonlist floatleft"></div>')
			.children('.floatleft:not(".buttonlist")')
			.removeClass('floatleft')
			.css('display','inline-block')
			.appendTo($(this).children('.buttonlist.floatleft'));
			
		$(this)
			.find('.topbottom')
			.removeClass('topbottom')
			.addClass('button-forum')
			.css('margin-right', '5px');
	});
	$('.buttonlist, .buttonlist .pagelinks').css('margin', '0px');		
}

function Rehash_stylizePosts( obj ){
	var largestPosterWidth = 0;
	obj
		.css('border', '1px solid #AAA')
		.pcss( 'box-shadow', 'inset 0px 0px 7px 1px rgba(220,220,220,1)' )
		.find('.poster')
		.css('margin-left', '5px')
		.end()
		.find('img.avatar')
		.pcss('border-radius','4px')
		.end()
		.find('.postarea, .moderatorbar') //.find('.post, .keyinfo, .moderatorbar')
		.css({ 'padding-left' : '5px', 'border-left' : '1px solid #bfbfbf' })
		.end()
		.find('ul.quickbuttons')
		.css({ 'border' : '1px solid #bfbfbf', 'padding' : '0px', 'margin-right' : '10px' })
		.end()
		.find('.page_number')
		.css('margin-right','5px')
		.end()
		.each(function(){ /** Normalize containers. **/
		
			var poster = $(this).find('.poster');
			var postarea = $(this).find('.postarea');
			//var postRightHeight = 
			if( poster.height() > postarea.height() ){
				var modb = $(this).find('.moderatorbar');
				var diff = ( poster.height() - postarea.height() ) - modb.height();
				if( diff > 0 ) postarea.height( postarea.height() + diff );
			}
			if( poster.width() > largestPosterWidth ) largestPosterWidth = poster.width(); 
		})
		.end()
		.find('.messageicon')
		.css('margin','0px');
	return obj;
}
//EOF