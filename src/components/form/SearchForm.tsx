import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState, type FormEvent } from 'react';
import { useToast } from '@/hooks/use-toast';

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);
  const { toast } = useToast();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === '') {
      toast({ description: 'Please enter a username' });
      return;
    }
    setUserName(text);
    localStorage.setItem('userName', JSON.stringify(text));
  };

  return (
    <header className="mx-auto max-w-6xl px-8">
      <h1 className="mb-4 text-3xl font-bold text-center">
        Search Github User
      </h1>
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 w-full max-w-lg mx-auto mb-8"
      >
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          type="text"
          placeholder="Enter username"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-grow bg-background p-2 rounded-md"
        />
        <Button type="submit" className="w-auto">
          Search
        </Button>
      </form>
    </header>
  );
};

export default SearchForm;
