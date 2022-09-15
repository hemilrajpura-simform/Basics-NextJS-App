import Image from 'next/image'
import Link from 'next/link'

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <div> <Link href="/ssr"> click here for fetching data by SSR(server side)</Link></div>
      <div><Link href="/ssg"> click here for fetching data by SSG(static)</Link></div>
    </>
  )
}

