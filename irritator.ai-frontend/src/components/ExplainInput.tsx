import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { Spinner } from "@/components/ui/spinner";

interface ExplainInputProps {
  formAction: (formData: FormData) => void;
  isPending: boolean;
  className?: string; 
  hideHeading?: boolean;
}

const ExplainInput = ({ formAction, isPending, className,hideHeading }: ExplainInputProps) => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [charLength, setCharLength] = useState("");

  return (
    <div className={`${className ?? "w-full"} flex flex-col items-center justify-center h-full md:p-10`}>
      <h1
        className={`text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent mb-2 leading-tight transition-all duration-300 ${
        hideHeading ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}
      >
        Understand Your Code Instantly
      </h1>
      <h1
        className={`text-4xl sm:text-5xl font-extrabold text-center bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 bg-clip-text text-transparent mb-2 leading-tight transition-all duration-300 ${
        !hideHeading ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}
      >
        Got it now ?
      </h1>

      <p
        className={`text-sm sm:text-md text-center text-black dark:text-white text-md mb-8 transition-all duration-300 ${
        hideHeading ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}
      >
        Paste your code below and get a clear, human friendly explanation.
      </p>
      <form
        action={formAction}
        className="relative w-full pt-6 pb-3 px-5 rounded-xl border border-black/20 dark:border-white/20 bg-gray-50 dark:bg-input/30 backdrop-blur-xl flex flex-col items-center justify-center shadow-none overflow-hidden"
      >
        <Textarea
          name="code"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Paste your code here..."
          rows={4}
          className="flex min-h-[100px] sm:min-h-[50px] max-h-[300px] h-fit w-full rounded-md border-none text-base md:text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none overflow-y-auto bg-transparent dark:text-white bg-transparent dark:bg-transparent shadow-none"
        />

        <div className="flex justify-between items-center w-full mt-6 z-10 flex-col sm:flex-row gap-3">
          <div className="flex sm:flex-row gap-3 w-full">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="flex h-8 items-center focus-visible:outline-none focus-visible:ring-0 justify-center gap-1 w-full sm:w-[100px] text-xs bg-[rgba(229,231,235,0.3)] dark:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 rounded-lg backdrop-blur-lg border border-gray-400/50 dark:border-white/20 dark:text-white">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent className="rounded-md shadow-md bg-white/90 dark:bg-zinc-900">
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
            <input type="hidden" name="language" value={language} />

            <Select value={charLength} onValueChange={setCharLength}>
              <SelectTrigger className="flex h-8 items-center focus-visible:outline-none focus-visible:ring-0 justify-center gap-1 w-full sm:w-[100px] text-xs bg-[rgba(229,231,235,0.3)] dark:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300 rounded-lg backdrop-blur-lg border border-gray-400/50 dark:border-white/20 dark:text-white">
                <SelectValue placeholder="Length" />
              </SelectTrigger>
              <SelectContent className="rounded-md shadow-md bg-white/90 dark:bg-zinc-900">
                <SelectGroup>
                  <SelectLabel>Character Length</SelectLabel>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <input type="hidden" name="charLength" value={charLength} />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="flex w-full sm:w-fit h-8 items-center gap-2 px-3 text-xs bg-[rgba(229,231,235,0.3)] dark:bg-[rgba(0,0,0,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(0,0,0,0.05)] rounded-lg backdrop-blur-lg border border-gray-400/50 dark:border-white/20 text-black dark:text-white transition-all duration-300"
          >
            {isPending ? (
              <>
                <Spinner /> Explaining...
              </>
            ) : (
              "Explain"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ExplainInput;
