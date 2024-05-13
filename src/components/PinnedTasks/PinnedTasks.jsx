import { useState } from "react";
import TaskCard from "../TaskCard/TaskCard";
import styles from "./pinnedtask.module.css";
import show from "../../assets/show.svg";
import hide from "../../assets/hide.svg";
function PinnedTasks({ pinnedTasks, updateTasks }) {
  const [visible, toggleVisibility] = useState(true);
  const visibilityCss = {
    display: visible ? "flex" : "none",
  };
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ fontWeight: "bold", margin: "auto" }}>PINNED TASKS</h1>
        <span
          style={{ float: "right", marginRight: "3rem" }}
          onClick={() => toggleVisibility(!visible)}
        >
          <img src={visible ? hide : show} style={{ cursor: "pointer" }} />
        </span>
      </div>
      <div style={visibilityCss}>
        <div className={styles.pinnedParent}>
          {pinnedTasks.map(({ id, title, description,pinned }) => (
            <TaskCard
              title={title}
              description={description}
              pinned = {pinned}
              id={id}
              key={id}
              updateTasks={updateTasks}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PinnedTasks;
