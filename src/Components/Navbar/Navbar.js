import React, { useEffect, useState } from 'react';
import logo from '../../assets/Capture.PNG'
import './Navbar.css'

const Navbar = () => {
    const [datas, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/datas')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const [filter, setFilter] = useState('');
    const searchText = (event) => {
        setFilter(event.target.value);
    }
    // console.warn(filter)
    let dataSearch = datas.filter(item => {
        return Object.keys(item).some(key =>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    })
    return (
        <div style={{ 'width': '90%' }} class="navbar py-12 px-12">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li tabindex="0">
                            <a class="justify-between">
                                INR
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>INR</a></li>
                            </ul>
                        </li>
                        <li tabindex="0">
                            <a class="justify-between">
                                BTC
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <img style={{ 'width': '55%' }} src={logo}></img>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li style={{ 'color': 'white' }} className='list-style' tabindex="0">
                        <a>
                            INR
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul style={{ 'position': 'absolute', 'width': '150%' }} class="p-2 bg-white">
                            <li className='text-black'><a>INR</a></li>
                        </ul>
                    </li>
                    <li style={{ 'color': 'white' }} className='list-style' tabindex="0">
                        <a>
                            BTC
                            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul value={filter}
                            onChange={searchText.bind(this)} style={{ 'position': 'absolute', 'width': '150%' }} class="p-2 bg-white">
                            <li><a>BTC</a></li>
                            <li><a>ETH</a></li>
                            <li><a>USDT</a></li>
                            <li><a>XRP</a></li>
                            <li><a>TRX</a></li>
                            <li><a>DASH</a></li>
                            <li><a>ZEC</a></li>
                            <li><a>XEM</a></li>
                            <li><a>IOST</a></li>
                            <li><a>WIN</a></li>
                            <li><a>BTT</a></li>
                            <li><a>WRX</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <button class="btn btn-wide btn-style text-white">Connect Telegram</button>
            </div>
        </div>
    );
};

export default Navbar;