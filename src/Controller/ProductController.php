<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Entity\Product;

class ProductController extends AbstractController
{
    /**
     * @Route("/api/products/rand", name="api_product_rand", methods={"GET"})
     * @return Response
     */
    public function rand()
    {
        $response = new Response();
        
        $product = $this->getDoctrine()
                ->getRepository(Product::class)
                ->findOneRand();
        
        $response->setContent($this->container->get('serializer')->serialize([$product], 'json'));
        $response->headers->set('Content-Type', 'application/json');
        
        return $response;
    }
}