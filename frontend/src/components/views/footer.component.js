import React , { Component } from 'react';

import sdgImg from '../images/sdg.png';


export default  class Footer extends Component {
    render(){
        return(          
                <div className="row mt-3 text-center footer">
                    <div className="col-sm-12 my-4">
                        <img src={ sdgImg } className="img-fluid sdg mx-2"alt="sdg logo"/>
                        <b> #BuildForSDGs 2020 | GoBusiness </b>
                    </div>
                </div>          
        )
    }
}