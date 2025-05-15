import './App.css';
import Navbar from '@/components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <img
        src="/favicon.svg"
        alt="favicon test"
        style={{
          width: '50px',
          height: '50px',
          display: 'inline-block',
          background: '#000',
        }}
      />
    </>
  );
};

export default App;
