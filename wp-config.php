<?php
// ===================================================
// Load database info and local development parameters
// ===================================================
// define( 'DB_NAME', '%%DB_NAME%%' );
// define( 'DB_USER', '%%DB_USER%%' );
// define( 'DB_PASSWORD', '%%DB_PASSWORD%%' );
// define( 'DB_HOST', '%%DB_HOST%%' ); // Probably 'localhost'

define( 'DB_NAME', 'buddytest' );
define( 'DB_USER', 'root' );
define( 'DB_PASSWORD', 'melanie123' );
define( 'DB_HOST', 'localhost' );


// ========================
// Custom Content Directory
// ========================
define( 'WP_CONTENT_DIR', dirname( __FILE__ ) . '/app' );
define( 'WP_CONTENT_URL', 'http://' . $_SERVER['HTTP_HOST'] . '/app' );


// ================================================
// You almost certainly do not want to change these
// ================================================
define( 'DB_CHARSET', 'utf8' );
define( 'DB_COLLATE', '' );


// ==============================================================
// Salts, for security
// Grab these from: https://api.wordpress.org/secret-key/1.1/salt
// ==============================================================
define('AUTH_KEY',         '[R>ctwm>V|ovE{rg,r7tmExw.c+$$$=13vXzB}JXp(;veAWQc{.xcGe>MR;aXT,J');
define('SECURE_AUTH_KEY',  '>t<|12v|)Pg=@fHC}|M63*U1?2#9iX6a_[U;8x<@W2X|hI0q=waCpa6RuVg&%7>)');
define('LOGGED_IN_KEY',    ':6W[5%2V-@{4#XCsm8[qix!c:lM}Y|-5/j360L(TO!B8Tzex/9Zl7>A%kuvG1&oG');
define('NONCE_KEY',        'n&-{|RIzCp!#BVO>Jy:@af,V=H6VT57c0x~.iJCUD9&-|BZ0_L |dWoPQI|x=%Md');
define('AUTH_SALT',        'r<0t@&:`wGK9!@M:aUXrZ7Xw{qLM:)Mp;FNmC-$ZxF~7$^oL(P[GK;%!eXn).WQ3');
define('SECURE_AUTH_SALT', '{BA$u|juD~ TE4B0c#i;7*-kLa+kVy|q;Cr2=,xo4_f;3Ev-M+0PQ@q$LVkvx=w[');
define('LOGGED_IN_SALT',   'tLRlF,3|BkR8+{+~u5o`elbXpk<:(d1Rdpx;K^LRQkxL|]O #vev{x1fhi}AEQm7');
define('NONCE_SALT',       'NW QikNq|.w%6$! ]-D_*T96@S{>{?~*nSAs%|d`VV;+T[M|HS(Lcvm]caoy;$  ');


// ==============================================================
// Table prefix
// Change this if you have multiple installs in the same database
// ==============================================================
$table_prefix  = 'wp_';


// ================================
// Language
// Leave blank for American English
// ================================
define( 'WPLANG', '' );


// ===========
// Errors
// ===========
$vadebugging = false;

if( $vadebugging )
{
    error_reporting(E_ALL);
    ini_set('display_errors','On');
    define('WP_DEBUG', true);
    define('WP_DEBUG_LOG', true);
    define('WP_DEBUG_DISPLAY', true);
    define('SCRIPT_DEBUG', true);
    define('SAVEQUERIES', true);
}
else
{
    ini_set('display_errors', 0);
    define('WP_DEBUG', false);
    define('WP_DEBUG_LOG', false);
    define('WP_DEBUG_DISPLAY', false);
    define('SCRIPT_DEBUG', false);
    define('SAVEQUERIES', false);
}


// ===================
// Bootstrap WordPress
// ===================
if ( !defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/wp/' );
require_once( ABSPATH . 'wp-settings.php' );
