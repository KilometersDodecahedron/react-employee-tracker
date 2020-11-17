import React from "react";
import Container from "./Container";
import Row from "./Row";

function EmployeeCard(props){
    return(
        <div>
            {props.employees.map(data => (
                <div key={Math.random()}>
                    <Container>
                            <Row>
                                <div className="col-4">
                                    <img src={data.picture.medium}/>
                                </div>
                                <div className="col-4">
                                    <Row>{data.name.first}</Row>
                                    <Row>{data.name.last}</Row>
                                </div>
                            </Row>
                        ---------------------------------
                    </Container>
                </div>
            ))}
        </div>
    )
}

export default EmployeeCard;