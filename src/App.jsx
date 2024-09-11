import DigitButton from './components/botones-calc';
function App() {

  const handleAddDigit = (digit) => {
    console.log('El numero presionado es: ', digit)
  }

  return (
    <>
      <DigitButton onClick={handleAddDigit} digit="1"/>
      <DigitButton onClick={handleAddDigit} digit="2"/>
      <DigitButton onClick={handleAddDigit} digit="3"/>
      <DigitButton onClick={handleAddDigit} digit="4"/>
      <DigitButton onClick={handleAddDigit} digit="5"/>
      </>
  );
}

export default App;
