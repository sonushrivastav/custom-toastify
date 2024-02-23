import { useEffect, useState } from "react";
import "./comp3.css";
const Comp3 = () => {
  const [seconds, setSeconds] = useState("");
  const [remainingSeconds, setRemainingSeconds] = useState(null);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(9); 

  const handleButtonClick = () => {
    if (!seconds || isNaN(parseInt(seconds)) || parseInt(seconds) > 10) {
      alert("Please enter a valid number of seconds (up to 10).");
      return;
    }
    setSeconds("")

    const maxSeconds = Math.min(parseInt(seconds), 10);
    setRemainingSeconds(maxSeconds);
    startCountdown(maxSeconds);
  };

  const startCountdown = (maxSeconds) => {
    const countdown = setInterval(() => {
      setRemainingSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(countdown);
          fetchProducts();
        }
        return prevSeconds - 1;
      });
    }, 1000);
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    if (remainingSeconds === null) return;
    if (remainingSeconds > 0) return;

    fetchProducts();
  }, [remainingSeconds]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>

    <div className="comp3">
      <input
        value={seconds}
        onChange={(e) => setSeconds(e.target.value)}
        type="number"
        className="input"
        max={10}
        min={0}
      />
      <button onClick={handleButtonClick} className="btn">
        Click
      </button>

      {remainingSeconds !== null && remainingSeconds > 0 && (
          <p className="timeremain"> {remainingSeconds} </p>
      )}
      <div className="grid-container">
          {currentProducts.map((product) => (
            <div key={product.id} className="card">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
    </div>
    
    </>
  );
};

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={number === currentPage ? "active" : ""}>
            <a onClick={() => paginate(number)} href="#!">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};


export default Comp3;
