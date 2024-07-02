import ChoiceButton from "../components/choice-button";
import {Villes} from "../model/villes"; 

export default function Prestations() {
    const options = Object.keys(Villes);
    return (
        <div id="Prestations" className="container my-5">
            <ChoiceButton options={options}></ChoiceButton>
        </div>
    );
}