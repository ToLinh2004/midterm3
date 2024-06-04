import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className="card text-left">
        <a href={repo.html_url} target="_blank"
rel="noopener noreferrer" alt="" className='text-success'>
          {repo.name}
        </a>
      <p>{repo.description}</p>
    </div>
  );
};

export default RepoItem;