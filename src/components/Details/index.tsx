import { IData, getJobs } from '../../api/getJobs';
import { useParams } from 'react-router-dom';
import { PageBody } from '../Home/styledComponents';
import React, { FC, useEffect, useState } from 'react';
import { DetailsTitle, DetailsDescription } from './styledComponents';

interface IParams {

  id?: string
};

const Details: FC = () => {
  const params: IParams = useParams();
  const [job, setJob]: [IData|undefined, Function] = useState();

  /**
   * Mock API's GET /jobs/:id
   */
  useEffect(() => {
    getJobs()
      .then((data) => {
        const foundJob = data.find(({ id }) => id === Number(params.id));

        setJob(foundJob);
      });
  }, [params.id]);

  return (
    <PageBody>
      <DetailsTitle>{job?.title}</DetailsTitle>
      <DetailsDescription>
        {job?.description}
      </DetailsDescription>
    </PageBody>
  )
}

export default Details;