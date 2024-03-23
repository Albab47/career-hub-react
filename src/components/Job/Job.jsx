import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;

  return (
    <div className="card card-compact border">
      {/* company logo img */}
      <figure className="self-start px-4 pt-8">
        <img src={logo} alt="logo" />
      </figure>
      
      <div className="card-body">
        <h2 className="card-title text-2xl font-extrabold">{job_title}</h2>
        <p className="text-xl font-medium text-[#757575]">{company_name}</p>
        <div className="space-x-4 mt-2">
          <button className="px-5 py-2 font-extrabold border text-[#7E90FE] border-[#7E90FE] rounded">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border text-[#7E90FE] border-[#7E90FE] rounded">
            {job_type}
          </button>
        </div>
        <div className="flex mt-4">
          <p className="flex gap-2 items-center text-[#757575] text-lg">
            <SlLocationPin className="size-5" /> {location}
          </p>
          <p className="flex gap-2 items-center text-[#757575] text-lg">
            <AiOutlineDollar className="size-5" /> {salary}
          </p>
        </div>
        <div className="card-actions mt-6">
          <Link to={`/job/${id}`}>
            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:scale-95 text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
