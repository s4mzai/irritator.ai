import ExplainInput from "@/components/ExplainInput";
import ExplainOutput from "@/components/ExplainOutput";
import { useActionState } from "react";
import { explain } from "@/actions/index.ts";

const Home = ()=>{
    const [formState, formAction, isPending] = useActionState(explain, null);
    return(
        <>
            <div className="h-screen w-screen flex items-center justify-center p-10 gap-5">
                <ExplainInput formAction={formAction} isPending={isPending} />
                <ExplainOutput formState={formState} isPending={isPending} />
            </div>
        </>
    )
}

export default Home;