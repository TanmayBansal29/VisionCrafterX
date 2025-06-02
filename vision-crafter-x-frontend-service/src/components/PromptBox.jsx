
const PromptBox = ({title, category, style, input}) => {
  return (
    <div className="p-4 bg-white/20 mt-3 text-white rounded-xl shadow-md hover:bg-white/30 transition">
        <p className="text-sm font-semibold text-gray-200">
            <span className="text-blue-300">Title:</span> {title}
        </p>
        <p className="text-sm font-medium text-gray-300">
            <span className="text-green-300">Category:</span> {category}
        </p>
        <p className="text-sm font-medium text-gray-300">
            <span className="text-purple-300">Style:</span> {style}
        </p>
        <p className="text-sm font-normal text-gray-300">
            <span className="text-pink-300">Input:</span> {input}
        </p>
    </div>
  )
}

export default PromptBox