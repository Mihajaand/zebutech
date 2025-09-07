
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative">
        <div className="w-12 h-12 border-1 border-t-transparent border-amber-400 rounded-full animate-spin blur-sm opacity-60 ">
          </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-slate-800 text-lg font-semibold animate-pulse tracking-widest">Chargement...</span>
        </div>
      </div>
    </div>
  );
}
