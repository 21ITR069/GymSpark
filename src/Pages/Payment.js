import React from 'react';
import paay from "../Pages/GooglePay_QR.png";

function PaymentForm() {
  const largerImageStyle = {
    width: '100%', // Set the width to 100% to make the image larger
    height: 'auto', // Maintain the image's aspect ratio
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Payment Details</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-7">
              <form>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    placeholder="**** **** **** ****"
                    required
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="expirationDate" className="form-label">Exp Date</label>
                    <input
                      type="text"
                      className="form-control"
                      id="expirationDate"
                      placeholder="MM/YY"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input
                      type="password"
                      className="form-control"
                      id="cvv"
                      placeholder="123"
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="cardholderName" className="form-label">Cardholder's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardholderName"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="cardType" className="form-label">Card Type</label>
                  <select className="form-select" id="cardType" required>
                    <option value="" disabled>Select Card Type</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Visa">Visa</option>
                    <option value="AmericanExpress">American Express</option>
                  </select>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">pay 299/month</button>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <img src={paay} alt="Payment Image" style={largerImageStyle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
