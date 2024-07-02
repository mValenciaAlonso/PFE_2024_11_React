/* import cores */
import react ,{usestate} from 'react'
import {Badge} from "reactstrap";

/*componente : view */
function ColorFavoritoFragment({ color, datos }) {
    return (
        <>
            <h1>

                    Color Favorito <Badge>{color}</Badge>

            </h1>
        </>
    )

}

/* Exportar */
export default ColorFavoritoFragment;