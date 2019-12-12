import React,{FC} from "react";
import {experienceList} from "../assets/content";

interface IProps {
    title:string;
}

export const Experience:FC<IProps> = (props) => {
    return <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
        <div className="w-100">
            <h2 className="mb-5">{props.title}</h2>

            {experienceList.map((item)=>
                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" key={item.id}>
                    <div className="resume-content">
                        <h6 className="sub-title">{item.subTitle}</h6>
                        <h4 className="mb-4">{item.jobTitle} at {item.company}</h4>
                        <ul>
                            {item.role.map((i)=>
                            <li>{i}</li>
                            )}
                        </ul>
                    </div>
                    <div className="resume-date text-md-right">
                        <p><i className="far fa-calendar-alt pr-2"></i> {item.startDate} - {item.endDate}</p>
                    </div>
                </div>
            )}


        </div>
    </section>
}