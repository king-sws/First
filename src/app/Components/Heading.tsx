import { FC } from "react";

interface HeadingProps {
    title:string
    isCenter?:boolean
}
 
const Heading: FC<HeadingProps> = ({title , isCenter }) => {
    return ( 
        <h1 className={`bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl md:text-4xl font-extrabold lg:text-5xl ${isCenter && 'text-center' } `}  > {title} </h1>
     );
}
 
export default Heading;