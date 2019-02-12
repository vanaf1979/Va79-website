<?php defined( 'ABSPATH' ) or die( 'Go eat veggies!' ); ?>

<?php get_template_part('parts/header'); ?>

    <body <?php body_class(); ?>>

        <div id="app">

            
            <?php get_template_part('components/main-nav'); ?>

            
            <?php get_template_part('components/slider'); ?>

        
        </div>

        <?php wp_footer(); ?>

    </body>

</html>