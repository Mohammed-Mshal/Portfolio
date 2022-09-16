import React from "react";
import InfoEx from "./InfoEx";

function ViewMenu(props) {
  const ed =
    props.Eduction.length > 0
      ? props.Eduction.map((e, i) => {
          return (
            <li
              className="d-flex justify-content-center align-items-start"
              key={i}
            >
              <span
                className="rounded-pill p-2 d-inline-block"
                style={{ backgroundColor: `#685bcd` }}
              ></span>
              <InfoEx title={e.title} address={e.address} date={e.date} />
            </li>
          );
        })
      : `No Eduction To Preview`;
  const wo =
    props.Work.length > 0
      ? props.Eduction.map((e, i) => {
          return (
            <li
              className="d-flex justify-content-center align-items-start"
              key={i}
            >
              <span
                className="rounded-pill p-2 d-inline-block"
                style={{ backgroundColor: `#685bcd` }}
              ></span>
              <InfoEx title={e.title} address={e.address} date={e.date} />
            </li>
          );
        })
      : `No Works In Company To Preview Yet`;
  return (
    <div className={`view_menu text-center`}>
      <ul
        className={`${
          props.menuShow === `Eduction` ? `show my-5` : undefined
        } list-unstyled  d-flex flex-column justify-content-between align-items-center `}
      >
        {ed}
      </ul>
      <ul
        className={`${
          props.menuShow === `Work` ? `show my-5` : undefined
        } list-unstyled  d-flex flex-column justify-content-between align-items-center `}
      >
        {wo}
      </ul>
    </div>
  );
}

export default ViewMenu;
