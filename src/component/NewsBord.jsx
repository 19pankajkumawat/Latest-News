import { useEffect, useState } from "react"
import Newsitem from "./Newsitem";

const NewsBord = ({category}) => {
    
    const[articles,setArticles] = useState([]);
    useEffect (()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&catagory=${category}&apiKey=a016408ffeed4f92a67595959b62525f`  // ${import.meta.env.VITE_API_KEY} 
        fetch(url).then(response => response.json()).then(data=> setArticles(data.articles));
    },[category])
    return(
        <>
        <h2  className='text-center '>Latest <span className='bg-danger badge text-light'> News </span> </h2>
        {articles.map((news,index)=>{
         return <Newsitem key={index}title ={news.title} descripstion={news.descripstion} src ={news.image} url={news.url}/>
        })}  
        </>

    )
}







export default NewsBord
// const News =() =>{
//     const [articless,setArticless] = useState([]);

//     useEffect(()=>{
//         let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
//         fetch(url).then(response=> response.json()).then(data=>setArticless(data.articless)); 
//     },[])
//   return (
    //       <h2  className='text-center '>Latest <span className='bg-danger badge text-light'> News   </span> </h2> 
//     <>
//        {articless.map((news,index)=>{
//         return <Newsitem key={index}title ={news.title} descripstion={news.descripstion} src ={news.urlToimage} url={news.url}/>
//        })} 
//     </>
//   ) 
// }

 