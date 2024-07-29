import { makeStyles, shorthands } from '@griffel/react';

export const useStyles = makeStyles({
  dropdownContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '200px',
    margin: '20px',
  },
  label: {
    marginBottom: '8px',
    fontSize: '14px',
    color: '#333',
  },
  customDropdown: {
    display: 'flex',
    alignItems: 'center',
    ...shorthands.border('1px', 'solid', '#ccc'),
    ...shorthands.borderRadius('4px'),
    padding: '10px',
    fontSize: '16px',
    background: '#fff',
    position: 'relative',
  },
  input: {
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '16px',
    height:'40px'
  },
  arrowButtons: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5px',
  },
  arrowButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    fontSize: '12px',
    lineHeight: 1,
    ':focus': {
      outline: 'none',
    },
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    ...shorthands.border('1px', 'solid', '#ccc'),
    ...shorthands.borderRadius('4px'),
    background: '#fff',
    maxHeight: '200px',
    overflowY: 'auto',
    display: 'none',
    zIndex: 1000,
  },
  dropdownMenuShow: {
    display: 'block',
  },
  dropdownMenuItem: {
    padding: '10px',
    cursor: 'pointer',
    ':hover': {
      background: '#f0f0f0',
    },
  },
});