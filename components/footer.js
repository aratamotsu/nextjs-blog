import Container from './container'
import Link from 'next/link'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="max-w-3xl mx-auto px-5">
          <div className="py-12 flex flex-col lg:flex-row ">
            <div className="mb-10 lg:mb-0 lg:pr-8 lg:w-1/2">
              <h3 className="border-b border-gray-400 border-solid mb-5 text-2xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left">
                articles
              </h3>
              <ul>
              </ul>
            </div>
            <div className="mb-10 lg:mb-0 lg:pl-8 lg:w-1/2">
              <h3 className="border-b border-gray-400 border-solid mb-5 text-2xl lg:text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left">
                about
              </h3>
              <div className="lg:float-left mr-3 mb-2">
                <Link href="/about">
                  <a>
                    <img className="rounded-full md:w-24"
                      src="/images/profile.jpg"
                    />
                  </a>
                </Link>
                </div>
                <div className="">
                  <Link href="/about">
                    <a className="font-medium">Aratamotsu</a>
                  </Link>
                  <p className="mt-1">院：物理（D）→社会人： 統計（調査）を作る→法令・組織の窓口→出向中。 統計学や計量経済学を勉強している実務者／事務方。 トリックスターと言われたい。</p>
                </div>
              
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
