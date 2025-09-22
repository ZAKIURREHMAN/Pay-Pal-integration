import React, { useState } from "react";
import {
  upperCaseLetter,
  lowerCaseLetter,
  numbers,
  specialChars,
} from "../constant/letters";
import { add,addSelector } from "../redux/slice/AddNumber";
import { useDispatch,useSelector } from "react-redux";


function Password() {
  const [currentRange, setCurrentRange] = useState(8);
  const [selectBox,setSelectBox] = useState([])
  const dispatch = useDispatch()
  const numberSelector = useSelector(addSelector)

  console.log(numberSelector)



  const [checkedData, setCheckedData] = useState([
    {
      id: 1,
      name: "upperCase",
      checked: false,
    },
    {
      id: 2,
      name: "lowCase",
      checked: false,
    },
    {
      id: 3,
      name: "number",
      checked: false,
    },
    {
      id: 4,
      name: "specialLetter",
      checked: false,
    },
  ]);

  const getRange = (e) => {
    let value = e.target.value;
    setCurrentRange(value);
  };

  const changeChecked = (e, index) => {
    for (let i = 0; i < checkedData.length; i++) {
      if (checkedData[i].id === index) {
        setCurrentRange((checkedData[i].checked = true));
      }
    }
  };

  const generatePassword = () => {


    const selectedItems = checkedData.filter((i)=>i.checked == true )

    for(let i = 0;i<selectedItems.length;i++){
      const value = selectedItems[i].name

      setSelectBox((pre)=>[...pre,value])




    }


    const randomData = Math.ceil(Math.random()*100)






  };

  return (
    <div className=" h-screen bg-gradient-to-tl from-red-700 via-green-700 to-red-500 flex justify-center items-center ">
      <div className=" h-[500px] w-[500px] border-2 bg-[url(/images/weather.jpeg)] bg-cover ">
        <div className=" border-2 border-green-700 flex ">
          <input
            type="range"
            name="passwordLength"
            id="passwordLength"
            value={currentRange}
            className=" w-full "
            onChange={(e) => getRange(e)}
          />
          <div className=" text-white ">{currentRange}</div>
        </div>

        <div className=" flex text-white mt-5 ">
          <div className=" w-[50%] flex ">
            <input
              type="checkbox"
              name="upperCase"
              id="upperCase"
              onClick={(e) => changeChecked(e, 1)}
            />
            <div>Include Upper case Letter </div>
          </div>

          <div className=" w-[50%] flex ">
            <input
              type="checkbox"
              name="lowCase"
              id="lowCase"
              onClick={(e) => changeChecked(e, 2)}
            />
            <div> Include Low case Letter </div>
          </div>
        </div>
        <div className=" flex text-white mt-5 ">
          <div className=" w-[50%] flex ">
            <input
              type="checkbox"
              name="number"
              id="number"
              onClick={(e) => changeChecked(e, 3)}
            />
            <div>Number are include </div>
          </div>

          <div className=" w-[50%] flex ">
            <input
              type="checkbox"
              name="specialLetter"
              id="specialLetter"
              onClick={(e) => changeChecked(e, 4)}
            />
            <div>Special Letter Include</div>
          </div>
        </div>

        <div className=" text-center mt-5 text-white ">
          <button
            className=" border-2 bg-amber-500 cursor-pointer"
            onClick={generatePassword}
          >
            {" "}
            Password Generate
          </button>
        </div>
      </div>

    </div>
  );
}

export default Password;
