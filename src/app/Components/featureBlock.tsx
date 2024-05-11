import { FC } from "react";
import Image from "next/image";
import { featureBlock } from "../Type/Type";
import Heading from "./Heading";

interface FeatureBlockProp extends featureBlock {
    isReversed?:boolean
}
 
const FeatureBlock: FC<FeatureBlockProp> = ({title, imageUrl , content, isReversed}) => {
   return (
   <article className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${isReversed && 'lg:flex-row-reverse'}`}>
        <Image src={imageUrl} alt="feature " width={370} height={370} className="basis-5/12 w-full shadow-lg"/>
        <div className="basis-6/12 flex flex-col md:text-center lg:text-start gap-4 md:gap-6">
            <Heading title={title} />
            <p className="lg:max-w-[40rem] ">{content} </p>
        </div>
    </article>
)}
 
export default FeatureBlock;