<?php
namespace Netsolution\Decimalfactor\Model\ResourceModel\Post;

use \Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection;

class Collection extends AbstractCollection
{
	protected $_idFieldName = 'id';
	protected $_eventPrefix = 'netsolution_decimalfactor_decimalfactor_collection';
	protected $_eventObject = 'decimalfactor_collection';

	/**
	 * Define resource model
	 *
	 * @return void
	 */
	protected function _construct() {
		$this->_init('Netsolution\Decimalfactor\Model\Decimalfactor', 'Netsolution\Decimalfactor\Model\ResourceModel\Decimalfactor');
	}
}