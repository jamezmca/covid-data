import { useFetchData } from "./hooks/fetchData";

function App() {
  const url = 'https://covid19.mathdro.id/api/countries'
  const { data, error, loading } = useFetchData(url)
  console.log(data, error, loading)

  if (loading) { return <div>Loading...</div> }

  if (error) { return <div>Bugger...</div> }

  return (
    <div className="App">
      {data && data.reduce((acc, curr) => {
        return acc + ' ' + curr
      }, '')}
    </div>
  );
}

export default App;
