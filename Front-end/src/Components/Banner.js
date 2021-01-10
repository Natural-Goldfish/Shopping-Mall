import React from 'react';
import {useState, setState} from 'react';

function Banner(){
    const imagePath = "/images/";
    const [curImage, setCurImage] = useState(1);
    const imageList = ["1", "2", "3", "4", "5"];
    
    // setCurImage 이렇게 사용하는게 맞는지? 확인할 것
    function prevOnClick(){
        console.log("this is prevOnClick");
        console.log(curImage);
        if (curImage === 1){
            setCurImage(imageList.length);
        }else{
            setCurImage(curImage - 1);
        }
        console.log(curImage);
    }

    function nextOnClick(){
        console.log("this is nextOnClick");
        console.log(curImage);
        if(curImage === imageList.length){
            setCurImage(1);
        }else{
            setCurImage(curImage + 1);
        }
        console.log(curImage);
    }

    function newImagePath(){
        let path = imagePath + String(curImage);
        return path;
    }

    const temp = () => {
        let path = imagePath + String(curImage) + ".jpg";
        return path;
    }

    return(
        <div>
            {console.log(curImage)}
            <button type="button" onClick={prevOnClick}>Previous</button>
            <div>
                
                <img src={temp()} width="500px" height="500px"></img>
                {console.log(newImagePath)}
            </div>
            <button type="button" onClick={nextOnClick}>Next</button>
        </div>
    );
}

export default Banner;