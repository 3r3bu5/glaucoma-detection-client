const totalPrice = (numberOfCredits) => {
    const price = (Math.round(numberOfCredits * .5 * 100) / 100).toFixed(2)
    return isNaN(price) ? '' : price
}
export default totalPrice