import React, {useState, useEffect} from 'react';

export default function Sidenavigation(props) {
    const [mouseClick, setMouseClick] = useState(false);
    const [divIndex, setDivIndex] = useState(0);

    function noSpace(word) {
        const splitedWord = word.split(" ");
        const newString = splitedWord.join("");
        return newString;
    }
    function onClicked(e, index){
        e.preventDefault();
        if(mouseClick === false){
            setMouseClick(true);
        }else{
            setMouseClick(false);
        }
        setDivIndex(index);
    }

    useEffect(() => {
        const testDiv = document.getElementsByClassName('testDiv2')[divIndex];
        if(mouseClick === true){
            testDiv.style.display = 'block';
        }else{
            testDiv.style.display = 'none';
        }
    }, [mouseClick])

    return (
        <nav>
            <h2>{props.data.sex}</h2>
            <ul>
                {props.data.masterCategories.map(((curMasetrCategory, index) => {
                    return (
                        <React.Fragment>
                            <li onClick={((e) => onClicked(e, index))}> {curMasetrCategory}</li>
                            <div className="testDiv2" style={{display : 'none'}}>
                                <ul>
                                    {props.data.subCategories[`${noSpace(curMasetrCategory)}`].map(((curSubCategoryItem) => {
                                        return (
                                            <li>{curSubCategoryItem}</li>
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