import { useState } from "react";
import DemoPage from "@/components/ui/airdrops/page";

function App() {
  const walletAddress = "J6iLH9WBxW4JPGjLhRDyCRqcEWEvp1b1uhJsNhYYEs3r";
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  };

  return (
    <div className="min-h-screen bg-blue-500 py-10 px-4">
      <div className="m-auto max-w-4xl text-center">
        {/* Header Section */}
        <h1 className="flex items-center justify-center text-2xl text-blue-100 font-semibold md:text-6xl md:leading-snug">
          Exclusive Airdrops for $SEND Loyalty Hodlers 🚀
        </h1>
        <p className="text-blue-100 text-lg font-medium md:text-xl py-5">
          Flex your rewards and claim exclusive airdrops for being a loyal $SEND
          hodler! Join the SEND Loyalty Telegram Group now via{" "}
          <a
            href="https://x.com/thesendcoin"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            @thesendcoin
          </a>
          &nbsp;and start stacking your rewards!
        </p>
      </div>

      {/* Ecosystem Section */}
      <div className="flex flex-col items-center justify-center my-10">
        <div className="relative w-64 h-64">
          {/* Center Image */}
          <img
            src="/sendit.jpg"
            alt="sendit"
            className="absolute w-32 h-32 rounded-full border-4 border-blue-300"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Derivative Images */}
          <img
            src="/ideasdotfun.jpg"
            alt="ideasdotfun"
            className="absolute w-20 h-20 rounded-full border-4 border-blue-300"
            style={{
              top: "10%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <img
            src="/sendaifun.jpg"
            alt="sendaifun"
            className="absolute w-20 h-20 rounded-full border-4 border-blue-300"
            style={{
              top: "50%",
              left: "10%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <img
            src="/trai.png"
            alt="trai"
            className="absolute w-20 h-20 rounded-full border-4 border-blue-300"
            style={{
              bottom: "10%",
              left: "50%",
              transform: "translate(-50%, 50%)",
            }}
          />
          <img
            src="/sendarcade.jpg"
            alt="sendarcade"
            className="absolute w-20 h-20 rounded-full border-4 border-blue-300"
            style={{
              top: "50%",
              right: "10%",
              transform: "translate(50%, -50%)",
            }}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="m-auto max-w-7xl p-4">
        <DemoPage />
      </div>

      {/* Footer Section */}
      <footer className="text-center py-4 rounded-t-lg">
        <p className="text-blue-100 text-xl">
          Buy me a chocolate! 🍫 Send $SEND or $SOL to:{" "}
          <span className="font-mono font-semibold text-yellow-300 break-words">
            {walletAddress}
          </span>
          <button
            onClick={handleCopy}
            className="ml-4 px-3 py-1 bg-yellow-300 text-blue-800 rounded-lg font-medium hover:bg-yellow-400"
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </p>
      </footer>
    </div>
  );
}

export default App;
