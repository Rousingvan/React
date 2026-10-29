import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CountryDetail() {
    const { name } = useParams();
    const [info, setInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries")
            .then(res => res.json())
            .then(json => setInfo(json.data.find(c => c.country === name)))
            .finally(() => setLoading(false));
    }, [name]);

    if (loading) return <p>Dang tai...</p>;
    if (!info) return <p>Khong tim thay {name}</p>;

    return (
        <>
            <Link to="/country">← Quay lại</Link>
            <h2>{info.country} ({info.iso2})</h2>
            <h3>Thành phố ({info.cities.length}):</h3>
            <ul>
                {info.cities.map(city => <li key={city}>{city}</li>)}
            </ul>
        </>
    );
}