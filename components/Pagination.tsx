"use client";

import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import Container from "./Container";

const Pagination = () => {
  return (
    <Container className="!p-0 grid grid-cols-5 gap-4 justify-between">
      <Button className="font-bold">
        <ChevronsLeftIcon />
      </Button>
      <Button className="font-bold">
        <ChevronLeftIcon />
      </Button>
      <p className="flex items-center justify-center font-bold">10 / 12</p>
      <Button className="font-bold">
        <ChevronRightIcon />
      </Button>
      <Button className="font-bold">
        <ChevronsRightIcon />
      </Button>
    </Container>
  );
};

export default Pagination;
