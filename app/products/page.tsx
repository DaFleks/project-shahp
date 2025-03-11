import CardList from "@/components/card/CardList";
import Container from "@/components/Container"
import FilterSortButtons from "@/components/FilterSortButtons";
import Pagination from "@/components/Pagination";
import Product from "@/components/products/Product";

const page = () => {
    return (
        <Container scroll className="space-y-4">
            <Pagination />
            <FilterSortButtons />
            <CardList>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </CardList>
        </Container>
    )
}

export default page;