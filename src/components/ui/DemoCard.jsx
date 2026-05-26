import Image from 'next/image';
import PrimaryButton from './PrimaryButton';

export const DemoCard = ({ item }) => {
    return (
        <div
      key={item.id}
      className={`group w-full overflow-hidden border backdrop-blur-xl transition duration-300 hover:-translate-y-1 p-4 border-[#bbb] ${item.type === 'coming-soon' ? 'grayscale-60' : ''}`}
    >
      {/* Image */}
      <div className="relative h-fit overflow-hidden rounded-md">
        {item.type === 'coming-soon' && <div className="absolute top-0 right-0 z-10 flex h-full w-full items-center justify-center bg-black/50 text-white">Coming Soon</div>}
        <Image src={item.image} alt={item.title} className={`h-fit w-full object-cover transition duration-500 group-hover:scale-105 ${item.type === 'coming-soon' ? 'blur' : ''}`} />
      </div>

      {/* Content */}
      <div className="p-2 flex flex-col gap-2 items-start justify-between">
        <div className="flex flex-col gap-2 items-start mb-4">
        <h3 className="text-2xl font-medium tracking-tight text-[var(--primary)] is-font">
          {item.title}
        </h3>

        <p className="text-sm leading-6 text-[#6b6b6b] text-start">
          {item.description}
        </p>
        </div>
        {item.type !== 'coming-soon' && (
        <PrimaryButton children={item.button} href={item.link} target="_blank" />
        )}
      </div>
    </div>
    )
}