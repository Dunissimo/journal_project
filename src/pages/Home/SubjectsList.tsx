import { FC, useEffect } from "react";
import { getSubjects } from "../../api/requests";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Subject from "./Subject";
import { Row } from "antd";

const SubjectsList: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getSubjects(dispatch);
    // eslint-disable-next-line
  }, []);

  const { list } = useAppSelector((state) => state.subjects);

  return (
    <div className="subjects-list" style={{ width: "100%" }}>
      <Row gutter={[16, 24]}>
        {list.map((sb, i) => (
          <Subject sb={sb} key={i} />
        ))}
      </Row>
    </div>
  );
};

export default SubjectsList;
