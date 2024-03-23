import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="my-32">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Featured Jobs {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      {/* Featured jobs container */}
      <div className="grid grid-cols-2 gap-6 mt-8">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div
        className={`flex justify-center mt-10 ${
          dataLength === jobs.length && "hidden"
        }`}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:scale-95 text-white"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
