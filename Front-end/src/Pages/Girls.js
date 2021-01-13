import React from 'react';
import Header from '../Components/Header';
import Sidenavigation from '../Components/Sidenavigation';

function Girls() {
    console.log("The Girls page");
    const data = {
        sex: "Girls",
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

export default Girls;