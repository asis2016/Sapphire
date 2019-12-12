import React, {FC} from "react"

interface IProps {
    title: string;
    subTitle: string;
};

const educationList = [
    {id: 0, university: 'University of California', startDate: 'March 2007', endDate: 'April 2009', gpa: 2.2, degree: 'Bachelors of Web Development'},
    {id: 1, university: 'University of Berlin', startDate: 'July 2009', endDate: 'Jan 2013', gpa: 2, degree: 'Masters of Design and Mass Communication'},
    {id: 2, university: 'T.U. University', startDate: 'Jan 2015', endDate: 'Jan 2017', gpa: 1.3, degree: 'MSc. Digital Media and Data Science'}
]

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
                        <span className="text-primary">{item.startDate} - {item.endDate}</span>
                    </div>
                </div>
            )}
        </div>
    </section>
}