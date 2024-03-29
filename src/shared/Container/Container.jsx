/* eslint-disable react/prop-types */
const Container = ({ children }) => {
    return (
      <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-6 my-28'>
        {children}
      </div>
    )
  }
  
  export default Container