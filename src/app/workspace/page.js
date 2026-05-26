import Header from '@/components/layout/Header';
import AuroraBackground from '@/components/ui/AuroraBackground';

export default function WorkspacePage() {
  return (
    <AuroraBackground className="min-h-screen">
      <Header />

      <div className="relative z-10 p-8">
        <h1 className="text-3xl font-semibold">
          Workspace
        </h1>
      </div>
    </AuroraBackground>
  );
}