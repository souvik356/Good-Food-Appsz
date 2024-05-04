import React from 'react'
import Card from './Card'
import{useEffect,useState} from 'react'
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import Circle from './Circle';
import { URL } from '../../utils/Constants';

function Container() {
    const [data,setData] = useState([]);
    const [circle,setCircle]=useState([]);
    useEffect(()=>{
        getData();
    },[])
    const getData = async()=>{
        const data = await fetch(URL);
        const json = await data.json();
        //console.log(json);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setData(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        console.log(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
        setCircle(json.data.cards[0].card.card.gridElements.infoWithStyle.info);
    }
    if(data.length === 0){
        return <Shimmer/>
    }
  return (
    <>
       <div className='p-5'>
         <h1 className='text-xl font-bold'>What's on your mind</h1>
         <div className='flex overflow-x-auto'>
            {
                circle.map((elem)=> <Circle data={elem}/>)
            }
         </div>
       </div>
       <h1 className='font-bold text-xl p-5'>Restaurents near me</h1>
       <div className='flex p-4 flex-wrap gap-2'>
           {
            data.map((elem)=>{
                return(
                    <Link key={elem.info.id} to={'restaurent/'+elem.info.id}><Card data={elem}/></Link>
                )
            })
           }
        </div>
    </>
  )
}

export default Container