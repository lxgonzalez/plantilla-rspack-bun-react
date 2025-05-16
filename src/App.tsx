import './App.css';
import Navbar from '@/components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline bg-amber-100">Hello world!</h1>
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
