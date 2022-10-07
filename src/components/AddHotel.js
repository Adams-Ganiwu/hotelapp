import { useState } from 'react';
import NavBar  from '../components/NavBar';
import Footer from "../components/Footer"

function AddHotel({ submit }) {

  const [hotel, setAddHotel] = useState({
    hotelname: "",
    location: "",
    category: "",
      facilities: "",
      numbofroomsinahotel: "",
      address: "",
      contact: "",
      image: "",
  });

  const handler = (event) => {
    setAddHotel((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleForm = (e) => {
    e.preventDefault();
    submit(hotel);
  };
  return (
    <div>
      
      <NavBar />
      <div className="formContainer">
        <h3>Add New Hotel</h3>
        <form>
          <fieldset>
            <legend>Hotel Data</legend>
            <div className="names">
              <div className="N">
                <label>
                  hotelname
                  <input
                    name="name"
                    value={hotel.hotelname}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
            <div className="names">
              <div className="W">
                <label>
                  location
                  <input
                    name="work"
                    value={hotel.location}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="Y">
                <label>
                  {" "}
                  category
                  <input
                    name="category"
                    type="text"
                    value={hotel.category}
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  facilities
                  <input
                    name="facilities"
                    value={hotel.facilities}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  numbofroomsinahotel
                  <input
                    name="numbofroomsinahotel"
                    value={hotel.numbofroomsinahotel}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  address
                  <input
                    name="address"
                    value={hotel.address}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
              <div className="L">
                <label>
                  contact
                  <input
                    name="contact"
                    value={hotel.contact}
                    type="text"
                    onChange={handler}
                  />
                </label>
              </div>
            </div>
          </fieldset>
          <button className="form" onClick={handleForm}>
            Add new Hotel
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddHotel;