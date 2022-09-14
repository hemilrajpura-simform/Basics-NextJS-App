// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  console.log(data)
  return (
    <>
  {data.map((item)=>(
    <>
    <p>{item.title}</p>
    <Image src={item.url} height={200} width={200} alt={item.title} />
    </>
  ))}
    </>
  )
}

export async function getServerSideProps(){
    // Fetch data from external API
    const res = await fetch
    (`https://jsonplaceholder.typicode.com/photos `)
    const data = await res.json();

    return{
      props:{data:data}
    }
}