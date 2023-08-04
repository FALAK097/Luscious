import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Search() {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  const handleInputChange = async (e) => {
    setInput(e.target.value);

    // Fetch search suggestions from Spoonacular API
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/autocomplete?apiKey=${process.env.REACT_APP_API_KEY}&number=5&query=${encodeURIComponent(e.target.value)}`
      );
      const data = await response.json();

      setSearchResults(data.map((item) => item.title));
    } catch (error) {
      console.error("Error fetching search suggestions:", error);
      setSearchResults([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSearchResults([]); // Clear suggestions when user selects one
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <SearchWrapper>
        <FaSearch />
        <input
          onChange={handleInputChange}
          type="text"
          value={input}
          placeholder="Search"
          list="suggestions"
        />
        <datalist id="suggestions">
          {/* Display the search suggestions */}
          {searchResults.map((suggestion, index) => (
            <option key={index} value={suggestion} onClick={() => handleSuggestionClick(suggestion)} />
          ))}
        </datalist>
      </SearchWrapper>
    </FormStyle>
  );
}

const FormStyle = styled.form`

  @media (min-width: 768px) {
    margin: 1rem 5rem;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  width: 100%;

  svg {
    color: #fff;
    font-size: 1.5rem;
  }

  input {
    border: none;
    background: transparent;
    font-size: 1.5rem;
    color: #fff;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    margin-left: 0.5rem;
    ::placeholder {
      color: #fff;
    }
  }

  @media (max-width: 767px) {
    input {
      padding-right: 1rem;
      ::placeholder {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 425px) {
    input {
      font-size: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default Search;
