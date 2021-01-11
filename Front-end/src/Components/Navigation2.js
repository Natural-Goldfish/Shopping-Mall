import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation2(props) {
    const categories = ["Men", "Boys", "Women", "Girls", "Unisex"];
    
    const [mouseOver, setMouseOver] = useState({
        "Men": false,
        "Boys": false,
        "Women": false,
        "Girls": false,
        "Unisex": false
    });

    const items = [
        {
            sex: "Men", 
            link: "/Men",
            masterCategories : ["Apparel", "Accessories", "Footwear", "Free Items", "Personal Care"]
        },
        {
            sex: "Boys",
            link: "/Boys",
            masterCategories : ["Apparel", "Accessories", "Footwear"]
        },
        { 
            sex: "Women",
            link: "/Women",
            masterCategories : ["Apparel", "Accessories", "Footwear", "Free Items", "Personal Care"]
        },
        { 
            sex: "Girls",
            link: "/Girls",
            masterCategories : ["Apparel", "Accessories", "Footwear"]
        },
        { 
            sex: "Unisex",
            link: "/Unisex",
            masterCategories : ["Apparel", "Accessories", "Footwear", "Free Items", "Personal Care", "Home", "Sporting Goods"]
        }
    ];


    // 페이지를 새로 여는 등의 기본 동작을 막기 위해서는 e.preventDefault를 써야한다.
    const overMouse = (e, key) => {
        e.preventDefault();
        setMouseOver((prevState) => {
            let nextMouseOver = Object.assign({}, prevState);
            nextMouseOver[`${key}`] = true;
            return nextMouseOver;
        });
        onHiddenList(categories.indexOf(key));
    }

    const outMouse = (e, key) => {
        e.preventDefault();
        setMouseOver((prevState) => {
            let nextMouseOver = Object.assign({}, prevState);
            nextMouseOver[`${key}`] = false;
            return nextMouseOver;
        });
        onHiddenList(categories.indexOf(key));
    }

    function onHiddenList(index){
        const tempDiv = document.getElementsByClassName("testDiv")[index];
        if(tempDiv.style.display === 'none'){
            tempDiv.style.display = 'block';
        }else{
            tempDiv.style.display = 'none';
        }
    }

    /*
        onMouseOver : 마우스가 경계 안에 들어오면 동작
        onMouseOut : 마우스가 경계 밖으로 나가면 동작
        이벤트 핸들러에 params 주는 방법 :
            ex)
                onMouseOver={(e) => {temp(e, "sefsef")}}
                onMouseOver={(e) => {temp(e, {efe : "efef", gggg : "gggggg"})}}

    */
    return (
        <ul className="headerNavList">
            {items.map((curItem, index) => (
                <li className="navListItem" key={curItem.sex} onMouseOver={(e) => overMouse(e, curItem.sex)} onMouseOut={(e) => outMouse(e, curItem.sex)}>
                    <Link to={curItem.link}>{curItem.sex}</Link>
                    <div className="testDiv" style={{display : 'none'}}>
                        <ul>
                            {curItem.masterCategories.map(((curCategory) => {
                                return (<li key={curCategory}>{curCategory}</li>)
                            }))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    )
}


/*

                        */