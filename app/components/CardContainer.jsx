import React, { useEffect, useRef, useState } from 'react';
import BurnerCard from './BurnerCard';
import SubscriptionCard from './SubscriptionCard';

const CardContainer = ({ data }) => {
  const [cardCount, setCardCount] = useState(10);
  const lastCardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardCount((prevCount) => prevCount + 10);
        }
      },
      { threshold: 1 }
    );

    if (lastCardRef.current) {
      observer.observe(lastCardRef.current);
    }

    return () => {
      if (lastCardRef.current) {
        observer.unobserve(lastCardRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 justify-center ml-40 mr-40">
      {data.slice(0, cardCount).map((item, index) => {
        if (item.card_type === 'subscription') {
          return <SubscriptionCard key={index} item={item} />;
        } else {
          return <BurnerCard key={index} item={item} />;
        }
      })}
      <div ref={lastCardRef}></div>
    </div>
  );
};

export default CardContainer;
