import { useState } from 'react';
import SearchForm from './components/form/SearchForm';
import UserProfile from './components/user/UserProfile';

const App = () => {
  const [userName, setUserName] = useState('');

  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchForm userName={userName} setUserName={setUserName} />
      {userName ? (
        <UserProfile userName={userName} />
      ) : (
        <div>
          <h3 className="text-md font-medium text-center">
            No User Found. Enter Username to see profile details
          </h3>
        </div>
      )}
    </main>
  );
};

export default App;
