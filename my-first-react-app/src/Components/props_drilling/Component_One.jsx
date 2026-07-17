import Component_Two from "./Component_two";

export default function Component_One({message}) {
  return (
    <div>
        <h1>Component_One - only carry the message</h1>
        <Component_Two message={message}/>
    </div>
  )
}