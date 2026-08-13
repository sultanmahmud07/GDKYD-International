"use client"
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

const CounterCard = ({ countNumber, name }) => {
  // const { logo, countNumber, name } = data;
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Change this threshold as needed for visibility
    });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  return (
    <div className="single_count flex flex-col justify-center items-center gap-2" ref={countRef}>
     <h4 className="text-3xl md:text-5xl font-bold text-white">
        <CountUp duration={2.75} start={0} end={isVisible ? parseFloat(countNumber) : 0} />+
      </h4>
      <p className='text-[#d4d4d4] text-sm md:text-base'>{name}</p>
    </div>
  );
};

export default CounterCard;
