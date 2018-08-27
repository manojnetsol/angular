<?php

namespace Netsolution\Decimalfactor\Observer;

use Magento\Framework\Event\ObserverInterface;
use Magento\Framework\App\RequestInterface;
use Magento\Framework\Event\Observer;
use Netsolution\Decimalfactor\Helper\Data;

class Updatedecfactordata implements ObserverInterface
{
    public function __construct(\Psr\Log\LoggerInterface $logger , \Netsolution\Decimalfactor\Helper\Data $data) {
        $this->logger = $logger;
        $this->helper = $data;
    }

    /**
	 * calculate value based on decimal factor
	 *
	 * @return void
	 */
    public function execute(Observer $observer) {
        if($this->helper->moduleStatus()) {
            $order = $observer->getEvent()->getOrder();
            $orderData = $order->getData();
            $this->logger->info($orderData['increment_id']);   
        }  
    }
}