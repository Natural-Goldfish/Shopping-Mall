import React from 'react';
import Header from '../Components/Header';
import Sidenavigation from '../Components/Sidenavigation';

function Boys() {
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
                This is Boys
                <Sidenavigation data={data} />
            </main>
        </>
    )
}

export default Boys;