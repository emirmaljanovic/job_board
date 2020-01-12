import { PageBody } from './styledComponents';
import React, { FC, useEffect, useState } from 'react';
import ListItem from './ListItem';
import { IData, getJobs } from '../../api/getJobs';

const Home: FC = () => {
  const [jobs, setJobs]: [Array<IData>, Function] = useState([]);

  useEffect(() => {
    getJobs().then((data) => setJobs(data));
  }, []);

  const jobList = jobs.map(({ id, title, description, employment_type }, index) => (
    <ListItem
      jobId={id}
      title={title}
      key={`job-item-${id}`}
      description={description}
      employment_type={employment_type}
    />
  ));

  return (
    <PageBody>
      <ul>
        {jobList}
      </ul>
    </PageBody>
  );
};

export default Home;