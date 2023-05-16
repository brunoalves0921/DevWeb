
const Temperatura = () => {
    const CelciusToFahenrite = (celcius) => {
        return (celcius * 9/5) + 32
    }
    const FahenriteToCelcius = (fahenrite) => {
        return (fahenrite - 32) * 5/9
    }
    const kelvin = (k) => {
        return {
            celcius: k - 273.15,
            fahenrite: (k - 273.15) * 9/5 + 32
        }
    }
    return (
        <div>
            <h1>Temperatura</h1>
            <h2>37°C = {CelciusToFahenrite(37).toFixed(2)}°F</h2>
            <h2>100°F = {FahenriteToCelcius(100).toFixed(2)}°C</h2>
            <h2>300°K = {kelvin(300).celcius.toFixed(2)}°C / {kelvin(300).fahenrite.toFixed(2)}°F</h2>
        </div>
    )
}

export default Temperatura

