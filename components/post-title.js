export default function PostTitle({ children }) {
  return (
    <div className="max-w-4xl mx-auto">
    <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-2 text-center md:text-left">
      {children}
    </h1>
    </div>
  )
}
