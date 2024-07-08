function Controller(){
  console.log(2);

  return (
    <div className="box">
    <button type="button" onClick={() => {
      props.setCount(props.count - 10);
    }}> -10 </button>
    <button type="button" onClick={() => {
      props.setCount(props.count - 1);
    }}> -1 </button>
    <button type="button" onClick={() => {

    }}> +1 </button>
    <button type="button" onClick={() => {

    }}> +10 </button>
    
  </div>
  );
}

export default Controller;