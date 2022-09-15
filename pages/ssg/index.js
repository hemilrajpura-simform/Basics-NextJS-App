// import Head from 'next/head'
import Image from 'next/image'

export default function Home({data}) {
  console.log(data)
  return (
    <>
  {data.map((item)=>(
    <div key={item.id}>
    {/* <p>{item.title}</p>  */}
    <Image src={item.url+".jpg"} height={200} width={200} alt={item.title} />
    </div>
  ))}
    </>
  )
}

export async function getStaticProps(){
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`)
  const data = await res.json();
  return{
    props:{data:data},
  }
}