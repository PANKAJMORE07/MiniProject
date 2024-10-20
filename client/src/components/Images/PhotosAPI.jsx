
const GetPhotoReference = async (destination, place) => {
    const response = await fetch(`https://maps.gomaps.pro/maps/api/place/textsearch/json?location=${destination}&query=${place}&key=AlzaSy-Qcpa7t4gYVVt4YfpRfhZ2uI_QFWpER0w`);
    const data = await response.json();
    return data.results[0].photos[0].photo_reference;
}

export {GetPhotoReference};
