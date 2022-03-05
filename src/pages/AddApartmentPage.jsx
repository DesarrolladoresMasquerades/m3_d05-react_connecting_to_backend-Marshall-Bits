import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddApartmentPage() {
    const [formData, setFormData] = useState({
        title: "Loading data...",
        pricePerDay: 0,
    });
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post(
                `https://ironbnb-m3.herokuapp.com/apartments/`,
                formData
            )
            .then((newData) => navigate(`/`))
            .catch((error) => navigate(`/`));
    }

    function handleChange(event) {
        // event.preventDefault()
        const inputName = event.target.name;
        const value = event.target.value;
        setFormData((formData) => {
            return { ...formData, [inputName]: value };
        });
    }

    return (
        <div className="AddApartmentPage">
            <h3>Create apartment</h3>

            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    placeholder="Title"
                />

                <label>Price per Day</label>
                <input
                    type="number"
                    name="pricePerDay"
                    onChange={handleChange}
                    placeholder="Price per day"
                />

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );

}