const RepoList = ({ repos }) => {
  return (
    <div>
      <h2 className="text-3xl mb-6">Repozitoriji</h2>
      {repos.map((repo) => (
        <p key={repo.id}>{repo.name}</p>
      ))}
    </div>
  );
};

export default RepoList;
