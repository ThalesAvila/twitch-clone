import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './../StreamCreate/StreamCreate';
import StreamDelete from './../StreamDelete/StreamDelete';
import StreamEdit from './../StreamEdit/StreamEdit';
import StreamList from './../StreamList/StreamList';
import StreamShow from './../StreamShow/StreamShow';
import Header from './../Header/Header';

const App = () => {
	return (
		<div className="ui container">
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit" exact component={StreamEdit} />
					<Route path="/streams/delete" exact component={StreamDelete} />
					<Route path="/streams/show" exact component={StreamShow} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
