import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card/Card";
import { Container } from "../components/Container/Container";
import { useEffect } from "react";
import { getCars, getFilterCars } from "../redux/cars/cars-operations";
import {
  getCarsSelector,
  getHideLoadMore,
  getPage,
} from "../redux/cars/cars-selectors";
import { carSlice } from "../redux/cars/cars-slice";
import { toast } from "react-toastify";
import Filter from "../components/Filter/Filter";

const CatalogPage = () => {
  const cars = useSelector(getCarsSelector);
  const hideLoadMore = useSelector(getHideLoadMore);
  const page = useSelector(getPage);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars({ page, limit: 12 }));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(getFilterCars());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      dispatch(carSlice.actions.resetCars());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(carSlice.actions.setPage());
  };

  const handleTosty = () => {
    toast.info(`${cars ? cars.length : 0} cars were shown!`);
    return;
  };

  return (
    <Container>
      <Filter cars={cars} />
      <ul className="list-none flex flex-wrap justify-center md:justify-between xl:justify-normal gap-x-[30px] gap-y-[50px] pb-[100px] ">
        {cars && cars.map((el) => <Card key={el.id} data={el} />)}
      </ul>
      {!hideLoadMore ? (
        <div className="flex justify-center items-center pb-[100px]">
          <button
            className="text-lg text-blue hover:text-blueActive focus:text-blueActive underline"
            type="button"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      ) : (
        handleTosty()
      )}
    </Container>
  );
};

export default CatalogPage;
