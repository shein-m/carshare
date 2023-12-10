import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card";
import { Container } from "../components/Container/Container";
import { useEffect } from "react";
import { getCars } from "../redux/cars/cars-operations";
import { getCarsSelector, getPage } from "../redux/cars/cars-selectors";
import { carSlice } from "../redux/cars/cars-slice";
// import data from "../bd.json";

const CatalogPage = () => {
  const cars = useSelector(getCarsSelector);
  const page = useSelector(getPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars({ page, limit: 12 }));
  }, [dispatch, page]);

  useEffect(() => {
    return () => {
      dispatch(carSlice.actions.resetCars());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(carSlice.actions.setPage());
  };

  return (
    <Container>
      <ul className="list-none flex flex-wrap justify-center md:justify-between xl:justify-normal gap-x-[30px] gap-y-[50px] ">
        {cars && cars.map((el) => <Card key={el.id} data={el} />)}
      </ul>

      <button type="button" onClick={handleLoadMore}>
        Load More
      </button>
    </Container>
  );
};

export default CatalogPage;
