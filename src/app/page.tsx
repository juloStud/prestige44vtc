'use client';

import Header from "./components/header";
import Infos from "./pages/infos";
import Prestations from "./pages/prestations";
import FormulaireDevis from "./pages/formulaire-devis";
import Contact from "./pages/contact";

export default function Home() {

    return (
        <div>
            {Header()}
            {Infos()}
            <hr />
            {Prestations()}
            <hr />
            {FormulaireDevis()}
            <hr />
            {Contact()}
        </div>
    );
}
