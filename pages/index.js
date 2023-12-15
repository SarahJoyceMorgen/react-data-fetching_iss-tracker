import ISSTracker from "../components/ISSTracker";
import useSWR from "swr";

export default function App() {
  return <ISSTracker />;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR("/api/iss-data", {
    fetcher,
    refreshInterval: 5000
  });


  if (isLoading) {
    return <div>Loading...</div>;
  }


  if (error) {
    return <div>Opps...error!</div>;
  }


  if (!data) {
    return <div>no data</div>;
  }


  return (
    <div>
      <p>Longitude: {data.longitude}</p>
      <p>Latitude: {data.latitude}</p>
      <button onClick={() => mutate()}>Refresh</button>
    </div>
  );
}