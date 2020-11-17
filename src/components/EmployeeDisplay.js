import React, { useState, useEffect } from "react";
import { results } from "../employees.json"
import EmployeeCard from "./EmployeeCard";

function EmployeeDisplay(props){
//   const [searchState, setSearchState] = useState(props);
  const [employeeDataArray, setEmployeeDataArray] = useState(results);

  //used by search
  function sortEmployeesByName(){
        //this value is modified and then run in setEmployeeDataArray
        let tempArray = results;

        if(props.name === "first-name"){
            tempArray = tempArray.filter(entry => {
                let upperProps = props.first.toUpperCase();
                let upperEntry = entry.name.first.toUpperCase();

                return upperEntry.includes(upperProps)
            });

            tempArray.sort((a, b) => {
                //sort ascending
                if(props.sort){
                    if(a.name.first > b.name.first){
                        return 1;
                    }else{
                        return -1;
                    }
                }else{
                    if(a.name.first < b.name.first){
                        return 1;
                    }else{
                        return -1;
                    }
                }
            });
        }else if(props.name === "last-name" || props.name === "all-name"){
            if(props.name === "last-name"){
                tempArray = tempArray.filter(entry => {
                    let upperProps = props.last.toUpperCase();
                    let upperEntry = entry.name.last.toUpperCase();

                    return upperEntry.includes(upperProps)
                });
            }

            tempArray.sort((a, b) => {
                //sort ascending
                if(props.sort == true){
                    if(a.name.last > b.name.last){
                        return 1;
                    }else{
                        return -1;
                    }
                }else{
                    if(a.name.last < b.name.last){
                        return 1;
                    }else{
                        return -1;
                    }
                }
            });
        }

        setEmployeeDataArray(() => tempArray);
  }


  function search(event){
    event.preventDefault();

    sortEmployeesByName();
    props.setCheatState(cheat => cheat + 1)
  }

    return (
        <div>
            <button onClick={search} className="btn btn-primary">
                Search
            </button>
            <div>
            -------------------------------------
            </div>

            <EmployeeCard employees={employeeDataArray} />
        </div>
    )
}

export default EmployeeDisplay;