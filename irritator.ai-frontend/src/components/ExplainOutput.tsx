import CodeExplanation from "./CodeExplanation";


const ExplainOutput = ({formState,isPending}:{formState:any,isPending:boolean})=>{
    return(
        <>
            <div className="w-[50%] border-2">
            {isPending ? (
                <p className="bg-gray-300 my-3 w-64 p-2 rounded-sm">Thinking...</p>
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