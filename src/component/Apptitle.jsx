export default function Apptitle(props) {
  const {
    title = 'box-office',
    subTitle = 'Are you looking for movie or actor',
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
}
