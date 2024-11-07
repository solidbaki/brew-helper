const HeaderAndDescription = (props) => {
  return (
    props.title &&
    props.description && (
      <>
        <h3 className="font-bold text-lg">{props.title}</h3>
        <br />
        <p>{props.description}</p>
        <br />
      </>
    )
  );
};

export default HeaderAndDescription;
