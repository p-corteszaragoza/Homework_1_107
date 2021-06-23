import React, { Component } from 'react'; //imrc
import "./quantityPicker.css"

class QuantityPicker extends Component { //cc
    state = {  };

    render() { 
        return ( 
            <div className="quantity-picker">
                <h6>Add your products</h6>
                <button className="btn btn-sm btn-info">+</button>
                <label className="value">1</label>
                <button className="btn btn-sm btn-info">-</button>
            </div>
         );
    }
}
 
export default QuantityPicker;