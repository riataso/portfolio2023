import React from 'react'
import JavaItem from '../Images/java.png';
import SwiftItem from '../Images/swiftimg.png';
import OracleItem from '../Images/oracle.png';
import ReactItem from '../Images/react.png';
import JsItem from '../Images/js.png';
import PythonItem from '../Images/python.png';


const Skill = () => {
    return (
        <div className='abc'>
        <div ClassName="confirm text-center" >
            <h1 className='skilltitle'>スキル一覧</h1>
            <section id="askill">
                <div className="text-center">
                    <h1 className="title">授業スキル</h1>
                    <div className="row text-center">
                        <div className="col-md-4 services">
                            <img src={JavaItem} />
                            <h4>Java</h4>
                            <p>Javaを1年学習していました</p>
                        </div>
                        <div className="col-md-4 services">
                            <img src={SwiftItem} />
                            <h4>Swift</h4>
                            <p>Swiftを半年学習していました</p>
                        </div>
                        <div className="col-md-4 services">
                            <img src={OracleItem} />
                            <h4>Oracle</h4>
                            <p>Oracleを半年学習していました</p>
                        </div>
                    </div>
                    <section id="bskill">
                        <div className="text-center">
                            <div className="row text-center">

                                <h1 className="title">独自スキル</h1>
                                <div className="col-md-4 services">
                                    <img src={ReactItem} />
                                    <h4>React</h4>
                                    <p>Reactを3か月勉強しています</p>
                                </div>
                                <div className="col-md-4 services">
                                    <img src={JsItem} />
                                    <h4>Oracle</h4>
                                    <p>HTML/CSS,JSを半年勉強しています</p>
                                </div>
                                <div className="col-md-4 services">
                                    <img src={PythonItem} />
                                    <h4>Python</h4>
                                    <p>pythonを半年勉強していました</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
        </div>
    )


}

export default Skill