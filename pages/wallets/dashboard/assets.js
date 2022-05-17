import { DashboardLayout } from '../../../components/layouts/DashboardLayout';
import { useState } from 'react';

AssetsPage.getLayout = (page) => {
    return <DashboardLayout>{page}</DashboardLayout>;
};

export default function AssetsPage() {
    const currencies = [
        {
            name: "eth",
            full: "Ether - PoS",
        },
        {
            name: "usdc",
            full: "USD Coin",
        },
        {
            name: "usdt",
            full: "Tether USD",
        },
        {
            name: "dai",
            full: "Dai - PoS",
        },
        {
            name: "aave",
            full: "Aave",
        },
        {
            name: "link",
            full: "ChainLink Token",
        },
        {
            name: "wbtc",
            full: "Wrapped BTC",
        },
        {
            name: "uni",
            full: "Uniswap",
        },
        {
            name: "sushi",
            full: "SushiToken",
        },
        {
            name: "quick",
            full: "Quickswap",
        },
        {
            name: "ghst",
            full: "Aavegotchi GHST Token",
        },
        {
            name: "tel",
            full: "Telcoin",
        },
        {
            name: "bal",
            full: "Balancer",
        },
        {
            name: "busd",
            full: "Binance USD",
        },
        {
            name: "dg",
            full: "Decentral Games",
        },
        {
            name: "mana",
            full: "Decentraland MANA",
        },
        {
            name: "matic",
            full: "Matic Token",
            plasma: true
        },
    ];
    const [page, setPage] = useState(1);
    const [perpage, setPerPage] = useState(10);
    const total = currencies.length / perpage;
    const [display, setDisplay] = useState(currencies);

    const search = (event) => {
        const str = event.target.value;
        setPage(1);
        const res = currencies.filter(currency => currency.name.indexOf(str) != -1);
        setDisplay(res);
    }

    const setPageCount = (event) => {
        setPerPage(event.target.value);
    }

    return <div className="bg-white text-black">
        <div className="py-14 px-6" style={{background: 'radial-gradient(66.32% 66.32% at 54.13% 113.95%,rgba(108,38,255,.2) 0,rgba(242,89,255,0) 100%),linear-gradient(211.99deg,rgba(65,157,241,.2) -4.17%,rgba(45,143,234,0) 68.7%),radial-gradient(100% 100% at 28.65% 0,#d5bdf5 0,rgba(250,247,254,0) 100%)'}}>
            <div className="grid lg:grid-cols-2 max-w-6xl m-auto grid-cols-1">
                <div>
                    <div className="text-slate-500">POLYGON MAINNET</div>
                    <h1 className="text-5xl font-bold">$0</h1>
                    <div className="mt-5 flex">
                        <button class="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg mr-2 flex">
                            <span><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg></span> Receive
                        </button>
                        <button class="bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg flex">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                            Send
                        </button>
                    </div>
                </div>
                <div className="flex justify-start mt-5 lg:justify-end">
                    <div className="bg-white bg-opacity-50 p-6 rounded-lg w-full lg:w-96">
                        <button class="bg-black text-white font-semibold py-2 px-4 rounded-lg mr-2 flex w-full justify-center">
                            How it works
                        </button>
                        <button class="mt-5 bg-black text-white font-semibold py-2 px-4 rounded-lg mr-2 flex w-full justify-center">
                            Move funds from Ethereum to Polygon 
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-5 px-10">
            <div className="grid grid-cols-2 max-w-6xl m-auto px-10">
                <div class="flex items-center">
                    <span className="font-semibold text-base">Balances on Polygon mainnet</span>
                    <div class="relative ml-3">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-hidden focus:border-fuchsia-400" placeholder="Search" required onChange={search}/>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <div class="flex items-center">
                        <div class="flex items-center h-5">
                            <input id="params" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                        </div>
                        <label for="params" class="ml-2">Params Only</label>
                    </div>
                    <div class="flex items-center ml-3">
                        <div class="flex items-center h-5">
                            <input id="hidezero" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                        </div>
                        <label for="hidezero" class="ml-2">Hide zero balances</label>
                    </div>
                    <span className="ml-5">Tokens: <a href="#" className="text-fuchsia-400">Default Polygon List</a></span>
                </div>
            </div>
        </div>
        <div className="max-w-6xl m-auto">
            <div className="mt-5">
                <div className="grid grid-cols-2 text-gray-300 px-10 lg:grid-cols-3">
                    <div>Name</div>
                    <div className="flex justify-end lg:justify-start">Balance</div>
                    <div className="hidden lg:block">Actions</div>
                </div>
                <div>
                    {
                        display.slice((page - 1) * perpage, page * perpage).map((item, index) => <div className="group grid grid-cols-2 lg:grid-cols-3 px-10 hover:bg-slate-100 rounded-2xl" key={"currency" + index}>
                            <div className="my-4 flex items-center">
                                {item.name=="ghst" ? <div class="rounded-full w-8 h-8 flex items-center justify-center bg-slate-300">G</div>: <img className="w-8 h-8" src={"/images/currency/" + item.name+".svg"} />}
                                <div className="ml-3">
                                    <span className="uppercase font-semibold text-sm">{item.name}</span> . <span className="text-slate-500 translate-y-16 text-xs	" >{item.full}</span>
                                    {item.plasma && <span class="bg-sky-100 text-teal-600 text-center px-2 text-xs rounded ml-3">PLASMA</span>}
                                </div>
                            </div>
                            <div className="flex items-center justify-end lg:justify-start">
                                <div className="ml-3"><span className="uppercase font-semibold text-sm">0.0000</span> . <span className="text-slate-500 translate-y-16 text-xs	" >$0.00</span></div>
                            </div>
                            <div className="flex items-center hidden lg:flex">
                                <button class="bg-white hover:bg-gray-100 py-2 px-4 group-hover:border group-hover:border-gray-400 rounded text-xs">
                                    Deposit
                                </button>
                                <button class="bg-white hover:bg-gray-100 py-2 px-4 group-hover:border group-hover:border-gray-400 rounded ml-2 text-xs">
                                    Withdraw
                                </button>
                                <button class="bg-white hover:bg-gray-100 py-2 px-4 group-hover:border group-hover:border-gray-400 rounded ml-2 text-xs">
                                    Send
                                </button>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className="px-10 mt-3 flex">
                <ul className="inline-flex items-center">
                    <li>
                        <a onClick={() => {if(page > 1) setPage(page - 1)}} className="block p-2 ml-0 leading-tight text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                            <span className="sr-only">Previous</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </li>
                    {
                        [...Array(Math.ceil(display.length / perpage))].map((val, index) => (
                            <li className="ml-2" key={"pagination" + index}>
                                <button href="#" className={"rounded-lg p-2 w-10 h-10 leading-tight bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"+(index + 1 == page ? " bg-violet-600 text-white":"")} onClick={() => setPage(index + 1)}>
                                    {index + 1}
                                </button>
                            </li>
                        ))
                    }
                    <li className="ml-2">
                        <a onClick={() => {if(page < total) setPage(page + 1)}} class="rounded-lg block p-2 leading-tight text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                            <span className="sr-only">Next</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                    </li>
                </ul>
                <div className="flex items-center justify-end text-slate-500 w-full">
                    <span>Showing of {display.length} | Show </span>
                    <select class="form-select appearance-none
                        block
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding bg-no-repeat
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        ml-3
                        w-20
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example" onChange={setPageCount}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>
            </div>
        </div>
    </div>;
}
