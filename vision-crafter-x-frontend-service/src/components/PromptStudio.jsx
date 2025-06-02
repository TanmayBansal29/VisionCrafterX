import { useState } from "react"
import DateTimeShow from "./DateTimeShow"
import LastPrompts from "./LastPrompts"
import PromptStudioButtonsSection from "./PromptStudioButtonsSection"
import { PromptStudioPromptSection } from "./PromptStudioPromptSection"

const PromptStudio = () => {
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const [prompts, setPrompts] = useState()

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [style, setStyle] = useState("")

  return (
    <div className="flex flex-col items-center h-screen w-full p-4 ">
        <div>
            <p className="mt-4 text-center font-bold ml-8 text-xl">PROMPT STUDIO 💡</p>
            <p className="text-xs font-semibold">"Create, Cutomize and run powerful AI prompts for any use case"</p>
            <DateTimeShow />
        </div>

        <div className="flex w-full mt-6 gap-5">
          <PromptStudioButtonsSection 
            prompt={prompt}
            response={response}
            title={title}
            setTitle={setTitle}
            category={category}
            setCategory={setCategory}
            style={style}
            setStyle={setStyle}
            prompts={prompts}
            setPrompts={setPrompts}  
          />
          <PromptStudioPromptSection 
            prompt={prompt}
            setPrompt={setPrompt}
            response={response}
            setResponse={setResponse}
            loading={loading}
            setLoading={setLoading}
          />
          <LastPrompts 
            prompts={prompts}
            setPrompts={setPrompts}  
          />  
        </div>
    </div>
  )
}

export default PromptStudio