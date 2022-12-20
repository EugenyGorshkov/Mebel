import React from "react";
import {useQuery} from "@apollo/client";
import {FETCH_IMAGES} from "../../apollo/Gallery.js";

const GalleryPage = () => {

    const {loading, error, data} = useQuery(FETCH_IMAGES)

    if (loading) {
        return <h2 className="text-center pt-12 font-bold text-xl">Loading...</h2>
    }

    if (error) {
        return (
            <div className='w-full h-full object-cover object-center'>
                <h2 className='text-center pt-12 font-bold text-xl'>
                    Failed to get data. We are working at problem
                </h2>
            </div>
        )
    }

    return (
        <>
            <div className='container mx-auto flex gap-12 lg:flex-row flex-col'>
                {data.galleries.map(el => {
                    return (
                        <div>
                            <img src={el.content.publicUrl} alt='none' key={el.content.id}/>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default GalleryPage