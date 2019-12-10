import React, {FC} from "react";


interface IProps {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    description: string;
    content?: Array<any>;
};

export const About: FC<IProps> = (props: any) => {
    return <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
        <div className="w-100">
            <h1 className="mb-0">
                {props.firstName}
                <span className="text-primary">
                    {props.lastName}
                </span>
            </h1>
            <div className="subheading mb-5">
                {props.address}
                &nbsp;&nbsp;<a href={`mailto:` + props.email}>
                    {props.email}
                </a>
            </div>
            <p className="lead mb-5">
                {props.description}
            </p>
            <div className="social-icons">
                {props.content.map((item: any) =>
                    <a href="#" key={item.id}>
                        <i className={`fab ` + item.faIcon}></i>
                    </a>
                )}
            </div>
        </div>
    </section>
}