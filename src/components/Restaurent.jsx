import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import DiscountCard from './DiscountCard';
import Menu from './Menu';
import Cart from './Cart';
import Footer from './Footer';
import Shimmer2 from './Shimmer2';

const Restaurent = ({addToCart}) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);
  const [menuData,setMenuData] = useState([]);
  const {resId} = useParams();
  const [cart,setCart] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.93058&lng=77.508911&restaurantId='+resId);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const json = await response.json();
      console.log(json);
      setResInfo(json?.data);
      setMenuData(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
      console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
    } catch (error) {
      setError(error.message);
    }
  };
  if(menuData.length ===0){
    return <Shimmer2/>
  }

  return (
    <>
      <div className='flex items-center justify-center flex-col'>
        {error && <div>Error: {error}</div>}
        {resInfo && (
          <>
            <h1 className='font-bold text-xl mt-6 mb-6'>{resInfo.cards[2].card.card.info.name}</h1>
            <div className='p-3 w-[500px] h-[170px] shadow-2xl rounded-lg'>
            <div className='flex items-center gap-3'>
            <FaStar /> <h2>{resInfo.cards[2].card.card.info.avgRating}</h2>
            <h2>({resInfo.cards[2].card.card.info.totalRatingsString})</h2>
            <LuDot />
            <h2>{resInfo.cards[2].card.card.info.costForTwoMessage}</h2>
            </div>
            <h2 className='mt-1 mb-1 text-orange-600'>{resInfo.cards[2].card.card.info.cuisines.join(',')}</h2>
            <div className='flex flex-col gap-1'>
                <h3>Outlet:- {resInfo.cards[2].card.card.info.areaName}</h3>
                <h3>{resInfo.cards[2].card.card.info.sla.slaString}</h3>
            </div>
            </div>
            <h1 className='mt-4 mb-1 font-bold'>Deals for you</h1>
            <div className='flex items-center justify-center gap-12'>
                {/* {
                    resInfo.cards[2].card.card.info.aggregatedDiscountInfo.shortDescriptionList.map((elem,index)=><DiscountCard data={elem}/>)
                } */}
                {
                    resInfo.cards[2].card.card.info.aggregatedDiscountInfo.descriptionList.map((elem)=><DiscountCard data={elem}/>)

                }
            </div>
            <div className='flex flex-col gap-3'>
                <h1 className='font-bold text-lg text-center mb-3 mt-4'>Menu</h1>
                {
                    menuData.map((elem)=><Menu data = {elem}/>)
                }
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Restaurent;
