import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../utils/constants"

const PromptStudioButtonsSection = () => {
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
  return (
    <div className="flex h-[750px] items-center flex-col w-1/3 gap-10 justify-center">
        <select class="select select-success">
            <option disabled selected>Pick Category</option>
            {
            config.categories.map((category, index) => {
                 return <option key={Math.random()}>{category}</option>
            })
            }
        </select>

        <select class="select select-info">
            <option disabled selected>Pick Style</option>
            {
                config.styles.map((style, index) => {
                  return <option key={Math.random()}>{style}</option>
                })
            }
        </select>
        <button className="btn btn-primary w-[320px]">Save to Database</button>
        <button className="btn btn-primary w-[320px]">New Prompt</button>
        <button className="btn btn-primary w-[320px]">Access All Prompts Generated</button>
    </div>
    )
}

export default PromptStudioButtonsSection