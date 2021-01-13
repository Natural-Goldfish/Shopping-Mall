import React from 'react';
import Header from '../Components/Header';
import Sidenavigation from '../Components/Sidenavigation';

function Women() {
    console.log("The Women page");
    const data = {
        sex: "Women",
        masterCategories: ["Apparel", "Accessories", "Footwear", "Free Items", "Personal Care"],
        subCategories: {
            Apparel: ["Topwear", "Bottomwear", "Loungewear and Nightwear", "Innerwear"],
            Accessories: ["Accessories", "Bags", "Belts"],
            Footwear: ["Shoes", "Flip Flops", "Sandal"],
            FreeItems: ["Temp", "Temp2", "Temp3"],
            PersonalCare: ["Temp1", "Temp2", "Temp3"]
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

export default Women;