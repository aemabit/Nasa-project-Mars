import React from 'react'
import '../curiosityHome.css'

const ScrollNavMast = props => {

    return(
        <div className="lateral-navBarMast">
            <div className="lateral-line-go-to"></div>
            <div className="go-to" onClick={props.onClickAnimatedMission} >ANIMATED MISSION<div className="nice-line-nav"></div></div>
            <div className="go-to" onClick={props.onClickHasLanded}>HAS LANDED<div className="nice-line-nav"></div></div>
            <div className="go-to" onClick={props.onClickTakesSelfies}>TAKES SELFIES<div className="nice-line-nav"></div></div>
            <div className="go-to" onClick={props.onClickAncientOrganics}>ANCIENT ORGANICS<div className="nice-line-nav"></div></div>
            <div className="go-to" onClick={props.onClickStuningImages}>STUNNING IMAGES<div className="nice-line-nav"></div></div>
        </div>
    )
}

export default ScrollNavMast