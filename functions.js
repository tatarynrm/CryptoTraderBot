const getData = async () => {
    let result = [];
    const date = new Date();
    const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=USDTUAH');
    console.log(res);
    const data = await res.json();
    result.push(data);
    // Що нам приходть з сервера
    console.log(data);
    let dateForTG = {
        date: date.toLocaleDateString(),
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    }

    result.push(dateForTG)
    console.log(result);
    const sec = result[1].seconds;
    const price = +result[0].price;
    return console.log(result);
}

module.exports.getData = getData;