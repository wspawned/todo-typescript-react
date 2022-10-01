import "./styles.css"

const InputField = () => {
  return <form className="input">
    <input type="input" placeholder="Enter Task" className="input-box"/>
    <button className="input-submit" type="submit">
      Go
    </button>
  </form>
}

export default InputField;