import './App.css'

function App() {
  const students = 43000;
  const name = "Ahmet Taha";
  const dogruMu = true;
  return (
      <div>
        <p>students</p>
        <p style={{
          backgroundColor:'blue',
          width:'250px'
        }}>{students}</p>
        <p>Adı == {name}</p>
        <p>Can</p>
        {dogruMu ? <p>Öğrenci</p> : <p>Öğretmen</p>}
      </div>
  )
}

export default App
