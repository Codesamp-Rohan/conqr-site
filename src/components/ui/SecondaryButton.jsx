export default function Button({ children }) {
  return (
    <button className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
      {children}
    </button>
  );
}