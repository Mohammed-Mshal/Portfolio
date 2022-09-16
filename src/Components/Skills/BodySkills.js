import React from "react";
import Skill from "./Skill";
// import { MdDesignServices } from "react-icons/md";

function BodySkills(props) {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      {props.skill.length > 0
        ? props.skill.map((e,i) => {
            return (
              <Skill
                key={i}
                textTheme={props.textTheme}
                iconSkill={e.iconSkill}
                titleSkill={e.titleSkill}
                yearOfSkill={e.yearOfSkill}
                listOfSkills={e.listOfSkills}
              />
            );
          })
        : `No Skills To Preview`}
    </div>
  );
}

export default BodySkills;
