

const App = () =>{

  const getMessages=async()=>{
    const options = {
      method : 'POST',
      body : JSON.stringify({
        message : "hello how are you?"
      }),
      headers : {
        "Content-Type": "application/json"
      }
    }
try{
await fetch('http://localhost:8000/completions' , options)
} catch(err) {
  console.log(err)
}
  }
  return (
    <div className="app">
     <section className="side-bar">
     <button>+ New chat</button>
     <ul className="history">
      <li>ll</li>
     </ul>
     <nav>
      <p>Made by Rajshree Rajoliya</p>
     </nav>
     </section>

     <section className="main">
      <h1>RajshreeGPT</h1>
      <ul className="feed"></ul>
      <div className="bottom-section">
        <div className="input-container">
          <input/>
          <div id="submit" onClick={getMessages}>*</div>
        </div>
        <p className="info">Chat GPT Mar 14 Version. Free Research Preview.
Our goal is to make AI systems more natural and safe to interact with.
Your feedback wilt help us improve.
</p>
      </div>
     </section>
    </div>
  );
}

export default App;
