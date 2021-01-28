import Container from './container'
import Link from 'next/link'
import FooterStories from '../components/footer-more-stories'

export default function Footer({ recentPosts }) {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 bottom-0">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="py-8 flex flex-col md:flex-row ">
            <div className="mb-10 md:mb-0 md:pr-8 md:w-1/2">
              <h3 className="border-b border-gray-400 border-solid mb-5 text-2xl lg:text-2xl font-bold tracking-tighter text-center leading-tight md:text-left">
                Articles
              </h3>
              <FooterStories posts={recentPosts}/>
            </div>
            <div className="mb-10 md:mb-0 md:pl-8 md:w-1/2">
              <h3 className="border-b border-gray-400 border-solid mb-5 text-2xl lg:text-2xl font-bold tracking-tighter text-center leading-tight md:text-left">
                About
              </h3>
              <div className="float-left lg:float-left mr-3 mb-2">
                <Link href="/about">
                  <a>
                    <img className="rounded-full w-24 md:w-24"
                      src="/images/profile.jpg"
                    />
                  </a>
                </Link>
              </div>
              <div className="">
                <Link href="/about">
                  <a className="font-medium">Aratamotsu</a>
                </Link>
                <p className="mt-1">院：物理（D）→ 社会人3年目。統計学や計量経済学を勉強している実務者／事務方。 トリックスターと言われたい。競プロはじめました。</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}


