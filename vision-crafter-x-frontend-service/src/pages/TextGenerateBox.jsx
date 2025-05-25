import axios from 'axios'
import { useState } from 'react'
import PromptInput from '../components/PromptInput'
import ResponseDelay from '../components/ResponseDelay'

const TextGenerateBox = () => {
    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState("")
    const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-col h-screen">
        <div className='flex-1 overflow-y-auto p-4'>
            <ResponseDelay response={response} loading={loading}/>
        </div>
        <div className='p-4 border-t bg-base-300'>
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

export default TextGenerateBox