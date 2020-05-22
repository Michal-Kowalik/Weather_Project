import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
    state = {
        city: ""
    };

    onSubmit = e => {
        e.preventDefault();
        if (this.state.city === "") {
            alert("Pole nie może być puste");
        } else {
            this.props.searchCity(this.state.city);
        }

        this.setState({ city: "" });
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBarChilds">
                    <h5 className="text-white">Pogoda w Twoim mieście</h5>

                    <form onSubmit={this.onSubmit} className="formSearchCity">
                        <input
                            type="text"
                            name="city"
                            id="inputSearchCity"
                            onChange={this.onChange}
                            placeholder="Wpisz miasto"
                        />
                        <button type="submit" className="btn btn-outline-info text-white">
                            Szukaj
            </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;