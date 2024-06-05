import { useState, useContext, useEffect } from "react";
import Context from "../../context/Context";

const Rating = ({ odabran }) => {
  const [odabrano, setOdabrano] = useState(1);
  const { editKartica } = useContext(Context);

  useEffect(() => {
    setOdabrano(editKartica.kartica.rating);
  }, [editKartica]);

  const handleChange = (e) => {
    setOdabrano(+e.currentTarget.value);
    odabran(+e.currentTarget.value);
  };

  return (
    <ul className="ocjena">
      <li>
        <label htmlFor="broj1" className="form-control">
          <input
            type="radio"
            name="rating"
            id="broj1"
            value="1"
            onChange={handleChange}
            checked={odabrano === 1}
          />
          1
        </label>
      </li>
      <li>
        <label htmlFor="broj2" className="form-control">
          <input
            type="radio"
            name="rating"
            id="broj2"
            value="2"
            onChange={handleChange}
            checked={odabrano === 2}
          />
          2
        </label>
      </li>
      <li>
        <label htmlFor="broj3" className="form-control">
          <input
            type="radio"
            name="rating"
            id="broj3"
            value="3"
            onChange={handleChange}
            checked={odabrano === 3}
          />
          3
        </label>
      </li>
      <li>
        <label htmlFor="broj4" className="form-control">
          <input
            type="radio"
            name="rating"
            id="broj4"
            value="4"
            onChange={handleChange}
            checked={odabrano === 4}
          />
          4
        </label>
      </li>
      <li>
        <label htmlFor="broj5" className="form-control">
          <input
            type="radio"
            name="rating"
            id="broj5"
            value="5"
            onChange={handleChange}
            checked={odabrano === 5}
          />
          5
        </label>
      </li>
    </ul>
  );
};

export default Rating;
