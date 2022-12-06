import { Divider } from "antd";
import Title from "antd/es/typography/Title";
import { FC } from "react";

import "./index.css";
import SubjectsList from "./SubjectsList";

const Home: FC = () => {
  return (
    <div className="home">
      <Title>
        Добро пожаловать в электронный журнал группы ИСП-125! (Находится в
        разработке)
      </Title>
      <div className="subjects">
        <Title level={2} style={{ margin: "5rem 0 2.5rem 0" }}>
          <Divider
            orientation="left"
            style={{ fontSize: "3rem", border: "black" }}
          >
            Предметы
          </Divider>
        </Title>
        <SubjectsList />
      </div>
    </div>
  );
};

export default Home;
