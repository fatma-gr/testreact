import { plates } from "./data3";

export default function platesf(){
    return(
        plates.map(function(plate){
            return(
                <>
                <p>{plate.plateName}</p>
                </>
            )
        })
    )
}