import '../styles/no_image.png';
import notification from './notification';

async function get_results(query, category, sort, index) {
    let array = []

    let url = "https://www.googleapis.com/books/v1/volumes?q=";
    if (category === 'all') {
        url = "https://www.googleapis.com/books/v1/volumes?q=" + query + 
        "&orderBy=" + sort + "&maxResults=30&startIndex=" + index + "&key=" + process.env.REACT_APP_API_KEY;
    }
    else {
        url = "https://www.googleapis.com/books/v1/volumes?q=" + query + "+subject:" + category + 
        "&orderBy=" + sort + "&maxResults=30&startIndex=" + index + "&key=" + process.env.REACT_APP_API_KEY;
    }
    let result = await fetch(url).catch(error => notification("Вероятно, соединение прервано"));

    if (result.ok) {
        await result.json()
        .then((data) => {
            let i = index;
            for (const item of data.items) {
                try {
                    let _title = item.volumeInfo.title != null ? item.volumeInfo.title : "";
                    let _categories = item.volumeInfo.categories != null ? item.volumeInfo.categories : "";
                    let _authors = item.volumeInfo.authors != null ? item.volumeInfo.authors : "";
                    let _image = item.volumeInfo.imageLinks.thumbnail != null ? item.volumeInfo.imageLinks.thumbnail : "";
                    let _desc = item.volumeInfo.description != null ? item.volumeInfo.description : "";


                    array.push([_title, _categories, _authors, _image, i, _desc]);
                    //array.push(new BookInfo(item.volumeInfo.title, item.volumeInfo.categories, item.volumeInfo.authors, item.volumeInfo.imageLinks.thumbnail));
                    i++;
                }
                catch(error) {
                    console.log(error);
                }
            }
            });
        return [array, array.length, index + array.length];
    }
    else {
        notification("Ошибка в запросе, убедитесь, что вы не оставили поле поиска пустым");

        return [[], 0, 0];
    }
}
export default get_results;
