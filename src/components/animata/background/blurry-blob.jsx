export default function BlurryBlob({ className = "" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-1/4 -left-32 h-[600px] w-[600px] rounded-full bg-cyan-500/8 blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full bg-purple-500/8 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-pink-500/6 blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
    </div>
  );
}
