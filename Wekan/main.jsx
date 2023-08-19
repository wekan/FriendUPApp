Application.run = function( msg )
{
	this.setApplicationName( 'WeKan' );
	
	var v = new View( {
		title: 'Wekan',
		width: 900,
		height: 780
	} );
	
	var f = new File( 'Progdir:Templates/main.html' );
	f.onLoad = function( data )
	{
		v.setContent( data );
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
					name: 'Quit',
					command: 'quit'
				}
			]
		}
	] );
}
