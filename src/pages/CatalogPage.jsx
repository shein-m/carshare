import Card from "../components/Card/Card";
import { useGetCarsQuery } from "../redux/cars/cars-slice";
// import data from "../bd.json";

const CatalogPage = () => {
  const { data } = useGetCarsQuery();
  return (
    <>
      <ul className="list-none flex flex-wrap gap-x-[30px] gap-y-[50px]">
        {data && data.map((el) => <Card key={el.id} data={el} />)}
      </ul>
    </>
  );
};

export default CatalogPage;
