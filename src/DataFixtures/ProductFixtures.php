<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;
use Faker\Factory;

class ProductFixtures extends Fixture
{
    
    const CNT = 10000;

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        for ($i = 0; $i < ProductFixtures::CNT; $i++) {
            $product = new Product();
            $product->setName($faker->name);
            $product->setPrice($faker->numberBetween(10, 100) / 10);
            $manager->persist($product);
            
            $this->setReference('product' . $i, $product);
        }

        $manager->flush();
    }

}
