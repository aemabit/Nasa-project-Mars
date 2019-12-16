import React, { Component } from 'react'
import axios from 'axios'
import './nav.css'
import GlitchClip from 'react-glitch-effect/core/Clip'

export default class NavOne extends Component {
    state={
        navData: []
    }

    firstNav = () => {
        axios.get(`/api/nav`)
            .then(res => 
                this.setState({ 
                    navData: res.data.navCamera
                })
            )
    }
    
    render(){
        const { navData } = this.state
        navData.splice(3,3)
        return(
            <>
            <div className="wrapper-content-nav">
            <div className="wrapper-title-NavCamera">
                <span>Curiosity Rover</span>
                <div className="beauty-line"></div>
                <p>Navigation Camera (NAVCAM)</p>
            </div>
            <div className="continue-the-view">
                <div className="vertical-line"></div>
            </div>
            <div className="container-nav">

                <div className="wrapper-nav">
                    {
                        navData.map((nav, index) => {
                            return(
                                <div key={nav.id} className="container-inside-nav">
                                    <GlitchClip duration="8s" className={"f"+index}>
                                        <div className="inside-nav">
                                            <img className="img-nav" src={`${nav.img_src}`} alt={nav.id}></img>
                                        </div>
                                    </GlitchClip>
                                    <div className="container-info-nav">
                                        <span>{nav.camera.name}</span><br></br>
                                        <span>Earth Date: <span>{nav.earth_date}</span></span>
                                    </div>
                                    <div className="count-div-nav">
                                        <span>{index + 1}</span><span> / {this.state.navData.length}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </div>
            </>
        )
    }

    componentDidMount(){
        this.firstNav()
        window.scrollTo(0, 0)
    }
}
