const isoToString = (iso) => {
    let date = new Date(iso);
    
    return date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate() + ' / ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

export default isoToString