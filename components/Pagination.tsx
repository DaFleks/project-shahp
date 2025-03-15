"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ChevronLeftIcon, ChevronRightIcon, ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import { Button } from "./ui/button";
import Container from "./Container";

interface PaginationProps {
  currentPage: string;
  totalPages: string;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { replace } = router;
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const handleFirstPage = () => {
    if (parseInt(currentPage) !== 1) {
      params.set("p", "1");
      window.scrollTo({ top: 0, behavior: "smooth" });
      replace(`${pathname}?${params}`);
    }
  };

  const handlePreviousPage = () => {
    if (parseInt(currentPage) !== 1) {
      params.set("p", (parseInt(currentPage) - 1).toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
      replace(`${pathname}?${params}`);
    }
  };

  const handleNextPage = () => {
    if (parseInt(currentPage) < parseInt(totalPages)) {
      params.set("p", (parseInt(currentPage) + 1).toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
      replace(`${pathname}?${params}`);
    }
  };

  const handleLastPage = () => {
    if (parseInt(currentPage) !== parseInt(totalPages)) {
      params.set("p", totalPages.toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
      replace(`${pathname}?${params}`);
    }
  };

  return (
    <Container className="!p-0 grid grid-cols-5 gap-4 justify-between">
      <Button className="font-bold" onClick={handleFirstPage}>
        <ChevronsLeftIcon />
      </Button>
      <Button className="font-bold" onClick={handlePreviousPage}>
        <ChevronLeftIcon />
      </Button>
      <p className="flex items-center justify-center font-bold">
        {currentPage} / {totalPages}
      </p>
      <Button className="font-bold" onClick={handleNextPage}>
        <ChevronRightIcon />
      </Button>
      <Button className="font-bold" onClick={handleLastPage}>
        <ChevronsRightIcon />
      </Button>
    </Container>
  );
};

export default Pagination;
