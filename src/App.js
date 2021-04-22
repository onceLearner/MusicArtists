
import React, { useState, useEffect } from "react"
import ArtistCard from "./components/ArtistCard";
import './style/App.css';
import './style/card.css'

function App() {

  const [keyword, setKeyword] = useState("a")
  const [limit, setLimit] = useState(10)
  const [data, setData] = useState({ artists: { items: [] } })
  const [selectedData, setSelectedData] = useState([])






  useEffect(() => {

    if (keyword.length == 0) return setData({ artists: { items: [] } })
    let url = `https://dev-assignment.ew.r.appspot.com/search?q=${keyword}&limit=${limit}&offset=0`
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setData(data)

      })
      .catch(e => console.error({ e }))


  }, [keyword, limit])



  return (
    <div className="container" >

      <div className="main">

        <div className="inputs_wraper flex">
          <div className="header_text">
            Search for Artist
            </div>
          <input className="input_artist" type="text" onChange={(e) => setKeyword(e.target.value)} ></input>
          <div className="input_limit_wrapper">
            <label >limit </label>
            <input className="input_limit" value={limit} type="number" min={1} onChange={(e) => setLimit(e.target.value)} />
          </div>
        </div>
        <div className="show_wrapper">

          <div className="selected_wrapper">
            <h2 className="selected_header">Selected Artists</h2>
            <div>
              {selectedData.length == 0 && "No artist is selected yet"}
              {selectedData.map(selec => (
                <div className="selected_card  flex_wrapper">
                  <h3>  {selec.name} </h3>

                  <div className="flex_trash_wrapper">
                    <svg onClick={() => setSelectedData(selectedData.filter(a => a.id != selec.id))} className="svg_trash" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>


                  </div>
                </div>
              ))

              }

            </div>

          </div>

          <div className="result_wrapper">



            {
              data.artists.items.map(item => (
                <div key={item.id}>
                  <ArtistCard data={item} selectedDataHook={[selectedData, setSelectedData]} />
                </div>
              ))

            }
          </div>

        </div>

      </div>


    </div>
  );
}

export default App;
