import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';


export const Data = async () => {
try {
    const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
    
    const finalData = { confirmed,recovered,deaths,lastUpdate };

    return finalData;

} catch (error) {
    
}

}