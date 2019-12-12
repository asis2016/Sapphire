import React, {FC} from "react"
import {educationList} from "../assets/content";

interface IProps {
    title: string;
    subTitle: string;
};

export const Education: FC<IProps> = (props) => {
    return <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div className="w-100">
            <div className="sub-title mb-3">{props.subTitle}</div>
            <h2 className="mb-5">{props.title}</h2>
            {educationList.map((item) =>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" key={item.id}>
                    <div className="resume-content">
                        <h3 className="mb-0">{item.university}</h3>
                        <div className="subheading mb-3">{item.degree}</div>
                        <div>Computer Science - Web Development Track</div>
                        <p>GPA: {item.gpa}</p>
                    </div>
                    <div className="resume-date text-md-right">
                        <p><i className="far fa-calendar-alt pr-2"></i> {item.startDate} - {item.endDate}</p>
                    </div>
                </div>
            )}
        </div>
    </section>
};