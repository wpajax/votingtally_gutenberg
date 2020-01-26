<?php
/**
 * Initialize and output the Popular Posts block.
 *
 * @package votingtally
 */

namespace VotingTally\Blocks;

/**
 * Class Popular_Posts
 */
class Enqueue {

	/**
	 * Class Constructor.
	 */
	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_scripts_and_styles' ) );
	}

	/**
	 * Enqueue block assets.
	 */
	public function block_scripts_and_styles() {
		// Register block scripts and set translations.
		wp_register_script(
			'votingtally_block',
			VOTINGTALLY_URL . 'dist/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			VOTINGTALLY_VERSION,
			true
		);
		wp_localize_script(
			'votingtally_block',
			'votingtally_admin',
			array(
				'rest_url' => rest_url(),
				'nonce'    => wp_create_nonce( 'wp_rest' ),
			)
		);
		wp_set_script_translations( 'votingtally_block', 'votingtally' );

		// Register our block stylesheet.
		wp_register_style(
			'votingtally_block_css',
			VOTINGTALLY_URL . 'dist/blocks.editor.build.css',
			array(),
			VOTINGTALLY_VERSION,
			'all'
		);
	}
}
