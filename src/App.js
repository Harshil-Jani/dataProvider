import './App.css';
import fakeDataProvider from 'ra-data-fakerest';
import { CoreAdminContext, useDataProvider } from 'ra-core';
import { useState, useEffect } from 'react';

const dataProvider = fakeDataProvider({
  posts: [
    { id: 0, title: 'Hello, world!' },
    { id: 1, title: 'FooBar' },
  ],
  comments: [
    { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
    { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
  ],
});

const UseGetOne = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const dataProvider = useDataProvider();
  useEffect(() => {
    dataProvider
      .getOne('posts', { id: 1 })
      .then(res => setData(res.data))
      .catch(e => setError(e));
  }, [dataProvider]);
  if (error) return <div data-testid="error">{error.message}</div>;
  if (data) return <div data-testid="data">{JSON.stringify(data)}</div>;
  return <div data-testid="loading">loading</div>;
};


function App() {
  dataProvider.getOne("posts", { id: 0 }).then((response) => { console.log(response) });
  return (
    <CoreAdminContext dataProvider={dataProvider}>
      <UseGetOne />
    </CoreAdminContext>
  );
}

export default App;
