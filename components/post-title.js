export default function PostTitle({ children }) {
  return (
    <div className="max-w-4xl mx-auto">
    <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold tracking-tighter leading-snug mb-2 text-left">
      {children}
    </h1>
    </div>
  )
}
