import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CountryList() {
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const apiFetch = async () => {
            try {
                const res = await fetch("https://countriesnow.space/api/v0.1/countries");
                if (!res.ok) throw new Error(`Http code: ${res.status}`);
                const json = await res.json();
                setCountries(json.data);
            } catch (e) {
                console.log("Error:", e);
                setError("Fetch error");
            } finally {
                setLoading(false);
            }
        };
        apiFetch();
    }, []);

    return (
        <>
            {loading && <p>Dang tai du lieu....</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && (
                <ol>
                    {countries.map(c => (
                        <li key={c.country}>
                            <Link to={`/country/${encodeURIComponent(c.country)}`}>{c.country}</Link>
                        </li>
                    ))}
                </ol>
            )}
        </>
    );
}