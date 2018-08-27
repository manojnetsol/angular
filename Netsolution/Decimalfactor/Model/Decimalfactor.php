<?php
namespace Netsolution\Decimalfactor\Model;

use \Magento\Framework\Model\AbstractModel;
use \Magento\Framework\DataObject\IdentityInterface;

class Decimalfactor extends AbstractModel implements IdentityInterface 
{
	const CACHE_TAG = 'netsolution_decimalfactor_decimalfactor';
	protected $_cacheTag = 'netsolution_decimalfactor_decimalfactor';
	protected $_eventPrefix = 'netsolution_decimalfactor_decimalfactor';

    /**
     * @return void
     */
	protected function _construct() {
		$this->_init('Netsolution\Decimalfactor\Model\ResourceModel\Decimalfactor');
	}

	public function getIdentities(){
		return [self::CACHE_TAG . '_' . $this->getId()];
	}

	public function getDefaultValues() {
		$values = [];
		return $values;
	}
}
