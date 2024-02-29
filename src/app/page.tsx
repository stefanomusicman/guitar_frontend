import React, { Fragment } from "react";
import { Metadata } from "next";
import HomeContent from "@/components/home/homeContent";

export const metadata: Metadata = {
  title: 'Home',
  description: 'This is the main page of the site'
}

export default function Home() {
  return (
    <Fragment>
      <HomeContent />
    </Fragment>
  )
}
