import React, { useState } from 'react';
import './AutoSuggestion.css'; 

interface Suggestion {
  id: number;
  value: string;
}

const AutoSuggest: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [showMore, setShowMore] = useState<boolean>(false);

  const fruits: string[] = [
    "Apple",
    "Banana",
    "Orange",
    "Grapes",
    "Strawberry",
    "Mango",
    "Pineapple",
    "Kiwi",
    "Blueberry",
    "Cherry",
    "Papaya",
    "Watermelon",
    "Lemon",
    "Peach",
    "Orange",
    "Pear",
    "Pomegranate",
    "Papaya",
    "Pineapple",
    "Pomegranate",
    "Papaya",
    "Pineapple",
    "Pomegranate",
    "Papaya",
    "Pineapple",
    "Cherry",
    'Guava',
  ];
  const fruitSuggestions: Suggestion[] = fruits.map((fruit, index) => ({
    id: index + 1,
    value: fruit,
  }));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    // Filter suggestions based on input
    const filteredSuggestions = fruitSuggestions.filter((suggest) =>
      suggest.value.toLowerCase().includes(term.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (value: string) => {
    setSearchTerm(value);
    setSuggestions([]);
  };

  const handleViewMoreClick = () => {
    setShowMore(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Filter suggestions based on input when Enter is pressed
      const filteredSuggestions = fruitSuggestions.filter((suggest) =>
        suggest.value.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        className="search-input"
      />
      <div className="search-icon">
        <i className="fas fa-search"></i>
      </div>
      <ul>
        {suggestions.slice(0, showMore ? suggestions.length : 5).map((suggest) => (
          <li key={suggest.id} onClick={() => handleSuggestionClick(suggest.value)}>
            {suggest.value}
          </li>
        ))}
      </ul>
      {!showMore && suggestions.length > 5 && (
        <button onClick={handleViewMoreClick}>View more</button>
      )}
    </div>
  );
};

export default AutoSuggest;
