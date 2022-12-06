import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSubject } from "../../api/requests";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const Subject: FC = () => {
  const { name } = useParams();
  const dispatch = useAppDispatch();

  console.log(name);

  useEffect(() => {
    getSubject(dispatch, name);
  }, []);

  const { currentSb } = useAppSelector((state) => state.subjects);

  return (
    <div>
      <h1>{currentSb.name}</h1>
    </div>
  );
};

export default Subject;
