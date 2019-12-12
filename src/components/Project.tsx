import React, {FC} from "react";
import {Card, Col, Row} from "react-bootstrap";
import {ProjectBase} from "./Project.style";
import {projectList} from "../assets/content";

interface IProps {
    title: string;
    subTitle: string;
};

export const Project: FC<IProps> = (props) => {
    return <ProjectBase>
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div className="w-100">
                <div className="sub-title mb-3">{props.subTitle}</div>
                <h2 className="mb-5">{props.title}</h2>

                <Row>
                    {projectList.map((item) => <Col md={3} style={{margin: '10px'}}>
                            <Card>
                                <Card.Img variant="top" src={require('../assets/images/' + item.img)}/>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.content}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        </section>
    </ProjectBase>
};