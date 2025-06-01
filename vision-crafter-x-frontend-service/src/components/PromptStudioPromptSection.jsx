import { useEffect } from "react"
import { useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../utils/constants"

export const PromptStudioPromptSection = () => {
  const [config, setConfig] = useState({categories: [], styles: []})

  useEffect(() => {
    const fetchConfigProperties = async () => {
      try {
        const response = await axios.get(BASE_URL + '/prompt-config')
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
    <div>
        <div>
            <select class="select select-success">
              <option disabled selected>Pick Category</option>
              {
                config.categories.map((category, index) => {
                  return <option key={Math.random()}>{category}</option>
                })
              }
            </select>

            <select class="select select-info">
              <option disabled selected>Pick a Framework</option>
              {
                config.styles.map((style, index) => {
                  return <option key={Math.random()}>{style}</option>
                })
              }
            </select>
        </div>

        <div>

        </div>
    </div>
  )
}
