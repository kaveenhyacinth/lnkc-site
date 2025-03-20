import React from 'react'
import Header from "@/components/Molecules/Header";
import Footer from "@/components/Molecules/Footer";

export default function Page({children}: {children: React.ReactNode}) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
