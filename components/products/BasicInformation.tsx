"use client";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../ui/carousel";

import Container from "../Container";
import Heading from "../Heading";
import Card from "../card/Card";
import CardContent from "../card/CardContent";

interface BasicInformationProps {
  images: string[];
  name: string;
  sku: string;
  description?: string;
  categories?: string[];
  brands?: string[];
}

const BasicInformation = ({ images, name, sku, description = "", categories = [""], brands = [""] }: BasicInformationProps) => {
  return (
    <Card className="!p-0">
      <CardContent>
        <Carousel className="border-b" opts={{ loop: true }}>
          <CarouselContent>
            {images.map((image: string) => (
              <CarouselItem key={image}>
                <Container className="relative w-full h-[16rem] bg-white rounded-t-xl">
                  <Image src={image} alt={name} className="object-contain p-4" fill />
                </Container>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 ml-8" />
          <CarouselNext className="right-0 mr-8" />
        </Carousel>

        <Container className="space-y-4 text-sm">
          <Heading type="h6" className="font-bold">
            {name}
          </Heading>
          <Container className="!p-0 space-y-2">
            <p>
              <b>SKU:&#160;</b>
              {sku}
            </p>
            <p>
              <b>Description:&#160;</b>
              <br />
              {description}
            </p>
          </Container>

          <Container className="!p-0 space-y-2">
            <p>
              <b>Categories:&#160;</b>
            </p>
            <Container className="!p-0 flex gap-2">
              {categories.map((category: string) => (
                <Badge key={category}>{category}</Badge>
              ))}
            </Container>
          </Container>

          <Container className="!p-0 space-y-2">
            <p>
              <b>Brands:&#160;</b>
            </p>
            <Container className="!p-0 flex gap-2">
              {brands.map((brand: string) => (
                <Badge key={brand}>{brand}</Badge>
              ))}
            </Container>
          </Container>
        </Container>
      </CardContent>
    </Card>
  );
};

export default BasicInformation;
