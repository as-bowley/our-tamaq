<?php

require get_theme_file_path('/inc/api-route.php');

function our_tamaq_post_types()
{
  register_post_type(
    'recipe',
    array(
      'supports' => array('title', 'editor', 'thumbnail'),
      'public' => true,
      'show_in_rest' => true,
      'has_archive' => true,
      'labels' => array(
        'name' => 'Recipes',
        'add_new_item' => 'Add New Recipe',
        'edit_item' => 'Edit Recipe',
        'all_items' => 'All Recipes',
        'singular_name' => 'Recipe'
      ),
      'menu_icon' => 'dashicons-food'
    )
  );
}
;

add_action('init', 'our_tamaq_post_types');
add_theme_support('post-thumbnails');