
const ResponseDelay = ({response, loading}) => {
  return (
    <div className="mt-6">
        {
            loading ? (
                <div className="flex items-center gap-4">
                    <span className="loading loading-spinner loading-lg"></span>
                    <span>Crafting Your Answer....</span>
                </div>
            ) : (
                <p className="p-3 rounded-md">{ response || "Welcome to VisionCrafterX" }</p>
            )
        }
    </div>
  )
}

export default ResponseDelay