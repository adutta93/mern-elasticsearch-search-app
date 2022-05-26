import { useState, useEffect } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import Card from './Components/Card/Card';
import axios from 'axios';
import './App.css';

function App() {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState('');

	const onChangeHandler = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await axios.get(`http://localhost:1993/api/search?content=${search}`);
		setData(response.data.contents);
		console.log(response);
	};
	return (
		<div className='__app'>
			<div className='__search_wrapper'>
				{' '}
				<Searchbar search={search} data={data} onChangeHandler={onChangeHandler} name='search' />
				<div className='__card_wrapper'>
					{data?.map((item) => {
						if (
							item?._source?.title.includes(search) ||
							item?._source?.tags.includes(search) ||
							item?._source?.notes.includes(search)
						)
							return <Card source={item?._source} />;
					})}
				</div>
			</div>
		</div>
	);
}

export default App;
