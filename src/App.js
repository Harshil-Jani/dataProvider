import './App.css';
import fakeDataProvider from 'ra-data-fakerest';

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


function App() {
  dataProvider.getOne("posts", { id: 0 }).then((response) => { console.log(response) });
  return (
    <div className="App">
      <h1>See Console Log for Data </h1>
    </div>
  );
}

export default App;
