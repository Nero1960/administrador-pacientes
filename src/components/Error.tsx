
const Error = ({children} : {children : React.ReactNode}) => {
  return (
    <p className="text-center text-sm my-4 bg-red-600 uppercase text-white p-2">{children}</p>
  )
}

export default Error