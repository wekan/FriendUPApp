Application.run = function( msg )
{
	this.setApplicationName( 'WeKan' );
	
	var v = new View( {
		title: 'WeKan',
		width: 900,
		height: 780,
		replacements: {
			launchwith: msg.args ? msg.args : ''
		},
		onready: function()
		{
			if( msg.args && msg.args.indexOf( ':' ) > 0 )
			{
				v.sendMessage( { command: 'launchwith', file: msg.args } );
			}
		}
	} );
	
	var f = new File( 'Progdir:Templates/main.html' );
	f.onLoad = function( data )
	{
		v.setContent( data );
        //InitTabs( ge( 'MyTabs') );
	}

	f.load();
	
	v.onClose = function()
	{
		Application.quit();
	}
	
	
	v.setMenuItems( [
		{
			name: 'File',
			items: [
			    {
			        name: 'About WeKan',
			        icon: 'info',
			        command: 'about'
			    },
			    {
			        name: 'WeKan Website',
			        command: 'wekanwebsite'
			    },
			    {
			        name: 'Commercial Support',
			        command: 'wekancommercialsupport'
			    },
				{
					name: 'Quit',
					command: 'quit'
				},
			]
			
		}
	] );
}

// Messaging support -----------------------------------------------------------
var abw = manual = false;
var wtb = manual = false;
var wws = manual = false;
var wcom = manual = false;
Application.receiveMessage = function( msg )
{
	if( msg.command )
	{
		switch( msg.command )
		{
			case 'about':
				if( abw )
				{
					abw.activate();
					return;
				}
				abw = new View( {
					title: 'About WeKan',
					width: 600,
					height: 380
				} );
				var f = new File( 'Progdir:Templates/about_' + Application.language + '.html' );
				f.i18n();
				f.onLoad = function( data )
				{
					abw.setContent( data );
				}
				f.load();
				abw.onClose = function(){ abw = false; }
				break;
			case 'wekanwebsite':
				if( wws )
				{
					wwws.activate();
					return;
				}
				wws = new View( {
					title: 'WeKan Website',
					width: 800,
					height: 700
				} );
				var f = new File( 'Progdir:Templates/wekanwebsite.html' );
				f.i18n();
				f.onLoad = function( data )
				{
					wws.setContent( data );
				}
				f.load();
				wws.onClose = function(){ wws = false; }
				break;
			case 'wekancommercialsupport':
				if( wcom )
				{
					wcom.activate();
					return;
				}
				wcom = new View( {
					title: 'WeKan Commercial Support',
					width: 800,
					height: 700
				} );
				var f = new File( 'Progdir:Templates/wekancommercialsupport.html' );
				f.i18n();
				f.onLoad = function( data )
				{
					wcom.setContent( data );
				}
				f.load();
				wcom.onClose = function(){ wcom = false; }
				break;
		}
	}
}