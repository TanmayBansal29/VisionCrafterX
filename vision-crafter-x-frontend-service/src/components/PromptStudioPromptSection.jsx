import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../utils/constants"
import PromptInput from "./PromptInput"
import ResponseDelay from "./ResponseDelay"

export const PromptStudioPromptSection = () => {
  const [config, setConfig] = useState({categories: [], styles: []})
  const [isFavourite, setIsFavourite] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchConfigProperties = async () => {
      try {
        const response = await axios.get(BASE_URL + '/prompt-config' ,{withCredentials: true})
        setConfig({
          categories: response.data.categories,
          styles: response.data.styles
        })
      } catch (err) {
        console.log("Error Fetching Config: ", err)
      }
    }

    fetchConfigProperties();
  }, [])

  const handleFavoutire = async () => {

  }

  return (
    <div className="flex flex-col h-[750px] w-3/4 bg-white ">
        <div className="flex justify-center gap-10 mt-10">
            <select class="select select-success">
              <option disabled selected>Pick Category</option>
              {
                config.categories.map((category, index) => {
                  return <option key={Math.random()}>{category}</option>
                })
              }
            </select>

            <select class="select select-info">
              <option disabled selected>Pick Style for Answer</option>
              {
                config.styles.map((style, index) => {
                  return <option key={Math.random()}>{style}</option>
                })
              }
            </select>
            <button className="btn btn-primary w-[250px]">Save to Favourite</button>
        </div>

        <div>
          <div>
            <ResponseDelay response={response} loading={loading}/>
            <PromptInput 
                prompt={prompt} 
                setPrompt={setPrompt} 
                response={response} 
                setResponse={setResponse} 
                loading={loading} 
                setLoading={setLoading}
            />
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}
