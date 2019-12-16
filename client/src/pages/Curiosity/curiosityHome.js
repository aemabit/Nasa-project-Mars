import React, { Component } from 'react'
import './curiosityHome.css'
import ReactPlayer from 'react-player'
import { Element, scroller } from 'react-scroll'
import ScrollNavMast from './components/navBarMast'
import { Link } from "react-router-dom"

export default class CuriosityHome extends Component {
    state = { 
        show: 'none',
        scrollType: {
            duration: 800,
            delay: 50,
            smooth: true, 
            offset: 150,
         }
    }

    onClickHasLanded = () => {
        scroller.scrollTo(("second-view"), this.state.scrollType)
    }

    onClickAnimatedMission = () => {
        scroller.scrollTo(("first-view"), this.state.scrollType)
    }

    onClickTakesSelfies = () => {
        scroller.scrollTo(("third-view"), this.state.scrollType)
    }
    
    onClickAncientOrganics = () => {
        scroller.scrollTo(("four-view"), this.state.scrollType)
    }

    onClickStuningImages = () => {
        scroller.scrollTo(("five-view"), this.state.scrollType)
    }

    mouseEnter = () => {
        this.setState({ show: 'block'})
    }

    mouseLeave = () => {
        this.setState({ show: 'none' })
    }

    render(){
        const videoPresentStyle = {
            display: `${this.state.show}`,
            position: 'absolute',
            zIndex: "1",
            top: "150px"
        }
        return(
            <>
            <div className="wrapper-in-the-middle">
                <ScrollNavMast 
                    onClickAnimatedMission = {this.onClickAnimatedMission}
                    onClickHasLanded = {this.onClickHasLanded}
                    onClickTakesSelfies = {this.onClickTakesSelfies}
                    onClickAncientOrganics = {this.onClickAncientOrganics}
                    onClickStuningImages = {this.onClickStuningImages}
                />
                <div className="second-wrapper">
                    <div className="overview-curiosity">
                        <div className="wrapper-title-curiosity">
                            <div className="video-rover-c" style={videoPresentStyle}>
                            <ReactPlayer
                              url='https://svs.gsfc.nasa.gov/vis/a010000/a012900/a012967/Rover_Arm_Loop.mp4'
                              playing={true}
                              muted={true}
                              width='100%'
                              height='100%'
                              loop={true}
                            />
                            </div>
                            <span>Curiosity Rover</span>
                            <div className="beauty-line"></div>
                        </div>
                        <div className="info-curiosity" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                            <p>
                                With its rover named Curiosity, Mars Science Laboratory mission is part of NASA's Mars Exploration Program, a long-term effort of  
                                robotic exploration of the red planet. Curiosity was designed to assess whether Mars ever had an environment able to support small 
                                life forms called microbes. In other words, its mission is to determine the planet's "habitability."
                            </p>
                        </div>
                    </div>

                    <Element name="first-view">
                    <div className="continue-the-view">
                        <div className="vertical-line"></div>
                    </div>
                    <div className="title-story-line" >
                        <span>Animated Mission</span>
                        <p>
                            This artist's concept animation depicts key events of NASA's Mars Science Laboratory mission, which will <br></br>
                            launch in late 2011 and land a rover, Curiosity, on Mars in August 2012.
                        </p>
                    </div>
                    <div className="first-story-line">
                        <div className="content-first">
                            <ReactPlayer
                              url="https://aemabitfolder.sfo2.digitaloceanspaces.com/MissionAnimation.ogv"
                              playing={true}
                              muted={true}
                              width='100%'
                              height='100%'
                              loop={true}
                            />
                        </div>
                        <div className="content-first">
                            <img src="http://www.nasa.gov/sites/default/files/m14-154_0.jpg" alt="curiosity-landing"/>
                        </div>
                    </div>
                    </Element>

                    <Element name="second-view">
                    <div className="continue-the-view">
                        <div className="vertical-line"></div>
                    </div>
                    <div className="title-story-line" >
                        <span>Has Landed</span>
                        <p>
                            Arriving at Mars at 10:32 p.m. PDT on Aug. 5, 2012 (1:32 a.m. EDT on Aug. 6, 2012), Mars Science Laboratory will <br></br>
                            serve as an entrée to the next decade of Mars exploration.
                        </p>
                    </div>
                    <div className="first-story-line">
                        <div className="content-first">
                            <img src="https://cdn.theatlantic.com/static/mt/assets/science/curiosity-rover-mars-landing-touchdown.jpeg" alt="curiosity-landing"/>
                        </div>
                        <div className="content-first">
                            <ReactPlayer
                              url="https://aemabitfolder.sfo2.digitaloceanspaces.com/CuriosityHasLanded.ogv"
                              playing={true}
                              muted={true}
                              width='100%'
                              height='100%'
                              loop={true}
                            />
                        </div>
                    </div>
                    </Element>

                    <Element name="third-view">
                    <div className="continue-the-view">
                        <div className="vertical-line"></div>
                    </div>
                    <div className="title-story-line" >
                        <span>Takes Selfies</span>
                        <p>
                            These photos from NASA's Curiosity Mars rover showcase the incredible surface of the red planet, and selfies of the <br></br>
                            rovers themselves. However, there is one thing that is not in these photos — the arm of the rover. Nov 9, 2016.
                        </p>
                    </div>
                    <div className="first-story-line">
                        <div className="content-first">
                            <ReactPlayer
                              url="https://aemabitfolder.sfo2.digitaloceanspaces.com/takesselfies.ogv"
                              playing={true}
                              muted={true}
                              width='100%'
                              height='100%'
                              loop={true}
                            />
                        </div>                        
                        <div className="content-first">
                            <img src="https://imagecache.jpl.nasa.gov/images/640x350/PIA23378-16-640x350.jpg" alt="curiosity-landing"/>
                        </div>
                    </div>
                    </Element>

                    <Element name="four-view">
                    <div className="continue-the-view">
                        <div className="vertical-line"></div>
                    </div>
                    <div className="title-story-line" >
                        <span>Ancient Organics</span>
                        <p>
                            Since arriving at Mars in 2012, NASA's Curiosity rover has drilled into rocks in search of organics - molecules containing carbon. <br></br><br></br>
                            Organics are the building blocks of all life on Earth, though they can also come from non-living sources. The surface of Mars readily 
                            destroys these molecules, making them difficult to detect. Now, Curiosity has discovered ancient organics that have been preserved in 
                            rocks for billions of years. This finding helps scientists better understand the habitability of early Mars, and it paves the way for 
                            future missions to the Red Planet. Jun 7, 2018
                        </p>
                    </div>
                    <div className="first-story-line">
                        <div className="content-first">
                            <img src="https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia19808.jpg?itok=rgxgamMM" alt="curiosity-landing"/>
                        </div>
                        <div className="content-first">
                            <ReactPlayer
                              url="https://aemabitfolder.sfo2.digitaloceanspaces.com/AncientOrganicsOnMars.ogv"
                              playing={true}
                              muted={true}
                              width='100%'
                              height='100%'
                              loop={true}
                            />
                        </div>
                    </div>
                    </Element>

                    <Element name="five-view">
                    <div className="continue-the-view">
                        <div className="vertical-line"></div>
                    </div>
                    <div className="title-story-line" >
                        <span>Stunning Images</span>
                        <p>
                            The landing site of the car sized-rover was less than 1 ½”  miles from its touchdown target after completing a<br></br>
                            350 million mile journey. Jun 14, 2019
                        </p>
                    </div>
                    <div className="first-story-line the-last-box">
                        <div className="content-first links">
                            <ReactPlayer
                              url="https://aemabitfolder.sfo2.digitaloceanspaces.com/TheStunningImg.ogv"
                              playing={true}
                              muted={true}
                              width='100%'
                              height='100%'
                              loop={true}
                            />
                        </div>
                        <div className="content-first vide-links">
                            <Link to="/mast">
                                <img 
                                    className="link-to-galery"
                                    src="https://cdn.theatlantic.com/assets/media/img/photo/2018/01/2000-days-on-mars-with-the-curiosit/m03_1648ML0085300/main_900.jpg?1517435756" 
                                    alt="curiosity-landing"
                                />
                                <div className="cta-box-mast">
                                    <div className="img-link-cta">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                    <p>MAST CAMERA</p>
                                </div>
                            </Link>
                            <Link to="/nav">
                                <img 
                                    className="link-to-galery"
                                    src="https://prd-wret.s3-us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/NRB_612334595EDR_F0752770NCAM00354M_-br2.jpg" 
                                    alt="curiosity-landing"
                                />
                                <div className="cta-box-mast">
                                    <div className="img-link-cta">
                                        <i className="fas fa-plus"></i>
                                    </div>
                                    <p>NAVIGATION CAMERA</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    </Element>

                </div>
            </div>
            </>
        )
    }
    componentDidMount() {
        window.scrollTo(0, 0)
      }
}