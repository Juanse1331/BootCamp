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
      <DigitButton onClick={handleAddDigit} digit="6"/>
      <DigitButton onClick={handleAddDigit} digit="7"/>
      <DigitButton onClick={handleAddDigit} digit="8"/>
      <DigitButton onClick={handleAddDigit} digit="9"/>
      <DigitButton onClick={handleAddDigit} digit="0"/>
      </>
  );
}

export default App;
