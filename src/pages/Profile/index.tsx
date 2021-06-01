import React from 'react';


import { Container, Main, LeftSide, RightSide, Repos, CalendarHeading, RepoIcon, Tab } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className="content">
      <RepoIcon/>
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  )

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent/>
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={'rafaelpereira'}
            name={'Rafael Pereira'}
            avatarUrl={'https://avatars.githubusercontent.com/u/68617133?v=4'}
            followers={998}
            following={7}
            company={'Milennials'}
            location={'São José, Brazil'}
            email={'rafaelsantospereira03@gmail.com'}
            blog={'instagram.com/rafaelpereira'}
          />

        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent/>
            <span className="line"/>
          </Tab>

          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2 ,3 ,4 ,5 ,6].map(n => (
                <RepoCard
                  key={n}
                  username={'rafaelpereira'}
                  reponame={'milennials'}
                  description={'Contains all of my Youtube leasons code'}
                  language={n % 3 === 0 ? 'JavaScript' : 'Typescript'}
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar/>
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;