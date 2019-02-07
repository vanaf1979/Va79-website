<?php
/*!
Theme Name:         Va79 Base theme
Theme URI:          https://npo.vanaf1979.nl/
Description:        A base WordPress theme.
Version:            1.0.0
Author:             Vanaf1979
Author URI:         https://vanaf1979.nl
Text Domain:        va79-base-theme
License:            MIT License
License URI:        http://opensource.org/licenses/MIT
*/


// function my_theme_enqueue_styles()
// {
// 	wp_enqueue_style( 'purecss', 'https://unpkg.com/purecss@1.0.0/build/pure-min.css', array(), '1.0.0', 'screen' );

// 	wp_enqueue_style( 'purecss-ie8' , 'https://unpkg.com/purecss@1.0.0/build/grids-responsive-old-ie-min.css', array() , '1.0.0' , 'screen' );
// 	wp_style_add_data( 'purecss-ie8' , 'conditional' , 'lte IE 8' );

// 	wp_enqueue_style( 'purecss-ie9' , 'https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css', array() , '1.0.0' , 'screen' );
// 	wp_style_add_data( 'purecss-ie9' , 'conditional' , 'gt IE 8' );

// 	wp_enqueue_style( 'my-theme-styles', get_template_directory_uri() . '/style.css', array(), '1.0.0', 'screen' );

// 	wp_register_style( 'my-theme-inline-css', false );
// 	wp_enqueue_style( 'my-theme-inline-css' );
// 	wp_add_inline_style( 'my-theme-inline-css', '* { color: red; }' );
// }

// add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );


// function my_theme_enqueue_scripts()
// {
// 	wp_deregister_script('jquery');

// 	wp_enqueue_script( 'my-theme-scripts', get_template_directory_uri() . '/public/js/app.js', array(), '1.0.0', true );
// }

// add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_scripts' );


// function my_theme_optimize_style_tags( $html , $handle , $href , $media )
// {
// 	return "<link rel='stylesheet' id='{$handle}' href='{$href}' media='{$media}' />" . "\n";
// }

// add_filter('style_loader_tag', 'my_theme_optimize_style_tags', 10, 4);


// function my_theme_optimize_script_tags( $tag , $handle , $src )
// {
// 	$defer = ( $handle == 'my-theme-scripts' ) ? 'async defer' : '';

// 	return "<script id='{$handle}' {$defer} src='{$src}'></script>" . "\n";
// }

// add_filter('script_loader_tag', 'my_theme_optimize_script_tags', 10, 3);


/*<script src="https://gist.github.com/vanaf1979/1ba868d57230be9f40c70f6502ac4abf.js"></script>
* Setting up required plugins installation.
*/
require_once get_template_directory() . '/functions/tgmpa/tgm-plugin-activation.php';


/*
* Setting up teh base theme funtions.
*/
require_once get_template_directory() . '/functions/va79/va79-theme-class.php';

function run_theme()
{
	$theme_class = new Theme();
}

run_theme();
?>
