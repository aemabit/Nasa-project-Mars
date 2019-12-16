import React, { Component } from 'react'
import axios from 'axios'
import './mast.css'

export default class MastOne extends Component {
    state = { 
        mastOneData: {},
        count: 0
    }

    nextPage = () => {
        if(this.state.count >= 24 ){
            this.setState({ count: 0 })
            this.firstMast()
        }else{
            const next = this.state.count + 1 
            this.setState({ count: next })
            this.firstMast()
        }
    }

    prevPage = () => {
        if(this.state.count <= 0 ){
            this.setState({ count: 24 })
            this.firstMast()
        }else{
            const prev = this.state.count - 1 
            this.setState({ count: prev })
            this.firstMast()
        }
    }

    firstMast = () => {
        axios.get(`/api/mast`)
            .then(res => 
                this.setState({ 
                    mastOneData: res.data.mastCamera[this.state.count]
                })
            )
    }
    
    render(){
        const { mastOneData } = this.state
        return(
            <>
            <div className="wrapper-title-mastCamera">
                <span>Curiosity Rover</span>
                <div className="beauty-line"></div>
                <p>Mast Camera (MAST)</p>
            </div>

            <div className="container-mast-data">
                {
                    mastOneData.img_src &&
                    <div className="container-img-mast">
                        <img className="img-mast" src={`${mastOneData.img_src}`} alt={mastOneData.id}></img>
                    </div>
                }
                {
                    mastOneData.camera && (
                    <div className="container-info-mast">
                        <span>{mastOneData.camera.name}</span><br></br>
                        <span>Earth Date: <span>{mastOneData.earth_date}</span></span>
                    </div>
                    )
                }
                {
                    <div className="count-div">
                        <span>{this.state.count + 1}</span><span> / 25</span>
                    </div>
                }
            <div className="container-linear-buttom">
                <button className="move-the-page" onClick={this.prevPage}><i className="fas fa-caret-left"></i></button>
                <button className="move-the-page" onClick={this.nextPage}><i className="fas fa-caret-right"></i></button>
            </div>
            </div>
            </>
        )
    }

    componentDidMount(){
        this.firstMast()
        window.scrollTo(0, 0)
    }
}
