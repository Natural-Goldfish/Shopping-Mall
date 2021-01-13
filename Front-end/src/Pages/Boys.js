import React from 'react';
import Header from '../Components/Header';
import Sidenavigation from '../Components/Sidenavigation';

export default function Boys(props) {
    console.log("<------------->");
    console.log("The Boys page");
    console.log("");
    console.log("<------------->");
    const data = {
        sex: "Boys",
        masterCategories: ["Apparel", "Accessories", "Footwear"],
        subCategories: {
            Apparel: ["Topwear", "Bottomwear", "Loungewear and Nightwear", "Innerwear"],
            Accessories: ["Accessories", "Bags", "Belts"],
            Footwear: ["Shoes", "Flip Flops", "Sandal"]
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

