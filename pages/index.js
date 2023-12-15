import ISSTracker from "../components/ISSTracker";
import useSWR from "swr";

export default function App() {
  return <ISSTracker />;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR("/api/iss-data", fetcher);

  return(
<div>
      <h1>ISS Tracker</h1>

      {isLoading && <div>Loading...</div>}

  
      {error && <div>oops.. error!</div>}


      {data && (
        <div>
          <p>Longitude: {data.longitude}</p>
          <p>Latitude: {data.latitude}</p>
        </div>
      )}

  
    </div>
  );
}