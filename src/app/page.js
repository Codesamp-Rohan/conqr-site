import Header from '@/components/layout/Header';
import AuroraBackground from '@/components/ui/AuroraBackground';
import { DemoCard } from '@/components/ui/DemoCard';
import PrimaryButton from '@/components/ui/PrimaryButton';
import rnc from '../../public/rnc.png'
import word from '../../public/word-add-in.png'

const products = [
  {
    id: 1,
    title: 'Conqr Editor',
    description:
      'AI-powered Word Add-in for drafting, editing, and legal assistance directly inside documents.',
    image: word,
    button: 'View Demo',
    type: 'available',
    link: 'https://conqr-editor.vercel.app'
  },

  {
    id: 2,
    title: 'Review & Check',
    description:
      'Instantly review contracts and legal documents for risks, inconsistencies, and missing clauses.',
    image: rnc,
    button: 'View Demo',
    type: 'available',
    link: 'https://conqr-rnc.vercel.app'
  },
  {
    id: 3,
    title: 'Comming Soon',
    description:
      'Comming Soon',
    image: rnc,
    button: 'View Demo',
    type: 'coming-soon',
  }
];

export default function Home() {
  return (
    <AuroraBackground className="min-h-screen">
      <Header />

      <section className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
        <span className="flex items-center gap-2 is-font text-[32px] font-medium tracking-tight">
        <h1 className=" text-[var(--primary)]">
          Conqr.ai
        </h1>

        <h2 className="text-[#111]">
          Demos
        </h2>
        </span>

        <p className="mt-3 mb-6 max-w-2xl text-center text-md leading-6 text-[#6d6d6d]">
  Conqr.ai builds intelligent legal tools — from AI-powered Word Add-ins
  to Review & Check and Briefcase — helping legal teams work faster,
  smarter, and more efficiently.
</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
  {products.map((item) => (
    <DemoCard item={item} key={item.id}/>
  ))}
</div>
      </section>
    </AuroraBackground>
  );
}