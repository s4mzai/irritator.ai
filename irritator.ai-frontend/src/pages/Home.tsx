import ExplainInput from "@/components/ExplainInput";
import ExplainOutput from "@/components/ExplainOutput";
import { useActionState } from "react";
import { explain } from "@/actions/index.ts";

const Home = ()=>{
    const [formState, formAction, isPending] = useActionState(explain, null);
    return(
        <>
            <div className={`min-h-screen w-screen p-4 md:p-10 lg:gap-8 flex ${formState ? "items-start justify-center md:justify-between" : "items-center justify-center"} flex-col sm:flex-row mx-auto max-w-9xl` }>
                <ExplainInput
                  formAction={formAction}
                  isPending={isPending}
                  className={`${formState ? "w-full md:w-1/2 lg:w-[50%]" : "w-full max md:max-w-4xl"}`}
                />
                {formState !== null && (
                  <ExplainOutput
                    formState={formState}
                    isPending={isPending}
                    className="w-full md:w-1/2 lg:w-[50%] md:p-10"
                  />
                )}
            </div>
        </>
    )
}

export default Home;