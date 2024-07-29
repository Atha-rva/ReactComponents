import React, { useState, useRef, useEffect } from "react";
import { useStyles } from "./style";


const options = Array.from({ length: 12 }, (_, i) => ({
  value: i + 1,
  label: `${i + 1} Month${i === 0 ? "" : "s"}`,
}));

const CustomDropdown: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (value: number, label: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const changeMonth = (direction: number) => {
    if (selectedValue !== null) {
      const currentIndex = options.findIndex(
        (option) => option.value === selectedValue
      );
      const nextIndex = currentIndex + direction;
      if (nextIndex >= 0 && nextIndex < options.length) {
        setSelectedValue(options[nextIndex].value);
      }
    } else if (direction === 1) {
      setSelectedValue(options[0].value);
    } else if (direction === -1) {
      setSelectedValue(options[options.length - 1].value);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes.dropdownContainer}>
      <label htmlFor="months-input" className={classes.label}>Months</label>
      <div
        className={classes.customDropdown}
        ref={dropdownRef}
        onClick={toggleDropdown}
      >
        <input
          type="text"
          id="months-input"
          className={classes.input}
          readOnly
          value={
            selectedValue !== null
              ? `${selectedValue} Month${selectedValue === 1 ? "" : "s"}`
              : ""
          }
        />
        <div className={classes.arrowButtons}>
          <button
            type="button"
            className={classes.arrowButton}
            onClick={() => changeMonth(1)}
          >
            ▲
          </button>
          <button
            type="button"
            className={classes.arrowButton}
            onClick={() => changeMonth(-1)}
          >
            ▼
          </button>
        </div>
        <div
          className={`${classes.dropdownMenu} ${isOpen ? "show" : ""}`}
          id="dropdown-menu"
        >
          {options.map((option) => (
            <div
              key={option.value}
              data-value={option.value}
              onClick={() => selectOption(option.value, option.label)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
