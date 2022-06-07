import React, { useEffect, useState } from 'react';
import './Details.css'

const Details = () => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/datas')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    return (
        <div className="px-10">
            {/* <h2 className="text-2xl">My Orders:{orders.length}</h2> */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Last</th>
                            <th>Buy / Sell Price</th>
                            <th>volume</th>
                            <th>base_unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{1}</td>
                                    <td>{data.btcinr.name}</td>
                                    <td>₹ {data.btcinr.last}</td>
                                    <td>₹ {data.btcinr.buy} / ₹ {data.btcinr.sell}</td>
                                    <td>{data.btcinr.volume}</td>
                                    <td>{data.btcinr.base_unit}</td>
                                </tr>)
                        }
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{2}</td>
                                    <td>{data.xrpinr.name}</td>
                                    <td>₹ {data.xrpinr.last}</td>
                                    <td>₹ {data.xrpinr.buy} / ₹ {data.xrpinr.sell}</td>
                                    <td>{data.xrpinr.volume}</td>
                                    <td>{data.xrpinr.base_unit}</td>
                                </tr>)
                        }
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{3}</td>
                                    <td>{data.ethinr.name}</td>
                                    <td>₹ {data.ethinr.last}</td>
                                    <td>₹ {data.ethinr.buy} / ₹ {data.ethinr.sell}</td>
                                    <td>{data.ethinr.volume}</td>
                                    <td>{data.ethinr.base_unit}</td>
                                </tr>)
                        }
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{4}</td>
                                    <td>{data.trxinr.name}</td>
                                    <td>₹ {data.trxinr.last}</td>
                                    <td>₹ {data.trxinr.buy} / ₹ {data.trxinr.sell}</td>
                                    <td>{data.trxinr.volume}</td>
                                    <td>{data.trxinr.base_unit}</td>
                                </tr>)
                        }
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{5}</td>
                                    <td>{data.xrpinr.name}</td>
                                    <td>₹ {data.xrpinr.last}</td>
                                    <td>₹ {data.xrpinr.buy} / ₹ {data.xrpinr.sell}</td>
                                    <td>{data.xrpinr.volume}</td>
                                    <td>{data.xrpinr.base_unit}</td>
                                </tr>)
                        }
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{6}</td>
                                    <td>{data.eosinr.name}</td>
                                    <td>₹ {data.eosinr.last}</td>
                                    <td>₹ {data.eosinr.buy} / ₹ {data.eosinr.sell}</td>
                                    <td>{data.eosinr.volume}</td>
                                    <td>{data.eosinr.base_unit}</td>
                                </tr>)
                        }
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{7}</td>
                                    <td>{data.zilinr.name}</td>
                                    <td>₹ {data.zilinr.last}</td>
                                    <td>₹ {data.zilinr.buy} / ₹ {data.zilinr.sell}</td>
                                    <td>{data.zilinr.volume}</td>
                                    <td>{data.zilinr.base_unit}</td>
                                </tr>)
                        }
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{8}</td>
                                    <td>{data.batinr.name}</td>
                                    <td>₹ {data.batinr.last}</td>
                                    <td>₹ {data.batinr.buy} / ₹ {data.batinr.sell}</td>
                                    <td>{data.batinr.volume}</td>
                                    <td>{data.batinr.base_unit}</td>
                                </tr>)
                        }
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{9}</td>
                                    <td>{data.zrxinr.name}</td>
                                    <td>₹ {data.zrxinr.last}</td>
                                    <td>₹ {data.zrxinr.buy} / ₹ {data.zrxinr.sell}</td>
                                    <td>{data.zrxinr.volume}</td>
                                    <td>{data.zrxinr.base_unit}</td>
                                </tr>)
                        }
                        {
                            datas.map((data) =>
                                <tr>
                                    <td>{10}</td>
                                    <td>{data.reqinr.name}</td>
                                    <td>₹ {data.reqinr.last}</td>
                                    <td>₹ {data.reqinr.buy} / ₹ {data.reqinr.sell}</td>
                                    <td>{data.reqinr.volume}</td>
                                    <td>{data.reqinr.base_unit}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Details;