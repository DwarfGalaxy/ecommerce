const FormatPrice=({price})=>{
    return Intl.NumberFormat('de-DE', { 
        style: 'currency', 
        currency: 'EUR',
    maximumFractionDigits:2,
 }).format(price/100);
}

export default FormatPrice