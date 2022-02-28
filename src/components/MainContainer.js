import React, { useEffect, useState } from "react";
import ApiContainer from "./ApiContainer";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function MainContainer() {
  const [id, setid] = useState(0);
  const [data, setData] = useState([]);
  function firstTab() {
    setid(0);
    document.getElementById("first").style.color = "white";
    document.getElementById("second").style.color = "#808191";
    document.getElementById("first").style.borderBottom = "2px solid blue";
    document.getElementById("second").style.border = "none";
  }
  function secondTab() {
    setid(1);
    document.getElementById("second").style.color = "white";
    document.getElementById("first").style.color = "#808191";
    document.getElementById("second").style.borderBottom = "2px solid blue";
    document.getElementById("first").style.border = "none";
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
      )
        .then((res) => {
          if (res.ok) {
            // console.log(res.data);
            return res.json();
          }
          throw res;
        })
        .then((data) => {
          setData(data.data);
        });
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="w-[50%] border border-l-slate-800 border-r-slate-800 border-t-0 border-b-0 flex flex-col px-8 text-white">
      <div className="flex flex-row justify-between mt-1 ml-4">
        <div className=" border-b-2 border-blue-700">
          <h2 className="font-semibold text-lg pt-4">Section</h2>
        </div>
        <div>
          <button className="px-3 py-1 ml-2 mt-3 inline-flex bg-[#191B20] justify-center rounded-lg">
            <i class="fa-solid fa-wallet text-blue-600 my-auto ml-2"></i>
            <h2 className="ml-3 mt-1 text-sm">0.2 $XYZ</h2>
            <button className="px-4 py-[2px] ml-6 mt-1 bg-[#A3E3FF] text-sm text-blue-700 font-semibold  rounded-md">
              Tier 1
            </button>
          </button>
        </div>
      </div>



      <div className="flex flex-row items-center  bg-[#ABE8FF] m-2 text-blue-900 rounded-lg px-2 py-3 h-20 mt-7 ">
        <div className="ml-1">
          <h2 className="text-[12px] font-semibold">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <button className="text-xs bg-white mt-2 text-blue-900 px-5 py-[2px] rounded-lg font-semibold ">
            Tutorial
          </button>
        </div>

        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-database-3981433-3297136.png"
          alt="logo"
          className="w-24 h-24 relative bottom-[-15px] left-5"
        ></img>

        <div className="w-5 h-5 rounded-full p-1 bg-white flex flex-row justify-center relative bottom-9 left-5 text-[10px]">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>



      <div className="h-32 flex flex-row px-4 my-2 py-2 justify-between bg-[#191B20]  rounded-xl text-sm">
        <div className="p-2">
          <h2 className="text-lg">Your rewards</h2>
          <h1 className="text-2xl font-semibold my-2">$ 0.26231428</h1>
          <div className="mt-3 font-medium text-xs">
            <span className="rounded-xl bg-[#353945] px-2 py-1 ">$40 AVAX</span>
            <span className="rounded-xl bg-[#353945] mx-2 px-2 py-1 ">
              $10 BNB
            </span>
            <span className="rounded-xl bg-[#353945] px-2 py-1">
              $210 BTC
            </span>
          </div>
        </div>

        <button className="my-auto text-xs mr-2 px-4 py-2 bg-blue-700 rounded-lg font-semibold">
          <i class="fa-solid fa-square-arrow-up-right mr-2"></i>
          Custom link
        </button>
      </div>

      <div className="flex flex-row justify-center">
        <div className="bg-[#14161A] w-[50%] px-4 py-5 rounded-xl">
        <div className="flex flex-row items-center">
          <MonetizationOnIcon className="text-[#B1A9E1]"/>
          <span className="text-xl font-semibold ml-2">12.5% of fee</span>
          </div>
          <h2 className="my-2 text-slate-500 text-sm">Your Referral Link for xyz</h2>

          <div className="bg-[#242731] rounded-lg font-semibold flex flex-row justify-between items-center text-sm p-3">
            <h2>https://unityexchange.design</h2>
            <ContentCopyIcon className="ml-6" style={{fontSize:"16px"}}/>
          </div>
        </div>
        <div className="bg-[#14161A] w-[50%] px-4 py-5 ml-4 rounded-xl">
          <div className="flex flex-row items-center">
          <MonetizationOnIcon className="text-[#B1A9E1]"/>
          <span className="text-xl font-semibold ml-2">12.5% of fee</span>
          </div>
          <h2 className="my-2 text-slate-500 text-sm">Your Referral Link for xyz</h2>

          <div className="bg-[#242731] rounded-lg font-semibold flex flex-row justify-between items-center text-sm p-3">
            <h2>https://unityexchange.design</h2>
            <ContentCopyIcon className="ml-6" style={{fontSize:"16px"}}/>
          </div>
        </div>
      </div>

      <div className="inline text-lg m-2 mt-5 space-x-6 cursor-pointer">
        <span
          onClick={firstTab}
          id="first"
          style={{ borderBottom: "2px solid blue" }}
        >
          First Tab
        </span>
        <span onClick={secondTab} id="second" style={{ color: "#808191" }}>
          Second Tab
        </span>
      </div>

      <div className="flex flex-row  justify-between  bg-[#191B20] rounded-lg p-2 text-slate-400 mt-2 text-xs">
        <div className="ml-14">ASSET</div>
        <div className="ml-8">AMOUNT</div>
        <div className="">USER ACCOUNT</div>
        <div className="mr-6">REFERRAL EARNING</div>
      </div>

      {data?.length > 0 ? <ApiContainer data={data} id={id} /> : ""}
    </div>
  );
}

export default MainContainer;
