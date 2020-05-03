import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ListePatient from './ListePatient'
import u136 from'./u136.png'
import u132 from'./u132.png'
import u26 from'./u26.svg'
import ListePatientothmane from './ListePatientothmane';


class Medecin extends Component{
    constructor(props){
        super(props)
        this.state={
            listecomplete: true
        }
        //this.listecourte=this.listecourte.bind(this)
    }
    disconnexion(){
        this.props.history.push(`/login`)
    }
    /*listecourte(){
        this.setState(
            {
            listecomplete: false
            }
        )
    }*/
    
    render(){
        return(
            <div>
                <div className="container-fluid cadre" style={{borderRadius: "10px",width: "450px",height:"170px",position: "absolute", left:"40px",top: "70px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"15px"}}>Recherche par nom</label>
                        <input className="form-control" type="text" name="nom" style={{width:"150px",position:"absolute",left:"160px",top:"12px",fontSize:"14px"}}/>
                        <button className="btn btn-success" style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"348px",top:"12px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"65px"}}>Recherche par numéro</label>
                        <input className="form-control" type="text" name="nom" style={{width:"150px",position:"absolute",left:"160px",top:"62px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={this.listecourte} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"348px",top:"62px",fontSize:"12px"}}>Recherche</button>
                    </div>
                    <div className="form-group">
                        <label style={{position:"absolute",left:"10px",top:"115px"}}>Recherche par CIN</label>
                        <input className="form-control" type="text" name="nom" style={{width:"150px",position:"absolute",left:"160px",top:"115px",fontSize:"14px"}}/>
                        <button className="btn btn-success" onClick={this.listecourte} style={{backgroundColor:"#435fbc", borderColor:"#435fbc",width:"75px",position:"absolute",left:"348px",top:"112px",fontSize:"12px"}}>Recherche</button>
                    </div>
                </div>
                <ListePatient/>
                
                <div className="onglets" style={{borderRadius: "10px",width: "700px",height:"480px",position: "absolute", left:"540px",top: "110px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <Tabs defaultActiveKey="infosperso" id="uncontrolled-tab-example">

                        <Tab eventKey="infosperso" title="Informations personnelles">
                            <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>Nom</th>
                                            <th>Prénom</th>
                                            <th>CIN</th>
                                            <th>Adresse</th>
                                            <th>Situation matrimoniale</th>
                                            <th>Origine</th>
                                            <th>Age</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>

                        </Tab>

                        <Tab eventKey="consults" title="Consultations">
                            <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>Numéro de consultation</th>
                                            <th>Médecin traitant</th>
                                            <th>Spécialité médicale</th>
                                            <th>Date de consultation</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </Tab>


                        <Tab eventKey="pres" title="Prescriptions">
                            <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>Médicament prescrit</th>
                                            <th>Date de début du traitement</th>
                                            <th>Date de fin du traitement</th>
                                            <th>Motif de prescription</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </Tab>


                        <Tab eventKey="analyses" title="Analyses">
                            <div style={{borderRadius: "10px",width: "550px",position: "absolute", left:"73px",top: "80px",fontSize:"14px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                                <table className="table" >
                                    <thead>
                                        <tr>
                                            <th>Taux de glycémie</th>
                                            <th>Tension artérielle</th>
                                            <th>Taux de Cholestérol</th>
                                            <th>Taux de Triglycérides</th>
                                            <th>Taux de Transaminases</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </Tab>
                    </Tabs>
               </div>


                <div id="u129_state0_content" className="panel_state_content">
                    <div id="u130" className="ax_default box_2">
                        <div id="u130_div" className=""></div>
                        <div id="u130_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>
                    <div id="u131" className="ax_default link_button">
                        <div id="u131_div" className=""></div>
                        <div id="u131_text" className="text ">
                            <p><span><a href="#u0">Contact</a></span></p>
                        </div>
                    </div>
                    <div id="u132" className="ax_default image">
                        <img id="u132_img" className="img " src={u132}/>
                        <div id="u132_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>
                    <div id="u133" className="ax_default link_button">
                        <div id="u133_div" className=""></div>
                        <div id="u133_text" className="text ">
                            <p><span><a href="#u115">Présentation</a></span></p>
                        </div>
                    </div>
                    <div id="u134" className="ax_default link_button">
                        <div id="u134_div" className=""></div>
                        <div id="u134_text" className="text ">
                            <p><span><a href="#u13">Equipe</a></span></p>
                        </div>
                    </div>
                    <div id="u135" className="ax_default link_button ax_default_hidden" >
                        <div id="u135_div" className=""></div>
                        <button id="u135_text" className="btn btn-success text " onClick={() => this.disconnexion() } style={{backgroundColor:"#D7D7D7",font:"arial",fontSize:"22px",color:"#4997D4"}}>Se déconnecter</button>
                    </div>
                    <div id="u136" className="ax_default image">
                        <img id="u136_img" className="img " src={u136}/>
                        <div id="u136_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>
                    <div id="u137" className="ax_default link_button">
                        <div id="u137_div" className=""></div>
                        <div id="u137_text" className="text ">
                            <p><span><a href="#u97">Spécialités</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }  
}
/*function listPatients(props){
    if (props.listecomplete){return <ListePatient/>}
    else {return<ListePatientothmane/>}
    }*/
    
export default Medecin                                       