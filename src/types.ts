export type LanguageEdge = {
  node: {
    name: string;
  };
  size: number;
};

export type Repository = {
  name: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
  url: string;
  languages: {
    edges: LanguageEdge[];
  };
};

export type RepoCount = { repos: string; count: number };

export type User = {
  name: string;
  avatarUrl: string;
  bio: string;
  url: string;
  repositories: {
    totalCount: number;
    nodes: Repository[];
  };
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  gists: {
    totalCount: number;
  };
};

export type UserData = {
  user: User;
};

export type UserCardProps = {
  name: string;
  avatarUrl: string;
  bio: string;
  url: string;
};

export type StatsCardProps = {
  title: string;
  count: number;
};

export type StatsContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};
