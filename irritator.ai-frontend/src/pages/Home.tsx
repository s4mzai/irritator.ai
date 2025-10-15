import ExplainInput from "@/components/ExplainInput";
import ExplainOutput from "@/components/ExplainOutput";
import { useActionState } from "react";
import { explain } from "@/actions/index.ts";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Home = () => {
  const [formState, formAction, isPending] = useActionState(explain, null);

  return (
    <div
      className={`min-h-[100dvh] w-screen p-4 md:p-8 lg:p-10 flex flex-col items-center justify-center ${
        formState
          ? "md:flex-row md:items-start md:justify-center lg:justify-between"
          : "flex-col justify-center items-center"
      } mx-auto max-w-7xl gap-6 lg:gap-10`}
    >
      {formState && (
        <Button
          onClick={() => window.location.reload()}
          className="absolute top-3 left-4 bg-transparent hover:bg-input rounded-lg backdrop-blur-lg text-black dark:text-white transition-all duration-300"
        >
          <ArrowLeft /> Back
        </Button>
      )}

      {/* Input Section */}
      <ExplainInput
        formAction={formAction}
        isPending={isPending}
        className={`transition-all duration-300 w-full ${
          formState
            ? "xl:w-[50%]"
            : "max-w-3xl sm:max-w-4xl"
        }`}
        hideHeading={!!formState}
      />

      {/* Output Section */}
      {formState && (
        <ExplainOutput
          formState={formState}
          isPending={isPending}
          className="transition-all duration-300 w-full xl:w-[50%] md:pt-10"
        />
      )}
    </div>
  );
};

export default Home;
