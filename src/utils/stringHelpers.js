export const formatDateTime = (datetime) =>{
    const data = new Date(datetime);
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}` 
}   