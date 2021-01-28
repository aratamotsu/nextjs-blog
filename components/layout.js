import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-full">

        <main>{children}</main>
      </div>
    </>
  )
}
