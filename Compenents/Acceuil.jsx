import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PatientService from './PatientService';
import './styles.css'
import './styles2.css'
import u136 from'./u136.png'
import u132 from'./u132.png'
import u122 from './u122.jpg'
import u123 from './u123.jpg'
import u124 from './u124.jpg'
import u125 from './u125.jpg'
import u98 from './u98.jpg'
import u99 from './u99.jpg'
import u100 from './u100.jpg'
import u101 from './u101.jpg'
import u126 from './u126.svg'
import u127 from './u127.svg'
import u102 from './u102.svg'
import u103 from './u103.svg'
import u104 from './u104.svg'
import u105 from './u105.svg'
import u107 from './u107.jpg'
import u110 from './u110.svg'
import u108 from './u108.svg'
import u109 from './u109.jpg'
import u113 from './u113.jpg'
import u111 from './u111.jpg'
import u112 from './u112.svg'
import u114 from './u114.svg'
import u35 from './u35.svg'
import u3 from './u3.png'
import u4 from './u4.svg'
import u5 from './u5.svg'
import u7 from './u7.png'
import u8 from './u8.svg'
import u9 from './u9.png'
import u10 from './u10.png'
import u11 from './u11.png'
import u12 from './u12.png'
import amine_u15 from './amine_u15.svg'
import amine_img_u16 from './amine_img_u16.jpg'
import manal_img_u21 from './manal_img_u21.png'
import othmane_img_u26 from './othmane_img_u26.jpg'
import hanae_img_u31 from './hanae_img_u31.jpg'
import link_u116 from './link_u116.svg'
class Acceuil extends Component{
    connexion(){
       
        this.props.history.push(`/login`)
    }
    render(){
        return(
            <div>
                <head>
                    <title>Acceuil</title>
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
                    <link href="resources/css/axure_rp_page.css" type="text/css" rel="stylesheet"/>
                    <link href="data/styles.css" type="text/css" rel="stylesheet"/>
                    <link href="files/acceuil/styles.css" type="text/css" rel="stylesheet"/>
                    <link rel="stylesheet" href="css/bootstrap.min.css"></link>
                </head>
                <body>
                <div id="u0" className="ax_default" data-label="Contact" data-left="-58" data-top="2918" data-width="1289" data-height="444">
                    <div id="u1" className="ax_default box_1">
                        <div id="u1_div" className=""></div>
                        <div id="u1_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>
                    
                    <div id="u2" className="ax_default">
                        <iframe id="u2_imput" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.870676642131!2d-6.853160685574081!3d33.99585538062138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c91ffaabd59%3A0xccc90d07ffea3f63!2sClinique%20Agdal!5e0!3m2!1sfr!2sma!4v1587415991254!5m2!1sfr!2sma"></iframe>
                    </div>

                    <div id="u3" className="ax_default image">
                    <img id="u3_img" className="img " src={u3}/>
                    <div id="u3_text" className="text " style={{display:"none", visibility: "hidden"}}>
                        <p></p>
                    </div>
                    </div>

                    <div id="u4" className="ax_default label">
                        <img id="u4_img" className="img " src={u4}/>
                        <div id="u4_text" className="text ">
                            <p><span>medicare@gmail.com</span></p>
                        </div>
                    </div>

                    
                    <div id="u5" className="ax_default label">
                        <img id="u5_img" className="img " src={u5}/>
                        <div id="u5_text" className="text ">
                            <p><span>05 35 12 34 56</span></p>
                        </div>
                    </div>

                    <div id="u6" className="ax_default label">
                        <img id="u6_img" className="img " src={u5}/>
                        <div id="u6_text" className="text ">
                            <p><span>05 35 23 45 76</span></p>
                        </div>
                    </div>

                    <div id="u7" className="ax_default image">
                        <img id="u7_img" className="img " src={u7}/>
                        <div id="u7_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>

                    <div id="u8" className="ax_default label">
                        <img id="u8_img" className="img " src={u8}/>
                        <div id="u8_text" className="text ">
                            <p><span>FAQ</span></p>
                        </div>
                    </div>
                    <div id="u9" className="ax_default image">
                        <img id="u9_img" className="img " src={u9}/>
                        <div id="u9_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>

                    <div id="u10" className="ax_default image">
                    <img id="u10_img" className="img " src={u10}/>
                    <div id="u10_text" className="text " style={{display:"none", visibility: "hidden"}}>
                        <p></p>
                    </div>
                    </div>

                    <div id="u11" className="ax_default image">
                        <img id="u11_img" className="img " src={u11}/>
                        <div id="u11_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>

                    <div id="u12" class="ax_default image">
                        <img id="u12_img" class="img " src={u12}/>
                        <div id="u12_text" class="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>
                </div>











                    <div id="u13" className="ax_default" data-label="Equipe" data-left="42" data-top="1595" data-width="1091" data-height="1255" style={{position:"relative",left:"70px"}}>
                        
                        <div id="u34" className="ax_default heading_1">
                            <div id="u34_div" className=""></div>
                            <div id="u34_text" className="text ">
                                <p><span>Notre équipe</span></p>
                            </div>
                        </div>
                        <div id="u35" class="ax_default label">
                            <img id="u35_img" class="img " src={u35}/>
                            <div id="u35_text" class="text ">
                                <p><span>Notre équipe médicale</span></p>
                            </div>
                        </div>


                        <div id="u14" className="ax_default" data-label="amine" data-left="42" data-top="1732" data-width="187" data-height="223">
                            <div id="u15" className="ax_default box_1" data-label="Amine" > 
                                <img id="u15_img" className="img" src={amine_u15}/>
                                <div id="u15_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u16" className="ax_default image" data-label="amine_img">
                                <img id="u16_img" className="img " src={amine_img_u16}/>
                                <div id="u16_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u17" className="ax_default label">
                                <div id="u17_div" className=""></div>
                                <div id="u17_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u18" className="ax_default label">
                                <div id="u18_div" className=""></div>
                                <div id="u18_text" className="text ">
                                    <p><span>Amine Bidoud</span></p>
                                </div>
                            </div>
                        </div>

                        <div id="u19" className="ax_default" data-label="manal" data-left="655" data-top="1732" data-width="187" data-height="223">
                            <div id="u20" className="ax_default box_1" data-label="manal">
                                <img id="u20_img" className="img " src={amine_u15}/>
                                <div id="u20_text" className="text " style={{display:"none", visibility:" hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u21" className="ax_default image" data-label="Manal_img">
                                <img id="u21_img" className="img " src={manal_img_u21}/>
                                <div id="u21_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u22" className="ax_default label">
                                <div id="u22_div" className=""></div>
                                <div id="u22_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u23" className="ax_default label">
                                <div id="u23_div" className=""></div>
                                <div id="u23_text" className="text ">
                                    <p><span>Manal En-nejjari</span></p>
                                </div>
                            </div>
                        </div>

                        <div id="u24" className="ax_default" data-label="othmane" data-left="340" data-top="1993" data-width="187" data-height="223">
                            <div id="u25" className="ax_default box_1" data-label="Othmane">
                                <img id="u25_img" className="img " src={amine_u15}/>
                                <div id="u25_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u26" className="ax_default image" data-label="othmane_img">
                                <img id="u26_img" className="img " src={othmane_img_u26}/>
                                <div id="u26_text" className="text " style={{display:"none", visibility:"hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u27" className="ax_default label">
                                <div id="u27_div" className=""></div>
                                <div id="u27_text" className="text ">
                                    <p><span>Othmane Ait Ouceffage</span></p>
                                </div>
                            </div>
                            <div id="u28" className="ax_default label">
                                <div id="u28_div" className=""></div>
                                <div id="u28_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u29" className="ax_default" data-label="hanae" data-left="946" data-top="1733" data-width="187" data-height="223">
                            <div id="u30" className="ax_default box_1" data-label="hanae">
                                <img id="u30_img" className="img " src={amine_u15}/>
                                <div id="u30_text" className="text " style={{display:"none", visibility:"hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u31" class="ax_default image" data-label="hanae_img">
                                <img id="u31_img" class="img " src={hanae_img_u31}/>
                                <div id="u31_text" class="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u32" className="ax_default label">
                                <div id="u32_div" className=""></div>
                                <div id="u32_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u33" className="ax_default label">
                                <div id="u33_div" className=""></div>
                                <div id="u33_text" className="text ">
                                    <p><span>Hanae Ben Ibrahim</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u36" className="ax_default" data-label="amine" data-left="42" data-top="1732" data-width="187" data-height="223">
                            <div id="u37" className="ax_default box_1" data-label="Amine" > 
                                <img id="u37_img" className="img" src={amine_u15}/>
                                <div id="u137_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u38" className="ax_default image" data-label="amine_img">
                                <img id="u38_img" className="img " src={amine_img_u16}/>
                                <div id="u38_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u39" className="ax_default label">
                                <div id="u39_div" className=""></div>
                                <div id="u39_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u40" className="ax_default label">
                                <div id="u40_div" className=""></div>
                                <div id="u40_text" className="text ">
                                    <p><span>Amine Bidoud</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u41" className="ax_default" data-label="manal" data-left="655" data-top="1732" data-width="187" data-height="223">
                            <div id="u42" className="ax_default box_1" data-label="manal">
                                <img id="u42_img" className="img " src={amine_u15}/>
                                <div id="u42_text" className="text " style={{display:"none", visibility:" hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u43" className="ax_default image" data-label="Manal_img">
                                <img id="u43_img" className="img " src={manal_img_u21}/>
                                <div id="u43_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u44" className="ax_default label">
                                <div id="u44_div" className=""></div>
                                <div id="u44_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u45" className="ax_default label">
                                <div id="u45_div" className=""></div>
                                <div id="u45_text" className="text ">
                                    <p><span>Manal En-nejjari</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u46" className="ax_default" data-label="othmane" data-left="340" data-top="1993" data-width="187" data-height="223">
                            <div id="u47" className="ax_default box_1" data-label="Othmane">
                                <img id="u47_img" className="img " src={amine_u15}/>
                                <div id="u47_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u48" className="ax_default image" data-label="othmane_img">
                                <img id="u48_img" className="img " src={othmane_img_u26}/>
                                <div id="u48_text" className="text " style={{display:"none", visibility:"hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u49" className="ax_default label">
                                <div id="u49_div" className=""></div>
                                <div id="u49_text" className="text ">
                                    <p><span>Othmane Ait Ouceffage</span></p>
                                </div>
                            </div>
                            <div id="u50" className="ax_default label">
                                <div id="u50_div" className=""></div>
                                <div id="u50_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u51" className="ax_default" data-label="hanae" data-left="946" data-top="1733" data-width="187" data-height="223">
                            <div id="u52" className="ax_default box_1" data-label="hanae">
                                <img id="u52_img" className="img " src={amine_u15}/>
                                <div id="u52_text" className="text " style={{display:"none", visibility:"hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u53" class="ax_default image" data-label="hanae_img">
                                <img id="u53_img" class="img " src={hanae_img_u31}/>
                                <div id="u53_text" class="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u54" className="ax_default label">
                                <div id="u54_div" className=""></div>
                                <div id="u54_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u55" className="ax_default label">
                                <div id="u55_div" className=""></div>
                                <div id="u55_text" className="text ">
                                    <p><span>Hanae Ben Ibrahim</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u56" class="ax_default label">
                            <img id="u56_img" class="img " src={u35}/>
                            <div id="u56_text" class="text ">
                                <p><span>Notre équipe administrative</span></p>
                            </div>
                        </div>
                        

                        <div id="u57" className="ax_default" data-label="amine" data-left="42" data-top="1732" data-width="187" data-height="223">
                            <div id="u58" className="ax_default box_1" data-label="Amine" > 
                                <img id="u58_img" className="img" src={amine_u15}/>
                                <div id="u58_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u59" className="ax_default image" data-label="amine_img">
                                <img id="u59_img" className="img " src={amine_img_u16}/>
                                <div id="u59_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u60" className="ax_default label">
                                <div id="u60_div" className=""></div>
                                <div id="u60_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u61" className="ax_default label">
                                <div id="u61_div" className=""></div>
                                <div id="u61_text" className="text ">
                                    <p><span>Amine Bidoud</span></p>
                                </div>
                            </div>
                        </div>

                        <div id="u62" className="ax_default" data-label="manal" data-left="655" data-top="1732" data-width="187" data-height="223">
                            <div id="u63" className="ax_default box_1" data-label="manal">
                                <img id="u63_img" className="img " src={amine_u15}/>
                                <div id="u63_text" className="text " style={{display:"none", visibility:" hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u64" className="ax_default image" data-label="Manal_img">
                                <img id="u64_img" className="img " src={manal_img_u21}/>
                                <div id="u64_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u65" className="ax_default label">
                                <div id="u65_div" className=""></div>
                                <div id="u65_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u66" className="ax_default label">
                                <div id="u66_div" className=""></div>
                                <div id="u66_text" className="text ">
                                    <p><span>Manal En-nejjari</span></p>
                                </div>
                            </div>
                        </div>

                        <div id="u67" className="ax_default" data-label="othmane" data-left="340" data-top="1993" data-width="187" data-height="223">
                            <div id="u68" className="ax_default box_1" data-label="Othmane">
                                <img id="u68_img" className="img " src={amine_u15}/>
                                <div id="u68_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u69" className="ax_default image" data-label="othmane_img">
                                <img id="u69_img" className="img " src={othmane_img_u26}/>
                                <div id="u69_text" className="text " style={{display:"none", visibility:"hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u70" className="ax_default label">
                                <div id="u70_div" className=""></div>
                                <div id="u70_text" className="text ">
                                    <p><span>Othmane Ait Ouceffage</span></p>
                                </div>
                            </div>
                            <div id="u71" className="ax_default label">
                                <div id="u71_div" className=""></div>
                                <div id="u71_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u72" className="ax_default" data-label="hanae" data-left="946" data-top="1733" data-width="187" data-height="223">
                            <div id="u73" className="ax_default box_1" data-label="hanae">
                                <img id="u73_img" className="img " src={amine_u15}/>
                                <div id="u73_text" className="text " style={{display:"none", visibility:"hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u74" class="ax_default image" data-label="hanae_img">
                                <img id="u74_img" class="img " src={hanae_img_u31}/>
                                <div id="u74_text" class="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u75" className="ax_default label">
                                <div id="u75_div" className=""></div>
                                <div id="u75_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u76" className="ax_default label">
                                <div id="u76_div" className=""></div>
                                <div id="u76_text" className="text ">
                                    <p><span>Hanae Ben Ibrahim</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u77" className="ax_default" data-label="amine" data-left="42" data-top="1732" data-width="187" data-height="223">
                            <div id="u78" className="ax_default box_1" data-label="Amine" > 
                                <img id="u78_img" className="img" src={amine_u15}/>
                                <div id="u78_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u79" className="ax_default image" data-label="amine_img">
                                <img id="u79_img" className="img " src={amine_img_u16}/>
                                <div id="u79_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u80" className="ax_default label">
                                <div id="u80_div" className=""></div>
                                <div id="u80_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u81" className="ax_default label">
                                <div id="u81_div" className=""></div>
                                <div id="u81_text" className="text ">
                                    <p><span>Amine Bidoud</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u82" className="ax_default" data-label="manal" data-left="655" data-top="1732" data-width="187" data-height="223">
                            <div id="u83" className="ax_default box_1" data-label="manal">
                                <img id="u83_img" className="img " src={amine_u15}/>
                                <div id="u83_text" className="text " style={{display:"none", visibility:" hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u84" className="ax_default image" data-label="Manal_img">
                                <img id="u84_img" className="img " src={manal_img_u21}/>
                                <div id="u84_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u85" className="ax_default label">
                                <div id="u85_div" className=""></div>
                                <div id="u85_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u86" className="ax_default label">
                                <div id="u86_div" className=""></div>
                                <div id="u86_text" className="text ">
                                    <p><span>Manal En-nejjari</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u87" className="ax_default" data-label="othmane" data-left="340" data-top="1993" data-width="187" data-height="223">
                            <div id="u88" className="ax_default box_1" data-label="Othmane">
                                <img id="u88_img" className="img " src={amine_u15}/>
                                <div id="u88_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u89" className="ax_default image" data-label="othmane_img">
                                <img id="u89_img" className="img " src={othmane_img_u26}/>
                                <div id="u89_text" className="text " style={{display:"none", visibility:"hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u90" className="ax_default label">
                                <div id="u90_div" className=""></div>
                                <div id="u90_text" className="text ">
                                    <p><span>Othmane Ait Ouceffage</span></p>
                                </div>
                            </div>
                            <div id="u91" className="ax_default label">
                                <div id="u91_div" className=""></div>
                                <div id="u91_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                        </div>
                        <div id="u92" className="ax_default" data-label="hanae" data-left="946" data-top="1733" data-width="187" data-height="223">
                            <div id="u93" className="ax_default box_1" data-label="hanae">
                                <img id="u93_img" className="img " src={amine_u15}/>
                                <div id="u93_text" className="text " style={{display:"none", visibility:"hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u94" class="ax_default image" data-label="hanae_img">
                                <img id="u94_img" class="img " src={hanae_img_u31}/>
                                <div id="u94_text" class="text " style={{display:"none", visibility: "hidden"}}>
                                    <p></p>
                                </div>
                            </div>
                            <div id="u95" className="ax_default label">
                                <div id="u95_div" className=""></div>
                                <div id="u95_text" className="text ">
                                    <p><span>Description</span></p>
                                </div>
                            </div>
                            <div id="u96" className="ax_default label">
                                <div id="u96_div" className=""></div>
                                <div id="u96_text" className="text ">
                                    <p><span>Hanae Ben Ibrahim</span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="u97" className="ax_default" data-label="Spécialités" data-left="42" data-top="1055" data-width="1077" data-height="490" style={{position:"relative",left:"70px"}}>
                        <div id="u98" className="ax_default image">
                            <img id="u98_img" className="img " src={u98}/>
                            <div id="u98_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>
                        <div id="u99" className="ax_default image">
                            <img id="u99_img" className="img " src={u99}/>
                            <div id="u99_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>
                        <div id="u100" className="ax_default image">
                            <img id="u100_img" className="img " src={u100}/>
                            <div id="u100_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>
                        <div id="u101" className="ax_default image">
                            <img id="u101_img" className="img " src={u101}/>
                            <div id="u101_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>

                        <div id="u102" className="ax_default label">
                            <img id="u102_img" className="img " src={u102}/>
                            <div id="u102_text" className="text ">
                                <p><span>Cardiologie</span></p>
                            </div>
                        </div>
                        <div id="u103" className="ax_default label">
                            <img id="u103_img" className="img " src={u103}/>
                            <div id="u103_text" className="text ">
                                <p><span>Radiologie</span></p>
                            </div>
                        </div>
                        <div id="u104" className="ax_default label">
                            <img id="u104_img" className="img " src={u104}/>
                            <div id="u104_text" className="text ">
                                <p><span>Traumatologie</span></p>
                            </div>
                        </div>
                        <div id="u105" className="ax_default label">
                            <img id="u105_img" className="img " src={u105}/>
                            <div id="u105_text" className="text ">
                                <p><span>Pédiatrie</span></p>
                            </div>
                        </div>
                        <div id="u106" className="ax_default heading_1">
                            <div id="u106_div" className=""></div>
                            <div id="u106_text" className="text ">
                                <p><span>Spécialités de MEDICARE</span></p>
                            </div>
                        </div>

                        <div id="u107" className="ax_default image">
                            <img id="u107_img" className="img " src={u107}/>
                            <div id="u107_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>
                        <div id="u108" className="ax_default label">
                            <img id="u108_img" className="img " src={u108}/>
                            <div id="u108_text" className="text ">
                                <p><span>Gastrologie</span></p>
                            </div>
                        </div>
                        <div id="u109" className="ax_default image">
                            <img id="u109_img" className="img " src={u109}/>
                            <div id="u109_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>
                        <div id="u110" className="ax_default label">
                            <img id="u110_img" className="img " src={u110}/>
                            <div id="u110_text" className="text ">
                                <p><span>Ophtalmologie</span></p>
                            </div>
                        </div>
                        <div id="u111" className="ax_default image">
                            <img id="u111_img" className="img " src={u111}/>
                            <div id="u111_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>
                        <div id="u112" className="ax_default label">
                            <img id="u112_img" className="img " src={u112}/>
                            <div id="u112_text" className="text ">
                                <p><span>Endocrinologie</span></p>
                            </div>
                        </div>
                        <div id="u113" className="ax_default image">
                            <img id="u113_img" className="img " src={u113}/>
                            <div id="u113_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>
                        <div id="u114" className="ax_default label">
                            <img id="u114_img" className="img " src={u114}/>
                            <div id="u114_text" className="text ">
                                <p><span>Chirurgie viscérale</span></p>
                            </div>
                        </div>
                    </div>


                    <div id="u115" className="ax_default" data-label="Présentation" data-left="37" data-top="94" data-width="1126" data-height="921">
                        <div id="u116" className="ax_default box_1" data-label="Link">
                            <img id="u116_img" className="img " src={link_u116}/>
                            <div id="u116_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                <p></p>
                            </div>
                        </div>

                        <div id="u117" className="ax_default paragraph">
                            <div id="u117_div" className=""></div>
                            <div id="u117_text" className="text ">
                                <p><span>Le site vous permet d'avoir une idée sur notre centre hospitalier! Le plateau technique de la clinique est à la pointe de la science médicale actuelle, tout est fait pour offrir à nos patients tout ce qu'il y a de nouveau et de performant. La compétence du personnel médical permet à notre clinique de se démarquer et de vous offrir les meilleurs soins possibles. Les administrateurs et infirmiers restent à votre disposition 24h/24 pour vous accomagner et satidfaire toutes vos demandes.</span></p><p><span><br/></span></p>
                            </div>
                        </div>
                        <div id="u118" className="ax_default" style={{position:"relative",left:"70px"}}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4NEANeCAEI0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div id="u119" className="ax_default heading_1">
                            <div id="u119_div" class=""></div>
                            <div id="u119_text" className="text ">
                                <p><span>Bienvenu sur le site de la clinique MEDICARE</span></p>
                            </div>
                        </div>
                        <div id="u120" className="ax_default">
                            <div id="u120_state0" className="panel_state" data-label="State1">
                                <div id="u120_state0_content" className="panel_state_content">
                                    <div id="u121" className="ax_default box_2">
                                        <div id="u121_div" className=""></div>
                                        <div id="u121_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                            <p></p>
                                        </div>
                                    </div>
                                    <div id="u122" className="ax_default image">
                                        <img id="u122_img" className="img " src={u122}/>
                                        <div id="u122_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="u120_state1" className="panel_state" data-label="State2" style={{visibility: "hidden"}}>
                                <div id="u120_state1_content" className="panel_state_content">
                                    <div id="u123" className="ax_default image">
                                        <img id="u123_img" className="img " src={u123}/>
                                        <div id="u123_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="u120_state2" className="panel_state" data-label="State3" style={{visibility: "hidden"}}>
                                <div id="u120_state2_content" className="panel_state_content">
                                    <div id="u124" className="ax_default image">
                                        <img id="u124_img" className="img " src={u124}/>
                                        <div id="u124_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="u120_state3" className="panel_state" data-label="State4" style={{visibility: "hidden"}}>
                                <div id="u120_state3_content" className="panel_state_content">
                                    <div id="u125" className="ax_default image">
                                        <img id="u125_img" className="img " src={u125}/>
                                        <div id="u125_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                    <div id="u128" className="ax_default" data-label="Menu" data-left="0" data-top="0" data-width="0" data-height="0">
                        <div id="u129" className="ax_default" data-label="Menu">
                            <div id="u129_state0" className="panel_state" data-label="State1" >
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
                                        <button id="u135_text" className="btn btn-success text " onClick={() => this.connexion() } style={{backgroundColor:"#D7D7D7",font:"arial",fontSize:"22px",color:"#4997D4"}}>Se connecter</button>
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
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}

export default Acceuil