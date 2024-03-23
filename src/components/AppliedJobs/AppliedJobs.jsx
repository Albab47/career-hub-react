import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter  = (filter) => {
    switch (filter) {
        case "remote": {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
            break;
        }
        case "onsite": {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJobs);
            break;
        }
    
        default:
            setDisplayJobs(appliedJobs);
            break;
    }
  }

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobApplied);
      setDisplayJobs(jobApplied)
    }
  }, [jobs]);

  return (
    <div>
      <h2>This is applied jobs page: {appliedJobs.length}</h2>

      <details className="dropdown">
        <summary className="m-1 btn">Filter by <IoIosArrowDown /> </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter()}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <a>On site</a>
          </li>
        </ul>
      </details>

      {/* applied jobs container */}
      <ul className="space-y-6 my-32">
        {displayJobs.map((job) => (
          <li
            className="flex items-center justify-between rounded-xl border p-6"
            key={job.id}
          >
            {/* left item */}
            <div className="flex gap-4">
              <div className="bg-gray-200 flex justify-center items-center px-6 rounded-lg w-60">
                <img src={job.logo} />
              </div>
              <div>
                <h2 className="card-title text-2xl font-extrabold">
                  {job.job_title}
                </h2>
                <p className="text-xl font-medium text-[#757575]">
                  {job.company_name}
                </p>
                <div className="space-x-4 mt-2">
                  <button className="px-5 py-2 font-extrabold border text-[#7E90FE] border-[#7E90FE] rounded">
                    {job.remote_or_onsite}
                  </button>
                  <button className="px-5 py-2 font-extrabold border text-[#7E90FE] border-[#7E90FE] rounded">
                    {job.job_type}
                  </button>
                </div>
                <div className="flex mt-4">
                  <p className="flex gap-2 items-center text-[#757575] text-lg">
                    <SlLocationPin className="size-5" /> {job.location}
                  </p>
                  <p className="flex gap-2 items-center text-[#757575] text-lg">
                    <AiOutlineDollar className="size-5" /> {job.salary}
                  </p>
                </div>
              </div>
            </div>
            {/* right item */}
            <div className="card-actions">
              <Link to={`/job/${job.id}`}>
                <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:scale-95 text-white">
                  View Details
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
