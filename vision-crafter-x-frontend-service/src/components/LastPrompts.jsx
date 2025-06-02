import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../utils/constants"
import PromptBox from "./PromptBox"

const LastPrompts = ({prompts, setPrompts}) => {

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const res = await axios.get(BASE_URL + "/fetch/prompts", {withCredentials: true})
        setPrompts(res.data.data)
        console.log("Response: ", res.data.data)
        console.log("Prompts State: ", prompts)
      } catch (error) {
        console.log("Error fetching the prompts - frontend: ", error)
      }
    }

    fetchPrompts();
  }, [])
  return (
    <div className="flex flex-col h-[775px] w-1/3 p-4 bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 overflow-hidden">
      <h2 className="text-white text-xl font-semibold mb-2">🕒 Recently Saved Prompts</h2>
      <div className="flex-1 overflow-y-auto mt-2">
        {
          prompts && (prompts.slice(0,5).map((prompt, index) => {
            return <PromptBox title = {prompt.title} category = {prompt.category} style={prompt.style} input={prompt.input}/>
          }))
        }
      </div>
    </div>
  ) 
}

export default LastPrompts