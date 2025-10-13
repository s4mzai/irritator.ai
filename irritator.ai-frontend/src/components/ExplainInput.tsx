import { useState } from "react";

const ExplainInput = ({ formAction, isPending }:{ formAction: (formData: FormData) => void, isPending: boolean })=>{
    const [code, setCode] = useState("")
    return(
        <>
            <div className="w-[50%] border-2">
                <form action={formAction}>
                <label className="block mb-2 font-semibold">Language:</label>
                <select
                name="language"
                className="border rounded-lg p-2 w-full mb-4 bg-transparent"
                >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                </select>

                <label className="block mb-2 font-semibold">Character Length:</label>
                <select
                name="charLength"
                className="border rounded-lg p-2 w-full mb-4 bg-transparent"
                >
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
                </select>

                <label className="block mb-2 font-semibold">Your Code:</label>
                <textarea
                name="code"
                required
                value={code}
                onChange={(e)=>setCode(e.target.value)}
                placeholder="Paste your code here..."
                className="border rounded-lg w-full p-3 font-mono text-sm bg-transparent min-h-[150px]"
                />

                <button
                type="submit"
                disabled={isPending}
                className="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
                >
                {isPending ? "Explaining..." : "Explain Code"}
                </button>
                </form>
            </div>
        </>
    )
}

export default ExplainInput;