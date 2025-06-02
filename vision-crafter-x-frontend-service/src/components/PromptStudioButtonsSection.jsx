import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../utils/constants"

const PromptStudioButtonsSection = () => {
  const [config, setConfig] = useState({categories: [], styles: []})

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
    <div className="flex h-[775px] items-center flex-col w-1/3 gap-6 p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-gray-500 justify-center">
        <select id="category" className="select select-success bg-white/20 font-medium rounded-xl shadow-md hover:bg-white/30 w-full transition">
            <option disabled selected>Pick Category</option>
            {
            config.categories.map((category, index) => {
                 return <option className="text-black" key={Math.random()}>{category}</option>
            })
            }
        </select>
        <select id="style" className="select select-success bg-white/20 font-medium rounded-xl shadow-md w-full hover:bg-white/30 transition">
            <option disabled selected>Pick Style</option>
            {
                config.styles.map((style, index) => {
                  return <option className="text-black" key={Math.random()}>{style}</option>
                })
            }
        </select>
        <input
            id="promptTitle"
            type="text"
            placeholder="Enter prompt title"
            className="input bg-white/20 text-white placeholder-white/70 font-medium w-full rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="btn w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition rounded-xl">💾 Save to Database</button>
        <button className="btn w-full bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold shadow-lg hover:scale-105 transition rounded-xl">✨ New Prompt</button>
        <button className="btn w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg hover:scale-105 transition rounded-xl">📂 Access All Prompts</button>
    </div>
    )
}

export default PromptStudioButtonsSection