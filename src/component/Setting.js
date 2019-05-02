import React, {Component} from 'react';
import './Setting.css';
class Setting extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="header-title flx jst-bt">
                    <div className="col">
                        <h2>settings</h2>
                    </div>
                    <div className="col flx jst-end">
                        <button type="submit" className="btn-primary">save</button>
                    </div>
                </div>
                <div className="card">
                    <div className="frame-title">
                        <h2>Branding</h2>
                    </div>
                    <div className="cols">
                        <div className="col is-6">
                            <div className="frame-title">
                                Site Logo
                            </div>
                            <div className="frame-content">
                                <label className="file">
                                    <input type="file" id="file" name="file"/>
                                </label>
                            </div>
                        </div>
                        <div className="col is-6">
                            <div className="frame-title">
                                Site colours
                            </div>
                            <div className="frame-content cols">
                                <div className="col">
                                    <label className="prm-color">Primary Color</label>
                                    <input className="bg-prm" type="button" name="prm-color"/>
                                </div>
                                <div className="col">
                                    <label className="snd-color">Primary Color</label>
                                    <input className={"bg-snd"} type="button" name="snd-color"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"frame-title"}>
                            <h2>
                            Show/Hide Options
                            </h2>
                        </div>
                        <div className={"frame-content"}>

                            <ul>
                                <li>
                                    <label className="check-container">Hide bidder names
                                        <input type="checkbox"/><span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="check-container">Hide MMR
                                        <input type="checkbox"/><span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="check-container">Hide MMR values
                                        <input type="checkbox"/><span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="check-container">Hide selling price of lost auctions
                                        <input type="checkbox"/><span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="check-container">Prevent Deals from creating sales representatives
                                        <input type="checkbox"/><span className="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label className="check-container">Allow notification of dealers that their purchases are ready for pickup
                                        <input type="checkbox"/><span className="checkmark"></span>
                                    </label>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"frame-title"}>
                            <h2>
                            Inventory Column Display
                            </h2>
                        </div>
                        <div className={"frame-content "}>
                            <ul className={"flx cols"}>

                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Vehicle<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>VIN<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Status<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Event Name<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Template Name<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Color<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Times<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Pending Offer<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Last Offered<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Odometer<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Auto Grade<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>City<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Body Type<span className={"checkmark"}></span></label></li>
                            </ul>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"frame-title"}>
                            <h2>
                            Inventory Filters
                            </h2>
                        </div>
                        <div className={"frame-content"}>
                            <ul className={"flx cols"}>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Year<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Make<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Model<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Trim<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>VIN<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Status<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Event<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Colour<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Auto Grade<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>City<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Country<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Body Type<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Work Oder<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Auction Location<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Event Template<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Event ID<span className={"checkmark"}></span></label></li>
                                <li className={"list"}><label className={"check-container"}><input name={""} type={"checkbox"}/>Legal Sale Date<span className={"checkmark"}></span></label></li>
                            </ul>
                        </div>
                    </div>

                    <div className={""}>
                        <div className={"frame-title"}>
                            <h2>
                            Details
                            </h2>
                        </div>
                        <div className={"frame-content"}>
                            <div className={""}>
                                <label>CarProof API Key</label>
                                <input type={"text"}/>
                            </div>
                        </div>
                    </div>

                    <div className={""}>
                        <div className={"frame-title"}>
                            <h2>
                            Notification Preferences
                            </h2>
                        </div>
                        <div className={"frame-content"}>
                            <table className="fl-table">
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Email</th>
                                    <th>Text/SMS</th>
                                    <th>In-App</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Vehicle has met reserve price</td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                </tr>
                                <tr>
                                    <td>Event expires soon</td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>

                                </tr>
                                <tr>
                                    <td>Event has completed</td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>

                                </tr>
                                <tr>
                                    <td>Vehicle has pendng IF bids after envet</td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>

                                </tr>
                                <tr>
                                    <td>"Buy Now" selected for vehicle</td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>

                                </tr>
                                <tr>
                                    <td>counter offer has been accepted on vehicle</td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>

                                </tr>
                                <tr>
                                    <td>counter offer has been rejected on vehicle</td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>

                                </tr>
                                <tr>
                                    <td>counter offer has been countered on vehicle</td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                    <td ><label className={"check-container"}><input name={""} type={"checkbox"}/><span className={"checkmark"}></span></label></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;