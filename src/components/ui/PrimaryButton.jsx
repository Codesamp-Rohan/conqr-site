import Link from 'next/link';

export default function PrimaryButton({children, href = '/', target = '' }) {
  return (
    <Link href={href} className="primary-button" target={target}>
      {children}
    </Link>
  );
}