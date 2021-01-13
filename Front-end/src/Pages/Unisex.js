import React from 'react';
import Header from '../Components/Header';
import Sidenavigation from '../Components/Sidenavigation';

function Unisex() {
    console.log("The Unisex page");
    const data = {
        sex: "Unisex",
        masterCategories: ["Apparel", "Accessories", "Footwear", "Free Items", "Personal Care", "Home", "Sporting Goods"],
        subCategories: {
            Apparel: ["Topwear", "Bottomwear", "Loungewear and Nightwear", "Innerwear"],
            Accessories: ["Accessories", "Bags", "Belts"],
            Footwear: ["Shoes", "Flip Flops", "Sandal"],
            FreeItems: ["Temp", "Temp2", "Temp3"],
            PersonalCare: ["Temp1", "Temp2", "Temp3"],
            Home: ["Home1", "Home2", "HOm3"],
            SportingGoods: ["Sport1", "Sport2", "Sport3"]
        }
    }
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <Sidenavigation data={data} />
            </main>
        </>
    )
}

export default Unisex;