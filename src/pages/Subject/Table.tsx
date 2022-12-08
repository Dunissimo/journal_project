import { Row } from "antd";
import { FC, Fragment, useEffect } from "react";
import { getUsers } from "../../api/requests";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";

const Table: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUsers(dispatch);
    // eslint-disable-next-line
  }, []);

  const { list } = useAppSelector((state) => state.users);

  const renderNumbers = () => {
    const arr = [];
    for (let i = 0; i < 20; i++) {
      if (i < 9) {
        arr.push(`0${i + 1}`);
      } else {
        arr.push(i + 1);
      }
    }
    return arr;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th rowSpan={2} style={{ textAlign: "left" }}>
            Студенты
          </th>
          <th colSpan={renderNumbers().length}>Число</th>
        </tr>
        <tr>
          {renderNumbers().map((i) => (
            <th>{i}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {list.map((std, i, arr) => {
          return (
            <tr>
              <td style={{ textAlign: "left" }}>{std.displayName}</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
              <td>5</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
