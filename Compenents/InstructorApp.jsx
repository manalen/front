import React, { Component } from 'react';

import ListePatient from './ListePatient'
import ListePatientothmane from './ListePatientothmane'
import AfficherPatient1 from'./AfficherPatient1'
import Ajouterconsu from './Ajouterconsu'
import Formulaire from './Formulaire'
import Authentification from './Authentification'
import Medecin from './Medecin'
import Acceuil from './Acceuil'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function ErrorComponent() {
    return <div>Erreur, le lien entré n'est pas disponible!</div>
}
class InstructorApp extends Component {
    
    render() {
        return (
            <Router>
            <>
                <Switch>
                    <Route path="/start" exact component={Acceuil} />  
                    <Route path="/login" exact component={Authentification} />
                    <Route path="/" exact component={ListePatient} />
                    <Route path="/aa" exact component={ListePatientothmane} />
                    <Route path="/patients/:id" component={AfficherPatient1} /> 
                    <Route path="/ajouter" component={Formulaire}/>
                    <Route path="/medecin" component={Medecin}/>
                    <Route path="" component={ErrorComponent}/>
                    
                    
                </Switch>
            </>
        </Router>
        )
    }
}

export default InstructorApp