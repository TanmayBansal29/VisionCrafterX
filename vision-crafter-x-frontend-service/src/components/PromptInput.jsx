import axios from 'axios'

const PromptInput = (props) => {
    const {prompt, setPrompt, setResponse, loading, setLoading} = props
    const handlePrompt = async (e) => {
        try {
            setLoading(true)
            if(!prompt.trim()){
                setResponse("Prompt cannot be empty")
                return
            }
            const res = await axios.post("http://localhost:4000/api/v1/chat/AI", {
                prompt: prompt
            }, {withCredentials: true});
            setResponse(res.data.data)
        } catch (error) {
            console.log("Error: ", error)
            setResponse("Something Went Wrong")
        } finally{
            setLoading(false)
        }
    }
  return (
    <>
        <div className='flex p-3'>
            <label className="input w-full p-0">
                {/* <svg className="h-[1em] opacity-50 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg> */}
                <input type="search" required placeholder="  Ask Anything.." className='w-full bg-white text-black rounded-md p-2' value={prompt} onChange={(e) => setPrompt(e.target.value)} />
            </label>
            {
                loading ? (<button className="btn w-[200px]" disabled="disabled">GENERATING...</button> )
                : (<button className="btn btn-primary w-[200px]" onClick={handlePrompt}>GENERATE</button>)
            }
        </div>
    </>
  )
}

export default PromptInput