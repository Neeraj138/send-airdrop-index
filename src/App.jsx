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

      {/* Table Section */}
      <div className="m-auto max-w-7xl p-4">
        <DemoPage />
      </div>

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
