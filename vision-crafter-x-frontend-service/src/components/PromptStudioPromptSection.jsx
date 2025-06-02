import { useState } from "react"
import PromptInput from "./PromptInput"
import ResponseDelay from "./ResponseDelay"

export const PromptStudioPromptSection = () => {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-col h-[775px] w-1/3 bg-black/70 backdrop-blur-md text-white border border-gray-500 rounded-xl shadow-2xl overflow-hidden">
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        <ResponseDelay response={response} loading={loading}/>
      </div>
      <div className="border-t border-gray-600 p-4 bg-black/50 p-2">
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
