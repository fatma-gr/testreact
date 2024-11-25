import {plates} from "./data3";

export default function platefl(){
    return(
        plates.filter(function(plate){
            return plate.ingredient1=="Eggs"|| plate.ingredient2=="Eggs"|| plate.ingredient3=="Eggs"
        }).map(function(plate){
            return(
                <>
                <p>
                    {plate.plateName}
                </p>
                </>
            )
        })
    )
}