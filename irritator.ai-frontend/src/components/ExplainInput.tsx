import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "./ui/button";
import { Spinner } from "@/components/ui/spinner"

const ExplainInput = ({ formAction, isPending, className }:{ formAction: (formData: FormData) => void, isPending: boolean, className?: string })=>{
    const [code, setCode] = useState("")
    return(
        <>  
            <div className={`${className ?? "w-full"} h-full md:p-10`}>
                <form action={formAction} className="space-y-4 md:space-y-5">
                    <div className="w-full max-w-4xl mx-auto flex flex-col lg:flex-row gap-3 lg:gap-5 items-stretch lg:items-center lg:justify-between">

                        <div className="w-full lg:w-1/2">
                        <Select name="language">
                            <SelectTrigger className="w-full bg-gray-50  p-4 rounded-lg shadow-lg">
                                <SelectValue placeholder="Select a Language" />
                            </SelectTrigger>
                            <SelectContent className="w-fit bg-gray-50 rounded-lg shadow-lg dark:bg-black">
                                <SelectGroup>
                                    <SelectLabel>Language</SelectLabel>
                                    <SelectItem value="JavaScript">JavaScript</SelectItem>
                                    <SelectItem value="Python">Python</SelectItem>
                                    <SelectItem value="C++">C++</SelectItem>
                                    <SelectItem value="Java">Java</SelectItem>
                                    <SelectItem value="Rust">Rust</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        </div>
                        <div className="w-full lg:w-1/2">
                        <Select name="charLength">
                            <SelectTrigger className="w-full bg-gray-50  p-4 rounded-lg shadow-lg">
                                <SelectValue placeholder="Select Char. Length" />
                            </SelectTrigger>
                            <SelectContent className="w-fit bg-gray-50 rounded-lg shadow-lg dark:bg-black">
                                <SelectGroup>
                                    <SelectLabel>Character Length</SelectLabel>
                                    <SelectItem value="small">Small</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="large">Large</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        </div>
                    </div>
                    <Textarea
                        name="code"
                        required
                        value={code}
                        onChange={(e)=>setCode(e.target.value)}
                        placeholder="Paste your code here..."
                        className="border rounded-lg w-full p-3 font-mono text-sm bg-transparent min-h-[300px] w-full max-w-4xl mt-6 bg-gray-50  p-6 rounded-2xl shadow-lg"
                    />
                    <div className="w-full flex justify-center">
                        <Button
                            type="submit"
                            disabled={isPending}
                            className=" px-6 py-2 rounded-lg text-white font-semibold hover:bg-gray-900 cursor-pointer transition disabled:opacity-50 rounded-lg shadow-lg dark:bg-black dark:bg-white dark:text-black"
                        >
                        {isPending ? <><Spinner/> Explaining... </>: "Explain Code"}
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ExplainInput;