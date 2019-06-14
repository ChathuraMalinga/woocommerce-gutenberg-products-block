<?php
/**
 * Product category block.
 *
 * @package WooCommerce/Blocks
 */

namespace WooCommerce\Blocks\BlockTypes;

defined( 'ABSPATH' ) || exit;

/**
 * ProductCategory class.
 */
class ProductCategory extends AbstractProductGrid {

	/**
	 * Block name.
	 *
	 * @var string
	 */
	protected $block_name = 'product-category';

	/**
	 * This function is not necessary in this block.
	 *
	 * @param array $query_args Query args.
	 */
	protected function set_block_query_args( &$query_args ) {}

	/**
	 * Get block attributes.
	 *
	 * @return array
	 */
	protected function get_attributes() {
		return array_merge(
			parent::get_attributes(),
			array(
				'orderby'  => array(
					'type'    => 'string',
					'enum'    => array( 'date', 'popularity', 'price_asc', 'price_desc', 'rating', 'title' ),
					'default' => 'date',
				),
				'editMode' => array(
					'type'    => 'boolean',
					'default' => true,
				),
			)
		);
	}
}