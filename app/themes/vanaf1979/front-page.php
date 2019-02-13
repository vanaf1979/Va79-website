<?php defined( 'ABSPATH' ) or die( 'Go eat veggies!' ); ?>

<?php get_template_part('components/header'); ?>

    <body <?php body_class(); ?>>

        <div id="app">

            
            <?php get_template_part('components/main-nav'); ?>

            
            <?php get_template_part('components/slider'); ?>


            <?php get_template_part('components/intro'); ?>

        
        </div>

        <?php wp_footer(); ?>

    </body>

</html>