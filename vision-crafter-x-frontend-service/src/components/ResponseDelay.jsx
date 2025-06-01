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
              response ? (<div className="whitespace-pre-wrap">
                  <p dangerouslySetInnerHTML={{ __html: formattedHTML }}></p>
                </div>) : (<p>Welcome to VisionCrafterX</p>)
            )
        }
    </div>
  )
}

export default ResponseDelay