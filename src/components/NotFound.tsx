import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { FC } from "react";

const NotFound: FC = () => {
  return (
    <div
      className="not-found"
      style={{ textAlign: "center", margin: "3rem 0" }}
    >
      <Title>Страница не найдена!</Title>
      <Paragraph style={{ fontSize: "2rem" }}>
        Скорее всего она находится в разработке
      </Paragraph>
    </div>
  );
};

export default NotFound;
