export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="neo-card p-8 text-center max-w-2xl w-full">
        <h1 className="text-6xl font-black mb-6 uppercase tracking-tight">AutoPay</h1>
        <p className="text-xl font-bold mb-8">
          The Web3 paywall platform. Pay $0.10 in USDC to unlock premium content.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="neo-button bg-[#00FFFF] px-8 py-4 text-xl">
            Login with Email
          </button>
        </div>
      </div>
    </main>
  );
}
