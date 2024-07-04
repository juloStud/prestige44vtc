'use client';

import Header from "./components/header";
import Infos from "./pages/infos";
import Prestations from "./pages/prestations";
import FormulaireDevis from "./pages/formulaire-devis";
import Footer from "./components/footer";
import Vehicules from "./pages/vehicules";

export default function Home() {

    return (
        <div>
            {Header()}
            {Infos()}
            {Vehicules()}
            {Prestations()}
            {FormulaireDevis()}
            {Footer()}
        </div>
    );
}
