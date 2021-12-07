import React from 'react';
import './index.scss';
import { tableData } from '../../data/tableData';
export default function Table() {
    const [selectList, setSelectList] = React.useState([]);
    React.useEffect(() => {
        let list: any = tableData.map((value) => value.status).filter((value, index, _arr) => _arr.indexOf(value) == index);;
        setSelectList(list)
    }, [])
    return (
        <>
            <div className="row pt-2  align-items-center">
                <div className="col-6 headingText">292 Total Quotes Found</div>
                <div className="col-3">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text white-bg" id="addon-wrapping"><i className="bi bi-search"></i></span>
                        <input type="text" className="form-control headingText" placeholder="Search all Quotes"></input>
                    </div>
                </div>
                <div className="col-3">
                    <select className="form-select text-center headingText" aria-label="Default select example">
                        <option defaultValue="">Show All Quotes</option>
                        {
                            selectList?.map((item, index) => (
                                <option value={item}>{item}</option>
                            )
                            )
                        }
                    </select>
                </div>
            </div>

            <div className="row pt-2">
                <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr className="customTable">
                                <td scope="col">QUOTE NAME</td>
                                <td scope="col">MAIL ID</td>
                                <td scope="col">NUMBER</td>
                                <td scope="col">REQUEST DATE</td>
                                <td scope="col">UPLOADS</td>
                                <td scope="col">STATUS</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableData.map((tableRow, index) => (
                                    <tr className="customTableBody" key={index}>
                                        <td className="align-middle">
                                            <input className="form-check-input checkboxCss" type="checkbox" value="" id={'flexCheckDefault' + index}></input>
                                            <label className="form-check-label bold" htmlFor={'flexCheckDefault' + index} style={{ paddingLeft: '0.5rem' }}>
                                                {tableRow['quote']}
                                            </label>
                                        </td>
                                        <td className="align-middle"> {tableRow['email']}</td>
                                        <td className="align-middle"> {tableRow['phone']}</td>
                                        <td className="align-middle"> {tableRow['date']}</td>
                                        <td className="align-middle"> {tableRow['uploads']}</td>
                                        <td className="align-middle">
                                            <div className={"statusBtn red " + tableRow['status']}><span className={"dot " + tableRow['status']}></span>  {tableRow['status']}</div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
