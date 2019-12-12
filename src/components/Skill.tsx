import React, {FC} from "react";
import {skillList} from "../assets/content";
import {SkillBase} from "./Skill.style";

interface IProps {
    title: string;
    subTitle: string;
    skill?: Array<any>;
}

export const Skill: FC<IProps> = (props) => {
    return <SkillBase>
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div className="w-100">
                <div className="sub-title mb-3">{props.subTitle}</div>
                <h2 className="mb-5">{props.title}</h2>

                <form>
                    {skillList.map((item) =>
                        <>
                            {item.list.map((i) =>
                                <div className="form-group row">
                                    <div className="col-sm-2">
                                        <label htmlFor="#">
                                            <i className={`fab ` + i.faIcon}></i> <span
                                            className="pl-2">{i.title}</span>
                                        </label>
                                    </div>
                                    <div className="col-sm-10">
                                        <div className="progress">
                                            <div className="progress-bar"
                                                 role="progressbar"
                                                 style={{width: i.percent}}
                                                 aria-valuemin={0}
                                                 aria-valuemax={100}>
                                                {i.percent}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </form>
            </div>
        </section>
    </SkillBase>
};