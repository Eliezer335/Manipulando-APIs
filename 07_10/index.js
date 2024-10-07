
const createCards = () => {
    let data =[];
    axios.get("https://jsonplaceholder.typicode.com/posts").then((Response) =>{
        data = Response.data;
    }).catch((error) => {
        console.log("deu um erro cabuloso",error)
        console.error(error);
    })
};

createCards();