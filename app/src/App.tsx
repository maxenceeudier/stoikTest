import { useState } from "react";
import "./App.css";
import { toast } from "react-hot-toast";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);

  const handleShorten = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: value }),
      });
      const { ok, data } = await response.json();
      if (ok) {
        setShortenedUrl(data.shortUrl);
        //clear the input
        setValue("");
        toast.success("URL shortened successfully");
      } else toast.error("Error shortening URL");
    } catch (e) {
      console.log(e);
      toast.error("Error shortening URL");
    }
    setIsLoading(false);
  };

  const initValues = () => {
    setOpen(false);
    setShortenedUrl(null);
    setValue("");
  };

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen flex flex-col gap-5 justify-center items-center  bg-gradient-to-r from-violet-400 to-fuchsia-100"
      onClick={initValues}
    >
      <h1 className="text-[80px] font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
        Shorty
      </h1>
      <div
        className={` px-3 py-2 overflow-hidden flex transition-all duration-1000 ease-in-out  justify-center items-center rounded-xl shadow-xl backdrop-blur-md bg-white/30 ${
          open ? "w-1/2 h-1/2 lg:w-1/4 lg:h-1/4" : "w-1/6 h-20 "
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {!open && (
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="text-2xl font-bold text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text w-full h-full"
          >
            get shorter
          </button>
        )}

        <div
          className={`flex flex-col gap-5 justify-center items-center ${
            open
              ? "transition-opacity delay-500 duration-1000 ease-in-out opcity-100 w-full "
              : "opacity-0 w-0"
          }`}
        >
          <h1 className="text-2xl font-semibold text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text">
            Paste your long URL
          </h1>
          <div className="grid grid-cols-4 gap-2">
            <input
              className="overflow-auto col-span-4 md:col-span-3 rounded-lg shadow-insetNeomorphisme  p-4 h-10 text-xl text-fuchsia-500 bg-white/20  focus:outline-none focus:ring-0 focus:border"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="button"
              className="col-span-4 md:col-span-1 px-5 rounded-lg  bg-gradient-to-r from-violet-500 hover:from-violet-600 to-fuchsia-500 hover:to-fuchsia-600 text-white flex justify-center items-center gap-4"
              onClick={handleShorten}
            >
              {isLoading ? <Loader /> : "Shorten"}
            </button>
          </div>

          {shortenedUrl && (
            <div className={`animate-translateYBounce`}>
              <a
                href={shortenedUrl}
                target="blank_"
                className="text text-white px-3 py-2 italic rounded-xl bg-gradient-to-r from-violet-500 hover:from-violet-600 to-fuchsia-500 hover:to-fuchsia-600"
              >
                {shortenedUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="border-l-gray-300 animate-spin text-gray-100 inline-block h-8 w-8 border-2 rounded-full"
        role="status"
      >
        <span className="hidden">Loading...</span>
      </div>
    </div>
  );
};
