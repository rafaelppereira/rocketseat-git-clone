import React from 'react';
import { Link } from 'react-router-dom';

import { Container, BreadCrumb, RepoIcon, Stars, StarIcon, ForkIcon, LinkButton, GithubIcon } from './styles';

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon/>
        <Link className={'username'} to={'/rafaelpereira'}>
          rafaelpereira
        </Link>
        
        <span>/</span>

        <Link className={'reponame'} to={'/rafaelpereira/youtube-content'}>
          youtube-content
        </Link>
      </BreadCrumb>

      <p>Contains all of my Youtube lessons code.</p>
      
      <Stars>
        <li>
          <StarIcon/>
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon/>
          <b>0</b>
          <span>forks</span>
        </li>
      </Stars>

      <LinkButton href={'https://github.com/rafaelppereira/aulas'}>
        <GithubIcon/>
        <span>View on Github</span>
      </LinkButton>
    </Container>
  );
}

export default Repo;