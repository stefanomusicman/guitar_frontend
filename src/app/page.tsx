'use client';
import React, { Fragment, useEffect } from "react";
import { Metadata } from "next";
import HomeContent from "@/components/home/homeContent";
import { FIREBASE_API } from "@/config-global";

// export const metadata: Metadata = {
//   title: 'Home',
//   description: 'This is the main page of the site'
// }

export default function Home() {
  useEffect(() => {
    console.log('This is the FIREBASE information');
    console.log(FIREBASE_API);
  }, [])

  return (
    <Fragment>
      <HomeContent />
    </Fragment>
  )
}
