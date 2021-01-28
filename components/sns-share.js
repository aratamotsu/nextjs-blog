// components/Share.tsx
import React from 'react'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, HatenaShareButton, HatenaIcon } from 'react-share'

export default function Share({ text, url }) {
  return (
    <div className="mt-10">
      <ul className="flex justify-center list-none">
        <li className="mr-5">
          <TwitterShareButton url={url} title={text}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
        </li>
        <li className="mr-5">
          <FacebookShareButton url={url}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </li>
        <li>
          <HatenaShareButton url={url}>
            <HatenaIcon size={32} round={true} />
          </HatenaShareButton>
        </li>
      </ul>
    </div>
    )
}