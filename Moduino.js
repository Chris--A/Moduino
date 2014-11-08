

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
	
		'thread' : {
			'enabled' 		: true,		
			'sizeableCode'	: true,
			'hideIP'		: true,
			'shrinkPost'	: true,
			'combineKarma'	: true,				/** Combine the '[Add Karma]' link with the karma count **/
			'hideProfileLink' : true			/** Currently a users post profile shows two web links **/
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
	
	'dbgm' : function ( msg ){ DBG( msg, Moduino.debug.mod ); }
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
	}
	

	//Only threads should contain a #tob_subject element.
	isThread = !!$( 'span#top_subject' ).length;
	
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

	str = str || "Thank you for using Moduino\r\nWritten by:	Christopher Andrews";
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
		
		$( 'body' ).css( 'background', 'none' );
		$( '#pageheader' ).css({
			'margin-top'	: '5px',
			'padding-top'	: '3px',
			'padding-left'	: '3px'
		});
		$( 'nav.top-bar' ).css( 'margin-right', '3px' );
		
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

function ForumIndexMods(){ 
	DBG( 'Found forum index' );
}

/***
	ThreadMods function.
***/

function ThreadMods(){

	var config = Moduino.config.thread;

	DBG( 'Found thread' );
	
	
	/*** Allow resizing of code containers ***/
	
	if( config.sizeableCode ){
	
		Moduino.dbgm( 'sizeableCode' );
		
		$( function(){
			$( '.bbc_code' ).each( function( i, e ){ 
				$(e).css({ 'max-height' : 'none', 'height' : ( e.scrollHeight > 200 ? '200px' : 'auto' ) });
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
		
		$( 'li.custom.karma_good' ).each( function( i, e ){
			e = $(e);
			i = e.first().next().next().find( 'a' ).first();
			e.html( '<a href="' + i.attr( 'href' ) + '">' + e.text() + '</a>' );
			i.hide();
		});
	}
	
	/** Currently a users post profile shows two web links **/
	
	if( config.hideProfileLink ){
	
		Moduino.dbgm( 'hideProfileLink' );
		$( 'li.link-profile' ).hide();

	}
	return;
}

/***
	ReplyMods function.
***/

function ReplyMods(){ 
	DBG( 'Found reply' );
}


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
***/

