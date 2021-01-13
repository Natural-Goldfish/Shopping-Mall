import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function Sidenavigation(props) {
    const [mouseClick, setMouseClick] = useState(()=> {
        const tempArray = [];
        for(let i = 0; i < props.data.masterCategories.length; i ++){
            tempArray[i] = false;
        }
        return tempArray;
    });

    // 임시 객체에 띄어쓰기 해결
    function noSpace(word) {
        const splitedWord = word.split(" ");
        const newString = splitedWord.join("");
        return newString;
    }

    // 링크 눌렸을때 이벤트 핸들러
    function onClicked(e, index){
        e.preventDefault();
        let tempArray = [];
        for(let i = 0 ; i< mouseClick.length ; i ++){
            tempArray[i] = false;
        }

        if(mouseClick[index] === true){
            setMouseClick(tempArray)
        }else{
            tempArray[index] = true;
            setMouseClick(tempArray);
        }
    }

    useEffect(() => {
        const testDivList = document.getElementsByClassName('testDiv2');
        const targetIndex = mouseClick.indexOf(true);
        for(let i = 0; i < testDivList.length; i ++){
            if(i === targetIndex){
                testDivList[i].style.display = 'block';
            }else{
                testDivList[i].style.display = 'none';
            }
        }
    }, [mouseClick])

    return (
        <nav>
            <h2>{props.data.sex}</h2>
            <ul>
                <h4><Link to="#">Whole Thing</Link></h4>
                {props.data.masterCategories.map(((curMasetrCategory, index) => {
                    return (
                        <React.Fragment>
                            <h4 onClick={((e) => onClicked(e, index))}> 
                                <Link to="#">{curMasetrCategory}</Link>
                            </h4>
                            <div className="testDiv2" style={{display : 'none'}}>
                                <ul>
                                    <li><Link to="#">Whole thing</Link></li>
                                    {props.data.subCategories[`${noSpace(curMasetrCategory)}`].map(((curSubCategoryItem) => {
                                        return (
                                            <li><Link to="#">{curSubCategoryItem}</Link></li>
                                        )
                                    }))}
                                </ul>
                            </div>
                        </React.Fragment>
                    )
                }))}
            </ul>
        </nav>
    )
}
/*
{data.subCategories.curMasetrCategory.map(((curSubCategoryItem) => {
    return(
        <li>{curSubCategoryItem}</li>
    )
}))}
*/
/*
const data = [
    {
        sex: "Men",
        masterCategories : ["Apparel", "Accessories", "Footwear", "Free Items", "Personal Care"],
        subCategories : {
            Apparel : ["Topwear", "Bottomwear", "Loungewear and Nightwear", "Innerwear"],
            Accessories : ["Accessories", "Bags", "Belts"],
            Footwear : ["Shoes", "Flip Flops", "Sandal"],
            FreeItems : ["Temp", "Temp2", "Temp3"],
            PersonalCare : ["Temp1", "Temp2", "Temp3"]
        }
    },
    {
        sex: "Boys",
        masterCategories : ["Apparel", "Accessories", "Footwear"],
        subCategories : {
            Apparel : ["Topwear", "Bottomwear", "Loungewear and Nightwear", "Innerwear"],
            Accessories : ["Accessories", "Bags", "Belts"],
            Footwear : ["Shoes", "Flip Flops", "Sandal"]
        }
    },
    {
        sex: "Women",
        masterCategories : ["Apparel", "Accessories", "Footwear", "Free Items", "Personal Care"],
        subCategories : {
            Apparel : ["Topwear", "Bottomwear", "Loungewear and Nightwear", "Innerwear"],
            Accessories : ["Accessories", "Bags", "Belts"],
            Footwear : ["Shoes", "Flip Flops", "Sandal"],
            FreeItems : ["Temp", "Temp2", "Temp3"],
            PersonalCare : ["Temp1", "Temp2", "Temp3"]
        }
    },
    {
        sex: "Girls",
        masterCategories : ["Apparel", "Accessories", "Footwear"],
        subCategories : {
            Apparel : ["Topwear", "Bottomwear", "Loungewear and Nightwear", "Innerwear"],
            Accessories : ["Accessories", "Bags", "Belts"],
            Footwear : ["Shoes", "Flip Flops", "Sandal"]
        }
    },
    {
        sex: "Unisex",
        masterCategories : ["Apparel", "Accessories", "Footwear", "Free Items", "Personal Care", "Home", "Sporting Goods"],
        subCategories : {
            Apparel : ["Topwear", "Bottomwear", "Loungewear and Nightwear", "Innerwear"],
            Accessories : ["Accessories", "Bags", "Belts"],
            Footwear : ["Shoes", "Flip Flops", "Sandal"],
            FreeItems : ["Temp", "Temp2", "Temp3"],
            PersonalCare : ["Temp1", "Temp2", "Temp3"],
            Home : ["Home1", "Home2", "HOm3"],
            SportingGoods : ["Sport1", "Sport2", "Sport3"]
        }
    }
];
*/