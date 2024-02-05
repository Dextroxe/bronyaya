import Image from "next/image";
import { FC } from "react";


 interface TextProps {
    text?: string;
    font?: string;
    img?: string;
    width?: number;
    height?: number;
}

const Text:FC<TextProps> = ({text,font,img,height,width}) => {
    return (
        <div>
            {img && <Image src={img} width={width} height={height} alt="not loading" />}
            <p className={`text-${font} bold `}>{text}</p>
        </div>
    );
}

export default Text;

// temp sizeing
// fontSize: {
//     sm: '0.750rem',
//     base: '1rem',
//     xl: '1.333rem',
//     '2xl': '1.777rem',
//     '3xl': '2.369rem',
//     '4xl': '3.158rem',
//     '5xl': '4.210rem',
//   },
//   fontFamily: {
//     heading: 'Sriracha',
//     body: 'Sriracha',
//   },
//   fontWeight: {
//     normal: '400',
//     bold: '700',
//   },