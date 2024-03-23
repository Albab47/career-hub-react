const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("job-application");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplication = getStoredJobApplication();
  const isExist = storedJobApplication.find(jobId => jobId === id);
  if(!isExist) {
    storedJobApplication.push(id);
    localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
  }
};

export { saveJobApplication, getStoredJobApplication };
