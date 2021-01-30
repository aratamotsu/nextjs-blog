// components/Share.tsx
import Link from 'next/link'
import React from 'react';
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


export default function BackToHome() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Link href="/" passHref>
        <Button color="primary" variant="outlined" startIcon={<ArrowBackIosIcon/>}>
          <a>Back to home</a>
        </Button>
      </Link>
    </div>
  )
}