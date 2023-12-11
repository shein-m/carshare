import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex items-center gap-[30px] py-[25px]">
          <div className="text-neutral-900 text-lg font-medium">Carshare</div>
          <nav>
            <ul className="flex gap-[30px]">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/catalog">Catalog</NavLink>
              </li>
              <li>
                <NavLink to="/favorites">Favorites</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
