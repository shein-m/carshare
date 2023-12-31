import { useSelector } from "react-redux";
import { Container } from "../components/Container/Container";
import { getFavorites } from "../redux/favorites/favorites-selector";
import Card from "../components/Card/Card";

const FavoritePage = () => {
  const data = useSelector(getFavorites);

  return (
    <Container>
      <ul className="list-none flex flex-wrap justify-center md:justify-between xl:justify-normal gap-x-[30px] gap-y-[50px] ">
        {data.length > 0 ? (
          data
            .slice()
            .reverse()
            .map((el) => <Card key={el.id} data={el} />)
        ) : (
          <div>Favorites is Empty</div>
        )}
      </ul>
    </Container>
  );
};

export default FavoritePage;
