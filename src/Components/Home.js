import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import backgroundImage from '../Components/images/adminbg.jpg';
import  showAllRestaurants  from '../Services/HomeServiceComponent';


const Try = () => {
  const { addItem } = useCart();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    showAllRestaurants.getAllRestaurants()
      .then((res) => {
        setProperties(res.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);



  return (
    <div className="container" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="row align-items-center">
    
      <div className="col-6 text-center d-flex align-items-center justify-content-center">
    <h1 className="text-dark"><b>Rentify</b></h1>
</div>

      </div>
      <div className="text-center">
  <div className="btn-group" role="group">
    <Link to="/addproperty" className="btn btn-primary">
      Add Property
    </Link>
    <Link to="/updateproperty" className="btn btn-primary">
      Update Property
    </Link>
    <Link to="/deleteproperty" className="btn btn-primary">
      Delete Property
    </Link>
  </div>
</div>

      <br />
      <br />
      <div className="row">
        {properties.map((property) => (
          <div className="col-lg-3 col-md-6 mb-4" key={property.propertyId}>
            <div className="card p-0 overfloe-hidden h-100 shadow">
              {/* Assuming 'images' is an array, render the first image */}
              <img src={`data:image/jpeg;base64,${property.image}`} alt={property.propertyId} />
              <div className="card-body d-flex flex-column">
                <h4 className="card-text">{property.propertyId}</h4>
                <h5 className="card-title">Type: {property.type}</h5>
                <h5 className="card-title">Area: {property.areaInSqrft} sqft</h5>
                <h5 className="card-title">Rate Per Sqft: ₹{property.ratePerSqrtft}</h5>
                <h5 className="card-title">Location: {property.location}</h5>
           
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Add Button */}
  
    </div>
  );
};

export default Try;
