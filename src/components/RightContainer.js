import React from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function RightContainer() {
  return (
    <div className="w-[30%] flex flex-col  text-white">
      <div className="flex flex-row justify-evenly mt-4">
        <button className=" bg-[#353945] rounded-lg h-8 flex flex-row mt-2 px-2">
            <img src="https://cryptologos.cc/logos/avalanche-avax-logo.png" alt="" className="w-4 h-4 my-auto" />
          <h2 className="text-sm ml-1 my-auto">Avalanche</h2>
          <i class="fa-solid fa-angle-down ml-3 text-[11px] mt-3"></i>
        </button>

        <button className="px-5 h-8 mt-2 border border-blue-600 text-sm rounded-lg flex flex-row">
          <i class="fa-solid fa-wallet text-blue-600 my-auto "></i>
          <h2 className="ml-2 my-auto">0XF6...1353</h2>
          <i class="fa-solid fa-angle-down text-[11px] ml-4 mt-[13px]"></i>
        </button>
      </div>

      <div className="flex flex-row m-5 p-2 items-center">
        <i className="fa-solid fa-arrow-left-long text-sm"></i>
        <h2 className="text-lg ml-3">Custom link</h2>
      </div>

      <h2 className="ml-8 text-sm">https://testnet.xyz.xyz/trade?ref=</h2>

      <input
        type="text"
        placeholder="ENTER"
        className="px-4 py-2  m-6 rounded-lg bg-[#242731] text-sm outline-none"
      />

      <div className="inline-flex justify-center mt-2 text-sm ">
        <button className="px-4 bg-blue-700 h-10 rounded-lg">
          <i class="fa-solid fa-square-arrow-up-right"></i>
          <b className="ml-2">Custom link</b>
        </button>
        <button className="px-3 ml-2 border-[0.1px] h-10 border-slate-600 hover:bg-blue-500 rounded-lg">
        <ExitToAppIcon style={{fontSize:"20px"}}/>
          <b className="m-2 my-auto">Cancel</b>
        </button>
      </div>
    </div>
  );
}

export default RightContainer;
