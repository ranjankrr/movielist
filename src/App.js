import React,{useState} from "react";
import "./style.css";
import Menu from "./Menulist";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
// import form from "./form";
const uniqueList = [
    ...new Set( 
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
    "All",
  ];
  console.log(uniqueList);  
const App= () => {
    const [menuData,setMenuData]  = useState(Menu);
    const [menuList,setMenuList]  = useState(uniqueList);


    // console.log(menuData);
    const filterItem = (category) =>{
        if (category === "All") {
            setMenuData(Menu);
            return;
          }
        const updatedList = Menu.filter((curElen) =>{
            return curElen.category === category;   
        });

    setMenuData(updatedList)
    }
    return (
        <>
{/* 
        <nav className = "navbar">
            <div className = "btn-group">   
                <button className = "btn-group__item" onClick = { () => filterItem("breakfast")}>Breakfast</button>
                <button className = "btn-group__item" onClick = { () => filterItem("lunch")} > Lunch</button>
                <button className = "btn-group__item" onClick = { () => filterItem("dinner")}>Dinner</button>
                <button className = "btn-group__item" onClick = { () => setMenuData(Menu)}>All</button>
            </div>
        </nav> */}
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData}/>
        <form/>
        </>
    )
}
export default App
















 