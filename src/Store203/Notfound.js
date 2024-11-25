import { useEffect } from "react"

export default function Notfound() {
    useEffect(()=>{
        setTimeout(()=>{
            window.location.href="/"
        },1000)
    },[])
  return (
    <div>Notfound</div>
  )
}
