import CardList from "@/components/card/CardList";
import Container from "@/components/Container"
import Customer from "@/components/customers/Customer";
import FilterSortButtons from "@/components/FilterSortButtons";
import Pagination from "@/components/Pagination";

const page = () => {
    return (
        <Container scroll className="space-y-4">
            <Pagination />
            <FilterSortButtons />
            <CardList>
                <Customer />
                <Customer />
                <Customer />
                <Customer />
                <Customer />
            </CardList>
        </Container>
    )
}

export default page;