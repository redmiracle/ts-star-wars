import {useEffect, useState} from "react";
import {characters, defaultsHero, period_month} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
interface heroType {
    name: string;
    gender: string;
    birth_year: string,
    height:number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
}

const AboutMe = () => {
    const [hero, setHero] = useState<heroType>();
    let {heroId=defaultsHero} = useParams();
    console.log(heroId);
    useEffect(() => {
        if(!characters[heroId]){
            heroId=defaultsHero;
        }
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [])

    return (
        <>
            {(!!hero) &&
                <div className={`text-[2em] text-justify tracking-[.2em] leading-normal ml-8`}>
                    {Object.keys(hero).map(key => <p key={key}><span
                        className={`text-[1.25em] capitalize`}>{key.replace('_', ' ')}:</span> {hero[key as keyof heroType]}</p>)}
                </div>
            }
        </>
    );
}

export default AboutMe;