// eslint-disable-next-line no-unused-vars
const styles = theme => ({
  listStyle: {
    backgroundColor: "#f1f1f1",
    padding: "15px 20px",
    margin: "5px 0",
    minHeight: "80px",
    fontSize: "0.5rem",
    display: "flex",
    flexWrap: "wrap"
  },
  listInfoButton: {
    backgroundColor: "grey",
    color: "white"
  },
  listHelpButton: {
    backgroundColor: "#e45755",
    color: "white"
  },
  dialogTitle: {
    fontSize: '2.4em',
    fontWeight: 800,
    margin: 0
  },
  dialogProceed: {
    padding: '12px 28px',
    borderRadius: '8px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
    color: 'white',
    fontSize: '1.2em',
    fontWeight: 'bold',
    textTransform: 'none',
    '&, &:hover': {
      backgroundColor: '#e35756'
    }
  },
  dialogCancel: {
    padding: '12px 28px',
    borderRadius: '8px',
    fontSize: '1.2em',
    fontWeight: 'bold',
    textTransform: 'none'
  }
});

export default styles;
