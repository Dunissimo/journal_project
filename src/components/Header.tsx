import { Button } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { pushData } from "../utils/pushData";

const Header: FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={process.env.PUBLIC_URL + "/images/journal.svg"}
          width="75"
          alt="a"
        />
      </Link>
      <Link to="/" className="logo">
        <h1>Электронный журнал</h1>
      </Link>
      {/* <Button onClick={() => pushData()}>push</Button> */}
      {/* TODO: запросы делаются при каждом обновлении страницы, испавить */}
    </div>
  );
};

export default Header;
