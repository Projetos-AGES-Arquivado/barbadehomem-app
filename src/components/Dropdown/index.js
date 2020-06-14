import React, { Component, Fragment } from "react";
import './styles.css'
import { FiChevronDown } from "react-icons/fi";

const DropDown = (props) => {

    return (
        <div className="dropdown">
            <span className="span-dropdown">{props.selected === '' ? (<>Escolha um meio de pagamento <FiChevronDown/></>): props.selected}</span>
            <div className="dropdown-content">
                {
                    props.options.map((opcao) => <button className="item" onClick={()=>props.onClick(opcao.method)}>{opcao.method}</button>)
                }
            </div>
        </div>
    )
}

export default DropDown