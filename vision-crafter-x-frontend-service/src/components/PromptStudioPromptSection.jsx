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

  return (
    <div className="flex flex-col h-[750px] w-1/3 border rounded-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4">
        <ResponseDelay response={response} loading={loading}/>
      </div>
      <div className="border-t p-2">
        <PromptInput 
                prompt={prompt} 
                setPrompt={setPrompt} 
                response={response} 
                setResponse={setResponse} 
                loading={loading} 
                setLoading={setLoading}
            />
      </div>
    </div>
  )
}
