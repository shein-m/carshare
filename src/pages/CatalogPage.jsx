import Card from "../components/Card/Card";
import { Container } from "../components/Container/Container";
import { useGetCarsQuery } from "../redux/cars/cars-slice";
// import data from "../bd.json";

const CatalogPage = () => {
  const { data } = useGetCarsQuery();
  return (
    <Container>
      <ul className="list-none flex flex-wrap justify-center md:justify-between xl:justify-normal gap-x-[30px] gap-y-[50px] ">
        {data && data.map((el) => <Card key={el.id} data={el} />)}
      </ul>
    </Container>
  );
};

export default CatalogPage;
