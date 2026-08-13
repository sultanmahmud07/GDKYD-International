import Image from "next/image"


const MachineCenterCard = ({img}) => {
  return (
   <div  className="px-2">
   <div className="">
     <Image
     width={400}
       src={img}
       alt={"img.name"}
       className="w-full"
     />
   </div>
 </div>
  )
}

export default MachineCenterCard