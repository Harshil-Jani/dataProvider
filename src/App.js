import './App.css';
import fakeDataProvider from 'ra-data-fakerest';
import { CoreAdminContext, useDataProvider, useGetOne } from 'ra-core';
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

const UseGetOneHookExample = () => {
  const { data, error, loading } = useGetOne('posts', { id: 1 });
  if (error) return <div data-testid="error">{error.message}</div>;
  if (loading) return <div data-testid="loading">loading</div>;
  return <div data-testid="data">{JSON.stringify(data)}</div>;
};


function App() {
  dataProvider.getOne("posts", { id: 0 }).then((response) => { console.log(response) });
  return (
    // Every application will be wrapped in a CoreAdminContext to make sure we have the hooks available
    // For now it seems like wrapping the application with a CoreAdminContext is not too much of a hassle.
    <CoreAdminContext dataProvider={dataProvider}>
      {/* this is when you don't wnat to use hooks */}
      <UseGetOne />

      {/* Example with inbuilt hooks -> makes the code quite consice */}
      <UseGetOneHookExample />
    </CoreAdminContext>
  );
}

export default App;
