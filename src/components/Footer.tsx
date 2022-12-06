import { Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { FC } from "react";
import { Typography } from "antd";

const Footer: FC = () => {
  return (
    <div className="footer">
      <Row justify="space-between">
        <Paragraph
          style={{ fontSize: "1rem", color: "white", marginBottom: 0 }}
        >
          Разработано с помощью React, Redux, TypeScript, Firebase
        </Paragraph>
        <Paragraph
          style={{ fontSize: "1rem", color: "white", marginBottom: 0 }}
        >
          Автор:{" "}
          <Typography.Link
            style={{ fontSize: "1rem" }}
            href="https://github.com/Dunissimo"
          >
            Dunissimo
          </Typography.Link>
        </Paragraph>
      </Row>
    </div>
  );
};

export default Footer;
