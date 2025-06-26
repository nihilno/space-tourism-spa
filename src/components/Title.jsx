export default function Title({ part, title }) {
  return (
    <h1 className="center title">
      <span>0{part}</span>
      {title}
    </h1>
  );
}
