import { useQuery } from '@apollo/client';
import { GET_USER } from '@/queries';
import { UserData } from '@/types';
import Loading from '../ui/Loading';
import UserCard from './UserCard';
import StatsContainer from './StatsContainer';
import ForkedRepos from '../charts/ForkedRepos';
import PopularRepos from '../charts/PopularRepos';
import UsedLanguages from '../charts/UsedLanguages';

const UserProfile = ({ userName }: { userName: string }) => {
  const { data, loading, error } = useQuery<UserData>(GET_USER, {
    variables: { login: userName },
  });

  if (loading) return <Loading />;
  if (error) return <h2 className="text-xl">{error.message}</h2>;
  if (!data) return <h2 className="text-xl capitalize">user not found</h2>;

  const {
    name,
    avatarUrl,
    bio,
    url,
    repositories,
    followers,
    following,
    gists,
  } = data.user;

  return (
    <div>
      <UserCard name={name} bio={bio} url={url} avatarUrl={avatarUrl} />
      <StatsContainer
        totalRepos={repositories.totalCount}
        following={following.totalCount}
        followers={followers.totalCount}
        gists={gists.totalCount}
      />
      {repositories.totalCount > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          <UsedLanguages repositories={repositories.nodes} />
          <PopularRepos repositories={repositories.nodes} />
          <ForkedRepos repositories={repositories.nodes} />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
