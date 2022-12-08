import Title from "antd/es/typography/Title";
import Text from "antd/es/typography";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSubject } from "../../api/requests";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { Divider, Radio, Row } from "antd";
import Table from "./Table";

import "./index.css";

const Subject: FC = () => {
  const [month, setMonth] = useState("Сентябрь");
  const { name } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    getSubject(dispatch, name);
    // eslint-disable-next-line
  }, []);

  const { currentSb } = useAppSelector((state) => state.subjects);

  return (
    <div className="subject">
      <Row align="bottom" style={{ marginBottom: "1rem" }}>
        <Title level={2} style={{ margin: 0, marginRight: "1rem" }}>
          Предмет:
        </Title>
        <Text style={{ fontSize: "1rem", textTransform: "uppercase" }}>
          {currentSb.name}
        </Text>
      </Row>
      <Row align="bottom">
        <Title level={2} style={{ margin: 0, marginRight: "1rem" }}>
          Месяц:
        </Title>
        <Text>
          <Radio.Group value={month} onChange={(e) => setMonth(e.target.value)}>
            <Radio.Button value="Сентябрь">Сентябрь</Radio.Button>
            <Radio.Button value="Октябрь">Октябрь</Radio.Button>
            <Radio.Button value="Ноябрь">Ноябрь</Radio.Button>
            <Radio.Button value="Декабрь">Декабрь</Radio.Button>
          </Radio.Group>
        </Text>
      </Row>
      <Divider />
      <Table />
    </div>
  );
};

export default Subject;
