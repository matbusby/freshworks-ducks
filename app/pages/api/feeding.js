const ENDPOINT = 'http://localhost:2000'

const Feeding = {
    postNewFeeding: (feeding) => {
        return fetch(`${ENDPOINT}/feedings/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(feeding)
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log(``)
            return data;
        }).catch((error) => {
            console.log(`Error posting new feeding - ${error}`)
            return error;
        })
    },

    getAllFeedings: () => {
        return fetch(`${ENDPOINT}/feedings/`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then((response) => {
            return response.json()
        }).then((data) => {
            return data;
        }).catch((error) => {
            console.log(`Error getting feedings - ${error}`)
            return error;
        })
    }
}

export default Feeding;