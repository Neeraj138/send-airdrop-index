import DemoPage from "@/components/ui/airdrops/page";

function App() {
  return (
    <div className="min-h-screen bg-blue-500 py-10">
      <div className="m-auto max-w-5xl text-center">
        <h1 className="flex items-center justify-center text-7xl text-blue-100 font-medium">
          Airdrop Index EXCLUSIVE to $SEND Loyalty hodlers
        </h1>
        <h1 className="flex items-center justify-center text-blue-100 font-medium py-5 text-xl">
          This is a dashboard to flex all the airdrops that I've received for being a $send loyal holder ;) What are you waiting for? Join the send loyal telegram group and get comfy with your airdrops.
        </h1>
        <h1 className="flex items-center justify-center text-blue-100 font-medium text-xl">
          You can join from the pinned tweet of the SEND coin official handle here - &nbsp; <a href="https://x.com/thesendcoin" className="underline" target="_blank">@thesendcoin</a>
        </h1>
      </div>
      <DemoPage />
    </div>
  );
}

export default App;
