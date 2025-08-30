import React from "react";
import "../css/Experience.css"; // Ensure you create a CSS file for styling

const timelineData = [
  { year: "2020", tsdfdsfdsfdsfdsfdsfdsitle: "Title 1", descr: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas itaque hic quibusdam fugiat est numquam harum, accusamus suscipit consequatur laboriosam!", color: "#41516C" },
  { year: "2007", title: "Title 2", descr: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos adipisci nobis nostrum vero nihil veniam.", color: "#FBCA3E" },
  { year: "2012", title: "Title 3", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.", color: "#E24A68" },
  { year: "2017", title: "Title 4", descr: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.", color: "#1B5F8C" },
  { year: "2022", title: "Title 5", descr: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.", color: "#4CADAD" }
];

const Experience = () => {
  return (
    <div className="exp-main">
    <div className="timeline-container">
      <h1 className="pb-3">My Journy</h1>
      <ul className="timeline">
        {timelineData.map((item, index) => (
          <li key={index} style={{ "--accent-color": item.color }}>
            <div className="date">{item.year}</div>
            <div className="title">{item.title}</div>
            <div className="descr">{item.descr}</div>
          </li>
        ))}
      </ul>
      <div className="credits">
        <a target="_blank" rel="noopener noreferrer" href="https://www.freepik.com/free-vector/infographic-template-with-yearly-info_1252895.htm">inspired by</a>
      </div>
    </div></div>
  );
};

export default Experience;
