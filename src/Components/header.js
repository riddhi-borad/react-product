import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div>
                <div className="row ml-0 mr-0">
            <div className="top-left"><img className="mt-3 ml-5" src="Image\Kaya_Clinic_logo.png" /></div>
            <div className="top-right">
              <div className="float-right pt-3 pr-5"><i className="fnz-20 fa fa-user" aria-hidden="true"></i> <i class="fa fa-angle-down" aria-hidden="true"></i>&nbsp;&nbsp; <span className="fnz-20">Good Morning!<br/> <span className="pl-5">Hello John</span> Doe</span></div>
            </div>
          </div>
            </div>
        )
    }
}
