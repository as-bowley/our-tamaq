<?php

add_action('rest_api_init', 'recipeApi');

function recipeApi()
{
  register_rest_route(
    'tamaq/v1',
    'recipes',
    array(
      'methods' => WP_REST_SERVER::READABLE,
      'callback' => 'allRecipes'
    )
  );
}
;

function allRecipes()
{
  $recipes = new WP_Query(
    array(
      'post_type' => 'recipe'
    )
  );

  return $recipes->posts;
}