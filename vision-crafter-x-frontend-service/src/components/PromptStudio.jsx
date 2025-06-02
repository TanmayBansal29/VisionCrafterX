import DateTimeShow from "./DateTimeShow"
import LastPrompts from "./LastPrompts"
import PromptStudioButtonsSection from "./PromptStudioButtonsSection"
import { PromptStudioPromptSection } from "./PromptStudioPromptSection"

const PromptStudio = () => {
  return (
    <div className="flex flex-col items-center h-screen w-full p-4 ">
        <div>
            <p className="mt-4 text-center font-bold ml-8 text-xl">PROMPT STUDIO 💡</p>
            <p className="text-xs font-semibold">"Create, Cutomize and run powerful AI prompts for any use case"</p>
            <DateTimeShow />
        </div>

        <div className="flex w-full mt-6 gap-5">
          <PromptStudioButtonsSection />
          <PromptStudioPromptSection />
          <LastPrompts />  
        </div>
    </div>
  )
}

export default PromptStudio