import React from 'react'


const handleAddToSelected = (data, selectedData, setSelectedData) => {

    if (!selectedData.includes(data) && selectedData.length < 5)
        setSelectedData([...selectedData, data])
}



const ArtistCard = ({ data, selectedDataHook }) => {

    const [selectedData, setSelectedData] = selectedDataHook

    return (
        <div className="card_wrapper">
            <div className="artist_image">

                <img src={data.images[0] ? data.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/542px-Unknown_person.jpg"} className="artist_image_img" width="80" height="80" />

            </div>

            <div className="artist_data">
                <h3 style={{ paddingInline: "30px" }}>{data.name}</h3>
                <div>
                    <div className="flex_wrapper">

                        <svg className="svg_followers" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>

                        <span>followers: {data.followers.total}</span>
                    </div>
                    <div className="flex_wrapper">
                        <span> Gengres:</span>
                        <span className="genres">{data.genres[0] ? data.genres[0] : 'unspecified'}</span>


                    </div>


                    <div className="flex_wrapper" >
                        <span> Listen:</span>
                        <a href={data.external_urls.spotify} className="flex">
                            <svg className="svg_spotify" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1333.33 1333.3" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M666.66 0C298.48 0 0 298.47 0 666.65c0 368.19 298.48 666.65 666.66 666.65 368.22 0 666.67-298.45 666.67-666.65C1333.33 298.49 1034.88.03 666.65.03l.01-.04zm305.73 961.51c-11.94 19.58-37.57 25.8-57.16 13.77-156.52-95.61-353.57-117.26-585.63-64.24-22.36 5.09-44.65-8.92-49.75-31.29-5.12-22.37 8.84-44.66 31.26-49.75 253.95-58.02 471.78-33.04 647.51 74.35 19.59 12.02 25.8 37.57 13.77 57.16zm81.6-181.52c-15.05 24.45-47.05 32.17-71.49 17.13-179.2-110.15-452.35-142.05-664.31-77.7-27.49 8.3-56.52-7.19-64.86-34.63-8.28-27.49 7.22-56.46 34.66-64.82 242.11-73.46 543.1-37.88 748.89 88.58 24.44 15.05 32.16 47.05 17.12 71.46V780zm7.01-189.02c-214.87-127.62-569.36-139.35-774.5-77.09-32.94 9.99-67.78-8.6-77.76-41.55-9.98-32.96 8.6-67.77 41.56-77.78 235.49-71.49 626.96-57.68 874.34 89.18 29.69 17.59 39.41 55.85 21.81 85.44-17.52 29.63-55.89 39.4-85.42 21.8h-.03z" fill-rule="nonzero" /></svg>
                        </a>
                    </div>

                </div>



                <div  >

                    <svg onClick={() => handleAddToSelected(data, selectedData, setSelectedData)} className="svg_select" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>


                </div>
            </div>


        </div>
    )
}

export default ArtistCard
