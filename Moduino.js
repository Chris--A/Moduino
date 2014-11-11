

var Moduino = {

	/***
		The central configuration determining which modifications are run.
	***/
	
	'config' : {
	
		'global' : {
		
			'enabled' 		: true,
			
			'resizeContent'	: {
				'enabled'	: true, 
				'value'		: 87 
			},
			
			'minimizeHeader' : {
				'enabled'			: true,
				'useContentWidth'	: false
			},
			
			'removeShopping' : true
		},
		
		'index' : {
			'enabled' : true,
			
			'root' : {
				'enabled' : true
			},
			
			'forum' : {
				'enabled'			: true,
				'shrinkContainers'	: true,
				'removeMenu'		: true,		/** There is currently an empty menu bar above thread listing. (17px high) **/
				
				'sticky' 			: {
					'enabled'	: true,			
					'hide'		: true,			/** Hide sticky threads **/
					'addToggle'	: true			/** Add a button to toggle visibility **/
				}	
			}
		
		},
	
		'thread' : {
			'enabled' 			: true,	

			'code'				: {
				'enabled' 		: true,
				'hoverSelect'	: true
			},
			
			'quote'				: {
				'enabled' 		: true,
				'hoverSelect'	: true,
				'hideEmptyHead'	: true,
				'colours'		: [ '#e4e4e4', 'rgba(250, 242, 0, 0.28)', 'rgb(245, 215, 120)' ]
			},
			
			'sizeableCode'		: {
				'enabled'		: true,			/** Can be set to false if using highlighting. (value is used). **/
				'value'			: 250			/** Maximum starting height for long code boxes **/
			},
			
			'hideIP'			: true,			/** No need to know everyone's IP has been logged. **/
			'shrinkPost'		: true,			/** Minor padding & margin fixes. **/
			'combineKarma'		: true,			/** Combine the '[Add Karma]' link with the karma count **/
			'hideProfileLink'	: true,			/** Currently a users post profile can show two web links **/
			
			'codeHighlighting'	: {
				'enabled'		: true,
				'lineNumbers'	: true,
				'pathToJS'		: '//arduino.land/JS/SyntaxHighlighter/',
				'pathToCSS'		: '//arduino.land/CSS/SyntaxHighlighter/',
				'core'			: 'Moduino',
				'brushes'		: [ 'Cpp' ],
				'theme'			: 'Moduino',
				'cssExt'		: 'scss'
			}
		},
		
		/***
			Debugging configuration data.
			
			There are no modifications controlled with these settings.
		***/		
		
		'debug' : {
			'enabled' 			: true,
			'breakOnWarning'	: false
		},
		
		/***
			Internal configuration data.
			
			There are no modifications controlled with these settings.
			Adding an enable = false does nothing.
		***/
		
		'internal' : {
			'idPrefix' : '__MODUINO__'
		},		
	},
	
	/** Debugging constants for use with the DBG() function. Use these values as they may change ( from an integer to a function! ). **/

	'debug' : {
		'notification'	: 0,
		'warning'		: 1,
		'error'			: 2,
		'mod'			: 3
	},
	
	
	/** Calling this is function is necessary as it creates working variables. **/
	
	'init' : function(){
		
		//Add runtime data members.
		this.debug.footerReady = false;
		DBG();
	},
	
	'dbg'	: function ( msg, code ){ DBG( msg, code || Moduino.debug.notification ); },
	'dbgm'	: function ( msg ){ this.dbg( msg, Moduino.debug.mod ); }
	
};

/***
	Helper functions and jQuery add ons.
***/

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

function selectElementText(el, win) {
    win = win || window;
    var doc = win.document, sel, range;
    if (win.getSelection && doc.createRange) {
        sel = win.getSelection();
        range = doc.createRange();
        range.selectNodeContents(el);
        sel.removeAllRanges();
        sel.addRange(range);
    } else if (doc.body.createTextRange) {
        range = doc.body.createTextRange();
        range.moveToElementText(el);
        range.select();
    }
}

jQuery.cachedScript = function( url, options ) {
  options = $.extend( options || {}, {
    dataType: "script",
    cache: true,
    url: url
  });
  return jQuery.ajax( options );
};

$.fn.innerText = function(msg) {
	 if (msg) {
		if (document.body.innerText) {
		   for (var i in this) {
			  this[i].innerText = msg;
		   }
		} else {
		   for (var i in this) {
			  this[i].innerHTML.replace(/\&lt;br\&gt;/gi,"\n").replace(/(&lt;([^&gt;]+)&gt;)/gi, "");
		   }
		}
		return this;
	 } else {
		if (document.body.innerText) {
		   return this[0].innerText;
		} else {
		   return this[0].innerHTML.replace(/\&lt;br\&gt;/gi,"\n").replace(/(&lt;([^&gt;]+)&gt;)/gi, "");
		}
	 }
};

/*** 
	Calling this is function is necessary as it creates working variables.
***/
$( function ( gq ){

	var dhr = document.location.href;

	//Do nothing if not on forum pages.
	if( dhr.indexOf( 'forum.arduino.cc' ) == -1 ) return;
	
	
	
	var isGlobalIndex		= false,
		isForumIndex		= false,
		isThread			= false,
		isNewReply			= false;
	
	
	//Try determine page via its title string.
	switch( $( 'title' ).first().text() ){
	
		case 'Arduino Forum - Index':	isGlobalIndex	= true; break;
		case 'Post Reply': 				isNewReply		= true; break;
		default:
		
			//Only threads should contain a #tob_subject element.
			isThread = !!$( 'span#top_subject' ).length;
			
			//Detect forum index.
			isForumIndex = ( /http:\/\/forum.arduino.cc\/index.php\?board=[0-9.]*/ ).test( dhr );
	}

	Moduino.init();
 
	switch( bv( isGlobalIndex ) +
			bv( isForumIndex ) +
			bv( isThread ) + 
			bv( isNewReply ) ){
	
		case 0:
			DBG( 'Page does not match any detection rule!', Moduino.debug.warning );
		case 1:
		
			GlobalMods();
			if( isGlobalIndex ) GlobalIndexMods();
			if( isForumIndex ) ForumIndexMods();
			if( isThread ) ThreadMods();
			if( isNewReply ) ReplyMods();
			break;
			
		default:
			DBG( 'Page matches more than one rule!', Moduino.debug.error );
	}
	
});


/***
	bv function.
	Convert a boolean into a integer.
***/

function bv( b ){ return b ? 1 : 0; }


function DBG( str, level ){

	var config = Moduino.config.internal;
	
	var thisConfig = Moduino[ 'config' ][ 'internal' ];

	str = str ||	"/r/n=======================================\r\n" +
					"Thank you for using Moduino\r\n" +
					"Written by:	Christopher Andrews" +
					"/r/n=======================================\r\n";
	level = level || Moduino.debug.notification;
	
	
	//Detect page footer
	var footer = $( 'div#pagefooter.pagefooter' );
	
	if( !config.footerReady  && footer.length == 1 ){
	
		var dbg = config.idPrefix + 'debugWindow';
		
		footer.append( "<div id='" + dbg + "'></div>" );
		
		$( dbg ).css({
			'background-color'	: 'black',
			'color' 			: 'white',
			'min-height'		: '100px'
		});
		
		config.footerReady = true;
	}
	var msgType;
	
	switch( level ){
		case 0: msgType = 'Notification'; break;
		case 1: msgType = 'Warning'; break;
		case 2: msgType = 'Error'; break;
		case 3: msgType = 'Mod'; break;
	}

	var msg = 'Moduino{' + msgType + '}: ' + str;
	
	if( !(typeof console === 'undefined') ) console.log( msg );
	
	if( config.footerReady ){
		$( config.idPrefix + 'debugWindow' ).html( msg );
	}
}


/***
	GlobalMods function.
	
	All modifications that run on every forum page go here.
***/

function GlobalMods(){ 

	DBG( 'Running global junk' );
	
	var config = Moduino.config.global;
	
	if( config.resizeContent.enabled ){

		Moduino.dbgm( 'resizeContent' );
		
		var dRC = $( 'div.row.collapse' );
		
		dRC.first().css( 'margin-right', '5px' );
		
		$(dRC[1])
			.css({ 'cssText'	: 'max-width: none !important;', 'width' : config.resizeContent.value + '%' })
			.find( 'div#wrapper' )
			.css( 'max-width', 'none' );
	}
	
	/** This modification will reduce the space taken up by the forum header. **/
	
	if( config.minimizeHeader.enabled ){
	
		Moduino.dbgm( 'minimizeHeader' );
		
		//Remove colour from page.
		$( 'body' ).css( 'background', 'none' );
		$( '#pageheader' ).css({
			'margin-top'	: '5px',
			'padding-top'	: '3px'
		})
			.children( 'div.row' )
			.first()
			.css( 'padding-left', '3px' );
		
		$( 'nav.top-bar' ).css( 'margin', '0 3px 0 0' );
		
		//Remove margin from bread crumbs and move to header navigation.
		$( '#headerbread' )
			.css({
				'margin' : '0px',
				'padding' : '0 3px 0 3px'
			}).appendTo( '#pageheader' );
		
		//Move bread crumbs into header navigation.
		
		
		/** If the content width has been modified, this  option will use the same value for the header. **/
		
		if( config.minimizeHeader.useContentWidth && config.resizeContent.enabled ){
		
			$( 'div#page' ).css({
				'max-width' : 'none',
				'width'		: config.resizeContent.value + '%'
			});
		}
		
		
	}
	
	/** Hide the damn shopping cart. **/
	
	if( config.removeShopping ){
		$( 'li' ).find( '.cart' ).hide();
	}
}


/***
	GlobalIndexMods function.
***/

function GlobalIndexMods(){ 
	DBG( 'Found global index' );
}

/***
	ForumIndexMods function.
***/

function ForumIndexMods( mode ){ 
	DBG( 'Found forum index' );
	
	var config = Moduino.config.index.forum;
	
	if( config.shrinkContainers ){
	
		Moduino.dbgm( 'shrinkContainers' );
		$( '#topic_container>.windowbg' )
			.height( 'auto' )
			.css({ 'border' : '0' })
			.find( 'p' )
			.css( 'min-height' , 'inherit' );
	}
			
	/** There is currently an empty menu bar above thread listing. (17px high) **/
	
	if( config.removeMenu ){
	
		Moduino.dbgm( 'removeMenu' );
		$( '#wrapper>#upper_section' ).hide();
	}
	
	/** Hide sticky threads **/
	var sel = '.sticky-forum.windowbg';
	
	if( config.sticky.enabled && $(sel).length ){
	
		Moduino.dbgm( 'sticky' );
		
		if( config.sticky.hide ) $(sel).hide();
			
		if( config.sticky.addToggle ){
			$( '#description_board' ).prepend( '<button id="sticky-toggle" onClick="' + "$( '" + sel + "' ).toggle();" + '">Sticky Threads</button>' );
			formatButton( '#sticky-toggle' ).css( 'float','right' );
		}
	}	
	
	
}

/***
	ThreadMods function.
***/

function ThreadMods(){

	var config = Moduino.config.thread;

	DBG( 'Found thread' );
	
	
	/*** Allow resizing of code containers ***/
	
	if( config.sizeableCode.enabled ){
	
		Moduino.dbgm( 'sizeableCode' );
		
		$( '.bbc_code' ).each( function( i, e ){ 
			$(e).css({ 
				'max-height' : 'none', 
				'height' : ( e.scrollHeight > config.sizeableCode.value ? config.sizeableCode.value + 'px' : 'auto' ) 
			});
		});
	}
	
	/*** Hide IP information ***/
	
	if( config.hideIP ){
	
		Moduino.dbgm( 'hideIP' );
		$( 'li.poster_ip' ).hide();
	}
	
	/*** Reduce the size of post containers ***/
	
	if( config.shrinkPost ){
	
		Moduino.dbgm( 'shrinkPost' );
		
		$( 'div#upper_section' ).hide();

		$( 'div.post_wrapper' )
			.css( 'padding', '2px' )
			.parent()
			.css( 'padding', '0px' );
			
		$( 'ul.user_info' ).css( 'margin-bottom', '0px' );
	}	
	
	/*** Combine the '[Add Karma]' link with the karma count ***/
	
	if( config.combineKarma ){
	
		Moduino.dbgm( 'combineKarma' );
		$( 'li.custom.karma_good' ).wrapInner(function(){ 
			return '<a href="' + $(this).siblings( '.karma_labels' ).hide().children( 'a' ).attr( 'href' ) + '"></a>'; 
		});
	}
	
	/** Currently a users post profile shows two web links **/
	
	if( config.hideProfileLink ){
	
		Moduino.dbgm( 'hideProfileLink' );
		$( 'li.link-profile' ).hide();

	}
	
	/** Add highlighting to code boxes **/
	
	if( config.codeHighlighting.enabled && $( '.bbc_code' ).length ){
	
		var chl = config.codeHighlighting,
		txt;
	
		Moduino.dbgm( txt = 'codeHighlighting' );
		txt += ': ';
		
		//Insert syntax highlighter CSS
		$('head')
			.append('<link rel="stylesheet" href="' + chl.pathToCSS + 'shCore.' + chl.cssExt + '" type="text/css" />')
			.append('<link rel="stylesheet" href="' + chl.pathToCSS + 'shCore' + chl.core + '.' + chl.cssExt + '" type="text/css" />')
			.append('<link rel="stylesheet" href="' + chl.pathToCSS + 'shTheme' + chl.theme + '.' + chl.cssExt + '" type="text/css" />');		

		//Get syntaxhighlighter code.
		$.cachedScript( chl.pathToJS + 'shCore.js' )
			.fail(function ( s ){ Moduino.dbg( txt + 'AJAX Failed', Moduino.debug.error ); })
			.success( function ( s ){
			
				Moduino.dbg( txt + 'Got shCore.js' );
				
				var successCount = 0;
				
				$.each( chl.brushes, function ( i, e ){
				
					$.cachedScript( chl.pathToJS + 'shBrush' + e + '.js' )
						.fail(function ( s ){ Moduino.dbg( txt + 'AJAX Failed', Moduino.debug.error ); })
						.success( function ( s ){
						
							Moduino.dbg( txt + 'Got shBrush' + e + '.js' ); 
							
							if( ++successCount == chl.brushes.length ){
							
								$( 'code.bbc_code' )
									.css({
										'padding'		: '0px',
										'max-height'	: 'none',
										'border'		: '1px solid #cfcfcf',
										'position'		: 'relative'
									})
									.wrapInner( '<pre class="brush: cpp"></pre>' )
									.children()
									.each( function ( i, e ){ $(e).innerText( $(e).innerText() ); });
									
								SyntaxHighlighter.defaults.gutter = chl.lineNumbers;
								SyntaxHighlighter.defaults.toolbar = false;
								SyntaxHighlighter.highlight();
								
								if( config.code.hoverSelect  )
									addHoverSelect( '.bbc_code', "$(this).parent().find( 'div.container' )[0]" );

								//Fix code box height, as highlighted code is smaller than the standard SMF code.
								$( '.bbc_code' ).each( function( i, e ){ 
									$(e).css( 'height', ( $(e).find( '.syntaxhighlighter' )[0].scrollHeight > config.sizeableCode.value ? config.sizeableCode.value + 'px' : 'auto' ) );
								});
							}
						});
				});				
		});
	}
	
	/*** Move code '[Select]' function to hover over ***/
	
	if( config.code.hoverSelect  ){
	
		Moduino.dbgm( 'code.hoverSelect' );
		$( '.codeheader' ).hide();
		if( !config.codeHighlighting.enabled )
			addHoverSelect( '.bbc_code' );
	}
	
	if( config.quote.enabled ){

		Moduino.dbgm( 'quote' );
	
		$( '.quoteheader' ).each(function ( i, e ){
			if( config.quote.hideEmptyHead && $(e).children().text() === 'Quote' )
				$(e).hide();
			else
				$(e).css( 'padding', '0 4px' );
		});
		
		
		
		if( config.quote.hoverSelect  ){
		
			Moduino.dbgm( 'quote.hoverSelect' );
			$( '.bbc_standard_quote' ).wrapInner( '<div></div>' );
			addHoverSelect( '.bbc_standard_quote', "$(this).parent().find('div').first()[0]" )
				.css( 'padding', '4px 4px' );
		}
	
		if( config.quote.colours != false ){
		
			Moduino.dbgm( 'quote.colours' );
			
			$( '.bbc_standard_quote' ).css({
				'background-color' : config.quote.colours[ 1 ],
				'border' : '1px solid ' + config.quote.colours[ 2 ],
				'margin-bottom' : '-1px'
			});
			
			$( '.quoteheader' ).css({
				'background-color' : config.quote.colours[ 0 ],
				'border' : '1px solid ' + config.quote.colours[ 2 ],
				'margin-bottom' : '-1px'
			});			
		}
	}
	
	return;
}

function addHoverSelect( owner, what ){

		what = what || 'this';

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

/***
	ReplyMods function.
***/

function ReplyMods(){ 
	DBG( 'Found reply' );
}


/*
'<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">'
 + '<input type="hidden" name="cmd" value="_donations">'
 + '<input type="hidden" name="business" value="GYFSELTGAYHEY">'
 + '<input type="hidden" name="lc" value="AU">'
 + '<input type="hidden" name="item_name" value="Moduino">'
 + '<input type="hidden" name="currency_code" value="AUD">'
 + '<input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHosted">'
 + '<input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal — The safer, easier way to pay online.">'
 + '<img alt="" border="0" src="https://www.paypalobjects.com/en_AU/i/scr/pixel.gif" width="1" height="1">'
 + '</form>'
*/
/*** UNUSED CODE

function isDef( d ){
	return typeof( d ) == "undefined";
}

function isObj( obj ){
	return !isDef( obj ) && typeof( obj ) == "object";
}

function isFunc( func ){
	return !isDef( func ) && typeof( func ) == "function";
}

function htmlEscape(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}
***/

