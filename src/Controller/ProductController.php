<?php

namespace App\Controller;

use App\Entity\Comment;
use App\Entity\Product;
use App\Form\CommentType;
use App\Form\ProductType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductController extends AbstractController
{
    /**
     * @Route("/product/{id}", name="show_product")
     * @param Product $product
     * @return Response
     */
    public function show(Product $product): Response
    {
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        return $this->renderForm('product/show.html.twig', ['product'=>$product, 'form'=>$form]);
    }

    /**
     * @Route("/product/new", name="new_product", priority="2")
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    public function new(Request $request, EntityManagerInterface $manager): Response
    {
        $product = new Product();
        $form = $this->createForm(ProductType::class, $product);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            $product->setUser($this->getUser());
            $manager->persist($product);
            $manager->flush();
            $this->addFlash('info', 'your message has been posted');
            return $this->redirectToRoute('app_home');
        }
        return $this->renderForm('product/new.html.twig', ['form'=>$form]);
    }

    public function delete()
    {

    }
}
