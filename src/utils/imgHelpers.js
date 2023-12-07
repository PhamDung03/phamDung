import defaultProductImg from "../img/Giay1.webp"; 

export const formatImg = (image) => {
    return image ? `http://localhost:8080${image}` : defaultProductImg ;
}