<?php
/**
 * GreenLeaf – WordPress REST API integratie
 *
 * Plak deze code onderaan functions.php van je actieve thema
 * (Weergave → Thema-editor → functions.php), of gebruik een
 * plugin zoals "Code Snippets".
 *
 * Na toevoeging zijn de hero-velden op twee manieren beschikbaar:
 *
 *   Methode A – register_rest_field (top-level 'hero_fields'):
 *     GET /wp-json/wp/v2/pages?slug=home
 *     → { "hero_fields": { "hero_titel": "...", ... } }
 *
 *   Methode B – register_post_meta (onder 'meta'):
 *     GET /wp-json/wp/v2/pages?slug=home&_fields=meta
 *     → { "meta": { "hero_titel": "...", ... } }
 */

// ── Methode A: register_rest_field ──────────────────────────────────────────
// Voegt een 'hero_fields' object toe aan elke page-response.
add_action( 'rest_api_init', function () {
    register_rest_field(
        'page',
        'hero_fields',
        [
            'get_callback' => function ( $post_arr ) {
                return [
                    'hero_titel'     => get_post_meta( $post_arr['id'], 'hero_titel',     true ) ?: '',
                    'hero_subtitel'  => get_post_meta( $post_arr['id'], 'hero_subtitel',  true ) ?: '',
                    'hero_knoptekst' => get_post_meta( $post_arr['id'], 'hero_knoptekst', true ) ?: '',
                ];
            },
            'update_callback' => null,
            'schema'          => [
                'type'        => 'object',
                'description' => 'Hero ACF velden',
                'properties'  => [
                    'hero_titel'     => [ 'type' => 'string' ],
                    'hero_subtitel'  => [ 'type' => 'string' ],
                    'hero_knoptekst' => [ 'type' => 'string' ],
                ],
            ],
        ]
    );
} );

// ── Methode B: register_post_meta met show_in_rest ──────────────────────────
// Stelt de velden bloot onder 'meta' in de REST response.
add_action( 'init', function () {
    $hero_fields = [ 'hero_titel', 'hero_subtitel', 'hero_knoptekst' ];

    foreach ( $hero_fields as $field ) {
        register_post_meta( 'page', $field, [
            'show_in_rest'  => true,
            'single'        => true,
            'type'          => 'string',
            'auth_callback' => function () {
                return current_user_can( 'edit_posts' );
            },
        ] );
    }
} );
