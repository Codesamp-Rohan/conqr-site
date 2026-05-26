'use client';

export default function AuroraBackground({
  children,
  className = '',
}) {
  return (
    <div
      className={`relative overflow-hidden bg-[#f5eee6] ${className}`}
    >
      {/* Main Gradient */}
      <div className="absolute inset-0 aurora-base" />

      {/* Animated Blob 1 */}
      <div className="absolute -left-40 top-[-10%] h-[500px] w-[500px] animate-blob1 rounded-full bg-[#efc08f]/40 blur-3xl" />

      {/* Animated Blob 2 */}
      <div className="absolute right-[-10%] top-[-5%] h-[450px] w-[450px] animate-blob2 rounded-full bg-[#f5d89f]/50 blur-3xl" />

      {/* Animated Blob 3 */}
      <div className="absolute bottom-[-15%] left-[30%] h-[500px] w-[500px] animate-blob3 rounded-full bg-[#f3d8c2]/40 blur-3xl" />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[120px]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] noise-texture" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}