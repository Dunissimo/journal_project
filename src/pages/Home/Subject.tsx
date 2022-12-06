import { Col, Card } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ISubject } from "../../utils/interfaces";

interface IProps {
  sb: ISubject;
}

const Subject: FC<IProps> = ({ sb }) => {
  return (
    <Col xs={24} md={12} lg={6}>
      <Link to={`/subjects/${sb.id}`} style={{ textDecoration: "none" }}>
        <Card
          hoverable
          style={{ width: "auto" }}
          cover={
            <img
              alt="example"
              src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png"
              // TODO: change the image
            />
          }
        >
          <p className="subject-link">{sb.name}</p>
        </Card>
      </Link>
    </Col>
  );
};

export default Subject;
