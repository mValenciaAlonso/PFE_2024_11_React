/* core:react ,reacstrap */
import React, {useState,} from 'react'
import {Card,CardTitle,CardText,Button,Row,Col} from "reactstrap";

/*view: component*/
function InformacionCalamaFragment(){
    return (
        <>
            <h1>SOY UN PINCHE FRAGMENTO! 💀</h1>
            <Card body>
                <CardTitle tag="h5">
                    Special Title Treatment
                </CardTitle>
                <CardText>
                    With supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>
                    Go somewhere
                </Button>
            </Card>
        </>
    )

}

/*expotrarlo!*/
export default InformacionCalamaFragment;