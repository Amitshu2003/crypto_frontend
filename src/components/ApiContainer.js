import React from "react";

function ApiContainer({ data, id }) {
  return (
      <div className="flex flex-row mt-1 items-center justify-around bg-[#0E1014] rounded-xl p-2">
        <div className="flex flex-row">
          <img src={data[id].img} alt="" className="w-9 h-9 mt-2" />
          <div className="ml-2">
            <h2 className="font-medium">{data[id].asset}</h2>
            <div className="flex flex-row">
              <h2 className="text-slate-500 text-xs">{data[id].type}</h2>
              <button className="px-1 bg-slate-700 ml-2 text-xs rounded-lg flex flex-row items-center">
                <img src={data[id].chain.img} alt="" className="w-3 h-3 m-1" />

                <p className="text-[8px] pr-1">{data[id].chain.name}</p>
              </button>
            </div>
          </div>
        </div>
        <div >
          <h2 className="font-medium">{data[id].amount} BNB</h2>
          <h2 className="text-slate-500 text-xs">{data[id].state}</h2>
        </div>
        <div>
          <h2 className="font-medium">
            {data[id].user.slice(0, 5) +
              ".." +
              data[id].user.slice(
                data[id].user.length - 7,
                data[id].user.length
              )}
          </h2>
        </div>

        <div>
          <h2 className="font-medium text-center">
            {data[id].referral_earnings}.BNB
          </h2>
          <h2 className="text-slate-500 text-xs">
            View on BSC Scan
            <i class="fa-solid fa-arrow-up-right-from-square ml-2 text-[13px]"></i>
          </h2>
        </div>
      </div>
  );
}

export default ApiContainer;
