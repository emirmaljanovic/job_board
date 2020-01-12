import { getJobs } from './getJobs';

describe.only('#Details', () => {

  test('it returns data', async () => {
    const data = await getJobs();

    expect(data.length).toEqual(14);
    expect(data[0]).toEqual({
      id: 1,
      title: 'Frontend Developer',
      description: 'Comfortable with modern JS stack, experience with React.',
      employment_type: 'full_time'
    })
  });
});
