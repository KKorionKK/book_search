import BookCard from '../components/book_card';
import Form from '../components/form';
import { useDispatch, useSelector } from 'react-redux';
import get_results from '../components/get_json';
import { useState } from 'react';

const Home = () => {
    let _index = 0;
    const dispatch = useDispatch();
    const books = useSelector(state => state.books);
    const prev_query = useSelector(state => state.prev_query);
    const [loadBtn, setLoadBtn] = useState('hidden')
    const [results, setResults] = useState(""); 
    const [loading, setLoadingState] = useState('hidden');
  
    async function loadMore() {
      setLoadingState("visible");
      await get_results(prev_query[0], prev_query[1], prev_query[2], bookList.length+1).then((data) => {
        let array = [].concat(books, data[0]);
        dispatch({type: "GET_BOOKS", payload: array});
        setLoadingState("hidden");
        setResults("Найдено результатов: " + array.length);
      });
    }
  
    async function UpdateBook(query, category, sort, index = _index) {
      dispatch({type: "SET_PREV_QUERY", payload: [query, category, sort]})
      setLoadingState("visible");
      await get_results(query, category, sort, index).then((data) => {
        dispatch({type: "GET_BOOKS", payload: data[0]});
        setLoadingState("hidden");
        setResults("Найдено результатов: " + data[1]);
        setLoadBtn('visible');
      });
    }
  
    const bookList = books.map((d) => <BookCard id={d[4]} key={d[4]} imgSrc={d[3]} name={d[0]} category={d[1][0]} authors={d[2][0]} />);


    return(
        <header>
          <p className='header-p'>Поиск книг</p>
          <Form className="form" updateFunc = {UpdateBook}></Form>
          <h3>{results}</h3>
          <div className='list'>
            {bookList}
          </div>
          <div className='ldng' style={{visibility: loading}}></div>
          <div><input style={{visibility: loadBtn}} className='btn loadMore' type="button" onClick={loadMore} value="Загрузить еще"/></div>
        </header>
    );
}

export default Home;