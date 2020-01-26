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
class Popular_Posts {
	/**
	 * Class Constructor
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_block' ) );
	}

	/**
	 * Register the Popular Posts Block in PHP.
	 */
	public function register_block() {
		if ( ! function_exists( 'register_block_type' ) ) {
			return;
		}
		register_block_type(
			'votingtally/popular-posts',
			array(
				'attributes'      => array(
					'align' => array(
						'type'    => 'string',
						'default' => 'center',
					),
				),
				'editor_script'   => 'votingtally_block',
				'editor_style'    => 'votingtally_block_css',
				'render_callback' => array( $this, 'frontend' ),
			)
		);
	}

	/**
	 * Front-end output for our block.
	 *
	 * @param array $attributes Attributes passed from Gutenberg.
	 */
	public function frontend( $attributes ) {
		return wp_kses_post( do_shortcode( '[votingtally]' ) );
	}
}
