import Button from './components/Button'

function App() {
  const handleClick = () => {
    alert('Кнопка працює!')
  }

  return (
    <div>
      <h1>Мій React проект</h1>

      <Button 
        text="Нажми на мене"
        type="button"
        onClick={handleClick}
      />
    </div>
  )
}

export default App