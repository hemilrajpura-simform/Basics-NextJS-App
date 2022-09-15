import Image from 'next/image'
import Link from 'next/link'

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Link href="/ssr"> click here for fetching data by SSR(server side)</Link>
      <Link href="/ssg"> click here for fetching data by SSG(static)</Link>
    </>
  )
}

