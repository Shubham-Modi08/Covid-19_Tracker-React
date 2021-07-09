import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';


export const Data = async () => {
try {
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
    
    const finalData = { confirmed,recovered,deaths,lastUpdate };

    return finalData;

} catch (error) {
    console.log(error)
}

}

export const countries = async() => {
    try {
        const response = await axios.get('${url}/countries');
        console.log(response)
        return countries.map((country) => country.name);
        
    } catch (error) {
        console.log(error)
    }
}