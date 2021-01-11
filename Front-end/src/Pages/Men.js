import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sidenavigation from '../Components/Sidenavigation';

export default function Men(){
    const data = {
        sex: "Men",
        masterCategories: ["Apparel", "Accessories", "Footwear", "Free Items", "Personal Care"],
        subCategories: {
            Apparel: ["Topwear", "Bottomwear", "Loungewear and Nightwear", "Innerwear"],
            Accessories: ["Accessories", "Bags", "Belts"],
            Footwear: ["Shoes", "Flip Flops", "Sandal"],
            FreeItems: ["Temp", "Temp2", "Temp3"],
            PersonalCare: ["Temp1", "Temp2", "Temp3"]
        }
    }

    return(
        <>
            <header>
                <Header />
            </header>
            <main>
                This is Men
                <Sidenavigation data={data}/>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}