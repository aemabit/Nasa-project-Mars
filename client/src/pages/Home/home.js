import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './homepage.css'
import axios from 'axios'
import { Link } from "react-router-dom"

export default class Home extends Component {
    state = {
        navEffect: [],
        mastEffect: [],
        boom: 'none',
        boomTwo: 'none',
        show: 'none'
    }

    getMast = () => {
        axios.get(`/api/mast`)
            .then(res =>
                this.setState({
                    mastEffect: res.data.mastCamera
                })
            )
    }

    getNav = () => {
        axios.get(`/api/nav`)
            .then(res =>
                this.setState({
                    navEffect: res.data.navCamera
                })
            )
    }

    megaEffectMast = () => {
        this.setState({
            boomTwo: 'block'
        })
        let i = 0
        setInterval(() => {
            const victim = document.querySelector(".full-page-mast")
            victim.style.background = `linear-gradient(rgba(000,000,000,0.5), rgba(000,000,000,0.95)) ,url('${this.state.mastEffect[i].img_src}') repeat center`
            i++
            if (this.state.mastEffect.length === i) {
                i = 0
            }
        }, 2000)
    }

    megaEffectNav = () => {
        this.setState({
            boom: 'block'
        })
        let i = 0
        this.navInterval = setInterval(() => {
                const victim = document.querySelector(".full-page-nav")
                victim.style.background = `linear-gradient(rgba(000,000,000,0.5), rgba(000,000,000,0.95)) ,url('${this.state.navEffect[i].img_src}') repeat center`
            i++
            if (this.state.navEffect.length === i) {
                i = 0
            }
        }, 2000)
    }

    mouseLeaveNav = () => {
        window.location.reload()
        this.setState({
            boom: 'none'
        })
    }

    closeInterval = (e) => { 
        e.stopPropagation()
        this.closeInterval(this.megaEffectMast)
        this.closeInterval(this.megaEffectNav)
    }

    mouseLeaveMast = () => {
        window.location.reload()
        this.setState({
            boomTwo: 'none'
        })
    }

    render() {
        this.state.navEffect.splice(3,3)
        const megaEffectBoom = {
            display: `${this.state.boom}`,
            position: 'absolute',
            zIndex: "1"
        }

        const megaEffectBoomTwo = {
            display: `${this.state.boomTwo}`,
            position: 'absolute',
            zIndex: "1"
        }
        return (
            <>
                <div className="wrapper-body-home">
                    <div className="first-view-home">
                        <img src="https://wallpaperaccess.com/full/538145.jpg" alt="Mars" />
                    </div>
                    <div className="welcome-to-mars">
                        <span>MARS</span>
                        <div className="beauty-line"></div>
                        <p>THE RED PLANET</p>
                    </div>
                    <div className="beta-view-home">
                        <div className="nav-go-to">
                        <Link to="/nav">
                            <span>See pictures for the Rover Curiosity in MARS with your <br></br>
                                <span
                                    className="to-mega-effect"
                                    onMouseEnter={this.megaEffectNav}
                                    onMouseLeave={this.mouseLeaveNav}
                                    onClick={this.closeInterval}
                                >
                                    Navigation Camera (NAVCAM)
                                </span>
                            </span>
                        </Link>
                        </div>
                        <div className="full-page-nav" style={megaEffectBoom}></div>

                        <div className="vertical-line"></div>

                        <div className="mast-go-to">
                            <Link to="/mast">
                                <span>See pictures for the Rover Curiosity in MARS with your<br></br>
                                    <span
                                        className="to-mega-effect"
                                        onMouseEnter={this.megaEffectMast}
                                        onMouseLeave={this.mouseLeaveMast}
                                        onClick={this.closeInterval}
                                    >
                                        Mast Camera (MAST)
                            </span>
                                </span>
                            </Link>
                        </div>

                        <div className="full-page-mast" style={megaEffectBoomTwo}></div>
                    </div>
                    
                    <div className="wrapper-know-curisity">
                        <Link to="/curiosity">
                            <div className="second-title-mars">
                                <span>KNOW CURIOSITY</span>
                                <div className="beauty-line-ex"></div>
                                <p>The biggest robot landed on another planet</p>
                            </div>
                            <div className="know-curiosity">
                                <img src="https://cdn.theatlantic.com/assets/media/img/photo/2018/01/2000-days-on-mars-with-the-curiosit/m01_1943MH000-1/original.jpg" alt="curiosity" />                        
                            </div>
                        </Link>
                    </div>

                    <div className="second-title-mars">
                        <span>INTO THE RED PLANET</span>
                        <div className="beauty-line-ex"></div>
                    </div>
                    <div className="firstOne-view-home">
                        <ReactPlayer
                            url='https://images-assets.nasa.gov/video/272_MarsInSight/272_MarsInSight~orig.mp4'
                            playing={true}
                            controls={true}
                            width='100%'
                            height='100%'
                        />
                    </div>

                    <div className="second-title-mars">
                        <span>EXPLORE</span>
                        <div className="beauty-line-ex"></div>
                    </div>
                    <div className="second-view-home">

                        <div className="links-to-mars">
                            <div className="box-link-explorer">
                                <a href="https://eyes.nasa.gov/curiosity/">
                                    <div
                                        className="other-link o-1"
                                    >
                                        Experience Curiosity
                                </div>
                                </a>
                            </div>
                            <div className="box-link-explorer">
                                <a href="https://www.youtube.com/watch?v=NJzDNgs7Db8">
                                    <div
                                        className="other-link o-2"
                                    >
                                        NASA's Curiosity Mars Rover Explores Teal Ridge (360 View)
                                </div>
                                </a>
                            </div>
                            <div className="box-link-explorer">
                                <a href="https://www.youtube.com/watch?v=lcJLZfPiyfc">
                                    <div
                                        className="other-link o-3"
                                    >
                                        NASA's Curiosity Mars Rover on Vera Rubin Ridge (360 View)
                                </div>
                                </a>
                            </div>
                            <div className="box-link-explorer">
                                <a href="https://mars.nasa.gov/msl/mission/science/results/">
                                    <div
                                        className="other-link o-4"
                                    >
                                        Mars Curiosity Rover (Results)
                                </div>
                                </a>
                            </div>
                            <div className="box-link-explorer">
                                <a href="https://mars.nasa.gov/mars2020/">
                                    <div
                                        className="other-link o-5"
                                    >
                                        MARS 2020 Mission
                                </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    componentDidMount() {
        this.getMast()
        this.getNav()
        window.scrollTo(0, 0)
    }

}
