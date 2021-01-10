import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Navigation2(props){
    const categories = ["Men", "Boys", "Women", "Girls", "Unisex"];
    const linkList = ["/Men", "/Boys", "/Women", "/Girls", "/Unisex"];

    const [mouseOver, setMouseOver] = useState({
        "Men" : false,
        "Boys" : false,
        "Women" : false,
        "Girls" : false,
        "Unisex" : false
    });

    const tempCategories = [
        { category : "Men", link : "/Men"},
        { category : "Boys", link : "/Boys"},
        { category : "Women", link : "/Women"},
        { category : "Girls", link : "/Girls"},
        { category : "Unisex", link : "/Unisex"}
    ];

    
    // 페이지를 새로 여는 등의 기본 동작을 막기 위해서는 e.preventDefault를 써야한다.
    const temp = (e, key) => {
        e.preventDefault();
        console.log(e);
        console.log(key);
        console.log(mouseOver[key]);
        console.log("the mouse is over");

        setMouseOver(prevState => {
            let temp = Object.assign({}, prevState);
            temp[`${key}`] = true;
            return temp;
        });
        console.log(mouseOver);
        
    }

    const temp2 = (e, key) => {
        e.preventDefault();
        setMouseOver(prevState => {
            let temp = Object.assign({}, prevState);
            temp[`${key}`] = false;
            return temp;
        });
        console.log("the mouse is down");
    }

    /*
        onMouseOver : 마우스가 경계 안에 들어오면 동작
        onMouseOut : 마우스가 경계 밖으로 나가면 동작
        이벤트 핸들러에 params 주는 방법 :
            ex)
                onMouseOver={(e) => {temp(e, "sefsef")}}
                onMouseOver={(e) => {temp(e, {efe : "efef", gggg : "gggggg"})}}

    */
   return(
       <ul>
           {tempCategories.map((curCategory, index) => (
               <li key={curCategory.category} onMouseOver={(e) => temp(e, curCategory.category)} onMouseOut={(e) => temp2(e, curCategory.category)}>
                   <Link to={curCategory.link}>
                       {mouseOver[`${curCategory.category}`] ? 
                       <ul>
                           <li>"temp"</li>
                           <li>"temp"</li>
                           <li>"temp"</li>
                        </ul> : `${mouseOver[`${curCategory.category}`]}${curCategory.category}`}
                   </Link>
               </li>
           ))}
       </ul>
   )
}