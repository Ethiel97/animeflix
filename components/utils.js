

const AnimeProp = ({ Icon, text, children, IconColor }) => {
    return (
        <div className='flex flex-row items-center justify-start'>
            {children && children}
            <div className='text-white text-xs sm:text-sm md:text-base ml-1'>{text}</div>
        </div>
    )
}

const AnimePropItem = (props) => {
    return (
        <div className='mx-2'>
            {props.children ?
                <AnimeProp text={`${props.label}: ${props.text}`} >
                    {props.children}
                </AnimeProp> : <div className='my-2'>
                    <span className='text-white font-bold'>{capitalize(props.label)}</span>
                    <div className='italic text-sm text-white opacity-80'>{props.text}</div>
                </div>}
        </div>
    )
}

//write a function to capitalize the first letter of a string
const capitalize = (str) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}


export {
    AnimePropItem,
    AnimeProp,
}