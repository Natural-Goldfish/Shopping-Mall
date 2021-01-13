import React from 'react';
import {useState, useEffect} from 'react';

export default function Banner(){
    const dirPath = "/images/";
    const [imageIndex, setImageIndex] = useState(null);
    const [imagePath, setImagePath] = useState(null);

    function onPrevButton(e){
        e.preventDefault();
        let minIndex = 1;
        let maxIndex = 5;
        if(imageIndex === minIndex){
            setImageIndex(maxIndex);
        }else{
            setImageIndex(imageIndex - 1);
        }
    }

    function onNextButton(e){
        e.preventDefault();
        let minIndex = 1;
        let maxIndex = 5;
        if(imageIndex === maxIndex){
            setImageIndex(minIndex);
        }else{
            setImageIndex(imageIndex + 1);
        }
    }

    useEffect(() =>{
        setImageIndex(Math.floor(Math.random()*5) + 1);
    }, [])
    
    useEffect(() => {
        const tempInterval = setInterval((() => {
            if(imageIndex === 5){
                setImageIndex(1);
            }else{
                setImageIndex(imageIndex + 1);
            }
        }), 3000)
        let tempPath = dirPath + String(imageIndex) + ".jpg";
        setImagePath(tempPath);
        return(() => clearInterval(tempInterval))
    }, [imageIndex]);


    return(
        <div>
            <button type="button" onClick={onPrevButton}>Previous</button>
            <div>
                <img src={imagePath} width="500px" height="500px"></img>
                
            </div>
            <button type="button" onClick={onNextButton}>Next</button>
        </div>
    
    );
}
