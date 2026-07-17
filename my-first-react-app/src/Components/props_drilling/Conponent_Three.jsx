export default function Component_Three({ message }) {
  return (
    <div>
      <h1>Component Three: {message}</h1>
      <h3>
        This is main problem of props_drilling because component_one and
        component_two only carry message not use. So props_drilling is bad
        practice.
      </h3>
    </div>
  );
}
