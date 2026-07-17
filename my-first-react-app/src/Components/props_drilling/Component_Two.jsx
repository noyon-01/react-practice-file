import Component_Three from "./Conponent_three";

export default function Component_Two({message}) {
  return (
    <div>
        <h1>Component_Two - only carry the message</h1>
        <Component_Three message={message}/>
    </div>
  )
}