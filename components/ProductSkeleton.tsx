"use client";

import Card from "./card/Card";
import CardContent from "./card/CardContent";
import Container from "./Container";
import { Skeleton } from "./ui/skeleton";

const ProductSkeleton = () => {
  return (
    <Card>
      <CardContent className="flex items-center gap-4">
        <Container className="!p-0 min-w-fit">
          <Skeleton className="bg-neutral-300 w-20 aspect-square rounded-full" />
        </Container>
        <Container className="space-y-4 w-full !p-0">
          <Skeleton className="bg-neutral-300 w-full h-4 rounded-full" />
          <Skeleton className="bg-neutral-300 w-[80%] h-4 rounded-full" />
          <Skeleton className="bg-neutral-300 w-[60%] h-4 rounded-full" />
        </Container>
      </CardContent>
    </Card>
  );
};

export default ProductSkeleton;
