import { formatResponseHTML } from "../utils/formatResponse"

const ResponseDelay = ({response, loading}) => {
    const formattedHTML = formatResponseHTML(response)
  return (
    <div className="mt-6">
        {
            loading ? (<div className="flex items-center gap-4">
                    <span className="loading loading-spinner loading-lg"></span>
                    <span>Crafting Your Answer....</span>
                </div>) : (
                response ? (<p className="p-3 rounded-md" dangerouslySetInnerHTML={{ __html: formattedHTML }}></p>) : (<p>Welcome to VisionCrafterX</p>)
            )
        }
    </div>
  )
}

export default ResponseDelay