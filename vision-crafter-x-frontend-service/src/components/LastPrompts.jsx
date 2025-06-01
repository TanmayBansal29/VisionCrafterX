import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { BASE_URL } from "../utils/constants"

const LastPrompts = () => {
  const [prompts, setPrompts] = useState()

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const res = await axios.get(BASE_URL + "/fetch/prompts", {withCredentials: true})
        console.log(res.data.data)
      } catch (error) {
        console.log("Error fetching the prompts - frontend: ", error)
      }
    }

    fetchPrompts();
  }, [])
  return (
    <div>
        
    </div>
  )
}

export default LastPrompts