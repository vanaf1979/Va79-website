<div class="main-nav va-grid-full">

    <div class="pure-g va-grid-center">

        <div class="logo pure-u-1 pure-u-sm-1-4 pure-u-md-1-4 pure-u-lg-1-4 pure-u-xl-1-4">
            
            <a href="">va79sdfsdsdf</a>

        </div>

        <div class="nav pure-u-1 pure-u-sm-3-4 pure-u-md-3-4 pure-u-lg-3-4 pure-u-xl-3-4">
            
            <?php wp_page_menu('show_home=Home&menu_class=mainmenu&sort_column=menu_order&exclude=1&depth=1&exclude_tree=1'); ?>

            <?php 
            $lang = pll_the_languages(array('raw'=>1));
            ?>
            <ul class="lang">
                <li>
                    <a href="<?php echo $lang['nl']['url']; ?>">Nl</a>
                </li>
                <li>
                    <a href="<?php echo $lang['en']['url']; ?>">En</a>
                </li>
            </ul>
        </div>

    </div>
        
</div>