import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import CandlestickChartOutlinedIcon from "@mui/icons-material/CandlestickChartOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ShareIcon from "@mui/icons-material/Share";
import ArticleIcon from "@mui/icons-material/Article";
import PieChartIcon from "@mui/icons-material/PieChart";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function LeftContainer() {
  return (
    <div className="w-[20%] flex flex-col bg-black text-white pl-2 text-sm mt-2">
      <div className="flex flex-row justify-between m-2 ml-3 text-center text-white">
        <div className="flex flex-row">
          <span className="rounded-full bg-blue-500 w-6 h-6 m-2 p-[2px] text-center font-bold">
            N
          </span>
          <h2 className="font-semibold text-xl mt-[6px]">Name</h2>
        </div>
        <i class="fa-solid fa-arrow-left-long mt-5 mr-6 fa-lg"></i>
      </div>

      <div className="space-y-3 cursor-pointer mt-4 pl-6 h-[45%] text-[#808191]">
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-1">
          <span>
            <GridViewIcon className="mr-4" /> Home
          </span>
        </div>
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-2">
          <AssessmentOutlinedIcon className="mr-4" />
          <span>Section 1</span>
        </div>
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-2">
          <CandlestickChartOutlinedIcon className="mr-4" />
          <span>Section 2</span>
        </div>
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-2">
          <i class="fa-solid fa-chart-line mr-4 fa-lg"></i>
          <span>Section 3</span>
        </div>
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-2">
          <PaidOutlinedIcon className="mr-4" />
          <span>Section 4</span>
        </div>
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-2">
          <i class="fa-solid fa-coins mr-4 fa-lg"></i>

          <span>Section 5</span>
        </div>
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-2">
          <PieChartIcon className="mr-4" />
          <span>Section 6</span>
        </div>
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-2">
          <SignalCellularAltIcon className="mr-4" />
          <span>Section 7</span>
        </div>
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-2">
          <ShareIcon className="mr-4" />
          <span>Section 8</span>
        </div>
        <div className="hover:text-white hover:bg-[#353945] hover:rounded-xl hover:pl-3 hover:mr-3 hover:py-2">
          <ArticleIcon className="mr-4" />
          <span>Documentation</span>
        </div>
      </div>

      <div className="ml-4 mt-[30vh]">
        <div className="flex flex-row justify-start">
          <button className="flex flex-row items-center px-3 bg-[#353945] font-semibold rounded-lg">
            <h2 className="rounded-full bg-blue-600 w-5 h-5 mr-2  text-[10px]">
              N
            </h2>{" "}
            $0.90
          </button>
          <button className="px-3 py-2 ml-2 bg-[#A3E3FF] text-blue-700 font-bold rounded-lg">
            Buy $XYZ
          </button>
        </div>
        <div className="flex flex-row items-center mt-3 text-[#808191]">
          <LanguageIcon />
          <div className="bg-[#353945] rounded-xl flex flex-row items-center ml-2 px-1">
            <DarkModeIcon />
            <div className="bg-blue-400 rounded-full w-4 h-4 ml-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
