import { useState, useEffect } from "react";
import axios from "axios";
import backgroundImage from "../Components/images/adminbg.jpg";
import { Link, useNavigate } from "react-router-dom";

function UpdateProperty() {
  const [propertyId, setPropertyId] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null); // Changed to null as initial state
  const [type, setType] = useState("");
  const [areaInSqrft, setAreaInSqrft] = useState("");
  const [ratePerSqrtft, setRatePerSqrtft] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [propertyAmenities, setPropertyAmenities] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:9090/api/v1/getRestarauntById/${restaurant_id}`
        );
        const property = response.data; // Assuming response is in JSON format
        setLocation(property.location);
setImage(property.image);
setType(property.type);
setAreaInSqrft(property.areaInSqrft);
setRatePerSqrtft(property.ratePerSqrtft);
setContactDetails(property.contactDetails);
setPropertyAmenities(property.propertyAmenities);
setPrice(property.price);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch restaurant data when component mounts
    fetchRestaurantData();
  }, [restaurant_id]);

  async function save(event) {
    event.preventDefault();

    try {
      await axios.post("http://localhost:9090/api/v1/updaterestaurant", {
         propertyId,
        location,
        image,
        type,
         areaInSqrft,
         ratePerSqrtft,
         contactDetails,
         propertyAmenities,
      });
      alert("Restaurant updated successfully");
      navigate("/adminhome");
    } catch (err) {
      alert(err.message);
    }
  }

    return (
      <div
        className=""
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          minWidth: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form className="form-control-lg">
          <h1>
            <b>Update Property</b>
            <br />
            <br />
          </h1>
          <table className="table table-hover table-bordered table-light table-striped ">
            <tbody>
              <tr>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Property Id"
                    value={propertyId}
                    required
                    onChange={(event) => {
                      setPropertyId(event.target.value);
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Property Type"
                    value={type}
                    required
                    onChange={(event) => {
                      setType(event.target.value);
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                    value={location}
                    required
                    onChange={(event) => {
                      setLocation(event.target.value);
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter area In Sqrft"
                    value={areaInSqrft}
                    required
                    onChange={(event) => {
                      setAreaInSqrft(event.target.value);
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Price per Sqrft"
                    value={ratePerSqrtft}
                    required
                    onChange={(event) => {
                      setRatePerSqrtft(event.target.value);
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(event) => setImage(event.target.files[0])}
                  />
                </th>
              </tr>
              <tr>
                <th>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Property Amenities"
                    value={propertyAmenities}
                    required
                    onChange={(event) => {
                      setPropertyAmenities(event.target.value);
                    }}
                  />
                </th>
              </tr>
              <tr>
                <th colSpan={2}>
                  <button
                    type="submit"
                    value="Login"
                    className="form-control btn btn-primary rounded submit px-3 btn-dark text-white"
                    onClick={save}
                  >
                    <b>Add</b>
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
  );
}

export default UpdateProperty;
