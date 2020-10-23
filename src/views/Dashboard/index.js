import React from "react";
import Nav from "../../components/Nav";
import courses from "../../constants/courses.json";

function Dashboard() {
  console.log(courses.length);
  return (
    <React.Fragment>
      <Nav />
      <div className="dashboard container-lg" style={{paddingTop: '150px'}}>
        <h1>課程清單</h1>
        <div className="row row-cols-5">
        {courses.map((course) => (
          <div className="card m-3 col rounded-lg">
            <div className="card-body">
              <p className="card-title">{`${course.no}-${course.classNo}`}</p>
              <h5 className="card-title">{`${course.name}`}</h5>
              {
                course.teachers.map((teacher, index) => {
                  return(
                    <span>{(index === 0 ? "" : "、") + teacher}</span>
                  )
                })
              }
            </div>
          </div>
        ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
