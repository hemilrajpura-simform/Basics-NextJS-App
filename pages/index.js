// import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({data}) {
  console.log(data)
  return (
    <>
  {data.map((item)=>(
    <div key={item.id}>
    <p>{item.first_name}</p>
    <img src={item.avatar} height={200} width={200} alt={item.title} />
    </div>
  ))}
    </>
  )
}

export async function getServerSideProps(){
    // Fetch data from external API
    const res = await fetch(`https://reqres.in/api/users?page=2`)
    const data = await res.json();
    // console.log(data.data);

    return{
      props:{data:data.data}
    }
}

export async function getSta(){
  // Fetch data from external API
  const res = await fetch(`https://reqres.in/api/users?page=2`)
  const data = await res.json();
  // console.log(data.data);

  return{
    props:{data:data.data}
  }
}