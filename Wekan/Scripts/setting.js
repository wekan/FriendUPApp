// Set data

let v = new Module( 'system' );
v.onExecuted = function( returncode, returndata )
{
console.log( returncode, returndata );
}
v.execute( 'setsetting', { 'setting' 'somedata' } );

// Get data

let o = new Module( 'system' );
o.onExecuted = function( returncode, returndata )
{
    console.log( returncode, returndata );
}
o.execute( 'getsetting', { 'setting': 'somesetting' } );

