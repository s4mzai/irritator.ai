import CodeExplanation from "./CodeExplanation";
import { Spinner } from "./ui/spinner";

const ExplainOutput = ({formState,isPending, className}:{formState:any,isPending:boolean, className?: string})=>{
    return(
        <>
            <div className={`${className ?? "w-[50%]"} h-full` }>
            {isPending ? (
                <div className="w-full max-w-4xl mt-6 bg-gray-50  p-6 rounded-2xl shadow-lg">
                    <p className="text-lg font-semibold  flex items-center gap-1"><><Spinner/> Thinking...</></p>
                </div>
            ) : formState?.success ? (
            <CodeExplanation explanation={formState?.data.explanation} />
            ) : (
                formState?.success === false && (
                    <p className="text-red-500 mt-3">{formState?.error}</p>
                )
            )}
            </div>
        </>
    )
}

export default ExplainOutput;