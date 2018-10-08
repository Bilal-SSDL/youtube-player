import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCouFkqRpesYRxYyMJJMWreBICWzPIrgvo';

export const videoSearch=(searchTerm) =>  {
    
    return new Promise((resolve, reject) => {
        YTSearch({key: API_KEY, term: searchTerm, maxResults:20}, (dataReturn)  => {
            
    if (dataReturn!==null) {
    resolve(dataReturn);
    } else {
    reject();
    }
    });
    });

 };

