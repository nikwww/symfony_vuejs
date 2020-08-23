<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use App\Entity\Image;
use App\Entity\Product;
use Faker\Factory;

class ImageFixtures extends Fixture implements DependentFixtureInterface
{

    private static $images = [
        '/images/red.png',
        '/images/green.png',
        '/images/blue.png',
    ];

    public function getDependencies()
    {
        return [
            ProductFixtures::class,
        ];
    }

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create();

        for ($i = 0; $i < ProductFixtures::CNT; $i++) {
            /** @var Product $product */
            $product = $this->getReference('product' . $i);
            if (!$product) {
                continue;
            }

            $image = new Image();
            $image->setSrc($faker->randomElement(self::$images));
            $image->setProduct($product);
            $manager->persist($image);
        }

        $manager->flush();
    }

}
