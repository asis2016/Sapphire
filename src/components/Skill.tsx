import React, {FC} from "react";
import {skillList} from "../assets/content";

interface IProps {
    title: string;
    subTitle: string;
    skill?: Array<any>;
}

export const Skill: FC<IProps> = (props) => {
    return <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div className="w-100">
            <div className="sub-title mb-3">{props.subTitle}</div>
            <h2 className="mb-5">{props.title}</h2>
            <ul className="list-inline dev-icons">
                {skillList.map((item) =>
                    <>
                        {item.list.map((i) =>
                            <li className="list-inline-item">
                                <i className={`fab ` + i.faIcon}></i>
                            </li>
                        )}
                    </>
                )}
            </ul>

            <div className="subheading mb-3">Description:</div>
            <ul className="fa-ul mb-0">
                {skillList.map((item) =>
                    <>
                        {item.description.map((i) =>
                            <li>
                                <i className={i.faIcon}></i>
                                &nbsp;&nbsp;{i.title}.
                            </li>
                        )}
                    </>
                )}
            </ul>
        </div>
    </section>
}