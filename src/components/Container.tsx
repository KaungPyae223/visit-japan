import { ReactNode } from "react";


type ContainerProps = {
  children : ReactNode
  className: string
}

const Container = ({ children, className }:ContainerProps) => {
    return (
      <div className={`w-full max-w-[1280px] mx-auto ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Container;