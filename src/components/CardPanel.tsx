'use client'
import { useReducer, useRef, useEffect } from 'react'
import Card from '@/components/Card'

export default function CardPanel() {

    const cardReducer = (ratingList:Map<string, number>, action:{type:string, venueName: string, rating?: number}) => {
        switch(action.type) {
            case 'set': {
                const newState = new Map(ratingList);
                newState.set(action.venueName, action.rating || 0);
                return newState;
            }
            case 'remove': {
                const newState = new Map(ratingList);
                newState.delete(action.venueName);
                return newState;
            }
            default: return ratingList;
        }
    }

    const [ratingList, dispatchRating] = useReducer(cardReducer, new Map<string, number>([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]));

    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", gap: "3%", marginTop: "20px"}}>
                <Card venueName='The Bloom Pavilion' imgSrc='/img/bloom.jpg' 
                dispatch={(venue: string, newRating: number) => {dispatchRating({type: "set", venueName: venue, rating: newRating})}}
                rating={ratingList.get('The Bloom Pavilion')}/>
                <Card venueName='Spark Space' imgSrc='/img/sparkspace.jpg' 
                dispatch={(venue: string, newRating: number) => {dispatchRating({type: "set", venueName: venue, rating: newRating})}} 
                rating={ratingList.get('Spark Space')}/>
                <Card venueName='The Grand Table' imgSrc='/img/grandtable.jpg' 
                dispatch={(venue: string, newRating: number) => {dispatchRating({type: "set", venueName: venue, rating: newRating})}}
                rating={ratingList.get('The Grand Table')}/>
            </div>
            <div className="w-full text-2xl font-bold ml-[20px] mt-[3%]">
                Venue List with Ratings : { ratingList.size }
            </div>
            {
                Array.from(ratingList).map((venue) => 
                    <div data-testid={venue[0]} key={venue[0]} className="w-full text-xl font-medium ml-[20px] mt-[5px]"
                    onClick={() => dispatchRating({type:'remove', venueName: venue[0]})}>
                        {venue[0]} : {venue[1]}
                    </div>
                )
            }
        </div>
    )
}