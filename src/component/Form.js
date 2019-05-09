import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
    render() {
        return (
            <div className="wrap">
                <div className={"cols"}>
                    <div className={"flx jst-end is-12"}>
                        <div className={"tabs is-7"}>
                            <ul>
                                <li><a href={""} >Inventory</a></li>
                                <li className={"active"}><a href={""} >Live</a> <span className={"arrow-down"}></span></li>
                                <li><a href={""} >Sold</a></li>
                                <li><a href={""} >Pending Offers</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className={"flx col is-12 form-wrap"}>
                        <div className={"sidebar "}>
                            <div className={"filters"}>
                                <p>Filters</p>
                                <a href="">Reset</a>
                            </div>
                            <div className={"flx sort-lists"}>
                                <div className={"sort-list"} id={""}>
                                    2009-2018
                                    <span>X</span>
                                </div>
                                <div className={"sort-list"} id={""}>
                                    0-100,000 kms
                                    <span>X</span>
                                </div>
                                <div className={"sort-list"} id={""}>
                                    Used
                                    <span>X</span>
                                </div>
                                <div className={"sort-list"} id={""}>
                                    Chevrolet
                                    <span>X</span>
                                </div>
                                <div className={"sort-list"} id={""}>
                                    Mazda
                                    <span>X</span>
                                </div>
                            </div>
                            <div className={"filter-list"}>
                                <ul>
                                    <li className={"flt-list dropdown"}>Year<span></span>
                                    <ul className={"dr-trigger"}>
                                        <li>
                                            <input type="text" id="amount" className={"amt"}/>
                                            <div id="year-range"></div>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className={"flt-list dropdown"}>Odometer<span></span>
                                        <ul className={"dr-trigger"}>
                                            <li>
                                                <input type="text" id="odo-amount" className={"amt"}/>
                                                <div id="odo-range"></div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className={"flt-list dropdown"}>Condition<span className={"dropdown"}></span>
                                        <ul className={"dr-trigger cols"}>
                                            <li className={"col"}> <input type="radio" name="gender" value="male" /> New</li>
                                            <li className={"col"}><input type="radio" name="gender" value="female" /> Used</li>
                                        </ul>
                                    </li>
                                    <li className={"flt-list dropdown"}>Make<span className={"dropdown"}></span></li>
                                    <li className={"flt-list dropdown"}>Model<span className={"dropdown"}></span></li>
                                    <li className={"flt-list dropdown"}>Trim<span className={"dropdown"}></span></li>
                                    <li className={"flt-list dropdown"}>VIN<span className={"dropdown"}></span></li>
                                    <li className={"flt-list dropdown"}>Status<span className={"dropdown"}></span></li>
                                    <li className={"flt-list dropdown"}>Colour<span className={"dropdown"}></span></li>
                                    <li className={"flt-list dropdown"}>Event Name<span className={"dropdown"}></span></li>
                                    <li className={"flt-list dropdown"}>City<span className={"dropdown"}></span></li>
                                    <li className={"flt-list dropdown"}>Auto Grade<span className={"dropdown"}></span></li>
                                    <li className={"flt-list dropdown"}>CR Score<span className={"dropdown"}></span>
                                        <ul className={"dr-trigger"}>
                                            <li>
                                                <input type="text" id="cr-amount" className={"amt"}/>
                                                <div id="cr-range"></div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"main-container is-7"}>
                            <div className={"prm-btn"}>
                                <ul className={"is-6"}>
                                    <li><a href={""} >Download CSV Template</a></li>
                                    <li ><a href={""} >Upload CSV</a> </li>
                                    <li><a href={""} >Create Event</a></li>
                                    <li><a href={""} >Pending Offers</a></li>
                                </ul>
                            </div>
                            <div className={"reports"}>
                                <table className="fl-table">
                                    <thead>
                                    <tr>
                                        <th>
                                            <label className={"check-container"}>Vehicle<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                            <span className={"arrow-up-down"}></span>
                                        </th>
                                        <th>VIN<span className={"arrow-up-down"}></span></th>
                                        <th>Status<span className={"arrow-up-down"}></span></th>
                                        <th>Event Name<span className={"arrow-up-down"}></span></th>
                                        <th>Color<span className={"arrow-up-down"}></span></th>
                                        <th>Reserve<span className={"arrow-up-down"}></span></th>
                                        <th>Leading Bid<span className={"arrow-up-down"}></span></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <label className={"check-container"}>2018 Dodge Durango GT<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                        </td>
                                        <td >1c4rdjdg9jc448116</td>
                                        <td >Live</td>
                                        <td >Tuesday Sale</td>
                                        <td >Black</td>
                                        <td >$30,000</td>
                                        <td >$31,500</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className={"check-container"}>2018 Dodge Durango GT<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                        </td>
                                        <td >1c4rdjdg9jc448116</td>
                                        <td >Live</td>
                                        <td >Tuesday Sale</td>
                                        <td >Black</td>
                                        <td >$30,000</td>
                                        <td >$31,500</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className={"check-container"}>2018 Dodge Durango GT<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                        </td>
                                        <td >1c4rdjdg9jc448116</td>
                                        <td >Live</td>
                                        <td >Tuesday Sale</td>
                                        <td >Black</td>
                                        <td >$30,000</td>
                                        <td >$31,500</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className={"check-container"}>2018 Dodge Durango GT<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                        </td>
                                        <td >1c4rdjdg9jc448116</td>
                                        <td >Live</td>
                                        <td >Tuesday Sale</td>
                                        <td >Black</td>
                                        <td >$30,000</td>
                                        <td >$31,500</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className={"check-container"}>2018 Dodge Durango GT<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                        </td>
                                        <td >1c4rdjdg9jc448116</td>
                                        <td >Live</td>
                                        <td >Tuesday Sale</td>
                                        <td >Black</td>
                                        <td >$30,000</td>
                                        <td >$31,500</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className={"check-container"}>2018 Dodge Durango GT<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                        </td>
                                        <td >1c4rdjdg9jc448116</td>
                                        <td >Live</td>
                                        <td >Tuesday Sale</td>
                                        <td >Black</td>
                                        <td >$30,000</td>
                                        <td >$31,500</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className={"check-container"}>2018 Dodge Durango GT<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                        </td>
                                        <td >1c4rdjdg9jc448116</td>
                                        <td >Live</td>
                                        <td >Tuesday Sale</td>
                                        <td >Black</td>
                                        <td >$30,000</td>
                                        <td >$31,500</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className={"check-container"}>2018 Dodge Durango GT<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                        </td>
                                        <td >1c4rdjdg9jc448116</td>
                                        <td >Live</td>
                                        <td >Tuesday Sale</td>
                                        <td >Black</td>
                                        <td >$30,000</td>
                                        <td >$31,500</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <label className={"check-container"}>2018 Dodge Durango GT<input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label>
                                        </td>
                                        <td >1c4rdjdg9jc448116</td>
                                        <td >Live</td>
                                        <td >Tuesday Sale</td>
                                        <td >Black</td>
                                        <td >$30,000</td>
                                        <td >$31,500</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;